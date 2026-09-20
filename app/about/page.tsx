import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Compass,
  Heart,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CTASection } from "../components/CTASection";
import { MagneticButton } from "../components/ui/MagneticButton";
import { TiltCard } from "../components/ui/TiltCard";

import { getAllTeamMembers, getAgencyMilestones } from "@/lib/team";

export const metadata: Metadata = {
  title: "About Us — Fusion Folio | 360° Creative & Digital Partner",
  description:
    "Learn about Fusion Folio: our multidisciplinary team, creative principles, and mission to help visionary brands make waves across web, motion, and digital campaigns.",
};

const agencyPrinciples = [
  {
    icon: Zap,
    title: "Design for Momentum",
    description:
      "We reject months of theoretical deck-making. We build real, tangible prototypes early and iterate at production velocity.",
  },
  {
    icon: Users,
    title: "Zero Hand-off Friction",
    description:
      "Strategists, designers, and engineers sit in the exact same room. What is promised in Figma is shipped cleanly in Next.js code.",
  },
  {
    icon: Compass,
    title: "Clarity Over Complexity",
    description:
      "Simple beats clever. We strip away unnecessary jargon and focus on what your customer actually feels, understands, and acts upon.",
  },
  {
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
    <div className="flex min-h-screen flex-1 flex-col bg-[#040C20] text-white">
      <Navbar />

      <main className="flex flex-1 flex-col pt-24 sm:pt-28 lg:pt-32">
        {/* Hero Section */}
        <section className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12 pt-8 pb-16 sm:pb-24 text-center">
          <div className="mx-auto flex max-w-4xl flex-col items-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#FF5500] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Story &amp; Ethos</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight leading-[1.05] text-white">
              Big ideas deserve a
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#FF7A40] to-[#FF9E70]">
                connected creative team.
              </span>
            </h1>

            <p className="mt-6 font-manrope text-base sm:text-xl text-blue-100/80 max-w-2xl leading-relaxed">
              We bridge the gap between high-level brand strategy and production-ready code. No bloated retainers, no junior handoffs, no excuses.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#FF5500] hover:bg-[#E03E00] text-white border border-[#FF5500] hover:border-[#FF6A1A] px-8 py-4 font-semibold text-base shadow-[0_4px_20px_rgba(255,85,0,0.35)] hover:shadow-[0_8px_32px_rgba(255,85,0,0.6)] transition-all duration-300 ease-out cursor-pointer"
              >
                <span>Work With Our Team</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </Link>

              <Link
                href="/work"
                className="rounded-full bg-white/10 hover:bg-white text-white hover:text-[#07112C] border border-white/20 hover:border-white px-7 py-4 font-medium text-base backdrop-blur-md shadow-sm hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition-all duration-300 ease-out cursor-pointer"
              >
                Explore Shipped Work
              </Link>
            </div>
          </div>
        </section>

        {/* Narrative & Photo Story */}
        <section className="relative w-full bg-[#07112C] py-20 sm:py-28 border-y border-white/10">
          <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Photo Collage */}
              <div className="lg:col-span-6">
                <TiltCard maxTilt={4}>
                  <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[28px] border border-white/15 bg-slate-900 shadow-2xl group">
                    <Image
                      src="/about-team-1.png"
                      alt="Fusion Folio Studio Strategy Session"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040C20]/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                      <div>
                        <span className="block text-sm font-bold">Collaborative Sprints</span>
                        <span className="block text-xs text-white/70">From whiteboard to production in days</span>
                      </div>
                      <span className="rounded-full bg-[#FF5500] px-3 py-1 text-xs font-bold uppercase">
                        Active Studio
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </div>

              {/* Right Narrative */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF5500]">
                  Why We Exist
                </span>

                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  The old agency model is broken. We rebuilt it for speed and clarity.
                </h2>

                <p className="font-manrope text-base sm:text-lg text-white/80 leading-relaxed">
                  Traditional agencies love bloated meetings, months of discovery decks, and handing off your critical product to unvetted subcontractors. Freelancers are agile but siloed—your brand identity designer rarely understands how to optimize a Next.js LCP score.
                </p>

                <p className="font-manrope text-base sm:text-lg text-white/80 leading-relaxed">
                  Fusion Folio was founded on a simple principle: modern companies need one connected team where brand strategists, UI/UX designers, web engineers, and video creators collaborate in uninterrupted rhythm.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4">
                    <CheckCircle2 className="w-5 h-5 text-[#FF5500] mb-2" />
                    <span className="block text-sm font-bold text-white">No Junior Hand-offs</span>
                    <span className="block text-xs text-white/60 mt-1">Direct access to senior craftspeople</span>
                  </div>
                  <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4">
                    <CheckCircle2 className="w-5 h-5 text-[#FF5500] mb-2" />
                    <span className="block text-sm font-bold text-white">Guaranteed Milestones</span>
                    <span className="block text-xs text-white/60 mt-1">Predictable timelines and weekly demos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="relative w-full bg-[#020B1D] py-16 sm:py-20 border-b border-white/10">
          <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {stats.map((s, idx) => (
                <div key={idx} className={`flex flex-col ${idx > 0 ? "pt-6 sm:pt-0 sm:pl-8" : ""}`}>
                  <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#FF5500] tracking-tight">
                    {s.value}
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white mt-2">{s.label}</span>
                  <span className="text-xs text-white/60 mt-1">{s.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guiding Principles */}
        <section className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12 py-20 sm:py-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#FF5500] uppercase mb-3 block">
              Core Principles
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              The values that steer every decision we make.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {agencyPrinciples.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div
                  key={index}
                  className="rounded-[24px] bg-white/[0.03] border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-[#FF5500]/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF5500]/15 text-[#FF5500] mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-white mb-3">
                      {principle.title}
                    </h3>
                    <p className="font-manrope text-sm text-white/70 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Multidisciplinary Leads */}
        <section className="relative w-full bg-[#07112C] py-20 sm:py-28 border-y border-white/10">
          <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 sm:mb-16">
              <div>
                <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#FF5500] uppercase mb-3 block">
                  Craft Leads
                </span>
                <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  Discipline specialists.
                  <br />
                  Connected execution.
                </h2>
              </div>
              <p className="font-manrope text-sm sm:text-base text-white/70 max-w-md mt-4 md:mt-0">
                Each project squad is led by senior domain directors with decade-plus pedigrees in consumer, SaaS, and creative engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamDisciplines.map((lead, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-[24px] bg-white/[0.03] border border-white/10 p-6 flex flex-col"
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-900 mb-5">
                    <Image
                      src={lead.image}
                      alt={lead.lead}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-xs font-mono text-[#FF5500] uppercase font-semibold">
                    {lead.role}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white mt-1">{lead.lead}</h3>
                  <p className="font-manrope text-xs text-white/60 mt-2 leading-relaxed">
                    {lead.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestone Timeline */}
        <section className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12 py-20 sm:py-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#FF5500] uppercase mb-3 block">
              Our Journey
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Milestones along the way.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {timelineMilestones.map((m, idx) => (
              <div key={idx} className="flex flex-col border-t-2 border-[#FF5500]/50 pt-6">
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-[#FF5500]">
                  {m.year}
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-3 mb-2">{m.title}</h3>
                <p className="font-manrope text-sm text-white/70 leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
