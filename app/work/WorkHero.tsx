"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function WorkHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-[#0A1128] pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24 min-h-[700px] lg:min-h-[780px] xl:min-h-[832px] flex items-center">
      {/* Background Luminous Wave - Frame 3 Exact Figma Spec */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <Image
          src="/work/hero-wave-bg.png"
          alt="Fusion Folio Wave Ambient Glow"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-top w-full h-full"
        />
        {/* Soft bottom edge blend into next section */}
        <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 mx-auto w-full max-w-[1571px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">
          {/* Left Column: Eyebrow, Headline, Subhead, CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-6 flex flex-col items-start text-left z-10"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-[0.2em] text-[#FF631C] uppercase mb-4 sm:mb-5 font-manrope">
              <span className="text-base sm:text-lg leading-none font-extrabold">+</span>
              <span>OUR WORK</span>
            </div>

            {/* Headline - Exact Figma Specs: Manrope, 400, 90.37px, leading 90.83px, tracking -3.33px */}
            <h1 className="font-manrope font-normal text-[36px] sm:text-[52px] md:text-[66px] lg:text-[76px] xl:text-[90.37px] leading-[1.04] xl:leading-[90.83px] tracking-[-0.035em] xl:tracking-[-3.33px] text-[#0A1128]">
              Ideas brought
              <br />
              to life,{" "}
              <span className="text-[#005DFF] font-bold drop-shadow-[0_4px_24px_rgba(0,93,255,0.22)]">
                beautifully.
              </span>
            </h1>

            {/* Subhead */}
            <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-[18px] xl:text-[19px] text-[#475569] leading-relaxed max-w-[540px] font-normal font-manrope">
              Over 10,000+ designs created by our multi-million creative team for growing businesses around the globe.
            </p>

            {/* Action CTA */}
            <div className="mt-8 sm:mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#FF631C] hover:bg-[#E55210] text-white px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(255,99,28,0.38)] hover:shadow-[0_14px_30px_-5px_rgba(255,99,28,0.52)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Exact Mockup Specs (775px x 516.67px in Figma) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-6 flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[560px] sm:max-w-[640px] lg:max-w-[720px] xl:w-[775px] xl:h-[516.67px] transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/work/hero-cards-showcase.png"
                alt="Fusion Folio Featured Creations — Real brands. Real results."
                width={775}
                height={517}
                priority
                sizes="(min-width: 1280px) 775px, (min-width: 1024px) 50vw, 100vw"
                className="w-full h-auto xl:h-[516.67px] object-contain drop-shadow-[0_24px_55px_rgba(0,0,0,0.16)] select-none pointer-events-none"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
