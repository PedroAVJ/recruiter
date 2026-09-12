# Recruiter

A plugin for direct AI staffing decisions, role design, and employee
performance review. Its runtime-selection process has exactly three ordered
decisions: classify the primary tasks as machine-verifiable or
human-verifiable, choose the lowest sufficient provider/model from the
embedded guidance, then choose the lowest reliable reasoning effort supported
by that model or family.

Machine-verifiable tasks use OpenAI. Human-verifiable tasks use Anthropic. The
Recruiter itself is
`gpt-5.6-terra` at `medium` effort.

Staffing decisions remain with the Recruiter; executing or routing the
selected work requires Pedro's explicit instruction.
