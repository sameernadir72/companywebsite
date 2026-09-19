/**
 * Hero carousel data.
 *
 * README — swapping in real media
 * ---------------------------------
 * Each card currently ships a hand-built SVG "product shot" (see the
 * `*Mockup` builders below) so the carousel reads as real UI/UX work in the
 * studio's own palette instead of unrelated stock photography. To swap in an
 * actual screenshot or export:
 * 1. Replace `media.src` with your asset URL (CDN, /public path, or CMS
 *    field). image cards accept anything an <img> can load; video cards take
 *    a video file in `media.src` and a still in `media.poster`.
 * 2. Keep artwork close to a 400x441 (≈0.9067) ratio — every card in the
 *    carousel renders at that same fixed aspect ratio so the two desktop
 *    columns line up card-for-card instead of drifting out of sync.
 * 3. `href` should point at the live case study — cards deep-link to the
 *    matching project section on `/work` (see the `id` on each article in
 *    `work/WorkGrid.tsx`) so a click lands the visitor on that project, not
 *    just the top of the page.
 * 4. `logo` is any React node; keep it a monochrome `fill="currentColor"`
 *    SVG around 110px wide so it survives the dark scrim on any artwork.
 */

import type { ReactNode } from "react";

export type HeroCard = {
  id: string;
  brand: string;
  industry: string; // e.g. "HEALTHCARE", uppercase
  href: string;
  media: { type: "image" | "video"; src: string; poster?: string };
  logo: ReactNode;
};

