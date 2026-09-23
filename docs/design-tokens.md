# DIKUROOMS — Design Tokens

> Cadillac-class luxury, future-leaning, with a kawaii mascot heart.
> All values are CSS-variable-ready so `coding-dikurooms` can paste directly into `:root`.

---

## 1. Brand foundation

| Token | Value | Role |
|---|---|---|
| `--ink` | `#0B0B0F` | Deep ink — primary background for dark sections |
| `--charcoal` | `#15151B` | Lifted dark — surface on dark sections |
| `--graphite` | `#2A2A33` | Card / divider on dark |
| `--bone` | `#F4F4F1` | Warm off-white — primary light surface |
| `--cream` | `#EBE8DF` | Light card on light sections |
| `--mist` | `#C9CCD1` | Cool gray — borders, dividers, captions |
| `--gold` | `#C9A961` | Cadillac-crest accent — premium highlight |
| `--gold-soft` | `#E6CF9A` | Hover / glow variant |
| `--crimson` | `#B71234` | Brand red — primary CTA / urgent accent |
| `--ocean` | `#0E2A47` | Deep navy — supply-chain secondary |
| `--teal` | `#1E5F74` | Logistics accent / data viz |
| `--whatsapp` | `#25D366` | Mascot accent only (panda ear, etc.) |

Pairing rules:
- Default body bg: `--bone`; alternate dark sections use `--ink`.
- Headlines on light: `--ink`. Headlines on dark: `--bone` with `--gold` for kicker.
- CTA primary: `--crimson` on light, `--gold` on dark.
- Avoid `--gold` on `--cream` (insufficient contrast). Use `--ink` for body text on cream.

---

## 2. Typography

| Token | Stack | Weight | Use |
|---|---|---|---|
| `--font-display` | `'Playfair Display', 'Times New Roman', serif` | 400 / 700 / 900 | Hero h1, section h1 |
| `--font-serif` | `'Cormorant Garamond', Georgia, serif` | 500 / 600 | Editorial subtitles, pull-quotes |
| `--font-sans` | `'Inter', -apple-system, 'Segoe UI', sans-serif` | 300 / 400 / 500 / 700 | Body, buttons, nav |
| `--font-mono` | `'JetBrains Mono', ui-monospace, monospace` | 400 / 600 | Specs, codes, KPI |

```css
:root {
  --font-display: 'Playfair Display', 'Times New Roman', serif;
  --font-serif:   'Cormorant Garamond', Georgia, serif;
  --font-sans:    'Inter', -apple-system, 'Segoe UI', sans-serif;
  --font-mono:    'JetBrains Mono', ui-monospace, monospace;
}
```

### Type scale (perfect-fourth, base 16px)

| Token | rem | px | Use |
|---|---|---|---|
| `--fs-12` | 0.75 | 12 | Tag, eyebrow |
| `--fs-14` | 0.875 | 14 | Caption |
| `--fs-16` | 1 | 16 | Body small |
| `--fs-18` | 1.125 | 18 | Body |
| `--fs-20` | 1.25 | 20 | Lead |
| `--fs-24` | 1.5 | 24 | H4 |
| `--fs-32` | 2 | 32 | H3 |
| `--fs-48` | 3 | 48 | H2 |
| `--fs-64` | 4 | 64 | H1 (section) |
| `--fs-96` | 6 | 96 | Hero h1 |
| `--fs-128` | 8 | 128 | Display / kinetic |
| `--fs-192` | 12 | 192 | Marquee / oversized |

Line-height: display `1.04`, headings `1.1`, body `1.55`.
Letter-spacing: display `-0.02em`, eyebrow `+0.18em uppercase`, all-caps `+0.12em`.

---

## 3. Spacing scale (8pt grid)

| Token | px |
|---|---|
| `--s-4` | 4 |
| `--s-8` | 8 |
| `--s-12` | 12 |
| `--s-16` | 16 |
| `--s-24` | 24 |
| `--s-32` | 32 |
| `--s-48` | 48 |
| `--s-64` | 64 |
| `--s-96` | 96 |
| `--s-128` | 128 |
| `--s-192` | 192 |
| `--s-256` | 256 |

