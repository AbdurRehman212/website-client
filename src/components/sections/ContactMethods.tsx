import { contact } from "@/content/site";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";

export default function ContactMethods() {
  const methods = [
    {
      label: "Phone",
      value: contact.phone,
      href: contact.phoneHref,
      icon: PhoneIcon,
      accessibleLabel: `Call Ledger & Beyond at ${contact.phone}`,
    },
    {
      label: "WhatsApp",
      value: contact.whatsapp,
      href: contact.whatsappHref,
      icon: WhatsAppIcon,
      accessibleLabel: "Contact Ledger & Beyond on WhatsApp",
    },
    {
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: MailIcon,
      accessibleLabel: `Email Ledger & Beyond at ${contact.email}`,
    },
  ];

  return (
    <div className="grid gap-4">
      {methods.map(({ label, value, href, icon: Icon, accessibleLabel }) => (
        <a
          key={label}
          href={href}
          aria-label={accessibleLabel}
          className="group grid min-h-20 grid-cols-[1.5rem_1fr] items-center gap-4 border-t border-navy/15 py-4 transition-colors hover:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-deep"
        >
          <Icon className="h-6 w-6 text-gold-deep" />
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">{label}</span>
            <p className="mt-1 font-display text-lg text-navy group-hover:text-gold-deep">{value}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
