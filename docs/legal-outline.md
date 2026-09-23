# Legal outline — Privacy Policy & Terms of Service

> Both `/privacy.html` and `/terms.html` must be **complete**, not summarized
> [SEPC L44]. This file enumerates every section the coding agent must render.
> Each numbered item becomes a real `<section>` (Privacy) or article (Terms)
> with full English copy, not a stub.

---

## A. Privacy Policy (`/privacy.html`)

TOC anchors (use `id="…"`):
`#scope`, `#definitions`, `#data-we-collect`, `#how-we-collect`,
`#legal-basis`, `#how-we-use`, `#sharing-and-disclosure`, `#ad-partners`,
`#ad-formats`, `#app-store-compliance`, `#regional-laws`, `#childrens-data`,
`#cookies-and-tracking`, `#international-transfers`, `#retention`,
`#your-rights`, `#security`, `#changes`, `#contact`.

### A.1 Scope and controller

- Applies to: dikurooms.com website + mobile apps published on Google Play
  and Apple App Store by DIKUROOMS Trading Co., Limited.
- Controller: **DIKUROOMS Trading Co., Limited**, Rm F(B22) 2/F FREDER CTR
  3 MOK CHEONG ST, To Kwa Wan, HK.
- Contact: support@dikurooms.com.

### A.2 Definitions

- Personal data, processing, controller, processor, user, child, SDK,
  advertising identifier (GAID / IDFA), EEA, UK, California, etc.

### A.3 Data we collect

- Identifiers: name, email, company, IP, device IDs (GAID/IDFA).
- Commercial info: inquiry topic, message body.
- Internet/network activity: pages visited, referrer, timestamps.
- Approximate location (city/country from IP).
- Mobile-app telemetry: app version, OS, crash logs, ad events.

### A.4 How we collect

- Directly: contact form, email.
- Automatically: cookies, server logs, mobile-app SDKs (see § A.8).
- From partners: app stores (basic install stats), ad networks (see § A.8).

### A.5 Legal basis (GDPR / UK GDPR Art. 6)

- Consent — non-essential cookies, ad personalization, marketing emails.
- Performance of contract — fulfilling an order or inquiry.
- Legal obligation — tax, customs, record-keeping.
- Legitimate interest — site security, fraud prevention, aggregated stats.

### A.6 How we use data

- Respond to inquiries.
- Operate and improve the website and apps.
- Show and measure advertising (see § A.8, § A.9).
- Comply with law.

### A.7 Sharing and disclosure

- Service providers: hosting, email, analytics, ad SDKs (see § A.8).
- Legal: when required by law or to protect rights.
- Business transfers: merger, acquisition.
- No sale of personal data.

### A.8 Ad partners (SDK inventory)

For **each** SDK below, the rendered HTML must include a sub-section with:
(a) SDK behaviors, (b) data collected, (c) lawful basis, (d) opt-out,
(e) link to the vendor's privacy page.

| # | SDK | Vendor |
|---|---|---|
| 1 | Google AdMob | Google |
| 2 | Google Ad Manager | Google |
| 3 | Meta Audience Network | Meta Platforms |
| 4 | Unity Ads | Unity Technologies |
| 5 | AppLovin (MAX) | AppLovin |
| 6 | ironSource / Unity LevelPlay | Unity / ironSource |
| 7 | Pangle | ByteDance |
| 8 | Vungle | Vungle (Liftoff) |
| 9 | Chartboost | Chartboost (Inmar) |
| 10 | InMobi | InMobi |
| 11 | Tapjoy | Tapjoy |
| 12 | Mintegral | Mintegral |
| 13 | Digital Turbine | Digital Turbine |
| 14 | Liftoff | Liftoff |
| 15 | Moloco | Moloco |
| 16 | Yahoo (Verizon Media) | Yahoo |
| 17 | Smaato | Smaato |
| 18 | Start.io | Start.io |
| 19 | Appodeal | Appodeal |

Sub-section template per SDK:

```
### A.8.N <SDK name> (<vendor>)

- Behaviors: <what the SDK does — initialization, ad request, render, click,
  conversion tracking, mediation hand-off>.
- Data collected: <list — advertising ID, IP, coarse location, device model,
  OS version, app bundle ID, session length, event timestamps, etc.>.
- Lawful basis: <consent / legitimate interest> for EU/UK users.
- Opt-out:
  - iOS: Settings → Tracking toggle; Apple's App Tracking Transparency prompt.
  - Android: Settings → Privacy → Ads → Opt out of Ads Personalization;
    reset advertising ID.
  - Vendor-specific opt-out (link to vendor page).
- Vendor privacy page: <URL>
```

