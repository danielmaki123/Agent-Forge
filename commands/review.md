# /review

Review the current or specified task before merge.

Verify:

1. **Scope** — only contracted scope was implemented
2. **Contracts** — all consumed contracts are respected
3. **Architecture** — no unapproved architectural changes
4. **Checks** — all `PROJECT.yaml` → `checks` pass
5. **Handoff** — handoff document exists and is complete
6. **Files** — only allowed files were changed
7. **Dependencies** — no unapproved additions
8. **Risks** — documented and assessed

Create `reviews/TASK-XXX-review.md`.

Verdict (exactly one):

- `merge` — approved, ready to merge
- `fix` — needs corrections, list them
- `split` — task too large, break into subtasks
- `blocked` — cannot proceed, document why
