# Model and effort selection guidance

Use this process for every concrete staffing decision. Model choice and effort
choice are independent. Do not infer either one from the employee's title,
seniority, or the mere importance of the decision.

## Decision process

1. Describe the work itself: interaction latency, volume, cost sensitivity,
   reasoning difficulty, autonomy, tool use, expected run length, and the cost
   of an incorrect result.
2. Compare the current four general-purpose OpenAI tiers and four Claude tiers
   against those workload characteristics.
3. Choose the model whose documented target workload is the closest match.
4. Choose effort from that model's own supported levels and provider guidance.
5. Prefer the lowest model and effort that provide sufficient reliability.
   Increase either only for a documented workload match or measured evaluation
   gain, not because a role sounds senior or consequential.
6. In the staffing decision, name the chosen model and effort, the two workload
   matches that justify them, and any review or escalation requirement.
7. Place an approved OpenAI model in a native Codex task and an approved Claude
   model in Claude Remote Control. Runtime availability determines the correct
   execution surface; it is not permission to substitute a different model.

For persistent employee configuration, requests for current or latest models,
or evidence that the lineup changed, refresh these official pages before
deciding:

- OpenAI models: https://developers.openai.com/api/docs/models
- OpenAI reasoning effort: https://developers.openai.com/api/docs/guides/reasoning
- Claude model selection: https://platform.claude.com/docs/en/about-claude/models/choosing-a-model
- Claude effort: https://platform.claude.com/docs/en/build-with-claude/effort

## Current model-tier baseline

Reviewed September 11, 2026.

### OpenAI

- GPT-6 Astra: hardest end-to-end work, including complex reasoning, coding,
  research, computer use, and long multistep workflows.
- GPT-5.6 Sol: complex professional work.
- GPT-5.6 Terra: workloads balancing intelligence and cost.
- GPT-5.6 Luna: cost-sensitive, high-volume workloads.

### Claude

- Claude Fable 5.1: demanding reasoning and long-horizon agentic work,
  especially when Opus at higher effort still falls short.
- Claude Opus 5: capability-first complex, nuanced, accuracy-sensitive, and
  autonomous work.
- Claude Sonnet 5: speed and intelligence for everyday coding, agent, and
  professional workloads.
- Claude Haiku 4.5: lowest latency and price for high-volume straightforward
  work and subagents.

## Current effort baseline

### OpenAI

- `none`: latency-critical work without meaningful reasoning or multichained
  tool calls.
- `low`: efficient tool use, planning, search, drafting, and ordinary
  multistep decisions.
- `medium`: planning, complex reasoning, and judgment where quality and
  reliability matter; the GPT-5.6 default.
- `high`: hard reasoning, deep planning, and complex or high-value agentic
  workflows where latency matters less.
- `xhigh`: deep research and long-running asynchronous workflows; use only
  when evaluations show a clear benefit.
- `max`: maximum reasoning for the most complex tasks; evaluate against
  `xhigh` rather than assuming it is better.

GPT-6 Astra supports `low` through `max` but not `none`. GPT-5.6 Sol, Terra,
and Luna support `none` through `max` and default to `medium`.

### Claude

- Claude Fable 5.1: default `high`; use `xhigh` or `max` for the most
  capability-sensitive agentic or coding work, and `medium` or `low` for
  routine or latency-sensitive work when evaluations hold.
- Claude Opus 5: default `high`; use `xhigh` for demanding coding or agentic
  work, `max` only when unconstrained token spending is justified, and
  `medium` or `low` where evaluations preserve quality.
- Claude Sonnet 5: default `high`; use `xhigh` for the hardest coding or
  agentic work, `medium` to save cost, `low` for high-volume or
  latency-sensitive chat, and `max` only for absolute capability.
- Claude Haiku 4.5: does not support the effort parameter. Extended thinking
  is a separate control and must not be mislabeled as effort.

## Hiring Manager runtime decision

The Hiring Manager performs interactive job design, direct staffing judgment,
and employee-performance review. It does not perform multihour autonomous
implementation or deep research. The documented matches are therefore GPT-5.6
Sol for complex professional work and medium effort for planning, complex
reasoning, and judgment where quality and reliability matter.

The Hiring Manager runtime is `gpt-5.6-sol` at `medium` effort.
