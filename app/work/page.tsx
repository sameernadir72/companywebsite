import type { Metadata } from "next";
import { Sparkles, TrendingUp, Zap, Clock } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CTASection } from "../components/CTASection";
import { getAllCaseStudies } from "@/lib/case-studies";
import { WorkShowcase } from "./WorkShowcase";

import { WorkHero } from "./WorkHero";
import { OnDemandCreativeSection } from "./OnDemandCreativeSection";
import { WorkFAQ } from "./WorkFAQ";

export const metadata: Metadata = {
  title: "Selected Work & Case Studies — Fusion Folio",
  description:
    "Explore our portfolio of shipped client case studies across web engineering, brand identity systems, viral motion reels, and performance Meta campaigns.",
};

const workStats = [
  { value: "10,000+", label: "Projects Completed", sub: "Delivered globally" },
  { value: "1,500+", label: "Happy Clients", sub: "Across 50+ countries" },
  { value: "4.9/5", label: "Client Satisfaction", sub: "Verified agency rating" },
  { value: "50+", label: "Countries Served", sub: "Global digital reach" },
];

export default function WorkPage() {
  const allStudies = getAllCaseStudies();

  return (
    <div className="flex min-h-screen flex-1 flex-col bg-white text-[#0A1128]">
      <Navbar />

      <main className="flex flex-1 flex-col">
        {/* Section 1: Hero Section (Figma Integration) */}
        <WorkHero />

        {/* Section 2: Interactive Filterable Portfolio Showcase Grid */}
        <section id="gallery" className="bg-white pt-6 pb-20 sm:pb-28">
          <WorkShowcase initialCaseStudies={allStudies} />
        </section>

        {/* Section 3: Key Metrics Stats Strip (Figma Light Styling) */}
        <section className="relative w-full bg-[#F8FAFC] border-y border-slate-200/90 py-12 sm:py-16">
          <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
              {workStats.map((stat, i) => (
                <div key={i} className={`flex flex-col items-center sm:items-start ${i > 0 ? "pt-6 sm:pt-0 sm:pl-8" : ""}`}>
                  <span className="font-manrope text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#005DFF] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="font-manrope text-sm sm:text-base font-bold text-[#0A1128] mt-1.5">{stat.label}</span>
                  <span className="font-manrope text-xs text-slate-500 mt-0.5">{stat.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Value Proposition / Bento Grid ("Your on-demand creative team") */}
        <OnDemandCreativeSection />

        {/* Section 5: FAQ Accordion ("A few things you might be wondering") */}
        <WorkFAQ />

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
