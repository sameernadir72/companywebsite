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
        icon: "/Vector-0.png",
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

            // Animate only when motion is welcome.
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

            // Reduced-motion safety net: guarantee final state, never leave content hidden.
            mm.add("(prefers-reduced-motion: reduce)", () => {
                const targets: Element[] = [];
                if (leftColRef.current) targets.push(...Array.from(leftColRef.current.children));
                if (rightColRef.current) targets.push(...Array.from(rightColRef.current.querySelectorAll(".why-us-row")));
                if (targets.length) gsap.set(targets, { opacity: 1, y: 0, clearProps: "transform" });
            });

            // Let context.revert() also tear down the matchMedia listeners.
            return () => mm.revert();
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="why-us"
            ref={sectionRef}
            aria-label="Why Us — Connected brand presence"
            className="relative isolate w-full overflow-hidden bg-[#05112F] py-24 sm:py-28 lg:py-36 text-white"
        >
            {/* Background Liquid Wave Layer — full-bleed, fills the padded section box */}
            <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
                <Image
                    src="/background-why-us.png"
                    alt="Why Us deep blue wave background"
                    fill
                    priority
                    sizes="100vw"
                    quality={100}
                    className="h-full w-full object-cover object-[70%_bottom] sm:object-[65%_bottom] lg:object-[center_bottom]"
                />
                {/* Subtle dark gradient overlay for optimal legibility */}
                <div className="absolute inset-0 bg-linear-to-r from-[#05112F]/40 via-transparent to-[#05112F]/20 pointer-events-none" />
            </div>

            {/* Constrained content container — keeps the row off the viewport edges */}
            <div className="relative z-10 mx-auto w-full max-w-[1650px] px-6 sm:px-10 lg:px-16">
                {/* Content Row: compact, balanced vertical layout */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14">
                    {/* Left Column */}
                    <div ref={leftColRef} className="flex flex-col flex-1 max-w-full lg:max-w-[720px] xl:max-w-[860px]">
                        {/* Eyebrow */}
                        <span className="font-manrope text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#FF5500] uppercase block">
                            WHY US
                        </span>

                        {/* Main Brand Heading — single line layout */}
                        <h2 className="font-manrope font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] leading-tight tracking-tight my-3 text-white xl:whitespace-nowrap">
                            One team.
                            <br />
                            A more <span className="text-[#FF5500]">connected</span> brand.
                        </h2>

                        {/* Sub-heading */}
                        <p className="font-manrope font-normal text-base sm:text-lg lg:text-[18px] leading-relaxed text-[#C2D6FC]/90 max-w-lg">
                            Bring your digital presence together with a shared direction.
                        </p>

                        <div>
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-2.5 rounded-full bg-[#FF5500] hover:bg-[#E03E00] text-white border border-[#FF5500] hover:border-[#FF6A1A] px-7 py-3.5 font-medium text-sm sm:text-base shadow-[0_4px_24px_rgba(255,85,0,0.35)] hover:shadow-[0_8px_32px_rgba(255,85,0,0.55)] transition-all duration-300 ease-out cursor-pointer mt-5 sm:mt-6"
                            >
                                <span>Let&apos;s Talk</span>
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: fixed Figma width */}
                    <div ref={rightColRef} className="flex flex-col w-full lg:w-[580px] lg:shrink-0">
                        {valueProps.map((prop, idx) => (
                            <div
                                key={prop.heading}
                                className={`why-us-row group flex items-start gap-5 lg:gap-6 py-4 sm:py-5 first:pt-0 last:pb-0 ${idx !== valueProps.length - 1 ? "border-b border-white/10" : ""
                                    } w-full`}
                            >
                                <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center transition-transform duration-300 ease-out group-hover:scale-110 mt-0.5">
                                    <Image
                                        src={prop.icon}
                                        alt={prop.alt}
                                        width={56}
                                        height={56}
                                        className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                                    />
                                </div>

                                <div className="flex flex-col justify-center flex-1">
                                    <h3 className="font-manrope font-bold text-lg sm:text-xl lg:text-[22px] leading-snug text-white transition-colors duration-200 group-hover:text-blue-200">
                                        {prop.heading}
                                    </h3>
                                    <p className="font-manrope font-normal text-sm sm:text-[15px] leading-relaxed text-[#C2D6FC]/85 mt-1">
                                        {prop.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
export default WhyUsSection;