/** Generic monochrome wordmark — a mark glyph + label, both `currentColor`. */
function Wordmark({ label, glyph }: { label: string; glyph: "circle" | "triangle" | "square" | "diamond" }) {
  const marks: Record<typeof glyph, ReactNode> = {
    circle: <circle cx="9" cy="12" r="7" />,
    triangle: <path d="M9 4.5 16 17H2z" />,
    square: <rect x="2.5" y="5" width="13" height="13" rx="2" />,
    diamond: <path d="M9 3 16 12 9 21 2 12z" />,
  };

  return (
    <svg viewBox="0 0 150 24" width="110" height="18" fill="currentColor" role="img" aria-hidden="true">
      <g>{marks[glyph]}</g>
      <text x="24" y="17" fontFamily="var(--font-sans), sans-serif" fontSize="16" fontWeight="600" letterSpacing="-0.02em">
        {label}
      </text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Deterministic SVG "product shot" builders — abstract UI compositions in the
// brand palette (ink background, purple/mint/lavender accents), so every card
// reads as design/product work rather than random stock photography.
// ---------------------------------------------------------------------------

const INK = "#0F0F0F";
const PANEL = "#1B1922";
const LINE = "rgba(255,255,255,0.08)";
const FAINT = "rgba(255,255,255,0.22)";

function chrome(w: number) {
  return `
    <rect x="0" y="0" width="${w}" height="34" fill="${PANEL}" />
    <circle cx="18" cy="17" r="3.5" fill="#FF3381" opacity="0.55" />
    <circle cx="30" cy="17" r="3.5" fill="#FFB833" opacity="0.55" />
    <circle cx="42" cy="17" r="3.5" fill="#7AFF9C" opacity="0.55" />
    <rect x="${w / 2 - 50}" y="10" width="100" height="14" rx="7" fill="${LINE}" />
    <line x1="0" y1="34" x2="${w}" y2="34" stroke="${LINE}" stroke-width="1" />
  `;
}

function frame(w: number, h: number, body: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}">
    <rect x="0" y="0" width="${w}" height="${h}" fill="${INK}" />
    ${chrome(w)}
    ${body}
  </svg>`;
}

/** Marketing site hero: headline bars, a CTA pill, and an image block. */
function marketingHeroMockup(w: number, h: number, accent: string) {
  const cx = w / 2;
  return frame(
    w,
    h,
    `
    <rect x="${cx - 90}" y="70" width="180" height="16" rx="8" fill="${FAINT}" />
    <rect x="${cx - 60}" y="94" width="120" height="16" rx="8" fill="${FAINT}" />
    <rect x="${cx - 46}" y="128" width="92" height="30" rx="15" fill="${accent}" />
    <rect x="24" y="${h - h * 0.42}" width="${w - 48}" height="${h * 0.34}" rx="14" fill="${PANEL}" stroke="${LINE}" />
    <circle cx="${cx}" cy="${h - h * 0.42 + h * 0.17}" r="${h * 0.08}" fill="${accent}" opacity="0.35" />
  `
  );
}

/** Dashboard: sidebar, a row of stat chips, and a bar chart. */
function dashboardMockup(w: number, h: number, accent: string, accent2: string) {
  const bars = [0.4, 0.65, 0.5, 0.82, 0.58, 0.72, 0.46];
  const chartX = 88;
  const chartW = w - chartX - 24;
  const chartTop = h - 130;
  const chartH = 90;
  const barW = chartW / bars.length - 8;
  const barsMarkup = bars
    .map((v, i) => {
      const bh = chartH * v;
      const x = chartX + i * (barW + 8);
      const y = chartTop + (chartH - bh);
      return `<rect x="${x}" y="${y}" width="${barW}" height="${bh}" rx="3" fill="${i % 2 === 0 ? accent : accent2}" opacity="0.85" />`;
    })
    .join("");

  return frame(
    w,
    h,
    `
    <rect x="0" y="34" width="64" height="${h - 34}" fill="${PANEL}" />
    <circle cx="32" cy="66" r="6" fill="${accent}" />
    <circle cx="32" cy="94" r="6" fill="${LINE}" />
    <circle cx="32" cy="122" r="6" fill="${LINE}" />
    <rect x="${chartX}" y="52" width="70" height="44" rx="10" fill="${PANEL}" stroke="${LINE}" />
    <rect x="${chartX + 10}" y="62" width="30" height="8" rx="4" fill="${FAINT}" />
    <rect x="${chartX + 10}" y="76" width="46" height="10" rx="5" fill="${accent}" />
    <rect x="${chartX + 90}" y="52" width="70" height="44" rx="10" fill="${PANEL}" stroke="${LINE}" />
    <rect x="${chartX + 100}" y="62" width="30" height="8" rx="4" fill="${FAINT}" />
    <rect x="${chartX + 100}" y="76" width="36" height="10" rx="5" fill="${accent2}" />
    <rect x="${chartX}" y="${chartTop - 16}" width="${chartW}" height="${chartH + 16}" rx="12" fill="${PANEL}" stroke="${LINE}" />
    ${barsMarkup}
  `
  );
}

/** Chat / copilot UI: alternating message bubbles + avatar. */
function chatMockup(w: number, h: number, accent: string, accent2: string) {
  const cx = 40;
  return frame(
    w,
    h,
    `
    <circle cx="${cx}" cy="70" r="16" fill="${accent2}" />
    <rect x="${cx + 26}" y="56" width="150" height="14" rx="7" fill="${PANEL}" stroke="${LINE}" />
    <rect x="${cx + 26}" y="76" width="110" height="14" rx="7" fill="${PANEL}" stroke="${LINE}" />
    <rect x="${w - 190}" y="112" width="150" height="14" rx="7" fill="${accent}" opacity="0.9" />
    <rect x="${w - 150}" y="132" width="110" height="14" rx="7" fill="${accent}" opacity="0.9" />
    <circle cx="${cx}" cy="180" r="16" fill="${accent2}" />
    <rect x="${cx + 26}" y="166" width="170" height="14" rx="7" fill="${PANEL}" stroke="${LINE}" />
    <rect x="${cx + 26}" y="186" width="90" height="14" rx="7" fill="${PANEL}" stroke="${LINE}" />
    <rect x="${cx + 26}" y="206" width="130" height="14" rx="7" fill="${PANEL}" stroke="${LINE}" />
    <rect x="24" y="${h - 56}" width="${w - 48}" height="36" rx="18" fill="${PANEL}" stroke="${LINE}" />
    <circle cx="${w - 46}" cy="${h - 38}" r="12" fill="${accent}" />
  `
  );
}

/** Network / node graph — nodes and connecting edges. */
function nodeGraphMockup(w: number, h: number, accent: string, accent2: string) {
  const cx = w / 2;
  const cy = 34 + (h - 34) / 2;
  const nodes = [
    [cx, cy, 20, accent],
    [cx - 110, cy - 70, 10, accent2],
    [cx + 100, cy - 90, 8, accent2],
    [cx - 90, cy + 90, 9, accent],
    [cx + 120, cy + 70, 11, accent2],
    [cx - 20, cy - 130, 7, accent],
    [cx + 30, cy + 130, 8, accent2],
  ] as const;
  const edges = nodes
    .slice(1)
    .map(([x, y]) => `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="${FAINT}" stroke-width="1.5" />`)
    .join("");
  const dots = nodes.map(([x, y, r, fill]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" opacity="0.9" />`).join("");

  return frame(w, h, `${edges}${dots}`);
}

