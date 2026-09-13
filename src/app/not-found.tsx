import Link from "next/link";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <Container>
        <p className="text-sm font-semibold text-gold-deep">Page not found</p>
        <h1 className="mt-4 max-w-xl font-display text-5xl leading-tight text-navy">This page is not in the ledger.</h1>
        <p className="mt-5 max-w-lg leading-relaxed text-muted">The address may have changed, or the page may no longer exist.</p>
        <Link href="/" className="mt-8 inline-flex min-h-12 items-center bg-gold px-6 py-3 text-sm font-semibold text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-deep">Return Home</Link>
      </Container>
    </section>
  );
}
