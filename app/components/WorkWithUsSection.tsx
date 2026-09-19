"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Check, ArrowRight, Globe, Megaphone, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TierCard {
  id: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  iconType: "globe" | "megaphone" | "users";
}

const tiers: TierCard[] = [
  {
    id: "website",
    title: "Launch a Website",
    description: "For a new site or a complete digital refresh.",
    features: ["Website strategy", "UI/UX design", "Development & launch"],
    cta: "Plan My Website",
    highlighted: false,
    iconType: "globe",
  },
  {
    id: "campaign",
    title: "Build a Campaign",
    description: "For a brand moment that needs a connected creative direction.",
    features: ["Campaign concepts", "Animation & reels", "Meta ad creatives"],
    cta: "Discuss My Campaign",
    highlighted: true,
    iconType: "megaphone",
  },
  {
    id: "partnership",
    title: "Creative Partnership",
    description: "For ongoing design, content and campaign support.",
    features: [
      "A defined monthly scope",
      "Connected creative production",
      "Regular reviews & iteration",
    ],
    cta: "Explore a Partnership",
    highlighted: false,
    iconType: "users",
  },
];

export function WorkWithUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (headerRef.current) {
          gsap.fromTo(
            headerRef.current.children,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: headerRef.current,
                start: "top 85%",
                once: true,
              },
            }
          );
        }

        if (cardsRef.current) {
          gsap.fromTo(
            cardsRef.current.children,
            { opacity: 0, y: 36 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: cardsRef.current,
                start: "top 80%",
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
      id="work-with-us"
      ref={sectionRef}
      aria-label="Work With Us — The right support. At the right stage."
      className="relative w-full py-20 sm:py-24 lg:py-28 bg-[#F0F5FF] text-[#0B1220]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="text-center max-w-2xl mx-auto mb-14 lg:mb-16 flex flex-col items-center"
        >
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#FF5500] uppercase mb-4">
            WORK WITH US
          </span>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0B1220] tracking-tight leading-[1.12] mb-4">
            The right support.
            <br />
            At the right stage.
          </h2>

          <p className="text-[#475467] text-base sm:text-lg leading-relaxed font-normal">
            Start with a focused project or build an ongoing creative partnership.
          </p>
        </div>

        {/* 3-Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8 items-stretch"
        >
          {tiers.map((tier) => {
            const isHighlighted = tier.highlighted;

            return (
              <div
                key={tier.id}
                className={`relative flex flex-col justify-between rounded-[28px] sm:rounded-[32px] p-8 sm:p-9 transition-all duration-300 ${
                  isHighlighted
                    ? "bg-[#0055FF] text-white shadow-[0_20px_48px_rgba(0,85,255,0.32)] hover:shadow-[0_28px_60px_rgba(0,85,255,0.42)] hover:-translate-y-1.5"
                    : "bg-white text-[#0B1220] border border-[#E4EBF7] shadow-[0_10px_32px_rgba(0,35,110,0.06)] hover:shadow-[0_18px_42px_rgba(0,35,110,0.12)] hover:-translate-y-1.5"
                }`}
              >
                {/* Top Content */}
                <div>
                  {/* Icon */}
                  <div className="mb-6">
                    {tier.iconType === "globe" && (
                      <Globe
                        className="w-12 h-12 text-[#FF5500] stroke-[1.8]"
                        aria-hidden="true"
                      />
                    )}
                    {tier.iconType === "megaphone" && (
                      <Megaphone
                        className="w-12 h-12 text-white stroke-[1.8]"
                        aria-hidden="true"
                      />
                    )}
                    {tier.iconType === "users" && (
                      <Users
                        className="w-12 h-12 text-[#FF5500] stroke-[1.8]"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-display text-2xl sm:text-[26px] font-bold tracking-tight mb-2.5 ${
                      isHighlighted ? "text-white" : "text-[#0B1220]"
                    }`}
                  >
                    {tier.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm sm:text-[15px] leading-relaxed mb-8 ${
                      isHighlighted ? "text-white/85" : "text-[#475467]"
                    }`}
                  >
                    {tier.description}
                  </p>

                  {/* Features Bullet List */}
                  <ul className="space-y-3.5 mb-10">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                            isHighlighted
                              ? "bg-white text-[#0055FF]"
                              : "bg-[#FFF1EB] text-[#FF5500]"
                          }`}
                        >
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                        <span
                          className={`text-sm sm:text-[15px] ${
                            isHighlighted ? "text-white font-medium" : "text-[#1D2939]"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className={`group w-full py-3.5 sm:py-4 px-6 rounded-full flex items-center justify-center gap-2 text-sm sm:text-base font-semibold transition-all duration-200 ${
                      isHighlighted
                        ? "bg-[#FF5500] hover:bg-[#E64D00] text-white shadow-[0_4px_16px_rgba(255,85,0,0.35)]"
                        : "bg-[#0055FF] hover:bg-[#0046DB] text-white shadow-sm"
                    }`}
                  >
                    <span>{tier.cta}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
