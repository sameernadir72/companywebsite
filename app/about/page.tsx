import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { IndustriesSection } from "../components/IndustriesSection";
import { CTASection } from "../components/CTASection";
import { TiltCard } from "../components/ui/TiltCard";
import { getAllTeamMembers, getAgencyMilestones } from "@/lib/team";

export const metadata: Metadata = {
  title: "About Us — Fusion Folio | 360° Creative & Digital Partner",
  description:
    "Learn about Fusion Folio: our multidisciplinary team, creative principles, and mission to help visionary brands make waves across web, motion, and digital campaigns.",
};

const agencyPrinciples = [
  {
    number: "01",
    icon: Zap,
    title: "Design for Momentum",
    description:
      "We reject months of theoretical deck-making. We build real, tangible prototypes early and iterate at production velocity.",
  },
  {
    number: "02",
    icon: Users,
    title: "Zero Hand-off Friction",
    description:
      "Strategists, designers, and engineers sit in the exact same room. What is promised in Figma is shipped cleanly in Next.js code.",
  },
  {
    number: "03",
    icon: Compass,
    title: "Clarity Over Complexity",
    description:
      "Simple beats clever. We strip away unnecessary jargon and focus on what your customer actually feels, understands, and acts upon.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Commercial Impact First",
    description:
      "Aesthetics without conversion is just art. Every interaction, typeface choice, and motion curve is aligned with your bottom line.",
  },
];

const stats = [
  { value: "120+", label: "Shipped Projects", sub: "Websites, products & campaigns" },
  { value: "98.4%", label: "Client Retention", sub: "Long-term studio partnerships" },
  { value: "3.4x", label: "Average Growth", sub: "Reported in first 90 days" },
  { value: "14", label: "Timezones Supported", sub: "Fully distributed studio cadence" },
];

