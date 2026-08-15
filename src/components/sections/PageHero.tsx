import Container from "@/components/ui/Container";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-navy py-16 sm:py-20">
      <Container className="flex flex-col gap-4">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </span>
        <h1 className="font-display text-4xl leading-tight text-ivory sm:text-5xl">{title}</h1>
        {description ? (
          <p className="max-w-2xl text-base leading-relaxed text-ivory/70 sm:text-lg">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
