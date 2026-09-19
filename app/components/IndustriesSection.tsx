"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface IndustryCard {
  id: string;
  title: string;
  image: string;
}

const industryCards: IndustryCard[] = [
  {
    id: "lifestyle",
    title: "Lifestyle & E-Commerce",
    image: "/Figure.png",
  },
  {
    id: "technology",
    title: "Technology & Services",
    image: "/Figure-1.png",
  },
  {
    id: "creators",
    title: "Creators & Wellness",
    image: "/Figure-2.png",
  },
  {
    id: "culture",
    title: "Culture & Entertainment",
    image: "/Figure-3.png",
  },
];

interface IndustryPill {
  id: string;
  label: string;
  cardIndex: number | number[];
}

const industryPills: IndustryPill[] = [
  { id: "fashion-lifestyle", label: "Fashion & Lifestyle", cardIndex: 0 },
  { id: "tech-startups", label: "Technology & Startups", cardIndex: 1 },
  { id: "food-beverage", label: "Food & Beverage", cardIndex: 0 },
  { id: "health-wellness", label: "Health & Wellness", cardIndex: 2 },
  { id: "real-estate", label: "Real Estate", cardIndex: 1 },
  { id: "professional-services", label: "Professional Services", cardIndex: 1 },
  { id: "e-commerce", label: "E-Commerce", cardIndex: 0 },
  { id: "creators-brands", label: "Creators & Personal Brands", cardIndex: [2, 3] },
];

export function IndustriesSection() {
  const [selectedPill, setSelectedPill] = useState<string>("fashion-lifestyle");
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (headerRef.current) {
          gsap.fromTo(
            headerRef.current,
            { opacity: 0, y: 32 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 78%",
                once: true,
              },
            }
          );
        }

        if (cardsRef.current) {
          gsap.fromTo(
            cardsRef.current.children,
            { opacity: 0, y: 36, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: cardsRef.current,
                start: "top 82%",
                once: true,
              },
            }
          );
        }

        if (chipsRef.current) {
          gsap.fromTo(
            chipsRef.current,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: chipsRef.current,
                start: "top 92%",
                once: true,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const activePillData = industryPills.find((p) => p.id === selectedPill);
  const activeIndices = activePillData
    ? Array.isArray(activePillData.cardIndex)
      ? activePillData.cardIndex
      : [activePillData.cardIndex]
    : [];

  return (
    <section
      id="industries"
      ref={sectionRef}
      aria-label="Industries — Different Industries. Same Curiosity."
      className="relative w-full overflow-hidden py-20 sm:py-24 lg:py-32 isolate select-none"
    >
      {/* 3D Office Studio Background with Left Sculpture & Right City Skyline */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/industry_bg.png"
          alt="Studio architecture background"
          fill
          priority={false}
          quality={92}
          className="object-cover object-center pointer-events-none"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-12 flex flex-col items-center">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
            <span className="font-manrope text-xs sm:text-[13px] font-semibold tracking-[0.2em] text-[#FF5500] uppercase">
              BUILT AROUND YOUR WORLD
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0A1128] tracking-tight leading-[1.08]">
            Different Industries.
            <br />
            Same <span className="text-[#FF5500]">Curiosity.</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 font-manrope text-base sm:text-lg text-slate-600 font-normal">
            We learn your world before we design for it.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div
          ref={cardsRef}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-6"
        >
          {industryCards.map((card, idx) => {
            const isTargeted = activeIndices.includes(idx);

            return (
              <div
                key={card.id}
                className={`group relative rounded-[24px] sm:rounded-[28px] overflow-hidden transition-all duration-500 cursor-pointer shadow-[0_16px_36px_rgba(10,17,40,0.12)] hover:-translate-y-2 hover:shadow-[0_24px_52px_rgba(10,17,40,0.22)] ${
                  isTargeted
                    ? "ring-2 ring-[#FF5500] shadow-[0_20px_45px_rgba(255,85,0,0.2)] scale-[1.01]"
                    : "opacity-95 hover:opacity-100"
                }`}
              >
                {/* 361x302 Card Image with embedded text */}
                <div className="relative aspect-[361/302] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle hover gleam */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Industry Pills */}
        <div
          ref={chipsRef}
          className="mt-10 sm:mt-12 lg:mt-14 flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 max-w-5xl"
        >
          {industryPills.map((pill) => {
            const isSelected = selectedPill === pill.id;

            return (
              <button
                key={pill.id}
                type="button"
                onClick={() => setSelectedPill(pill.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-[13px] font-manrope transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-white/85 backdrop-blur-md border border-slate-300/80 text-[#0A1128] font-semibold shadow-[0_4px_16px_rgba(0,0,0,0.08)] scale-105"
                    : "text-slate-600 hover:text-[#0A1128] hover:bg-white/50 border border-transparent font-medium"
                }`}
              >
                {pill.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
