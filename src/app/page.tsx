import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesPreview from "@/components/sections/ServicesPreview";
import Approach from "@/components/sections/Approach";
import FounderPreview from "@/components/sections/FounderPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Financial Clarity & Strategy",
  description:
    "Ledger & Beyond Consultancy helps ambitious businesses see beyond the numbers, shape what's next and grow with confidence.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <Approach />
      <FounderPreview />
      <FinalCTA />
    </>
  );
}
