"use client";

import Link from "next/link";
import { ArrowRight, ArrowUp } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

interface NavColumn {
  title: string;
  links: NavLink[];
}

const navColumns: NavColumn[] = [
  {
    title: "Explore",
    links: [
      { label: "Work", href: "/work" },
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Process", href: "/process" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Brand & Identity", href: "/services#brand" },
      { label: "Web Development", href: "/services#web" },
      { label: "UI/UX Design", href: "/services#uiux" },
      { label: "Reels & Short-Form", href: "/services#reels" },
      { label: "2D Motion Graphics", href: "/services#motion" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Core Principles", href: "/about" },
      { label: "Craft Leads", href: "/about" },
      { label: "Studio Timeline", href: "/about" },
    ],
  },
  {
    title: "Process",
    links: [
      { label: "5-Phase Framework", href: "/process#phases" },
      { label: "Sprint Cadence", href: "/process" },
      { label: "Deliverables QA", href: "/process" },
      { label: "Launch Support", href: "/process" },
    ],
  },
];

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative w-full overflow-hidden bg-[#040C20] text-white isolate">
      {/* Background Graphic with Glowing Ribbons & Waves matching the design */}
      <div
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat pointer-events-none z-0"
        style={{ backgroundImage: "url('/Footer.jpeg')" }}
      />

      {/* Main Container */}
      <div className="relative z-10 mx-auto w-fullmax-w-340 px-6 sm:px-10 lg:px-12 pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12">
        {/* Top Grid: Tagline + 4 Navigation Columns + Divider + CTA Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-8 xl:gap-12">
          {/* Left Column: Slogan / Tagline */}
          <div className="w-full lg:w-auto lg:max-w-[220px] shrink-0 pt-1">
            <p className="text-sm sm:text-[15px] font-normal text-white/70 leading-relaxed tracking-wide">
              Web. Experience. Motion. Growth.
            </p>
          </div>

          {/* Middle Navigation Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6 lg:gap-8 xl:gap-14 flex-1 w-full lg:w-auto">
            {navColumns.map((col) => (
              <div key={col.title} className="flex flex-col gap-3.5 sm:gap-4">
                <span className="text-base font-semibold text-white tracking-tight">
                  {col.title}
                </span>
                <ul className="flex flex-col gap-2.5 sm:gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/70 transition-colors duration-200 hover:text-white inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Column: Divider + CTA Card */}
          <div className="flex flex-col lg:flex-row items-stretch w-full lg:w-auto shrink-0">
            {/* Vertical Divider line */}
            <div className="hidden lg:block w-px bg-white/15 mr-8 xl:mr-12 self-stretch" />

            <div className="w-full sm:max-w-[320px] lg:max-w-[280px] xl:max-w-[310px] flex flex-col items-start pt-1">
              <h3 className="font-display text-2xl sm:text-[28px] lg:text-[30px] font-bold text-white tracking-tight leading-[1.15] mb-3 sm:mb-4">
                Have something
                <br />
                in mind?
              </h3>

              <p className="text-sm sm:text-[15px] text-blue-100/75 leading-relaxed font-normal mb-6 sm:mb-7">
                Let&apos;s start a conversation and explore what&apos;s possible together.
              </p>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#FF5500] hover:bg-[#E03E00] text-white border border-[#FF5500] hover:border-[#FF6A1A] px-7 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base font-medium shadow-[0_4px_24px_rgba(255,85,0,0.35)] hover:shadow-[0_8px_32px_rgba(255,85,0,0.55)] transition-all duration-300 ease-out cursor-pointer"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-16 sm:mt-20 lg:mt-24 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-white/50 font-light">
            © 2026 FusionFolio. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm text-white/60 hover:text-white transition-colors duration-200 cursor-pointer self-start sm:self-auto"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
