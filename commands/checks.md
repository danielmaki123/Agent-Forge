# /checks

Run all verification checks defined in `PROJECT.yaml` → `checks`.

For each check:

- Run the command
- Report: `pass` | `fail` | `skipped`
- If skipped, explain why
- If failed, show the error output

Do not fix failures automatically. Report them for the review step.

Example output:

```
lint:      pass
typecheck: pass
test:      fail — 2 tests in auth.test.ts
build:     skipped — test failure blocks build
```
