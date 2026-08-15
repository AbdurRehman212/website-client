import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesPreview from "@/components/sections/ServicesPreview";
import Approach from "@/components/sections/Approach";
import FounderPreview from "@/components/sections/FounderPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Financial Clarity & Strategy",
  description:
    "Ledger & Beyond Consultancy helps ambitious businesses build clarity in their numbers and a strategy for what comes next.",
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
