# QA Checklist

## Content

- [x] Yusra Ayaz, approved title and 12+ years are consistent and centralised.
- [x] All five services include approved scope, outcome and specific CTA.
- [x] Women-focused purpose, including mothers and single mothers, is retained.
- [x] Phone, WhatsApp and email are correct.
- [x] No fake portrait, address, testimonial, review, location or credential appears.
- [x] No stale 11-year or four-plus-add-on model remains.

## Interface and accessibility

- [x] One H1 per page and logical section headings.
- [x] Skip link, focus styles, 44px mobile control and anchored-service offsets.
- [x] Persistent form labels, native required/email validation and honest email-app handoff.
- [x] Explicit single-column mobile fallbacks for multi-column sections.
- [x] Reduced motion, colour contrast and touch targets reviewed in code.
- [ ] Screen reader behaviour requires final testing with the client's preferred assistive technology.

## Technical and browser

- [x] TypeScript, lint and production build pass after final review.
- [x] Production audit reports no production vulnerabilities.
- [x] `/`, `/about`, `/services`, `/contact`, `/robots.txt`, `/sitemap.xml` return 200.
- [x] Desktop and mobile screenshots reviewed in headless Chrome.
- [x] Console-free route render, contact actions, mobile menu markup and form behaviour checked.

## Deployment boundary

- [x] No GoDaddy DNS or production domain configuration changed.
- [ ] Vercel preview remains the next external review step.
