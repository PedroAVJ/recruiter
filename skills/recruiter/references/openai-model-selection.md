# OpenAI model and effort source hierarchy

Last reviewed: 2026-09-12. This retained source copy governs OpenAI portions
of Recruiter staffing decisions. It supplements, but does not replace, the
verification-first provider decision in
[model-and-effort-guidance.md](model-and-effort-guidance.md).

Use the following official OpenAI developer-documentation hierarchy. Do not
treat Help Center picker copy as durable model-selection authority.

## 1. Model-family guidance

Source: [Model guidance](https://developers.openai.com/api/docs/guides/latest-model)

Use the selected family tab or query parameter (for example,
`?model=gpt-5.6` or `?model=gpt-6-astra`) to understand the model's intended
workload and family-specific behavior. For ordinary current OpenAI staffing:

- **GPT-6 Astra:** the hardest end-to-end reasoning and coding work.
- **GPT-5.6 Sol:** complex professional work.
- **GPT-5.6 Terra:** a balance of intelligence and cost.
- **GPT-5.6 Luna:** cost-sensitive, high-volume work.

This source decides the workload fit. It does not by itself make an effort
level valid for every model.

## 2. Reasoning-effort semantics

Source: [Reasoning models](https://developers.openai.com/api/docs/guides/reasoning)

After fixing a model, use this guide for the meaning of `none`, `minimal`,
`low`, `medium`, `high`, `xhigh`, and `max`. Choose the lowest level whose
quality is reliable for the role; do not infer effort from job title,
seniority, or the importance of the result.

## 3. Exact capability and availability

Source: [Model catalog and model cards](https://developers.openai.com/api/docs/models)

Before a hire, check the selected model card or catalog for its currently
supported effort values and relevant availability. The model-specific capability
is authoritative when it differs from the generic effort guide. For example,
GPT-6 Astra does not support `none`; GPT-5.6 Sol, Terra, and Luna currently
support `none`, `low`, `medium`, `high`, `xhigh`, and `max`.

## Codex-Spark

GPT-5.3-Codex-Spark is a Codex runtime preview rather than a model listed in the
developer API catalog. Use it only for latency-first, tightly interactive coding
where immediate iteration matters more than autonomous thoroughness. Its purpose
is described in [Introducing GPT-5.3-Codex-Spark](https://openai.com/index/introducing-gpt-5-3-codex-spark/), but that announcement is not part of the
selection hierarchy above.

For Spark, use the live Codex model capability at hire time. At this review it
allows `low`, `medium`, `high`, and `xhigh`; it does not allow `none` or `max`.
Because it is a preview runtime, do not infer future support from the API
catalog or assume that a plan's UI exposes every allowed value.

## Maintenance rule

For ordinary staffing decisions, use this retained hierarchy. When Pedro asks
to change the model lineup or a capability may have changed, refresh the three
official developer-documentation layers and the live Codex capability for
preview-only models before making a recommendation.
