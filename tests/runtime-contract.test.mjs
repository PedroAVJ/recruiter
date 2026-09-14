import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { classify, evaluate, parseArgs } from "../scripts/audit-claude-runtime.mjs";

test("manifests and package stay version aligned", () => {
  const codex = JSON.parse(readFileSync(new URL("../.codex-plugin/plugin.json", import.meta.url)));
  const claude = JSON.parse(readFileSync(new URL("../.claude-plugin/plugin.json", import.meta.url)));
  const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url)));
  assert.equal(codex.version, "0.6.7");
  assert.equal(claude.version, codex.version);
  assert.equal(pkg.version, codex.version);
});

test("runtime contract distinguishes the standalone flag from shared servers", () => {
  const contract = readFileSync(
    new URL("../skills/recruiter/references/cloud-employee-runtime.md", import.meta.url),
    "utf8",
  );
  assert.match(contract, /`claude --remote-control` starts one standalone/);
  assert.match(contract, /`sdk-cli` child/);
  assert.match(contract, /Never use it to provision an employee/);
  assert.match(contract, /Chat for non-project employees/);
  assert.match(contract, /Near for Near work/);
  assert.match(contract, /Never use Chat as a fallback for a project employee/);
});

test("audit accepts the Near project namespace", () => {
  const expected = parseArgs([
    "--title",
    "Employee",
    "--bridge-session-id",
    "session_01Near",
    "--namespace",
    "near",
    "--model",
    "claude-fable-5-1",
  ]);
  assert.equal(expected.namespace, "near");
});

test("audit accepts one shared child and rejects standalone duplicates", () => {
  const expected = parseArgs([
    "--title",
    "Employee",
    "--bridge-session-id",
    "session_01Employee",
    "--namespace",
    "chat",
    "--model",
    "claude-fable-5-1",
  ]);
  const server = { namespace: "chat", pid: 100 };
  const shared = {
    bridgeSessionId: "session_01Employee",
    command: "claude --print --model claude-fable-5-1",
    entrypoint: "sdk-cli",
    name: "Employee",
    pid: 101,
    ppid: 100,
  };
  assert.equal(classify(shared, server, shared.ppid), "shared");
  assert.equal(evaluate(expected, server, [shared]).ok, true);
  assert.equal(
    evaluate(expected, server, [shared, { ...shared, entrypoint: "cli", pid: 102 }]).ok,
    false,
  );
});

test("audit correlates a renamed cloud session with its derived local process name", () => {
  const expected = {
    bridgeSessionId: "session_01Employee",
    model: "claude-fable-5-1",
    namespace: "chat",
    title: "👨🏻‍💼 Technical Product Manager",
  };
  const server = { namespace: "chat", pid: 100 };
  const candidate = {
    bridgeSessionId: "session_01Employee",
    command: "claude --print --model claude-fable-5-1",
    entrypoint: "sdk-cli",
    name: "apps-73",
    pid: 101,
    ppid: 100,
  };
  assert.equal(evaluate(expected, server, [candidate]).ok, true);
});
