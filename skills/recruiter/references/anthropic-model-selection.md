# Anthropic effort and thinking source hierarchy

This retained source hierarchy governs the Claude branch of Recruiter staffing
decisions. It supplements the verification-first provider decision in
[model-and-effort-guidance.md](model-and-effort-guidance.md). It is not a
generic provider ranking and does not add an unapproved Claude model to the
employee lineup.

## 1. Provider-wide effort guidance

Source: [Anthropic Effort](https://platform.claude.com/docs/en/build-with-claude/effort)

Use this source after selecting an exact Claude model. It defines `effort` as
the control for the trade-off between response thoroughness and token
efficiency, describes the levels, and lists which levels each model supports.
For adaptive-thinking models, it is the recommended way to control thinking
depth. The page's model-specific recommendations override any generic reading
of a level name.

## 2. Provider-wide thinking guidance

Source: [Anthropic Thinking](https://platform.claude.com/docs/en/build-with-claude/thinking)

Use this source to establish whether the exact model thinks by default, which
thinking configuration it accepts, and what a visible thinking block means. It
also makes clear that displayed thinking is summarized rather than raw chain of
thought. Do not call an omitted or summarized block a complete private
reasoning trace.

## 3. Exact model check

Before hiring with a new or changed Claude model, check the current Anthropic
model-specific information linked from the two sources above for availability,
supported effort levels, and any recommendation that differs from the general
table. Treat the exact model's current documentation and the available runtime
selector as authoritative when they differ from a retained summary.

## Current approved Claude branch

The current text-verification picker has one approved Claude model: Claude
Fable 5.1. Pedro's current operating policy selects `medium` effort for that
employee route. Anthropic documents all five effort levels for Fable 5.1 and
recommends evaluating the trade-off for the actual workload; its default
starting point is `high`. The operational `medium` selection is a deliberate
Pedro policy for this route, not a claim that `medium` is Anthropic's default
or a setting to carry forward automatically.

For ordinary staffing decisions, use this retained hierarchy. Refresh it when
Pedro changes the approved Claude lineup or model capability may have changed.
