"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const bentoItems = [
  {
    title: "Stationery & Cards",
    category: "Brand Identity",
    image: "/Button - View The Art of Expression, Print & Booklets.png",
    colSpan: "col-span-12 sm:col-span-6 lg:col-span-7",
    aspect: "aspect-[16/10]",
  },
  {
    title: "Industrial Logistics",
    category: "Large Format",
    image: "/Button - View The Art of Expression, Print & Booklets-8.png",
    colSpan: "col-span-12 sm:col-span-6 lg:col-span-5",
    aspect: "aspect-[16/10]",
  },
  {
    title: "Mobile App Experience",
    category: "Digital UI/UX",
    image: "/Button - View The Art of Expression, Print & Booklets-9.png",
    colSpan: "col-span-12 sm:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Brand Icon & Mark",
    category: "Logomark",
    image: "/Button - View CyberG, Logos & Branding.png",
    colSpan: "col-span-12 sm:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Editorial & Lookbook",
    category: "Print Media",
    image: "/Button - View The Art of Expression, Print & Booklets-14.png",
    colSpan: "col-span-12 sm:col-span-4",
    aspect: "aspect-[4/3]",
  },
];

export function OnDemandCreativeSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 sm:py-28">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-orange-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-start text-left"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-[0.2em] text-[#FF631C] uppercase mb-4 font-manrope">
              <span>WHY GET A CREATIVE TEAM?</span>
            </div>

            {/* Headline */}
            <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[56px] tracking-tight leading-[1.08] text-[#0A1128]">
              Your on-demand{" "}
              <span className="font-serif italic font-normal text-[#FF631C]">
                creative team
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 font-manrope leading-relaxed max-w-lg">
              Scale your design and content output without the overhead of hiring. Get senior-level designers and writers dedicated to your brand.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#FF631C] hover:bg-[#E55210] text-white px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(255,99,28,0.38)] hover:shadow-[0_14px_30px_-5px_rgba(255,99,28,0.52)] hover:-translate-y-0.5 cursor-pointer font-manrope"
              >
                <span>Book a Strategy Call</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#gallery"
                className="group inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#005DFF] hover:text-[#0048C7] transition-colors font-manrope"
              >
                <span>View our work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Branded Deliverables Bento Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 w-full"
          >
            <div className="grid grid-cols-12 gap-4 sm:gap-5">
              {bentoItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`${item.colSpan} group relative overflow-hidden rounded-[20px] bg-slate-50 border border-slate-200/80 shadow-[0_4px_18px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className={`relative ${item.aspect} w-full overflow-hidden bg-slate-100`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 35vw, 50vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="absolute bottom-3 left-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-[11px] font-manrope font-bold text-[#005DFF] shadow-sm">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