Section vertical rhythm: `--s-128` desktop, `--s-96` tablet, `--s-64` mobile.
Container max width: `1440px` with `clamp(16px, 4vw, 64px)` gutters.

---

## 4. Radii

| Token | px | Use |
|---|---|---|
| `--r-0` | 0 | Hard edges (frames) |
| `--r-4` | 4 | Inputs |
| `--r-8` | 8 | Buttons |
| `--r-12` | 12 | Cards |
| `--r-24` | 24 | Hero cards / image cards |
| `--r-pill` | 9999 | Pills, mascot bubbles |

---

## 5. Shadows

```css
--shadow-sm: 0 2px 8px rgba(11,11,15,0.08);
--shadow-md: 0 12px 32px rgba(11,11,15,0.12);
--shadow-lg: 0 32px 80px rgba(11,11,15,0.18);
--shadow-xl: 0 64px 160px rgba(11,11,15,0.28);
--shadow-gold: 0 24px 64px rgba(201,169,97,0.35);
--shadow-crimson: 0 16px 48px rgba(183,18,52,0.35);
--shadow-inset: inset 0 0 0 1px rgba(244,244,241,0.08);
```

Dark sections default to `--shadow-xl` + `--shadow-inset` for hairline.

---

## 6. Borders & overlays

```css
--hairline: 1px solid rgba(244,244,241,0.12);   /* on dark */
--hairline-light: 1px solid rgba(11,11,15,0.10); /* on light */
--overlay-ink: rgba(11,11,15,0.72);
--overlay-gold: linear-gradient(135deg, rgba(201,169,97,0.18), rgba(201,169,97,0));
```

---

## 7. Motion vocabulary

> Cadillac-class = layered, cinematic. **Forbidden**: simple opacity fades, default ease, single-property transitions.

### Durations

| Token | ms | Use |
|---|---|---|
| `--d-micro` | 120 | Hover, color shift |
| `--d-fast` | 240 | Tooltip, dropdown |
| `--d-enter` | 480 | Element enter, panel |
| `--d-panel` | 720 | Section reveal |
| `--d-hero` | 1200 | Hero cinematic |
| `--d-cinematic` | 1800 | Image sequence, split text |

### Easings

```css
--ease-standard:  cubic-bezier(0.22, 1, 0.36, 1);   /* default in */
--ease-soft:      cubic-bezier(0.4, 0, 0.2, 1);     /* standard material */
--ease-exit:      cubic-bezier(0.64, 0, 0.78, 0);   /* default out */
--ease-spring:    cubic-bezier(0.34, 1.56, 0.64, 1); /* bounce */
--ease-cinema:    cubic-bezier(0.77, 0, 0.175, 1);  /* hero slow-in slow-out */
```

### Keyframe library

```css
@keyframes fade-up        { from { opacity:0; transform:translate3d(0, 32px, 0);} to { opacity:1; transform:none;} }
@keyframes fade-in        { from { opacity:0;} to { opacity:1;} }
@keyframes split-text     { from { clip-path: inset(0 0 100% 0);} to { clip-path: inset(0 0 0 0);} }
@keyframes marquee        { from { transform: translateX(0);} to { transform: translateX(-50%);} }
@keyframes parallax-up    { from { transform: translate3d(0, 12%, 0) scale(1.15);} to { transform: none;} }
@keyframes scroll-progress{ from{width:0;} to{width:100%;} }
@keyframes magnetic-pull  { from { transform: translate(0,0);} to { transform: translate(var(--mx,0), var(--my,0));} }
@keyframes particle-rise  { from { transform: translateY(0) translateZ(0); opacity:0;} 50%{opacity:1;} to { transform: translateY(-120vh) translateZ(0); opacity:0;} }
@keyframes pulse-gold     { 0%,100% { box-shadow: 0 0 0 0 rgba(201,169,97,0.4);} 50% { box-shadow: 0 0 0 18px rgba(201,169,97,0);} }
@keyframes shimmer        { from { background-position: -200% 0;} to { background-position: 200% 0;} }
@keyframes ken-burns      { from { transform: scale(1.0);} to { transform: scale(1.12);} }
@keyframes blink          { 0%,92%,100%{transform: scaleY(1);} 96%{transform: scaleY(0.1);} }
@keyframes wiggle         { 0%,100%{transform: rotate(-3deg);} 50%{transform: rotate(3deg);} }
@keyframes orbit          { from { transform: rotate(0deg) translateX(60px) rotate(0deg);} to { transform: rotate(360deg) translateX(60px) rotate(-360deg);} }
```

