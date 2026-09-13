/** Central, typed source for all verified business content. */

export interface NavLink { label: string; href: string }
export interface ServiceContent {
  slug: string; number: string; title: string; headline: string;
  shortDescription: string; introduction: string; bullets: string[];
  outcome: string; cta: string;
}

export const company = {
  name: "Ledger & Beyond Consultancy",
  shortName: "Ledger & Beyond",
  tagline: "Accurate Today. Strategic Tomorrow.",
  description: "Accounting and financial advisory services that bring structure to your finances and perspective to your business decisions.",
};

export const nav: NavLink[] = [
  { label: "Home", href: "/" }, { label: "About", href: "/about" },
  { label: "Services", href: "/services" }, { label: "Contact", href: "/contact" },
];
export const bookConsultationHref = "/contact";

export const hero = {
  eyebrow: "Financial clarity for businesses ready to grow",
  headingLines: ["Beyond the Books.", "Shaping Strategy.", "Driving Growth."],
  subtext: "Bookkeeping, reporting, budgets, forecasts and stronger finance processes that help growing businesses build sound foundations and make better informed decisions.",
};

export const businessProblems = {
  heading: "Your business is growing. Is your finance function keeping up?",
  body: "Growth brings more transactions, reporting demands and pressure on cash flow. When information arrives late, confident decisions become harder.",
  cta: "Let's identify what your business needs",
  items: [
    { title: "Unclear financial performance", description: "Reports do not clearly show what is driving revenue, costs or profitability." },
    { title: "Time consuming accounting processes", description: "Reconciliations and month end tasks take time away from running your business." },
    { title: "Limited financial visibility", description: "You need better insight into cash flow, budgets and future requirements." },
    { title: "Finance processes that are not scaling", description: "Systems, controls and reporting have not kept pace with growth." },
  ],
};

export const solutions = {
  heading: "More than accounting. A clearer view of your business.",
  body: "Accurate records are the foundation. We help you understand performance, strengthen finance processes and plan what comes next.",
  cta: "Explore How We Can Help",
  items: [
    { title: "Know Your Numbers", description: "Reliable records and meaningful reporting give you a clear view of financial performance." },
    { title: "Strengthen Your Finance Function", description: "Practical processes and controls create a more organised, dependable way of working." },
    { title: "Plan With Confidence", description: "Budgets, forecasts and commercial insight support better informed decisions and sustainable growth." },
  ],
};

export const servicesIntro = {
  heading: "The right support, from accurate records to forward planning.",
  body: "Five connected services, shaped around the needs and priorities of your business.",
};

export const services: ServiceContent[] = [
  {
    slug: "bookkeeping", number: "01", title: "Bookkeeping",
    headline: "Reliable Bookkeeping. Clearer Financial Records.",
    shortDescription: "Accurate, organised records that give your business a dependable financial foundation.",
    introduction: "We keep day to day financial records complete, reconciled and ready to support reporting and decision making.",
    bullets: ["Monthly bookkeeping", "Transaction recording and categorisation", "Bank and credit card reconciliations", "Accounts payable and accounts receivable", "General ledger maintenance", "Month end bookkeeping support", "Historical bookkeeping clean up"],
    outcome: "More reliable records. Less administrative pressure. Better financial visibility.",
    cta: "Discuss Your Bookkeeping Needs",
  },
  {
    slug: "financial-reporting", number: "02", title: "Financial Reporting",
    headline: "Financial Reports That Help You Make Better Decisions.",
    shortDescription: "Structured reporting that turns financial information into a clear view of performance.",
    introduction: "We prepare reliable reports and analysis that help management understand what drives results and what requires attention.",
    bullets: ["Monthly and periodic management accounts", "Profit and loss reporting", "Balance sheet reporting", "Cash flow reporting", "Account reconciliations", "Variance analysis", "Revenue and cost analysis", "Management reporting packs", "Financial performance reviews"],
    outcome: "A clearer understanding of business performance, priorities and emerging risks.",
    cta: "Improve Your Financial Reporting",
  },
  {
    slug: "budgeting-forecasting", number: "03", title: "Budgeting & Forecasting",
    headline: "Plan Ahead With Practical Budgets and Forecasts.",
    shortDescription: "Practical planning tools that improve visibility and support confident decisions.",
    introduction: "We build and maintain budgets, cash flow forecasts and financial models that reflect how your business actually operates.",
    bullets: ["Annual budgeting", "Rolling financial forecasts", "Cash flow forecasting", "Revenue and expense projections", "Budget versus actual analysis", "Scenario planning", "Financial modelling", "Forecast updates and management reviews"],
    outcome: "Better planning, earlier visibility and more informed decisions.",
    cta: "Discuss Your Budgeting & Forecasting Needs",
  },
  {
    slug: "tax-advisory", number: "04", title: "Tax & Advisory",
    headline: "Tax Support and Financial Advice With a Commercial Perspective.",
    shortDescription: "Practical tax related accounting support and financial advice grounded in your business.",
    introduction: "We bring together tax related financial information, analysis and commercial perspective to support compliance and management decisions.",
    bullets: ["Tax preparation and tax related working papers", "Financial information required for tax compliance", "Tax related accounting support", "Financial analysis", "Business performance reviews", "Management decision support", "Financial planning assistance"],
    outcome: "Well prepared financial information and practical advice that supports sound business decisions.",
    cta: "Discuss Your Tax & Advisory Requirements",
  },
  {
    slug: "finance-process-setup", number: "05", title: "Finance & Business Process Setup",
    headline: "Build a Finance Function That Supports Your Growth.",
    shortDescription: "Clearer systems, controls and responsibilities for a finance function that can scale.",
    introduction: "We design and improve the practical structures that help finance work reliably across your business.",
    bullets: ["Finance process design", "Accounting system setup and configuration support", "Chart of accounts review", "Month end close procedures", "Financial controls", "Approval workflows", "Finance policies and procedures", "Process mapping", "Accounting workflow improvement", "Reporting and reconciliation processes"],
    outcome: "A more organised finance function with clearer responsibilities and scalable processes.",
    cta: "Discuss Your Finance Process Needs",
  },
];

