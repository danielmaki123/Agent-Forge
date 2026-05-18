# Demo API Example

This directory contains a complete, filled-out example of the Agent Forge workflow for a simple feature: **Creating a GET /api/users endpoint**.

## The Workflow Demonstrated:

1. **Contract (`contracts/user-api.contract.md`)**: Written *first* to define the exact input/output shapes.
2. **Task (`tasks/TASK-001-get-user.md`)**: The spec given to the agent, with hard constraints and verification commands.
3. **Handoff (`handoffs/TASK-001-backend.md`)**: What the agent reports back after building it.
4. **Review (`reviews/TASK-001-review.md`)**: The orchestrator's analysis, including the adversarial Pre-Mortem.

Read these files to see exactly how agents should communicate within the framework.
