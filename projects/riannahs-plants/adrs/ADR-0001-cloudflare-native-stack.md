# ADR-0001: Cloudflare-native stack

- Status: Accepted
- Date: 2026-02-27

## Context
Need fast delivery, low ops overhead, security-first defaults, and simple deployments.

## Decision
Use Cloudflare Pages (frontend), Workers (API), and D1 (data).

## Consequences
- Pros: low infrastructure overhead, integrated deployment model, easy env separation.
- Cons: tighter platform coupling.
