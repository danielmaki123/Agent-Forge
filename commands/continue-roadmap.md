# /continue-roadmap

Continue with the next pending task from `tasks/`.

Rules:

1. Read the task, its referenced contracts, and relevant ADRs
2. Produce a worker decision before implementing
3. Delegate to the appropriate worker per `PROJECT.yaml` → `agents`
4. If required worker is unavailable, stop: `STOP: required worker unavailable`
5. Implement within allowed scope only
6. Run all verification checks from `PROJECT.yaml` → `checks`
7. Write handoff document
8. Review against task acceptance criteria
9. Emit explicit verdict

Stop if: contract missing, worker unavailable, checks fail, or human decision required.
