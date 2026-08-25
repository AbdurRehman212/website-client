import CTAButton from "@/components/ui/CTAButton";
import { ServiceContent, bookConsultationHref } from "@/content/site";

export default function ServiceSection({ service }: { service: ServiceContent }) {
  return (
    <div className="grid gap-8 border-t border-navy/10 pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
      <div className="flex flex-col gap-3">
        <span className="font-display text-4xl text-gold-deep">{service.number}</span>
        <h2 className="font-display text-2xl leading-tight text-navy sm:text-3xl">{service.title}</h2>
        <p className="max-w-md text-base leading-relaxed text-muted">{service.shortDescription}</p>
        <CTAButton href={bookConsultationHref} variant="ghost" className="mt-2 w-fit">
          Book a Consultation
        </CTAButton>
      </div>

      <ul className="grid gap-x-8 gap-y-3 text-sm text-ink sm:grid-cols-2">
        {service.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold" aria-hidden="true" />
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
