# OpenAI model-selection sources

Last reviewed: 2026-09-12. This is the retained, user-facing source copy for
choosing OpenAI models in Recruiter staffing decisions. It supplements, but
does not replace, the verification-first provider decision in
[model-and-effort-guidance.md](model-and-effort-guidance.md).

## 1. Primary Work and Codex selection guide

Source: [Managing usage with GPT-6 Astra in Work and Codex](https://help.openai.com/en/articles/20001516-managing-usage-with-gpt-6-astra-in-work-and-codex)

Use this as the primary guide for the normal OpenAI picker:

- **GPT-6 Astra:** especially demanding coding, research, analysis, and
  unfamiliar or complex problem-solving.
- **GPT-5.6 Sol:** a capability-and-efficiency balance for coding, research,
  and professional work.
- **GPT-5.6 Terra:** everyday work that balances speed, capability, and cost;
  for example routine code changes or document analysis.
- **GPT-5.6 Luna:** focused or repetitive work where speed and economy matter;
  for example extraction, categorization, or short edits.

Choose reasoning separately after selecting the model: lower effort when a
faster response or lower usage is sufficient, medium for a balance, and higher
effort for a difficult problem that demonstrably benefits from deeper analysis.
Fast mode provides faster responses while using more allowance; it does not
change the selected model's intelligence.

## 2. Codex-Spark selection guide

Source: [Introducing GPT-5.3-Codex-Spark](https://openai.com/index/introducing-gpt-5-3-codex-spark/)

Use this guide only when considering **GPT-5.3-Codex-Spark**. It is a
Codex-only research preview optimized for near-instant, interactive coding:
small targeted edits, reshaping logic, and refining interfaces while the user
iterates in real time. Its default style is lightweight and it does not run
tests unless explicitly asked.

Choose Spark when latency and a tight human-in-the-loop coding loop are the
primary requirement. Do not choose it as the default for autonomous,
verification-heavy, long-running, or API-backed work merely because it is
fast.

## Maintenance rule

These two URLs are the approved user-facing OpenAI sources for model selection.
For ordinary staffing decisions, follow this retained guidance rather than
browsing the API model catalog. If Pedro asks to change the OpenAI model lineup,
refresh both the retained summary and the source links before making further
recommendations.
