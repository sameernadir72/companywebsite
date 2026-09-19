import type { Metadata } from "next";
import { Sparkles, TrendingUp, Zap, Clock } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CTASection } from "../components/CTASection";
import { getAllCaseStudies } from "@/lib/case-studies";
import { WorkShowcase } from "./WorkShowcase";

export const metadata: Metadata = {
  title: "Selected Work & Case Studies — Fusion Folio",
  description:
    "Explore our portfolio of shipped client case studies across web engineering, brand identity systems, viral motion reels, and performance Meta campaigns.",
};

const workStats = [
  { value: "9", label: "Shipped Studies", sub: "Production deployments" },
  { value: "+184%", label: "Peak Conversion Lift", sub: "Mobile checkout optimization" },
  { value: "0.8s", label: "Average Page Load", sub: "Global sub-second LCP" },
  { value: "14.8M", label: "Organic Reel Views", sub: "Viral short-form campaigns" },
];

export default function WorkPage() {
  const allStudies = getAllCaseStudies();

  return (
    <div className="flex min-h-screen flex-1 flex-col bg-[#040C20] text-white">
      <Navbar />

      <main className="flex flex-1 flex-col pt-24 sm:pt-28 lg:pt-32">
        {/* Work Hero Section */}
        <section className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12 pt-8 pb-14 text-center">
          <div className="mx-auto flex max-w-4xl flex-col items-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#FF5500] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Work &amp; Case Studies</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight leading-[1.05] text-white">
              Crafted for impact.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#FF7A40] to-[#FF9E70]">
                Engineered for conversion.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 font-manrope text-base sm:text-xl text-blue-100/80 max-w-2xl leading-relaxed">
              Every project below shipped to production — from headless Next.js web flagships to viral short-form motion systems. Filter by discipline to explore the receipts.
            </p>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="relative w-full bg-[#07112C] border-y border-white/10 py-10 sm:py-12 mb-14">
          <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {workStats.map((stat, i) => (
                <div key={i} className={`flex flex-col ${i > 0 ? "pt-6 sm:pt-0 sm:pl-8" : ""}`}>
                  <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FF5500] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white mt-1.5">{stat.label}</span>
                  <span className="text-xs text-white/50 mt-0.5">{stat.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Filterable Showcase */}
        <div className="pb-24">
          <WorkShowcase initialCaseStudies={allStudies} />
        </div>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
