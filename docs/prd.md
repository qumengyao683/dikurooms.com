# PRD — DIKUROOMS Trading Co., Limited (dikurooms.com)

> English-only corporate site for European/American markets. Hong Kong–registered
> trading company. Five primary pages, Cadillac-style visual language, pure
> HTML + CSS + JS + SVG. Source of truth: `SEPC.txt` (cited inline as "SPEC L##").
> Decisions below are locked unless the orchestrator overrides.

---

## 1. Company facts (verbatim — must appear in every page footer/contact)

| Field | Value |
|---|---|
| Legal name | DIKUROOMS Trading Co., Limited |
| Office | Rm F(B22) 2/F FREDER CTR 3 MOK CHEONG ST, To Kwa Wan, HK |
| Website | dikurooms.com |
| Support | support@dikurooms.com |
| Key accounts | qumengyao@dikurooms.com |
| App distribution | Google Play · Apple App Store |
| GitHub Pages URL | https://dikurooms.com (HTTPS forced) |
| GitHub repo | https://github.com/qumengyao683/dikurooms.com.git |

Source: SPEC L2, L4, L8, L16, L23, L42, L62, L71.

---

## 2. Business scope (verbatim, used in Services page + Privacy policy)

We wholesale and retail: electronics (電子產品), hardware fittings (五金配件),
home goods (家居用品), general merchandise (日用百貨), and packaging materials
(包裝材料的批發與零售). We also provide: import/export of goods (貨物進出口),
import/export of technology (技術進出口), supply chain consulting (供應鏈諮詢),
marketing planning (市場推廣策劃), and business information consulting (商務信息諮詢).
[SPEC L42]

---

## 3. Sitemap (5 primary pages + 2 legal)

| URL | File | Purpose |
|---|---|---|
| `/` | `index.html` | Home — hero, value props, CTA |
| `/services.html` | `services.html` | Services + mobile-app narrative (integrated) |
| `/culture.html` | `culture.html` | Company culture, team, values |
| `/news.html` | `news.html` | News & updates list |
| `/contact.html` | `contact.html` | Contact info, form, addresses |
| `/privacy.html` | `privacy.html` | Privacy Policy (full) |
| `/terms.html` | `terms.html` | Terms of Service (full) |
| `/404.html` | `404.html` | Friendly not-found with mascot |
| `/sitemap.xml` | `sitemap.xml` | SEO sitemap |
| `/robots.txt` | `robots.txt` | Crawler rules |
| `/app-ads.txt` | `app-ads.txt` | Authorized ad inventory (empty stub OK — SPEC L60) |

Notes:
- **Homepage must resolve without `index.html` in the URL** [SPEC L58]. Pages
  serves `index.html` by default. Never link to `index.html` in nav/footers.
- Every primary page footer links to Privacy Policy and Terms of Service
  [SPEC L44].
- No orphan pages — every page is linked from the top nav and the sitemap.
- Mobile-app content lives inside the Services page narrative, not a separate
  page [SPEC L40].

---

## 4. Folder layout

```
dikurooms.com/
├── index.html              # Home
├── services.html
├── culture.html
├── news.html
├── contact.html
├── privacy.html
├── terms.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── app-ads.txt             # root, empty file acceptable [SPEC L60]
├── css/
│   ├── reset.css           # modern reset + box-sizing
│   ├── tokens.css          # color/type/space tokens, light + dark
│   ├── base.css            # typography, layout primitives
│   ├── components.css      # nav, buttons, cards, forms
│   ├── animations.css      # premium motion (parallax, reveal, marquee)
│   └── pages.css           # per-page section styles
├── js/
│   ├── main.js             # nav, smooth scroll, reveal-on-scroll
│   ├── animations.js       # hero parallax, cursor-aware motion
│   ├── contact.js          # client-side form validation + mailto fallback
│   └── news.js             # JSON-driven news list rendering
├── images/
│   ├── logo.svg            # company logo
│   ├── mascot/             # cute-animal SVG/PNG mascots (hero, 404, dividers)
│   ├── icons/              # UI icons (all SVG)
│   └── hero/               # full-bleed hero PNGs (Cadillac-style photography)
└── docs/
    ├── prd.md              # this file
    └── legal-outline.md    # legal section map (drives privacy.html + terms.html)
```

Source: SPEC L46–L50.

---

## 5. Look & feel — Cadillac reference

Reference the Cadillac official site (凯迪拉克汽车官网) for premium automotive
language. Adapted for a B2B trading brand, the visual rules are:

- **Full-bleed hero**: edge-to-edge imagery with overlaid editorial typography.
  No containers cropping the photo.
- **Large editorial typography**: serif display for hero/section heads (≥ 64px
  desktop), humanist sans for body. Tight letter-spacing on display, generous
  line-height on body.
