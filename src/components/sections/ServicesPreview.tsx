import Link from "next/link";
import { Calculator, ChartNoAxesCombined, FileChartColumn, Percent, Workflow, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import { services, servicesIntro } from "@/content/site";
import Reveal from "@/components/ui/Reveal";

const serviceIcons: Record<string, LucideIcon> = {
  bookkeeping: Calculator,
  "financial-reporting": FileChartColumn,
  "budgeting-forecasting": ChartNoAxesCombined,
  "tax-advisory": Percent,
  "finance-process-setup": Workflow,
};

export default function ServicesPreview() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <h2 className="max-w-3xl font-display text-3xl leading-tight text-navy sm:text-4xl">
          {servicesIntro.heading}
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">{servicesIntro.body}</p>

        <Reveal className="mt-12 grid border-t border-navy/15 sm:grid-cols-2 lg:grid-cols-6">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.slug];
            return (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className={`group flex min-h-52 flex-col border-b border-navy/15 p-6 transition-colors hover:bg-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-gold-deep lg:col-span-2 ${index === 3 ? "lg:col-start-2" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg text-gold-deep">{service.number}</span>
                  <Icon aria-hidden="true" strokeWidth={1.5} className="h-6 w-6 text-gold-deep transition-transform duration-200 group-hover:-translate-y-0.5" />
                </div>
                <h3 className="mt-7 font-display text-2xl leading-tight text-navy">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.shortDescription}</p>
                <span className="mt-auto pt-5 text-sm font-semibold text-navy group-hover:text-gold-deep">
                  View service <span aria-hidden="true">→</span>
                </span>
              </Link>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
