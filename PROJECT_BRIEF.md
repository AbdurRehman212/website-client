# Project Brief — Ledger & Beyond Consultancy Website V1

## What this is

A static, presentation-quality V1 prototype for **Ledger & Beyond
Consultancy** (a financial consultancy), for client review. No backend,
auth, database, CMS, payments, or booking system in V1.

## Confirmed assets

- Logo (horizontal lockup + two mark variants) — `public/brand/`
- Full-page visual reference (Home / About / Services) — `references/website-reference.jpeg`
- Company name: **Ledger & Beyond Consultancy**
- Tagline: **"Accurate Today. Strategic Tomorrow."**
- Palette direction: deep navy, muted gold, warm ivory (matches brief defaults)

## Confirmed routes (V1)

`/`, `/about`, `/services`, `/contact`. No Blog in V1; architecture leaves
room to add one later.

## Superseded — see docs/CONTENT_SOURCE.md

As of 2026-08-25, the client supplied verified copy (founder identity,
services, values, contact details, production domain) and it has been
integrated into `src/content/site.ts`. The list that used to live here —
founder name/credentials, service copy, contact details, production
domain — is now confirmed; treat `docs/CONTENT_SOURCE.md` as current and
this section as a historical record of what was still open at V1.

Still genuinely unconfirmed / out of scope, do not fabricate:

- Founding year / company timeline
- Physical office address
- Social media accounts (site intentionally omits the social section)
- Open Graph share image (no fake social graphic has been created)
- Contact form delivery mechanism (V1 uses direct `tel:`/`wa.me`/`mailto:`
  links instead of a form, by design — see `docs/DECISIONS.md`)

## Deferred to V2 (by design, not oversight)

Blog, CMS, team page population, booking backend, contact-form backend,
analytics, testimonials, case studies, multi-location content, client
portal.

## Phase checklist

- [x] Phase A — Audit & Plan (this document + `CLAUDE.md` + `TOKEN_USAGE.md`)
- [x] Phase B — Foundation (tokens, typography, content model, header/footer)
- [x] Phase C — Pages (Home, About, Services, Contact)
- [x] Phase D — Responsive refinement (reviewed via breakpoint classes + code audit — see note on browser QA below)
- [x] Phase E — Runtime QA (localhost 200s, dev-server log clean, DOM/landmark checks via curl)
- [~] Phase F — Visual QA against reference (structural/palette match verified; no browser available to pixel-compare — see final report)
- [x] Phase G — Build verification (lint, typecheck, build all pass)
- [x] Phase H — Final report