- **Generous whitespace**: 96–160px vertical rhythm between sections on desktop,
  64–96px on mobile.
- **Alternating dark/light sections**: home alternates `bg-light` and `bg-dark`
  for rhythm. Dark sections use white text + subtle gradient.
- **Premium motion**:
  - Hero parallax on scroll (transform-only, GPU).
  - Reveal-on-scroll using `IntersectionObserver` with `prefers-reduced-motion` guard.
  - Subtle hover lift on cards (translateY -4px + shadow).
  - Marquee ticker strip for client logos / business categories.
  - Cursor-aware tilt on hero CTA button (≤ 8°, throttled).
- **NOT minimal** — no flat blank pages, no tiny type, no single-color blocks.

Source: SPEC L56.

### Cute animals / emoji as brand voice

Rich use of friendly animal illustrations (SVG) and emoji accents in: hero
background accents, empty states, divider strips, 404 page, CTA buttons, section
endmarks. Animals should be brand mascots (e.g. otter, fox, cat) — not stock
emoji clichés. Keep style consistent: line + flat color, no photorealism.
[SPEC L57]

---

## 6. Per-page content outline

### 6.1 Home (`/` → `index.html`)

| Section | Notes |
|---|---|
| Hero (full-bleed PNG) | Headline + subhead + 2 CTAs ("Explore Services" / "Contact Us"). Mascot SVG corner accent. |
| Value-prop trio | 3-column grid: Wholesale & Retail · Import/Export · Consulting. |
| Services teaser | 4 cards linking to `/services.html`. |
| Mobile apps teaser | Inline band promoting iOS + Android apps (deep link to Services anchor). |
| Markets served | Marquee ticker of regions (EU, UK, US, LATAM, APAC). |
| News strip | 3 latest news items from `news.js` JSON. |
| CTA band | "Let's build something" → `/contact.html`. |
| Footer | Company facts + nav + legal links + social. |

### 6.2 Services (`/services.html`) — includes mobile apps

| Section | Notes |
|---|---|
| Hero | "Five lines of business. One trusted partner." |
| Wholesale & Retail | Electronics, hardware fittings, home goods, daily merch, packaging. |
| Import/Export of Goods | Customs, freight, documentation support. |
| Import/Export of Technology | Tech sourcing, licensing support. |
| Supply Chain Consulting | Sourcing strategy, vendor qualification, logistics. |
| Marketing Planning | Campaign planning, channel mix. |
| Business Information Consulting | Market entry, partner introductions. |
| **Mobile Management Apps (anchor: `#mobile-apps`)** | We publish apps on **Google Play** and **Apple App Store** for on-the-go management of orders, inventory, supplier contacts, and shipping status. The apps integrate ad SDKs — see Privacy Policy for full list. CTAs to app store badges (SVG). |
| CTA band | "Talk to our team" → `/contact.html`. |
| Footer | standard. |

[SPEC L40, L42]

### 6.3 Culture (`/culture.html`)

| Section | Notes |
|---|---|
| Hero | "Quiet craft, global reach." |
| Story | Hong Kong origin, European/American market focus. |
| Values | 4 cards: Reliability, Transparency, Craft, Long-term thinking. |
| Team | Portrait grid (placeholder PNGs with alt text). |
| Mascot wall | Friendly-animal SVG illustration strip. |
| Footer | standard. |

### 6.4 News (`/news.html`)

| Section | Notes |
|---|---|
| Hero | "Updates from the team." |
| News list | Rendered from `js/news.js` JSON. Categories: Product, Trade, Compliance. |
| Empty state | Friendly mascot illustration + "No posts here — check back soon." |
| Footer | standard. |

### 6.5 Contact (`/contact.html`)

| Section | Notes |
|---|---|
| Hero | "Let's talk." |
| Office block | Full address verbatim. |
| Email block | support@dikurooms.com, qumengyao@dikurooms.com. |
| Contact form | Name, company, email, topic, message. Client-side validated; `mailto:` fallback or service endpoint if added later. |
| Map embed | Optional static map image (no external JS). |
| Footer | standard. |

### 6.6 Privacy Policy (`/privacy.html`)

Full copy driven by `docs/legal-outline.md`. Not summarized — every section is
written out in the page. Anchor TOC at top.

### 6.7 Terms of Service (`/terms.html`)

Full copy driven by `docs/legal-outline.md`. Not summarized.

### 6.8 404 (`/404.html`)

Cute mascot illustration (SVG), headline "We can't find that page", short
copy, primary CTA back to `/`, secondary CTA to `/contact.html`.

---

## 7. SEO checklist (Google-compatible)

