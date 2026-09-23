# DIKUROOMS Trading Co., Limited — Corporate Website

A static, English-language, European/American-market corporate site for DIKUROOMS Trading Co., Limited (Wholesale, Retail, Import/Export, Supply Chain, Consulting). Deployed to GitHub Pages at **https://dikurooms.com**.

## Stack
- Pure HTML5 + CSS + Vanilla ES2020 JS + SVG (no frameworks, no build step).
- Icons / logos: SVG only.
- Large imagery: generated PNG.
- Folder layout: `css/`, `js/`, `images/` at the site root.
- Cute animal mascots are core brand voice.

## Site map
- `/` — Home
- `/services.html` — Services (integrates the mobile management apps narrative per SPEC L40)
- `/culture.html` — Corporate Culture
- `/news.html` — Company News
- `/contact.html` — Contact
- `/privacy.html` — Privacy Policy (full coverage of 8 regional laws + 19 ad SDKs + 4 ad formats)
- `/terms.html` — Terms of Service
- `/404.html` — Friendly not-found page

## SEO
- Per-page unique `<title>`, meta description, canonical, OpenGraph, Twitter card.
- JSON-LD: `Organization` on every page, `WebSite` on home, `BreadcrumbList` on inner pages.
- `sitemap.xml` + `robots.txt` at the root.
- `app-ads.txt` at the root (empty until ad inventory is finalized).

## Deploy
- Repository: `github.com/qumengyao683/dikurooms.com`
- Hosting: GitHub Pages, custom domain `dikurooms.com`, HTTPS enforced.
- DNS A records: `185.199.108.153` · `185.199.109.153` · `185.199.110.153` · `185.199.111.153`.

## Local preview
```
python -m http.server 8000
# then open http://127.0.0.1:8000/
```

## Notes
- All copy is in English.
- Privacy/Terms intentionally comprehensive — do not summarize.
- Privacy covers GDPR (EU/UK), CCPA/CPRA (California), LGPD (Brazil), PIPEDA (Canada), Australia Privacy Act 1988, Singapore PDPA, Japan APPI, plus COPPA / GDPR-K / UK Age-Appropriate Design Code.
- Privacy covers 19 ad SDKs and 4 formats (splash, rewarded video, interstitial, banner).## retrigger-cert 2026-09-23 13:10:24
