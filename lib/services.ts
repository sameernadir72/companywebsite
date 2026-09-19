export interface ServiceDiscipline {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  iconName: "PenTool" | "Monitor" | "Layout" | "MessageSquare" | "PlaySquare" | "Clapperboard";
  accent: string;
  badgeColor: string;
  deliverables: string[];
  tools: string[];
  turnaround: string;
}

export interface EngagementComparisonRow {
  feature: string;
  starter: string;
  growth: string;
  partner: string;
}

export const servicesData: ServiceDiscipline[] = [
  {
    id: "brand",
    number: "01",
    title: "Brand & Graphic Design",
    tagline: "A visual identity that feels unmistakably yours.",
    description:
      "We design coherent brand identities that translate across every physical and digital touchpoint. From iconic logomarks and modular typography systems to comprehensive brand guidelines, we position your business to stand out with authority.",
    image: "/service-01.png",
    iconName: "PenTool",
    accent: "from-[#FF5500]/20 to-[#FF7A40]/5",
    badgeColor: "bg-[#FF5500]",
    deliverables: [
      "Visual Identity & Logomark Design",
      "Typography & Color Hierarchy",
      "Comprehensive Brand Style Guide",
      "Marketing Collateral & Pitch Decks",
      "Packaging & Print Production Files",
      "Design Token System in Figma",
    ],
    tools: ["Figma", "Illustrator", "Photoshop", "InDesign"],
    turnaround: "2–4 Weeks",
  },
  {
    id: "web",
    number: "02",
    title: "Website Development",
    tagline: "A strong digital home, built around your business.",
    description:
      "Sub-second page speeds, bulletproof accessibility, and cinematic micro-interactions. We engineer headless web experiences using Next.js, React, and Tailwind CSS that turn curious visitors into loyal advocates.",
    image: "/service-02.png",
    iconName: "Monitor",
    accent: "from-[#1447D4]/30 to-[#0A2680]/10",
    badgeColor: "bg-[#1447D4]",
    deliverables: [
      "Custom Next.js & React Architectures",
      "Interactive Animations (Framer Motion & GSAP)",
      "Headless CMS Integration (Sanity, Contentful)",
      "E-Commerce Engine (Shopify Plus, Stripe)",
      "Technical SEO & Performance Optimization",
      "Responsive Breakpoint Testing (Mobile to 4K)",
    ],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shopify"],
    turnaround: "3–6 Weeks",
  },
  {
    id: "uiux",
    number: "03",
    title: "UI/UX Product Design",
    tagline: "Thoughtful experiences. Effortless interactions.",
    description:
      "We turn complex product workflows into simple, human experiences. Through user journey mapping, iterative wireframes, and production-ready design systems, we build software interfaces that users genuinely love using.",
    image: "/service-03.png",
    iconName: "Layout",
    accent: "from-[#7957EF]/25 to-[#6030FF]/5",
    badgeColor: "bg-[#7957EF]",
    deliverables: [
      "User Research & Journey Mapping",
      "Interactive High-Fidelity Prototypes",
      "Multi-Platform UI Systems (Web & Mobile)",
      "Design Systems & Component Libraries",
      "Usability Testing & Conversion Audits",
      "Developer Handoff Specifications",
    ],
    tools: ["Figma", "ProtoPie", "Framer", "Lottie"],
    turnaround: "3–5 Weeks",
  },
  {
    id: "social",
    number: "04",
    title: "Social Media Design & Management",
    tagline: "A consistent presence with something to say.",
    description:
      "Stop posting filler content. We establish an aesthetic social identity and proactive publishing rhythm that builds genuine brand equity, drives engagement, and sparks organic conversations across LinkedIn, Instagram, and X.",
    image: "/service-04.png",
    iconName: "MessageSquare",
    accent: "from-[#185BFF]/25 to-[#0038E2]/5",
    badgeColor: "bg-[#185BFF]",
    deliverables: [
      "Social Brand System & Post Templates",
      "Monthly Content Calendar Strategy",
      "Carousel & Infographic Design",
      "Community Engagement Playbooks",
      "Caption Copywriting & Hashtag Optimization",
      "Monthly Analytics & Performance Reports",
    ],
    tools: ["Figma", "Canva Enterprise", "Sprout Social", "Buffer"],
    turnaround: "Monthly Retainer",
  },
  {
    id: "reels",
    number: "05",
    title: "Reels, Viral Creative & UGC",
    tagline: "Short-form stories made for real attention.",
    description:
      "Engineered for the modern 9:16 vertical viewport. We create scroll-stopping short-form reels, authentic UGC concepts, and creator-led storylines that hook users in the first 1.5 seconds and communicate your value clearly.",
    image: "/service-05.png",
    iconName: "PlaySquare",
    accent: "from-[#FF5100]/25 to-[#FF7730]/5",
    badgeColor: "bg-[#FF5100]",
    deliverables: [
      "Vertical 9:16 Video Production",
      "Hook Generation & Scriptwriting",
      "Dynamic Kinetic Subtitles & Typography",
      "UGC Creator Casting & Content Direction",
      "Sound Design & Trend Matching",
      "A/B Hook Variant Packages",
    ],
    tools: ["Premiere Pro", "CapCut Pro", "After Effects", "ElevenLabs"],
    turnaround: "Bi-Weekly Drops",
  },
  {
    id: "motion",
    number: "06",
    title: "2D Animation & Motion Graphics",
    tagline: "Bring personality, clarity, and movement to your message.",
    description:
      "Elevate your brand beyond static imagery. We produce fluid 2D character animations, product explainers, UI demo teasers, and kinetic logo reveals that communicate complex technical concepts with warmth and elegance.",
    image: "/service-06.png",
    iconName: "Clapperboard",
    accent: "from-[#6030FF]/25 to-[#1C5AEF]/5",
    badgeColor: "bg-[#6030FF]",
    deliverables: [
      "Product Explainer Videos (60-90s)",
      "Kinetic Logo Animations & Intro Bumpers",
      "Lottie Micro-Interactions for Web & App",
      "Animated Ad Creatives & Video Loops",
      "Storyboard & Styleframe Development",
      "Custom Sound FX & Voiceover Direction",
    ],
    tools: ["After Effects", "Cinema 4D", "LottieFiles", "Audition"],
    turnaround: "2–4 Weeks",
  },
];

export const capabilitiesComparison: EngagementComparisonRow[] = [
  {
    feature: "Integrated Design & Dev Team",
    starter: "Limited",
    growth: "Dedicated Squad",
    partner: "Full Agency Team",
  },
  {
    feature: "Direct Slack / Discord Access",
    starter: "Email Only",
    growth: "Daily Async",
    partner: "Real-Time Direct",
  },
  {
    feature: "Bi-Weekly Strategy Sprints",
    starter: "Monthly",
    growth: "Yes",
    partner: "Continuous",
  },
  {
    feature: "Turnaround Speed",
    starter: "Standard",
    growth: "Expedited",
    partner: "Priority Queue",
  },
  {
    feature: "Full Intellectual Property Ownership",
    starter: "Yes",
    growth: "Yes",
    partner: "Yes",
  },
  {
    feature: "Post-Launch Warranty & Support",
    starter: "14 Days",
    growth: "30 Days",
    partner: "Ongoing SLA",
  },
];

/* Accessor functions */
export function getAllServices(): ServiceDiscipline[] {
  return servicesData;
}

export function getServiceById(id: string): ServiceDiscipline | undefined {
  return servicesData.find((s) => s.id.toLowerCase() === id.toLowerCase());
}

export function getServiceIds(): string[] {
  return servicesData.map((s) => s.id);
}
