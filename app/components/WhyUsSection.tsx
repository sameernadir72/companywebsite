"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const valueProps = [
    {
        icon: "/Vector.png",
        alt: "Connected team and brand consistency",
        heading: "A shared creative direction",
        text: "Your website, content and campaigns feel like one brand.",
    },
    {
        icon: "/Vector-1.png",
        alt: "Direct feedback and defined scope",
        heading: "Clear communication",
        text: "Defined scope, direct feedback and visible progress.",
    },
    {
        icon: "/Vector-2.png",
        alt: "Audience insights and continuous refinement",
        heading: "Built to keep improving",
        text: "Learn from your audience and refine what comes next.",
    },
];

export function WhyUsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const leftColRef = useRef<HTMLDivElement>(null);
    const rightColRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(prefers-reduced-motion: no-preference)", () => {
                // 1. Left column entrance
                if (leftColRef.current) {
                    gsap.fromTo(
                        leftColRef.current.children,
                        { opacity: 0, y: 35 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.8,
                            stagger: 0.12,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: leftColRef.current,
                                start: "top 85%",
                                once: true,
                            },
                        }
                    );
                }

                // 2. Right column value rows entrance
                if (rightColRef.current) {
                    const rows = rightColRef.current.querySelectorAll(".why-us-row");
                    gsap.fromTo(
                        rows,
                        { opacity: 0, y: 35 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.75,
                            stagger: 0.15,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: rightColRef.current,
                                start: "top 85%",
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
            id="why-us"
            ref={sectionRef}
            aria-label="Why Us — Connected brand presence"
            className="relative w-full overflow-hidden bg-[#05112F] py-24 sm:py-28 lg:py-36 text-white isolate"
        >
            {/* Background Liquid Wave Layer */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
                <Image
                    src="/background-why-us 1.png"
                    alt="Why Us deep blue wave background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-bottom"
                />
                {/* Subtle dark gradient overlay for optimal legibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#05112F]/40 via-transparent to-[#05112F]/20 pointer-events-none" />
            </div>

            {/* Main Layout Container matching Figma width: 1650px */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-10">
                {/* Left Column: ab flex-1 — jitni space bachegi utni le lega */}
                <div ref={leftColRef} className="flex flex-col">
                    {/* Eyebrow */}
                    <span className="font-manrope text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#FF5500] uppercase block">
                        WHY US
                    </span>

                    {/* Main Brand Heading */}
                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[76px] font-extrabold tracking-tight leading-[1.06] my-4 sm:my-6 text-white">
                        One team.
                        <br />
                        A more <span className="text-[#FF5500]">connected</span>
                        <br />
                        brand.
                    </h2>

                    <p className="font-manrope text-lg sm:text-xl lg:text-[22px] leading-snug text-[#C2D6FC]/90 max-w-lg">
                        Bring your digital presence together with a shared direction.
                    </p>

                    <div>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2.5 rounded-full bg-[#FF5500] hover:bg-[#FF4500] text-white px-8 py-4 font-medium text-base shadow-[0_4px_24px_rgba(255,85,0,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer mt-8 sm:mt-10"
                        >
                            <span>Let&apos;s Talk</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>

                {/* Right Column: fixed Figma width — ab shrink nahi hoga */}
                <div ref={rightColRef} className="flex flex-col lg:shrink-0">
                    {valueProps.map((prop, idx) => (
                        <div
                            key={prop.heading}
                            className={`why-us-row group flex items-start gap-[31.25px] pb-[31.25px] pt-[31.25px] first:pt-0 ${idx !== valueProps.length - 1 ? "border-b border-white/10" : ""
                                } min-h-[168.5px] w-full`}
                        >
                            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center transition-transform duration-300 ease-out group-hover:scale-110 mt-1">
                                <Image
                                    src={prop.icon}
                                    alt={prop.alt}
                                    width={56}
                                    height={56}
                                    className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
                                />
                            </div>

                            <div className="flex flex-col justify-center flex-1">
                                <h3 className="font-display text-xl sm:text-2xl lg:text-[28px] font-bold text-white leading-tight transition-colors duration-200 group-hover:text-blue-200">
                                    {prop.heading}
                                </h3>
                                <p className="font-manrope text-base sm:text-lg lg:text-[18px] text-[#C2D6FC]/85 leading-relaxed mt-2.5">
                                    {prop.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default WhyUsSection;