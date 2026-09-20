import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Code2,
  FileCheck,
  Flame,
  GitBranch,
  Layers,
  MessageSquare,
  Repeat,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CTASection } from "../components/CTASection";
import { FAQ } from "../components/FAQ";
import { MagneticButton } from "../components/ui/MagneticButton";
import { TiltCard } from "../components/ui/TiltCard";

export const metadata: Metadata = {
  title: "Our Process — Fusion Folio | Agile Creative Framework",
  description:
    "Discover how Fusion Folio transforms visionary ideas into production-ready websites, design systems, and campaigns through our transparent 5-phase agile framework.",
};

const phases = [
  {
    phase: "01",
    title: "Discover & Align",
    tagline: "Understand your goals, audience, and market landscape.",
    duration: "Week 1",
    image: "/process_1.png",
    description:
      "We begin every engagement with an intensive audit of your existing metrics, competitive landscape, and strategic objectives. We clarify the core problem before writing a single line of code or placing a pixel.",
    deliverables: [
      "Discovery Audit Document",
      "Audience & Persona Architecture",
      "Competitive Differentiation Matrix",
      "Defined Success Metrics & KPIs",
      "Project Roadmap & Milestone Gantt",
    ],
  },
  {
    phase: "02",
    title: "Strategy & Creative Direction",
    tagline: "Shape the aesthetic tone, narrative, and technical architecture.",
    duration: "Week 2",
    image: "/process_2.png",
    description:
      "Here we establish the creative soul of your project. We develop interactive moodboards, typographic pairings, 3D motion styleframes, and technical software architecture specs to ensure 100% alignment.",
    deliverables: [
      "Creative Direction Moodboards",
      "Information Architecture (IA)",
      "Technical Stack Specification",
      "Copywriting Voice & Messaging Guide",
      "Design Token System Blueprint",
    ],
  },
  {
    phase: "03",
    title: "Design & Prototyping",
    tagline: "Craft unified interfaces, motion reels, and tangible prototypes.",
    duration: "Weeks 3–4",
    image: "/process_3.png",
    description:
      "We transition from wireframes directly into high-fidelity Figma components and interactive prototypes. You receive click-through demos that mirror real-world performance, allowing swift feedback and consensus.",
    deliverables: [
      "High-Fidelity UI Screens (Mobile & Desktop)",
      "Interactive Figma & Framer Prototypes",
      "Kinetic Motion Reels & Animation Samples",
      "Design System Component Library",
      "User Testing & Validation Reports",
    ],
  },
  {
    phase: "04",
    title: "Build & Polish",
    tagline: "Engineered with modern Next.js, sub-second speed, and fluid motion.",
    duration: "Weeks 4–5",
    image: "/process_4.png",
    description:
      "Our developers bring approved designs into clean, production-grade code. Every component is rigorously tested for responsive behavior across mobile, tablet, and 4K displays, with micro-interactions and SEO fully baked in.",
    deliverables: [
      "Production Next.js & React Codebase",
      "Framer Motion & GSAP Micro-Interactions",
      "Headless CMS Integration",
      "Cross-Browser & Device QA Testing",
      "Lighthouse 95+ Core Web Vitals Audit",
    ],
  },
  {
    phase: "05",
    title: "Launch & Scale",
    tagline: "Deploy with zero downtime and iterate for continuous growth.",
    duration: "Week 6+",
    image: "/monitor.png",
    description:
      "We coordinate your production deployment with zero downtime, configure analytics tracking, and conduct live stakeholder walkthroughs. Post-launch, we support ongoing optimization to maximize your return.",
    deliverables: [
      "Production Deployment (Vercel / Cloudflare)",
      "Full Code Repository Transfer & IP Handoff",
      "Analytics & Event Tracking Verification",
      "30-Day Post-Launch Bug Warranty",
      "Ongoing Growth Retainer Roadmap",
    ],
  },
];

const cadenceSchedule = [
  {
    day: "Monday",
    event: "Sprint Alignment",
    desc: "Asynchronous kick-off outlining weekly milestone deliverables in your shared portal.",
  },
  {
    day: "Wednesday",
    event: "Loom Video Walkthrough",
    desc: "A concise 5-minute screencast demonstrating live progress, prototypes, and code previews.",
  },
  {
    day: "Friday",
    event: "Milestone Delivery",
    desc: "Deployable pull request or updated Figma file ready for your review and approval.",
  },
];

