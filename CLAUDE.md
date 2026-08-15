# Ledger & Beyond Consultancy — Website V1

## Purpose

Static, presentation-quality V1 website for a financial consultancy client
("Ledger & Beyond Consultancy"). This is a visual prototype for client
review — no backend, auth, database, CMS, payments, or booking system.
Architecture stays clean enough to add those later without a rewrite.

## Stack

Next.js (App Router) · React · TypeScript · Tailwind CSS · static-first
rendering (no `output: "export"` unless deployment specifically requires
it — see `references/` decisions). Deploy target: Vercel (not connected
yet). No state library, no ORM, no CMS, no animation library unless a
specific need arises — see `TOKEN_USAGE.md` for the fuller discipline list.

## Visual identity

Reference: `references/website-reference.jpeg`. Logo: `public/brand/`.

- Deep navy backgrounds, warm ivory content areas, restrained muted gold
  accents, editorial serif headings, clean sans-serif body text.
- Tokens live centrally (Tailwind theme / CSS variables) — never hardcode
  one-off hex colors in components.
- No gradients, glassmorphism, neon, giant rounded cards, or SaaS-dashboard
  styling. This should read as an established, premium finance brand.

## Content integrity — no fabricated facts

Never invent founder credentials, years of experience, client counts,
office locations, awards, or regulatory claims. Unknown facts are `TODO`
in `src/content/site.ts`, not filled with plausible-sounding text. The
supplied reference image contains example content (name, credentials,
timeline, city list) — treat it as a *layout/visual* reference only; none
of that content is confirmed and none of it ships without confirmation.

## Architecture rules

- Server Components by default. `"use client"` only at the smallest
  interactive boundary (mobile menu, form inputs).
- All copy/nav/contact/services data lives in `src/content/site.ts`, typed.
  Components render from it — don't hardcode client copy in JSX.
- Reusable components over one-off duplication; avoid over-fragmenting into
  trivial wrapper components.

## Non-goals for V1

No Blog, no CMS, no payments, no booking backend, no analytics, no
third-party form provider — until explicitly requested.

## Requirements carried through every change

- WCAG 2.2 AA: semantic landmarks, one H1/page, visible focus states,
  keyboard-operable nav, alt text, `prefers-reduced-motion` respected.
- Performance targets: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1. Minimal client
  JS, sized images, no autoplay/heavy media.
- Before declaring anything done: `npm run lint`, `tsc --noEmit`, `npm run
  build` must pass, and the change must actually be viewed on localhost
  (compiling is not the same as working).

See `TOKEN_USAGE.md` for context-efficiency policy and `PROJECT_BRIEF.md`
for the V1 scope and open TODOs.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