### A.9 Ad formats used in our apps

For each format below, the rendered HTML must describe when it appears,
what data flows to ad partners, and any user control.

- **Splash / open-screen ads** — full-screen ad shown at app launch or return
  from background; data: advertising ID, app bundle, session timestamp.
- **Rewarded video ads** — user-initiated; user opts in to view in exchange for
  an in-app reward; data: reward id, completion event.
- **Interstitial ads** — full-screen at natural transition points; data: ad
  unit id, frequency caps.
- **Banner ads** — persistent strip at top/bottom of a screen; data: ad unit
  id, viewability events.

### A.10 App-store compliance

- **Apple App Store Review Guidelines** — apps comply with all current Apple
  App Store Review Guidelines, including Guidelines 1 (Objectionable Content),
  2 (Functionality), 3 (Accuracy), 4 (Design), 5 (Legal) — Privacy (5.1.1
  App Privacy questions), 5.1.2 Data Use, and the Privacy Manifest
  requirements (effective 2024-05-01).
- **Google Play Developer Program Policy** — apps comply with the Google
  Play Developer Program Policy, including User Data policies (Prominent
  Disclosure & Consent), Permissions policy, and the Families policy where
  applicable.
- Privacy nutrition labels / Data safety forms are kept current for each app
  on each store.

### A.11 Regional laws

For each region, the rendered HTML must summarize the rights granted and how
to exercise them.

- **GDPR (EU)** — Regulation (EU) 2016/679: lawful basis, data subject rights
  (access, rectification, erasure, restriction, portability, objection,
  automated decision-making), DPO contact, supervisory authority.
- **UK GDPR + Data Protection Act 2018** — same rights; ICO as supervisory
  authority.
- **CCPA / CPRA (California)** — Cal. Civ. Code §1798.100 et seq.: right to
  know, delete, correct, opt out of sale/sharing, limit use of sensitive PI,
  non-discrimination. "Do Not Sell or Share My Personal Information" link in
  the footer where applicable.
- **LGPD (Brazil)** — Lei nº 13.709/2018: rights of confirmation, access,
  correction, anonymization, portability, deletion, consent withdrawal.
- **PIPEDA (Canada)** — federal private-sector privacy; OPC contact.
- **Australia Privacy Act 1988** — APPs; OAIC contact.
- **Singapore PDPA** — Personal Data Protection Act 2012; PDPC contact.
- **Japan APPI** — Act on the Protection of Personal Information; PPC contact.

### A.12 Children's data

- **COPPA (US)** — we do not direct apps or sites to children under 13 and
  do not knowingly collect their data; parental deletion rights.
- **GDPR-K (EU)** — default age of consent is 16, but member states may
  lower to 13 (e.g. DE, IE, NL, SE, FI, etc.). Where applicable we rely on
  parental consent.
- **UK Age-Appropriate Design Code (AADC)** — best interests of the child,
  DPIA, data minimization, no behavioral advertising to children.
- If we receive data of a child in error, we delete it on discovery.

### A.13 Cookies and tracking

- Strictly necessary cookies: always on.
- Analytics cookies: opt-in (EU/UK) / opt-out (US default).
- Advertising cookies/SDKs: opt-in (EU/UK).
- Cookie banner with Reject / Accept controls; persistent choice stored.

### A.14 International transfers

- Data may be processed in Hong Kong, the EEA, the UK, the US, Singapore, or
  Japan depending on the service provider.
- Transfer mechanisms: EU Commission Standard Contractual Clauses (2021/914),
  UK IDTA/Addendum, equivalent safeguards.

### A.15 Retention

- Inquiry emails: 24 months from last interaction.
- Server logs: 12 months.
- Mobile-app analytics: 13 months maximum.
- Ad SDK identifiers: governed by the vendor's retention (linked).

### A.16 Your rights

- Access, rectification, erasure, restriction, portability, objection,
  withdrawal of consent, complaint to a supervisory authority.
- California: right to know, delete, correct, opt out of sale/sharing,
  limit use of sensitive PI, non-discrimination.
- How to exercise: support@dikurooms.com. We respond within 30 days
  (45 days under CCPA where applicable).

### A.17 Security

- TLS in transit, encryption at rest where commercially reasonable.
- Access controls, least-privilege.
- Incident notification: affected users and authorities where required.

### A.18 Changes to this policy

- Material changes posted with a new "Last updated" date.
- Non-material changes posted on this page.

### A.19 Contact

- DIKUROOMS Trading Co., Limited
- Rm F(B22) 2/F FREDER CTR 3 MOK CHEONG ST, To Kwa Wan, HK
- support@dikurooms.com

