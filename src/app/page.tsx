import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import HomeNarrative from "@/components/sections/HomeNarrative";
import ServicesPreview from "@/components/sections/ServicesPreview";
import FounderPreview from "@/components/sections/FounderPreview";
import TrustProcess from "@/components/sections/TrustProcess";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Financial Clarity & Strategy",
  description:
    "Ledger & Beyond Consultancy helps ambitious businesses see beyond the numbers, shape what's next and grow with confidence.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Financial Clarity & Strategy | Ledger & Beyond",
    description: "Ledger & Beyond Consultancy helps growing businesses build clearer numbers, stronger finance processes and better informed decisions.",
    url: "/",
    siteName: "Ledger & Beyond",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeNarrative />
      <ServicesPreview />
      <FounderPreview />
      <TrustProcess />
      <FinalCTA />
    </>
  );
}
