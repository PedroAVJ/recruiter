#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const labels = {
  chat: "com.pedro.claude-remote-control.chat",
  near: "com.pedro.claude-remote-control.near",
  tradeincode: "com.pedro.claude-remote-control.tradeincode",
  "avanza-control": "com.pedro.claude-remote-control.avanza-control",
};

export function parseArgs(argv) {
  const parsed = {};
  for (let index = 0; index < argv.length; index += 2) {
    const key = argv[index];
    const value = argv[index + 1];
    if (!["--title", "--bridge-session-id", "--namespace", "--model"].includes(key) || !value) {
      throw new Error("Usage: audit-claude-runtime.mjs --title <title> --bridge-session-id <session_id> --namespace <namespace> --model <model>");
    }
    parsed[key.slice(2)] = value;
  }
  if (!parsed.title || !/^session_[A-Za-z0-9]+$/.test(parsed["bridge-session-id"] ?? "") || !parsed.namespace || !parsed.model || !labels[parsed.namespace]) {
    throw new Error("Usage: audit-claude-runtime.mjs --title <title> --bridge-session-id <session_id> --namespace <chat|near|tradeincode|avanza-control> --model <model>");
  }
  const { ["bridge-session-id"]: bridgeSessionId, ...expected } = parsed;
  return { ...expected, bridgeSessionId };
}

function command(name, args) {
  return execFileSync(name, args, { encoding: "utf8" });
}

function service(namespace) {
  const output = command("launchctl", ["print", `gui/${process.getuid()}/${labels[namespace]}`]);
  const pid = Number(output.match(/^\s*pid = (\d+)$/m)?.[1]);
  const cwd = output.match(/^\s*working directory = (.+)$/m)?.[1];
  if (!pid || !cwd) throw new Error(`Shared ${namespace} server is not running`);
  return { cwd, label: labels[namespace], namespace, pid };
}

function parentPid(pid) {
  return Number(command("ps", ["-o", "ppid=", "-p", String(pid)]).trim());
}

function processCommand(pid) {
  return command("ps", ["-o", "command=", "-p", String(pid)]).trim();
}

export function classify(session, selectedService, ppid) {
  if (session.entrypoint === "sdk-cli" && ppid === selectedService.pid) return "shared";
  if (session.entrypoint === "cli") return "standalone";
  return "other";
}

function sessions() {
  const directory = join(homedir(), ".claude", "sessions");
  if (!existsSync(directory)) return [];
  return readdirSync(directory)
    .filter((name) => name.endsWith(".json"))
    .flatMap((name) => {
      try {
        const session = JSON.parse(readFileSync(join(directory, name), "utf8"));
        process.kill(session.pid, 0);
        if (session.kind !== "interactive" || !session.bridgeSessionId) return [];
        return [{ ...session, ppid: parentPid(session.pid) }];
      } catch {
        return [];
      }
    });
}

export function evaluate(expected, selectedService, candidates) {
  // A shared child keeps its derived local process name after the cloud session
  // is renamed. Correlate the current Claude page by its bridge session ID;
  // the live client remains authoritative for the exact visible title.
  const matchingSession = candidates.filter(
    (session) => session.bridgeSessionId === expected.bridgeSessionId,
  );
  const selected = matchingSession.filter(
    (session) => classify(session, selectedService, session.ppid) === "shared",
  );
  const standalone = matchingSession.filter((session) => session.entrypoint === "cli");
  const modelFailures = selected.filter(
    (session) => !session.command.includes(`--model ${expected.model}`),
  );
  return {
    ok: selected.length === 1 && standalone.length === 0 && modelFailures.length === 0,
    selected,
    standalone,
    modelFailures,
  };
}

function main() {
  const expected = parseArgs(process.argv.slice(2));
  const selectedService = service(expected.namespace);
  const candidates = sessions().map((session) => ({
    bridgeSessionId: session.bridgeSessionId,
    command: processCommand(session.pid),
    entrypoint: session.entrypoint,
    name: session.name,
    pid: session.pid,
    ppid: session.ppid,
  }));
  const result = evaluate(expected, selectedService, candidates);
  process.stdout.write(`${JSON.stringify({ expected, service: selectedService, ...result }, null, 2)}\n`);
  if (!result.ok) process.exitCode = 1;
}

if (import.meta.url === `file://${process.argv[1]}`) main();