/** Mobile app frame: a summary card plus a handful of list rows. */
function mobileAppMockup(w: number, h: number, accent: string, accent2: string, rows: number) {
  const cx = w / 2;
  const cardW = w - 64;
  let listRows = "";
  for (let i = 0; i < rows; i++) {
    const y = 240 + i * 46;
    listRows += `
      <circle cx="48" cy="${y}" r="12" fill="${PANEL}" stroke="${LINE}" />
      <rect x="70" y="${y - 8}" width="90" height="10" rx="5" fill="${FAINT}" />
      <rect x="${w - 74}" y="${y - 7}" width="42" height="9" rx="4.5" fill="${i % 2 === 0 ? accent : accent2}" opacity="0.85" />
    `;
  }
  return frame(
    w,
    h,
    `
    <rect x="32" y="60" width="${cardW}" height="120" rx="16" fill="${accent}" opacity="0.16" />
    <rect x="32" y="60" width="${cardW}" height="120" rx="16" fill="none" stroke="${accent}" stroke-opacity="0.5" />
    <rect x="52" y="84" width="80" height="10" rx="5" fill="${FAINT}" />
    <rect x="52" y="106" width="130" height="20" rx="6" fill="#FFFFFF" opacity="0.92" />
    <circle cx="${cx + cardW / 2 - 50}" cy="140" r="14" fill="${accent2}" />
    ${listRows}
  `
  );
}

/** Onboarding / settings form: labeled inputs + a CTA pill. */
function formOnboardingMockup(w: number, h: number, accent: string, accent2: string) {
  const fieldW = w - 64;
  let fields = "";
  [90, 168, 246].forEach((y, i) => {
    fields += `
      <rect x="32" y="${y - 22}" width="70" height="8" rx="4" fill="${FAINT}" />
      <rect x="32" y="${y}" width="${fieldW}" height="42" rx="10" fill="${PANEL}" stroke="${LINE}" />
      ${i === 0 ? `<rect x="48" y="${y + 15}" width="90" height="12" rx="6" fill="${accent2}" opacity="0.7" />` : ""}
    `;
  });
  return frame(
    w,
    h,
    `
    <circle cx="${w - 40}" cy="70" r="46" fill="${accent2}" opacity="0.18" />
    ${fields}
    <rect x="32" y="${h - 88}" width="${fieldW}" height="46" rx="23" fill="${accent}" />
  `
  );
}

/** Settings / billing panel: label rows with toggle pills. */
function settingsPanelMockup(w: number, h: number, accent: string, accent2: string) {
  const rows = [60, 60, 60, 60];
  let markup = "";
  let y = 70;
  rows.forEach((_, i) => {
    const on = i % 2 === 0;
    markup += `
      <rect x="24" y="${y}" width="${w - 48}" height="52" rx="12" fill="${PANEL}" stroke="${LINE}" />
      <rect x="44" y="${y + 18}" width="${w * 0.4}" height="10" rx="5" fill="${FAINT}" />
      <rect x="44" y="${y + 34}" width="${w * 0.25}" height="8" rx="4" fill="${LINE}" />
      <rect x="${w - 90}" y="${y + 16}" width="44" height="20" rx="10" fill="${on ? accent : PANEL}" stroke="${on ? "none" : LINE}" />
      <circle cx="${on ? w - 56 : w - 78}" cy="${y + 26}" r="8" fill="${on ? "#FFFFFF" : FAINT}" />
    `;
    y += 68;
  });
  return frame(w, h, `${markup}<rect x="24" y="${y + 6}" width="140" height="42" rx="21" fill="${accent2}" />`);
}

