# Model and effort selection guidance

This is the operative, embedded guidance for staffing decisions. Do not browse
for model guidance while making an ordinary staffing decision. Verification,
human-verification modality where applicable, model, and effort are separate
decisions, made in order. Do not infer any of them from a job title, seniority,
prestige, or the mere importance of the result.

For OpenAI staffing, also read the retained [OpenAI model and effort source
hierarchy](openai-model-selection.md). It records the official developer-doc
layers for model fit, effort semantics, and exact model capability. Use that
embedded copy for ordinary decisions; refresh it when Pedro asks to change the
model lineup or a capability may have changed.

## Decision 1: classify the role's primary tasks by verification

Start with what the role will do, not the eventual outcome. Classify the
primary tasks by the authority that can verify whether they were done well:

- **Machine-verifiable tasks** have a reproducible check: tests, exact data,
  deterministic tool behavior, formal constraints, or a factual/structured
  acceptance rule. Choose **OpenAI**.
- **Human-verifiable tasks** are primarily judged by people: interpersonal
  judgment, emotional intelligence, tone, creative taste, or whether the work
  lands with its intended readers. Continue to the human-verification modality
  picker below.
- For mixed roles, choose by the verification method that governs the primary
  tasks. If distinct task classes merit separate employees, propose narrower
  roles; do not silently split, hire, or route work.

## Human-verification modality picker

This picker applies only after Decision 1 yields human-verifiable work. It is
an exact mapping, not a capability or provider ladder:

- **Text verification:** Claude Fable 5.1.
- **Audio verification:** Gemini 3.8 Flash.
- **Image verification:** GPT Image 2.5.

The verification medium is the form in which a person must judge the role's
primary work. Do not replace this picker with generic Anthropic or OpenAI model
selection.

## Decision 2: choose the model

For machine-verifiable work, choose the lowest sufficient OpenAI tier below.
For human-verifiable work, the modality picker has already fixed the exact
model.

### OpenAI model guidance

- GPT-6 Astra: the hardest end-to-end reasoning, coding, research, computer-use,
  and long multistep workflows.
- GPT-5.6 Sol: complex professional work.
- GPT-5.6 Terra: ordinary work that should balance intelligence and cost.
- GPT-5.6 Luna: cost-sensitive, high-volume, straightforward work.
- GPT-5.3-Codex-Spark: latency-first, real-time, interactive coding with
  small targeted edits. It is a Codex research preview, not an API runtime;
  use it only when immediate iteration matters more than autonomous
  thoroughness and explicit verification.

Stop after choosing one exact model. Do not choose effort yet.

## Decision 3: choose reasoning effort

Now consult only the selected model or family below and choose the lowest level
that reliably handles the work.

### OpenAI effort guidance

- `low`: efficient tool use, planning, search, drafting, and ordinary multistep
  decisions.
- `medium`: independent completion and verification, complex reasoning, or
  multi-constraint judgment where reliability matters.
- `high`: hard reasoning, deep planning, and complex agentic workflows where
  latency matters less.
- `xhigh`: deep research and long-running asynchronous workflows with a proven
  quality benefit.
- `max`: the most complex work, only when it beats `xhigh` in evaluation.

In this harness, GPT-6 Astra and GPT-5.6 Sol, Terra, and Luna use `low` through
`max`. Codex-Spark's live preview capability is `low`, `medium`, `high`, and
`xhigh`. Verify this preview capability at the time of a Spark hire.

### Human-verification picker effort guidance

- Claude Fable 5.1: `medium`.
- Gemini 3.8 Flash: the current native Gemini route does not expose an exact
  reasoning-effort setting. Report effort as not configured; do not invent one.
- GPT Image 2.5: image-quality settings are not reasoning effort. Report effort
  as not applicable.

Use `medium` for every human-verification picker model whose selected runtime
exposes a reasoning-effort control, until Pedro changes this policy.

## Decision output

Return only what the request needs. For a runtime recommendation, the minimum
complete answer is:

- `Model: <provider and exact model>` — one short workload match.
- `Reasoning effort: <level>` — one short match from that model's guidance,
  when the selected runtime exposes an effort setting. Otherwise report why it
  is not configured or not applicable.

Recruiter consultation is optional, never a prerequisite. Do not add a panel,
composite score, seniority rubric, review requirement, or team shape unless
Pedro explicitly asks for it.

## Recruiter runtime

Decision 1: Recruiter work is a bounded, structured comparison whose staffing
recommendations can be checked against stated task criteria, so it is
machine-verifiable and uses OpenAI.

Decision 2: Terra is the sufficient intelligence/cost tier.

Decision 3: the persistent role also handles occasional multi-constraint job
design and performance review, so Terra's `medium` effort is sufficient.

The Recruiter runtime is `gpt-5.6-terra` at `medium` effort.