export const founderExperience = { display: "12+ Years", phrase: "over 12 years" };
export const founder = {
  name: "Yusra Ayaz", title: "Founder | Chartered Accountant | ICAEW, UK",
  shortBio: `Yusra brings ${founderExperience.phrase} of experience across accounting, financial reporting, reconciliations, finance operations and business support.`,
  bio: [
    "Yusra founded Ledger & Beyond to make financial information clearer and easier for business owners to use. Her work brings structure to finances, strengthens day to day operations and supports informed decisions.",
    "Her approach is practical and personal. She takes time to understand how a business works, where its finance function needs support and what will create lasting value.",
    "As a woman and mother building a professional practice, Yusra is also committed to accessible guidance and meaningful opportunities for women, including women-led businesses, mothers and single mothers.",
  ],
  photo: null as string | null,
};

export const credibility = [
  { value: founderExperience.display, label: "Accounting & Finance Experience" },
  { value: "Chartered Accountant", label: "ICAEW, UK" },
  { value: "Multi Industry Experience", label: "Accounting, Reporting & Financial Management" },
  { value: "Founder Led Expertise", label: "Direct Professional Involvement" },
];

export const purposeVisionMission = [
  { title: "Our Purpose", heading: "Financial clarity made more accessible.", description: "To help businesses understand their finances while building a practice that creates meaningful opportunities for women." },
  { title: "Our Vision", heading: "Confidence for growing businesses. Opportunity for women.", description: "To support growing businesses, with particular focus on women entrepreneurs, mothers and single mothers, as they build sustainable businesses and financial independence." },
  { title: "Our Mission", heading: "Accurate, practical and personalised support.", description: "We help businesses understand their numbers, strengthen processes, plan growth and make informed decisions. We also aim to create flexible professional work, mentorship and meaningful opportunities for women in finance." },
];

export const trustReasons = [
  { title: "Professional Expertise", description: `Chartered accounting expertise backed by ${founderExperience.phrase} of practical experience.` },
  { title: "Practical Approach", description: "Clear guidance focused on what your business needs and can use." },
  { title: "Personal Involvement", description: "Founder led support with direct professional attention." },
  { title: "Confidentiality", description: "Your financial information is handled with discretion and care." },
  { title: "Purpose Driven Service", description: "A practice built to create useful work and meaningful long term impact." },
];

export const process = [
  { title: "Let's Talk", description: "Start with a conversation." },
  { title: "Understand", description: "Clarify your priorities." },
  { title: "Agree", description: "Define the right support." },
  { title: "Get Started", description: "Put the plan into action." },
];

export const contact = {
  email: "info@ledgerbeyond.com", phone: "0323 2007005", phoneHref: "tel:+923232007005",
  whatsapp: "Chat with us on WhatsApp", whatsappHref: "https://wa.me/923232007005",
  address: null as string | null,
  intro: "Tell us where your business stands today and what you would like help with. We will come back to you to arrange a conversation.",
  trustMessage: "Your information will be treated with professionalism, confidentiality, and care.",
  nextSteps: ["We review your enquiry.", "We contact you to understand your requirements.", "We arrange a consultation at a convenient time.", "We discuss how Ledger & Beyond can support your business."],
};

export const finalCta = {
  heading: "Ready to Bring Clarity to Your Finances?",
  body: "Book a consultation and let's discuss what your business needs next.",
};
export const seo = {
  siteUrl: "https://ledgerbeyond.com", defaultTitleTemplate: `%s | ${company.shortName}`,
  defaultDescription: company.description,
};
