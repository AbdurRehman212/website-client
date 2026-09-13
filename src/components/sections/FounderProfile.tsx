import Image from "next/image";
import Container from "@/components/ui/Container";
import { founder, founderExperience } from "@/content/site";

export default function FounderProfile() {
  return (
    <section className="bg-ivory py-16 sm:py-24">
      <Container className="grid gap-10 md:grid-cols-[.72fr_1.28fr] md:items-start lg:gap-16">
        <div className="md:sticky md:top-28">
          <div className="flex aspect-[4/5] items-center justify-center p-6 sm:p-10">
            <Image src="/brand/logo-mark-01.png" alt="" width={900} height={900} className="h-auto w-[72%]" />
          </div>
          <dl className="grid grid-cols-2 border-y border-navy/10">
            <div className="p-5">
              <dt className="text-xs text-muted">Experience</dt>
              <dd className="mt-1 font-display text-xl text-navy">{founderExperience.display}</dd>
            </div>
            <div className="border-l border-navy/10 p-5">
              <dt className="text-xs text-muted">Qualification</dt>
              <dd className="mt-1 font-display text-xl text-navy">ICAEW, UK</dd>
            </div>
          </dl>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-deep">Meet the founder</p>
          <h2 className="mt-4 font-display text-4xl text-navy sm:text-5xl">{founder.name}</h2>
          <p className="mt-2 font-medium text-navy">{founder.title}</p>
          <p className="mt-7 max-w-2xl font-display text-2xl leading-relaxed text-navy">{founder.shortBio}</p>
          <div className="mt-7 space-y-5">
            {founder.bio.map((paragraph) => (
              <p key={paragraph} className="max-w-2xl leading-relaxed text-muted">{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
