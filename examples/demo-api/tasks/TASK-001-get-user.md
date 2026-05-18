# TASK-001 — Get User Endpoint

## Goal
Implement the backend REST endpoint for retrieving a single user by their UUID.

## Scope
- Create the Express.js route for `GET /api/users/:id`
- Implement controller logic to fetch user from Prisma DB
- Add structured logging for the request and outcome
- Write unit tests for 200 and 404 cases

## Out of scope
- Authentication/Authorization middleware (handled in TASK-002)
- Frontend implementation

## Constraints
- Max files to modify: 5
- Max estimated new/changed lines: 100
- Max agent time: 15 minutes
- Depends on: none

## Acceptance Criteria
- [x] Route matches `contracts/user-api.contract.md` exactly
- [x] Prisma query uses `findUnique`
- [x] Sensitive fields (password) are stripped from the response
- [x] All checks pass
- [x] Policies: file changes stay within `src/modules/users/**`

## Verify
```bash
# 1. Start dev server in background
npm run dev &
# 2. Test successful fetch
curl -s http://localhost:3000/api/users/123e4567-e89b-12d3-a456-426614174000 | jq .email
# 3. Run automated tests
npm run test -- --filter=users.controller
```

## Worker
- Role: backend_worker
- Required: yes

## Contracts
- `contracts/user-api.contract.md`
