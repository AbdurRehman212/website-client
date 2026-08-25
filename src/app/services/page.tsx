import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceSection from "@/components/sections/ServiceSection";
import AddOnService from "@/components/sections/AddOnService";
import FinalCTA from "@/components/sections/FinalCTA";
import { services } from "@/content/site";

const description =
  "Comprehensive financial services designed to give your business clarity, control and confidence: bookkeeping, financial reporting, budgeting and forecasting, and tax and advisory.";

export const metadata: Metadata = {
  title: "Services",
  description,
  alternates: { canonical: "/services" },
  openGraph: { title: "Services | Ledger & Beyond", description },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Solutions That Go Beyond the Books."
        description="Comprehensive financial services designed to give your business clarity, control and confidence."
      />

      <section className="bg-ivory py-20">
        <Container className="flex flex-col gap-16">
          {services.map((service) => (
            <ServiceSection key={service.slug} service={service} />
          ))}
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="flex flex-col gap-10">
          <SectionHeading eyebrow="Add On Services" title="A Further Layer of Support" align="left" />
          <AddOnService />
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
