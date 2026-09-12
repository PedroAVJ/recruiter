# Model and effort selection guidance

This is the operative, embedded guidance for staffing decisions. Do not browse
for model guidance while making an ordinary staffing decision. Verification,
model, and effort are three separate decisions, made in order. Do not infer any
of them from a job title, seniority, prestige, or the mere importance of the
result.

For OpenAI staffing, also read the retained [OpenAI model-selection
sources](openai-model-selection.md). It contains the approved user-facing
guidance and its two source links. Use that embedded copy for ordinary
decisions; refresh it only when Pedro asks to change the model lineup.

## Decision 1: classify the role's primary tasks by verification

Start with what the role will do, not the eventual outcome. Classify the
primary tasks by the authority that can verify whether they were done well:

- **Machine-verifiable tasks** have a reproducible check: tests, exact data,
  deterministic tool behavior, formal constraints, or a factual/structured
  acceptance rule. Choose **OpenAI**.
- **Human-verifiable tasks** are primarily judged by people: interpersonal
  judgment, emotional intelligence, tone, creative taste, or whether the work
  lands with its intended readers. Choose **Anthropic**.
- For mixed roles, choose by the verification method that governs the primary
  tasks. If distinct task classes merit separate employees, propose narrower
  roles; do not silently split, hire, or route work.

## Decision 2: choose the model tier

Within the provider selected above, choose the lowest sufficient tier:

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

### Anthropic model guidance

- Claude Fable 5.1: the most demanding reasoning and long-horizon agentic work,
  especially when Opus at higher effort is insufficient.
- Claude Opus 5: capability-first complex, nuanced, accuracy-sensitive, or
  autonomous work.
- Claude Sonnet 5: everyday creative, writing, coding, agent, and professional
  work that benefits from a speed/intelligence balance.
- Claude Haiku 4.5: lowest-latency, lowest-price, high-volume straightforward
  work.

Stop after choosing one exact model. Do not choose effort yet.

## Decision 3: choose reasoning effort

Now consult only the selected model or family below and choose the lowest level
that reliably handles the work.

### OpenAI effort guidance

- `none`: latency-critical work with no meaningful reasoning or chained tools.
- `low`: efficient tool use, planning, search, drafting, and ordinary multistep
  decisions.
- `medium`: independent completion and verification, complex reasoning, or
  multi-constraint judgment where reliability matters.
- `high`: hard reasoning, deep planning, and complex agentic workflows where
  latency matters less.
- `xhigh`: deep research and long-running asynchronous workflows with a proven
  quality benefit.
- `max`: the most complex work, only when it beats `xhigh` in evaluation.

GPT-6 Astra supports `low` through `max`, but not `none`. GPT-5.6 Sol, Terra,
and Luna support `none` through `max`.

### Anthropic effort guidance

- Claude Fable 5.1: `high` by default; `xhigh` or `max` for the most
  capability-sensitive agentic or coding work; `medium` or `low` when the work
  is routine or latency-sensitive and quality holds.
- Claude Opus 5: `high` by default; `xhigh` for demanding coding or agentic
  work; `max` only when unconstrained token use is justified; `medium` or `low`
  when quality holds.
- Claude Sonnet 5: `high` by default; `xhigh` for its hardest coding or agentic
  work; `medium` to reduce cost; `low` for high-volume or latency-sensitive
  chat; `max` only for absolute capability.
- Claude Haiku 4.5: no effort parameter. Report effort as unsupported; do not
  relabel extended thinking as effort.

## Decision output

Return only what the request needs. For a runtime recommendation, the minimum
complete answer is:

- `Model: <provider and exact model>` — one short workload match.
- `Reasoning effort: <level>` — one short match from that model's guidance.

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
