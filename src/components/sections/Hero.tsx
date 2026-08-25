import Image from "next/image";
import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import { bookConsultationHref, hero } from "@/content/site";

export default function Hero() {
  return (
    <section className="bg-navy">
      <Container className="grid gap-10 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div className="flex flex-col items-start gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {hero.eyebrow}
          </span>
          <h1 className="font-display text-4xl leading-tight text-ivory sm:text-5xl lg:text-6xl">
            {hero.headingLines[0]}
            <br />
            <span className="text-gold">{hero.headingLines[1]}</span>
            <br />
            {hero.headingLines[2]}
          </h1>
          <p className="max-w-md text-base leading-relaxed text-ivory/70 sm:text-lg">{hero.subtext}</p>
          <CTAButton href={bookConsultationHref}>Book a Consultation</CTAButton>
        </div>

        <div className="relative flex aspect-square w-full max-w-md items-center justify-center bg-ivory p-10 lg:justify-self-end">
          <span aria-hidden="true" className="pointer-events-none absolute inset-6 border border-gold/40" />
          <Image
            src="/brand/logo-mark-02.png"
            alt=""
            width={900}
            height={900}
            className="relative w-2/3 h-auto"
          />
        </div>
      </Container>
    </section>
  );
}