export default function AboutPage() {
  const teamDisciplines = getAllTeamMembers();
  const timelineMilestones = getAgencyMilestones();

  return (
    <div className="flex min-h-screen flex-1 flex-col bg-white text-[#0A1128]">
      <Navbar />

      <main className="flex flex-1 flex-col">
        {/* SECTION 1: Dark Liquid Wave Hero (Derived from HeroSection + MeetFusionFolioSection) */}
        <section
          id="about-hero"
          aria-label="About Fusion Folio Hero"
          className="relative w-full overflow-hidden bg-[#021345] pt-32 sm:pt-36 lg:pt-44 pb-20 sm:pb-24 lg:pb-28 text-white isolate scroll-mt-28"
        >
          {/* Background Liquid Blue Wave Texture */}
          <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
            <Image
              src="/bg_meet.jpeg"
              alt="Fusion Folio electric blue wave background"
              fill
              priority
              quality={100}
              unoptimized
              sizes="100vw"
              className="h-full w-full object-cover object-center select-none pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#040C20]/70 via-[#021345]/40 to-[#040C20]/90 pointer-events-none" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              {/* Eyebrow Pill with Glowing Orange Dot */}
              <div className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.07] border border-white/15 px-4 py-1.5 backdrop-blur-md mb-6">
                <span className="inline-block h-2 w-2 rounded-full bg-[#FF5500] shadow-[0_0_8px_#FF5500]" />
                <span className="font-manrope text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
                  OUR STORY &amp; ETHOS · 360° CREATIVE STUDIO
                </span>
              </div>

              {/* Headline — Manrope + Newsreader Italic Fusion */}
              <h1 className="font-manrope font-normal text-4xl sm:text-6xl lg:text-[68px] lg:leading-[1.08] tracking-tight lg:tracking-[-2.5px] text-white">
                <span className="block">Big Ideas Deserve A</span>
                <span className="block text-[#98A9CB]">
                  Connected{" "}
                  <span className="font-serif italic font-normal text-[#FF5500] tracking-normal">
                    Creative Team.
                  </span>
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-6 font-manrope text-base sm:text-lg lg:text-xl text-blue-100/85 max-w-2xl leading-relaxed">
                We bridge the gap between high-level brand strategy and production-ready code. No bloated retainers, no junior handoffs, no excuses.
              </p>

              {/* Dual CTAs */}
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#FF5500] hover:bg-[#E03E00] text-white border border-[#FF5500] hover:border-[#FF6A1A] px-8 py-4 font-semibold text-sm sm:text-base shadow-[0_4px_20px_rgba(255,85,0,0.35)] hover:shadow-[0_8px_32px_rgba(255,85,0,0.6)] transition-all duration-300 ease-out cursor-pointer"
                >
                  <span>Work With Our Team</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/work"
                  className="rounded-full bg-white/10 hover:bg-white text-white hover:text-[#07112C] border border-white/25 hover:border-white px-7 py-4 font-medium text-sm sm:text-base backdrop-blur-md shadow-sm hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition-all duration-300 ease-out cursor-pointer"
                >
                  Explore Shipped Work
                </Link>
              </div>
            </div>

            {/* Quick-Jump Anchor Bar */}
            <div className="mt-14 sm:mt-16 pt-8 border-t border-white/10">
              <div className="flex flex-wrap items-center justify-center gap-3">
                {[
                  { href: "#narrative", label: "01 · Why We Exist" },
                  { href: "#principles", label: "02 · Core Principles" },
                  { href: "#leadership", label: "03 · Craft Leads" },
                  { href: "#milestones", label: "04 · Studio Journey" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full bg-white/[0.06] hover:bg-white text-white/85 hover:text-[#07112C] border border-white/15 hover:border-white px-5 py-2 text-xs sm:text-sm font-medium backdrop-blur-md transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Studio Narrative & Stats Band on Light #FAFAFC Canvas (Derived from AboutSection) */}
        <section
          id="narrative"
          aria-label="Why We Exist — Studio Narrative"
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
                  key={`about-dot-${i}`}
                  className="h-1.5 w-1.5 rounded-full bg-blue-500/40"
                />
              ))}
            </div>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Photo Collage */}
              <div className="lg:col-span-6">
                <TiltCard maxTilt={4}>
                  <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[28px] border border-slate-200/90 bg-[#07112C] shadow-[0_24px_60px_rgba(10,17,40,0.14)] group">
                    <Image
                      src="/about-team-1.png"
                      alt="Fusion Folio Studio Strategy Session"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040C20]/90 via-[#040C20]/20 to-transparent pointer-events-none" />

                    <div className="absolute top-5 left-5 z-10 flex items-center gap-2 rounded-full bg-[#07112C]/80 backdrop-blur-md border border-white/20 px-4 py-1.5 text-xs font-semibold text-white">
                      <span className="h-2 w-2 rounded-full bg-[#FF5500]" />
                      <span>01 · STUDIO CULTURE</span>
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between rounded-2xl bg-[#07112C]/80 backdrop-blur-md border border-white/15 px-5 py-3.5 text-white">
                      <div>
                        <span className="block text-sm font-bold">Collaborative Sprints</span>
                        <span className="block text-xs text-white/70">
                          From whiteboard to production in days
                        </span>
                      </div>
                      <span className="rounded-full bg-[#FF5500] px-3.5 py-1 text-xs font-bold uppercase">
                        Active Studio
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </div>

              {/* Right Narrative */}
              <div className="lg:col-span-6 flex flex-col gap-5">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#FF5500]" />
                  <span className="font-manrope text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#FF5500]">
                    WHY WE EXIST
                  </span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight leading-[1.12]">
                  <span className="text-[#1642D0] block">The old agency model is broken.</span>
                  <span className="text-[#0A1128] block">We rebuilt it for speed and clarity.</span>
                </h2>

                <p className="font-manrope text-base sm:text-lg text-slate-600 leading-relaxed">
                  Traditional agencies love bloated meetings, months of discovery decks, and handing off your critical product to unvetted subcontractors. Freelancers are agile but siloed—your brand identity designer rarely understands how to optimize a Next.js LCP score.
                </p>

                <p className="font-manrope text-base sm:text-lg text-slate-600 leading-relaxed">
                  Fusion Folio was founded on a simple principle: modern companies need one connected team where brand strategists, UI/UX designers, web engineers, and video creators collaborate in uninterrupted rhythm.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="rounded-2xl bg-white border border-[#E4EBF7] shadow-[0_10px_30px_rgba(0,35,110,0.05)] p-5">
                    <CheckCircle2 className="w-5 h-5 text-[#FF5500] mb-2.5" />
                    <span className="block text-sm font-bold text-[#0A1128]">No Junior Hand-offs</span>
                    <span className="block text-xs text-slate-500 mt-1">
                      Direct access to senior craftspeople on every sprint
                    </span>
                  </div>
                  <div className="rounded-2xl bg-white border border-[#E4EBF7] shadow-[0_10px_30px_rgba(0,35,110,0.05)] p-5">
                    <CheckCircle2 className="w-5 h-5 text-[#1642D0] mb-2.5" />
                    <span className="block text-sm font-bold text-[#0A1128]">Guaranteed Milestones</span>
                    <span className="block text-xs text-slate-500 mt-1">
                      Predictable timelines and transparent weekly demos
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Elevated 4-Stat Impact Strip */}
            <div className="mt-16 sm:mt-20 rounded-[28px] sm:rounded-[32px] bg-white border border-[#E4EBF7] shadow-[0_16px_48px_rgba(0,35,110,0.06)] p-8 sm:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
                {stats.map((s, idx) => (
                  <div
                    key={s.label}
                    className={`flex flex-col ${idx > 0 ? "pt-6 sm:pt-0 sm:pl-8" : ""}`}
                  >
                    <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1642D0] tracking-tight">
                      {s.value}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-[#0A1128] mt-2">
                      {s.label}
                    </span>
                    <span className="text-xs text-slate-500 mt-1">{s.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Guiding Principles on Dark Wave Canvas (Derived from WhyUsSection with /background-why-us.png) */}
        <section
          id="principles"
          aria-label="Core Studio Principles"
          className="relative isolate w-full overflow-hidden bg-[#05112F] py-24 sm:py-28 lg:py-32 text-white scroll-mt-28"
        >
          {/* Background Liquid Wave Layer */}
          <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
            <Image
              src="/background-why-us.png"
              alt="Core principles deep blue wave background"
              fill
              sizes="100vw"
              quality={100}
              className="h-full w-full object-cover object-[center_bottom]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#05112F]/65 via-[#05112F]/35 to-[#05112F]/65 pointer-events-none" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 sm:mb-16">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#FF5500] shadow-[0_0_8px_#FF5500]" />
                  <span className="font-manrope text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#FF5500] uppercase">
                    CORE PRINCIPLES
                  </span>
                </div>
                <h2 className="font-manrope font-bold text-3xl sm:text-5xl lg:text-[52px] leading-tight tracking-tight text-white">
                  One team. Four{" "}
                  <span className="text-[#FF5500]">non-negotiable</span> standards.
                </h2>
              </div>
              <p className="font-manrope text-sm sm:text-base text-[#C2D6FC]/90 max-w-md">
                The operating principles that steer every strategy deck, Figma component, and production deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
              {agencyPrinciples.map((principle) => {
                const Icon = principle.icon;
                return (
                  <div
                    key={principle.number}
                    className="rounded-[24px] bg-white/[0.06] backdrop-blur-xl border border-white/15 p-7 sm:p-8 flex flex-col justify-between hover:border-[#FF5500]/60 hover:bg-white/[0.09] transition-all duration-300 hover:-translate-y-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.25)]"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF5500] text-white shadow-[0_6px_20px_rgba(255,85,0,0.35)]">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-xs font-bold text-white/45">
                          {principle.number}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-white mb-3">
                        {principle.title}
                      </h3>
                      <p className="font-manrope text-sm text-blue-100/80 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 4: Multidisciplinary Craft Leads on Soft Ice Blue #F0F5FF (Derived from WorkWithUsSection) */}
        <section
          id="leadership"
          aria-label="Multidisciplinary Craft Leads"
          className="relative w-full bg-[#F0F5FF] py-20 sm:py-28 lg:py-32 text-[#0B1220] scroll-mt-28"
        >
          <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 sm:mb-16">
              <div>
                <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#FF5500] uppercase mb-3 block">
                  CRAFT LEADS
                </span>
                <h2 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-[#0B1220] tracking-tight leading-[1.12]">
                  Discipline specialists.
                  <br />
                  <span className="text-[#1642D0]">Connected execution.</span>
                </h2>
              </div>
              <p className="font-manrope text-sm sm:text-base text-[#475467] max-w-md mt-4 md:mt-0 leading-relaxed">
                Each project squad is led by senior domain directors with decade-plus pedigrees in consumer, SaaS, and creative engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
              {teamDisciplines.map((lead) => (
                <div
                  key={lead.lead}
                  className="group relative overflow-hidden rounded-[28px] bg-white border border-[#E4EBF7] shadow-[0_10px_32px_rgba(0,35,110,0.06)] hover:shadow-[0_18px_42px_rgba(0,35,110,0.12)] p-6 flex flex-col transition-all duration-300 hover:-translate-y-1.5"
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#07112C] mb-5">
                    <Image
                      src={lead.image}
                      alt={lead.lead}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-xs font-mono text-[#FF5500] uppercase font-bold tracking-wider">
                    {lead.role}
                  </span>
                  <h3 className="font-display text-lg font-bold text-[#0B1220] mt-1">
                    {lead.lead}
                  </h3>
                  <p className="font-manrope text-xs sm:text-sm text-[#475467] mt-2 leading-relaxed">
                    {lead.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: Milestone Timeline on White Canvas (Derived from ProcessSection) */}
        <section
          id="milestones"
          aria-label="Agency Journey and Milestones"
          className="relative w-full bg-white py-20 sm:py-28 lg:py-32 text-[#0A1128] scroll-mt-28"
        >
          <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#FF5500] uppercase mb-3 block">
                OUR JOURNEY
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0A1128] tracking-tight">
                Milestones along the way.
              </h2>
              <p className="mt-4 font-manrope text-sm sm:text-base text-slate-500">
                How we evolved from a boutique design collective into a global 360° digital partner.
              </p>
            </div>

            <div className="relative">
              {/* Desktop horizontal timeline connector line */}
              <div
                aria-hidden="true"
                className="hidden md:block absolute top-[26px] left-[8%] right-[8%] h-[2px] bg-slate-200 z-0"
              />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {timelineMilestones.map((m, idx) => (
                  <div key={m.year} className="flex flex-col items-start">
                    <div
                      className={`w-[54px] h-[54px] rounded-full flex items-center justify-center font-mono text-sm font-bold mb-6 border-2 transition-colors ${
                        idx === timelineMilestones.length - 1
                          ? "bg-[#FF5500] border-[#FF5500] text-white shadow-[0_6px_20px_rgba(255,85,0,0.35)]"
                          : "bg-white border-[#1642D0] text-[#1642D0]"
                      }`}
                    >
                      {m.year}
                    </div>
                    <div className="rounded-2xl bg-[#FAFAFC] border border-slate-200/80 p-6 w-full h-full">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF5500]">
                        Milestone 0{idx + 1}
                      </span>
                      <h3 className="font-display text-xl font-bold text-[#0A1128] mt-1.5 mb-2">
                        {m.title}
                      </h3>
                      <p className="font-manrope text-sm text-slate-600 leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: Industries Spotlight (Reused Home Section with /industry_bg.png) */}
        <IndustriesSection />

        {/* SECTION 7: Global CTA Section (Dark Wave /cta_bg.png) */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

