import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { nav, bookConsultationHref, company } from "@/content/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-navy/10 bg-ivory/95 backdrop-blur-sm">
      <Container className="flex h-[72px] items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-deep"
        >
          <Image
            src="/brand/logo-horizontal.png"
            alt={company.name}
            width={280}
            height={104}
            priority
            className="h-14 w-auto sm:h-16"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          <NavLinks
            links={nav}
            className="flex items-center gap-8 text-sm font-medium uppercase tracking-[0.06em] text-navy"
            accentClassName="text-gold-deep"
            accentHoverClassName="hover:text-gold-deep"
          />
          <CTAButton href={bookConsultationHref} className="text-xs">
            Book a Consultation
          </CTAButton>
        </nav>

        <MobileMenu />
      </Container>
    </header>
  );
}
