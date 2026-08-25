import { company, contact, seo } from "@/content/site";

/**
 * Only fields we can state as fact. No street address, no founding date
 * (unconfirmed) — those stay out until real. No sameAs until real social
 * accounts exist.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    ...(seo.siteUrl ? { url: seo.siteUrl } : {}),
    email: contact.email,
    telephone: contact.phoneHref.replace("tel:", ""),
    logo: seo.siteUrl ? `${seo.siteUrl}/brand/logo-horizontal.png` : "/brand/logo-horizontal.png",
  };
}
