import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import { businessProblems, solutions } from "@/content/site";

export default function HomeNarrative() {
  return (
    <section className="bg-ivory py-16 sm:py-24">
      <Container className="grid gap-14 md:grid-cols-2 md:gap-0">
        <div className="md:pr-12 lg:pr-16">
          <h2 className="max-w-xl font-display text-3xl leading-tight text-navy sm:text-4xl">
            {businessProblems.heading}
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-muted">{businessProblems.body}</p>
          <div className="mt-9 grid gap-6 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            {businessProblems.items.map((item) => (
              <article key={item.title} className="border-t border-navy/20 pt-4">
                <h3 className="font-display text-xl text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </article>
            ))}
          </div>
          <CTAButton href="/contact" variant="ghost" className="mt-8 w-fit">
            {businessProblems.cta}
          </CTAButton>
        </div>

        <div className="border-t border-gold/60 pt-10 md:border-t-0 md:border-l md:pl-12 md:pt-0 lg:pl-16">
          <h2 className="max-w-lg font-display text-3xl leading-tight text-navy sm:text-4xl">
            {solutions.heading}
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-muted">{solutions.body}</p>
          <ol className="mt-10 space-y-7">
            {solutions.items.map((item, index) => (
              <li key={item.title} className="grid grid-cols-[2rem_1fr] gap-3">
                <span className="font-display text-lg text-gold-deep" aria-hidden="true">0{index + 1}</span>
                <div>
                  <h3 className="font-display text-xl text-navy">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <CTAButton href="/services" variant="ghost" className="mt-9 w-fit">
            {solutions.cta}
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}
