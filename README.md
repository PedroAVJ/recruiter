# Recruiter

A plugin for direct AI staffing decisions, role design, and employee
performance review. First classify a role's primary tasks as machine- or
human-verifiable. Machine-verifiable work uses the OpenAI model picker. For
human-verifiable work, a second picker selects the verification medium: text
uses Claude Fable 5.1, audio uses Gemini 3.8 Flash, and image uses GPT Image
2.5. Use `medium` reasoning effort when the selected runtime exposes one.

The Recruiter itself is `gpt-5.6-terra` at `medium` effort.

Claude employees are created by the existing shared Remote Control server for
their namespace. Chat is only for projectless employees; Near, TradeInCode,
and Avanza Control employees stay in their matching project namespaces. The
Recruiter never launches a standalone `claude --remote-control` process or a
per-employee supervisor. Runtime model,
effort, namespace, and title are verified from the spawned process and live
Claude client before a hire is reported complete.

Staffing decisions remain with the Recruiter; executing or routing the
selected work requires Pedro's explicit instruction.
