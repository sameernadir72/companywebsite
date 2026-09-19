"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BrainCircuit,
  Blocks,
  ChevronDown,
  Clapperboard,
  Layers,
  LayoutTemplate,
  Palette,
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
 * Grounded in the six capabilities already defined in `Services.tsx` (each
 * item links to that capability's card via the `id`s added there), grouped
 * into three disciplines the way the reference layout groups its services.
 */
export const servicesGroups: ServiceGroup[] = [
  {
    label: "Design services",
    pillClassName: "bg-mint text-on-mint",
    items: [
      {
        title: "Web design",
        description: "Marketing sites, product sites, and design systems built to convert.",
        href: "/#web",
        icon: LayoutTemplate,
      },
      {
        title: "Brand & identity",
        description: "Logotypes, visual systems, and guidelines that hold together.",
        href: "/#brand",
        icon: Palette,
      },
    ],
  },
  {
    label: "Platform & product",
    pillClassName: "bg-gradient-accent text-on-primary",
    items: [
      {
        title: "SaaS platforms",
        description: "Full-stack product engineering, wireframe to production.",
        href: "/#saas",
        icon: Layers,
      },
      {
        title: "Blockchain & Web3",
        description: "Smart contracts, wallets, and on-chain dashboards.",
        href: "/#chain",
        icon: Blocks,
      },
    ],
  },
  {
    label: "AI & motion",
    pillClassName: "bg-ink-soft text-white",
    items: [
      {
        title: "AI-powered apps",
        description: "Copilots and agentic workflows woven into your product.",
        href: "/#ai",
        icon: BrainCircuit,
      },
      {
        title: "AI video & graphic design",
        description: "Brand video and motion graphics at agency polish.",
        href: "/#motion",
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
        className={`flex cursor-pointer items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none ${
          open ? "bg-white/10 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
        }`}
      >
        Services
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <div
        ref={panelRef}
        className="invisible fixed top-[92px] left-1/2 z-50 w-[min(880px,calc(100vw-2rem))] -translate-x-1/2 rounded-2xl border border-border bg-surface p-6 opacity-0 shadow-card-elevated"
      >
        <div className="grid grid-cols-3 gap-8">
          {servicesGroups.map((group) => (
            <div key={group.label} className="flex flex-col gap-4">
              <span className={`inline-flex w-fit items-center rounded-full px-4 py-2 text-sm font-semibold ${group.pillClassName}`}>
                {group.label}
              </span>
              <div className="flex flex-col">
                {group.items.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group/item flex items-start justify-between gap-3 border-b border-border/60 py-4 first:pt-0 last:border-0"
                  >
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-semibold text-primary group-hover/item:text-accent">
                        {item.title}
                      </span>
                      <span className="text-xs leading-snug text-muted">{item.description}</span>
                    </div>
                    <item.icon
                      size={18}
                      className="mt-0.5 shrink-0 text-muted transition-colors group-hover/item:text-accent"
                    />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/services"
          onClick={() => setOpen(false)}
          className="mt-6 flex items-center justify-center gap-1.5 rounded-full border border-border py-3 text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
        >
          View all services
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}
