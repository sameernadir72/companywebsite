"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CaseStudy } from "@/lib/case-studies";

const categories = [
  "All",
  "Logo & Branding",
  "Web Design",
  "Social Media Graphics",
  "Print Materials",
  "Infographics",
  "Packaging",
  "Brand Identity",
  "UI/UX Design",
];

const figmaProjects = [
  {
    id: "proj-1",
    title: "Arabic Social Media Campaign",
    category: "Social Media Graphics",
    image: "/Button - View The Art of Expression, Print & Booklets.png",
  },
  {
    id: "proj-2",
    title: "Boost 100% Electric Automotive Billboard",
    category: "Web Design",
    image: "/Button - View The Art of Expression, Print & Booklets-1.png",
  },
  {
    id: "proj-3",
    title: "Organic Skincare & Cosmetics E-commerce",
    category: "Web Design",
    image: "/Button - View The Art of Expression, Print & Booklets-2.png",
  },
  {
    id: "proj-4",
    title: "Mineral Water Commercial Creative",
    category: "Social Media Graphics",
    image: "/Button - View The Art of Expression, Print & Booklets-3.png",
  },
  {
    id: "proj-5",
    title: "AVANX Modern Commerce Studio",
    category: "Logo & Branding",
    image: "/Button - View The Art of Expression, Print & Booklets-4.png",
  },
  {
    id: "proj-6",
    title: "Luxury Yachting & Hospitality Story",
    category: "Social Media Graphics",
    image: "/Button - View The Art of Expression, Print & Booklets-5.png",
  },
  {
    id: "proj-7",
    title: "Empower SaaS Cloud Operations Platform",
    category: "Web Design",
    image: "/Button - View The Art of Expression, Print & Booklets-6.png",
  },
  {
    id: "proj-8",
    title: "Workflow Analytics & Developer Architecture",
    category: "UI/UX Design",
    image: "/Button - View The Art of Expression, Print & Booklets-7.png",
  },
  {
    id: "proj-9",
    title: "Industrial Operations & Field Report",
    category: "Print Materials",
    image: "/Button - View The Art of Expression, Print & Booklets-8.png",
  },
  {
    id: "proj-10",
    title: "SPENDVEST Fintech Mobile Card System",
    category: "Packaging",
    image: "/Button - View The Art of Expression, Print & Booklets-9.png",
  },
  {
    id: "proj-11",
    title: "Logistics SaaS Fleet Management Dashboard",
    category: "UI/UX Design",
    image: "/Button - View The Art of Expression, Print & Booklets-10.png",
  },
  {
    id: "proj-12",
    title: "Greenova Nature Eco-Initiative Portal",
    category: "Web Design",
    image: "/Button - View The Art of Expression, Print & Booklets-11.png",
  },
  {
    id: "proj-13",
    title: "Shaping Tomorrow Clean Solar Grid",
    category: "Infographics",
    image: "/Button - View The Art of Expression, Print & Booklets-12.png",
  },
  {
    id: "proj-14",
    title: "Creator Economy Web Portfolio",
    category: "Web Design",
    image: "/Button - View The Art of Expression, Print & Booklets-13.png",
  },
  {
    id: "proj-15",
    title: "Greenova Wind Energy Brochure & Editorial",
    category: "Print Materials",
    image: "/Button - View The Art of Expression, Print & Booklets-14.png",
  },
  {
    id: "proj-16",
    title: "Botanical Skincare Brand Flagship",
    category: "Web Design",
    image: "/Button - View The Art of Expression, Print & Booklets-15.png",
  },
  {
    id: "proj-17",
    title: "Matcha Organic Eco Packaging",
    category: "Packaging",
    image: "/Button - View The Art of Expression, Print & Booklets-16.png",
  },
  {
    id: "proj-18",
    title: "Virtual Speaker Summit Poster Grid",
    category: "Social Media Graphics",
    image: "/Button - View The Art of Expression, Print & Booklets-17.png",
  },
  {
    id: "proj-19",
    title: "CyberG Logos & Identity System",
    category: "Logo & Branding",
    image: "/Button - View CyberG, Logos & Branding.png",
  },
  {
    id: "proj-20",
    title: "Designed to Go Places Illustration Series",
    category: "Brand Identity",
    image: "/Button - View Designed to Go Places, Illustrations.png",
  },
];

export function WorkShowcase({ initialCaseStudies }: { initialCaseStudies: CaseStudy[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? figmaProjects
      : figmaProjects.filter(
          (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <div className="flex flex-col gap-10 sm:gap-14">
      {/* Category Filter Navigation Bar (Figma Exact Styling) */}
      <div className="mx-auto flex w-full max-w-[1360px] flex-wrap items-center justify-center gap-2 sm:gap-3 px-6">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-manrope font-semibold transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#005DFF] ${
                isActive
                  ? "bg-[#005DFF] text-white shadow-lg shadow-blue-600/30 scale-105"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-[#005DFF] hover:bg-slate-50/80 shadow-sm"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* 3-Column Portfolio Gallery (Figma Exact 3-Column Grid) */}
      <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col"
              >
                <div className="group relative overflow-hidden rounded-[22px] bg-slate-50 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col">
                  {/* Project Image Showcase */}
                  <div className="relative aspect-[504/468] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    />

                    {/* Hover subtle glow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Category pill on hover */}
                    <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="rounded-full bg-white/95 backdrop-blur-md px-3.5 py-1 text-[11px] font-manrope font-bold uppercase tracking-wider text-[#005DFF] shadow-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* View prompt button on hover */}
                    <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 rounded-full bg-white text-[#0A1128] px-4 py-2 text-xs font-manrope font-bold opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 shadow-md">
                      <span>View</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#005DFF]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* The 21st Card: "And many more projects..." CTA Card */}
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <Link
                href="/contact"
                className="group relative overflow-hidden rounded-[22px] bg-slate-50 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(255,99,28,0.2)] hover:-translate-y-1.5 transition-all duration-300 h-full flex items-center justify-center aspect-[504/468]"
              >
                <Image
                  src="/addmore_Button.png"
                  alt="And many more projects... Start a Project"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
