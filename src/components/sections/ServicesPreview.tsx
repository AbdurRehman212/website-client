import Link from "next/link";
import Container from "@/components/ui/Container";
import { services, servicesIntro } from "@/content/site";

export default function ServicesPreview() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <h2 className="max-w-3xl font-display text-3xl leading-tight text-navy sm:text-4xl">
          {servicesIntro.heading}
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">{servicesIntro.body}</p>

        <div className="mt-12 grid border-t border-navy/15 sm:grid-cols-2 lg:grid-cols-6">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services#${service.slug}`}
              className={`group flex min-h-52 flex-col border-b border-navy/15 p-6 transition-colors hover:bg-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-gold-deep lg:col-span-2 ${index === 3 ? "lg:col-start-2" : ""}`}
            >
              <span className="font-display text-lg text-gold-deep">{service.number}</span>
              <h3 className="mt-8 font-display text-2xl leading-tight text-navy">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{service.shortDescription}</p>
              <span className="mt-auto pt-5 text-sm font-semibold text-navy group-hover:text-gold-deep">
                View service <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
