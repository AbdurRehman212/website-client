import Container from "@/components/ui/Container";
import { founder } from "@/content/site";

export default function FounderProfile() {
  return (
    <section className="bg-ivory pb-20">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
        <div
          role="img"
          aria-label="Founder photograph — asset pending"
          className="flex aspect-[4/5] w-full items-center justify-center border border-dashed border-navy/20 bg-white"
        >
          <span className="px-8 text-center text-sm uppercase tracking-[0.15em] text-muted">
            Founder photograph
            <br />
            asset pending
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            Founder
          </span>
          <h2 className="font-display text-3xl text-navy">
            {founder.name ?? "Name — to be confirmed"}
          </h2>
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-muted">
            {founder.title ?? "Title — to be confirmed"}
          </p>
          <p className="max-w-xl text-base leading-relaxed text-muted">
            {founder.bio ??
              "A founder biography will be added here once supplied by the client — covering background, experience and what led to founding Ledger & Beyond Consultancy."}
          </p>
          {founder.quote ? (
            <blockquote className="border-l-2 border-gold/60 pl-4 font-display text-lg italic text-navy">
              &ldquo;{founder.quote}&rdquo;
            </blockquote>
          ) : null}
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
            {founder.credentials ?? "Credentials — to be confirmed"}
          </p>
        </div>
      </Container>
    </section>
  );
}
