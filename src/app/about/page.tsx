import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import FounderProfile from "@/components/sections/FounderProfile";
import PurposeMission from "@/components/sections/PurposeMission";
import FinalCTA from "@/components/sections/FinalCTA";

const description =
  "Meet Yusra Ayaz and learn how Ledger & Beyond Consultancy combines chartered accounting expertise with practical, purpose-led support.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: { title: "About | Ledger & Beyond", description, url: "/about", siteName: "Ledger & Beyond", type: "website" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Ledger & Beyond Consultancy"
        title="Led by Expertise. Built with Purpose."
        description="Professional expertise, practical financial guidance and a commitment to creating value that lasts."
      />
      <FounderProfile />
      <PurposeMission />
      <FinalCTA />
    </>
  );
}
