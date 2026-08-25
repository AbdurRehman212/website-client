import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CompanyIntro from "@/components/sections/CompanyIntro";
import FounderProfile from "@/components/sections/FounderProfile";
import ValuesGrid from "@/components/sections/ValuesGrid";
import Approach from "@/components/sections/Approach";
import FinalCTA from "@/components/sections/FinalCTA";

const description =
  "Learn about Ledger & Beyond Consultancy, the values that guide our work, and the approach we bring to every client relationship.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: { title: "About | Ledger & Beyond", description },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Led by Expertise. Built with Perspective."
        description="Ledger & Beyond Consultancy was founded on the belief that every business deserves financial clarity, strategic insight and a partner who genuinely understands its goals."
      />
      <CompanyIntro />
      <FounderProfile />
      <ValuesGrid />
      <Approach />
      <FinalCTA />
    </>
  );
}
