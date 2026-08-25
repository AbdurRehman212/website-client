import Link from "next/link";
import Container from "@/components/ui/Container";
import { company, nav, services, contact, bookConsultationHref } from "@/content/site";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";

const linkClass =
  "transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

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
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={bookConsultationHref} className={linkClass}>
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
                <Link href="/services" className={linkClass}>
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
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href={contact.phoneHref}
                aria-label={`Call Ledger & Beyond at ${contact.phone}`}
                className={`flex items-center gap-2 ${linkClass}`}
              >
                <PhoneIcon className="h-4 w-4" />
                {contact.phone}
              </a>
            </li>
            <li>
              <a
                href={contact.whatsappHref}
                aria-label="Contact Ledger & Beyond on WhatsApp"
                className={`flex items-center gap-2 ${linkClass}`}
              >
                <WhatsAppIcon className="h-4 w-4" />
                {contact.whatsapp}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                aria-label={`Email Ledger & Beyond at ${contact.email}`}
                className={`flex items-center gap-2 ${linkClass}`}
              >
                <MailIcon className="h-4 w-4" />
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-ivory/10">
        <Container className="py-6 text-xs text-ivory/50">
          <p>
            &copy; {year} {company.name}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
