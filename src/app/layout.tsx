import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { company, seo } from "@/content/site";
import { organizationSchema } from "@/lib/organization-schema";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...(seo.siteUrl ? { metadataBase: new URL(seo.siteUrl) } : {}),
  title: {
    default: `${company.name} | ${company.tagline}`,
    template: seo.defaultTitleTemplate,
  },
  description: seo.defaultDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: company.name,
    description: seo.defaultDescription,
    siteName: company.shortName,
    type: "website",
    url: "/",
  },
  twitter: { card: "summary", title: company.name, description: seo.defaultDescription },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans text-ink">
        <a href="#main-content" className="fixed top-2 left-2 z-50 -translate-y-20 bg-gold px-4 py-2 font-semibold text-navy transition-transform focus:translate-y-0">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
