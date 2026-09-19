# DesignGuru — Design System Reference

> Extracted from the production site (godesignguru.com, built in Framer). Use this as project context for Claude Code when building or matching this brand's UI — drop this file in your repo root (e.g. `docs/design-system.md`) and reference it in `CLAUDE.md`.

---

## 1. Brand Overview

- **Personality:** confident SaaS/agency hybrid — dark hero, punchy mint-green CTA, soft lavender-white cards, energetic purple gradients.
- **Base grid:** designed at 1440px, with breakpoints at 1200px, 768px, 390px.
- **Typeface:** Plus Jakarta Sans everywhere (headings + body). Geist used sparingly for badges/labels/pricing numerals.
- **Corners:** everything is rounded — pills for buttons/badges, 16–24px for cards, 30–44px for hero/large containers.

---

## 2. Color Tokens

### Core palette

| Token name         | Hex       | RGB                  | Usage                                   |
|---------------------|-----------|----------------------|------------------------------------------|
| `color-ink`          | `#0F0F0F` | `15, 15, 25`         | Primary text, headings                  |
| `color-ink-soft`     | `#161519` | `22, 21, 25`         | Dark surfaces (footer, pricing "Pro")   |
| `color-body`         | `#59595D` | `89, 89, 93`         | Body copy, secondary text               |
| `color-surface`      | `#FFFFFF` | `255, 255, 255`      | Page background, cards                  |
| `color-surface-alt`  | `#FCFBFF` | `252, 251, 255`      | Lavender-tinted card background         |
| `color-surface-muted`| `#FAFAFB` | `250, 250, 251`      | Subtle panel fill                       |
| `color-border`       | `#E1E4EB` | `225, 228, 235`      | Hairline borders (also `rgba(10,13,17,.1)`) |

### Brand accents

| Token name        | Hex       | Usage                                        |
|--------------------|-----------|-----------------------------------------------|
| `color-primary`     | `#6600FF` | Primary purple — links, buttons, footer bg   |
| `color-primary-2`   | `#7957EF` | Secondary purple (gradients, badges)         |
| `color-accent-mint` | `#7AFF9C` | Primary CTA button, glow accents             |
| `color-accent-lav`  | `#9966FF` | Decorative gradient stop                     |

### Secondary/feature accents (icon chips, illustrations)

| Hex       | Name       |
|-----------|------------|
| `#C533FF` | Violet     |
| `#33B1FF` | Sky blue   |
| `#FF3381` | Pink       |
| `#85CC00` | Lime       |
| `#FFB833` | Amber      |
| `#F24E1E` | Orange-red |
| `#F9E850` | Yellow     |
| `#78FA9A` | Mint       |

### Gradients

```css
/* Hero background (dark, top to bottom) */
--gradient-hero: linear-gradient(0deg, #FFFFFF 4%, #6600FFB3 54%, #003 101%);

/* Primary button */
--gradient-button-primary: linear-gradient(179deg, #6030FF 0%, #7251DF 100%);

/* Feature card background */
--gradient-card-purple: linear-gradient(115deg, #A189F4 7%, #7B56EF 27.5%, #1D1242 95%);
```

---

## 3. Typography

**Font stack:** `"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif`
Secondary/label stack: `"Geist", "Geist Placeholder", sans-serif`

### Type scale (desktop → tablet → mobile)

| Role        | Desktop           | Tablet (768–1199)  | Mobile (<768)     | Weight | Letter-spacing | Line-height |
|-------------|--------------------|----------------------|---------------------|--------|-----------------|-------------|
| H1 (hero)   | 60px               | 48px                 | 40px                | 600    | -2px            | 1.05em      |
| H2 (large)  | 52px               | 42px                 | 38px                | 600    | -1.5px          | 1.1em       |
| H2 (medium) | 48px               | 34px                 | 34px                | 600    | -1.5px          | 1.2em       |
| H2 (small)  | 35px               | 33px                 | 31px                | 600    | -0.04em         | 1.5em       |
| H3          | 28px               | 26px                 | 24px                | 600    | -0.8px          | 1.3em       |
| H4          | 22px               | 20px                 | 18px                | 600    | -0.2 / -0.6px   | 1.3em       |
| H5          | 18px               | —                    | —                   | 600    | -0.2px          | 1.3em       |
| Body (lg)   | 17px               | 15px                 | 14px                | 400    | -0.2px          | 1.4em       |
| Body        | 17px               | —                    | —                   | 500    | —               | 1.5em       |
| Button text | 15–16px            | —                    | —                   | 500    | -0.2px          | 1.5–1.7em   |
| Caption     | 13px               | —                    | —                   | 300    | -0.2px          | 1.5em       |

