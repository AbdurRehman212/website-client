# QA Checklist

Re-run this whenever content or components change materially. Status
below reflects the 2026-08-25 final integration pass.

## Content integrity

- [x] No fake founder credentials, client counts, awards, or testimonials
- [x] Founder name/title/bio match `docs/CONTENT_SOURCE.md` exactly
- [x] No founder photograph anywhere
- [x] Confidentiality present, Empowerment removed (grep clean)
- [x] No Dubai/London/Toronto/Sydney or other unconfirmed locations
- [x] No fake social links; social section omitted entirely
- [x] No "pending" / "coming soon" / "asset pending" / dev-placeholder text
- [x] No em dash, en dash, or double hyphen in visible copy (grep clean)
- [x] No formulaic AI phrasing (grep clean)
- [x] Add-on service present and visually distinct from the 4 primary services
- [x] Contact details correct (phone, WhatsApp, email) with working
      `tel:` / `wa.me` / `mailto:` links

## Brand / UI

- [x] Header logo enlarged (h-12 → h-16 across breakpoints) and links to `/`
- [x] Navy / gold / ivory palette preserved, no gradients or glassmorphism
- [x] Founder-image areas replaced with brand-mark treatments (panel on
      navy Hero, direct placement on ivory sections)
- [x] No dashed "asset pending" boxes remaining anywhere

## Technical / SEO / Accessibility

- [x] `tsc --noEmit` clean
- [x] `next lint` clean
- [x] `next build` succeeds (all 4 routes prerendered as static)
- [x] Canonical URLs set per page via `alternates.canonical`
- [x] Organization JSON-LD includes name, url, email, telephone, logo
- [x] Sitemap and robots.txt resolve against `https://ledgerbeyond.com`
- [x] One `<h1>` per page (verified via rendered HTML)
- [x] Runtime route sweep: `/`, `/about`, `/services`, `/contact`,
      `/sitemap.xml`, `/robots.txt` all return 200 against a production build
- [ ] Full manual keyboard-only + screen-reader pass, and pixel-level
      responsive check at 360/390/768/1024/1280/1440px — not run this
      pass (no browser/devtools available in this environment); code-level
      review confirms focus-visible states, semantic landmarks, and
      responsive Tailwind classes are in place, but this is not a
      substitute for an actual browser check before client sign-off.

## Build

- [x] Next.js 16.3.3, React 19.2.8, Tailwind 4.3.3 (see DECISIONS.md)
- [x] `npm audit`: 0 vulnerabilities at time of this pass
