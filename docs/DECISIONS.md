# Decisions Log

## 2026-08-25 — Final content integration pass

**Node / Next.js / React / Tailwind versions.** Audited the npm registry
directly rather than trusting an unverifiable claim in the source brief
about an "August 26, 2026 Next.js security release." As of this audit:

- Next.js: upgraded 16.3.0 → **16.3.3** (latest published stable patch on
  the registry; no canary/beta/RC used). No evidence of a separate,
  not-yet-published out-of-band security release was found — if one lands
  later, re-run `npm view next dist-tags.latest` and update.
- React: 19.2.8 (already latest stable, no change).
- Tailwind CSS: 4.3.3 (already latest stable, no change).
- Node.js: the sandbox/dev machine runs **22.22.0**. The brief's target of
  Node 24 LTS is a deployment-environment setting (Vercel project config),
  not a repo-level change — Node runtime isn't something `npm install`
  touches. Next.js 16.3.3 supports Node ≥ 20.9, so 22.22.0 is compatible
  today. Set Node 24 LTS explicitly in Vercel's project settings when
  connecting deployment (see Remaining External Work).

**Contact form removed.** The prototype `ContactForm` faked a successful
submission with no backend. Per the brief, no form backend is being added
in V1, so the misleading success state had to go. Replaced with direct
`tel:` / `wa.me` / `mailto:` contact method cards on `/contact` — simpler,
honest, and consistent with "no CMS / no form provider" as a V1 non-goal.

**Founder image treatment.** No founder photograph exists or will be used.
Every area that previously showed a dashed "photograph asset pending" box
(Hero, FounderPreview, FounderProfile) now shows the Ledger & Beyond brand
mark instead — on the navy Hero section, the mark sits inside an ivory
panel with a thin gold rule, since the mark's ink (navy + gold) is not
legible directly on a navy background. On ivory/white sections the mark is
placed directly, no panel needed.

**Service images removed, not stubbed.** No product photography was
supplied for the four services. Rather than show another empty "asset
pending" box, `ServiceSection` was redesigned as a text/typography layout
(numeral, heading, description, bullet list) — no image slot at all.

**Team section removed.** `TeamPlaceholder` displayed a "development
placeholder, not client content" notice. No team members are confirmed,
and there is no confirmed intent to add a team section, so the component
and its usage were deleted rather than left visible.

**WhatsApp icon.** Built as a small custom inline SVG rather than sourcing
Meta's trademarked WhatsApp glyph — avoids any licensing question while
still giving a recognisable messaging icon with an accessible label
("Contact Ledger & Beyond on WhatsApp").
