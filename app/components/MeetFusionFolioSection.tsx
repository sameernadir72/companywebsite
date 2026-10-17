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
      className="relative w-full overflow-hidden isolate bg-[#021345] pt-8 sm:pt-10 lg:pt-12 select-none scroll-mt-28"
    >
      {/* Background Liquid Blue Wave & Logo Layer — matches native 1920x669 proportions */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
        <Image
          src="/bg_meet.jpeg"
          alt="Luminous electric blue background wave with Fusion Folio mark"
          fill
          priority
          quality={100}
          unoptimized
          sizes="100vw"
          className="h-full w-full object-cover object-center select-none pointer-events-none"
        />
        {/* Subtle ambient gradient overlay for crisp text contrast without washing out the graphic */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#021348]/20 via-transparent to-[#010E33]/35 pointer-events-none" />
      </div>

      {/* Main Centered Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-12 flex flex-col items-center text-center">
        {/* Header Block */}
        <div ref={headerRef} className="flex flex-col items-center">
          {/* Main Headline — Instrument Sans Regular 400 */}
          <h2 className="font-instrument font-normal text-2xl sm:text-4xl md:text-[44px] lg:text-[50px] leading-[1.1] tracking-tight lg:tracking-[-1.5px] text-white text-center max-w-4xl">
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

          {/* Subtitle / Paragraph — tightened spacing below heading */}
          <p className="mt-2.5 sm:mt-3 font-instrument font-medium text-xs sm:text-sm lg:text-[16px] leading-snug lg:leading-[24px] tracking-[-0.2px] text-white/85 max-w-2xl mx-auto text-center">
            Through a simple subscription style design plan, businesses unlock instant access to a top-tier dedicated creative team - no hiring, no overhead, no friction. Fast, scalable, and purpose built for modern teams.
          </p>
        </div>

        {/* CTA Button */}
        <div ref={btnRef} className="my-8 sm:mt-5 relative z-20">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 sm:px-9 py-3 sm:py-3.5 rounded-full bg-[#FF5500] hover:bg-[#E03E00] border border-[#FF5500] hover:border-[#FF6A1A] text-white text-xs sm:text-sm font-semibold shadow-[0_12px_32px_rgba(255,85,0,0.38)] hover:shadow-[0_12px_36px_rgba(255,85,0,0.58)] transition-all duration-300 ease-out cursor-pointer"
          >
            Book a call
          </Link>
        </div>
      </div>

      {/* Bottom Fanned Project Showcase Strip (native 1920x369; negative top margin collapses built-in transparent top space in PNG) */}
      <div
        ref={stripRef}
        className="relative z-10 w-full -mt-6 sm:-mt-10 lg:-mt-16 overflow-hidden flex justify-center -mb-1 sm:-mb-2"
      >
        <div className="relative w-full max-w-[1680px] min-w-[780px] sm:min-w-[1040px] lg:min-w-[1280px] flex justify-center px-2 sm:px-6">
          <Image
            src="/new_meeting_bg.png"
            alt="Showcase of project designs fanned across the bottom"
            width={1920}
            height={369}
            quality={100}
            unoptimized
            priority
            className="w-full h-auto object-contain object-bottom pointer-events-none select-none drop-shadow-[0_20px_45px_rgba(0,0,0,0.45)]"
          />
        </div>
      </div>
    </section>
  );
}
