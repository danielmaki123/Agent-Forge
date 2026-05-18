# /status

Rebuild current project state from repository files, NOT from chat memory.

Read:

- `AGENTS.md`
- `PROJECT.yaml`
- `tasks/` — identify completed, in-progress, pending
- `reviews/` — latest verdicts
- `handoffs/` — latest submissions
- `decisions/` — active ADRs
- `contracts/` — current contracts

Output:

```markdown
## Status
- Phase: [current project phase]
- Last completed: [TASK-XXX — brief description]
- Current: [TASK-YYY or blocker description]
- Next action: [specific, actionable next step]
- Do NOT: [what must be avoided right now]
- Active risks: [list or "none"]
```

Do not implement anything. Report only.
