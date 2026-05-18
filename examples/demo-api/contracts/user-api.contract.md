# User API Contract

## Source of Truth
Backend is authoritative for data schema. Frontend is authoritative for required payload structures.

## Endpoints

### GET /api/users/:id

**Request:**
- `id` (string, UUID format)

**Response (200 OK):**
```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "email": "user@example.com",
  "role": "admin",
  "createdAt": "2026-05-18T10:00:00Z"
}
```

**Response (404 Not Found):**
```json
{
  "error": "USER_NOT_FOUND",
  "message": "No user exists with the provided ID"
}
```

## Forbidden
- **Backend must not:** Return password hashes or internal database IDs (use UUIDs).
- **Frontend must not:** Assume the `role` field will always be present (can be null for legacy users).
