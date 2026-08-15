import Link from "next/link";
import Container from "@/components/ui/Container";
import { company, nav, services, contact, social, bookConsultationHref } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-ivory/80">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3 lg:col-span-2">
          <span className="font-display text-2xl text-ivory">{company.shortName}</span>
          <p className="max-w-xs text-sm leading-relaxed">{company.tagline}</p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3 text-sm">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-ivory/50">
            Quick Links
          </span>
          <ul className="flex flex-col gap-2">
            {nav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={bookConsultationHref} className="transition-colors hover:text-gold">
                Book a Consultation
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col gap-3 text-sm">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-ivory/50">
            Services
          </span>
          <ul className="flex flex-col gap-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href="/services" className="transition-colors hover:text-gold">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-ivory/50">
            Get in Touch
          </span>
          {contact.email || contact.phone || contact.address ? (
            <ul className="flex flex-col gap-2">
              {contact.email ? <li>{contact.email}</li> : null}
              {contact.phone ? <li>{contact.phone}</li> : null}
              {contact.address ? <li>{contact.address}</li> : null}
            </ul>
          ) : (
            <p className="text-ivory/50">Contact details — to be confirmed.</p>
          )}
          {social.length > 0 ? (
            <ul className="mt-2 flex gap-4">
              {social.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-gold">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>

      <div className="border-t border-ivory/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {company.name}. All rights reserved.
          </p>
          <p>Prototype build — not yet in production.</p>
        </Container>
      </div>
    </footer>
  );
}
