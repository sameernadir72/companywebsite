"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { StatCounter } from "./ui/StatCounter";
import { Marquee } from "./ui/Marquee";
import { NodeGraph } from "./ui/NodeGraph";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { node: <StatCounter target={120} suffix="+" />, label: "products shipped" },
  { node: <StatCounter target={4.9} decimals={1} suffix="/5" />, label: "client rating" },
  { node: "3 wks", label: "avg. sprint to launch" },
  { node: "48h", label: "avg. first response" },
];

const logos = [
  "Halcyon",
  "Fathom Labs",
  "Circuit",
  "Solace AI",
  "Meridian Chain",
  "Northstar",
  "Vantage",
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const visualColRef = useRef<HTMLDivElement>(null);
  const nodeGraphWrapRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (nodeGraphWrapRef.current) {
        gsap.set(nodeGraphWrapRef.current, {
          transformPerspective: 900,
          rotateX: 8,
          rotateY: -12,
          transformStyle: "preserve-3d",
        });
      }

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(badgeRef.current, { y: -16, opacity: 0, duration: 0.6 })
          .from(
            lineRefs.current,
            { x: 24, opacity: 0, duration: 0.7, stagger: 0.14 },
            "-=0.35"
          )
          .from(paraRef.current, { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
          .from(
            ctaRef.current ? Array.from(ctaRef.current.children) : [],
            { y: 18, opacity: 0, duration: 0.55, stagger: 0.1 },
            "-=0.35"
          )
          .from(
            statsRef.current ? Array.from(statsRef.current.children) : [],
            { y: 14, opacity: 0, duration: 0.5, stagger: 0.08 },
            "-=0.3"
          )
          .from(nodeGraphWrapRef.current, { scale: 0.82, opacity: 0, duration: 0.9 }, "-=0.9")
          .from(
            sectionRef.current!.querySelectorAll(".ng-core"),
            { scale: 0, opacity: 0, duration: 0.5, transformOrigin: "center" },
            "-=0.55"
          )
          .from(
            sectionRef.current!.querySelectorAll(".ng-node"),
            { scale: 0, opacity: 0, duration: 0.45, stagger: 0.07, transformOrigin: "center" },
            "-=0.3"
          );

        gsap.to(nodeGraphWrapRef.current, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });

        const visualEl = visualColRef.current;
        const card = nodeGraphWrapRef.current;
        if (visualEl && card) {
          const setRotateX = gsap.quickTo(card, "rotateX", { duration: 0.6, ease: "power3" });
          const setRotateY = gsap.quickTo(card, "rotateY", { duration: 0.6, ease: "power3" });

          const handleMove = (e: PointerEvent) => {
            const rect = visualEl.getBoundingClientRect();
            const px = (e.clientX - rect.left) / rect.width - 0.5;
            const py = (e.clientY - rect.top) / rect.height - 0.5;
            setRotateY(-12 + px * 22);
            setRotateX(8 - py * 18);
          };
          const handleLeave = () => {
            setRotateX(8);
            setRotateY(-12);
          };

          visualEl.addEventListener("pointermove", handleMove);
          visualEl.addEventListener("pointerleave", handleLeave);

          return () => {
            visualEl.removeEventListener("pointermove", handleMove);
            visualEl.removeEventListener("pointerleave", handleLeave);
          };
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="top" className="relative overflow-hidden bg-gradient-hero text-white">
      <Container className="relative flex flex-col gap-16 pt-40 pb-20 sm:pt-48 sm:pb-24 lg:flex-row lg:items-center lg:gap-12 lg:pt-52 lg:pb-28">
        <div className="flex flex-col items-start gap-8 lg:w-[52%]">
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 font-mono text-xs text-white/80 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-mint motion-safe:animate-pulse-dot" />
            2 partner slots open this quarter
          </div>

          <h1 className="font-display max-w-xl font-semibold tracking-tight">
            <span
              ref={(el) => {
                lineRefs.current[0] = el;
              }}
              className="block text-5xl leading-[0.95] sm:text-6xl md:text-[4.25rem]"
            >
              Six disciplines.
            </span>
            <span
              ref={(el) => {
                lineRefs.current[1] = el;
              }}
              className="block pl-4 text-4xl leading-[0.95] font-medium sm:pl-8 sm:text-5xl md:pl-12 md:text-6xl"
            >
              One{" "}
              <span className="text-gradient-mint motion-safe:animate-gradient-x">
                vertex.
              </span>
            </span>
            <span
              ref={(el) => {
                lineRefs.current[2] = el;
              }}
              className="block pl-8 text-3xl leading-[0.95] font-medium text-mint sm:pl-16 sm:text-4xl md:pl-24 md:text-5xl"
            >
              Shipped, not stitched.
            </span>
          </h1>

          <p ref={paraRef} className="max-w-lg text-lg leading-relaxed text-white/80">
            Vertex pairs world-class design with production-grade SaaS
            engineering, applied AI, and Web3 expertise — one accountable
            team instead of five different vendors.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button href="/contact" size="lg">
              Start a project
              <ArrowRight size={18} />
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              View capabilities
            </Button>
          </div>

          <div
            ref={statsRef}
            className="mt-2 flex w-full max-w-lg flex-wrap gap-y-6 border-t border-white/15 pt-8"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex min-w-28 flex-1 flex-col gap-1 ${
                  i > 0 ? "border-l border-white/15 pl-6" : ""
                }`}
              >
                <span className="font-mono text-xl sm:text-2xl font-medium text-white">
                  {stat.node}
                </span>
                <span className="text-xs leading-snug text-white/60">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={visualColRef}
          className="relative flex flex-1 items-center justify-center perspective-[1100px] lg:justify-end"
        >
          <div
            aria-hidden
            className="absolute inset-0 -z-10 flex items-center justify-center"
          >
            <div className="h-80 w-80 rounded-full bg-mint/10 blur-3xl motion-safe:animate-blob sm:h-96 sm:w-96" />
          </div>
          <div
            aria-hidden
            className="absolute -z-10 h-14 w-56 rounded-full bg-mint/25 blur-2xl sm:w-64"
            style={{ bottom: "10%" }}
          />
          <div ref={nodeGraphWrapRef} className="w-full max-w-xs sm:max-w-sm md:max-w-md">
            <NodeGraph className="w-full drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)]" />
          </div>
        </div>
      </Container>

      <div className="relative border-t border-border bg-surface py-6">
        <Container className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <span className="shrink-0 font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted">
            Trusted by teams at
          </span>
          <div className="w-full sm:max-w-xl">
            <Marquee items={logos} />
          </div>
        </Container>
      </div>
    </section>
  );
}
