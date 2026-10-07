/**
 * ============================================================================
 *  SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT
 * ============================================================================
 *  Edit text, metrics, links and image paths here — no component changes needed.
 *
 *  Images live in /public/images/products/<product-slug>/ and /public/images/logos/.
 *  Every image needs width + height (the real pixel size) so next/image can
 *  reserve space and avoid layout shift. See README → "Add or replace an image".
 *
 *  Search this file for "TODO" to find everything still waiting on you.
 * ============================================================================
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type Category = "Fintech" | "Mental Health" | "EdTech" | "Media" | "Manufacturing" | "Consulting";

export const CATEGORIES: Category[] = ["Fintech", "Mental Health", "EdTech", "Media", "Manufacturing", "Consulting"];

/** How an image is presented: inside a CSS phone, a CSS browser window, or as a plain rounded figure. */
export type Frame = "phone" | "browser" | "figure";

export interface ImageAsset {
  src: string;
  width: number;
  height: number;
  /** Describe what the image actually shows. */
  alt: string;
  frame: Frame;
  caption?: string;
}

export interface Logo {
  name: string;
  /** Omit src to render a clean text wordmark instead (used when no logo file exists). */
  src?: string;
  width?: number;
  height?: number;
}

export interface Metric {
  /** Displayed as-is. A single number inside (e.g. "60%+", "$1M") animates as a counter. */
  value: string;
  label: string;
}

export interface GalleryGroup {
  title: string;
  images: ImageAsset[];
}

