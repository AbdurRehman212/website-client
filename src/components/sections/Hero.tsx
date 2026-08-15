import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import { bookConsultationHref } from "@/content/site";

export default function Hero() {
  return (
    <section className="bg-navy">
      <Container className="grid gap-10 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div className="flex flex-col items-start gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Welcome to Ledger &amp; Beyond
          </span>
          <h1 className="font-display text-4xl leading-tight text-ivory sm:text-5xl lg:text-6xl">
            Beyond the Books.
            <br />
            <span className="text-gold">Building Clarity.</span>
            <br />
            Driving Growth.
          </h1>
          <p className="max-w-md text-base leading-relaxed text-ivory/70 sm:text-lg">
            We help ambitious businesses make sense of their numbers, plan
            for what&apos;s next and move forward with confidence.
          </p>
          <CTAButton href={bookConsultationHref}>Book a Consultation</CTAButton>
        </div>

        <div
          role="img"
          aria-label="Founder photograph — asset pending"
          className="flex aspect-[4/5] w-full max-w-md items-center justify-center border border-dashed border-gold/40 bg-navy-deep/60 text-center lg:justify-self-end"
        >
          <span className="px-8 text-sm uppercase tracking-[0.15em] text-ivory/70">
            Founder photograph
            <br />
            asset pending
          </span>
        </div>
      </Container>
    </section>
  );
}
