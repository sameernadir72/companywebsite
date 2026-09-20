import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clapperboard,
  Layers,
  Layout,
  MessageSquare,
  Monitor,
  PenTool,
  PlaySquare,
  Sparkles,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CTASection } from "../components/CTASection";
import { FAQ } from "../components/FAQ";
import { MagneticButton } from "../components/ui/MagneticButton";
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

export default function ServicesPage() {
  const fullServices = getAllServices();

  return (
    <div className="flex min-h-screen flex-1 flex-col bg-[#040C20] text-white">
      <Navbar />

      <main className="flex flex-1 flex-col pt-24 sm:pt-28 lg:pt-32">
        {/* Header / Hero Section */}
        <section className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12 pt-8 pb-16 sm:pb-24 text-center">
          <div className="mx-auto flex max-w-4xl flex-col items-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#FF5500] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Spectrum Capabilities</span>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight leading-[1.05] text-white">
              Everything your brand needs.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#FF7A40] to-[#FF9E70]">
                All under one roof.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 font-manrope text-base sm:text-xl text-blue-100/80 max-w-2xl leading-relaxed">
              No hiring friction. No juggling disconnected freelancers. A single creative and digital partner to elevate your brand from concept to conversion.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#FF5500] hover:bg-[#E03E00] text-white border border-[#FF5500] hover:border-[#FF6A1A] px-8 py-4 font-semibold text-base shadow-[0_4px_20px_rgba(255,85,0,0.35)] hover:shadow-[0_8px_32px_rgba(255,85,0,0.6)] transition-all duration-300 ease-out cursor-pointer"
              >
                <span>Request a Custom Scope</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </Link>

              <Link
                href="#disciplines"
                className="rounded-full bg-white/10 hover:bg-white text-white hover:text-[#07112C] border border-white/20 hover:border-white px-7 py-4 font-medium text-base backdrop-blur-md shadow-sm hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition-all duration-300 ease-out cursor-pointer"
              >
                Browse All 6 Disciplines
              </Link>
            </div>
          </div>
        </section>

        {/* 6 Core Services Deep-Dive Section */}
        <section id="disciplines" className="relative w-full bg-[#07112C] py-20 sm:py-28 border-y border-white/10">
          <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
            <div className="flex flex-col gap-16 sm:gap-24">
              {fullServices.map((service, index) => {
                const Icon = iconMap[service.iconName] || Layers;
                const isEven = index % 2 === 1;

                return (
                  <div
                    key={service.id}
                    id={service.id}
                    className={`scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                      isEven ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Visual Media Showcase */}
                    <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <TiltCard maxTilt={4}>
                        <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[28px] border border-white/15 bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#040C20]/90 via-transparent to-transparent pointer-events-none" />

                          {/* Top Floating Badge */}
                          <div className="absolute top-5 left-5 z-10 flex items-center gap-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 px-4 py-1.5 text-xs font-semibold text-white">
                            <span className={`w-2 h-2 rounded-full ${service.badgeColor}`} />
                            <span>DISCIPLINE {service.number}</span>
                          </div>

                          <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between">
                            <span className="text-xs text-white/70 font-mono">
                              Turnaround: {service.turnaround}
                            </span>
                            <Link
                              href="/work"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#FF5500] transition-colors"
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
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF5500]">
                          {service.number} / Capabilities
                        </span>
                      </div>

                      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
                        {service.title}
                      </h2>

                      <p className="text-base sm:text-lg font-medium text-blue-200/90 mb-4">
                        {service.tagline}
                      </p>

                      <p className="font-manrope text-sm sm:text-base text-white/75 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Deliverables Checklist */}
                      <div className="mb-6 rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-6">
                        <span className="text-xs font-bold uppercase tracking-wider text-white/60 mb-3.5 block">
                          Included Deliverables
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.deliverables.map((deliv, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-white/90">
                              <Check className="w-3.5 h-3.5 text-[#FF5500] shrink-0 mt-0.5" />
                              <span>{deliv}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tools & CTA */}
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-white/50 font-mono">Tools:</span>
                          <div className="flex flex-wrap gap-1.5">
                            {service.tools.map((tool) => (
                              <span
                                key={tool}
                                className="rounded-md bg-white/10 px-2 py-0.5 text-[11px] font-mono text-white/80"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>

                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF5500] hover:text-[#FF7A40] transition-colors"
                        >
                          <span>Start with {service.title}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Deliverables & Engagement Comparison Table */}
        <section className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12 py-20 sm:py-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#FF5500] uppercase mb-3 block">
              Engagement Comparison
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Transparent collaboration.
              <br />
              Tailored to your momentum.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/70">
              Whether you need an immediate sprint or an ongoing creative partnership, our team operates as an extension of your own.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.02]">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="p-5 sm:p-6 text-sm font-bold text-white uppercase tracking-wider">
                    Capability Feature
                  </th>
                  <th className="p-5 sm:p-6 text-sm font-bold text-white uppercase tracking-wider">
                    Focused Sprint
                  </th>
                  <th className="p-5 sm:p-6 text-sm font-bold text-[#FF5500] uppercase tracking-wider">
                    Growth Retainer
                  </th>
                  <th className="p-5 sm:p-6 text-sm font-bold text-white uppercase tracking-wider">
                    Full Studio Partnership
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {capabilitiesComparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-5 sm:p-6 font-medium text-white">{row.feature}</td>
                    <td className="p-5 sm:p-6 text-white/70">{row.starter}</td>
                    <td className="p-5 sm:p-6 text-[#FF5500] font-semibold">{row.growth}</td>
                    <td className="p-5 sm:p-6 text-white/90 font-medium">{row.partner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <FAQ />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
