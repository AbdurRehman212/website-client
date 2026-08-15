import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import { contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ledger & Beyond Consultancy to book a consultation and start building financial clarity for your business.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Book a Consultation"
        description="Tell us a little about your business and what you're looking for — we'll be in touch to arrange a conversation."
      />

      <section className="bg-ivory py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="border border-navy/10 bg-white p-6 sm:p-10">
            <ContactForm />
          </div>

          <aside className="flex flex-col gap-6">
            <div>
              <h2 className="font-display text-xl text-navy">Contact Details</h2>
              {contact.email || contact.phone || contact.address ? (
                <ul className="mt-3 flex flex-col gap-2 text-sm text-muted">
                  {contact.email ? <li>{contact.email}</li> : null}
                  {contact.phone ? <li>{contact.phone}</li> : null}
                  {contact.address ? <li>{contact.address}</li> : null}
                </ul>
              ) : (
                <p className="mt-3 text-sm text-muted">
                  Direct contact details will be added here once confirmed.
                </p>
              )}
            </div>

            <div className="border border-dashed border-navy/20 bg-white/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                Prototype notice
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{contact.formNote}</p>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
