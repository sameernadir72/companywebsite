"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";


export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Fusion Folio — Your 360° Creative & Digital Partner"
      className="relative w-full overflow-hidden bg-[#07112C] text-white flex flex-col items-center"
    >
      {/* High-res background image spanning 100% of viewport width */}
      <div
        className="pointer-events-none absolute inset-0 z-0 h-full w-full min-w-full overflow-hidden select-none"
        style={{
          backgroundImage: "url('/hero-bg-wave.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <Image
          src="/hero-bg-wave.jpeg"
          alt="Fusion Folio Hero Background Wave"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center w-full h-full select-none pointer-events-none"
        />
      </div>

      {/* Ambient gradient overlays for smooth blending and optimal text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07112C]/60 via-transparent to-[#07112C]/90 pointer-events-none z-0" />

      {/* Main Hero Content — tight, balanced vertical spacing matching Figma specs */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pt-24 sm:pt-28 lg:pt-32 pb-6 sm:pb-8 lg:pb-10 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#C0D6F9] uppercase mb-3 sm:mb-4">
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

        {/* Action Buttons — stationary layout with smooth, luxury color transitions */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#FF5500] hover:bg-[#E03E00] text-white border border-[#FF5500] hover:border-[#FF6A1A] px-7 py-3.5 sm:px-8 sm:py-4 font-medium text-base shadow-[0_4px_20px_rgba(255,85,0,0.35)] hover:shadow-[0_8px_32px_rgba(255,85,0,0.6)] transition-all duration-300 ease-out cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
          </Link>

          <Link
            href="/work"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#07112C] border border-white/20 hover:border-white px-7 py-3.5 sm:px-8 sm:py-4 font-medium text-base backdrop-blur-md shadow-sm hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition-all duration-300 ease-out cursor-pointer"
          >
            <span>Explore Our Work</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Bottom Project Section / Carousel Strip */}
      <div className="relative z-10 w-full overflow-hidden pt-2 pb-10 sm:pb-14">
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
