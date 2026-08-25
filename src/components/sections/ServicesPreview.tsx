import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { services, whatWeDo } from "@/content/site";

export default function ServicesPreview() {
  return (
    <section className="bg-ivory py-20">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow={whatWeDo.eyebrow}
          title={whatWeDo.heading}
          description={whatWeDo.body}
          align="center"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href="/services"
              className="group flex flex-col gap-3 border border-navy/10 bg-white p-6 transition-colors hover:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-deep"
            >
              <span className="font-display text-2xl text-gold-deep">{service.number}</span>
              <h3 className="font-display text-xl text-navy">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{service.shortDescription}</p>
              <span className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-navy transition-colors group-hover:text-gold-deep">
                Learn More &rarr;
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
