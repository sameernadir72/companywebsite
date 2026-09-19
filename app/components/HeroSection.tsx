"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { heroProjects } from "../data/heroProjects";
import { MagneticButton } from "./ui/MagneticButton";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Fusion Folio — Your 360° Creative & Digital Partner"
      className="relative overflow-hidden bg-[#07112C] text-white min-h-[920px] lg:min-h-[1020px] flex flex-col justify-between"
    >
      {/* High-res background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none z-0"
        style={{ backgroundImage: "url('/hero-bg-wave.png')" }}
      />

      {/* Ambient gradient overlays for smooth blending and optimal text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07112C]/60 via-transparent to-[#07112C]/90 pointer-events-none z-0" />

      {/* Main Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pt-36 sm:pt-44 md:pt-48 pb-12 sm:pb-16 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#C0D6F9] uppercase mb-4 sm:mb-6">
          YOUR 360° CREATIVE &amp; DIGITAL PARTNER
        </p>

        {/* Headline — Reliable UI/UX Fluid Typography (Target: 93.23px, Line-height: 95.1px, Tracking: -6.06px) */}
        <h1 className="font-manrope font-semibold text-[clamp(2.5rem,6.6vw,93.23px)] leading-[1.02] tracking-[-0.065em] text-center text-white max-w-5xl mx-auto">
          Your next chapter.
          <br />
          Designed to make{" "}
          <span className="text-[#FF5500]">waves.</span>
        </h1>

        {/* Description — Styled to exact specifications */}
        <p className="font-manrope font-normal text-base sm:text-lg md:text-[22px] lg:text-[26.14px] lg:leading-[39.21px] tracking-[0.39px] text-center text-white/85 max-w-3xl mx-auto mt-6 sm:mt-8">
          Websites, experiences, motion, reels and Meta campaigns. One connected team to bring your brand forward.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#FF5500] hover:bg-[#FF4500] text-white px-7 py-3.5 sm:px-8 sm:py-4 font-medium text-base shadow-[0_4px_24px_rgba(255,85,0,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </MagneticButton>

          <MagneticButton>
            <Link
              href="/work"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 text-white px-7 py-3.5 sm:px-8 sm:py-4 font-medium text-base backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Explore Our Work</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </MagneticButton>
        </div>
      </div>

      {/* Bottom Project Section / Carousel Strip */}
      <div className="relative z-10 w-full overflow-hidden pb-6 pt-2">
        <div className="hero-mask-x relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-6 py-2 hover:[animation-play-state:paused]">
            {/* 3x duplicated strip for smooth, seamless continuous infinite marquee */}
            {[0, 1, 2].map((copyIndex) => (
              <div key={copyIndex} className="flex items-center gap-6 shrink-0">
                <Link
                  href="/work"
                  className="group relative block h-[220px] sm:h-[260px] md:h-[290px] w-auto shrink-0 overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-[1.01]"
                >
                  <Image
                    src="/projects-strip.png"
                    alt="Featured Client Projects"
                    width={1024}
                    height={210}
                    className="h-full w-auto object-cover select-none pointer-events-none rounded-2xl"
                    priority={copyIndex === 0}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
