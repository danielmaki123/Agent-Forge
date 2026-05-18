# Policies

Executable policy definitions that enforce governance rules beyond markdown instructions.

## Why

Research shows that system-prompt governance (natural language instructions) has a **26.67% violation rate**. Agents ignore explicit instructions 67% of the time when context exceeds 4,000 tokens. Policies-as-code enforces rules deterministically.

## How

Policies are declarative YAML rules that can be:
1. **Read by agents** — as stronger-than-markdown constraints
2. **Validated by CI/CD** — as automated checks that block non-compliant code
3. **Enforced by OPA/Rego** (future) — as runtime interception of agent actions

## Policy Files

- `boundaries.yaml` — file access rules, forbidden paths, module ownership
- `safety.yaml` — escalation triggers, forbidden actions, approval gates
- `quality.yaml` — minimum quality gates, logging requirements, test coverage

## Enforcement Levels

| Level | Mechanism | Violation Rate |
|---|---|---|
| 0 — Markdown only | Agent reads AGENTS.md | ~26-67% violations |
| 1 — Declarative YAML | Agent reads policies/ + CI validates | ~5-10% violations |
| 2 — OPA/Rego sidecar | Runtime interception of tool calls | ~0% violations |

Start at Level 1. Evolve to Level 2 when project complexity demands it.
