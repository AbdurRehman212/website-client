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

## Explicitly unconfirmed — do not present as fact

The reference image contains example content that reads as real but is
**not** confirmed by the client and must not ship as-is:

- TODO — Founder name, title, credentials, biography, headshot (reference
  shows "Yusra" / "CA (PAK) | ACCA" — treat as placeholder unless the
  client confirms it)
- TODO — Founding year / company timeline (reference shows 2014–2025
  milestones)
- TODO — Office locations (reference shows Dubai / London / Toronto /
  Sydney — brief explicitly says not to reproduce this without confirmation)
- TODO — Phone number, email address, physical address
- TODO — Social links
- TODO — Final service copy (V1 uses brief, generic descriptions for the
  four service categories: Bookkeeping, Financial Reporting, Budgeting &
  Forecasting, Tax & Advisory)
- TODO — Any credentials, regulatory approvals, client counts, awards,
  testimonials, or partner logos
- TODO — Final production domain (for canonical URL / Open Graph)
- TODO — Open Graph share image (no fake social graphic has been created)
- TODO — Contact form delivery mechanism (currently prototype-only, no
  submissions are actually sent anywhere)

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
