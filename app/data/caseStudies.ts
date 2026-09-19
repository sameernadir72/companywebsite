export interface CaseStudy {
  slug: string;
  client: string;
  title: string;
  tagline: string;
  category: "Websites" | "UI/UX" | "Motion & Reels" | "Meta Ads" | "SaaS" | "Design" | "AI" | "Web3";
  industry: string;
  year: string;
  duration: string;
  deliverables: string[];
  heroImage: string;
  galleryImages: string[];
  liveUrl?: string;
  metrics: {
    value: string;
    label: string;
    description: string;
  }[];
  overview: string;
  challenge: string;
  solution: string;
  impact: string;
  testimonial?: {
    quote: string;
    author: string;
    title: string;
    company: string;
  };
  nextProjectSlug: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "aura",
    client: "AURA",
    title: "A Sharper Digital Presence for Next-Gen Wellness",
    tagline: "A sharper digital presence",
    category: "Websites",
    industry: "Health & Consumer Tech",
    year: "2025",
    duration: "6 weeks",
    deliverables: [
      "Brand Identity Refresh",
      "UI/UX Design System",
      "Headless Next.js Web Development",
      "Interactive 3D Product Previews",
      "Conversion Rate Optimization",
    ],
    heroImage: "/ideal_1.png",
    galleryImages: ["/ideal_1.png", "/dESIGN.png", "/monitor.png", "/scale.png"],
    liveUrl: "https://aura-wellness.example.com",
    metrics: [
      {
        value: "+184%",
        label: "Direct Conversion",
        description: "Lift in mobile checkout completions in the first 60 days.",
      },
      {
        value: "0.8s",
        label: "Average Page Load",
        description: "Sub-second LCP globally across all tier-1 markets.",
      },
      {
        value: "4.2x",
        label: "Engagement Time",
        description: "Increase in interactive session duration per visitor.",
      },
    ],
    overview:
      "AURA needed to evolve from a niche bio-tracking startup into an internationally recognized consumer wellness authority. We designed and built a connected digital experience that communicates clinical precision with warm, inviting lifestyle storytelling.",
    challenge:
      "AURA's existing web presence suffered from fragmented positioning: technical jargon turned casual consumers away, while clinical audiences found the brand aesthetic unconvincing. Furthermore, sluggish legacy page performance was causing high bounce rates on product discovery pages.",
    solution:
      "Fusion Folio spearheaded a unified creative strategy. We created an intuitive, modular design system with responsive micro-interactions, editorial typography, and high-performance WebGL product reveals. Built on Next.js with sub-second page transitions, every touchpoint was engineered to guide visitors smoothly into active membership.",
    impact:
      "Within eight weeks of launch, organic session duration quadrupled, checkout completion rates surged by 184%, and AURA successfully closed their Series B funding round with the new digital presence cited as a key brand asset.",
    testimonial: {
      quote:
        "Fusion Folio didn't just build us a website; they redefined how our customers experience our brand. The speed, aesthetic craft, and attention to micro-details blew our board away.",
      author: "Elena Vance",
      title: "Co-Founder & Chief Brand Officer",
      company: "AURA Technologies",
    },
    nextProjectSlug: "lume",
  },
  {
    slug: "lume",
    client: "LUME",
    title: "An Effortless Path to Purchase for Modern E-Commerce",
    tagline: "An easier path to purchase",
    category: "UI/UX",
    industry: "Luxury Retail & E-Commerce",
    year: "2025",
    duration: "8 weeks",
    deliverables: [
      "End-to-End E-Commerce UX",
      "Custom Shopify Plus Architecture",
      "Product Customizer Interface",
      "Fluid Mobile First Design",
      "Checkout Flow Simplification",
    ],
    heroImage: "/ideas_2.png",
    galleryImages: ["/ideas_2.png", "/scale.png", "/STRATEGY.png", "/Figure.png"],
    liveUrl: "https://lume-living.example.com",
    metrics: [
      {
        value: "+62%",
        label: "Cart-to-Checkout",
        description: "Reduction in cart abandonment through frictionless checkout.",
      },
      {
        value: "+38%",
        label: "Average Order Value",
        description: "Driven by contextual product bundles and interactive customizer.",
      },
      {
        value: "99.98%",
        label: "Uptime on Black Friday",
        description: "Flawless scaling through peak seasonal traffic spikes.",
      },
    ],
    overview:
      "LUME crafts architectural lighting fixtures for discerning homeowners and interior designers. They required a flagship e-commerce storefront that translated the tactile beauty of their lighting into an effortless online shopping journey.",
    challenge:
      "Complex sizing, finishes, and voltage options caused buyer hesitation. Customers frequently dropped out before checkout due to overwhelming configuration options and non-responsive mobile catalogs.",
    solution:
      "We engineered a bespoke interactive configurator that gives customers an instant visual preview of fixtures in their chosen finish and scale. We streamlined the checkout flow from 5 steps down to 2, introducing instant 1-click payment options and crystal-clear delivery estimates.",
    impact:
      "The redesigned storefront drove a 62% increase in checkout conversions and expanded average order value by 38% during their largest seasonal collection drop.",
    testimonial: {
      quote:
        "The team at Fusion Folio possesses that rare balance of exceptional visual taste and rigorous technical engineering. Our conversion rates speak for themselves.",
      author: "Marcus Thorne",
      title: "Head of Digital Commerce",
      company: "LUME Studio",
    },
    nextProjectSlug: "frame",
  },
  {
    slug: "frame",
    client: "FRAME",
    title: "Short-Form Motion & Cinematic Storytelling that Moves",
    tagline: "Stories that move with you",
    category: "Motion & Reels",
    industry: "Entertainment & Media",
    year: "2025",
    duration: "4 weeks",
    deliverables: [
      "2D/3D Motion Graphics Package",
      "60+ Viral Short-Form Reels",
      "Broadcast Kinetic Typography System",
      "Creator UGC Strategy & Direction",
      "Cross-Platform Social Toolkits",
    ],
    heroImage: "/ideas_3.png",
    galleryImages: ["/ideas_3.png", "/PERFORMANCE.png", "/service-05.png", "/service-06.png"],
    metrics: [
      {
        value: "14.8M",
        label: "Organic Video Views",
        description: "Generated across TikTok, Reels, and YouTube Shorts in 30 days.",
      },
      {
        value: "8.4%",
        label: "Average Engagement Rate",
        description: "Triple the industry benchmark for entertainment content.",
      },
      {
        value: "+340K",
        label: "Community Growth",
        description: "Net-new verified followers gained through viral hooks.",
      },
    ],
    overview:
      "FRAME is an innovative streaming platform for independent cinema and curated cultural documentaries. They partnered with Fusion Folio to design a high-velocity motion identity and reel campaign that cuts through algorithm noise.",
    challenge:
      "Traditional film trailers weren't performing on vertical mobile feeds. FRAME needed short-form content that captured viewers in the first 1.5 seconds without feeling like cheap clickbait.",
    solution:
      "We architected a signature motion system with kinetic subtitles, rhythmic editorial cuts, and cinematic sound design tailored specifically for phone speakers. We produced 60+ modular reel templates that allowed their internal content team to publish trending culture takes within hours.",
    impact:
      "The launch campaign generated over 14.8 million organic video views and grew FRAME's social community by 340,000 active subscribers in the first month alone.",
    testimonial: {
      quote:
        "Fusion Folio understands modern attention better than anyone else. They turned complex cinematic concepts into scroll-stopping reels that genuinely resonated.",
      author: "Sofia Alverez",
      title: "Creative Director",
      company: "FRAME Media",
    },
    nextProjectSlug: "offset",
  },
  {
    slug: "offset",
    client: "OFFSET",
    title: "Performance Meta Ads Engineered for Rapid Testing",
    tagline: "Creative designed for testing",
    category: "Meta Ads",
    industry: "B2B SaaS & Enterprise",
    year: "2025",
    duration: "Ongoing",
    deliverables: [
      "Full-Funnel Meta Ad Creatives",
      "Dynamic Creative Testing Framework",
      "High-Converting Landing Pages",
      "Motion Ad Variant Iteration",
      "CAC & ROAS Performance Optimization",
    ],
    heroImage: "/ideas_4.png",
    galleryImages: ["/ideas_4.png", "/STRATEGY.png", "/service-04.png", "/PERFORMANCE.png"],
    metrics: [
      {
        value: "3.4x",
        label: "ROAS Achieved",
        description: "Consistently delivered across blended paid acquisition channels.",
      },
      {
        value: "-42%",
        label: "Customer Acquisition Cost",
        description: "Drastic CAC reduction compared to historical agency benchmarks.",
      },
      {
        value: "48+",
        label: "Creative Variants Tested",
        description: "Rapid iteration cycles testing angles, hooks, and design assets.",
      },
    ],
    overview:
      "OFFSET provides automated carbon accounting software for modern supply chains. They engaged Fusion Folio to scale their paid acquisition machine with high-converting Meta and LinkedIn ad creatives.",
    challenge:
      "B2B SaaS ads often look dry and repetitive. OFFSET was burning budget on generic product screenshot ads that resulted in soaring Customer Acquisition Costs (CAC) and poor demo sign-up conversion.",
    solution:
      "We engineered a rapid testing matrix encompassing 48 distinct creative variations — including punchy 2D animated explainers, bold typography comparisons, and data-driven customer proof points. Paired with tightly matched landing pages, every ad delivered a cohesive promise.",
    impact:
      "Delivered a sustained 3.4x Return on Ad Spend (ROAS) and slashed customer acquisition costs by 42%, establishing Meta as OFFSET's most profitable customer acquisition channel.",
    testimonial: {
      quote:
        "The creative agility Fusion Folio brings is unmatched. They test, learn, and iterate faster than any growth agency we've ever partnered with.",
      author: "David Chen",
      title: "VP of Growth & Acquisition",
      company: "OFFSET Technologies",
    },
    nextProjectSlug: "halcyon",
  },
  {
    slug: "halcyon",
    client: "Halcyon",
    title: "Proptech Design System & Flagship Marketing Site",
    tagline: "Concept to launch in three weeks",
    category: "Design",
    industry: "Real Estate & Proptech",
    year: "2024",
    duration: "3 weeks",
    deliverables: [
      "Complete Design System in Figma",
      "Responsive Marketing Web Experience",
      "Custom Micro-Interactions & Transitions",
      "Investor Pitch Interface Deck",
      "Editorial Copywriting",
    ],
    heroImage: "/monitor.png",
    galleryImages: ["/monitor.png", "/about-team-1.png", "/scale.png", "/dESIGN.png"],
    metrics: [
      {
        value: "3 wks",
        label: "Concept to Launch",
        description: "Rapid agile sprint from blank canvas to production deployment.",
      },
      {
        value: "100%",
        label: "Design Token Coverage",
        description: "Unified component library adopted by both web and mobile engineers.",
      },
      {
        value: "$14M",
        label: "Series A Secured",
        description: "Launched in tandem with their primary institutional capital raise.",
      },
    ],
    overview:
      "Halcyon builds autonomous property management infrastructure. They approached Fusion Folio with an aggressive three-week timeline to construct a full brand design system and an authoritative marketing site ahead of their Series A announcement.",
    challenge:
      "Halcyon needed to look like a category-defining market leader in less than a month, with zero margin for developer back-and-forth or ambiguous UI components.",
    solution:
      "Working in daily synchronized sprints, we established Halcyon's core design tokens, dark-mode color harmonies, and fluid layouts in Figma, immediately translating them into production React code with Tailwind CSS and Framer Motion.",
    impact:
      "The site launched on time with zero bugs, generating over 1,200 waitlist applications in the first 48 hours and supporting their successful $14M Series A announcement.",
    testimonial: {
      quote:
        "Three weeks seemed impossible until we met Fusion Folio. They delivered agency-grade perfection at startup velocity.",
      author: "Kareem Patel",
      title: "Founder & CEO",
      company: "Halcyon Living",
    },
    nextProjectSlug: "solace-ai",
  },
  {
    slug: "solace-ai",
    client: "Solace AI",
    title: "Native AI Copilot Product Design & Workflow Integration",
    tagline: "Deflecting 40% of tier-1 support volume",
    category: "AI",
    industry: "Artificial Intelligence & SaaS",
    year: "2024",
    duration: "10 weeks",
    deliverables: [
      "AI Copilot Conversational UI",
      "Contextual Widget Interactions",
      "Enterprise Admin Dashboard",
      "Interactive Prompt Suggestion System",
      "Full Product Design System",
    ],
    heroImage: "/PERFORMANCE.png",
    galleryImages: ["/PERFORMANCE.png", "/dESIGN.png", "/monitor.png", "/STRATEGY.png"],
    metrics: [
      {
        value: "40%",
        label: "Support Volume Deflected",
        description: "AI copilot accurately resolved complex multi-turn user questions.",
      },
      {
        value: "94%",
        label: "User CSAT Rating",
        description: "Exceptional user satisfaction score across beta cohorts.",
      },
      {
        value: "<250ms",
        label: "Interaction Response Latency",
        description: "Perceived speed optimized via streaming tokens and subtle motion cues.",
      },
    ],
    overview:
      "Solace AI develops autonomous customer resolution agents for high-growth tech companies. Fusion Folio designed their flagship in-app copilot, ensuring customers feel assisted rather than automated.",
    challenge:
      "Most AI chat widgets feel detached, generic, and frustrating. Solace needed an interface that felt naturally integrated into their clients' host software with real-time streaming feedback and clear user controls.",
    solution:
      "We crafted a contextual slide-over copilot interface with live Markdown rendering, inline citation pills, animated typing indicators, and one-click action triggers that make interacting with the AI feel magic.",
    impact:
      "Customer support teams using Solace deflected 40% of their incoming tier-1 tickets within 14 days of integration, while maintaining a 94% positive CSAT rating.",
    testimonial: {
      quote:
        "Fusion Folio understood the psychology of human-AI interaction better than any other agency we evaluated. The UI feels like magic.",
      author: "Dr. Aris Thorne",
      title: "Chief Technology Officer",
      company: "Solace AI Labs",
    },
    nextProjectSlug: "circuit",
  },
  {
    slug: "circuit",
    client: "Circuit",
    title: "Full Product Architecture, UI & Billing Rebuild",
    tagline: "+78% activation after complete rebuild",
    category: "SaaS",
    industry: "Developer Tools & Cloud Infrastructure",
    year: "2024",
    duration: "6 weeks",
    deliverables: [
      "Complete Web App UI/UX Redesign",
      "Stripe Customer Billing Portal",
      "Real-time Dashboard Analytics",
      "Developer API Documentation Portal",
      "Component Architecture Migration",
    ],
    heroImage: "/STRATEGY.png",
    galleryImages: ["/STRATEGY.png", "/scale.png", "/monitor.png", "/ideas_2.png"],
    metrics: [
      {
        value: "+78%",
        label: "Activation Rate",
        description: "New developer users successfully deploying their first cloud workflow.",
      },
      {
        value: "6 wks",
        label: "Total Delivery Time",
        description: "Same integrated team handled product strategy, design, and code.",
      },
      {
        value: "3.1x",
        label: "Expansion Revenue",
        description: "Transparent self-serve tier upgrade flow drove instant upsells.",
      },
    ],
    overview:
      "Circuit is an event-driven automation engine for backend engineers. They engaged Fusion Folio to overhaul their core dashboard, streamline workspace onboarding, and integrate a modern self-serve billing engine.",
    challenge:
      "Circuit's legacy dashboard was cluttered and difficult for new engineers to navigate during their first trial session, resulting in a high drop-off before users connected their first cloud webhook.",
    solution:
      "We redesigned Circuit around a visual node graph canvas and step-by-step onboarding walkthroughs. By streamlining team invitations, API key generation, and tier upgrade modals, we removed every hurdle between sign-up and initial deployment.",
    impact:
      "User activation rates jumped by 78%, and self-serve upgrade conversions grew by 3.1x in the subsequent financial quarter.",
    testimonial: {
      quote:
        "The best design decision we made all year was partnering with Fusion Folio. They treated our code and UX as if it were their own product.",
      author: "Nadia Vos",
      title: "Head of Product",
      company: "Circuit Cloud",
    },
    nextProjectSlug: "aura",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}
