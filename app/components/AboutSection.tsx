"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type TabId = "Strategy" | "Design" | "Development" | "Content";

type CardData = {
  image: string;
  alt: string;
  label?: string;
  badge?: string;
};

type SlideConfig = {
  id: TabId;
  label: string;
  disciplineBadge: string;
  description: string;
  cards: [CardData, CardData, CardData];
};

const slidesConfig: Record<TabId, SlideConfig> = {
  Strategy: {
    id: "Strategy",
    label: "Strategy",
    disciplineBadge: "01 · STRATEGY",
    description:
      "We bring strategy, design, development and content together — helping your brand show up clearly, consistently and confidently.",
    cards: [
      {
        image: "/about-team-1.png",
        alt: "Fusion Folio Strategy Team",
        badge: "Strategy & Discovery",
      },
      {
        image: "/STRATEGY.png",
        alt: "Strategic Roadmap",
        label: "Strategic Roadmap",
      },
      {
        image: "/scale.png",
        alt: "Growth & Analytics",
        label: "Market Insights",
      },
    ],
  },
  Design: {
    id: "Design",
    label: "Design",
    disciplineBadge: "02 · DESIGN",
    description:
      "Crafting unified design systems, intuitive product interfaces, and iconic brand identities that drive conversion and delight.",
    cards: [
      {
        image: "/dESIGN.png",
        alt: "Fusion Folio UI/UX Design System",
        badge: "Design Systems & UI",
      },
      {
        image: "/about-team-1.png",
        alt: "Design Review Session",
        label: "Design Review",
      },
      {
        image: "/scale.png",
        alt: "Figma Component Architecture",
        label: "Design Tokens",
      },
    ],
  },
  Development: {
    id: "Development",
    label: "Development",
    disciplineBadge: "03 · DEVELOPMENT",
    description:
      "Clean, modern full-stack architectures engineered for sub-second performance, bulletproof security, and seamless scale.",
    cards: [
      {
        image: "/monitor.png",
        alt: "Full-Stack Development Command Center",
        badge: "Full-Stack Engineering",
      },
      {
        image: "/dESIGN.png",
        alt: "Production Web Build",
        label: "Production Build",
      },
      {
        image: "/about-team-1.png",
        alt: "Engineering Sprint Review",
        label: "Sprint Delivery",
      },
    ],
  },
  Content: {
    id: "Content",
    label: "Content",
    disciplineBadge: "04 · CONTENT",
    description:
      "High-converting video reels, motion graphics, and multi-channel creative campaigns designed to stop the scroll and build brand equity.",
    cards: [
      {
        image: "/PERFORMANCE.png",
        alt: "Creative Motion & Campaign Performance",
        badge: "Motion & Media Studio",
      },
      {
        image: "/scale.png",
        alt: "Motion Reels & Distribution",
        label: "Reels & Ads",
      },
      {
        image: "/about-team-1.png",
        alt: "Creative Storytelling Session",
        label: "Campaign Assets",
      },
    ],
  },
};

const tabOrder: TabId[] = ["Strategy", "Design", "Development", "Content"];

const cardVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<TabId>("Strategy");
  const [direction, setDirection] = useState<number>(1);

  const handleTabChange = (tab: TabId) => {
    if (tab === activeTab) return;
    const oldIndex = tabOrder.indexOf(activeTab);
    const newIndex = tabOrder.indexOf(tab);
    setDirection(newIndex > oldIndex ? 1 : -1);
    setActiveTab(tab);
  };

  const currentSlide = slidesConfig[activeTab];
  const [card0, card1, card2] = currentSlide.cards;

  return (
    <section
      id="about"
      aria-label="About Us — Big ideas deserve a connected team"
      className="relative overflow-hidden bg-[#FAFAFC] py-20 sm:py-28 lg:py-32 text-[#0A1128]"
    >
      {/* Subtle organic blue contour curves in background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-60"
      >
        <svg
          className="absolute -top-24 left-1/4 h-[800px] w-[1100px] -translate-x-1/2 text-blue-100/40"
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

        {/* Decorative dot grids */}
        <div className="absolute right-8 top-12 sm:right-16 sm:top-16 grid grid-cols-5 gap-2.5 opacity-30">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="h-1 w-1 rounded-full bg-slate-400" />
          ))}
        </div>
        <div className="absolute bottom-12 left-8 sm:bottom-16 sm:left-16 grid grid-cols-5 gap-2.5 opacity-30">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="h-1 w-1 rounded-full bg-slate-400" />
          ))}
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Header Row */}
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-12 pb-12 sm:pb-16">
          <div className="lg:col-span-7">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#FF5500] uppercase block mb-3">
              ABOUT US
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-[#0A1128] leading-[1.12]">
              Big ideas deserve
              <br />
              a connected team.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pb-1">
            <div className="relative min-h-[56px] overflow-hidden">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.p
                  key={activeTab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="font-manrope text-base sm:text-lg leading-relaxed text-slate-600 max-w-lg"
                >
                  {currentSlide.description}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* 3-Card Showcase (Zero unmount blink - Seamless Framer Motion Cross-Slide) */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-12 items-stretch">
          {/* Card 1 (Left - Wide Primary Showcase Card) */}
          <div className="group relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm border border-slate-200/60 md:col-span-6 lg:col-span-6 aspect-[16/10]">
            <AnimatePresence mode="popLayout" custom={direction} initial={false}>
              <motion.div
                key={`${activeTab}-card0`}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 h-full w-full"
              >
                <Image
                  src={card0.image}
                  alt={card0.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  priority
                />
                {/* Discipline Pill */}
                <div className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur-md px-3.5 py-1.5 shadow-sm border border-white/60 flex items-center gap-2 z-10">
                  <span className="h-2 w-2 rounded-full bg-[#FF5500] animate-pulse" />
                  <span className="text-xs font-semibold text-[#0A1128] uppercase tracking-wider">
                    {currentSlide.disciplineBadge}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Card 2 (Center - Detail Card) */}
          <div className="group relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm border border-slate-200/60 md:col-span-3 lg:col-span-3 aspect-[4/3] sm:aspect-[4/3] md:aspect-auto">
            <AnimatePresence mode="popLayout" custom={direction} initial={false}>
              <motion.div
                key={`${activeTab}-card1`}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ delay: 0.05 }}
                className="absolute inset-0 h-full w-full"
              >
                <Image
                  src={card1.image}
                  alt={card1.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                {/* Brand pill watermark */}
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/90 backdrop-blur-md px-3.5 py-2.5 shadow-sm border border-white/50 flex items-center gap-2 z-10 transition-transform duration-300 group-hover:-translate-y-1">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#FF5500] text-white text-[10px] font-bold shrink-0">
                    FF
                  </span>
                  <span className="text-xs font-semibold text-[#0A1128] truncate">
                    {card1.label ?? "View Project"}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Card 3 (Right - Strategy Review Focus) */}
          <div className="group relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm border border-slate-200/60 md:col-span-3 lg:col-span-3 aspect-[4/3] sm:aspect-[4/3] md:aspect-auto">
            <AnimatePresence mode="popLayout" custom={direction} initial={false}>
              <motion.div
                key={`${activeTab}-card2`}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ delay: 0.1 }}
                className="absolute inset-0 h-full w-full"
              >
                <Image
                  src={card2.image}
                  alt={card2.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute top-4 right-4 rounded-full bg-black/50 backdrop-blur-md px-3 py-1 text-white text-[11px] font-medium border border-white/20 z-10 transition-transform duration-300 group-hover:-translate-y-0.5">
                  {card2.label ?? "Explore"}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Navigation & CTA Row */}
        <div className="mt-10 sm:mt-14 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border-t border-slate-200/70 pt-8">
          {/* Tab Navigation with Animated Underline */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm sm:text-base font-medium">
            {tabOrder.map((tab, idx) => {
              const isActive = activeTab === tab;
              return (
                <div key={tab} className="flex items-center gap-2 sm:gap-4">
                  <button
                    type="button"
                    onClick={() => handleTabChange(tab)}
                    className={`relative px-3 py-1.5 rounded-full text-sm sm:text-base font-medium transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? "text-[#0A1128] font-bold"
                        : "text-slate-500 hover:text-[#0A1128]"
                    }`}
                  >
                    <span className="relative z-10">{tab}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeTabUnderline"
                        className="absolute -bottom-1 left-2 right-2 h-0.5 bg-[#FF5500] rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                  {idx < tabOrder.length - 1 && (
                    <span className="text-slate-300 select-none text-xs">
                      ·
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action CTA Button */}
          <div>
            <Link
              href="/about"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#FF5500] hover:bg-[#FF4500] text-white px-7 py-3.5 sm:px-8 sm:py-3.5 font-medium text-sm sm:text-base shadow-[0_4px_18px_rgba(255,85,0,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Learn Our Story</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
