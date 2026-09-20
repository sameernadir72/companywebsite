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
      className="relative w-full overflow-hidden isolate bg-[#021345] pt-12 sm:pt-16 lg:pt-20 select-none"
    >
      {/* Background Liquid Blue Wave & Logo Layer — full coverage & uncompromised resolution */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
        <Image
          src="/bg_meet.jpeg"
          alt="Luminous electric blue background wave with Fusion Folio mark"
          fill
          priority
          quality={100}
          unoptimized
          sizes="100vw"
          className="h-full w-full object-cover object-top sm:object-center select-none pointer-events-none"
        />
        {/* Subtle ambient gradient overlay for crisp text contrast without washing out the graphic */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#021348]/25 via-transparent to-[#010E33]/40 pointer-events-none" />
      </div>


      {/* Main Centered Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-12 flex flex-col items-center text-center">
        {/* Header Block */}
        <div ref={headerRef} className="flex flex-col items-center">
          {/* Main Headline — exact Figma specs: Instrument Sans Regular 400, 52px, line-height 57.2px, letter-spacing -1.5px, center */}
          <h2 className="font-instrument font-normal text-3xl sm:text-4xl md:text-[46px] lg:text-[52px] leading-tight lg:leading-[57.2px] tracking-tight lg:tracking-[-1.5px] text-white text-center max-w-4xl">
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

          {/* Subtitle / Paragraph — exact Figma specs: Instrument Sans Medium 500, 17px, line-height 25.5px, letter-spacing -0.2px, center */}
          <p className="mt-6 sm:mt-7 font-instrument font-medium text-sm sm:text-base lg:text-[17px] leading-relaxed lg:leading-[25.5px] tracking-[-0.2px] text-white/85 max-w-3xl mx-auto text-center">
            Through a simple subscription style design plan, businesses unlock instant access to a top-tier dedicated creative team - no hiring, no overhead, no and friction. Fast, scalable, and purpose built for modern teams.
          </p>
        </div>

        {/* CTA Button — stationary smooth color transition */}
        <div ref={btnRef} className="mt-8 sm:mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#FF5500] hover:bg-[#E03E00] border border-[#FF5500] hover:border-[#FF6A1A] text-white text-sm sm:text-base font-semibold shadow-[0_12px_32px_rgba(255,85,0,0.38)] hover:shadow-[0_12px_36px_rgba(255,85,0,0.58)] transition-all duration-300 ease-out cursor-pointer"
          >
            Book a call
          </Link>
        </div>
      </div>

      {/* Bottom Fanned Project Showcase Strip */}
      <div
        ref={stripRef}
        className="relative z-10 w-full mt-6 sm:mt-8 lg:mt-10 overflow-hidden flex justify-center -mb-2 sm:-mb-4 lg:-mb-6"
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
