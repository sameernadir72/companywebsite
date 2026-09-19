import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === "center"
          ? "items-center text-center max-w-2xl mx-auto"
          : "items-start text-left max-w-xl"
      }`}
    >
      {eyebrow ? (
        <span className="inline-flex items-center rounded-full border border-accent-soft bg-accent-soft px-3 py-1 font-mono text-xs font-medium uppercase tracking-[0.1em] text-accent">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-medium leading-[1.08] tracking-tight text-primary">
        {title}
      </h2>
      {description ? (
        <p className="text-base sm:text-lg leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
