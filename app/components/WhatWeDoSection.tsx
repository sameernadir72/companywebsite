"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PenTool,
  Monitor,
  Layout,
  MessageSquare,
  PlaySquare,
  Clapperboard,
  ArrowUpRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServiceCardData {
  id: string;
  slug: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  theme: "white" | "blue" | "orange";
  icon: typeof PenTool;
}

const servicesList: ServiceCardData[] = [
  {
    id: "01",
    slug: "brand",
    badge: "01 / Identity",
    title: "Brand & Graphic Design",
    description: "A visual identity that feels unmistakably yours.",
    image: "/service-01.png",
    imageAlt: "Brand & Graphic Design preview",
    theme: "white",
    icon: PenTool,
  },
  {
    id: "02",
    slug: "web",
    badge: "02 / Digital",
    title: "Website Development",
    description: "A strong digital home, built around your business.",
    image: "/service-02.png",
    imageAlt: "Website Development preview",
    theme: "blue",
    icon: Monitor,
  },
  {
    id: "03",
    slug: "uiux",
    badge: "03 / Experience",
    title: "UI/UX Design",
    description: "Thoughtful experiences. Effortless interactions.",
    image: "/service-03.png",
    imageAlt: "UI/UX Design preview",
    theme: "white",
    icon: Layout,
  },
  {
    id: "04",
    slug: "social",
    badge: "04 / Social",
    title: "Social Media Design & Management",
    description: "A consistent presence with something to say.",
    image: "/service-04.png",
    imageAlt: "Social Media Design preview",
    theme: "white",
    icon: MessageSquare,
  },
  {
    id: "05",
    slug: "reels",
    badge: "05 / Content",
    title: "Reels, Viral Creative & UGC",
    description: "Short-form stories made for real attention.",
    image: "/service-05.png",
    imageAlt: "Reels and Viral UGC preview",
    theme: "orange",
    icon: PlaySquare,
  },
  {
    id: "06",
    slug: "motion",
    badge: "06 / Motion",
    title: "2D Animation & Motion Graphics",
    description: "Bring personality, clarity, and movement to your message.",
    image: "/service-06.png",
    imageAlt: "2D Animation and Motion Graphics preview",
    theme: "white",
    icon: Clapperboard,
  },
];

export function WhatWeDoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);
  const footerRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1. Header entrance animation
        if (headerRef.current) {
          gsap.fromTo(
            headerRef.current.children,
            { opacity: 0, y: 32 },
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

        // 2. Bento cards staggered reveal
        if (cardsGridRef.current) {
          const cards = cardsGridRef.current.querySelectorAll(".service-bento-card");
          gsap.fromTo(
            cards,
            { opacity: 0, y: 48, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.75,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: cardsGridRef.current,
                start: "top 82%",
                once: true,
              },
            }
          );
        }

        // 3. Footer bottom row entrance
        if (footerRowRef.current) {
          gsap.fromTo(
            footerRowRef.current,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: footerRowRef.current,
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
      id="services"
      ref={sectionRef}
      aria-label="What We Do — Everything Your Brand Needs. All In One Creative Studio."
      className="relative w-full overflow-hidden  py-22 text-white isolate"

    >
      {/* Background Liquid Wave Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <Image
          src="/services-bg.png"
          alt="What We Do liquid blue background"
          fill
          priority
          className="bg-cover bg-center bg-no-repeat"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12 flex flex-col justify-between min-h-[960px] lg:min-h-[1032px]">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between pb-10 sm:pb-12"
        >
          <div className="flex flex-col gap-3">
            {/* Tag / Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[#FF5500] shadow-[0_0_8px_#FF5500]" />
              <span className="font-manrope text-xs sm:text-sm font-semibold tracking-[0.2em] text-white/90 uppercase">
                WHAT WE DO
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-bold tracking-tight leading-[1.14]">
              <span className="text-white block">Everything Your Brand Needs.</span>
              <span className="text-[#98A9CB] block">All In One Creative Studio.</span>
            </h2>
          </div>

          {/* Right Subtitle */}
          <div className="md:pb-1 lg:max-w-xs xl:max-w-sm">
            <p className="font-manrope text-sm sm:text-base leading-relaxed text-[#CBD5E1]/90">
              From your first identity to your next big campaign, we connect the dots.
            </p>
          </div>
        </div>

        {/* 6-Card Bento Grid (2 rows x 3 columns) */}
        <div
          ref={cardsGridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch flex-1"
        >
          {servicesList.map((card) => {
            const Icon = card.icon;
            const isBlue = card.theme === "blue";
            const isOrange = card.theme === "orange";

            return (
              <Link
                key={card.id}
                href={`/services#${card.slug}`}
                className={`service-bento-card group relative flex flex-col rounded-[24px] overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 cursor-pointer focus-visible:outline-none ${isBlue
                  ? "bg-gradient-to-b from-[#1447D4] via-[#0E39B9] to-[#0A2680] text-white border border-blue-400/30 shadow-[0_16px_40px_rgba(20,71,212,0.35)] hover:shadow-[0_24px_50px_rgba(20,71,212,0.55)]"
                  : isOrange
                    ? "bg-gradient-to-r from-[#FF5100] via-[#FF5E0E] to-[#FF7730] text-white border border-orange-400/30 shadow-[0_16px_40px_rgba(255,81,0,0.35)] hover:shadow-[0_24px_50px_rgba(255,81,0,0.55)]"
                    : "bg-white text-[#0F172A] border border-white/60 shadow-[0_12px_32px_rgba(0,0,0,0.18)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.28)]"
                  }`}
              >
                {/* Top Image Banner */}
                <div className="relative h-[190px] sm:h-[200px] w-full overflow-hidden bg-slate-900/30 shrink-0">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 420px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top scale-[1.04] transition-transform duration-700 ease-out group-hover:scale-110"
                    priority={card.id === "01" || card.id === "02"}
                  />
                  {/* Subtle hover gradient sheen */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
                </div>

                {/* Bottom Content Area */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  {/* Top: Icon */}
                  <div className="mb-4">
                    <div
                      className={`inline-flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-110 ${isBlue || isOrange
                        ? "text-white"
                        : "text-[#2563EB]"
                        }`}
                    >
                      <Icon size={24} strokeWidth={1.9} />
                    </div>
                  </div>

                  {/* Middle & Bottom: Title & Description */}
                  <div className="flex flex-col gap-1.5">
                    <h3
                      className={`font-display text-xl sm:text-[22px] font-bold tracking-tight leading-snug transition-colors duration-200 ${isBlue || isOrange
                        ? "text-white"
                        : "text-[#0F172A] group-hover:text-[#2563EB]"
                        }`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`font-manrope text-sm leading-relaxed ${isBlue
                        ? "text-blue-100/90"
                        : isOrange
                          ? "text-white/95"
                          : "text-[#64748B]"
                        }`}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Bar Row */}
        <div
          ref={footerRowRef}
          className="mt-10 sm:mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-white/10 pt-6"
        >
          <p className="font-manrope text-sm sm:text-base text-[#CBD5E1]/80">
            One brief. The right mix of skills. A consistent creative direction.
          </p>

          <Link
            href="/services"
            className="group inline-flex items-center gap-1.5 text-white font-medium text-sm sm:text-base transition-colors duration-200 hover:text-white/90"
          >
            <span className="underline underline-offset-4 decoration-white/40 transition-all duration-200 group-hover:decoration-white">
              Explore All Capabilities
            </span>
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
