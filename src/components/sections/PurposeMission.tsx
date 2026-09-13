import Container from "@/components/ui/Container";
import { purposeVisionMission, trustReasons } from "@/content/site";

export default function PurposeMission() {
  return (
    <>
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <h2 className="max-w-2xl font-display text-3xl leading-tight text-navy sm:text-4xl">
            A practice built with purpose.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {purposeVisionMission.map((item, index) => (
              <article key={item.title} className={`border-t pt-6 ${index === 1 ? "border-gold" : "border-navy/20"}`}>
                <p className="text-sm font-semibold text-gold-deep">{item.title}</p>
                <h3 className="mt-3 font-display text-2xl leading-tight text-navy">{item.heading}</h3>
                <p className="mt-3 leading-relaxed text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-ivory py-16 sm:py-20">
        <Container className="grid gap-10 md:grid-cols-[.75fr_1.25fr]">
          <div>
            <h2 className="font-display text-3xl leading-tight text-navy sm:text-4xl">Beyond the Numbers</h2>
            <p className="mt-4 font-display text-xl text-gold-deep">Accurate Today. Empowered Tomorrow.</p>
          </div>
          <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {trustReasons.map((item) => (
              <article key={item.title} className="border-t border-navy/15 pt-4">
                <h3 className="font-display text-xl text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
