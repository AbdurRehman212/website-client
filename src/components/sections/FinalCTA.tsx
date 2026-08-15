import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import { bookConsultationHref } from "@/content/site";

export default function FinalCTA() {
  return (
    <section className="bg-navy-deep py-16">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-display text-3xl leading-tight text-ivory sm:text-4xl">
          Let&apos;s Build Something Meaningful Together
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-ivory/70">
          Whether you&apos;re just starting out or planning your next stage
          of growth, we&apos;re here to support your financial journey.
        </p>
        <CTAButton href={bookConsultationHref}>Book a Consultation</CTAButton>
      </Container>
    </section>
  );
}