export default function ProcessPage() {
  return (
    <div className="flex min-h-screen flex-1 flex-col bg-[#040C20] text-white">
      <Navbar />

      <main className="flex flex-1 flex-col pt-24 sm:pt-28 lg:pt-32">
        {/* Hero Section */}
        <section className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12 pt-8 pb-16 sm:pb-24 text-center">
          <div className="mx-auto flex max-w-4xl flex-col items-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#FF5500] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Agile Creative Methodology</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight leading-[1.05] text-white">
              From the first conversation
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#FF7A40] to-[#FF9E70]">
                to your next launch.
              </span>
            </h1>

            <p className="mt-6 font-manrope text-base sm:text-xl text-blue-100/80 max-w-2xl leading-relaxed">
              No guesswork. No radio silence. A battle-tested 5-phase framework designed to deliver agency polish at startup velocity.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#FF5500] hover:bg-[#E03E00] text-white border border-[#FF5500] hover:border-[#FF6A1A] px-8 py-4 font-semibold text-base shadow-[0_4px_20px_rgba(255,85,0,0.35)] hover:shadow-[0_8px_32px_rgba(255,85,0,0.6)] transition-all duration-300 ease-out cursor-pointer"
              >
                <span>Start Your First Sprint</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </Link>

              <Link
                href="#phases"
                className="rounded-full bg-white/10 hover:bg-white text-white hover:text-[#07112C] border border-white/20 hover:border-white px-7 py-4 font-medium text-base backdrop-blur-md shadow-sm hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition-all duration-300 ease-out cursor-pointer"
              >
                View 5-Phase Breakdown
              </Link>
            </div>
          </div>
        </section>

        {/* 5-Phase Deep Dive */}
        <section id="phases" className="relative w-full bg-[#07112C] py-20 sm:py-28 border-y border-white/10">
          <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
            <div className="flex flex-col gap-16 sm:gap-24">
              {phases.map((phase, index) => {
                const isEven = index % 2 === 1;

                return (
                  <div
                    key={phase.phase}
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                      isEven ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Media Card */}
                    <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <TiltCard maxTilt={4}>
                        <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[28px] border border-white/15 bg-slate-900 shadow-2xl group">
                          <Image
                            src={phase.image}
                            alt={phase.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#040C20]/90 via-transparent to-transparent pointer-events-none" />

                          <div className="absolute top-5 left-5 z-10 flex items-center gap-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 px-4 py-1.5 text-xs font-semibold text-white">
                            <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
                            <span>PHASE {phase.phase}</span>
                          </div>

                          <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between text-xs text-white/80 font-mono">
                            <span>Estimated Duration: {phase.duration}</span>
                            <span className="text-[#FF5500] font-bold">Step {index + 1} of 5</span>
                          </div>
                        </div>
                      </TiltCard>
                    </div>

                    {/* Description Column */}
                    <div className={`lg:col-span-6 flex flex-col ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF5500] mb-2">
                        Phase {phase.phase} // {phase.duration}
                      </span>

                      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
                        {phase.title}
                      </h2>

                      <p className="text-base sm:text-lg font-medium text-blue-200/90 mb-4">
                        {phase.tagline}
                      </p>

                      <p className="font-manrope text-sm sm:text-base text-white/75 leading-relaxed mb-6">
                        {phase.description}
                      </p>

                      <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-6">
                        <span className="text-xs font-bold uppercase tracking-wider text-white/60 mb-3.5 block">
                          Phase Deliverables
                        </span>
                        <ul className="space-y-2.5">
                          {phase.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                              <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 2-Week Sprint Cadence */}
        <section className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12 py-20 sm:py-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#FF5500] uppercase mb-3 block">
              Sprint Cadence
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              How we work together every week.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/70">
              We replace endless status meetings with crystal-clear async demos and synchronized sprint targets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {cadenceSchedule.map((c, i) => (
              <div
                key={i}
                className="rounded-[28px] bg-white/[0.03] border border-white/10 p-8 flex flex-col justify-between hover:border-[#FF5500]/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <span className="inline-block px-3.5 py-1 rounded-full bg-[#FF5500]/15 text-[#FF5500] text-xs font-mono font-bold uppercase tracking-wider mb-5">
                    {c.day}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">{c.event}</h3>
                  <p className="font-manrope text-sm text-white/75 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <FAQ />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