| Item | Where | Status |
|---|---|---|
| `<!doctype html>` + `lang="en"` | every page | required |
| Unique `<title>` per page | `<head>` | required |
| Meta description (≤ 160 chars) | `<head>` | required |
| Canonical URL (absolute, https) | `<head>` | required |
| OpenGraph (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:site_name`) | `<head>` | required |
| Twitter card (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`) | `<head>` | required |
| JSON-LD `Organization` | Home `<head>` | required |
| JSON-LD `WebSite` (with `SearchAction` optional) | Home `<head>` | required |
| JSON-LD `BreadcrumbList` | inner pages `<body>` | required |
| Semantic HTML5 (`header`, `nav`, `main`, `article`, `section`, `footer`) | everywhere | required |
| Single `<h1>` per page | everywhere | required |
| Heading order h1→h2→h3 (no skip) | everywhere | required |
| Descriptive `alt` text on every `<img>` | everywhere | required |
| Decorative SVGs `aria-hidden="true"` + `role="img"` skipped | everywhere | required |
| `sitemap.xml` lists all 5 pages + privacy + terms | root | required |
| `robots.txt` allows crawl, points to sitemap | root | required |
| No orphan pages | site links + sitemap | required |
| Internal links resolve (no broken `#`) | everywhere | required |
| HTTPS forced (GitHub Pages setting) | repo settings | required |
| Mobile viewport meta | `<head>` | required |
| `prefers-reduced-motion` honored | `css/animations.css`, `js/` | required |
| `app-ads.txt` present | root | required (empty OK) |

Source: SPEC L52, L60, L71.

---

## 8. Ad-platform inventory (used in Privacy Policy)

The Privacy Policy must cover **at minimum** the following ad SDKs, with for
each: SDK behaviors, data collected, lawful basis, opt-out mechanism, and the
vendor's privacy-page link. Full enumeration lives in `docs/legal-outline.md`.

| # | SDK | Vendor | Notes |
|---|---|---|---|
| 1 | Google AdMob | Google | Banner / interstitial / rewarded / native |
| 2 | Google Ad Manager | Google | Programmatic mediation |
| 3 | Meta Audience Network | Meta | Banner / interstitial / rewarded |
| 4 | Unity Ads | Unity | Banner / interstitial / rewarded |
| 5 | AppLovin MAX | AppLovin | Mediation + bidder |
| 6 | ironSource (Unity LevelPlay) | Unity / ironSource | Mediation |
| 7 | Pangle | ByteDance | Banner / interstitial / rewarded / splash |
| 8 | Vungle | Vungle / Liftoff | Rewarded, playable |
| 9 | Chartboost | Chartboost / Inmar | Interstitial / rewarded |
| 10 | InMobi | InMobi | Interstitial / rewarded / native |
| 11 | Tapjoy | Tapjoy | Offerwall / rewarded |
| 12 | Mintegral | Mintegral | Banner / interstitial / rewarded / splash |
| 13 | Digital Turbine | Digital Turbine | App preload + mediation |
| 14 | Liftoff | Liftoff | Mediation |
| 15 | Moloco | Moloco | Programmatic DSP |
| 16 | Yahoo (Verizon Media) | Yahoo | Native + video |
| 17 | Smaato | Smaato | Header bidding |
| 18 | Start.io | Start.io | Full-screen / video |
| 19 | Appodeal | Appodeal | Aggregator |

Ad formats used in our apps:
- **Splash / open-screen ads** — full-screen at launch
- **Rewarded video ads** — opt-in reward in exchange for a view
- **Interstitial ads** — full-screen between screens
- **Banner ads** — persistent strip at top/bottom

Source: SPEC L44.

---

## 9. Privacy & Terms route map

| Surface | Drives |
|---|---|
| Privacy Policy (`/privacy.html`) | `docs/legal-outline.md` § A |
| Terms of Service (`/terms.html`) | `docs/legal-outline.md` § B |

Both pages are **complete**, not summarized [SPEC L44]. Coding agent must render
every bullet from `legal-outline.md` as a real section in the page.

---

## 10. Out of scope (v1)

- Server-side form submission (mailto fallback only).
- CMS / blog backend (news is JSON-driven).
- i18n / multi-language.
- Authentication / user accounts on the site.
- E-commerce checkout.

---

## 11. Hand-off to coding-dikurooms

Coding agent picks up **next**:
- **Primary**: `E:\香港\11\docs\legal-outline.md` — render every section as a
  full HTML page (`privacy.html` + `terms.html`).
- **Then**: build the 5 primary pages using the per-page outline in § 6 of
  this file.
- **Always-on**: the SEO checklist in § 7 must pass on every page.
- **Visual**: follow § 5 (Cadillac reference) + cute-animal brand voice.