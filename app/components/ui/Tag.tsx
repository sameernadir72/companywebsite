export function Tag({
  children,
  variant = "light",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.1em] ${
        variant === "dark"
          ? "border-white/15 bg-white/10 text-white/85"
          : "border-border bg-muted-bg text-secondary"
      } ${className}`}
    >
      {children}
    </span>
  );
}
