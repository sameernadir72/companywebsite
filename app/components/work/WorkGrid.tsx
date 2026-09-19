"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Tag } from "../ui/Tag";

type Category = "Design" | "SaaS" | "AI" | "Web3";

type Project = {
  id: string;
  name: string;
  category: Category;
  image: string;
  metric: string;
  metricLabel: string;
  description: string;
  size: "lg" | "md" | "full";
};

const projects: Project[] = [
  {
    id: "halcyon",
    name: "Halcyon",
    category: "Design",
    image: "/monitor.png",
    metric: "3 wks",
    metricLabel: "concept to launch",
    description:
      "A proptech studio's design system and marketing site, shipped from concept to launch in three weeks.",
    size: "lg",
  },
  {
    id: "solace-ai",
    name: "Solace AI",
    category: "AI",
    image: "/PERFORMANCE.png",
    metric: "40%",
    metricLabel: "support volume deflected",
    description:
      "An AI copilot woven straight into the product — users can't tell where the AI starts.",
    size: "md",
  },
  {
    id: "meridian-chain",
    name: "Meridian Chain",
    category: "Web3",
    image: "/dESIGN.png",
    metric: "12 days",
    metricLabel: "spec to audited contract",
    description:
      "A real-time command center tracking 50,000+ nodes across a Layer-1 network.",
    size: "md",
  },
  {
    id: "fathom-labs",
    name: "Fathom Labs",
    category: "Design",
    image: "/scale.png",
    metric: "22 screens",
    metricLabel: "wireframe to shipped UI",
    description:
      "Wireframe to shipped UI for a fintech mobile app, mapped screen by screen.",
    size: "lg",
  },
  {
    id: "circuit",
    name: "Circuit",
    category: "SaaS",
    image: "/STRATEGY.png",
    metric: "+78%",
    metricLabel: "activation after rebuild",
    description:
      "Architecture, UI, and billing rebuilt in six weeks — same team that designed it shipped it.",
    size: "full",
  },
];

const categories: Array<"All" | Category> = ["All", "Design", "SaaS", "AI", "Web3"];

const spanClass: Record<Project["size"], string> = {
  lg: "lg:col-span-7",
  md: "lg:col-span-5",
  full: "lg:col-span-12",
};

export function WorkGrid() {
  const [active, setActive] = useState<"All" | Category>("All");
  const isAll = active === "All";
  const visible = isAll ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="py-8 sm:py-12">
      <Container className="flex flex-col gap-10">
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  active === cat
                    ? "bg-gradient-accent text-on-primary shadow-[0_4px_4px_0_rgba(0,0,0,0.06)]"
                    : "border border-border bg-surface text-secondary hover:border-accent hover:text-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div
          className={
            isAll
              ? "grid grid-cols-1 gap-6 lg:grid-cols-12"
              : "grid grid-cols-1 gap-6 sm:grid-cols-2"
          }
        >
          {visible.map((project, i) => {
            const horizontal = isAll && project.size === "full";
            return (
              <Reveal
                key={project.name}
                delay={i * 90}
                className={isAll ? spanClass[project.size] : ""}
              >
                <Link
                  href={`/work/${project.id}`}
                  className="block h-full focus-visible:outline-none"
                >
                  <article
                    id={project.id}
                    className={`group relative flex h-full scroll-mt-28 overflow-hidden rounded-2xl border border-border bg-surface shadow-card-elevated transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-15px_rgba(102,0,255,0.22)] ${
                      horizontal ? "flex-col lg:flex-row" : "flex-col"
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden ${
                        horizontal ? "aspect-[4/3] lg:aspect-auto lg:w-1/2" : "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        sizes={
                          horizontal
                            ? "(min-width: 1024px) 50vw, 100vw"
                            : "(min-width: 1024px) 45vw, 100vw"
                        }
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <span className="absolute left-4 top-4">
                        <Tag variant="dark">{project.category}</Tag>
                      </span>
                      <div className="absolute inset-x-4 bottom-4 flex translate-y-2 items-center justify-between text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        <span className="text-sm font-semibold">View case study</span>
                        <ArrowUpRight size={18} />
                      </div>
                    </div>

                    <div
                      className={`flex flex-1 flex-col gap-3 p-6 sm:p-8 ${
                        horizontal ? "lg:w-1/2 lg:justify-center" : ""
                      }`}
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <h3
                          className={`font-display font-semibold text-primary ${
                            horizontal ? "text-2xl sm:text-3xl" : "text-xl"
                          }`}
                        >
                          {project.name}
                        </h3>
                        <span className="shrink-0 font-mono text-sm font-semibold text-gradient">
                          {project.metric}
                        </span>
                      </div>
                      <p
                        className={`leading-relaxed text-muted ${
                          horizontal ? "max-w-md text-base" : "text-sm"
                        }`}
                      >
                        {project.description}
                      </p>
                      <span className="mt-auto border-t border-border/70 pt-4 font-mono text-[11px] uppercase tracking-[0.1em] text-muted/80">
                        {project.metricLabel}
                      </span>
                    </div>
                  </article>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
