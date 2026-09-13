import Image from "next/image";
import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import { credibility, founder } from "@/content/site";

export default function FounderPreview() {
  return (
    <section className="bg-ivory py-16 sm:py-24">
      <Container className="grid gap-10 md:grid-cols-[.75fr_1.25fr] md:items-center lg:gap-16">
        <div className="relative flex aspect-[4/5] max-h-[34rem] items-center justify-center overflow-hidden p-6 sm:p-10">
          <Image src="/brand/logo-mark-01.png" alt="" width={900} height={900} className="h-auto w-[72%]" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-deep">Founder led expertise</p>
          <h2 className="mt-4 font-display text-4xl text-navy sm:text-5xl">{founder.name}</h2>
          <p className="mt-2 font-medium text-navy">{founder.title}</p>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">{founder.shortBio}</p>
          <CTAButton href="/about" variant="ghost" className="mt-7 w-fit">Meet Our Founder</CTAButton>

          <dl className="mt-10 grid gap-x-8 gap-y-6 border-t border-navy/15 pt-7 sm:grid-cols-2">
            {credibility.map((item) => (
              <div key={item.value}>
                <dt className="text-sm leading-relaxed text-muted">{item.label}</dt>
                <dd className="mt-1 font-display text-xl text-navy">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
