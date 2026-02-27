# ADR-0002: React for UI complexity management

- Status: Accepted
- Date: 2026-02-27

## Context
The app UI includes authenticated flows, role-aware views, schedules, and activity history.

## Decision
Use React (with Vite) while enforcing a minimal dependency policy.

## Consequences
- Pros: maintainable stateful UI and component composition.
- Cons: adds framework/runtime complexity compared to static JS.
