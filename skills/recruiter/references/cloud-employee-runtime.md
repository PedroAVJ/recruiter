# Cloud employee runtime

The employee's chosen provider determines its execution surface. A visible
employee is not required to be a native Codex task.

## OpenAI employees

Create a Codex task with the approved OpenAI model and reasoning effort. Use
the exact visible employee title as the task title. Read back the created task's
model, effort, and title before calling the hire complete.

## Claude employees

Run Claude employees through Claude Remote Control, which exposes local Claude
Code sessions to claude.ai/code and the Claude mobile app while inference runs
on the selected Anthropic cloud model.

Exactly three shared Remote Control servers provide the persistent namespaces:

- Chat for non-project employees
- TradeInCode for TradeInCode work
- Avanza Control for Avanza Control work

A server is a namespace and shared execution pool. A named session on that
server is the employee. Never create a fourth server, a per-employee
`LaunchAgent`, or a separate `claude remote-control` supervisor.

### Discover an existing Claude employee

Claude employees do not appear in the Codex task list. Discover them through
the existing Claude CLI in this order:

1. List the live namespaces with `launchctl list` and identify the matching
   `com.pedro.claude-remote-control.chat`, `.tradeincode`, or
   `.avanza-control` service.
2. Read that service with `launchctl print gui/$(id -u)/<label>` to establish
   its working directory. From that directory, run `claude --resume` and use
   the CLI session picker to find the exact visible employee title.
3. Once the picker provides the selected session's current UUID, resume it
   non-interactively with `claude --print --output-format json --resume <uuid>`
   for the requested work. Verify the returned `modelUsage` names the approved
   backend model.

The visible title and live namespace identify the employee. A session UUID is
only a transient handle for the current CLI invocation: never store it in this
plugin, a role contract, or a source file.

### Registered Claude employee

- `👨🏻‍🔬 Lexical Taxonomist` lives in the Chat namespace. Its scope is maintaining
  terminology and lexical taxonomies, including exact Unicode RGI human emoji
  for AI-employee titles; it recommends mappings and does not alter plugins or
  employee roles on its own.

1. Discover the three live shared services with `launchctl`; do not rely on a
   stale PID or cached session identifier.
2. Choose the existing server whose namespace owns the employee's work.
3. Create a named session on that server with the exact visible employee title.
4. Keep a role contract in a stable subdirectory when useful, and explicitly
   tell the session to read and follow it. A subdirectory is employee context,
   not a server boundary.
5. Pin the exact approved Claude model for that session without changing the
   shared server's defaults or the user's global Claude default.
6. Verify the shared service is running, the named session exists on it, its
   displayed title is exact, and its spawned child command or backend
   model-usage record names the approved model.

The three shared services prove only that the namespaces are available; they
do not prove a particular employee session exists or uses its approved model.
Do not hardcode a session ID, access token, port, PID, or transient cloud work
ID into the plugin or a role contract.

Do not create an OpenAI task that merely instructs itself to impersonate or
relay a Claude employee. If the named session does not exist on the selected
shared server, or if its approved Claude model cannot be verified, the hire is
incomplete.
