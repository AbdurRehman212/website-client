import CTAButton from "@/components/ui/CTAButton";
import { ServiceContent, bookConsultationHref } from "@/content/site";

export default function ServiceSection({ service }: { service: ServiceContent }) {
  return (
    <article id={service.slug} className="scroll-mt-28 border-t border-navy/15 pt-10">
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:gap-16">
        <div className="flex flex-col items-start">
          <span className="font-display text-3xl text-gold-deep">{service.number}</span>
          <p className="mt-3 text-sm font-semibold text-navy">{service.title}</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-navy sm:text-4xl">{service.headline}</h2>
          <p className="mt-5 max-w-lg leading-relaxed text-muted">{service.introduction}</p>
          <div className="mt-7 border-l border-gold pl-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-deep">What this means for your business</p>
            <p className="mt-2 font-display text-xl leading-relaxed text-navy">{service.outcome}</p>
          </div>
          <CTAButton href={bookConsultationHref} variant="ghost" className="mt-7 w-fit">
            {service.cta}
          </CTAButton>
        </div>

        <div className="relative overflow-hidden border-l-2 border-gold bg-navy/[0.035] p-7 sm:p-9">
          <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-bl-full border-b border-l border-gold/25" />
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-deep">Scope of support</p>
          <h3 className="mt-2 font-display text-2xl text-navy">What we can help with</h3>
          <ul className="mt-7 grid gap-x-8 gap-y-0 text-sm text-ink sm:grid-cols-2">
            {service.bullets.map((bullet, index) => (
              <li key={bullet} className="flex min-h-14 items-start gap-3 border-t border-navy/10 py-3 leading-relaxed">
                <span className="mt-0.5 font-display text-sm text-gold-deep" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
