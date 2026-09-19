import { Puzzle, Hourglass, Wallet } from "lucide-react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

const problems = [
  {
    icon: Puzzle,
    title: "Five vendors, zero accountability",
    description:
      "Your design agency doesn't touch your codebase, your dev shop doesn't understand your brand, and your AI or Web3 build sits with a third team entirely. Handoffs are where quality dies.",
  },
  {
    icon: Hourglass,
    title: "Specialist hiring takes months",
    description:
      "Great product designers, senior full-stack engineers, applied-AI builders, and Solidity developers are each their own hiring problem — and you need all four at once.",
  },
  {
    icon: Wallet,
    title: "Premium work usually means premium overhead",
    description:
      "Boutique studios charge agency rates for design alone, then bill separately for build. The cost of coordinating it all lands on you.",
  },
];

export function ProblemSolution() {
  return (
    <section className="py-24 sm:py-32 bg-muted-bg">
      <Container className="flex flex-col gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="The old way"
            title="Building a premium digital product shouldn't require five different vendors"
            description="Most teams end up assembling a patchwork of agencies, freelancers, and in-house hires — and paying for the seams in between."
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-3">
          {problems.map((problem, i) => (
            <Reveal key={problem.title} delay={i * 80}>
              <div className="group flex h-full flex-col gap-4 rounded-xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-accent text-on-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <problem.icon size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary">
                  {problem.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {problem.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="rounded-lg bg-gradient-card-purple px-8 py-10 text-center sm:px-14">
            <p className="font-display text-xl sm:text-2xl font-medium leading-snug text-white">
              Vertex gives you one accountable team across design,
              engineering, AI, and blockchain — a single point of contact,
              senior talent only, flat project scope.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
