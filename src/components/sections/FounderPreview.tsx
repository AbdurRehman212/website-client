import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import { founder } from "@/content/site";

export default function FounderPreview() {
  return (
    <section className="bg-ivory py-20">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div
          role="img"
          aria-label="Founder photograph — asset pending"
          className="flex aspect-square w-full max-w-sm items-center justify-center border border-dashed border-navy/20 bg-white"
        >
          <span className="px-8 text-center text-sm uppercase tracking-[0.15em] text-muted">
            Founder photograph
            <br />
            asset pending
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            Led By Expertise
          </span>
          <h2 className="font-display text-3xl leading-tight text-navy sm:text-4xl">
            {founder.name ?? "Founder profile — details to be added"}
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-muted">
            {founder.bio ??
              "A founder biography will appear here once details are confirmed. This section introduces the person behind Ledger & Beyond and the philosophy that shapes how the firm works with clients."}
          </p>
          <CTAButton href="/about" variant="ghost" className="w-fit">
            Meet the Founder
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}
