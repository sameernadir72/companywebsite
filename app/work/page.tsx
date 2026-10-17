import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { MeetFusionFolioSection } from "../components/MeetFusionFolioSection";
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
        {/* SECTION 1: Hero Section (Figma Integration with /work/hero-wave-bg.png) */}
        <WorkHero />

        {/* SECTION 2: Flagship Case Studies Deep-Dive Grid on Soft Ice Blue #F0F5FF (Derived from SelectedWorkSection + WorkWithUsSection) */}
        <section
          id="case-studies"
          aria-label="Flagship Case Studies"
          className="relative w-full bg-[#F0F5FF] py-20 sm:py-24 lg:py-28 text-[#0A1128] scroll-mt-28"
        >
          <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 sm:pb-16">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#FF5500]" />
                  <span className="font-manrope text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#FF5500] uppercase">
                    FLAGSHIP CASE STUDIES
                  </span>
                </div>
                <h2 className="font-display text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight leading-[1.12]">
                  <span className="text-[#1642D0] block">Ideas made real.</span>
                  <span className="text-[#0A1128] block">Measurable commercial impact.</span>
                </h2>
              </div>
              <p className="font-manrope text-[#475467] text-sm sm:text-base max-w-md md:pb-1 leading-relaxed">
                Explore our end-to-end case studies featuring full architectural breakdowns, challenge/solution narratives, and verified client outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {allStudies.map((study) => {
                const topMetric = study.metrics[0];
                return (
                  <Link
                    key={study.slug}
                    href={`/work/${study.slug}`}
                    className="group flex flex-col justify-between overflow-hidden rounded-[28px] bg-white border border-[#E4EBF7] shadow-[0_10px_32px_rgba(0,35,110,0.06)] hover:shadow-[0_22px_50px_rgba(0,35,110,0.14)] transition-all duration-300 hover:-translate-y-1.5"
                  >
                    <div>
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#07112C]">
                        <Image
                          src={study.heroImage}
                          alt={`${study.client} — ${study.tagline}`}
                          fill
                          quality={100}
                          unoptimized
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#040C20]/85 via-transparent to-transparent pointer-events-none" />

                        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                          <span className="rounded-full bg-[#07112C]/80 backdrop-blur-md border border-white/20 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-white">
                            {study.category}
                          </span>
                        </div>

                        {topMetric && (
                          <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between rounded-xl bg-[#07112C]/80 backdrop-blur-md border border-white/15 px-3.5 py-2 text-white">
                            <span className="text-xs text-white/80 font-medium">
                              {topMetric.label}
                            </span>
                            <span className="font-mono text-sm font-extrabold text-[#FF5500]">
                              {topMetric.value}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="p-6 sm:p-7">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1642D0]">
                            {study.client} · {study.year}
                          </span>
                          <span className="text-xs text-slate-400 font-mono">
                            {study.duration}
                          </span>
                        </div>

                        <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0A1128] group-hover:text-[#1642D0] transition-colors leading-snug mb-2.5">
                          {study.tagline}
                        </h3>

                        <p className="font-manrope text-xs sm:text-sm text-[#475467] line-clamp-2 leading-relaxed">
                          {study.overview}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#0A1128] group-hover:text-[#FF5500] transition-colors">
                      <span>Read Full Case Study</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 3: Interactive Filterable 20-Item Visual Archive Grid */}
        <section
          id="gallery"
          aria-label="Design Archive Gallery"
          className="bg-white py-20 sm:py-28 scroll-mt-28"
        >
          <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12 mb-10 text-center">
            <span className="font-manrope text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#FF5500] uppercase block mb-2.5">
              CREATIVE ARCHIVE
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#0A1128]">
              Explore by craft discipline.
            </h2>
          </div>
          <WorkShowcase initialCaseStudies={allStudies} />
        </section>

        {/* SECTION 4: Key Metrics Stats Strip */}
        <section
          id="metrics"
          aria-label="Studio Track Record"
          className="relative w-full bg-[#FAFAFC] border-y border-slate-200/90 py-14 sm:py-18 scroll-mt-28"
        >
          <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
              {workStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center sm:items-start ${
                    i > 0 ? "pt-6 sm:pt-0 sm:pl-8" : ""
                  }`}
                >
                  <span className="font-manrope text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#005DFF] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="font-manrope text-sm sm:text-base font-bold text-[#0A1128] mt-1.5">
                    {stat.label}
                  </span>
                  <span className="font-manrope text-xs text-slate-500 mt-0.5">
                    {stat.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: Dark Liquid Wave Break (Reused Home MeetFusionFolioSection with /bg_meet.jpeg) */}
        <MeetFusionFolioSection />

        {/* SECTION 6: Value Proposition / Bento Grid ("Your on-demand creative team") */}
        <OnDemandCreativeSection />

        {/* SECTION 7: FAQ Accordion ("A few things you might be wondering") */}
        <WorkFAQ />

        {/* SECTION 8: Global CTA Section (Dark Wave /cta_bg.png) */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

