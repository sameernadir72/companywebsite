import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clapperboard,
  Globe,
  Layers,
  Layout,
  Megaphone,
  MessageSquare,
  Monitor,
  PenTool,
  PlaySquare,
  Users,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SocialContentSection } from "../components/SocialContentSection";
import { CTASection } from "../components/CTASection";
import { FAQ } from "../components/FAQ";
import { TiltCard } from "../components/ui/TiltCard";
import { getAllServices, capabilitiesComparison } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services & Capabilities — Fusion Folio",
  description:
    "Explore our full-spectrum creative and digital services: Brand & Graphic Design, Web Development, UI/UX, Social Media, Motion Reels, and Meta Ads.",
};

const iconMap = {
  PenTool,
  Monitor,
  Layout,
  MessageSquare,
  PlaySquare,
  Clapperboard,
} as const;

interface EngagementModelCard {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  icon: "globe" | "megaphone" | "users";
}

const engagementModels: EngagementModelCard[] = [
  {
    id: "sprint",
    badge: "01 / Fixed Scope",
    title: "Focused Sprint",
    description:
      "Ideal for a single high-impact deliverable—like a brand refresh, landing page, or UI/UX prototype.",
    features: [
      "Defined milestone schedule",
      "Dedicated senior lead",
      "14-day post-launch support",
    ],
    cta: "Scope a Sprint",
    highlighted: false,
    icon: "globe",
  },
  {
    id: "growth",
    badge: "02 / Most Popular",
    title: "Growth Retainer",
    description:
      "For scaling brands that need continuous design, web iteration, reels, and paid campaign creative.",
    features: [
      "Dedicated multi-disciplinary squad",
      "Bi-weekly strategy & creative drops",
      "Expedited turnaround & Slack access",
    ],
    cta: "Start Growth Retainer",
    highlighted: true,
    icon: "megaphone",
  },
  {
    id: "partner",
    badge: "03 / Embedded Studio",
    title: "Full Studio Partnership",
    description:
      "Your complete external creative & engineering department with priority queue and custom SLA.",
    features: [
      "Full agency team across all 6 disciplines",
      "Real-time direct collaboration",
      "Continuous roadmap & experimentation",
    ],
    cta: "Explore Partnership",
    highlighted: false,
    icon: "users",
  },
];

