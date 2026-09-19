"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ServicesMegaMenu, servicesGroups } from "./ui/ServicesMegaMenu";

const socialLinks = [
  { label: "Twitter", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const lastScrollY = useRef(0);

  // Close mobile menu on screen resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle smart navbar hide/reveal on scroll
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - lastScrollY.current;

        if (currentScrollY <= 40) {
          setVisible(true);
          setScrolled(false);
        } else {
          setScrolled(true);

          if (open) {
            setVisible(true);
          } else if (delta > 8) {
            setVisible(false);
          } else if (delta < -8) {
            setVisible(true);
          }
        }

        lastScrollY.current = Math.max(0, currentScrollY);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  // Reset services expansion when menu closes
  useEffect(() => {
    if (!open) setServicesExpanded(false);
  }, [open]);

  // Lock body & document scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;

      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
      };
    }
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const toggleMenu = () => {
    setOpen((prev) => {
      const next = !prev;
      if (!next) {
        setVisible(true);
        if (typeof window !== "undefined") {
          lastScrollY.current = window.scrollY;
        }
      }
      return next;
    });
  };

  const handleNavClick = (href: string) => {
    setOpen(false);
    setVisible(true);
    if (typeof window !== "undefined") {
      lastScrollY.current = window.scrollY;
      if (href.startsWith("/#")) {
        const id = href.replace("/#", "");
        const el = document.getElementById(id);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 60);
        }
      }
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          visible || open
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        } ${
          open
            ? "border-b border-white/10 bg-[#07112C]"
            : scrolled
            ? "border-b border-white/10 bg-[#07112C]/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
            : "border-b border-transparent bg-transparent shadow-none"
        }`}
      >
        <div className="mx-auto flex h-20 w-full max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] items-center justify-between px-6 sm:px-8 lg:px-12 transition-all">
          {/* Left Column: Brand Logo */}
          <div className="flex items-center flex-1 justify-start">
            <Link
              href="/"
              onClick={() => handleNavClick("/")}
              className="group relative z-10 flex items-center shrink-0 focus-visible:outline-none"
            >
              <Image
                src="/fusion-folio-logo.png"
                alt="Fusion Folio"
                width={180}
                height={38}
                className="h-7 sm:h-8 w-auto object-contain transition-transform duration-200 group-hover:opacity-90"
                priority
              />
            </Link>
          </div>

          {/* Center Column: Desktop Navigation Links (Always centered on large screens) */}
          <nav
            className="hidden md:flex items-center justify-center gap-1 lg:gap-1.5 shrink-0"
            aria-label="Desktop Navigation"
          >
            <Link
              href="/work"
              className={`whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-medium transition-colors duration-200 focus-visible:outline-none lg:px-4 lg:text-sm ${
                pathname === "/work" || pathname.startsWith("/work/")
                  ? "bg-white/15 text-white font-semibold"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              Work
            </Link>
            <ServicesMegaMenu />
            <Link
              href="/about"
              className={`whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-medium transition-colors duration-200 focus-visible:outline-none lg:px-4 lg:text-sm ${
                pathname === "/about"
                  ? "bg-white/15 text-white font-semibold"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              About
            </Link>
            <Link
              href="/process"
              className={`whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-medium transition-colors duration-200 focus-visible:outline-none lg:px-4 lg:text-sm ${
                pathname === "/process"
                  ? "bg-white/15 text-white font-semibold"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              Process
            </Link>
            <Link
              href="/contact"
              className={`whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-medium transition-colors duration-200 focus-visible:outline-none lg:px-4 lg:text-sm ${
                pathname === "/contact"
                  ? "bg-white/15 text-white font-semibold"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Column: Desktop CTA Button & Mobile Hamburger Toggle */}
          <div className="flex items-center flex-1 justify-end">
            <div className="hidden md:block">
              <Link
                href="/contact"
                onClick={() => handleNavClick("/contact")}
                className="group inline-flex items-center gap-2 rounded-full bg-[#FF5500] hover:bg-[#FF4500] text-white px-5 py-2.5 text-xs lg:text-sm font-medium transition-all shadow-[0_2px_14px_rgba(255,85,0,0.35)] hover:scale-105 active:scale-95 cursor-pointer shrink-0 whitespace-nowrap"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation-menu"
              onClick={toggleMenu}
              className="relative z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/5 hover:bg-white/10 active:scale-90 border border-white/10 transition-all text-white md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5500]"
            >
              <div className="relative w-5 h-4 flex flex-col justify-between items-center pointer-events-none">
                <span
                  className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-300 ease-out origin-center ${
                    open ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-200 ease-out ${
                    open ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-300 ease-out origin-center ${
                    open ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#07112C] text-white md:hidden overflow-y-auto overflow-x-hidden overscroll-contain"
          >
            {/* Ambient Background Glows (contained to prevent horizontal overflow) */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
              <div className="absolute -top-16 -right-16 h-72 w-72 rounded-full bg-[#6030ff]/20 blur-3xl" />
              <div className="absolute top-1/2 -left-20 h-72 w-72 rounded-full bg-[#ff5500]/15 blur-3xl" />
              <div className="absolute bottom-10 right-0 h-64 w-64 rounded-full bg-[#6030ff]/15 blur-3xl" />
            </div>

            <div className="relative z-10 flex min-h-full flex-col pt-24 pb-8 px-6 sm:px-8 max-w-lg mx-auto w-full">
              {/* Main Nav Links & Accordion */}
              <nav className="flex flex-col divide-y divide-white/10 shrink-0">
                {/* 01 Work */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04, duration: 0.25 }}
                  className="py-1"
                >
                  <Link
                    href="/work"
                    onClick={() => handleNavClick("/work")}
                    className="group flex items-center justify-between py-3.5 text-2xl sm:text-3xl font-semibold tracking-tight text-white transition-colors hover:text-[#FF5500] focus-visible:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-white/30">01</span>
                      <span>Work</span>
                    </div>
                    <ArrowUpRight
                      size={22}
                      className="text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FF5500]"
                    />
                  </Link>
                </motion.div>

                {/* 02 Services (Expandable) */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08, duration: 0.25 }}
                  className="py-1"
                >
                  <button
                    type="button"
                    aria-expanded={servicesExpanded}
                    aria-controls="mobile-services-accordion"
                    onClick={() => setServicesExpanded((prev) => !prev)}
                    className="group flex w-full items-center justify-between py-3.5 text-2xl sm:text-3xl font-semibold tracking-tight text-white transition-colors hover:text-[#FF5500] focus-visible:outline-none cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-white/30">02</span>
                      <span>Services</span>
                      <span className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] font-medium text-white/60 tracking-normal group-hover:bg-[#FF5500]/20 group-hover:text-[#FF5500] transition-colors">
                        6
                      </span>
                    </div>
                    <ChevronDown
                      size={22}
                      className={`text-white/40 transition-transform duration-300 group-hover:text-[#FF5500] ${
                        servicesExpanded ? "rotate-180 text-[#FF5500]" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {servicesExpanded && (
                      <motion.div
                        id="mobile-services-accordion"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: { height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.2 } },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: { height: { duration: 0.25, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.15 } },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-3.5 pt-2 pb-5">
                          {servicesGroups.map((group) => (
                            <div
                              key={group.label}
                              className="flex flex-col gap-2 rounded-xl bg-white/[0.03] border border-white/5 p-3.5"
                            >
                              <span className="text-[11px] font-bold tracking-wider text-[#FF5500] uppercase">
                                {group.label}
                              </span>
                              <div className="flex flex-col divide-y divide-white/5">
                                {group.items.map((item) => (
                                  <a
                                    key={item.title}
                                    href={item.href}
                                    onClick={() => handleNavClick(item.href)}
                                    className="group/item flex items-center justify-between py-2.5 text-sm font-medium text-white/80 transition-colors hover:text-white"
                                  >
                                    <div className="flex items-center gap-2.5">
                                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-white/50 group-hover/item:bg-[#FF5500]/15 group-hover/item:text-[#FF5500] transition-colors">
                                        <item.icon size={15} />
                                      </div>
                                      <div>
                                        <span className="block text-sm font-medium text-white group-hover/item:text-[#FF5500] transition-colors">
                                          {item.title}
                                        </span>
                                        <span className="block text-[11px] text-white/40 leading-tight">
                                          {item.description}
                                        </span>
                                      </div>
                                    </div>
                                    <ArrowRight
                                      size={14}
                                      className="text-white/30 shrink-0 group-hover/item:text-[#FF5500] group-hover/item:translate-x-0.5 transition-all"
                                    />
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}

                          <Link
                            href="/services"
                            onClick={() => handleNavClick("/services")}
                            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] py-2.5 text-xs font-semibold text-white/70 hover:text-[#FF5500] hover:border-[#FF5500]/30 transition-all"
                          >
                            <span>Explore all capabilities</span>
                            <ArrowRight size={13} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* 03 About */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12, duration: 0.25 }}
                  className="py-1"
                >
                  <Link
                    href="/about"
                    onClick={() => handleNavClick("/about")}
                    className="group flex items-center justify-between py-3.5 text-2xl sm:text-3xl font-semibold tracking-tight text-white transition-colors hover:text-[#FF5500] focus-visible:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-white/30">03</span>
                      <span>About</span>
                    </div>
                    <ArrowUpRight
                      size={22}
                      className="text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FF5500]"
                    />
                  </Link>
                </motion.div>

                {/* 04 Process */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.16, duration: 0.25 }}
                  className="py-1"
                >
                  <Link
                    href="/process"
                    onClick={() => handleNavClick("/process")}
                    className="group flex items-center justify-between py-3.5 text-2xl sm:text-3xl font-semibold tracking-tight text-white transition-colors hover:text-[#FF5500] focus-visible:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-white/30">04</span>
                      <span>Process</span>
                    </div>
                    <ArrowUpRight
                      size={22}
                      className="text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FF5500]"
                    />
                  </Link>
                </motion.div>

                {/* 05 Contact */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.25 }}
                  className="py-1"
                >
                  <Link
                    href="/contact"
                    onClick={() => handleNavClick("/contact")}
                    className="group flex items-center justify-between py-3.5 text-2xl sm:text-3xl font-semibold tracking-tight text-white transition-colors hover:text-[#FF5500] focus-visible:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-white/30">05</span>
                      <span>Contact</span>
                    </div>
                    <ArrowUpRight
                      size={22}
                      className="text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FF5500]"
                    />
                  </Link>
                </motion.div>
              </nav>

              {/* Bottom CTA & Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24, duration: 0.25 }}
                className="mt-auto pt-8 flex flex-col gap-6 shrink-0"
              >
                <Link
                  href="/contact"
                  onClick={() => handleNavClick("/contact")}
                  className="group flex items-center justify-center gap-2 rounded-full bg-[#FF5500] hover:bg-[#FF4500] active:scale-98 text-white px-6 py-3.5 font-semibold text-base shadow-[0_4px_20px_rgba(255,85,0,0.4)] transition-all w-full cursor-pointer"
                >
                  <span>Let&apos;s Talk</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

                <div className="flex items-center justify-between border-t border-white/10 pt-4 pb-2">
                  <div className="flex items-center gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-medium text-white/50 transition-colors hover:text-white"
                      >
                        {social.label}
                      </a>
                    ))}
                  </div>
                  <span className="text-[11px] text-white/30">© {new Date().getFullYear()} Fusion Folio</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
