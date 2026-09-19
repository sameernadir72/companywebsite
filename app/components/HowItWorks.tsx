"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { Search, PenTool, Code2, Rocket, TrendingUp, type LucideIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Step = {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
  /** Drop an image at this path (e.g. /process/discover.jpg) to replace the icon placeholder. */
  image?: string;
};

const steps: Step[] = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    description: "Scope the product, the stack, and the disciplines it actually needs. No padded proposals.",
    image: "/STRATEGY.png",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design",
    description: "UX, UI, and brand system get shaped in parallel with technical architecture — not after it.",
    image: "/scale.png",
  },
  {
    icon: Code2,
    step: "03",
    title: "Build",
    description: "Senior engineers build the real thing — SaaS product, AI features, or on-chain logic — in weekly shippable increments.",
    image: "/monitor.png",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch",
    description: "QA, performance, and security pass before anything goes live. You watch it ship, not slip.",
    image: "/PERFORMANCE.png",
  },
  {
    icon: TrendingUp,
    step: "05",
    title: "Scale",
    description: "Post-launch iteration, monitoring, and a direct line to the team that built it — for as long as you need us.",
    image: "/dESIGN.png",
  },
];

function ProcessVisual({ step }: { step: Step }) {
  const [errored, setErrored] = useState(false);

  if (step.image && !errored) {
    return (
      <Image
        src={step.image}
        alt={step.title}
        fill
        sizes="(min-width: 1024px) 28rem, 80vw"
        className="object-cover"
        onError={() => setErrored(true)}
      />
    );
  }

  const Icon = step.icon;
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-hero text-white">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm">
        <Icon size={28} />
      </div>
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/70">{step.title}</span>
    </div>
  );
}

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const details = gsap.utils.toArray<HTMLElement>(".process-detail");
        const photos = gsap.utils.toArray<HTMLElement>(".process-photo");

        gsap.set(photos, { opacity: 0 });
        gsap.set(photos[0], { opacity: 1 });
        gsap.set(details, { opacity: (i) => (i === 0 ? 1 : 0.35) });

        const setActive = (i: number) => {
          gsap.to(photos, { opacity: 0, duration: 0.5, overwrite: true });
          gsap.to(photos[i], { opacity: 1, duration: 0.5, overwrite: true });
          gsap.to(details, {
            opacity: (idx) => (idx === i ? 1 : 0.35),
            duration: 0.4,
            overwrite: true,
          });
          gsap.to(progressRef.current, {
            height: `${((i + 1) / steps.length) * 100}%`,
            duration: 0.5,
            ease: "power2.out",
            overwrite: true,
          });
        };

        details.forEach((detail, i) => {
          ScrollTrigger.create({
            trigger: detail,
            start: "top 60%",
            end: "bottom 60%",
            onEnter: () => setActive(i),
            onEnterBack: () => setActive(i),
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="From first call to shipped product, on one continuous timeline"
          />
        </Reveal>

        <div className="relative hidden lg:grid lg:grid-cols-2 lg:gap-16">
          <div ref={leftColRef} className="flex flex-col">
            {steps.map((step) => (
              <Reveal key={step.step}>
                <div className="process-detail flex min-h-[70vh] flex-col justify-center gap-4">
                  <span className="font-mono text-sm font-medium text-muted">
                    {step.step}/{steps.length.toString().padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-primary">
                      <step.icon size={20} />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-primary xl:text-3xl">
                      {step.title}
                    </h3>
                  </div>
                  <p className="max-w-md text-base leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="sticky top-28 h-128 self-start">
            <div className="relative ml-auto h-full w-full max-w-md overflow-hidden rounded-3xl border border-border bg-ink-soft shadow-card-elevated">
              {steps.map((step, i) => (
                <div
                  key={step.step}
                  className={`process-photo absolute inset-0 ${i === 0 ? "opacity-100" : "opacity-0"}`}
                >
                  <ProcessVisual step={step} />
                </div>
              ))}
              <div className="absolute inset-y-6 right-6 w-1 overflow-hidden rounded-full bg-white/15">
                <div ref={progressRef} className="w-full rounded-full bg-gradient-accent" style={{ height: "20%" }} />
              </div>
            </div>
          </div>
        </div>

        <Reveal className="lg:hidden">
          <div className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-2">
            {steps.map((step) => (
              <div
                key={step.step}
                className="flex w-[80%] shrink-0 snap-start flex-col gap-4 sm:w-[60%]"
              >
                <div className="relative h-56 w-full overflow-hidden rounded-xl border border-border">
                  <ProcessVisual step={step} />
                </div>
                <span className="font-mono text-sm font-medium text-muted">
                  {step.step}/{steps.length.toString().padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-semibold text-primary">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