function svgToDataUri(svg: string) {
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

// Every card mockup renders at this fixed size so both marquee columns —
// and every card within a column — stay the same height.
const CARD: [number, number] = [400, 441]; // 400 / 441 ≈ 0.9067

// Brand accents pulled from design-system.md's secondary accent set.
const PURPLE = "#7957EF";
const MINT = "#7AFF9C";
const SKY = "#33B1FF";
const VIOLET = "#C533FF";
const LAVENDER = "#9966FF";
const AMBER = "#FFB833";

export const heroCards: HeroCard[] = [
  {
    id: "halcyon-site",
    brand: "Halcyon",
    industry: "PROPTECH",
    href: "/work#halcyon",
    media: { type: "image", src: svgToDataUri(marketingHeroMockup(...CARD, MINT)) },
    logo: <Wordmark label="Halcyon" glyph="diamond" />,
  },
  {
    id: "solace-chat",
    brand: "Solace AI",
    industry: "ARTIFICIAL INTELLIGENCE",
    href: "/work#solace-ai",
    media: { type: "image", src: svgToDataUri(chatMockup(...CARD, PURPLE, LAVENDER)) },
    logo: <Wordmark label="Solace AI" glyph="circle" />,
  },
  {
    id: "meridian-graph",
    brand: "Meridian Chain",
    industry: "WEB3",
    href: "/work#meridian-chain",
    media: { type: "image", src: svgToDataUri(nodeGraphMockup(...CARD, SKY, VIOLET)) },
    logo: <Wordmark label="Meridian" glyph="triangle" />,
  },
  {
    id: "fathom-form",
    brand: "Fathom Labs",
    industry: "FINTECH",
    href: "/work#fathom-labs",
    media: { type: "image", src: svgToDataUri(formOnboardingMockup(...CARD, LAVENDER, MINT)) },
    logo: <Wordmark label="Fathom Labs" glyph="square" />,
  },
  {
    id: "circuit-dashboard",
    brand: "Circuit",
    industry: "SAAS",
    href: "/work#circuit",
    media: { type: "image", src: svgToDataUri(dashboardMockup(...CARD, PURPLE, AMBER)) },
    logo: <Wordmark label="Circuit" glyph="circle" />,
  },
  {
    id: "halcyon-listings",
    brand: "Halcyon",
    industry: "PROPTECH",
    href: "/work#halcyon",
    media: { type: "image", src: svgToDataUri(mobileAppMockup(...CARD, MINT, PURPLE, 4)) },
    logo: <Wordmark label="Halcyon" glyph="diamond" />,
  },
  {
    id: "solace-insights",
    brand: "Solace AI",
    industry: "ARTIFICIAL INTELLIGENCE",
    href: "/work#solace-ai",
    media: { type: "image", src: svgToDataUri(dashboardMockup(...CARD, LAVENDER, PURPLE)) },
    logo: <Wordmark label="Solace AI" glyph="circle" />,
  },
  {
    id: "meridian-wallet",
    brand: "Meridian Chain",
    industry: "WEB3",
    href: "/work#meridian-chain",
    media: { type: "image", src: svgToDataUri(mobileAppMockup(...CARD, SKY, VIOLET, 3)) },
    logo: <Wordmark label="Meridian" glyph="triangle" />,
  },
  {
    id: "fathom-app",
    brand: "Fathom Labs",
    industry: "FINTECH",
    href: "/work#fathom-labs",
    media: { type: "image", src: svgToDataUri(mobileAppMockup(...CARD, LAVENDER, MINT, 3)) },
    logo: <Wordmark label="Fathom Labs" glyph="square" />,
  },
  {
    id: "circuit-settings",
    brand: "Circuit",
    industry: "SAAS",
    href: "/work#circuit",
    media: { type: "image", src: svgToDataUri(settingsPanelMockup(...CARD, PURPLE, AMBER)) },
    logo: <Wordmark label="Circuit" glyph="circle" />,
  },
];
