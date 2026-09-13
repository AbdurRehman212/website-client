# Ledger & Beyond Consultancy Website

Production-oriented Next.js website for Ledger & Beyond Consultancy.

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. The public routes are `/`, `/about`, `/services` and `/contact`.

## Verification

```bash
npx tsc --noEmit
npm run lint
npm run build
npm audit --omit=dev
```

Business content is centralised in `src/content/site.ts`. See `docs/CONTENT_SOURCE.md`, `docs/FINAL_AUDIT.md`, `docs/FINAL_IMPLEMENTATION_PLAN.md`, `docs/DECISIONS.md` and `docs/QA_CHECKLIST.md` before changing facts or page structure.

The site is prepared for Vercel. DNS and production-domain changes are outside this repository and should only follow client approval.
