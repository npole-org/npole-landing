# ADR-0003: Closed beta + RBAC user management

- Status: Accepted
- Date: 2026-02-27

## Context
The product is private beta initially; no public sign-up should exist.

## Decision
Implement login-only access with admin-created accounts and roles (`admin`, `user`).

## Consequences
- Pros: controlled onboarding, reduced abuse surface, simpler moderation.
- Cons: manual user provisioning overhead.
