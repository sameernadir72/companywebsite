"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles, TrendingUp, CheckCircle2 } from "lucide-react";
import { CaseStudy } from "@/lib/case-studies";
import { TiltCard } from "../components/ui/TiltCard";
import { MagneticButton } from "../components/ui/MagneticButton";

const categories = [
  "All Work",
  "Websites",
  "UI/UX",
  "Motion & Reels",
  "Meta Ads",
  "SaaS",
  "AI",
  "Web3",
  "Design",
];

export function WorkShowcase({ initialCaseStudies }: { initialCaseStudies: CaseStudy[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("All Work");

  const filteredStudies =
    activeCategory === "All Work"
      ? initialCaseStudies
      : initialCaseStudies.filter(
          (s) => s.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <div className="flex flex-col gap-12 sm:gap-16">
      {/* Category Filter Navigation Bar */}
      <div className="mx-auto flex w-full max-w-[1360px] flex-wrap items-center justify-center gap-2.5 px-6">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5500] ${
                isActive
                  ? "bg-[#FF5500] text-white shadow-lg shadow-orange-500/30 scale-105"
                  : "bg-white/[0.04] border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Case Studies Grid */}
      <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch">
          {filteredStudies.map((study, idx) => {
            // Asymmetric layout rhythm when viewing all work
            const isAll = activeCategory === "All Work";
            let colSpan = "lg:col-span-6";

            if (isAll) {
              if (idx === 0) colSpan = "lg:col-span-7";
              else if (idx === 1) colSpan = "lg:col-span-5";
              else if (idx === 2) colSpan = "lg:col-span-5";
              else if (idx === 3) colSpan = "lg:col-span-7";
              else if (idx === 4) colSpan = "lg:col-span-4";
              else if (idx === 5) colSpan = "lg:col-span-4";
              else if (idx === 6) colSpan = "lg:col-span-4";
              else colSpan = "lg:col-span-6";
            }

            const primaryMetric = study.metrics[0];

            return (
              <div key={study.slug} className={`${colSpan} flex flex-col`}>
                <Link
                  href={`/work/${study.slug}`}
                  className="group flex flex-col h-full rounded-[28px] bg-white/[0.025] border border-white/10 hover:border-[#FF5500]/50 transition-all duration-500 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:shadow-[0_24px_60px_rgba(255,85,0,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5500]"
                >
                  {/* Media Banner with 3D Tilt */}
                  <TiltCard maxTilt={3} className="w-full">
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                      <Image
                        src={study.heroImage}
                        alt={`${study.client} Showcase`}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#040C20]/90 via-[#040C20]/20 to-transparent pointer-events-none" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-black/60 backdrop-blur-md border border-white/20 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                          {study.category}
                        </span>
                        <span className="rounded-full bg-white/10 backdrop-blur-md px-2.5 py-1 text-[11px] font-mono text-white/80">
                          {study.year}
                        </span>
                      </div>

                      {/* Top Right Outcome Metric Callout */}
                      {primaryMetric && (
                        <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 rounded-full bg-[#FF5500] text-white px-3.5 py-1 text-xs font-bold shadow-md shadow-orange-600/30">
                          <TrendingUp className="w-3.5 h-3.5" />
                          <span>{primaryMetric.value} {primaryMetric.label}</span>
                        </div>
                      )}

                      {/* Hover Overlay Hint */}
                      <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 rounded-full bg-white/95 text-[#0B1220] px-4 py-2 text-xs font-bold opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        <span>Read Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </TiltCard>

                  {/* Body Details */}
                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                    <div>
                      <div className="flex items-baseline gap-2 mb-2">
                        <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#FF5500] transition-colors">
                          {study.client}
                        </h3>
                        <span className="text-white/40 text-sm">/</span>
                        <span className="text-blue-100/70 font-medium text-sm sm:text-base">
                          {study.tagline}
                        </span>
                      </div>

                      <p className="font-manrope text-sm sm:text-[15px] text-white/70 line-clamp-2 leading-relaxed mb-6">
                        {study.overview}
                      </p>
                    </div>

                    <div>
                      {/* Deliverables Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                        {study.deliverables.slice(0, 3).map((deliv, i) => (
                          <span
                            key={i}
                            className="rounded-md bg-white/[0.05] border border-white/5 px-2.5 py-1 text-[11px] font-mono text-white/75"
                          >
                            {deliv}
                          </span>
                        ))}
                        {study.deliverables.length > 3 && (
                          <span className="rounded-md bg-white/[0.02] px-2 py-1 text-[11px] font-mono text-white/40">
                            +{study.deliverables.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {filteredStudies.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-lg text-white/60">No case studies found in this discipline category.</p>
            <button
              type="button"
              onClick={() => setActiveCategory("All Work")}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#FF5500] text-white text-sm font-semibold cursor-pointer"
            >
              Reset to All Work
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
