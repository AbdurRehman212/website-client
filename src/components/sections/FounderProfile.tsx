import Image from "next/image";
import Container from "@/components/ui/Container";
import { about, founder } from "@/content/site";

export default function FounderProfile() {
  return (
    <section className="bg-ivory pb-20">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
        <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-6 border border-navy/10 bg-white p-10">
          <Image
            src="/brand/logo-mark-01.png"
            alt=""
            width={900}
            height={900}
            className="w-3/5 h-auto"
          />
          <span aria-hidden="true" className="h-px w-16 bg-gold" />
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            {about.founderSection.eyebrow}
          </span>
          <h2 className="font-display text-3xl leading-tight text-navy sm:text-4xl">
            {about.founderSection.heading}
          </h2>
          <p className="font-display text-xl text-navy">{founder.name}</p>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-muted">{founder.title}</p>
          <div className="flex flex-col gap-4">
            {founder.bio?.map((paragraph) => (
              <p key={paragraph} className="max-w-xl text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
