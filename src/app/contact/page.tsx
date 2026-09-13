import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import ContactMethods from "@/components/sections/ContactMethods";
import ContactForm from "@/components/sections/ContactForm";
import FinalCTA from "@/components/sections/FinalCTA";
import { contact } from "@/content/site";

const description =
  "Get in touch with Ledger & Beyond Consultancy by phone, WhatsApp or email to book a consultation.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact | Ledger & Beyond", description, url: "/contact", siteName: "Ledger & Beyond", type: "website" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Talk About Your Business"
        description={contact.intro}
      />

      <section className="bg-ivory py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <h2 className="font-display text-3xl text-navy">Contact us directly</h2>
            <div className="mt-5"><ContactMethods /></div>
            <div className="mt-10 border-t border-gold pt-6">
              <h2 className="font-display text-2xl text-navy">What Happens Next</h2>
              <ol className="mt-5 space-y-4">
                {contact.nextSteps.map((step, index) => (
                  <li key={step} className="grid grid-cols-[1.75rem_1fr] gap-3 text-sm leading-relaxed text-muted">
                    <span className="font-display text-gold-deep">0{index + 1}</span>{step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <ContactForm />
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
