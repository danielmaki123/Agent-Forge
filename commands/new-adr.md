# /new-adr

Create a new Architecture Decision Record.

Required information:

- ADR number (next sequential)
- Title
- Context (why is this decision needed)
- Options considered (at least 2, with trade-offs)
- Decision (which option, one sentence)
- Consequences (what changes because of this decision)

Output path: `decisions/ADR-XXX-<slug>.md`

Use template from `templates/adr.md`.

Rule: Do not create ADRs for decisions that don't affect architecture.
Rule: Do not create more than 2 ADRs before TASK-001 is complete.
