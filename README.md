# AI-Native OS — Project Governance Framework

A tool-agnostic governance framework for AI-assisted software development.

This is not an application. It is a portable operating system for controlling how AI agents build software — any software — while maintaining architectural integrity, traceability, and human authority.

## Philosophy

1. **Spec before code.** Contracts define behavior. Code implements contracts.
2. **Governed autonomy.** Agents operate freely within defined boundaries. They stop at risk.
3. **Verify, don't trust.** Every task has executable verification. "Done" means checks pass.
4. **Minimal effective governance.** No file exists unless it prevents a real failure mode.
5. **Ship first, govern second.** TASK-001 must execute before adding more governance.

## Quick Start

1. Copy this directory into your project root.
2. Edit `PROJECT.yaml` — define your project identity, stack, team.
3. Edit `contracts/` — define your first API or data contract.
4. Create your first task in `tasks/TASK-001-foundation.md`.
5. Run `/continue-roadmap`.

## Directory Structure

```
├── AGENTS.md              # Agent roles, boundaries, workflow
├── PROJECT.yaml           # Project identity and configuration
├── commands/              # Operational shortcut prompts
├── contracts/             # API and data contracts (source of truth)
├── decisions/             # Architecture Decision Records (ADRs)
├── design/                # Design artifacts and references
├── handoffs/              # Agent handoff documents
├── policies/              # Enforceable governance rules (YAML)
├── reviews/               # Task review documents
├── specs/                 # Domain specifications
├── tasks/                 # Task definitions with acceptance criteria
└── templates/             # Reusable templates
```

## Principles (from industry research, 2025-2026)

- **Context engineering** over prompt engineering — curate what agents see
- **Spec-driven development** — specifications are primary artifacts, code is derivative
- **Governance-as-code** — if a rule isn't enforced by the system, it will be ignored
- **Observe-Think-Act-Verify** loop — agents self-verify before reporting done
- **AGENTS.md as portable standard** — tool-agnostic, version-controlled, iterative
