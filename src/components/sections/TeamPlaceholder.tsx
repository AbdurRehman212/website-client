import Container from "@/components/ui/Container";

/**
 * Team-section architecture, intentionally unpopulated — see brief §8.
 * Remove this component (and the section, not just its contents) once
 * real team members are confirmed and a proper TeamGrid replaces it.
 */
export default function TeamPlaceholder() {
  return (
    <section className="bg-ivory py-16">
      <Container>
        <div className="flex flex-col items-center gap-2 border border-dashed border-navy/20 bg-white/60 px-8 py-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
            Development placeholder — not client content
          </span>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            A team section is architected and ready. It stays empty until
            real team members and photos are confirmed.
          </p>
        </div>
      </Container>
    </section>
  );
}
