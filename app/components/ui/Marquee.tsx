import { ReactNode } from "react";

export function Marquee({ items }: { items: ReactNode[] }) {
  const track = [...items, ...items];

  return (
    <div
      className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      role="presentation"
    >
      <div className="flex w-max motion-safe:animate-marquee motion-safe:group-hover:[animation-play-state:paused] gap-16 py-2">
        {track.map((item, i) => (
          <span
            key={i}
            aria-hidden={i >= items.length}
            className="flex shrink-0 items-center text-xl font-semibold tracking-tight text-muted/70 grayscale transition-all duration-300 hover:text-primary hover:grayscale-0"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
