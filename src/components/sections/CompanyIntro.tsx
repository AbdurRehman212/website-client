import Container from "@/components/ui/Container";
import { about } from "@/content/site";

export default function CompanyIntro() {
  return (
    <section className="bg-ivory py-20">
      <Container className="flex flex-col items-start gap-4">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
          {about.whoWeAre.eyebrow}
        </span>
        <h2 className="font-display max-w-2xl text-3xl leading-tight text-navy sm:text-4xl">
          {about.whoWeAre.heading}
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{about.whoWeAre.body}</p>
      </Container>
    </section>
  );
}
