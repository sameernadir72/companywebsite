"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does the subscription work?",
    answer:
      "You start off with a flexible design subscription. Request as many designs as you'd like, and our senior creative team works through them sequentially. Pause or cancel anytime without complicated long-term lock-in.",
  },
  {
    question: "Do you work with existing brand guidelines?",
    answer:
      "Yes. Whether you have strict brand guidelines, established design systems, or raw sketches, we seamlessly integrate with your existing brand identity and design language.",
  },
  {
    question: "Can you create both digital and print designs?",
    answer:
      "Absolutely. Our team produces both high-performance digital deliverables (web flagships, mobile apps, social ad creatives) and physical brand collateral (packaging, brochures, stationery, large-format OOH).",
  },
  {
    question: "How are design and content deliverable?",
    answer:
      "All projects are handed off with organized Figma source files, vector assets (SVG), high-res exports, and production-ready code when engineering is in scope.",
  },
  {
    question: "What support is provided after launch?",
    answer:
      "We provide post-launch warranties, asset handoff sessions, and flexible ongoing retainer partnerships to ensure your brand stays consistent and competitive.",
  },
];

export function WorkFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 sm:py-28 border-t border-slate-200/80">
      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Information */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#FF631C] uppercase mb-4 font-manrope">
              FAQ
            </span>

            <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl lg:text-[46px] tracking-tight leading-[1.1] text-[#0A1128]">
              A few things you might be wondering.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-600 font-manrope leading-relaxed max-w-md">
              Everything you need to know about our services, creative process, and how we work together.
            </p>

            <Link
              href="/contact"
              className="mt-8 group inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#FF631C] hover:text-[#E55210] transition-colors font-manrope"
            >
              <span>Have more questions?</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="lg:col-span-7 flex flex-col gap-4 w-full">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-[20px] transition-all duration-300 overflow-hidden border ${
                    isOpen
                      ? "bg-slate-50/80 border-[#005DFF]/30 shadow-md"
                      : "bg-white border-slate-200/80 hover:border-slate-300 shadow-sm"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 text-left cursor-pointer focus-visible:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-manrope font-bold text-base sm:text-lg text-[#0A1128]">
                      {faq.question}
                    </span>

                    <span
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-[#FF631C] text-white rotate-180"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-1 text-sm sm:text-base text-slate-600 font-manrope leading-relaxed border-t border-slate-200/60 mt-2">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
