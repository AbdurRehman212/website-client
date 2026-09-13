import Container from "@/components/ui/Container";
import { process, trustReasons } from "@/content/site";

export default function TrustProcess() {
  return (
    <>
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <h2 className="max-w-2xl font-display text-3xl leading-tight text-navy sm:text-4xl">
            Expertise You Can Rely On. Support You Can Understand.
          </h2>
          <div className="mt-12 grid border-t border-navy/15 md:grid-cols-5">
            {trustReasons.map((item) => (
              <article key={item.title} className="border-b border-navy/15 py-6 md:px-5 first:md:pl-0 last:md:pr-0">
                <h3 className="font-display text-lg text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-ivory py-14">
        <Container>
          <h2 className="font-display text-3xl text-navy">How it works</h2>
          <ol className="mt-8 grid gap-6 border-l border-gold pl-6 md:grid-cols-4 md:border-t md:border-l-0 md:pl-0">
            {process.map((item, index) => (
              <li key={item.title} className="relative md:pt-7">
                <span className="absolute top-2 -left-[1.72rem] h-2 w-2 bg-gold md:-top-[.3rem] md:left-0" aria-hidden="true" />
                <span className="text-xs font-semibold text-gold-deep">0{index + 1}</span>
                <h3 className="mt-1 font-display text-xl text-navy">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
