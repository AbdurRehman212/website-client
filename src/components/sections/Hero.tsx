import Image from "next/image";
import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import { bookConsultationHref, hero } from "@/content/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <Container className="grid min-h-[calc(100dvh-73px)] gap-10 py-14 md:grid-cols-[1.15fr_.85fr] md:items-center lg:py-20">
        <div className="flex flex-col items-start gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {hero.eyebrow}
          </span>
          <h1 className="font-display text-[clamp(2.7rem,5.2vw,4.6rem)] leading-[1.04] tracking-[-0.025em] text-ivory">
            {hero.headingLines[0]}
            <br />
            <span className="text-gold">{hero.headingLines[1]}</span>
            <br />
            {hero.headingLines[2]}
          </h1>
          <p className="max-w-md text-base leading-relaxed text-ivory/75 sm:text-lg">{hero.subtext}</p>
          <CTAButton href={bookConsultationHref}>Book a Consultation</CTAButton>
        </div>

        <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center md:max-w-md md:justify-self-end">
          <span aria-hidden="true" className="absolute inset-[8%] rounded-full bg-ivory" />
          <span aria-hidden="true" className="pointer-events-none absolute inset-[12%] rounded-full border border-gold/40" />
          <Image
            src="/brand/logo-mark-02.png"
            alt=""
            width={900}
            height={900}
            className="relative h-auto w-3/5"
          />
        </div>
      </Container>
    </section>
  );
}
