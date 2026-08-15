import { company, seo } from "@/content/site";

/**
 * Only fields we can state as fact. No address, phone, or founding date —
 * those are unconfirmed (see PROJECT_BRIEF.md) and stay out until real.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    ...(seo.siteUrl ? { url: seo.siteUrl } : {}),
    logo: "/brand/logo-horizontal.png",
  };
}
