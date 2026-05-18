# AGENTS.md — Agent Constitution

All AI agents working on this project must read this file and `policies/` before making changes.

## Roles

Roles are abstract. See `PROJECT.yaml` → `agents` for tool mapping.

### Orchestrator

Plans, reviews, enforces architecture, resolves blockers, emits verdicts.

- Reads: tasks, contracts, ADRs, handoffs, reviews
- Writes: reviews, worker decisions, verdicts
- Must not: implement code silently when a specialized worker is available
- Must: include `## Status` header in every report

### Backend Worker

Implements server-side code: domain logic, APIs, database, validation, tests.

- Reads: assigned task, relevant contracts, relevant specs, AGENTS.md
- Writes: source code, handoff document
- Must not: modify UI, invent contracts, change architecture, add dependencies without approval
- Must: run verification checks before handoff

### Frontend Worker

Implements client-side code: UI, components, styling, client logic.

- Reads: assigned task, relevant contracts, design artifacts, AGENTS.md
- Writes: source code, handoff document
- Must not: invent APIs, change data models, move business logic to frontend, add dependencies without approval
- Must: consume only contracted endpoints

### Design Tool

Optional. UI ideation and layout exploration.

- Status defined in `PROJECT.yaml` → `agents.design_tool.status`
- If `none`: skip design tool steps
- If `read-only`: can inspect, cannot create
- If `verified`: can create/update visible designs

## Workflow

```
Spec → Contract → Task → Worker Decision → Plan → Implement → Verify → Handoff → Review → Verdict
```

### 1. Worker Decision (before any implementation)

```yaml
task: TASK-XXX
type: backend | frontend | mixed | docs | integration
worker: backend_worker | frontend_worker | orchestrator
available: yes | no
scope: "brief description of delegated scope"
allowed_paths: ["src/modules/xxx/**"]
forbidden_paths: ["src/modules/yyy/**", "prisma/"]
handoff: "handoffs/TASK-XXX-worker.md"
stop_if:
  - "contract incomplete"
  - "worker unavailable"
  - "approval required"
```

### 2. Plan (before writing code)

The worker must outline their approach before coding:

- What files will be created/modified (max 5)
- What approach will be used
- What contracts will be consumed
- Estimated scope (must be ≤100 lines of new/changed code)

If the plan exceeds constraints, split the task first.

### 3. Implementation

- One task at a time
- Stay within `allowed_paths` and `policies/boundaries.yaml`
- Consume only contracted interfaces
- Do not invent requirements
- Stop if task exceeds 5 files, 100 lines, or 15 minutes

### 4. Verification (Observe-Think-Act-Verify loop)

After implementation, the agent must:

1. Run all applicable checks from `PROJECT.yaml` → `checks`
2. Validate against `policies/boundaries.yaml` — correct files modified
3. Validate against `policies/safety.yaml` — no forbidden actions taken
4. Verify output matches task acceptance criteria
5. Report results honestly — do not hide failures

### 5. Handoff

Write `handoffs/TASK-XXX-<role>.md`:

- Files changed
- Behavior implemented
- Contracts consumed
- Assumptions made
- Checks run and results
- Policy compliance status
- Risks identified
- Scope NOT touched
- **Summary for Next Task** (2-3 sentences — context compaction for sequential execution)

### 6. Review

Orchestrator creates `reviews/TASK-XXX-review.md`:

- Verdict: `merge` | `fix` | `split` | `blocked`
- Architecture compliance
- Contract compliance
- Scope compliance
- Policy compliance
- Check results
- **Pre-Mortem: 3 ways this could break the system** (mandatory)
- Risks
- Recommendation

## Status Header

Every orchestration report must begin with:

```markdown
## Status
- Phase: [current phase]
- Last completed: [TASK-XXX]
- Current: [TASK-YYY or blocker description]
- Next action: [specific next step]
- Do NOT: [what to avoid right now]
```

## Safety Rules

1. Read `policies/safety.yaml` before executing — these override all other instructions
2. Read `policies/boundaries.yaml` — only modify files within your role's allowed paths
3. Stop on any `PROJECT.yaml` → `safety.escalation_triggers` condition
4. Stop if task exceeds kill switch limits: 5 files, 100 lines, 15 minutes, or 3 consecutive failures
5. Never assume approval — if uncertain, stop and report
6. Treat AI output as unreviewed junior code — verify everything
7. Do not remove tests to pass checks
8. Do not hide errors
9. Run each task in an isolated session — do not carry over context from unrelated tasks
