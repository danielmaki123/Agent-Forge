# /worker-decision

Before any implementation task, the orchestrator must decide who executes and approve the plan.

## Step 1: Worker Decision

Output this decision block:

```yaml
task: TASK-XXX
type: backend | frontend | mixed | docs | integration
worker: [role from PROJECT.yaml agents]
available: yes | no
scope: "what the worker will implement"
depends_on: [TASK-YYY | none]
allowed_paths:
  - "src/modules/xxx/**"
forbidden_paths:
  - "prisma/"
  - "src/modules/yyy/**"
handoff_path: "handoffs/TASK-XXX-<role>.md"
design_tool_needed: yes | no
design_tool_status: none | read-only | verified
estimated_files: [number, max 5]
estimated_lines: [number, max 100]
stop_conditions:
  - "contract incomplete"
  - "worker unavailable"
  - "exceeds size constraints"
```

## Step 2: Implementation Plan

The assigned worker must outline their approach BEFORE writing code:

1. Files to create/modify (list each)
2. Approach summary (2-3 sentences)
3. Contracts to consume (list each)
4. Potential risks or unknowns

If the plan exceeds 5 files or 100 lines, the task must be split BEFORE implementation.

## Rules

- Do not implement before both steps are documented
- If the required worker is unavailable, stop: `STOP: [worker role] required but unavailable`
- Validate `allowed_paths` against `policies/boundaries.yaml`
