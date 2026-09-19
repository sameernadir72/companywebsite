"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const serviceItems = [
  "Social Media Design & Management",
  "Reels & Short-Form Video",
  "UGC Creative & Content Direction",
  "Content Calendars & Campaign Concepts",
];

export function SocialContentSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (cardRef.current) {
          gsap.fromTo(
            cardRef.current,
            { opacity: 0, x: -30, scale: 0.96 },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: cardRef.current,
                start: "top 80%",
                once: true,
              },
            }
          );
        }

        if (contentRef.current) {
          gsap.fromTo(
            contentRef.current.children,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: contentRef.current,
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
      id="social-content"
      ref={sectionRef}
      aria-label="Social & Content — Show Up. Stay Relevant."
      className="relative w-full overflow-hidden py-20 sm:py-24 lg:py-32  text-white isolate"
    >
      {/* Background Liquid Waves Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <Image
          src="/real_bg.png"
          alt="Social & Content background wave"
         fill
          priority
          className="bg-cover bg-center bg-no-repeat"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Visual Media Card */}
          <div
            ref={cardRef}
            className="lg:col-span-6 w-full flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[540px] aspect-[4/3.7] sm:aspect-[4/3.4] lg:aspect-[4/3.5] rounded-[28px] sm:rounded-[32px] overflow-hidden border border-white/20 shadow-[0_24px_64px_rgba(0,10,60,0.5)] group">
              {/* Creator Photo */}
              <Image
                src="/service-05.png"
                alt="Creator filming social short-form content"
                fill
                sizes="(max-width: 768px) 100vw, 540px"
                className="object-cover object-[center_15%] transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />

              {/* Gradient Scrim for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#011438]/95 via-[#011438]/30 to-black/25 pointer-events-none" />

              {/* Top-Left Pill Badge */}
              <div className="absolute top-4 sm:top-5 left-4 sm:left-5 z-20">
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white/90 text-xs sm:text-[13px] font-medium tracking-wide shadow-sm">
                  Made For The Way We Watch
                </span>
              </div>

              {/* Floating Top-Right Notification Card matching media_1789214932527.png */}
              <div className="absolute top-12 sm:top-14 right-3 sm:right-5 z-20">
                <div className="flex items-center justify-between gap-6 sm:gap-7 px-5 sm:px-6 py-3.5 sm:py-4 rounded-[20px] bg-gradient-to-br from-[#1C5AEF] via-[#154ED8] to-[#0D38B8] shadow-[0_14px_30px_rgba(12,56,184,0.4),0_4px_10px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_18px_36px_rgba(12,56,184,0.55)] cursor-pointer">
                  <div className="text-left font-manrope">
                    <p className="text-white text-sm sm:text-[15px] font-normal leading-[1.4] tracking-normal">
                      A Good Hook.
                    </p>
                    <p className="text-white text-sm sm:text-[15px] font-normal leading-[1.4] tracking-normal">
                      A Better Story.
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white stroke-[1.6] flex-shrink-0" />
                </div>
              </div>

              {/* Bottom Overlay Info */}
              <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6 z-20 flex flex-col gap-3 sm:gap-4">
                <h3 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight leading-[1.12]">
                  Real Stories.
                  <br />
                  Real Connection.
                </h3>

                {/* Pill Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-0.5">
                  {["Reels", "UGC", "Social"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium text-white/90 bg-white/10 backdrop-blur-md border border-white/25 transition-colors duration-200 hover:bg-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial & Interactive Services */}
          <div
            ref={contentRef}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-[#FF6B35] shadow-[0_0_10px_#FF6B35]" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#FF7A50] uppercase">
                SOCIAL & CONTENT
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.08] mb-6">
              Show Up.
              <br />
              Stay <span className="text-[#FF6B35]">Relevant.</span>
            </h2>

            {/* Paragraph Description */}
            <p className="text-blue-100/85 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-xl mb-8 font-normal">
              Give people more than another post. We shape a recognizable social
              presence with sharp design, relatable storytelling, and content
              made for the way people actually watch.
            </p>

            {/* Service Accordion / Links List */}
            <div className="flex flex-col w-full max-w-xl divide-y divide-white/15">
              {serviceItems.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-3.5 py-4 cursor-pointer transition-all duration-300 hover:translate-x-1.5"
                >
                  <ArrowUpRight className="w-5 h-5 text-blue-300 transition-all duration-300 group-hover:text-[#FF6B35] group-hover:rotate-45 flex-shrink-0" />
                  <span className="text-base sm:text-lg font-medium text-white/90 group-hover:text-white transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Sub-note */}
            <p className="text-xs sm:text-sm text-blue-200/70 mt-4 mb-7 font-light">
              Built for shareability. No unrealistic promises of virality.
            </p>

            {/* Bottom CTA Link */}
            <div>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-white border-b-2 border-white/80 pb-0.5 transition-all duration-200 hover:text-[#FF7A50] hover:border-[#FF7A50] focus-visible:outline-none"
              >
                <span>Let&apos;s Create Your Next Scroll-Stopper</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
