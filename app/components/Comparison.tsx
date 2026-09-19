import { Check, Minus, Palette, Share2, Terminal, Users, X } from "lucide-react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

type Cell = "yes" | "no" | "partial";

const criteria = [
  "One team",
  "Specialist coverage",
  "Single POC",
  "Fixed scope",
  "IP ownership",
  "Post-launch support",
];

const entities: {
  name: string;
  description: string;
  icon: typeof Share2;
  highlighted: boolean;
  values: Cell[];
}[] = [
  {
    name: "Vertex",
    description:
      "One accountable team across design, engineering, AI, and Web3 — from kickoff through post-launch support.",
    icon: Share2,
    highlighted: true,
    values: ["yes", "yes", "yes", "yes", "yes", "yes"],
  },
  {
    name: "Boutique design agency",
    description:
      "Strong on visual craft, but design and engineering usually live with separate vendors.",
    icon: Palette,
    highlighted: false,
    values: ["no", "no", "partial", "no", "partial", "no"],
  },
  {
    name: "Generalist dev shop",
    description:
      "Solid execution against a spec, but limited design taste and no specialist bench for AI or chain work.",
    icon: Terminal,
    highlighted: false,
    values: ["no", "partial", "partial", "no", "yes", "partial"],
  },
  {
    name: "Freelancer network",
    description:
      "Flexible and often cheaper upfront, but quality and availability vary contractor to contractor.",
    icon: Users,
    highlighted: false,
    values: ["no", "partial", "no", "partial", "yes", "no"],
  },
];

const CELL_LABEL: Record<Cell, string> = { yes: "Yes", no: "No", partial: "Partial" };

function Indicator({ value }: { value: Cell }) {
  if (value === "yes")
    return (
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-mint/15 text-mint" aria-hidden="true">
        <Check size={16} strokeWidth={3} />
      </span>
    );
  if (value === "no")
    return (
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/30" aria-hidden="true">
        <X size={16} strokeWidth={3} />
      </span>
    );
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/60" aria-hidden="true">
      <Minus size={16} strokeWidth={3} />
    </span>
  );
}

export function Comparison() {
  return (
    <section className="bg-ink-soft py-24 text-white sm:py-32">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Why Vertex"
            title="Hiring, an agency, or a dev shop? None of the above."
            description="See how one embedded team stacks up against the usual ways of getting product work done."
          />
        </Reveal>

        <Reveal>
          <div className="relative">
            <div className="no-scrollbar overflow-x-auto">
              <div
                className="flex w-fit min-w-full flex-col"
                role="table"
                aria-label="Comparison of Vertex against a boutique design agency, a generalist dev shop, and a freelancer network"
              >
                {/* Criteria header row — sticky spacer keeps it aligned with each entity row's sticky first column. */}
                <div className="flex flex-row items-center border-b border-white/10 pb-6" role="row">
                  <div className="sticky left-0 z-10 w-[220px] shrink-0 bg-ink-soft sm:w-[320px] lg:w-[380px]" role="columnheader" />
                  {criteria.map((label) => (
                    <div
                      key={label}
                      role="columnheader"
                      className="w-28 shrink-0 grow px-3 text-center font-serif text-lg text-white/70 sm:w-36 lg:text-xl"
                    >
                      {label}
                    </div>
                  ))}
                </div>

                {entities.map((entity) => (
                  <div
                    key={entity.name}
                    role="row"
                    className={`flex flex-row items-center border-b border-white/10 py-6 last:border-0 ${
                      entity.highlighted ? "rounded-2xl" : ""
                    }`}
                  >
                    <div
                      role="rowheader"
                      className={`sticky left-0 z-10 flex w-[220px] shrink-0 items-center gap-4 bg-ink-soft pr-4 sm:w-[320px] lg:w-[380px] ${
                        entity.highlighted ? "relative before:absolute before:-inset-3 before:-z-10 before:rounded-2xl before:bg-gradient-accent lg:before:-inset-6" : ""
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`hidden h-14 w-14 shrink-0 items-center justify-center rounded-xl sm:flex ${
                          entity.highlighted ? "bg-white/15 text-white" : "bg-white/5 text-white/70"
                        }`}
                      >
                        <entity.icon size={22} />
                      </span>
                      <div className="flex flex-col gap-1">
                        <span className="font-display text-base font-semibold text-white sm:text-lg">
                          {entity.name}
                        </span>
                        <span className="hidden max-w-[260px] text-sm leading-snug text-white/60 lg:block">
                          {entity.description}
                        </span>
                      </div>
                    </div>

                    {entity.values.map((value, i) => (
                      <div
                        key={criteria[i]}
                        role="cell"
                        aria-label={`${criteria[i]}: ${CELL_LABEL[value]}`}
                        className={`flex w-28 shrink-0 grow items-center justify-center px-3 sm:w-36 ${
                          entity.highlighted ? "relative before:absolute before:-inset-3 before:-z-10 before:bg-gradient-accent lg:before:-inset-6" : ""
                        }`}
                      >
                        <Indicator value={value} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll-affordance fade on the trailing edge, mirrors the hero carousel's edge mask */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink-soft to-transparent lg:hidden"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
