# Content Source of Truth

Verified client copy, provided 2026-08-25 via `project data/WEBSITE CONTENT.docx`
and the final integration brief. This document is the reference for what
is *confirmed*; `src/content/site.ts` is the typed implementation of it.
Do not re-derive copy from the old `references/website-reference.jpeg` —
that file is layout/visual reference only, its text is prototype content.

## Company

- Name: Ledger & Beyond Consultancy
- Tagline (from logo): Accurate Today. Strategic Tomorrow.
- Canonical domain: https://ledgerbeyond.com

## Founder

- Yusra Ayaz — Founder | Chartered Accountant (ICAEW UK)
- 11 years of experience across accounting, finance and taxation.
- No photograph is used anywhere on the site (client instruction). The
  founder-image areas use the Ledger & Beyond brand mark instead.
- No additional credentials, memberships, or biography details exist
  beyond the four bio paragraphs in `src/content/site.ts` — do not extend.

## Contact

- Phone / WhatsApp: 0323 2007005 (`tel:+923232007005`, `wa.me/923232007005`)
- Email: info@ledgerbeyond.com
- No physical address, no social media accounts — omit both, don't stub them.

## Services

Four primary services (Bookkeeping, Financial Reporting, Budgeting &
Forecasting, Tax & Advisory) plus one add-on (Finance & Business Process
Setup, presented as a distinct, unnumbered offering — not a 5th primary
service). Full copy lives in `src/content/site.ts` (`services`,
`addOnService`).

## Values

Exactly four: Integrity, Excellence, Confidentiality, Collaboration.
Confidentiality replaced the old prototype's "Empowerment" — if this
regresses anywhere, it's a bug.

## Copy style rules (permanent)

- No em dash, en dash, or double hyphen in visible marketing copy. Ordinary
  hyphens are also avoided in visible copy; restructure with commas,
  periods, or colons instead. (Code comments and CSS custom-property names
  are not "visible marketing copy" — leave those alone.)
- No formulaic AI phrasing ("Whether you are...", "Unlock...", "Seamlessly...",
  "Navigate the complexities...", etc).
- Do not invent founder credentials, client counts, office locations,
  awards, testimonials, or regulatory claims. If it's not in this file or
  `site.ts`, treat it as unconfirmed.