### Tailwind config snippet

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        label: ['"Geist"', 'sans-serif'],
      },
      colors: {
        ink: '#0F0F0F',
        'ink-soft': '#161519',
        body: '#59595D',
        surface: '#FFFFFF',
        'surface-alt': '#FCFBFF',
        'surface-muted': '#FAFAFB',
        border: '#E1E4EB',
        primary: '#6600FF',
        'primary-2': '#7957EF',
        mint: '#7AFF9C',
      },
      borderRadius: {
        pill: '999px',
        card: '20px',
        'card-lg': '30px',
        hero: '44px',
      },
      boxShadow: {
        'cta-glow': '0 0 10px 3px rgba(122,255,156,0.4)',
        'card-soft': '0 14px 73px -30px rgba(0,0,0,0.25)',
        'card-elevated': '0 8px 8px -4px rgba(16,24,40,0.03), 0 20px 24px -4px rgba(16,24,40,0.08)',
      },
    },
  },
}
```

---

## 4. Spacing & Layout

- **Max content width:** `1280px` (primary), some sections use `1200px` / `1140px`.
- **Section vertical padding:** `80px 30px` desktop → `60px 25px` tablet/mobile.
- **Grid gaps:** `24px` (card grids), `32px` (feature grids), `55–65px` (section rhythm).
- **Breakpoints:**
  - `≥1440px` — desktop (base design)
  - `1200–1439px` — laptop
  - `768–1199px` — tablet
  - `≤767px` — mobile (design width 390px)

```css
@media (min-width: 1200px) and (max-width: 1439.98px) { /* laptop */ }
@media (min-width: 768px)  and (max-width: 1199.98px) { /* tablet */ }
@media (max-width: 767.98px)                          { /* mobile */ }
```

---

## 5. Border Radius Scale

| Token         | Value  | Usage                              |
|----------------|--------|--------------------------------------|
| `radius-pill`  | 999px  | Buttons, badges, tags                |
| `radius-icon`  | 60–100px | Circular icon chips                |
| `radius-sm`    | 12px   | Small nested elements                |
| `radius-md`    | 16–20px| Standard cards                       |
| `radius-lg`    | 24px   | Feature cards, benefit cards         |
| `radius-xl`    | 30px   | FAQ items, comparison cards, footer container |
| `radius-2xl`   | 38–44px| Hero container, large CTA blocks     |

---

## 6. Shadows

```css
--shadow-cta-glow: 0 0 10px 3px rgba(122,255,156,0.4);
--shadow-card-soft: 0 14px 73px -30px rgba(0,0,0,0.25);
--shadow-card-elevated: 0 8px 8px -4px rgba(16,24,40,0.03), 0 20px 24px -4px rgba(16,24,40,0.08);
--shadow-tight: 0 0.72px 1.3px -1.08px rgba(0,0,0,0.06),
                0 2.75px 4.94px -2.17px rgba(0,0,0,0.06),
                0 12px 21.6px -3.25px rgba(0,0,0,0.03);
```

---

## 7. Components

### Buttons

**Primary (mint CTA)**
```css
background: #7AFF9C;
color: #16151A;
border-radius: 22px;
padding: 10px 20px; /* or 14px 26px for large */
box-shadow: 0 0 10px 3px rgba(122,255,156,0.4);
font-weight: 500;
```

**Secondary (purple gradient)**
```css
background: linear-gradient(179deg, #6030FF 0%, #7251DF 100%);
color: #FFFFFF;
border: 1.5px solid #FFFFFF;
border-radius: 16px;
box-shadow: rgba(0,0,0,0.25) 0 -6px 4px 0 inset, rgba(0,0,0,0.06) 0 4px 4px 0;
```

**Outline / secondary-light**
```css
background: #FFFFFF;
color: #0F0F0F;
border: 1px solid #59595D;
border-radius: 22px;
```

**Text link** — underline on hover, no background, inherits link color `#0099FF` on dark surfaces.

### Cards

- **Standard card:** `background: #FCFBFF; border-radius: 20px; padding: 32px;`
- **Bordered card (pricing/benefit):** `1.5px solid rgba(218,221,228,0.4); border-radius: 16px;`
- **Dark feature card:** gradient purple bg, white text, `border-radius: 16px`.

### Badges / Pills

```css
background: rgba(22,24,26,0.1);
border: 1px solid rgba(255,255,255,0.1);
border-radius: 21px;
padding: 6–10px 12–16px;
font-size: 14px;
```

### Navigation

- Floating pill nav bar: `background: rgba(255,255,255,0.8); backdrop-filter: blur(10px); border-radius: 16px;` fixed 15px from top, `box-shadow: 0 1px 3px rgba(92,92,92,0.05)`.
- Nav links: `border-radius: 100px` hover highlight.

### Forms

```css
border-radius: 32px;
border: 1px solid #D3D3D3;
background: #FFFFFF;
placeholder-color: #8E8E8E;
```

---

## 8. Icon System

- Icon library: Phosphor Icons, `regular` and `fill` weights, 16–24px.
- Feature icons sit inside 40–96px circular chips using the secondary accent colors (§2), always with a subtle drop shadow: `0 10px 20px 0 rgba(0,0,0,0.05)`.

---

## 9. Motion Notes

- Section reveals: fade + `translateY(50px)` on scroll into view.
- Cards/images: subtle `rotate(-3° to 10°)` static tilt for a "scattered polaroid" feel, straightened on hover.
- Marquee/ticker: logo strips and testimonial rails auto-scroll (CSS `transform: translateX`/`translateY` loops).
- Reduced motion: respect `prefers-reduced-motion` — disable scroll-reveals and marquees.

---

## 10. Usage Notes for Claude Code

- Reference this file directly for any component work: `"Follow docs/design-system.md for colors, type scale, radius, and shadows."`
- Prefer the Tailwind config in §3 as the source of truth for tokens rather than hardcoding hex values.
- Default corner radius for any new card component: `20px` unless it's a button (`pill`) or hero block (`30–44px`).
- Default button is the mint CTA (§7) for primary actions; purple gradient for secondary/alternate CTAs; outline for tertiary.