### Pattern usage

| Pattern | Where | Notes |
|---|---|---|
| **fade-up + split-text kinetic** | Hero h1, section h1 | Words wrapped in `<span class="word"><span class="inner">`; `--d-hero`, `--ease-cinema` |
| **parallax-up** | Hero background, full-bleed images | `transform` only, scroll-linked, `scale(1.15)` start to hide edges |
| **marquee** | Service ticker bar ("Electronics · Hardware · Household · Packaging · Global") | Two duplicate lists; `--d-hero` linear infinite |
| **scroll-progress** | Top of page | Fixed `position:fixed` 4px gold bar tracking scroll |
| **image-sequence on hover** | Service cards | Stacked PNG sequence cross-faded via JS; `--d-fast` step interval |
| **magnetic cursor on CTA** | Primary buttons | JS tracks pointer within `+30px` radius and offsets `translate` |
| **particle-rise** | Supply-chain section bg | 40 SVG dots rising on a slow loop, gold/ocean colors |
| **pulse-gold** | Live indicators ("Online now", "Hot product") | `--d-enter` loop |
| **shimmer** | Skeleton loaders, hero CTA on hover | gold gradient slide |
| **ken-burns** | Long-still heroes (Culture page) | Slow infinite, alternate direction |
| **wiggle + blink** | Mascot animals scattered in margins | Subtle infinite, prefers-reduced-motion aware |

### Reduced-motion fallback

```css
@media (prefers-reduced-motion: reduce) {
  *,*::before,*::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}
```

---

## 8. Grid & layout

```css
--container-max: 1440px;
--gutter:        clamp(16px, 4vw, 64px);
--grid-cols:     12;
--grid-gap:      24px;
```

Breakpoints:
- `sm` 0–639
- `md` 640–1023
- `lg` 1024–1439
- `xl` 1440+

---

## 9. Z-index ladder

```css
--z-base: 1;
--z-mascot: 5;
--z-nav: 100;
--z-overlay: 800;
--z-modal: 900;
--z-cursor: 999;
```

---

## 10. Mascot placement rules

- Mascots `position:absolute` inside sections, `pointer-events:none`, `z-index: var(--z-mascot)`.
- Sizes: `48px` (inline emoji-equivalent), `96px` (section accent), `192px` (404 hero).
- Pair every mascot with `aria-hidden="true"`; visual flair only, never load-bearing.
- Use `<img>` referencing `/images/animals/*.svg` for crisp scaling.

---

## 11. Iconography

- Single 24×24 `viewBox`, 1.75px stroke, round caps & joins, currentColor.
- Filled variants use `--crimson` or `--gold`.
- Hover: `--d-micro`, color shift + 4px lift via `transform: translateY(-2px)`.
- Accessibility: every icon button gets `aria-label`; decorative icons use `aria-hidden="true"`.

---

## 12. File path map (handoff to coding-dikurooms)

```
images/logo/   dikurooms-logo.svg, dikurooms-logo-mono.svg, favicon.svg
images/icons/  electronics, hardware, household, packaging, supply-chain,
               consulting, marketing, mobile-app, app-store, google-play,
               support, contact, location, email, phone, twitter-x, linkedin,
               github, chevron, arrow, menu, close, search, plus, check,
               shield, lock, globe, star  (.svg)
images/hero/   home-hero.png, services-hero.png, culture-hero.png
images/sections/ electronics-showcase.png, supply-chain.png,
                mobile-app.png, consulting.png, news-1.png, news-2.png, news-3.png
images/animals/ fox, panda, cat, otter, penguin, deer, rabbit, whale, robot (.svg)
images/og/     og-cover.png
docs/          design-tokens.md  ← this file
```