export default function ServicesPage() {
  const fullServices = getAllServices();

  return (
    <div className="flex min-h-screen flex-1 flex-col bg-white text-[#0A1128]">
      <Navbar />

      <main className="flex flex-1 flex-col">
        {/* SECTION 1: Dark Liquid Wave Hero (Derived from HeroSection + WhatWeDoSection) */}
        <section
          id="services-hero"
          aria-label="Services & Capabilities Hero"
          className="relative w-full overflow-hidden bg-[#07112C] pt-32 sm:pt-36 lg:pt-44 pb-20 sm:pb-24 lg:pb-28 text-white isolate scroll-mt-28"
        >
          {/* Background Liquid Wave Texture */}
          <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
            <Image
              src="/services-bg.png"
              alt="Services liquid blue wave background"
              fill
              priority
              sizes="100vw"
              quality={100}
              className="object-cover object-center w-full h-full select-none pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#040C20]/65 via-[#07112C]/35 to-[#07112C]/90 pointer-events-none" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              {/* Eyebrow Pill with Glowing Orange Dot */}
              <div className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.07] border border-white/15 px-4 py-1.5 backdrop-blur-md mb-6">
                <span className="inline-block h-2 w-2 rounded-full bg-[#FF5500] shadow-[0_0_8px_#FF5500]" />
                <span className="font-manrope text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
                  WHAT WE DO · FULL-SPECTRUM STUDIO
                </span>
              </div>

              {/* Headline — Manrope + Newsreader Italic Fusion */}
              <h1 className="font-manrope font-normal text-4xl sm:text-6xl lg:text-[68px] lg:leading-[1.08] tracking-tight lg:tracking-[-2.5px] text-white">
                <span className="block">Everything Your Brand Needs.</span>
                <span className="block text-[#98A9CB]">
                  All Under One{" "}
                  <span className="font-serif italic font-normal text-[#FF5500] tracking-normal">
                    Creative Roof.
                  </span>
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-6 font-manrope text-base sm:text-lg lg:text-xl text-blue-100/85 max-w-2xl leading-relaxed">
                No hiring friction. No juggling disconnected freelancers. One senior team connecting brand identity, web engineering, product UI/UX, and scroll-stopping motion.
              </p>

              {/* Dual Action Buttons */}
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#FF5500] hover:bg-[#E03E00] text-white border border-[#FF5500] hover:border-[#FF6A1A] px-8 py-4 font-semibold text-sm sm:text-base shadow-[0_4px_20px_rgba(255,85,0,0.35)] hover:shadow-[0_8px_32px_rgba(255,85,0,0.6)] transition-all duration-300 ease-out cursor-pointer"
                >
                  <span>Request a Custom Scope</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                </Link>

                <Link
                  href="#disciplines"
                  className="rounded-full bg-white/10 hover:bg-white text-white hover:text-[#07112C] border border-white/25 hover:border-white px-7 py-4 font-medium text-sm sm:text-base backdrop-blur-md shadow-sm hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition-all duration-300 ease-out cursor-pointer"
                >
                  Browse All 6 Disciplines
                </Link>
              </div>
            </div>

            {/* Quick-Jump Discipline Pill Bar */}
            <div className="mt-14 sm:mt-16 pt-8 border-t border-white/10">
              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                {fullServices.map((service) => {
                  const Icon = iconMap[service.iconName] || Layers;
                  return (
                    <Link
                      key={service.id}
                      href={`#${service.id}`}
                      className="group inline-flex items-center gap-2.5 rounded-full bg-white/[0.06] hover:bg-white text-white/85 hover:text-[#07112C] border border-white/15 hover:border-white px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium backdrop-blur-md transition-all duration-300"
                    >
                      <span className="font-mono text-[11px] font-bold text-[#FF5500] group-hover:text-[#FF5500]">
                        {service.number}
                      </span>
                      <Icon className="w-3.5 h-3.5 text-blue-200 group-hover:text-[#1642D0] transition-colors" />
                      <span>{service.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: 6 Core Services Deep-Dive on Light #FAFAFC Canvas (Derived from AboutSection + SelectedWorkSection) */}
        <section
          id="disciplines"
          aria-label="Core Studio Disciplines"
          className="relative w-full overflow-hidden bg-[#FAFAFC] py-20 sm:py-28 lg:py-32 text-[#0A1128] scroll-mt-28"
        >
          {/* Subtle organic blue contour curves & dot grids from AboutSection */}
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
                  key={`tr-dot-${i}`}
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
                    01 — 06 · CORE DISCIPLINES
                  </span>
                </div>
                <h2 className="font-display text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight leading-[1.12]">
                  <span className="text-[#1642D0] block">Six connected disciplines.</span>
                  <span className="text-[#0A1128] block">One cohesive brand direction.</span>
                </h2>
              </div>
              <p className="font-manrope text-slate-600 text-sm sm:text-base max-w-md md:pb-1 leading-relaxed">
                Start with a single discipline or combine capabilities into a unified roadmap. Every deliverable is built by senior specialists.
              </p>
            </div>

            {/* Alternating 6-Discipline Rows */}
            <div className="mt-16 sm:mt-24 flex flex-col gap-20 sm:gap-28">
              {fullServices.map((service, index) => {
                const Icon = iconMap[service.iconName] || Layers;
                const isEven = index % 2 === 1;

                return (
                  <div
                    key={service.id}
                    id={service.id}
                    className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
                  >
                    {/* Visual Media Showcase */}
                    <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <TiltCard maxTilt={4}>
                        <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[28px] border border-slate-200/90 bg-[#07112C] shadow-[0_24px_60px_rgba(10,17,40,0.14)] group">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#040C20]/90 via-[#040C20]/20 to-transparent pointer-events-none" />

                          {/* Top Floating Badge */}
                          <div className="absolute top-5 left-5 z-10 flex items-center gap-2 rounded-full bg-[#07112C]/80 backdrop-blur-md border border-white/20 px-4 py-1.5 text-xs font-semibold text-white shadow-sm">
                            <span className={`w-2 h-2 rounded-full ${service.badgeColor}`} />
                            <span>DISCIPLINE {service.number}</span>
                          </div>

                          {/* Bottom Floating Turnaround & Case Study Link */}
                          <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between rounded-2xl bg-[#07112C]/75 backdrop-blur-md border border-white/15 px-4 py-3">
                            <span className="text-xs text-white/90 font-mono">
                              Turnaround: <strong className="text-white">{service.turnaround}</strong>
                            </span>
                            <Link
                              href="/work"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF5500] hover:text-white transition-colors"
                            >
                              <span>See Related Work</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </TiltCard>
                    </div>

                    {/* Content Column */}
                    <div className={`lg:col-span-6 flex flex-col ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1642D0]/10 border border-[#1642D0]/20 text-[#1642D0]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF5500]">
                          {service.number} / Capabilities
                        </span>
                      </div>

                      <h3 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#0A1128] leading-[1.12] mb-3">
                        {service.title}
                      </h3>

                      <p className="text-base sm:text-lg font-semibold text-[#1642D0] mb-4">
                        {service.tagline}
                      </p>

                      <p className="font-manrope text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Deliverables Checklist Card */}
                      <div className="mb-6 rounded-2xl bg-white border border-[#E4EBF7] shadow-[0_10px_32px_rgba(0,35,110,0.05)] p-5 sm:p-6">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5 block">
                          Included Deliverables
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.deliverables.map((deliv) => (
                            <div
                              key={deliv}
                              className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-[#0A1128]"
                            >
                              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#FF5500]/10 text-[#FF5500]">
                                <Check className="w-3 h-3 stroke-[2.5]" />
                              </span>
                              <span>{deliv}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tools & Direct Discipline CTA */}
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">
                            Stack:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {service.tools.map((tool) => (
                              <span
                                key={tool}
                                className="rounded-lg bg-slate-100 border border-slate-200/80 px-2.5 py-1 text-[11px] font-mono font-medium text-slate-700"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>

                        <Link
                          href="/contact"
                          className="group inline-flex items-center gap-2 rounded-full bg-[#0A1128] hover:bg-[#FF5500] text-white px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm"
                        >
                          <span>Start with {service.title}</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 3: Dark Liquid Wave Social & Content Spotlight (Reused Home Section with /real_bg.png) */}
        <SocialContentSection />

        {/* SECTION 4: Engagement Models & Capabilities Comparison on Soft Ice Blue #F0F5FF (Derived from WorkWithUsSection) */}
        <section
          id="comparison"
          aria-label="Engagement Models and Capabilities Matrix"
          className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#F0F5FF] text-[#0B1220] scroll-mt-28"
        >
          <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-16 flex flex-col items-center">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#FF5500] uppercase mb-4">
                ENGAGEMENT MODELS & MATRIX
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0B1220] tracking-tight leading-[1.12] mb-4">
                Transparent collaboration.
                <br />
                Tailored to your momentum.
              </h2>
              <p className="text-[#475467] text-base sm:text-lg leading-relaxed font-normal">
                Whether you need a focused project sprint or an embedded creative team, choose the structure that matches your stage.
              </p>
            </div>

            {/* 3 Engagement Tier Cards (WorkWithUsSection Derivative) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8 items-stretch mb-16 sm:mb-20">
              {engagementModels.map((tier) => {
                const isHighlighted = tier.highlighted;
                return (
                  <div
                    key={tier.id}
                    className={`relative flex flex-col justify-between rounded-[28px] sm:rounded-[32px] p-8 sm:p-9 transition-all duration-300 ${
                      isHighlighted
                        ? "bg-[#0055FF] text-white shadow-[0_20px_48px_rgba(0,85,255,0.32)] hover:-translate-y-1.5"
                        : "bg-white text-[#0B1220] border border-[#E4EBF7] shadow-[0_10px_32px_rgba(0,35,110,0.06)] hover:-translate-y-1.5"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-6">
                        {tier.icon === "globe" && (
                          <Globe className="w-11 h-11 text-[#FF5500] stroke-[1.8]" />
                        )}
                        {tier.icon === "megaphone" && (
                          <Megaphone className="w-11 h-11 text-white stroke-[1.8]" />
                        )}
                        {tier.icon === "users" && (
                          <Users className="w-11 h-11 text-[#FF5500] stroke-[1.8]" />
                        )}
                        <span
                          className={`rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider ${
                            isHighlighted
                              ? "bg-white/15 text-white border border-white/25"
                              : "bg-[#F0F5FF] text-[#1642D0] border border-[#1642D0]/15"
                          }`}
                        >
                          {tier.badge}
                        </span>
                      </div>

                      <h3
                        className={`font-display text-2xl sm:text-[26px] font-bold tracking-tight mb-3 ${
                          isHighlighted ? "text-white" : "text-[#0B1220]"
                        }`}
                      >
                        {tier.title}
                      </h3>

                      <p
                        className={`text-sm sm:text-[15px] leading-relaxed mb-7 ${
                          isHighlighted ? "text-white/85" : "text-[#475467]"
                        }`}
                      >
                        {tier.description}
                      </p>

                      <div
                        className={`h-px w-full mb-7 ${
                          isHighlighted ? "bg-white/20" : "bg-[#E4EBF7]"
                        }`}
                      />

                      <ul className="space-y-3.5 mb-9">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3">
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
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/contact"
                      className={`group inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-full text-sm sm:text-[15px] font-semibold transition-all duration-200 ${
                        isHighlighted
                          ? "bg-[#FF5500] text-white hover:bg-[#E04800] shadow-[0_10px_24px_rgba(255,85,0,0.35)]"
                          : "bg-white text-[#FF5500] border border-[#FF5500] hover:bg-[#FF5500] hover:text-white"
                      }`}
                    >
                      <span>{tier.cta}</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Elevated White Capabilities Comparison Matrix */}
            <div className="overflow-x-auto rounded-[28px] sm:rounded-[32px] border border-[#E4EBF7] bg-white shadow-[0_14px_40px_rgba(0,35,110,0.06)]">
              <table className="w-full text-left border-collapse min-w-[680px]">
                <thead>
                  <tr className="border-b border-[#E4EBF7] bg-[#F8FAFF]">
                    <th className="p-5 sm:p-7 text-xs sm:text-sm font-bold text-[#0B1220] uppercase tracking-wider">
                      Capability Feature
                    </th>
                    <th className="p-5 sm:p-7 text-xs sm:text-sm font-bold text-[#475467] uppercase tracking-wider">
                      Focused Sprint
                    </th>
                    <th className="p-5 sm:p-7 text-xs sm:text-sm font-bold text-[#0055FF] uppercase tracking-wider">
                      Growth Retainer
                    </th>
                    <th className="p-5 sm:p-7 text-xs sm:text-sm font-bold text-[#0B1220] uppercase tracking-wider">
                      Full Studio Partnership
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E4EBF7] text-sm sm:text-[15px]">
                  {capabilitiesComparison.map((row) => (
                    <tr
                      key={row.feature}
                      className="hover:bg-[#F0F5FF]/50 transition-colors"
                    >
                      <td className="p-5 sm:p-7 font-semibold text-[#0B1220]">
                        {row.feature}
                      </td>
                      <td className="p-5 sm:p-7 text-[#475467]">{row.starter}</td>
                      <td className="p-5 sm:p-7 text-[#0055FF] font-bold">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0055FF]/10 px-3 py-1 text-xs sm:text-sm font-bold text-[#0055FF]">
                          {row.growth}
                        </span>
                      </td>
                      <td className="p-5 sm:p-7 text-[#0B1220] font-semibold">
                        {row.partner}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 5: FAQ (White bg-white) */}
        <FAQ />

        {/* SECTION 6: Global CTA Section (Dark Wave /cta_bg.png) */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

