"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  LayoutTemplate,
  Layers,
  BrainCircuit,
  Blocks,
  Clapperboard,
  Palette,
  type LucideIcon,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Tag } from "./ui/Tag";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Capability = {
  code: string;
  icon: LucideIcon;
  title: string;
  description: string;
  stack: string;
  span: string;
  surface: string;
  dark?: boolean;
  /** Drop an image at this path to replace the icon watermark. */
  image?: string;
};

const capabilities: Capability[] = [
  {
    code: "WEB",
    icon: LayoutTemplate,
    title: "Web Design & Digital Experience",
    description:
      "Marketing sites, product sites, and design systems built to convert — not just to look good in a portfolio.",
    stack: "Figma · Webflow · Next.js",
    span: "lg:col-span-1",
    surface: "bg-surface-alt",
  },
  {
    code: "SAAS",
    icon: Layers,
    title: "SaaS Platform Design & Build",
    description:
      "Full-stack product engineering — dashboards, billing, permissions, multi-tenant architecture — from first wireframe to production.",
    stack: "Next.js · Node · PostgreSQL",
    span: "lg:col-span-2",
    surface: "bg-gradient-card-purple",
    dark: true,
  },
  {
    code: "AI",
    icon: BrainCircuit,
    title: "AI-Powered Web Applications",
    description:
      "Copilots, retrieval, and agentic workflows woven directly into your product, not bolted on as a chat widget.",
    stack: "OpenAI · Claude · LangChain",
    span: "lg:col-span-1",
    surface: "bg-accent-soft",
  },
  {
    code: "CHAIN",
    icon: Blocks,
    title: "Blockchain & Web3 Products",
    description:
      "Smart contracts, token-gated experiences, wallet integrations, and on-chain dashboards, audited and production-ready.",
    stack: "Solidity · EVM · IPFS",
    span: "lg:col-span-1",
    surface: "bg-mint/12",
  },
  {
    code: "MOTION",
    icon: Clapperboard,
    title: "AI Video & Graphic Design",
    description:
      "Brand video, generative motion graphics, and campaign creative produced with AI-accelerated pipelines at agency polish.",
    stack: "Runway · Midjourney · After Effects",
    span: "lg:col-span-1",
    surface: "bg-muted-bg",
  },
  {
    code: "BRAND",
    icon: Palette,
    title: "Brand & Identity",
    description:
      "Logotypes, visual systems, and guidelines that hold together across every surface your product ships on.",
    stack: "Identity · Type · Guidelines",
    span: "lg:col-span-3",
    surface: "bg-ink-soft",
    dark: true,
  },
];

function CapabilityVisual({ cap }: { cap: Capability }) {
  const [errored, setErrored] = useState(false);

  if (cap.image && !errored) {
    return (
      <Image
        src={cap.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 33vw, 90vw"
        className="object-cover"
        onError={() => setErrored(true)}
      />
    );
  }

  const Icon = cap.icon;
  return (
    <Icon
      aria-hidden
      size={128}
      strokeWidth={1}
      className={`pointer-events-none absolute -bottom-6 -right-6 ${
        cap.dark ? "text-white/10" : "text-primary/[0.06]"
      }`}
    />
  );
}

export function Services() {
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".capability-card");

        gsap.set(cards, {
          rotateX: -85,
          y: 24,
          opacity: 0,
          transformOrigin: "top center",
        });

        ScrollTrigger.batch(cards, {
          start: "top 88%",
          batchMax: 1,
          onEnter: (batch) =>
            gsap.to(batch, {
              rotateX: 0,
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power3.out",
              clearProps: "transform",
            }),
        });
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="capabilities" className="relative overflow-hidden py-24 sm:py-32">
      <Container className="relative flex flex-col gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Our Services"
            title="Six disciplines, one accountable team"
            description="Every capability a premium digital product needs — design, engineering, applied AI, and Web3 — under a single roof."
          />
        </Reveal>

        <div ref={gridRef} className="grid gap-5 perspective-distant sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              id={cap.code.toLowerCase()}
              className={`capability-card group relative flex h-full scroll-mt-28 flex-col gap-5 overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${cap.span} ${cap.surface} ${
                cap.dark ? "hover:shadow-black/20" : "hover:shadow-accent/10"
              }`}
            >
              <CapabilityVisual cap={cap} />

              <div className="relative flex items-start justify-between gap-3">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110 ${
                    cap.dark
                      ? "bg-white/15 text-on-primary backdrop-blur-sm"
                      : "bg-surface text-accent"
                  }`}
                >
                  <cap.icon size={20} />
                </div>
                <Tag variant={cap.dark ? "dark" : "light"}>{cap.code}</Tag>
              </div>

              <div className="relative flex flex-col gap-1.5">
                <h3
                  className={`font-display text-lg font-semibold ${
                    cap.dark ? "text-on-primary" : "text-primary"
                  }`}
                >
                  {cap.title}
                </h3>
                <p
                  className={`max-w-md text-sm leading-relaxed ${
                    cap.dark ? "text-on-ink-muted" : "text-muted"
                  }`}
                >
                  {cap.description}
                </p>
              </div>

              <span
                className={`relative mt-auto border-t pt-4 font-mono text-[11px] ${
                  cap.dark ? "border-white/15 text-on-ink-muted" : "border-border/70 text-muted/80"
                }`}
              >
                {cap.stack}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
