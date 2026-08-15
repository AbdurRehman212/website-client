import CTAButton from "@/components/ui/CTAButton";
import { ServiceContent, bookConsultationHref } from "@/content/site";

export default function ServiceSection({
  service,
  reverse = false,
}: {
  service: ServiceContent;
  reverse?: boolean;
}) {
  return (
    <div
      className={`grid gap-10 items-center lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="flex flex-col gap-4">
        <span className="font-display text-3xl text-gold-deep">{service.number}</span>
        <h2 className="font-display text-3xl leading-tight text-navy sm:text-4xl">
          {service.title}
        </h2>
        <p className="max-w-lg text-base leading-relaxed text-muted sm:text-lg">
          {service.shortDescription}
        </p>
        <ul className="flex flex-col gap-2 text-sm text-ink">
          {service.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold" aria-hidden="true" />
              {bullet}
            </li>
          ))}
        </ul>
        <CTAButton href={bookConsultationHref} variant="ghost" className="w-fit">
          Book a Consultation
        </CTAButton>
      </div>

      <div
        role="img"
        aria-label={`${service.title} — image asset pending`}
        className="flex aspect-[4/3] w-full items-center justify-center border border-dashed border-navy/20 bg-white"
      >
        <span className="px-8 text-center text-sm uppercase tracking-[0.15em] text-muted">
          Image
          <br />
          asset pending
        </span>
      </div>
    </div>
  );
}
