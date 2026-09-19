"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Can we start with one service?",
    answer:
      "Yes. Start with what you need now and expand the scope as your priorities evolve.",
  },
  {
    question: "Do you work with existing brands and websites?",
    answer:
      "Yes. Whether you need a brand refresh, website optimization, or new creative assets, we seamlessly integrate with your existing brand identity and systems.",
  },
  {
    question: "Can you create both reels and ad campaigns?",
    answer:
      "Absolutely. We produce organic short-form reels and TikToks, alongside performance-driven paid ad creative engineered to convert across Meta, TikTok, and YouTube.",
  },
  {
    question: "How are budgets and timelines decided?",
    answer:
      "Every project receives a clear, transparent scope and milestone schedule upfront based on your deliverables, with no surprise fees.",
  },
  {
    question: "What support is available after launch?",
    answer:
      "We provide post-launch warranties, asset handoff sessions, and flexible ongoing retainer partnerships to ensure your brand stays consistent and competitive.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (leftColRef.current) {
          gsap.fromTo(
            leftColRef.current.children,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: leftColRef.current,
                start: "top 80%",
                once: true,
              },
            }
          );
        }

        if (rightColRef.current) {
          gsap.fromTo(
            rightColRef.current.children,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: rightColRef.current,
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
      id="faq"
      ref={sectionRef}
      aria-label="Frequently Asked Questions"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-white text-[#0B1220]"
    >
      <div className="mx-auto w-full max-w-[1320px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & CTA */}
          <div
            ref={leftColRef}
            className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28"
          >
            {/* Eyebrow */}
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#FF5500] uppercase mb-4">
              FAQ
            </span>

            {/* Headline */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0B1220] tracking-tight leading-[1.1] mb-5">
              A few things
              <br />
              you might be
              <br />
              wondering.
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#475467] leading-relaxed mb-8 font-normal">
              A little clarity before we get started.
            </p>

            {/* CTA Pill Button */}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-[#FF5500] text-[#FF5500] text-sm sm:text-base font-semibold transition-all duration-200 hover:bg-[#FF5500] hover:text-white"
            >
              <span>Ask Us a Question</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Column: Accordion Items */}
          <div
            ref={rightColRef}
            className="lg:col-span-7 flex flex-col gap-3.5 sm:gap-4 w-full"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="rounded-2xl bg-[#F0F5FF] transition-all duration-200 overflow-hidden"
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="group flex w-full cursor-pointer items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5500] rounded-2xl"
                    >
                      <span className="text-base sm:text-[17px] font-semibold text-[#0B1220] tracking-tight leading-snug">
                        {faq.question}
                      </span>

                      {/* Plus / Minus Indicator Badge */}
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                          isOpen
                            ? "bg-[#FF5500] text-white shadow-sm"
                            : "border border-[#FF5500]/40 text-[#FF5500] group-hover:border-[#FF5500] group-hover:bg-[#FF5500]/5"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="w-4 h-4 stroke-[2.5]" />
                        ) : (
                          <Plus className="w-4 h-4 stroke-[2.5]" />
                        )}
                      </span>
                    </button>
                  </h3>

                  {/* Expandable Answer */}
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 pb-5 sm:pb-6 px-5 sm:px-6"
                        : "grid-rows-[0fr] opacity-0 px-5 sm:px-6"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm sm:text-[15px] text-[#475467] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
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
