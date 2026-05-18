# TASK-XXX — [Title]

## Goal

[One sentence describing what this task achieves]

## Scope

- [What is included]
- [What is included]

## Out of scope

- [What is explicitly excluded]

## Constraints

- Max files to modify: 5
- Max estimated new/changed lines: 100
- Max agent time: 15 minutes
- Depends on: [TASK-YYY | none]

## Acceptance Criteria

- [ ] [Verifiable condition — e.g., "GET /api/health returns 200"]
- [ ] [Verifiable condition — e.g., "All checks pass"]
- [ ] [Verifiable condition — e.g., "Handoff document exists"]
- [ ] Policies: no `policies/safety.yaml` → `forbidden_always` violated
- [ ] Policies: file changes within `policies/boundaries.yaml` → `module_ownership` rules

## Verify

```bash
# Commands that prove this task is done
# Example:
# curl -s http://localhost:3000/api/health | jq .status
# npm run test -- --filter=health
```

## Worker

- Role: [backend_worker | frontend_worker | orchestrator]
- Required: [yes | no — if yes, stop when unavailable]

## Contracts

- [contracts/xxx.contract.md]

## Stop Conditions

- [When to stop instead of continuing]
- Task exceeds 5 files or 100 lines
- Agent has retried 3+ times without progress
- Uncertainty about architectural impact
