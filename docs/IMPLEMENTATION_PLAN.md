# Implementation Plan — Final Content Integration Pass

Status snapshot for the 2026-08-25 pass that replaced prototype content
with verified client copy. See `docs/DECISIONS.md` for the reasoning
behind specific technical choices and `docs/QA_CHECKLIST.md` for the
verification gate.

## Graph

Planner → Implementer → 3 independent reviewers (parallel) → consolidated
findings → Implementer fixes accepted findings → final verifier → runtime
and build QA.

## Phases

1. **Audit** — repo structure, dependency versions vs. registry, existing
   content/components, supplied logo assets, reference design, docx
   source. Done inline (not delegated) since it directly informs every
   later phase.
2. **Content model** — rewrite `src/content/site.ts` as the single typed
   source for hero/approach/about/services/values/founder/contact copy.
3. **Component wiring** — every section component reads from `site.ts`
   instead of hardcoding copy in JSX; placeholder/"asset pending" states
   replaced with real content or brand-mark treatments.
4. **Pages** — About (drop team placeholder), Services (add-on service
   section), Contact (direct contact methods, drop fake-success form).
5. **SEO** — canonical `alternates` per page, Organization JSON-LD with
   verified email/phone, sitemap/robots driven by the real production
   `seo.siteUrl`.
6. **Dependency patch** — Next.js bumped to the actual latest registry
   stable (16.3.3).
7. **Reviewer pass** — three independent agents (content/factual,
   brand/UI/responsive, technical/SEO/a11y/perf), each reporting findings
   only, no overlapping edits.
8. **Fix + final verify** — implementer applies accepted findings; build,
   lint, typecheck, and a runtime route sweep re-run before sign-off.

## Notes for future passes

- Don't reintroduce a contact form until a real delivery backend is
  chosen — the direct-contact approach is deliberate, not a stopgap.
- If a founder headshot is supplied later, swap the brand-mark panel in
  `FounderPreview`/`FounderProfile` for a real `<Image>` — the layout slot
  is already sized for it.
- `ServiceSection` currently has no image slot at all (text/typography
  only, by design — see DECISIONS.md). Adding real service photography
  later is a deliberate redesign, not a drop-in swap.
