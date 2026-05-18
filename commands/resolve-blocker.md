# /resolve-blocker

Analyze the current blocker without implementing code.

Steps:

1. Identify the blocker
2. Determine root cause
3. List affected files and tasks
4. Propose minimal correction
5. Apply correction ONLY if it is strictly documental (contracts, tasks, ADRs)
6. Assess risks of the correction

Report:

- Blocker: [description]
- Root cause: [analysis]
- Affected: [files/tasks]
- Correction: [applied | proposed but not applied]
- Risks: [list]
- Verdict: `ready` | `requires_approval`

Do not implement code changes through this command.
