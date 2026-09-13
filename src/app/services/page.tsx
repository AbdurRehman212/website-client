import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import ServiceSection from "@/components/sections/ServiceSection";
import FinalCTA from "@/components/sections/FinalCTA";
import { services } from "@/content/site";

const description =
  "Bookkeeping, financial reporting, budgeting, forecasting, tax and finance process support for growing businesses.";

export const metadata: Metadata = {
  title: "Services",
  description,
  alternates: { canonical: "/services" },
  openGraph: { title: "Services | Ledger & Beyond", description, url: "/services", siteName: "Ledger & Beyond", type: "website" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Financial Support Built Around Your Business."
        description="From accurate records to stronger processes and forward planning, our services help you build clarity, control and confidence."
      />

      <section className="bg-ivory py-20">
        <Container className="flex flex-col gap-20 sm:gap-28">
          {services.map((service) => (
            <ServiceSection key={service.slug} service={service} />
          ))}
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
