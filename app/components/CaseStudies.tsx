"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Tag } from "./ui/Tag";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stories = [
  {
    code: "SAAS",
    metric: "+78%",
    metricLabel: "activation after platform rebuild",
    quote:
      "Vertex rebuilt our entire SaaS platform — architecture, UI, and billing — in six weeks. Same team that designed it shipped it.",
    name: "Maya Chen",
    role: "Head of Product, Circuit",
  },
  {
    code: "AI",
    metric: "40%",
    metricLabel: "support volume deflected by AI copilot",
    quote:
      "They wove an AI copilot straight into our product instead of bolting on a chat widget. Users can't tell where the AI starts.",
    name: "Diego Ramirez",
    role: "Founder, Solace AI",
  },
  {
    code: "CHAIN",
    metric: "12 days",
    metricLabel: "from spec to audited smart contract",
    quote:
      "The on-chain dashboard and the marketing site launched together, pixel-matched, from one team — that never happens with Web3 vendors.",
    name: "Priya Anand",
    role: "CTO, Meridian Chain",
  },
];

export function CaseStudies() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScroll, setCanScroll] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onUpdate = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScroll(emblaApi.canScrollPrev() || emblaApi.canScrollNext());
    };
    emblaApi.on("select", onUpdate);
    emblaApi.on("reInit", onUpdate);
    onUpdate();
    return () => {
      emblaApi.off("select", onUpdate);
      emblaApi.off("reInit", onUpdate);
    };
  }, [emblaApi]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(gsap.utils.toArray<HTMLElement>(".case-card"), {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "top 85%",
          },
        });
      });
    }, carouselRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" className="bg-muted-bg py-24 sm:py-32">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading align="left" eyebrow="Results" title="Real products, real numbers" />
            <div className={`flex gap-3 self-start sm:self-auto ${canScroll ? "" : "hidden"}`}>
              <button
                type="button"
                aria-label="Previous story"
                onClick={scrollPrev}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface text-primary shadow-tight transition-all duration-300 hover:-translate-x-0.5 hover:border-transparent hover:bg-gradient-accent hover:text-on-primary cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                type="button"
                aria-label="Next story"
                onClick={scrollNext}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface text-primary shadow-tight transition-all duration-300 hover:translate-x-0.5 hover:border-transparent hover:bg-gradient-accent hover:text-on-primary cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </Reveal>

        <div className="overflow-hidden" ref={emblaRef}>
          <div ref={carouselRef} className="flex gap-6">
            {stories.map((story) => (
              <div
                key={story.name}
                className="case-card min-w-0 shrink-0 grow-0 basis-full sm:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)]"
              >
                <div className="group flex h-full flex-col gap-6 rounded-xl border border-border bg-surface p-8 shadow-card-elevated transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent transition-all duration-300 group-hover:bg-gradient-accent group-hover:text-on-primary">
                      <Quote size={20} />
                    </span>
                    <Tag>{story.code}</Tag>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-display text-3xl font-semibold text-gradient">
                      {story.metric}
                    </span>
                    <span className="text-sm text-muted">{story.metricLabel}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-secondary">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                  <div className="mt-auto flex items-center gap-3 border-t border-border pt-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted-bg text-sm font-semibold text-primary">
                      {story.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-primary">{story.name}</span>
                      <span className="text-xs text-muted">{story.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`flex justify-center gap-2 ${canScroll ? "" : "hidden"}`}>
          {stories.map((story, i) => (
            <button
              key={story.name}
              type="button"
              aria-label={`Go to story ${i + 1}`}
              aria-current={selectedIndex === i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                selectedIndex === i ? "w-6 bg-gradient-accent" : "w-2 bg-muted/30 hover:bg-muted/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
