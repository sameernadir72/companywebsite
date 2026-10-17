import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Check,
  CheckCircle2,
  FileCheck,
  Video,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { WhyUsSection } from "../components/WhyUsSection";
import { CTASection } from "../components/CTASection";
import { FAQ } from "../components/FAQ";
import { TiltCard } from "../components/ui/TiltCard";

export const metadata: Metadata = {
  title: "Our Process — Fusion Folio | Agile Creative Framework",
  description:
    "Discover how Fusion Folio transforms visionary ideas into production-ready websites, design systems, and campaigns through our transparent 5-phase agile framework.",
};

interface ProcessPhaseItem {
  phase: string;
  title: string;
  tagline: string;
  duration: string;
  image: string;
  description: string;
  deliverables: string[];
}

const phases: ProcessPhaseItem[] = [
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

interface CadenceCard {
  day: string;
  badge: string;
  event: string;
  desc: string;
  checkpoints: string[];
  highlighted: boolean;
  icon: "calendar" | "video" | "check";
}

const cadenceSchedule: CadenceCard[] = [
  {
    day: "Monday",
    badge: "01 · Kickoff",
    event: "Sprint Alignment",
    desc: "Asynchronous kick-off outlining weekly milestone deliverables, priorities, and blockers in your shared portal.",
    checkpoints: [
      "Updated sprint backlog",
      "Assigned discipline owners",
      "Clear weekly acceptance criteria",
    ],
    highlighted: false,
    icon: "calendar",
  },
  {
    day: "Wednesday",
    badge: "02 · Mid-Week Demo",
    event: "Loom Video Walkthrough",
    desc: "A concise 5-minute screencast demonstrating live progress, Figma prototypes, and staging previews—zero calendar bloat.",
    checkpoints: [
      "Interactive staging link",
      "Direct async comment thread",
      "Rapid course-correction window",
    ],
    highlighted: true,
    icon: "video",
  },
  {
    day: "Friday",
    badge: "03 · Ship & Review",
    event: "Milestone Delivery",
    desc: "Deployable pull request, motion package, or finalized Figma system ready for stakeholder sign-off.",
    checkpoints: [
      "Production-ready artifacts",
      "QA & performance checklist",
      "Next week's sprint preview",
    ],
    highlighted: false,
    icon: "check",
  },
];

export default function ProcessPage() {
  return (
    <div className="flex min-h-screen flex-1 flex-col bg-white text-[#0A1128]">
      <Navbar />

      <main className="flex flex-1 flex-col">
        {/* SECTION 1: Dark Liquid Wave Hero (Derived from HeroSection + ProcessSection) */}
        <section
          id="process-hero"
          aria-label="Our Process Hero"
          className="relative w-full overflow-hidden bg-[#07112C] pt-32 sm:pt-36 lg:pt-44 pb-20 sm:pb-24 lg:pb-28 text-white isolate scroll-mt-28"
        >
          {/* Background Liquid Wave Layer */}
          <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
            <Image
              src="/hero-bg-wave.jpeg"
              alt="Process liquid blue wave background"
              fill
              priority
              sizes="100vw"
              quality={100}
              className="object-cover object-center w-full h-full select-none pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#040C20]/70 via-[#07112C]/45 to-[#07112C]/92 pointer-events-none" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              {/* Eyebrow Pill with Glowing Orange Dot */}
              <div className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.07] border border-white/15 px-4 py-1.5 backdrop-blur-md mb-6">
                <span className="inline-block h-2 w-2 rounded-full bg-[#FF5500] shadow-[0_0_8px_#FF5500]" />
                <span className="font-manrope text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
                  OUR PROCESS · AGILE CREATIVE METHODOLOGY
                </span>
              </div>

              {/* Headline — Manrope + Newsreader Italic Fusion */}
              <h1 className="font-manrope font-normal text-4xl sm:text-6xl lg:text-[68px] lg:leading-[1.08] tracking-tight lg:tracking-[-2.5px] text-white">
                <span className="block">From The First Conversation</span>
                <span className="block text-[#98A9CB]">
                  To Your Next{" "}
                  <span className="font-serif italic font-normal text-[#FF5500] tracking-normal">
                    Breakthrough Launch.
                  </span>
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-6 font-manrope text-base sm:text-lg lg:text-xl text-blue-100/85 max-w-2xl leading-relaxed">
                No guesswork. No radio silence. A battle-tested 5-phase framework engineered to deliver flagship agency craft at startup velocity.
              </p>

              {/* Dual CTAs */}
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#FF5500] hover:bg-[#E03E00] text-white border border-[#FF5500] hover:border-[#FF6A1A] px-8 py-4 font-semibold text-sm sm:text-base shadow-[0_4px_20px_rgba(255,85,0,0.35)] hover:shadow-[0_8px_32px_rgba(255,85,0,0.6)] transition-all duration-300 ease-out cursor-pointer"
                >
                  <span>Start Your First Sprint</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                </Link>

                <Link
                  href="#phases"
                  className="rounded-full bg-white/10 hover:bg-white text-white hover:text-[#07112C] border border-white/25 hover:border-white px-7 py-4 font-medium text-sm sm:text-base backdrop-blur-md shadow-sm hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition-all duration-300 ease-out cursor-pointer"
                >
                  View 5-Phase Breakdown
                </Link>
              </div>
            </div>

            {/* Quick-Jump Phase Bar */}
            <div className="mt-14 sm:mt-16 pt-8 border-t border-white/10">
              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                {phases.map((p) => (
                  <Link
                    key={p.phase}
                    href={`#phase-${p.phase}`}
                    className="group inline-flex items-center gap-2 rounded-full bg-white/[0.06] hover:bg-white text-white/85 hover:text-[#07112C] border border-white/15 hover:border-white px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium backdrop-blur-md transition-all duration-300"
                  >
                    <span className="font-mono text-[11px] font-bold text-[#FF5500]">
                      {p.phase}
                    </span>
                    <span>{p.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: 5-Phase Deep Dive on Light #FAFAFC Canvas (Derived from AboutSection + ProcessSection) */}
        <section
          id="phases"
          aria-label="5-Phase Agile Execution Framework"
          className="relative w-full overflow-hidden bg-[#FAFAFC] py-20 sm:py-28 lg:py-32 text-[#0A1128] scroll-mt-28"
        >
          {/* Subtle organic blue contour curves & dot grids */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-60"
          >
            <svg
              className="absolute -top-24 left-1/4 h-[800px] w-[1100px] -translate-x-1/2 text-blue-200/50"
              fill="none"
              viewBox="0 0 1100 800"
            >
              <path
                d="M0 400C250 200 450 600 700 350C950 100 1100 300 1100 300"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <path
                d="M100 200C350 450 600 150 850 400C1000 550 1150 450 1150 450"
                stroke="currentColor"
                strokeWidth="1.5"
                opacity="0.6"
              />
            </svg>
            <div className="absolute right-8 top-10 sm:right-16 sm:top-14 grid grid-cols-5 gap-2.5 opacity-30">
              {Array.from({ length: 25 }).map((_, i) => (
                <span
                  key={`proc-dot-${i}`}
                  className="h-1.5 w-1.5 rounded-full bg-blue-500/40"
                />
              ))}
            </div>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-16 sm:pb-20 border-b border-slate-200/80">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#FF5500]" />
                  <span className="font-manrope text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#FF5500] uppercase">
                    01 — 05 · EXECUTION ARCHITECTURE
                  </span>
                </div>
                <h2 className="font-display text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight leading-[1.12]">
                  <span className="text-[#1642D0] block">Five transparent phases.</span>
                  <span className="text-[#0A1128] block">Progress you can inspect weekly.</span>
                </h2>
              </div>
              <p className="font-manrope text-slate-600 text-sm sm:text-base max-w-md md:pb-1 leading-relaxed">
                Every phase concludes with tangible, reviewable artifacts—so you always know what is shipping next.
              </p>
            </div>

            {/* Alternating 5-Phase Rows */}
            <div className="mt-16 sm:mt-24 flex flex-col gap-20 sm:gap-28">
              {phases.map((phase, index) => {
                const isEven = index % 2 === 1;

                return (
                  <div
                    key={phase.phase}
                    id={`phase-${phase.phase}`}
                    className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
                  >
                    {/* Media Card */}
                    <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <TiltCard maxTilt={4}>
                        <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[28px] border border-slate-200/90 bg-[#07112C] shadow-[0_24px_60px_rgba(10,17,40,0.14)] group">
                          <Image
                            src={phase.image}
                            alt={phase.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#040C20]/90 via-[#040C20]/20 to-transparent pointer-events-none" />

                          <div className="absolute top-5 left-5 z-10 flex items-center gap-2 rounded-full bg-[#07112C]/80 backdrop-blur-md border border-white/20 px-4 py-1.5 text-xs font-semibold text-white">
                            <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
                            <span>PHASE {phase.phase}</span>
                          </div>

                          <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between rounded-2xl bg-[#07112C]/80 backdrop-blur-md border border-white/15 px-4 py-3 text-xs text-white/90 font-mono">
                            <span>
                              Duration: <strong className="text-white">{phase.duration}</strong>
                            </span>
                            <span className="text-[#FF5500] font-bold">
                              Step {index + 1} of {phases.length}
                            </span>
                          </div>
                        </div>
                      </TiltCard>
                    </div>

                    {/* Description Column */}
                    <div className={`lg:col-span-6 flex flex-col ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1642D0]/10 border border-[#1642D0]/20 font-mono text-xs font-bold text-[#1642D0]">
                          {phase.phase}
                        </span>
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF5500]">
                          Phase {phase.phase} // {phase.duration}
                        </span>
                      </div>

                      <h3 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#0A1128] leading-[1.12] mb-3">
                        {phase.title}
                      </h3>

                      <p className="text-base sm:text-lg font-semibold text-[#1642D0] mb-4">
                        {phase.tagline}
                      </p>

                      <p className="font-manrope text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                        {phase.description}
                      </p>

                      <div className="rounded-2xl bg-white border border-[#E4EBF7] shadow-[0_10px_32px_rgba(0,35,110,0.05)] p-5 sm:p-6">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5 block">
                          Phase Deliverables &amp; Sign-Off
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {phase.deliverables.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-[#0A1128]"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
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

        {/* SECTION 3: Weekly Sprint Cadence on Soft Ice Blue #F0F5FF (Derived from WorkWithUsSection) */}
        <section
          id="cadence"
          aria-label="Weekly Sprint Cadence"
          className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#F0F5FF] text-[#0B1220] scroll-mt-28"
        >
          <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-16 flex flex-col items-center">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#FF5500] uppercase mb-4">
                SPRINT CADENCE
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0B1220] tracking-tight leading-[1.12] mb-4">
                How we collaborate.
                <br />
                Every single week.
              </h2>
              <p className="text-[#475467] text-base sm:text-lg leading-relaxed font-normal">
                We replace endless status meetings with crystal-clear async demos and synchronized weekly delivery targets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8 items-stretch">
              {cadenceSchedule.map((c) => {
                const isHighlighted = c.highlighted;
                return (
                  <div
                    key={c.day}
                    className={`relative flex flex-col justify-between rounded-[28px] sm:rounded-[32px] p-8 sm:p-9 transition-all duration-300 ${
                      isHighlighted
                        ? "bg-[#0055FF] text-white shadow-[0_20px_48px_rgba(0,85,255,0.32)] hover:-translate-y-1.5"
                        : "bg-white text-[#0B1220] border border-[#E4EBF7] shadow-[0_10px_32px_rgba(0,35,110,0.06)] hover:-translate-y-1.5"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-6">
                        {c.icon === "calendar" && (
                          <Calendar className="w-11 h-11 text-[#FF5500] stroke-[1.8]" />
                        )}
                        {c.icon === "video" && (
                          <Video className="w-11 h-11 text-white stroke-[1.8]" />
                        )}
                        {c.icon === "check" && (
                          <FileCheck className="w-11 h-11 text-[#FF5500] stroke-[1.8]" />
                        )}
                        <span
                          className={`rounded-full px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider ${
                            isHighlighted
                              ? "bg-white/15 text-white border border-white/25"
                              : "bg-[#F0F5FF] text-[#1642D0] border border-[#1642D0]/15"
                          }`}
                        >
                          {c.day} · {c.badge}
                        </span>
                      </div>

                      <h3
                        className={`font-display text-2xl sm:text-[26px] font-bold tracking-tight mb-3 ${
                          isHighlighted ? "text-white" : "text-[#0B1220]"
                        }`}
                      >
                        {c.event}
                      </h3>

                      <p
                        className={`text-sm sm:text-[15px] leading-relaxed mb-7 ${
                          isHighlighted ? "text-white/85" : "text-[#475467]"
                        }`}
                      >
                        {c.desc}
                      </p>

                      <div
                        className={`h-px w-full mb-7 ${
                          isHighlighted ? "bg-white/20" : "bg-[#E4EBF7]"
                        }`}
                      />

                      <ul className="space-y-3.5">
                        {c.checkpoints.map((pt) => (
                          <li key={pt} className="flex items-center gap-3">
                            <span
                              className={`flex items-center justify-center w-5 h-5 rounded-full shrink-0 ${
                                isHighlighted
                                  ? "bg-[#FF5500] text-white"
                                  : "bg-[#FFF0E8] text-[#FF5500]"
                              }`}
                            >
                              <Check className="w-3 h-3 stroke-[3]" />
                            </span>
                            <span
                              className={`text-sm sm:text-[15px] font-medium ${
                                isHighlighted ? "text-white/95" : "text-[#1E293B]"
                              }`}
                            >
                              {pt}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 4: Why Us Connected Brand Section (Reused Home Section with /background-why-us.png) */}
        <WhyUsSection />

        {/* SECTION 5: FAQ (White bg-white) */}
        <FAQ />

        {/* SECTION 6: Global CTA Section (Dark Wave /cta_bg.png) */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

