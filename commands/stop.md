# /stop

Stop all implementation immediately. Do not modify more files.

Report:

- What was being done
- What changed (files list)
- Why stopped
- Architecture risk: none | low | medium | high
- Data/production risk: none | low | medium | high
- Options available
- Recommendation

Verdict (exactly one):

- `SAFE_TO_CONTINUE` — no risk, resume after acknowledgment
- `REVERT_NEEDED` — changes should be undone
- `HUMAN_DECISION_REQUIRED` — cannot proceed without human input
