"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function MeetFusionFolioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (headerRef.current) {
          gsap.fromTo(
            headerRef.current,
            { opacity: 0, y: 36 },
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

        if (btnRef.current) {
          gsap.fromTo(
            btnRef.current,
            { opacity: 0, scale: 0.92, y: 20 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.75,
              ease: "back.out(1.5)",
              scrollTrigger: {
                trigger: btnRef.current,
                start: "top 88%",
                once: true,
              },
            }
          );
        }

        if (stripRef.current) {
          gsap.fromTo(
            stripRef.current,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 1.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: stripRef.current,
                start: "top 88%",
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
      id="meet-fusion-folio"
      ref={sectionRef}
      aria-label="Meet Fusion Folio — The Answer to Your Creative Needs"
      className="relative w-full overflow-hidden isolate bg-[#021345] pt-20 sm:pt-24 lg:pt-32 select-none"
    >
      {/* Background Gradient Canvas */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#021348] via-[#021B66] to-[#010E33] pointer-events-none z-0" />

      {/* Left Fluid Wave Glowing Light Ray Layer */}
      <div className="absolute inset-y-0 left-0 w-full sm:w-4/5 lg:w-3/5 pointer-events-none z-0 overflow-hidden select-none">
        <Image
          src="/real_bg.png"
          alt="Luminous electric blue background wave"
          fill
          priority={false}
          quality={90}
          className="object-cover object-left opacity-85 mix-blend-screen pointer-events-none"
        />
      </div>

      {/* Upper-Right Decorative Fusion Folio Brand Monogram Watermark */}
      <div className="absolute -top-16 -right-16 sm:-top-20 sm:-right-20 lg:-top-28 lg:-right-28 w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] lg:w-[680px] lg:h-[680px] pointer-events-none z-0 select-none opacity-80">
        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-[#1C5AEF]/70 drop-shadow-[0_0_80px_rgba(28,90,239,0.45)]"
        >
          {/* Stylized folded ribbon matching brand mark */}
          <path
            d="M80 180 C80 120, 140 70, 240 70 C310 70, 340 110, 340 160 C340 220, 280 270, 200 270 L140 270"
            stroke="currentColor"
            strokeWidth="42"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M140 180 L280 180 C320 180, 340 210, 340 250 C340 300, 300 340, 230 340 C140 340, 90 280, 90 210"
            stroke="currentColor"
            strokeWidth="42"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M160 120 L270 230"
            stroke="currentColor"
            strokeWidth="38"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Main Centered Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-12 flex flex-col items-center text-center">
        {/* Header Block */}
        <div ref={headerRef} className="flex flex-col items-center">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl">
            Meet Fusion Folio -
            <br />
            <span className="font-normal">the answer to </span>
            <span className="inline-block font-extrabold tracking-tight">
              y<span className="font-black text-white">o</span>ur
            </span>{" "}
            <span className="font-serif italic font-normal text-[#FF6515] tracking-normal">
              creative needs
            </span>
          </h2>

          {/* Subtitle / Paragraph */}
          <p className="mt-6 sm:mt-7 font-manrope text-sm sm:text-base md:text-lg text-white/85 max-w-3xl mx-auto leading-relaxed font-normal">
            Through a simple subscription style design plan, businesses unlock instant access to a top-tier dedicated creative team - no hiring, no overhead, no and friction. Fast, scalable, and purpose built for modern teams.
          </p>
        </div>

        {/* CTA Button */}
        <div ref={btnRef} className="mt-8 sm:mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#FF5500] hover:bg-[#FF4500] text-white text-sm sm:text-base font-semibold shadow-[0_12px_32px_rgba(255,85,0,0.38)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            Book a call
          </Link>
        </div>
      </div>

      {/* Bottom Fanned Project Showcase Strip */}
      <div
        ref={stripRef}
        className="relative z-10 w-full mt-10 sm:mt-14 lg:mt-16 overflow-hidden flex justify-center -mb-2 sm:-mb-4 lg:-mb-6"
      >
        <div className="relative w-full max-w-[1680px] min-w-[860px] sm:min-w-[1100px] lg:min-w-[1360px] flex justify-center px-2 sm:px-6">
          <Image
            src="/new_meeting_bg.png"
            alt="Showcase of project designs fanned across the bottom"
            width={1920}
            height={600}
            quality={95}
            priority
            className="w-full h-auto object-contain object-bottom pointer-events-none select-none drop-shadow-[0_20px_45px_rgba(0,0,0,0.45)]"
          />
        </div>
      </div>
    </section>
  );
}
