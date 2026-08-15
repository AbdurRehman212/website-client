import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import { approach } from "@/content/site";

export default function Approach() {
  return (
    <section className="bg-navy py-20">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div className="flex flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Our Approach
          </span>
          <h2 className="font-display text-3xl leading-tight text-ivory sm:text-4xl">
            More Than Numbers.
            <br />A Partnership You Can Rely On.
          </h2>
          <p className="max-w-md text-base leading-relaxed text-ivory/70">
            We go beyond compliance to become a genuine partner — bringing
            insight and strategy to every stage of the relationship.
          </p>
          <CTAButton href="/about" variant="outline" className="w-fit">
            Our Approach
          </CTAButton>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2">
          {approach.map((item) => (
            <li key={item.title} className="border-l-2 border-gold/50 pl-4">
              <h3 className="font-display text-lg text-ivory">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ivory/60">{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
