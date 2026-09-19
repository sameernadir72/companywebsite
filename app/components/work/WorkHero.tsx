import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function WorkHero() {
  return (
    <section className="relative overflow-hidden bg-surface pt-40 pb-16 sm:pt-48 sm:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-accent-soft blur-3xl"
      />
      <Container className="flex flex-col items-center gap-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-soft bg-accent-soft px-3 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">
            Selected work
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-primary sm:text-5xl md:text-6xl">
            Case studies our clients{" "}
            <span className="text-gradient">actually forward</span> to their board.
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Every project below shipped to production — no concept art, no
            vaporware. Filter by discipline to see the receipts.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
