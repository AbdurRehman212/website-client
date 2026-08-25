/**
 * Central, typed content source. Every value below is verified client
 * copy — see docs/CONTENT_SOURCE.md for provenance. Unconfirmed facts stay
 * `null`, never a plausible-sounding guess.
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
}

export interface AddOnServiceContent {
  title: string;
  description: string;
  bullets: string[];
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
  bio: Maybe<string[]>;
  quote: Maybe<string>;
  photo: Maybe<string>;
}

export const company = {
  name: "Ledger & Beyond Consultancy",
  shortName: "Ledger & Beyond",
  tagline: "Accurate Today. Strategic Tomorrow.",
  description:
    "Ledger & Beyond Consultancy provides accounting and financial advisory services that bring structure to your finances and perspective to your business decisions.",
};

export const nav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const bookConsultationHref = "/contact";

export const hero = {
  eyebrow: "Welcome to Ledger & Beyond",
  headingLines: ["Beyond the Books.", "Shaping Strategy.", "Driving Growth."],
  subtext:
    "We help ambitious businesses see beyond the numbers, shape what's next and grow with confidence.",
};

export const whatWeDo = {
  eyebrow: "What We Do",
  heading: "Financial Expertise. Business Perspective.",
  body: "From keeping your accounts in order to helping you plan what comes next, we bring structure, insight and financial perspective to the decisions that move your business.",
};

export const approachSection = {
  eyebrow: "Our Approach",
  headingLines: ["More Than Numbers.", "A Partnership You Can Rely On."],
  body: "We go beyond compliance, combining financial expertise with commercial insight to support better decisions and sustainable growth.",
};

export const approach: ApproachItem[] = [
  {
    title: "Tailored Solutions",
    description: "Every business is different. Our approach is shaped around your needs, priorities and objectives.",
  },
  {
    title: "Strategic Insight",
    description: "We turn financial data into actionable insight, highlighting performance, risks and opportunities.",
  },
  {
    title: "Trust & Transparency",
    description: "Clear advice. Sound judgement. No unnecessary complexity.",
  },
  {
    title: "Long Term Partnership",
    description: "We provide consistent financial support as your business evolves, scales and moves forward.",
  },
];

export const about = {
  whoWeAre: {
    eyebrow: "Who We Are",
    heading: "A Partner in the Numbers and What Comes Next",
    body: company.description,
  },
  founderSection: {
    eyebrow: "Founder",
    heading: "Built on Experience. Driven by Relationships.",
  },
};

export const services: ServiceContent[] = [
  {
    slug: "bookkeeping",
    number: "01",
    title: "Bookkeeping",
    shortDescription: "Accurate, organised financial records, the foundation of sound financial management.",
    bullets: [
      "Transaction recording & categorisation",
      "Bank & card reconciliations",
      "Accounts payable & receivable",
      "Month end bookkeeping & closing",
      "Account clean up & catch up bookkeeping",
      "Monthly financial reporting",
      "General ledger maintenance",
    ],
  },
  {
    slug: "financial-reporting",
    number: "02",
    title: "Financial Reporting",
    shortDescription:
      "Structured, reliable reporting that gives management a clear view of financial performance and position.",
    bullets: [
      "Financial statement preparation",
      "Monthly & management reporting",
      "KPI & performance analysis",
      "Board & investor reporting",
      "Financial reporting packs",
      "Variance & trend analysis",
    ],
  },
  {
    slug: "budgeting-forecasting",
    number: "03",
    title: "Budgeting & Forecasting",
    shortDescription:
      "Practical budgets and forward looking forecasts to support financial planning and resource allocation.",
    bullets: [
      "Budget preparation & planning",
      "Cash flow forecasting",
      "Scenario & sensitivity analysis",
      "Budget vs. actual variance analysis",
      "Rolling forecasts",
      "Financial modelling",
    ],
  },
  {
    slug: "tax-advisory",
    number: "04",
    title: "Tax & Advisory",
    shortDescription: "Practical tax and advisory support covering compliance, planning, structuring and financial strategy.",
    bullets: [
      "Tax planning & compliance",
      "Business & financial advisory",
      "Business structuring",
      "Financial strategy & planning",
      "Ongoing advisory support",
    ],
  },
];

export const addOnService: AddOnServiceContent = {
  title: "Finance & Business Process Setup",
  description:
    "Design and implementation of financial controls, processes and operational structures that support efficient, well governed businesses.",
  bullets: [
    "Finance process design & implementation",
    "Internal financial controls",
    "Accounting system & workflow setup",
    "Policies & procedures",
    "Finance & operational process mapping",
    "Approval & delegation frameworks",
    "Month end & reporting processes",
  ],
};

export const values: ValueContent[] = [
  {
    title: "Integrity",
    description: "We do the right thing, always, even when it isn't the easy answer.",
  },
  {
    title: "Excellence",
    description: "We hold our work to the standard we would expect of our own finances.",
  },
  {
    title: "Confidentiality",
    description: "We treat your financial information with the highest level of discretion and professional care.",
  },
  {
    title: "Collaboration",
    description: "The strongest results come from genuine partnership, not a transaction.",
  },
];

export const founder: FounderContent = {
  name: "Yusra Ayaz",
  title: "Founder | Chartered Accountant (ICAEW UK)",
  bio: [
    "Hi, I'm Yusra, a Chartered Accountant with 11 years of experience across accounting, finance and taxation. I founded Ledger & Beyond Consultancy with a simple belief: professional relationships should go beyond delivering a service. They should be built on trust, understanding and a genuine commitment to the business.",
    "Anyone can provide a service. What sets a true financial partner apart is the ability to understand a business, take ownership of its financial needs and grow alongside it. That is the relationship I aim to build with every client.",
    "As a mother, building something of my own also carries a deeper meaning. I wanted to create a business that reflects both my professional ambition and the example I want to set for my daughter: that building a career and building a life of your own do not have to be separate paths.",
    "Ledger & Beyond is my way of turning that vision into something lasting: a professional practice built with purpose, strengthened over time and shaped around relationships that go beyond the numbers.",
  ],
  quote: null,
  photo: null,
};

export const finalCta = {
  heading: "Let's Build Something Meaningful Together",
  body: "Book a consultation and let's talk through where your business stands today and what comes next.",
};

export const contact = {
  email: "info@ledgerbeyond.com",
  phone: "0323 2007005",
  phoneHref: "tel:+923232007005",
  whatsapp: "0323 2007005",
  whatsappHref: "https://wa.me/923232007005",
  address: null as Maybe<string>,
};

export const social: { label: string; href: string }[] = [];

export const seo = {
  siteUrl: "https://ledgerbeyond.com" as Maybe<string>,
  defaultTitleTemplate: `%s | ${company.shortName}`,
  defaultDescription: company.description,
};
