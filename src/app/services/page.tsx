import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import ServiceSection from "@/components/sections/ServiceSection";
import FinalCTA from "@/components/sections/FinalCTA";
import { services } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive financial services designed to give your business clarity, control and confidence — bookkeeping, financial reporting, budgeting & forecasting, and tax & advisory.",
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
        <Container className="flex flex-col gap-20">
          {services.map((service, index) => (
            <ServiceSection key={service.slug} service={service} reverse={index % 2 === 1} />
          ))}
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
