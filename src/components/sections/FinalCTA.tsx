import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import { bookConsultationHref, finalCta } from "@/content/site";

export default function FinalCTA() {
  return (
    <section className="bg-navy-deep py-16">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-display text-3xl leading-tight text-ivory sm:text-4xl">{finalCta.heading}</h2>
        <p className="max-w-xl text-base leading-relaxed text-ivory/70">{finalCta.body}</p>
        <CTAButton href={bookConsultationHref}>Book a Consultation</CTAButton>
      </Container>
    </section>
  );
}
