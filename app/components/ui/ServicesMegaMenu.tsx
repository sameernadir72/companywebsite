"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronDown,
  Clapperboard,
  Layout,
  MessageSquare,
  Monitor,
  PenTool,
  PlaySquare,
  type LucideIcon,
} from "lucide-react";
import gsap from "gsap";

type ServiceItem = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

type ServiceGroup = {
  label: string;
  pillClassName: string;
  items: ServiceItem[];
};

/**
 * Grounded in the six capabilities defined in `lib/services.ts`,
 * deep-linking to each discipline section on `/services` (`scroll-mt-28`).
 */
export const servicesGroups: ServiceGroup[] = [
  {
    label: "Identity & Experience",
    pillClassName: "bg-[#FF5500]/15 text-[#FF5500] border border-[#FF5500]/30",
    items: [
      {
        title: "Brand & Graphic Design",
        description: "A visual identity that feels unmistakably yours.",
        href: "/services#brand",
        icon: PenTool,
      },
      {
        title: "UI/UX Product Design",
        description: "Thoughtful experiences. Effortless interactions.",
        href: "/services#uiux",
        icon: Layout,
      },
    ],
  },
  {
    label: "Digital & Social",
    pillClassName: "bg-[#185BFF]/20 text-[#60A5FA] border border-[#185BFF]/35",
    items: [
      {
        title: "Website Development",
        description: "A strong digital home, built around your business.",
        href: "/services#web",
        icon: Monitor,
      },
      {
        title: "Social Media Design",
        description: "A consistent presence with something to say.",
        href: "/services#social",
        icon: MessageSquare,
      },
    ],
  },
  {
    label: "Motion & Content",
    pillClassName: "bg-white/10 text-white border border-white/20",
    items: [
      {
        title: "Reels, Viral Creative & UGC",
        description: "Short-form stories made for real attention.",
        href: "/services#reels",
        icon: PlaySquare,
      },
      {
        title: "2D Animation & Motion",
        description: "Bring personality, clarity, and movement to your message.",
        href: "/services#motion",
        icon: Clapperboard,
      },
    ],
  },
];

/** Desktop-only mega menu: hover or click "Services" to reveal a panel grouping the six capabilities into three disciplines. */
export function ServicesMegaMenu() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openNow = () => {
    clearCloseTimer();
    setOpen(true);
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  // Click-outside and Escape both close the panel; click-outside matters
  // most for touch/keyboard users who opened it via click rather than hover.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onPointerDown = (e: PointerEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  useLayoutEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      if (open) {
        gsap.fromTo(panel, { autoAlpha: 0, y: -8 }, { autoAlpha: 1, y: 0, duration: 0.25, ease: "power2.out" });
      } else {
        gsap.to(panel, { autoAlpha: 0, y: -8, duration: 0.15, ease: "power2.in" });
      }
    });
    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(panel, { autoAlpha: open ? 1 : 0 });
    });
    return () => mm.revert();
  }, [open]);

  return (
    <div ref={wrapRef} className="relative" onMouseEnter={openNow} onMouseLeave={scheduleClose}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className={`flex cursor-pointer items-center gap-1 rounded-full px-3.5 py-2 text-xs font-medium transition-colors duration-200 focus-visible:outline-none lg:px-4 lg:text-sm ${
          open ? "bg-white/15 text-white font-semibold" : "text-white/80 hover:bg-white/10 hover:text-white"
        }`}
      >
        Services
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180 text-[#FF5500]" : ""}`} />
      </button>

      <div
        ref={panelRef}
        className="invisible fixed top-[88px] left-1/2 z-50 w-[min(920px,calc(100vw-2rem))] -translate-x-1/2 rounded-3xl border border-white/15 bg-[#07112C]/95 backdrop-blur-2xl p-7 opacity-0 shadow-[0_24px_64px_rgba(0,0,0,0.6)] text-white"
      >
        <div className="grid grid-cols-3 gap-7">
          {servicesGroups.map((group) => (
            <div key={group.label} className="flex flex-col gap-4">
              <span className={`inline-flex w-fit items-center rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider ${group.pillClassName}`}>
                {group.label}
              </span>
              <div className="flex flex-col divide-y divide-white/10">
                {group.items.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group/item flex items-start justify-between gap-3 py-4 first:pt-1 last:pb-0"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-semibold text-white transition-colors group-hover/item:text-[#FF5500]">
                        {item.title}
                      </span>
                      <span className="text-xs leading-relaxed text-white/60">{item.description}</span>
                    </div>
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-white/60 transition-colors group-hover/item:bg-[#FF5500]/15 group-hover/item:text-[#FF5500]">
                      <item.icon size={16} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/services"
          onClick={() => setOpen(false)}
          className="mt-6 flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] py-3 text-sm font-semibold text-white transition-all hover:border-[#FF5500] hover:bg-[#FF5500] hover:text-white"
        >
          <span>Explore All 6 Capabilities</span>
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}
