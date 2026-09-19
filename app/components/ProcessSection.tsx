"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description: "Understand your goals and audience.",
    image: "/process_1.png",
    alt: "Discover phase — Goals, Audience, Ideas notebook",
  },
  {
    step: "02",
    title: "Design",
    description: "Shape the experience and creative direction.",
    image: "/process_2.png",
    alt: "Design phase — Creative team reviewing color swatches and layout",
  },
  {
    step: "03",
    title: "Build & Create",
    description: "Bring the approved ideas to life.",
    image: "/process_3.png",
    alt: "Build & Create phase — Laptop with code editor",
  },
  {
    step: "04",
    title: "Launch & Refine",
    description: "Release, review and improve.",
    image: "/process_4.png",
    alt: "Launch & Refine phase — Hand holding smartphone with live site",
  },
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<string>("02");
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1. Header entrance
        if (headerRef.current) {
          gsap.fromTo(
            headerRef.current.children,
            { opacity: 0, y: 30 },
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

        // 2. Timeline line expand
        if (timelineLineRef.current) {
          gsap.fromTo(
            timelineLineRef.current,
            { scaleX: 0, transformOrigin: "left center" },
            {
              scaleX: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: stepsContainerRef.current,
                start: "top 82%",
                once: true,
              },
            }
          );
        }

        // 3. Step cards staggered reveal
        if (stepsContainerRef.current) {
          const cards = stepsContainerRef.current.querySelectorAll(".process-step-col");
          gsap.fromTo(
            cards,
            { opacity: 0, y: 45 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: stepsContainerRef.current,
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
      id="process"
      ref={sectionRef}
      aria-label="Our Process — From the first conversation to your next launch."
      className="relative w-full overflow-hidden bg-white py-20 sm:py-24 lg:py-28 text-[#0A1128]"
    >
      <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 sm:pb-16"
        >
          <div>
            {/* Eyebrow */}
            <span className="font-manrope text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#FF5500] uppercase block mb-3">
              OUR PROCESS
            </span>

            {/* Main Headline */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#0A1128] leading-[1.12]">
              From the first conversation
              <br />
              to your next launch.
            </h2>

            {/* Subtitle */}
            <p className="font-manrope text-base sm:text-lg text-slate-500 mt-4 max-w-xl">
              A clear process. A shared direction. Progress you can see.
            </p>
          </div>

          <Link
            href="/process"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-300 hover:border-[#FF5500] px-6 py-3 text-sm font-semibold text-[#0A1128] hover:text-[#FF5500] transition-colors self-start md:self-auto shrink-0"
          >
            <span>Explore 5-Phase Methodology</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4-Step Process Grid with Connecting Timeline Line */}
        <div ref={stepsContainerRef} className="relative">
          {/* Continuous Connecting Timeline Line (Desktop: passes through exact center of circle badges) */}
          <div
            ref={timelineLineRef}
            aria-hidden="true"
            className="pointer-events-none absolute top-[46px] -translate-y-1/2 left-[46px] right-0 hidden h-[2px] bg-slate-200 lg:block z-0"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch">
            {processSteps.map((step) => {
              const isActive = activeStep === step.step;

              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(step.step)}
                  className="process-step-col group flex flex-col justify-between cursor-pointer transition-all duration-300"
                >
                  {/* Top Portion: Badge + Title + Description */}
                  <div
                    className={`relative z-10 flex flex-col justify-between p-5 sm:p-6 transition-all duration-300 min-h-[175px] sm:min-h-[190px] ${
                      isActive
                        ? "bg-[#0055FF] text-white rounded-t-[22px] shadow-lg shadow-blue-600/20"
                        : "bg-transparent text-[#0A1128] rounded-t-[22px]"
                    }`}
                  >
                    {/* Circle Step Number */}
                    <div className="relative inline-flex">
                      <span className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#FF5500] text-white text-sm font-bold shadow-md shadow-orange-500/20 transition-transform duration-300 group-hover:scale-110">
                        {step.step}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="mt-4 flex flex-col">
                      <h3
                        className={`font-display text-xl sm:text-[22px] font-bold tracking-tight leading-snug transition-colors duration-200 ${
                          isActive
                            ? "text-white"
                            : "text-[#0A1128] group-hover:text-[#0055FF]"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`font-manrope text-xs sm:text-sm leading-relaxed mt-1.5 ${
                          isActive ? "text-white/90" : "text-slate-500"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Portion: Rounded Card Image */}
                  <div
                    className={`relative aspect-[4/3] w-full overflow-hidden bg-slate-100 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-xl ${
                      isActive
                        ? "rounded-b-[22px] shadow-md shadow-blue-600/10"
                        : "rounded-[22px] shadow-sm border border-slate-200/80 mt-2 sm:mt-3"
                    }`}
                  >
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      priority={step.step === "01" || step.step === "02"}
                    />
                    {/* Subtle hover gradient sheen */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
