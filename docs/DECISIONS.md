# Decisions Log

## 2026-09-13 - Final production-readiness pass

**Experience standardised to 12+.** The newest About and Trust content repeats over 12 years and the newest visual reference shows 12+. The visible value is centralised as `founderExperience` so it can be changed once if the client confirms a different number.

**Five equal services.** Finance & Business Process Setup is the fifth substantive service, not an add-on. Its scope, outcome and CTA use the newest Word source.

**Homepage density.** Purpose, Vision and Mission remain on About. Home combines customer problem and solution in one editorial section, and combines founder biography with credibility. This preserves unique content while keeping the visitor path focused.

**Contact form handoff.** No backend provider was authorised. The required form validates locally and opens a populated email draft. It tells users that the enquiry is complete only after they send it from their email application; no false success state is shown.

**Founder visual.** No approved photo is present. Brand marks remain the only founder-area visual, and the reference portrait is not used.

**Logo integration.** The supplied PNGs already have transparent pixels. The visible rectangular feeling came from surrounding panels, so the header lockup was enlarged, the hero mark moved into a minimal circular contrast field for navy legibility, and founder marks now sit directly on ivory without white boxes.

**Security patch.** Next.js and `eslint-config-next` moved from 16.3.3 to 16.3.5 within the same stable release line so production dependencies resolve the patched image library.
