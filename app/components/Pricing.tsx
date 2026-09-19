"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";

const plans = [
  {
    name: "Sprint",
    type: "onetime" as const,
    price: 14000,
    description: "A single scoped product, designed and built in one focused engagement.",
    features: [
      "One product, one focused sprint",
      "3–4 week delivery",
      "Design and build, same team",
      "Source code & assets, yours outright",
      "2 weeks of post-launch support",
    ],
    cta: "Scope a sprint",
    highlighted: false,
  },
  {
    name: "Partner",
    type: "monthly" as const,
    price: 9500,
    description: "An embedded pod covering design, engineering, AI, or Web3 as you need it.",
    features: [
      "Dedicated pod: designer + engineer + PM",
      "Continuous delivery, shipped weekly",
      "Any capability — web, SaaS, AI, chain, motion",
      "Direct Slack channel, no ticket queue",
      "Scale the pod up or down monthly",
    ],
    cta: "Start a partnership",
    highlighted: true,
  },
  {
    name: "Enterprise",
    type: "custom" as const,
    price: null,
    description: "Multi-domain builds with compliance, audits, and dedicated SLAs.",
    features: [
      "Multi-pod team across all six disciplines",
      "Security review & smart-contract audits",
      "Compliance & SLA-backed delivery",
      "Dedicated engagement lead",
      "Custom contract & invoicing terms",
    ],
    cta: "Talk to us",
    highlighted: false,
  },
];

export function Pricing() {
  const [quarterly, setQuarterly] = useState(true);

  return (
    <section id="pricing" className="bg-muted-bg py-24 sm:py-32">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading
            eyebrow="Engagement models"
            title="Scoped sprint, ongoing partnership, or full enterprise build"
            description="Every model includes senior talent only, and code and IP that's yours from day one."
          />
        </Reveal>

        <Reveal>
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setQuarterly(false)}
              className={`cursor-pointer rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                !quarterly ? "text-primary" : "text-muted hover:text-primary"
              }`}
            >
              Monthly retainer
            </button>
            <button
              type="button"
              role="switch"
              aria-checked={quarterly}
              aria-label="Toggle quarterly billing for the Partner plan for a 20% discount"
              onClick={() => setQuarterly((v) => !v)}
              className={`relative h-7 w-13 shrink-0 cursor-pointer rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                quarterly ? "bg-accent" : "bg-primary"
              }`}
            >
              <span
                className={`absolute top-1 left-1 h-5 w-5 rounded-full bg-on-primary transition-transform duration-200 ${
                  quarterly ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <button
              type="button"
              onClick={() => setQuarterly(true)}
              className={`cursor-pointer rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                quarterly ? "text-primary" : "text-muted hover:text-primary"
              }`}
            >
              Quarterly retainer
            </button>
            <span
              className={`rounded-full px-2.5 py-1 font-mono text-xs font-semibold transition-colors ${
                quarterly ? "bg-accent-soft text-accent" : "bg-muted-bg text-muted"
              }`}
            >
              Save 20%
            </span>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3 items-stretch">
          {plans.map((plan, i) => {
            const discounted =
              plan.type === "monthly" && quarterly && plan.price
                ? Math.round(plan.price * 0.8)
                : plan.price;

            return (
              <Reveal key={plan.name} delay={i * 80} className="h-full">
                <div
                  className={`relative flex h-full flex-col gap-6 rounded-lg border p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                    plan.highlighted
                      ? "border-transparent bg-ink-soft text-on-ink shadow-card-elevated lg:scale-105"
                      : "border-border/40 bg-surface-alt hover:border-accent/40 hover:shadow-card-soft"
                  }`}
                >
                  <div className="relative flex items-center justify-between">
                    <h3 className="font-display text-lg font-semibold">{plan.name}</h3>
                    {plan.highlighted ? (
                      <span className="rounded-full bg-gradient-accent px-3 py-1 font-mono text-xs font-semibold">
                        Most common
                      </span>
                    ) : null}
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex items-baseline gap-1.5">
                      {plan.type === "custom" ? (
                        <span className="font-display text-4xl font-semibold">Custom</span>
                      ) : (
                        <>
                          {discounted !== plan.price ? (
                            <span
                              className={`font-mono text-lg line-through ${
                                plan.highlighted ? "text-on-ink-muted" : "text-muted"
                              }`}
                            >
                              ${plan.price?.toLocaleString("en-US")}
                            </span>
                          ) : null}
                          <span className="font-mono text-4xl font-semibold">
                            ${discounted?.toLocaleString("en-US")}
                          </span>
                          <span className={plan.highlighted ? "text-on-ink-muted" : "text-muted"}>
                            {plan.type === "monthly" ? "/mo" : " one-time"}
                          </span>
                        </>
                      )}
                    </div>
                    {plan.type === "monthly" ? (
                      <span
                        className={`font-mono text-xs ${
                          plan.highlighted ? "text-on-ink-muted" : "text-muted"
                        }`}
                      >
                        billed {quarterly ? "quarterly" : "monthly"}
                      </span>
                    ) : null}
                  </div>

                  <p className={`text-sm leading-relaxed ${plan.highlighted ? "text-on-ink-muted" : "text-muted"}`}>
                    {plan.description}
                  </p>

                  <ul className="flex flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <Check
                          size={18}
                          className={`mt-0.5 shrink-0 ${plan.highlighted ? "text-on-ink" : "text-accent"}`}
                        />
                        <span className={plan.highlighted ? "text-on-ink-muted" : "text-secondary"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="/contact"
                    variant={plan.highlighted ? "secondary" : "primary"}
                    className="mt-auto w-full"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
