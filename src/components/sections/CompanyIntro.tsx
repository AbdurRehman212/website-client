import Container from "@/components/ui/Container";
import { company } from "@/content/site";

export default function CompanyIntro() {
  return (
    <section className="bg-ivory py-20">
      <Container className="flex flex-col items-start gap-4">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
          Who We Are
        </span>
        <h2 className="font-display max-w-2xl text-3xl leading-tight text-navy sm:text-4xl">
          A Partner in the Numbers — and What Comes Next
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {company.description} We work closely with each client to turn
          financial data into decisions they can act on with confidence.
        </p>
      </Container>
    </section>
  );
}