export interface Product {
  slug: string;
  name: string;
  company: string;
  /** Display label for the industry (the filter uses `categories`). */
  industry: string;
  categories: Category[];
  role: string;
  /** One line for the card. */
  roleLine: string;
  years: string;
  location: string;
  /** Card blurb — max 2 sentences. */
  summary: string;
  /** Brand colour used to tint the card backdrop and placeholder. */
  brand: string;
  /** Used by the placeholder card when there is no image. */
  initials: string;
  logo?: Logo;
  /** First 3 are shown on the card. */
  metrics: Metric[];
  tags: string[];
  /** 1–2 images shown on the card thumbnail. Empty = gradient placeholder. */
  cover: ImageAsset[];
  links?: { label: string; href: string }[];
  clients?: Logo[];
  caseStudy: {
    problem: string;
    role: string;
    approach: string[];
    outcome: string[];
    /** Optional supporting data with its source. */
    evidence?: { title: string; source: string; items: Metric[] };
    learnings: string[];
  };
  gallery: GalleryGroup[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  dates: string;
  logos: Logo[];
  highlights: string[];
  /** Product slugs to link to from this role. */
  related?: string[];
}

export interface WritingItem {
  title: string;
  kind: string;
  platform: "Canva" | "Notion";
  url: string;
}

export interface SideProject {
  title: string;
  stack: string[];
  metrics: Metric[];
  points: string[];
  links: { label: string; href: string }[];
}

// ---------------------------------------------------------------------------
// Shared logos (from the logos embedded in the uploaded CV)
// ---------------------------------------------------------------------------

const L = (name: string, file: string, width: number, height: number): Logo => ({
  name,
  src: `/images/logos/${file}`,
  width,
  height,
});

export const LOGOS = {
  icici: L("ICICI Bank UK", "icici-bank.png", 154, 154),
  blackmont: L("Blackmont Consulting", "blackmont-consulting.png", 222, 75),
  havoc: L("Havoc Therapy", "havoc-therapy.png", 190, 83),
  weHearYou: L("We Hear You", "we-hear-you.png", 94, 94),
  noma: L("Noma Financial", "noma-financial.png", 339, 33),
  easybucks: L("EasyBucks", "easybucks.png", 206, 70),
  getflexi: L("GetFlexi", "getflexi.png", 178, 81),
  incubez: L("Incubez", "incubez.png", 253, 63),
  scoresNRanks: L("Scores'n'Ranks", "scores-n-ranks.png", 275, 56),
  sriAurobindo: L("Sri Aurobindo Industries", "sri-aurobindo-industries.png", 243, 99),
  cookCraft: L("Cook Craft", "cook-craft.png", 212, 55),
  digitech: L("Digitech Peripherals", "digitech-peripherals.png", 270, 84),
  supergtm: L("SuperGTM", "supergtm.png", 131, 48),
  blossoming: L("Blossoming Boutique", "blossoming-boutique.png", 288, 279),
  viva: L("VIVA Gym", "viva-gym.png", 119, 68),
  rotaract: L("Rotaract", "rotaract.png", 211, 69),
  isb: L("Indian School of Business", "isb.png", 163, 62),
  stumagz: L("Stumagz", "stumagz.png", 454, 225),
  asianTranscare: L("Asian Transcare", "asian-transcare.png", 205, 55),
  wheelsToGrowth: L("Wheels to Growth", "wheels-to-growth.png", 154, 136),
  buffaloWildWings: L("Buffalo Wild Wings", "buffalo-wild-wings.png", 165, 86),
  urbane: L("Urbane", "urbane.png", 106, 99),
  // TODO: no Kidsens logo was uploaded — add /public/images/logos/kidsens.png and set src/width/height.
  kidsens: { name: "Kidsens" } as Logo,
} satisfies Record<string, Logo>;

// ---------------------------------------------------------------------------
// Profile & site
// ---------------------------------------------------------------------------

export const profile = {
  name: "Siddharth Ragi",
  shortName: "Siddharth",
  initials: "SR",
  headline: "Product leader who has shipped fintech, mental-health and edtech products from 0 → 1 and 1 → scale.",
  subline: [
    "Ex-CPO & Co-Founder at Havoc Therapy",
    "Ex-PM at Noma Financial",
    "MBA (Distinction), University of Buckingham",
    "Based in Cambridge, UK",
    "Open to relocation to India",
  ],
  lookingFor: "Open to Senior PM · Head of Product · CPO roles in the UK & India",
  workRightBadge: "Full UK right to work · no sponsorship needed",
  heroStats: [
    { value: "200%", label: "revenue growth", context: "Noma Financial" },
    { value: "450+", label: "professionals led", context: "Havoc Therapy" },
    { value: "60%+", label: "retention", context: "We Hear You app" },
  ],
  cvHref: "/Siddharth-Ragi-CV.pdf",
  email: "siddharthragi82@gmail.com",
  phones: [
    { label: "UK", display: "+44 7938 155902", href: "tel:+447938155902" },
    { label: "India · WhatsApp", display: "+91 92461 73639", href: "https://wa.me/919246173639" },
  ],
  linkedin: "https://www.linkedin.com/in/siddharth-ragi/",
  github: "https://github.com/siddharthragi82",
  orcid: "https://orcid.org/0009-0000-1546-5458",
  location: "Cambridge, UK · Open to relocation to India",
};

export const site = {
  // TODO: replace with your real domain once deployed (also set NEXT_PUBLIC_SITE_URL on Vercel).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://siddharthragi.vercel.app",
  title: "Siddharth Ragi — Product Leader | Fintech, Mental Health & EdTech",
  description:
    "Ex-CPO & co-founder at Havoc Therapy and ex-PM at Noma Financial. I've shipped fintech, mental-health and edtech products from 0 → 1 and 1 → scale. Based in Cambridge, UK.",
  // TODO: optional — paste a Formspree endpoint (https://formspree.io/f/xxxx) to receive form
  // submissions by POST. Left empty, the contact form falls back to opening the visitor's email app.
  formspreeEndpoint: "",
};

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

/** The dark "by the numbers" band under the hero. */
export const bigNumbers: (Metric & { context: string })[] = [
  { value: "£10M", label: "business-banking book built from scratch — 132% of target", context: "ICICI Bank UK" },
  { value: "$1M", label: "raised at a $10M valuation", context: "Havoc Therapy" },
  { value: "75%", label: "shorter loan-application processing", context: "GetFlexi · Noma Financial" },
  { value: "85%", label: "lower customer acquisition cost", context: "We Hear You" },
  { value: "86%", label: "of users report feeling better", context: "We Hear You" },
  { value: "$20M+", label: "revenue from a new cloud-services line", context: "Digitech Peripherals" },
];

/** "Where I've built" strip under the hero. */
export const employerLogos: Logo[] = [
  LOGOS.icici,
  LOGOS.noma,
  LOGOS.havoc,
  LOGOS.incubez,
  LOGOS.sriAurobindo,
  LOGOS.blackmont,
  LOGOS.supergtm,
  LOGOS.digitech,
];

// ---------------------------------------------------------------------------
// Image helpers
// ---------------------------------------------------------------------------

const img = (
  slug: string,
  file: string,
  width: number,
  height: number,
  frame: Frame,
  alt: string,
  caption?: string,
): ImageAsset => ({ src: `/images/products/${slug}/${file}`, width, height, frame, alt, caption });

// We Hear You
const WHY = {
  welcome: img("we-hear-you", "we-hear-you-welcome-screen.webp", 720, 1599, "phone",
    "We Hear You app welcome screen: 'Hi. We Hear You.' on a pink-to-orange gradient with an Accept & Continue button.",
    "Onboarding — redesigned app"),
  mood: img("we-hear-you", "we-hear-you-mood-check-in.webp", 720, 1600, "phone",
    "Home screen greeting 'Good morning, Chandu' with a mood check-in dial asking 'How are you feeling now?' and a Find a Listener button.",
    "Daily mood check-in with a habit streak"),
  journal: img("we-hear-you", "we-hear-you-journal.webp", 720, 1600, "phone",
    "My Journal screen listing today's check-ins and listener conversations, each showing mood before and after.",
    "Journal: mood before → after every chat"),
  topics: img("we-hear-you", "we-hear-you-find-a-listener-topics.webp", 720, 1601, "phone",
    "Find a Listener screen with topic chips such as Relationships, Academic Pressure, Work & Productivity and Motivation & Confidence.",
    "Topic-based listener matching"),
  chat: img("we-hear-you", "we-hear-you-listener-chat.webp", 720, 1600, "phone",
    "One-to-one chat between a user and a trained listener.",
    "Anonymous one-to-one chat"),
  journalContinue: img("we-hear-you", "we-hear-you-journal-continue-chat.webp", 720, 1601, "phone",
    "Journal screen with a 'Continue chat — reconnect to previous listener' card above the mood history.",
    "Reconnect with a previous listener"),
  profile: img("we-hear-you", "we-hear-you-profile-settings.webp", 720, 1600, "phone",
    "Profile screen with sections for account, my plant, listener age and name preferences, referrals and feedback.",
    "Listener preferences and referrals"),
  v1Home: img("we-hear-you", "we-hear-you-v1-home.webp", 446, 953, "phone",
    "Original green We Hear You home screen with a large Find My Listener button and 'Talking now: 071'.",
    "v1 home — live listener count"),
  v1Topics: img("we-hear-you", "we-hear-you-v1-pick-topic.webp", 720, 1528, "phone",
    "Original Pick Topic screen listing topics like Work and Productivity and Relationships with how many people are talking now.",
    "v1 topic picker"),
  v1Mood: img("we-hear-you", "we-hear-you-v1-mood-before-chat.webp", 720, 1492, "phone",
    "Original pre-chat screen asking 'How are you feeling now?' with five mood options and a note field for the listener.",
    "v1 pre-chat mood capture"),
  v1Profile: img("we-hear-you", "we-hear-you-v1-profile.webp", 490, 1045, "phone",
    "Original profile screen with call history, listener age range, therapies and privacy settings.",
    "v1 profile"),
  adFind: img("we-hear-you", "we-hear-you-ad-find-a-listener.webp", 1200, 628, "figure",
    "Green marketing banner reading 'Find a listener you wish you'd always had' with app-store badges and the app home screen.",
    "Acquisition creative"),
  adChat: img("we-hear-you", "we-hear-you-ad-chat-with-a-trained-listener.webp", 1080, 1080, "figure",
    "Square social ad reading 'Chat with a trained listener' beside the topic picker screen.",
    "Social creative"),
  trio: img("we-hear-you", "we-hear-you-redesign-three-screens.webp", 960, 775, "figure",
    "Three phones showing the redesigned app: mood check-in, welcome screen and journal.",
    "The v2 redesign"),
  bookSession: img("we-hear-you", "we-hear-you-book-a-session-flow.webp", 637, 511, "figure",
    "Three phones showing the green book-a-session flow: home with 1-on-1 sessions, How it works, and a time-slot picker.",
    "Book-a-session flow"),
  wireframes: img("we-hear-you", "we-hear-you-book-a-therapy-wireframes.webp", 1355, 883, "figure",
    "Wireframe flow for booking therapy: questionnaire, recommended therapists, filters, therapist profile and booking confirmation.",
    "Book-a-therapy wireframes"),
  proDashboard: img("we-hear-you", "we-hear-you-professional-dashboard.webp", 1005, 518, "figure",
    "Wireframes of the professional dashboard with appointments, client details and prescriptions.",
    "Professional dashboard wireframes"),
  retention: img("we-hear-you", "we-hear-you-returning-users-june-2022.webp", 1400, 590, "figure",
    "Analytics chart for June 2022 showing 1.2K new users and 754 returning users.",
    "Returning users, June 2022"),
  stickiness: img("we-hear-you", "we-hear-you-user-stickiness-june-2022.webp", 1400, 679, "figure",
    "User stickiness chart for June 2022: DAU/MAU 9.4%, DAU/WAU 29.0%, WAU/MAU 32.5%.",
    "Stickiness ratios, June 2022"),
  training1: img("we-hear-you", "we-hear-you-listener-training-session.webp", 1600, 820, "figure",
    "Video call grid of a We Hear You listener-training session with interns.",
    "Listener training session"),
  training2: img("we-hear-you", "we-hear-you-listener-training-cohort.webp", 1600, 826, "figure",
    "Listener-training call with a slide on how early mental-health conditions begin.",
    "Training the supply side"),
};

// ---------------------------------------------------------------------------
// Products  (order = order in the grid)
// ---------------------------------------------------------------------------

export const products: Product[] = [
  {
    slug: "we-hear-you",
    name: "We Hear You (WHY)",
    company: "Havoc Therapy",
    industry: "Mental Health",
    categories: ["Mental Health"],
    role: "Co-Founder & CPO",
    roleLine: "Co-founded and led product from idea to market leader.",
    years: "2018–2024",
    location: "Hyderabad, India",
    summary:
      "On-demand emotional wellness app connecting people with trained listeners and professionals. A sub-clinical, preventive intervention that became the market leader in its segment in India.",
    brand: "#FF5A8A",
    initials: "WHY",
    logo: LOGOS.weHearYou,
    metrics: [
      { value: "60%+", label: "retention — ahead of peer mental-wellness apps" },
      { value: "86%", label: "of users report feeling better" },
      { value: "85%", label: "lower customer acquisition cost" },
      { value: "4.5★", label: "app rating — a first in India for the category" },
      { value: "10k", label: "strong community" },
      // Labels match the source chart (user stickiness, June 2022 report).
      { value: "29%", label: "DAU/WAU stickiness" },
      { value: "32.5%", label: "WAU/MAU stickiness" },
      { value: "$1M", label: "raised at a $10M valuation" },
      { value: "2 yrs", label: "to profitability" },
      { value: "+100%", label: "revenue growth in year 2 (+50% in year 1)" },
    ],
    tags: ["0 → 1", "Mobile app", "Two-sided marketplace", "Retention"],
    cover: [WHY.mood, WHY.topics],
    caseStudy: {
      problem:
        "People facing emotional or mental-health challenges in India often had nowhere safe to turn before things became clinical. WHY set out to bridge that gap — early, preventive support that could route people to professionals when needed.",
      role:
        "Co-founder and Chief Product Officer. I owned product strategy, the roadmap and end-to-end releases, and led a 450+ strong team of mental-health experts, engineers and business consultants.",
      approach: [
        "Designed a sub-clinical model: anonymous chats with trained listeners, escalating to professionals when needed.",
        "Built topic-based matching so users pick what's on their mind and reach the right listener.",
        "Added mood check-ins and a journal so users see how they felt before and after each chat.",
        "Ran a listener-training programme to grow and quality-assure the supply side of the marketplace.",
        "Redesigned the app around daily check-ins and streaks, plus flows for booking paid therapy sessions.",
        "Handled end-to-end release of 2 Agile products and features.",
      ],
      outcome: [
        "Retention above 60%, outperforming other mental-wellness apps.",
        "86% of users report feeling better; endorsed by psychologists and psychiatrists as evidence-based.",
        "Customer acquisition cost cut by 85% while building a 10k-strong community.",
        "Profitable within two years: revenue +50% in year one and +100% in year two.",
        "Raised $1M at a $10M valuation; 100+ communities across India.",
      ],
      evidence: {
        title: "From the June 2022 product report",
        source: "Havoc Therapy internal analytics report, April 2021 – June 2022",
        items: [
          { value: "6,493", label: "downloads, Apr 2021 – Jun 2022" },
          { value: "754", label: "returning users vs 1.2k new in June 2022" },
          { value: "5m 25s", label: "average session length" },
          { value: "₹8.27", label: "cost per install on Google Ads, June 2022" },
        ],
      },
      learnings: [
        "In mental health, trust is the product: safety, anonymity and a clear escalation path come first.",
        "Retention is built on small rituals — a daily check-in did more than any single feature.",
        "A two-sided marketplace is only as good as its supply, so training listeners early paid off.",
      ],
    },
    gallery: [
      { title: "The redesigned app", images: [WHY.welcome, WHY.mood, WHY.topics, WHY.chat, WHY.journalContinue, WHY.profile] },
      { title: "Launch version (v1)", images: [WHY.v1Home, WHY.v1Topics, WHY.v1Mood, WHY.v1Profile] },
      { title: "Product growth & design", images: [WHY.trio, WHY.bookSession, WHY.wireframes, WHY.proDashboard, WHY.adFind, WHY.adChat] },
      { title: "Behind the numbers", images: [WHY.retention, WHY.stickiness, WHY.training1, WHY.training2] },
    ],
  },
  {
    slug: "fleedom",
    name: "Fleedom",
    company: "Havoc Therapy",
    industry: "Mental Health · EdTech",
    categories: ["Mental Health", "EdTech"],
    role: "Co-Founder & CPO",
    roleLine: "Created a B2B early-identification platform for schools.",
    // TODO: dates inferred from the 2022 progress report and the 2023 Fleedom doc — confirm.
    years: "2022–2023",
    location: "Hyderabad, India",
    summary:
      "A platform that lets schools coordinate early identification, assessment, care coordination and referrals to community mental-health partners. Piloted as 'School Counselor as a Service'.",
    brand: "#6FB53A",
    initials: "FL",
    metrics: [
      // Source: "Fleedom 2023" product document.
      { value: "2,000", label: "students reached in the pilot" },
      { value: "106", label: "students identified for special attention" },
      { value: "256", label: "students under counsellor observation" },
      { value: "10", label: "schools in 6 months (target)" },
    ],
    tags: ["B2B", "SaaS", "Schools", "Care coordination"],
    cover: [
      img("fleedom", "fleedom-school-dashboard-screens.webp", 1017, 800, "browser",
        "Four Fleedom web-app screens: login, a school dashboard showing 40 students, 4 classes and 4 teachers, an add-teacher form and a teacher list.",
        "School admin dashboard"),
    ],
    links: [{ label: "Live prototype", href: "https://fleedom.vercel.app/" }],
    caseStudy: {
      problem:
        "Half of all mental-health conditions begin by age 14, yet schools had no structured way to spot them early or coordinate care. Teachers saw the signs; nobody owned the path from concern to treatment.",
      role:
        "Co-founder and CPO. I defined the product and business model — contracts with schools plus treatment referrals — and ran the school pilot.",
      approach: [
        "Staged rollout: school seminars, an MoU with management, screening assessments, then results and follow-up.",
        "Had screening assessments verified by clinical psychologists before they reached students.",
        "Trained teachers to recognise symptoms and patterns, alongside classroom guidance and learning-style assessments.",
        "Built admin, in-charge and counsellor flows for classes, questionnaires and student records.",
      ],
      outcome: [
        "Pilot reached 2,000 students and introduced School Counselor as a Service.",
        "106 students identified for special attention; 256 placed under counsellor observation.",
        "Next milestone set: add 10 schools within 6 months (target).",
      ],
      learnings: [
        "Selling into schools is a trust sale — seminars and an MoU came before any software.",
        "Early identification only helps if the referral path behind it is ready on day one.",
      ],
    },
    gallery: [
      {
        title: "Product & rollout",
        images: [
          img("fleedom", "fleedom-school-dashboard-screens.webp", 1017, 800, "browser",
            "Four Fleedom web-app screens: login, a school dashboard showing 40 students, 4 classes and 4 teachers, an add-teacher form and a teacher list.",
            "School admin dashboard"),
          img("fleedom", "fleedom-school-rollout-stages.webp", 626, 691, "figure",
            "Rollout tracker with five stages: school seminars, MoU with the school, assessments, results, and sharing questionnaires and results.",
            "Five-stage school rollout plan"),
        ],
      },
    ],
  },
  {
    slug: "easybucks",
    name: "EasyBucks",
    company: "Noma Financial",
    industry: "Fintech",
    categories: ["Fintech"],
    role: "Product Manager",
    roleLine: "Launched a 24/7 payday-loan MVP from zero to traction.",
    years: "2022–2024",
    location: "Toronto, Canada",
    summary:
      "A 24/7 MVP payday-loan product with a simple online application and rapid approvals up to $1,500. It signed 180 clients in its first two months.",
    brand: "#E4473B",
    initials: "EB",
    logo: LOGOS.easybucks,
    metrics: [
      { value: "+200%", label: "company revenue" },
      { value: "180", label: "clients in the first 2 months" },
      { value: "95%", label: "customer satisfaction (post-loan surveys)" },
      { value: "30%", label: "month-over-month growth in loan originations" },
    ],
    tags: ["MVP", "Lending", "Compliance", "0 → 1"],
    // TODO: no EasyBucks screenshot uploaded — add one to /public/images/products/easybucks/ and list it here.
    cover: [],
    caseStudy: {
      problem:
        "Noma Financial's mission is accessible, transparent credit for underserved communities in Canada. Short-term borrowers needed fast decisions at any hour, without a branch or a long form.",
      role:
        "Product Manager. I owned the MVP from definition to launch, including checks against fintech lending regulations.",
      approach: [
        "Scoped a lean MVP: online application, rapid decisioning, loans up to $1,500.",
        "Designed for 24/7 availability so customers could apply and be approved any time.",
        "Verified the product against fintech industry regulations before launch.",
        "Iterated with post-loan surveys and continuous UX improvements.",
      ],
      outcome: [
        "180 clients in the first two months after launch.",
        "Company revenue up 200%.",
        "95% customer satisfaction in post-loan surveys.",
        "30% month-over-month growth in loan originations.",
      ],
      learnings: [
        "In short-term lending, speed and clarity are the value proposition — the MVP competed on both.",
        "Shipping small and listening to post-loan feedback beat waiting for a complete product.",
      ],
    },
    gallery: [],
  },
  {
    slug: "getflexi",
    name: "GetFlexi",
    company: "Noma Financial",
    industry: "Fintech",
    categories: ["Fintech"],
    role: "Product Manager",
    roleLine: "Led the loan origination & management platform.",
    years: "2022–2024",
    location: "Toronto, Canada",
    summary:
      "Noma's lending platform: a customer-facing loans experience on top of a loan origination and management system (LOMS). It automated lending from application to approval.",
    brand: "#3B82F6",
    initials: "GF",
    logo: LOGOS.getflexi,
    metrics: [
      { value: "75%", label: "shorter application processing" },
      { value: "+40%", label: "loan acceptance, default rate held at 3%" },
      { value: "50%", label: "lower loan-management opex" },
      { value: "150%", label: "larger TAM from 3 new loan types" },
      { value: "25%", label: "market-share increase in 18 months" },
      { value: "50+", label: "cross-functional team led" },
    ],
    tags: ["Platform", "LOMS", "Risk", "Integrations"],
    cover: [
      img("getflexi", "getflexi-homepage-hero.webp", 1600, 908, "browser",
        "GetFlexi homepage with the headline 'Loans that work for you' and a personal-loan card showing $5,000 at 19.9% APR over 24 months.",
        "Customer-facing homepage"),
    ],
    caseStudy: {
      problem:
        "As Noma grew, lending relied on processes that slowed approvals and kept operating costs high. The business needed one platform to originate, assess and manage loans at scale.",
      role:
        "Product Manager leading a 50+ cross-functional team of product managers, engineers, designers and data scientists against quarterly OKRs.",
      approach: [
        "Built strong user authentication and role-based access control.",
        "Integrated external services for identity verification and loan approval.",
        "Introduced risk-assessment algorithms to accept more applicants without raising defaults.",
        "Added three new loan types to the product line-up.",
        "Owned a 3-year roadmap toward 15% of Canada's short-term lending market (target).",
      ],
      outcome: [
        "Loan-application processing 75% shorter.",
        "Loan acceptance up 40% with the default rate held at 3%.",
        "Loan-management operating expenses down 50%.",
        "Total addressable market up 150%; market share up 25% in 18 months.",
      ],
      learnings: [
        "Automation paid twice: faster answers for customers and a lower cost per loan.",
        "Risk models let you say yes more often — as long as defaults are watched as closely as approvals.",
      ],
    },
    gallery: [
      {
        title: "Web experience",
        images: [
          img("getflexi", "getflexi-homepage-hero.webp", 1600, 908, "browser",
            "GetFlexi homepage with the headline 'Loans that work for you' and a personal-loan card showing $5,000 at 19.9% APR over 24 months.",
            "Homepage and loan calculator"),
          img("getflexi", "getflexi-ai-insights-budget-tracker.webp", 1600, 914, "browser",
            "GetFlexi feature panels: AI Insights explaining a credit-score improvement and a budget tracker showing $2,234 of $5,000 spent.",
            "AI insights and budget tracker"),
          img("getflexi", "getflexi-spending-budget-subscriptions.webp", 1600, 910, "browser",
            "GetFlexi cards for monitoring spending on a calendar, building a budget and cancelling unwanted subscriptions.",
            "Spending, budgets and subscriptions"),
        ],
      },
    ],
  },
  {
    slug: "incubez",
    name: "Incubez",
    company: "Incubez OTT Pvt Ltd",
    industry: "Media / OTT",
    categories: ["Media"],
    role: "Product Manager",
    roleLine: "Took a premium OTT platform from research to launch.",
    years: "2022–2023",
    location: "Hyderabad, India",
    summary:
      "A premium video-on-demand platform of founder stories for startup enthusiasts. I owned research, requirements, go-to-market and sales enablement.",
    brand: "#D9412E",
    initials: "IZ",
    logo: LOGOS.incubez,
    metrics: [
      { value: "500+", label: "subscribers within 3 months" },
      { value: "4.7★", label: "app-store rating" },
    ],
    tags: ["OTT", "Subscription", "Go-to-market", "Content"],
    cover: [
      img("incubez", "incubez-home-product-market-fit.webp", 1600, 902, "browser",
        "Incubez home screen with a featured rail of founder interviews and 'Product Market Fit' and 'Founders Playbook' rows.",
        "Home with curated rails"),
    ],
    caseStudy: {
      problem:
        "Could a niche, premium streaming platform for startup content win paying subscribers? The team needed a clear audience, a content strategy and a launch plan.",
      role: "Product Manager. I led end-to-end product development and owned research, requirements, go-to-market and sales enablement.",
      approach: [
        "Ran market research and user interviews to define the audience and their preferences.",
        "Wrote requirements for new features, prioritised by value with a problem-first, test-and-iterate approach.",
        "Drafted and executed the go-to-market plan with product marketing.",
        "Equipped sales and partners with decks, demo scripts, videos and case studies.",
        "Provided second-line support and investigated complex issues.",
      ],
      outcome: ["500+ subscribers and a 4.7★ app-store rating within three months of launch."],
      learnings: [
        "A niche audience rewards focus: curated rails like PMF stories and founder playbooks made discovery easy.",
      ],
    },
    gallery: [
      {
        title: "Streaming experience",
        images: [
          img("incubez", "incubez-home-product-market-fit.webp", 1600, 902, "browser",
            "Incubez home screen with a featured rail of founder interviews and 'Product Market Fit' and 'Founders Playbook' rows.",
            "Home with curated rails"),
          img("incubez", "incubez-startup-stories-rails.webp", 1600, 899, "browser",
            "Incubez browse page with Startup Stories, Young Entrepreneurs and Women Entrepreneurs rows.",
            "Browse by founder story"),
          img("incubez", "incubez-100-crores-club-trending.webp", 1600, 904, "browser",
            "Incubez rows for the 100+ Crores Club and Trending Stories with episode thumbnails.",
            "100+ Crores Club and trending"),
        ],
      },
    ],
  },
  {
    slug: "scores-n-ranks",
    name: "Scores'n'Ranks",
    company: "Scores'n'Ranks",
    industry: "EdTech",
    categories: ["EdTech"],
    role: "Freelance Product Manager",
    roleLine: "Led an exam-prep app from ideation to launch.",
    years: "2021–2022",
    location: "Hyderabad, India",
    summary:
      "Exam-prep app with 20,000+ questions across maths, physics and chemistry. Gamification and adaptive learning keep students practising.",
    brand: "#1F3C73",
    initials: "SR",
    logo: LOGOS.scoresNRanks,
    metrics: [
      { value: "1,000+", label: "downloads within 6 months" },
      { value: "4.5★", label: "app-store rating" },
      { value: "100+", label: "user interviews" },
      { value: "20,000+", label: "questions in the bank" },
    ],
    tags: ["Mobile app", "Gamification", "Adaptive learning", "Discovery"],
    cover: [
      img("scores-n-ranks", "scores-n-ranks-timed-question.webp", 379, 784, "phone",
        "Scores'n'Ranks timed physics question with a 14:44 countdown and four answer options.",
        "Timed test"),
      img("scores-n-ranks", "scores-n-ranks-topic-selection.webp", 376, 789, "phone",
        "Topic selection screen with physics, mathematics and chemistry topics ticked.",
        "Pick your topics"),
    ],
    caseStudy: {
      problem:
        "Students preparing for competitive exams such as IIT-JEE needed focused, exam-like practice — and a reason to keep coming back.",
      role:
        "Freelance Product Manager. I led development from ideation to launch and owned the backlog, acceptance criteria and UAT/QA.",
      approach: [
        "Interviewed 100+ potential and existing users; turned findings into personas, user stories and PRDs.",
        "Designed topic selection, timed tests and score cards with per-subject efficiency.",
        "Used gamification and adaptive learning to improve learning outcomes and retention.",
        "Prioritised the backlog with clear acceptance criteria; reviewed fixes and features in UAT/QA.",
      ],
      outcome: ["1,000+ downloads and a 4.5★ rating within six months of launch."],
      learnings: ["Students respond to visible progress — score cards and efficiency stats turned practice into a loop."],
    },
    gallery: [
      {
        title: "App & growth",
        images: [
          img("scores-n-ranks", "scores-n-ranks-topic-selection.webp", 376, 789, "phone",
            "Topic selection screen with physics, mathematics and chemistry topics ticked.",
            "Pick your topics"),
          img("scores-n-ranks", "scores-n-ranks-timed-question.webp", 379, 784, "phone",
            "Scores'n'Ranks timed physics question with a 14:44 countdown and four answer options.",
            "Timed, exam-like questions"),
          img("scores-n-ranks", "scores-n-ranks-score-cards.webp", 467, 321, "figure",
            "Three score-card screens showing overall and per-subject results with efficiency stats and worked solutions.",
            "Score cards and solutions"),
          img("scores-n-ranks", "scores-n-ranks-gamified-learning-ad.webp", 452, 420, "figure",
            "App-install ad reading 'Gamified Learning!' for Scores'n'Ranks – IIT.",
            "App-install campaign"),
          img("scores-n-ranks", "scores-n-ranks-user-activity.webp", 456, 365, "figure",
            "Analytics chart of user activity over time for 30, 7 and 1 days.",
            "Active users after launch"),
        ],
      },
    ],
  },
  {
    slug: "cook-craft",
    name: "Cook Craft",
    company: "Sri Aurobindo Industries",
    industry: "Manufacturing",
    categories: ["Manufacturing", "Consulting"],
    role: "Product Consultant",
    roleLine: "Ran Lean Six Sigma programmes on LPG-stove production.",
    years: "2024–present",
    location: "Bangalore, India",
    summary:
      "Lean Six Sigma (DMAIC) programme for an ISO 9001:2015 LPG-stove manufacturer. Cut assembly time, scrap and inventory errors.",
    brand: "#EF7D2C",
    initials: "CC",
    logo: LOGOS.cookCraft,
    metrics: [
      { value: "+25%", label: "throughput — burner assembly 10 → 8 min" },
      { value: "6% → 5%", label: "scrap rate" },
      { value: "88% → 96%", label: "inventory accuracy (Tally Prime ERP)" },
    ],
    tags: ["Lean Six Sigma", "DMAIC", "Operations", "ERP"],
    cover: [
      img("cook-craft", "cook-craft-double-burner-vs2-circular.webp", 1248, 936, "figure",
        "Cook Craft stainless-steel double-burner LPG stove on its retail box.",
        "Double Burner VS2"),
    ],
    clients: [LOGOS.sriAurobindo, LOGOS.cookCraft],
    caseStudy: {
      problem:
        "Production had grown from 5 to 20 people in a year. Defects in stainless-steel body fabrication, slow assembly and inaccurate stock records were limiting output.",
      role: "Product Consultant. I mapped processes on the factory floor and led DMAIC projects with cross-functional buy-in.",
      approach: [
        "Mapped 'as-is' processes at the Bangalore plant to find waste and draft an improvement roadmap.",
        "Used control charts and Pareto analysis to pinpoint defects in stainless-steel body fabrication.",
        "Ran DMAIC on burner assembly, and root-cause analysis on welding defects that led to new fixtures.",
        "Applied 5S and Kaizen on the powder-coating line to remove non-value-added steps.",
        "Redesigned ERP stock reconciliation in Tally Prime.",
      ],
      outcome: [
        "Burner-assembly cycle time cut from 10 to 8 minutes, lifting throughput 25%.",
        "Scrap rate down from 6% to 5%.",
        "Inventory record accuracy up from 88% to 96%.",
      ],
      learnings: ["Lean works like product discovery: go to the floor, measure, then change one thing at a time."],
    },
    gallery: [
      {
        title: "On the factory floor",
        images: [
          img("cook-craft", "cook-craft-factory-floor.webp", 1152, 648, "figure",
            "Factory floor with power presses and stacks of stainless-steel stove bodies.",
            "Fabrication line, Bangalore"),
          img("cook-craft", "cook-craft-finished-stock.webp", 896, 672, "figure",
            "Stacks of boxed Cook Craft stoves ready for dispatch.",
            "Finished stock"),
          img("cook-craft", "cook-craft-three-burner-steel-body.webp", 896, 672, "figure",
            "Polished stainless-steel body for a three-burner stove.",
            "Three-burner steel body"),
          img("cook-craft", "cook-craft-double-burner-ms-regular.webp", 960, 588, "figure",
            "Assembled Cook Craft double-burner stove with black pan supports.",
            "Double Burner MS Regular"),
          img("cook-craft", "cook-craft-double-burner-vs2-circular.webp", 1248, 936, "figure",
            "Cook Craft stainless-steel double-burner LPG stove on its retail box.",
            "Double Burner VS2 Circular"),
        ],
      },
    ],
  },
  {
    slug: "digitech-cloud-services",
    name: "Cloud Services Line",
    company: "Digitech Peripherals",
    industry: "IT Services",
    categories: ["Consulting"],
    role: "Project Manager",
    roleLine: "Launched a cloud-services line and a new PM system.",
    years: "2017–2019",
    location: "Hyderabad, India",
    summary:
      "Launched a new line of cloud-based services for an IT services company with 25+ years in the market. Paired it with a new project-management system and a cost programme.",
    brand: "#233A8C",
    initials: "DP",
    logo: LOGOS.digitech,
    metrics: [
      { value: "$20M+", label: "revenue from the new cloud-services line" },
      { value: "+25%", label: "productivity from a new PM system" },
      { value: "20%", label: "lower operating expenses" },
    ],
    tags: ["Cloud", "Delivery", "Operations"],
    // TODO: no image uploaded for Digitech — add one to /public/images/products/digitech-cloud-services/.
    cover: [],
    caseStudy: {
      problem:
        "Digitech served private and government clients across IT services. It needed a cloud offering and leaner delivery to grow with them.",
      role: "Project Manager. I ran operational processes and cross-functional delivery, and negotiated strategic partnerships.",
      approach: [
        "Led development and launch of a new line of cloud-based services.",
        "Implemented a new project-management system across delivery teams.",
        "Optimised resource allocation and renegotiated vendor contracts.",
        "Built training programmes to lift employee performance and retention.",
      ],
      outcome: [
        "Cloud-services line generated $20M+ in revenue.",
        "Productivity up 25% from the new project-management system.",
        "Operating expenses down 20%.",
      ],
      learnings: ["Delivery discipline is a growth lever: the same PM system that cut costs made the new line scalable."],
    },
    gallery: [],
  },
  {
    slug: "supergtm-growth",
    name: "Brand & GTM Programmes",
    company: "SuperGTM",
    industry: "Growth / GTM",
    categories: ["Consulting"],
    role: "Sr. Growth Analyst",
    roleLine: "Repositioned Buffalo Wild Wings India; built GTM for clients.",
    years: "2019–2021",
    location: "Hyderabad, India",
    summary:
      "Go-to-market and positioning programmes for clients in food and education. Led the repositioning of Buffalo Wild Wings as a leading sports-bar chain in India.",
    brand: "#1D4ED8",
    initials: "SG",
    logo: LOGOS.supergtm,
    metrics: [
      { value: "+30%", label: "social engagement in 2 months" },
      { value: "5", label: "creative events delivered" },
    ],
    tags: ["Positioning", "GTM", "Blue Ocean", "Gamification"],
    // TODO: no campaign images uploaded — add some to /public/images/products/supergtm-growth/.
    cover: [],
    clients: [LOGOS.buffaloWildWings, LOGOS.kidsens, LOGOS.urbane],
    caseStudy: {
      problem:
        "SuperGTM helps clients define their market before the market defines them. Each client needed sharper positioning and a launch plan across channels.",
      role: "Senior Growth Analyst leading a team of experts on client programmes in education and food.",
      approach: [
        "Led the repositioning of Buffalo Wild Wings as a leading sports bar and restaurant chain in India.",
        "Designed a gamified learning experience for Kidsens.",
        "Laid out social-media strategy and design ideation over two months.",
        "Applied Blue Ocean strategy to find uncontested positioning for clients.",
        "Guided partnerships that delivered 5 creative events.",
      ],
      outcome: [
        "Social engagement up 30% in two months.",
        "Multi-fold growth in brand awareness, reach and recall for the repositioning campaign.",
      ],
      learnings: ["Positioning is a product decision: once the 'who it's for' was clear, every channel got easier."],
    },
    gallery: [],
  },
];

// ---------------------------------------------------------------------------
// Experience (most recent first)
// ---------------------------------------------------------------------------

export const experience: Experience[] = [
  {
    title: "Relationship Officer – Head of Cambridge",
    company: "ICICI Bank UK PLC",
    location: "Cambridge & London, UK",
    dates: "Dec 2025 – Present",
    logos: [LOGOS.icici],
    highlights: [
      "Built a £10M business-banking book from scratch — 132% of target.",
      "Generated £5M in home-loan originations within three months.",
      "Redesigned KYC/AML onboarding: 35% faster, with 92% digital adoption.",
      "Assessed creditworthiness through financial modelling and credit memos for £1M–£10M turnover firms.",
    ],
  },
  {
    title: "Business Consultant",
    company: "Blackmont Consulting",
    location: "London, UK",
    dates: "Sept 2025 – Present",
    logos: [LOGOS.blackmont],
    highlights: [
      "Own delivery across 5 concurrent client projects for SMEs, NGOs and non-profits.",
      "100% on-time delivery on 8-week engagements.",
      "95% client satisfaction through structured communication and proactive issue resolution.",
    ],
  },
  {
    title: "Product Consultant",
    company: "Sri Aurobindo Industries (Cook Craft)",
    location: "Bangalore, India",
    dates: "Jan 2024 – Present",
    logos: [LOGOS.sriAurobindo],
    highlights: [
      "Cut burner-assembly cycle time from 10 to 8 minutes, lifting throughput 25%.",
      "Reduced scrap from 6% to 5% through root-cause analysis and new welding fixtures.",
      "Raised ERP (Tally Prime) inventory accuracy from 88% to 96%.",
    ],
    related: ["cook-craft"],
  },
  {
    title: "Freelance Product Marketing Consultant",
    company: "Blossoming Boutique & VIVA Gym",
    location: "Buckingham, UK",
    dates: "Mar 2025 – Jun 2025",
    logos: [LOGOS.blossoming, LOGOS.viva],
    highlights: [
      "Built an innovation strategy for an artisanal-gifts start-up using Blue Ocean and Stage-Gate.",
      "Planned a phased path to 15% margin growth (projected).",
      "Designed VIVA Gym campaigns for youth and family segments targeting 28% membership growth (projected).",
    ],
  },
  {
    title: "Chief Product Officer & Co-Founder",
    company: "Havoc Therapy",
    location: "Hyderabad, India",
    dates: "Jan 2018 – Aug 2024",
    logos: [LOGOS.havoc],
    highlights: [
      "Co-founded the company and launched two flagship products: We Hear You and Fleedom.",
      "Led 450+ professionals across mental health, engineering and business consulting.",
      "Raised $1M at a $10M valuation; profitable within two years.",
      "Grew user base and revenue 100% year over year across 100+ communities in India.",
    ],
    related: ["we-hear-you", "fleedom"],
  },
  {
    title: "Product Manager",
    company: "Noma Financial",
    location: "Toronto, Canada",
    dates: "Jun 2022 – Sept 2024",
    logos: [LOGOS.noma],
    highlights: [
      "Launched the EasyBucks MVP: 180 clients in two months and +200% company revenue.",
      "Led GetFlexi: 75% faster processing and +40% loan acceptance with defaults at 3%.",
      "Led a 50+ cross-functional team; market share up 25% in 18 months.",
      "Owned a 3-year roadmap targeting 15% of Canada's short-term lending market.",
    ],
    related: ["easybucks", "getflexi"],
  },
  {
    title: "Product Manager",
    company: "Incubez OTT Pvt Ltd",
    location: "Hyderabad, India",
    dates: "Jun 2022 – Jun 2023",
    logos: [LOGOS.incubez],
    highlights: [
      "Led end-to-end product development for a premium OTT platform for startup enthusiasts.",
      "500+ subscribers and a 4.7★ rating within three months of launch.",
      "Owned research, requirements, go-to-market and sales enablement.",
    ],
    related: ["incubez"],
  },
  {
    title: "Freelance Product Manager",
    company: "Scores'n'Ranks",
    location: "Hyderabad, India",
    dates: "Jun 2021 – Jun 2022",
    logos: [LOGOS.scoresNRanks],
    highlights: [
      "Took an exam-prep app with 20,000+ questions from ideation to launch.",
      "1,000+ downloads and a 4.5★ rating within six months.",
      "Ran 100+ user interviews; wrote personas, user stories and PRDs; owned UAT/QA.",
    ],
    related: ["scores-n-ranks"],
  },
  {
    title: "Sr. Growth Analyst",
    company: "SuperGTM",
    location: "Hyderabad, India",
    dates: "Jun 2019 – Jun 2021",
    logos: [LOGOS.supergtm],
    highlights: [
      "Led the repositioning of Buffalo Wild Wings as a leading sports-bar chain in India.",
      "Designed a gamified learning experience for Kidsens.",
      "Social strategy lifted engagement 30% in two months; delivered 5 creative events.",
    ],
    related: ["supergtm-growth"],
  },
  {
    title: "Project Manager",
    company: "Digitech Peripherals",
    location: "Hyderabad, India",
    dates: "Jun 2017 – Jun 2019",
    logos: [LOGOS.digitech],
    highlights: [
      "Launched a cloud-services line generating $20M+ in revenue.",
      "A new project-management system raised productivity 25%.",
      "Cut operating expenses 20% through cost-saving measures.",
    ],
    related: ["digitech-cloud-services"],
  },
];

// ---------------------------------------------------------------------------
// Case studies & writing
// ---------------------------------------------------------------------------

export const writing: WritingItem[] = [
  // TODO: replace every "#" with the real Canva / Notion link. Items with "#" render as "Link coming soon".
  { title: "Product Observations (10 products)", kind: "Product observations", platform: "Canva", url: "#" },
  { title: "Product Design: In-Flight Food Delivery App", kind: "Product design", platform: "Notion", url: "#" },
  { title: "PRD: Myntra", kind: "Product requirements", platform: "Notion", url: "#" },
  { title: "PRD: Bumble", kind: "Product requirements", platform: "Notion", url: "#" },
  { title: "Product Teardown: Google My Business", kind: "Teardown", platform: "Canva", url: "#" },
];

// ---------------------------------------------------------------------------
// AI & side projects
// ---------------------------------------------------------------------------

export const sideProjects: SideProject[] = [
  {
    title: "AI Product Research Agent",
    stack: ["LangChain", "GPT-4", "Tavily", "Python"],
    metrics: [
      { value: "8h → 45m", label: "research cycle" },
      { value: "50+", label: "sources synthesised" },
      { value: "<1 hr", label: "per competitive analysis" },
    ],
    points: [
      "Autonomous agent that synthesises competitive analysis from 50+ sources in under an hour.",
      "Confidence scoring and source-citation guardrails to prevent hallucination.",
    ],
    links: [{ label: "View on GitHub", href: "https://github.com/siddharthragi82/AI-Product-Research-Agent" }],
  },
  {
    title: "Disposable AI Prototype Framework",
    stack: ["v0", "Claude", "Streamlit"],
    metrics: [
      { value: "3", label: "prototypes in 48 hours" },
      { value: "15+", label: "users tested per prototype" },
      { value: "~6 wks", label: "of engineering saved" },
    ],
    points: [
      "Built three functional prototypes in 48 hours, each validated with 15+ users.",
      "Killed two low-viability ideas early, saving roughly six weeks of engineering.",
    ],
    // TODO: add a link if you publish this framework.
    links: [],
  },
];

export const research = {
  title: "Academic research",
  points: [
    "Co-authoring with Prof. Dr Sanjay Bhasin (University of Buckingham) for peer-reviewed publication.",
    "MBA dissertation: “The Polymathic Employee in the AI-Augmented Workplace” — 83% Distinction.",
  ],
  metric: { value: "83%", label: "dissertation grade (Distinction)" },
  orcidLabel: "ORCID 0009-0000-1546-5458",
};

// ---------------------------------------------------------------------------
// Recognition & press
// ---------------------------------------------------------------------------

export const awards = [
  { title: "10 Best Mental Health Startups 2022", issuer: "Silicon India" },
  { title: "Nominated — Business Leader of the Year", issuer: "The Economic Times" },
  { title: "Times Health Excellence Award", issuer: "AP & Telangana, 2022" },
  { title: "India's 10 Most Innovative HealthTech Companies to Watch", issuer: "2022" },
  { title: "Startup India Recognition", issuer: "Government of India" },
  { title: "Incubated at ISB", issuer: "Indian School of Business" },
  { title: "Guest Speaker", issuer: "Symbiosis International University" },
];

export const press = [
  "Featured by ZEE5",
  "MediCircle interview",
  "The Entrepreneurs of India",
  "37 Best Andhra Pradesh Wellness Startups",
];

export const partnerLogos: Logo[] = [
  LOGOS.rotaract,
  LOGOS.isb,
  LOGOS.stumagz,
  LOGOS.asianTranscare,
  LOGOS.wheelsToGrowth,
  LOGOS.buffaloWildWings,
  LOGOS.kidsens,
  LOGOS.urbane,
];

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------

export const about = {
  paragraphs: [
    "I started as an electronics engineer, which taught me to take systems apart before building them. In 2018 I co-founded Havoc Therapy and, as CPO, took We Hear You from an idea to a profitable mental-wellness app with 60%+ retention. Since then I've shipped lending products at Noma Financial, a streaming platform, an exam-prep app and lean-manufacturing programmes — and completed an MBA with Distinction at Buckingham.",
    "The thread through all of it: I obsess over retention and unit economics. If people don't come back, or it costs more to win a customer than they're worth, the product isn't finished. I also believe the best product teams are now AI-augmented, so I build research agents and throwaway prototypes to learn faster and kill weak ideas early.",
    "I'm based in Cambridge, UK, with full right to work, and open to relocating to India.",
  ],
  education: [
    { title: "MBA — Distinction, First Class", org: "University of Buckingham", detail: "3.7/4.0 · 73% · Dissertation 83%" },
    { title: "Diploma in Strategic Management & Leadership", org: "Chartered Management Institute (CMI)" },
    { title: "Lean Six Sigma Green Belt", org: "Black Belt in progress" },
    { title: "McKinsey Forward Program", org: "McKinsey & Company" },
    { title: "Executive Education", org: "Bocconi ICRIOS & Indian School of Business" },
    { title: "B.E. Electronics & Communication", org: "Osmania University" },
  ],
  certifications: [
    "Claude Certified Architect – Foundations (Anthropic)",
    "Hugging Face Transformers",
    "ISB Product Development",
    "UpGrad Digital Product Management",
  ],
  skills: [
    { group: "Product", items: ["Product Strategy & Roadmapping", "Product-Led Growth", "UX / Prototyping", "Agile / Scrum"] },
    { group: "Business", items: ["P&L", "Financial Modelling", "Fintech Compliance"] },
    { group: "Tools", items: ["Figma", "Notion", "Trello", "Mixpanel", "Slack"] },
    { group: "AI tooling", items: ["Claude", "GPT", "Gemini", "Perplexity", "Midjourney", "ElevenLabs", "HeyGen", "Kling"] },
  ],
  languages: "English · Telugu (native) · Hindi (conversational)",
  workAuthorisation:
    "Full UK right to work (Post-Study Work visa to Nov 2027; on track for a Global Talent Visa). No sponsorship required.",
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
