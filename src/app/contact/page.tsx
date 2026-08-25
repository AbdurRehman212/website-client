import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import ContactMethods from "@/components/sections/ContactMethods";

const description =
  "Get in touch with Ledger & Beyond Consultancy by phone, WhatsApp or email to book a consultation.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact | Ledger & Beyond", description },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Book a Consultation"
        description="Reach out by phone, WhatsApp or email and we will get back to you to arrange a conversation about your business."
      />

      <section className="bg-ivory py-20">
        <Container>
          <ContactMethods />
        </Container>
      </section>
    </>
  );
}
