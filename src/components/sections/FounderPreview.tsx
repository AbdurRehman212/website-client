import Image from "next/image";
import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import { founder } from "@/content/site";

export default function FounderPreview() {
  return (
    <section className="bg-ivory py-20">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div className="flex aspect-square w-full max-w-sm flex-col items-center justify-center gap-6 bg-white p-10">
          <Image
            src="/brand/logo-mark-02.png"
            alt=""
            width={900}
            height={900}
            className="w-3/5 h-auto"
          />
          <span aria-hidden="true" className="h-px w-16 bg-gold" />
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            Led By Expertise
          </span>
          <h2 className="font-display text-3xl leading-tight text-navy sm:text-4xl">{founder.name}</h2>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-muted">{founder.title}</p>
          <p className="max-w-xl text-base leading-relaxed text-muted">{founder.bio?.[0]}</p>
          <CTAButton href="/about" variant="ghost" className="w-fit">
            Meet the Founder
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}
