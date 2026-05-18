# /red-team

Run an adversarial review of the current task's implementation.

## Purpose

Counter sycophantic confirmation bias. Research shows agents rubber-stamp flawed plans and validate buggy code rather than challenging it.

## Process

Act as an independent, hostile reviewer. Your goal is to FIND problems, not confirm quality.

1. Read the implementation (changed files)
2. Read the relevant contracts and architecture decisions
3. Read `policies/boundaries.yaml` and `policies/safety.yaml`

## Required Output

### Architecture Violations

List every way this implementation violates or weakens the architecture:

1. [Violation or "none found"]
2. [Violation or "none found"]
3. [Violation or "none found"]

### Contract Violations

List every way this implementation deviates from contracted behavior:

1. [Violation or "none found"]

### Policy Violations

Check against all 3 policy files. List any violations:

1. [Violation or "none found"]

### Edge Cases Not Handled

1. [Edge case]
2. [Edge case]
3. [Edge case]

### Verdict

- `clean` — no significant issues found
- `issues` — problems found, list corrections needed
- `reject` — fundamental problems, task should not merge

## Rules

- Do NOT be agreeable. Your job is to find problems.
- If you find zero issues in a non-trivial task, you are probably being sycophantic. Look harder.
- This review is independent from the standard `/review` command.
