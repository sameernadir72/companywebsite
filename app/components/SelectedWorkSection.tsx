"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type FilterCategory = "All Work" | "Websites" | "UI/UX" | "Motion & Reels" | "Meta Ads";

interface ProjectItem {
  id: string;
  client: string;
  tagline: string;
  disciplines: string;
  image: string;
  categories: FilterCategory[];
  href?: string;
}

const filterTabs: FilterCategory[] = [
  "All Work",
  "Websites",
  "UI/UX",
  "Motion & Reels",
  "Meta Ads",
];

const projects: ProjectItem[] = [
  {
    id: "aura",
    client: "AURA",
    tagline: "A sharper digital presence",
    disciplines: "Web Development · UI/UX",
    image: "/ideal_1.png",
    categories: ["Websites", "UI/UX"],
    href: "/work/aura",
  },
  {
    id: "lume",
    client: "LUME",
    tagline: "An easier path to purchase",
    disciplines: "UI/UX · E-commerce",
    image: "/ideas_2.png",
    categories: ["UI/UX", "Websites"],
    href: "/work/lume",
  },
  {
    id: "frame",
    client: "FRAME",
    tagline: "Stories that move with you",
    disciplines: "Animation · Reels",
    image: "/ideas_3.png",
    categories: ["Motion & Reels"],
    href: "/work/frame",
  },
  {
    id: "offset",
    client: "OFFSET",
    tagline: "Creative designed for testing",
    disciplines: "Meta Ads · Campaign Creative",
    image: "/ideas_4.png",
    categories: ["Meta Ads"],
    href: "/work/offset",
  },
];

export function SelectedWorkSection() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All Work");
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeFilter === "All Work"
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter));

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1. Header entrance animation
        if (headerRef.current) {
          gsap.fromTo(
            headerRef.current.children,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: headerRef.current,
                start: "top 85%",
                once: true,
              },
            }
          );
        }

        // 2. Project cards entrance animation
        if (gridRef.current) {
          const cards = gridRef.current.querySelectorAll(".work-card-wrapper");
          gsap.fromTo(
            cards,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: gridRef.current,
                start: "top 82%",
                once: true,
              },
            }
          );
        }

        // 3. Bottom CTA button entrance
        if (ctaRef.current) {
          gsap.fromTo(
            ctaRef.current,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ctaRef.current,
                start: "top 95%",
                once: true,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      aria-label="Selected Work — Ideas made real. Work worth exploring."
      className="relative w-full bg-white text-[#0A1128] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col items-center text-center pb-12 sm:pb-14">
          {/* Eyebrow */}
          <span className="font-manrope text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#FF5500] uppercase block mb-3">
            SELECTED WORK
          </span>

          {/* Heading */}
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.12]">
            <span className="text-[#1642D0] block">Ideas made real.</span>
            <span className="text-[#0A1128] block">Work worth exploring.</span>
          </h2>

          {/* Subtitle */}
          <p className="font-manrope text-slate-500 text-sm sm:text-base max-w-lg mt-3.5 sm:mt-4">
            Concept projects shown for design direction.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveFilter(tab)}
                  className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer select-none ${
                    isActive
                      ? "text-white shadow-md shadow-blue-600/25"
                      : "bg-white border border-slate-200/90 text-slate-600 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 rounded-full bg-[#185BFF]"
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2x2 Projects Grid with smooth Framer Motion layout transitions */}
        <motion.div
          ref={gridRef}
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="work-card-wrapper"
              >
                <Link
                  href={project.href}
                  className="group flex flex-col cursor-pointer focus-visible:outline-none"
                >
                  {/* Card Image Frame */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px] sm:rounded-[24px] bg-slate-100 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-500 ease-out group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] group-hover:border-slate-300 group-hover:-translate-y-1.5">
                    <Image
                      src={project.image}
                      alt={`${project.client} — ${project.tagline}`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      priority={project.id === "aura" || project.id === "lume"}
                    />
                    {/* Subtle hover gradient sheen */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
                  </div>

                  {/* Card Details */}
                  <div className="mt-4 sm:mt-5 flex flex-col">
                    <div className="flex flex-wrap items-baseline gap-1.5 font-display text-base sm:text-lg">
                      <span className="font-bold text-[#0A1128] transition-colors duration-200 group-hover:text-[#185BFF]">
                        {project.client}
                      </span>
                      <span className="text-slate-400 font-normal">/</span>
                      <span className="text-slate-600 font-medium">
                        {project.tagline}
                      </span>
                    </div>

                    <p className="font-manrope text-xs sm:text-sm text-slate-500 mt-1">
                      {project.disciplines}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA Button */}
        <div ref={ctaRef} className="mt-14 sm:mt-16 flex justify-center">
          <Link
            href="/work"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#FF5500] hover:bg-[#FF4500] text-white px-8 py-3.5 sm:px-9 sm:py-4 font-medium text-sm sm:text-base shadow-[0_4px_20px_rgba(255,85,0,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>View All Work</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