---

## B. Terms of Service (`/terms.html`)

TOC anchors:
`#acceptance`, `#services`, `#eligibility`, `#account`, `#acceptable-use`,
`#intellectual-property`, `#user-content`, `#third-party-services`,
`#app-store-addendum`, `#disclaimers`, `#limitation-of-liability`,
`#indemnification`, `#termination`, `#governing-law`, `#dispute-resolution`,
`#export-and-trade-compliance`, `#changes`, `#contact`.

### B.1 Acceptance

- By accessing dikurooms.com or installing our apps you agree to these Terms.
- If you do not agree, do not use the Services.

### B.2 Services

- Corporate site showcasing wholesale/retail, import/export (goods and
  technology), supply chain consulting, marketing planning, and business
  information consulting (SEPC L42).
- Mobile management apps published on Google Play and Apple App Store.

### B.3 Eligibility

- You represent that you are 18+ and able to form a binding contract.
- Use by minors is prohibited except as allowed under § A.12.

### B.4 Account (mobile apps)

- Some app features may require an account or invitation.
- Keep credentials confidential; you are responsible for activity under your
  account.

### B.5 Acceptable use

- No unlawful, infringing, harmful, deceptive, or abusive use.
- No reverse engineering, scraping, or interfering with security features.
- No bypassing ad frequency caps or monetization controls.

### B.6 Intellectual property

- All site/app content, designs, and code are owned by DIKUROOMS Trading Co.,
  Limited or its licensors.
- Limited, non-exclusive, non-transferable license to use the Services for
  your internal business purposes.

### B.7 User content

- You retain ownership of content you submit.
- You grant us a worldwide, royalty-free license to host, display, and
  process it for the purpose of operating the Services.

### B.8 Third-party services

- Maps, fonts, analytics, and ad SDKs (see Privacy Policy § A.8).
- Their terms and privacy practices apply in addition to ours.

### B.9 App store addendum

For users who obtained our apps from an app store, the following apply:

- **Apple**: these Terms are between you and us, not Apple; Apple is not
  responsible for the app or its maintenance/support; Apple has no obligation
  to provide refunds; Apple may enforce these Terms against you as a
  third-party beneficiary.
- **Google Play**: these Terms are between you and us; Google is not a party
  to them except as required by the Google Play Developer Distribution
  Agreement.

### B.10 Disclaimers

- Services are provided "as is" and "as available."
- No warranty of merchantability, fitness for purpose, non-infringement, or
  uninterrupted availability.

### B.11 Limitation of liability

- To the maximum extent permitted by law, we are not liable for indirect,
  incidental, special, consequential, or punitive damages.
- Aggregate liability for any claim is limited to the greater of (a) USD 100
  or (b) amounts you paid us in the 12 months preceding the claim (where
  applicable). Where local law (e.g. Germany, France) prohibits such limits,
  the statutory minimum applies.

### B.12 Indemnification

- You will indemnify and hold us harmless from third-party claims related to
  your misuse of the Services or violation of these Terms, to the extent
  permitted by law.

### B.13 Termination

- We may suspend or terminate access for breach of these Terms or for
  operational, legal, or security reasons.
- You may stop using the Services at any time.

### B.14 Governing law

- These Terms are governed by the laws of Hong Kong SAR, without regard to
  conflict-of-laws rules.
- Mandatory consumer-protection laws of your jurisdiction of residence
  remain unaffected.

### B.15 Dispute resolution

- Informal resolution first: support@dikurooms.com.
- If unresolved, courts of Hong Kong SAR have non-exclusive jurisdiction,
  subject to mandatory local consumer forums.

### B.16 Export and trade compliance

- Our Services relate to import/export of goods and technology. You are
  responsible for compliance with your local export, sanctions, and customs
  rules (EAR/ITAR, EU dual-use, UK Strategic Export Controls, etc.).
- We may decline transactions that violate applicable sanctions.

### B.17 Changes

- We may update these Terms; the "Last updated" date will change.
- Material changes will be communicated via the app or site banner.

### B.18 Contact

- DIKUROOMS Trading Co., Limited
- Rm F(B22) 2/F FREDER CTR 3 MOK CHEONG ST, To Kwa Wan, HK
- support@dikurooms.com

---

## Hand-off

The coding agent renders **every** numbered sub-section above as a real
heading + paragraph block on the corresponding page. No "see Privacy Policy"
shortcuts. Each ad-SDK sub-section in § A.8 must use the per-SDK template
(behaviors, data, lawful basis, opt-out, vendor link).