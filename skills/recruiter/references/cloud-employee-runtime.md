# Cloud employee runtime

The employee's chosen provider determines its execution surface. A visible
employee is not required to be a native Codex task.

## OpenAI general-purpose employees

Create a Codex task with the approved OpenAI model and reasoning effort. Use
the exact visible employee title as the task title. Read back the created task's
model, effort, and title before calling the hire complete.

## GPT Image 2.5 work

GPT Image 2.5 is an image-generation runtime, not a Codex task model or a
conversational employee. Use an image-generation surface only when it can
establish the selected GPT Image 2.5 identity. The current Codex image tool
does not expose a model selector, so it cannot establish that identity on its
own; report that limitation rather than claiming an exact model.

## Gemini employees

Run Gemini employees through the installed native Gemini route, not a Codex
task or a Claude session. Require an explicit `gemini-3.8-flash` selection and
final response usage metadata that confirms the same model; reject any fallback
or mixed-model run. The current native route does not expose exact reasoning
effort, so do not create an effort-bound Gemini role or report an invented
effort.

## Claude employees

Run Claude employees through Claude Remote Control, which exposes local Claude
Code sessions to claude.ai/code and the Claude mobile app while inference runs
on the selected Anthropic cloud model.

For a Claude Fable 5.1 employee selected by the human text-verification picker,
pin `medium` reasoning effort.

Exactly four shared Remote Control servers provide the persistent namespaces:

- Chat for non-project employees
- Near for Near work (the repository is still stored at `Developer/PedroAVJ/Apps`)
- TradeInCode for TradeInCode work
- Avanza Control for Avanza Control work

Never use Chat as a fallback for a project employee. A missing project server
means provisioning is incomplete; create or repair the project namespace before
creating the employee session.

A server is a namespace and shared execution pool. A named session on that
server is the employee. Never create an additional server, a per-employee
`LaunchAgent`, or a separate `claude remote-control` supervisor.

### Create a Claude employee on a shared server

The two Claude entry points are different products:

- `claude remote-control` runs a persistent, multi-session server. The three
  approved LaunchAgents already own these servers.
- `claude --remote-control` starts one standalone interactive session. It does
  not join, register with, or become owned by an existing server, even when run
  from the same directory. Never use it to provision an employee.

Create the employee through the signed-in Claude Code client instead:

1. Verify the selected shared LaunchAgent is running and record its PID and
   working directory.
2. Open Claude Code in the existing signed-in Chrome profile. In the new-session
   composer, select the environment backed by that shared server.
3. Set the exact approved model and effort in the client controls before the
   first prompt.
4. Send the opening instruction naming the role, its installed role plugin, its
   scope, and its configured model and effort.
5. Rename that cloud session to the exact employee title when the derived title
   differs.
6. Run `node scripts/audit-claude-runtime.mjs --title "<exact title>"
   --namespace <chat|near|tradeincode|avanza-control> --model claude-fable-5-1`.
   The candidate must be an `sdk-cli` child whose parent PID is the selected
   shared server. An `entrypoint` of `cli`, a different parent PID, or a
   `claude --remote-control` process is a failed provisioning attempt.
7. Verify the visible Claude page shows the exact title, selected environment,
   model, and effort. A model's prose claim is not verification.

A standalone conversation cannot be migrated into a running multi-session
server by resuming it with `claude --remote-control`; that only creates another
standalone process. Never replace a conversation with user-authored project
history by an empty session in Chat. For an authorized repair, first restore the
original transcript to its project directory and keep that exact conversation
reachable. Add or repair the matching shared project server for future sessions.
Only retire a standalone conversation after Pedro explicitly accepts a verified
history-preserving replacement. Never delete the conversation merely to clean
the session list.

### Discover an existing Claude employee

Claude employees do not appear in the Codex task list. Discover them through
the existing Claude CLI in this order:

1. List the live namespaces with `launchctl list` and identify the matching
   `com.pedro.claude-remote-control.chat`, `.near`, `.tradeincode`, or
   `.avanza-control` service.
2. Read that service with `launchctl print gui/$(id -u)/<label>` to establish
   its PID and working directory.
3. Run `node scripts/audit-claude-runtime.mjs --title "<exact title>"
   --namespace <namespace> --model <model>` and require exactly one matching
   shared-server child.
4. Open that session from Claude Code and verify its visible title, environment,
   model, and effort before routing work to it.

The visible title and live namespace identify the employee. A session UUID is
only a transient handle for the current CLI invocation: never store it in this
plugin, a role contract, or a source file.

### Registered Claude employee

- `👨🏻‍🔬 Lexical Taxonomist` lives in the Chat namespace. Its scope is maintaining
  terminology and lexical taxonomies, including exact Unicode RGI human emoji
  for AI-employee titles; it recommends mappings and does not alter plugins or
  employee roles on its own.

1. Discover the four live shared services with `launchctl`; do not rely on a
   stale PID or cached session identifier.
2. Choose the existing server whose namespace owns the employee's work.
3. Create one named session from the Claude client after selecting that server's
   environment. Do not run `claude --remote-control`.
4. Keep a role contract in a stable subdirectory when useful, and explicitly
   tell the session to read and follow it. A subdirectory is employee context,
   not a server boundary.
5. Set the exact employee title in the cloud session after creation.
6. Pin the exact approved Claude model and effort in the client before the
   first prompt without
   changing the shared server's defaults or the user's global Claude default.
7. State those configured values in the opening instruction; never ask the
   employee to infer them.
8. Verify the cloud page's title, environment, model, and effort.
9. Run the runtime audit and require one `sdk-cli` child of the selected shared
   server, the exact title, and the approved model. Reject standalone `cli`
   sessions even when they are reachable from Claude Code.

The four shared services prove only that the namespaces are available; they
do not prove a particular employee session exists or uses its approved model.
Do not hardcode a session ID, access token, port, PID, or transient cloud work
ID into the plugin or a role contract.

Do not create an OpenAI task that merely instructs itself to impersonate or
relay a Claude employee. If the named session does not exist on the selected
shared server, or if its approved Claude model cannot be verified, the hire is
incomplete.
