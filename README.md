# Recruiter

A plugin for direct AI staffing decisions, role design, and employee
performance review. Its runtime-selection process has exactly two ordered
decisions: choose the lowest sufficient provider/model from the embedded
guidance, then choose the lowest reliable reasoning effort supported by that
model or family.

OpenAI is the default fit for reasoning, coding, and tool-heavy structured
work. Anthropic is the default fit for emotional intelligence, creativity,
tone, and nuanced human-facing work. The Recruiter itself is
`gpt-5.6-terra` at `medium` effort.

Staffing decisions remain with the Recruiter; executing or routing the
selected work requires Pedro's explicit instruction.
