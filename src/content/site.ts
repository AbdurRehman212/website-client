/**
 * Central, typed content source. Unknown/unconfirmed facts are `null`,
 * never a plausible-sounding guess — see PROJECT_BRIEF.md. Components
 * render an explicit "pending" treatment for `null` fields.
 */

export type Maybe<T> = T | null;

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceContent {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  bullets: string[];
  image: Maybe<string>;
}

export interface ValueContent {
  title: string;
  description: string;
}

export interface ApproachItem {
  title: string;
  description: string;
}

export interface FounderContent {
  name: Maybe<string>;
  title: Maybe<string>;
  credentials: Maybe<string>;
  bio: Maybe<string>;
  quote: Maybe<string>;
  photo: Maybe<string>;
  linkedin: Maybe<string>;
}

export const company = {
  name: "Ledger & Beyond Consultancy",
  shortName: "Ledger & Beyond",
  tagline: "Accurate Today. Strategic Tomorrow.",
  description:
    "A financial consultancy helping businesses build clarity in their numbers and a strategy for what comes next.",
};

export const nav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const bookConsultationHref = "/contact";

export const services: ServiceContent[] = [
  {
    slug: "bookkeeping",
    number: "01",
    title: "Bookkeeping",
    shortDescription:
      "Accurate, organised financial records — the foundation every other decision is built on.",
    bullets: [
      "Transaction recording",
      "Bank & card reconciliation",
      "Accounts payable & receivable",
      "Monthly reporting",
    ],
    image: null,
  },
  {
    slug: "financial-reporting",
    number: "02",
    title: "Financial Reporting",
    shortDescription:
      "Clear, well-structured reports that turn raw numbers into something you can actually act on.",
    bullets: [
      "Financial statement preparation",
      "Management reporting",
      "KPI & performance analysis",
      "Board & investor reporting",
    ],
    image: null,
  },
  {
    slug: "budgeting-forecasting",
    number: "03",
    title: "Budgeting & Forecasting",
    shortDescription:
      "Realistic budgets and forward-looking forecasts, so growth decisions are made with confidence.",
    bullets: [
      "Budget planning",
      "Cash flow forecasting",
      "Scenario analysis",
      "Variance reporting",
    ],
    image: null,
  },
  {
    slug: "tax-advisory",
    number: "04",
    title: "Tax & Advisory",
    shortDescription:
      "Thoughtful tax planning and advisory support to help protect margin as the business grows.",
    bullets: [
      "Tax planning & compliance",
      "Business advisory",
      "Structuring & financial strategy",
      "Ongoing advisory support",
    ],
    image: null,
  },
];

export const values: ValueContent[] = [
  {
    title: "Integrity",
    description: "We do the right thing, always — even when it isn't the easy answer.",
  },
  {
    title: "Excellence",
    description: "We hold our own work to the standard we'd want applied to our own numbers.",
  },
  {
    title: "Empowerment",
    description: "We equip clients with the clarity to make their own confident decisions.",
  },
  {
    title: "Collaboration",
    description: "The strongest results come from a genuine partnership, not a transaction.",
  },
];

export const approach: ApproachItem[] = [
  {
    title: "Tailored Solutions",
    description: "Every business is different. So is our approach to it.",
  },
  {
    title: "Strategic Insight",
    description: "We translate financial data into decisions that move the business forward.",
  },
  {
    title: "Trust & Transparency",
    description: "Clear communication and honest advice, at every stage.",
  },
  {
    title: "A Long-Term Partnership",
    description: "We aim to be a partner your business can rely on well beyond the first engagement.",
  },
];

export const founder: FounderContent = {
  name: null,
  title: null,
  credentials: null,
  bio: null,
  quote: null,
  photo: null,
  linkedin: null,
};

export const contact = {
  email: null as Maybe<string>,
  phone: null as Maybe<string>,
  address: null as Maybe<string>,
  formNote:
    "This form is part of a visual prototype. Submissions are not yet delivered anywhere — a real intake service will be connected before launch.",
};

export const social: { label: string; href: string }[] = [];

export const seo = {
  siteUrl: null as Maybe<string>,
  defaultTitleTemplate: `%s | ${company.shortName}`,
  defaultDescription: company.description,
};
