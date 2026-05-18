# /autopilot

Run up to 3 tasks consecutively without human intervention.

## Context Compaction Rule

Between tasks, read ONLY the previous task's `## Summary for Next Task` section from its handoff document. Do NOT carry the full handoff or full implementation context into the next task. This prevents context window overflow.

## Continue automatically ONLY if ALL conditions are true:

- Previous task review verdict is `merge`
- All verification checks pass
- All policy checks pass (boundaries, safety, quality)
- No architecture change required
- No missing contract
- No human decision required
- No production-touching action
- Required worker is available
- No new dependency needed
- Previous task stayed within size constraints (≤5 files, ≤100 lines)

Stop immediately if ANY condition is false.

## Compound Error Warning

Research shows: a 10-step agent at 95% per-step accuracy achieves only 59.9% system success. Three tasks is the safe maximum. After 3 tasks, ALWAYS stop for human review regardless of success.

## Deliver `AUTOPILOT REPORT`:

- Tasks attempted (max 3)
- Tasks completed with verdicts
- Tasks stopped and why
- Total files changed across all tasks
- Total lines changed across all tasks
- Policy violations (if any)
- Compound risk assessment: low | medium | high
- Recommended next action
