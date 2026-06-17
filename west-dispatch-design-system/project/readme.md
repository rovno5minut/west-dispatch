# West Dispatch Design System

A dark, premium design system for **West Dispatch LLC** — a professional truck-dispatching company serving owner-operators and small fleets across the United States. The system powers a modern, trustworthy logistics marketing presence inspired by sleek dark-mode product sites (RIVR-style).

> **Company:** West Dispatch finds high-paying loads, negotiates rates, plans routes, handles broker communication and paperwork, and provides dedicated dispatcher support — keeping trucks loaded, reducing downtime, and increasing profitability.

## Sources provided
- `uploads/wd logo.jpeg` — the brand mark (deep slate-navy "W" with a vivid crimson navigation arrow). Processed into transparent + light variants in `assets/`.
- Written brief: industry (truck dispatching & logistics), audience (owner-operators, small fleets, fleet owners), style (premium, dark theme, blue accents, strong trust signals, American logistics feel), required sections, key services, hero headline and CTA.
- No codebase or Figma file was attached; the visual language is derived from the brief + logo.

---

## Brand at a glance
- **Logo:** navy "W" + crimson arrow. The arrow's red is the brand's energy accent.
- **Mood:** premium, technical, trustworthy. A dispatch "command center" feel — think live load boards, rates, and lanes.
- **Primary accent:** electric blue (`#2E6BFF`) for trust and primary action.
- **Energy accent:** logo crimson (`#F0294A`), used sparingly for the single highest-intent CTA and hot-lane highlights.

---

## CONTENT FUNDAMENTALS — how West Dispatch writes
- **Voice:** confident, plain-spoken, blue-collar-premium. Talks to drivers like a partner, not a vendor. No corporate fluff, no jargon soup.
- **Person:** second person ("**you** / **your truck**") for the reader; first-person plural ("**we** handle the dispatching") for the company. This pairing is core to the brand promise.
- **Tone:** reassuring + outcome-focused. Every claim ties back to money, uptime, or peace of mind ("keep your wheels turning," "more money on every haul").
- **Casing:** Title Case for big display headlines (hero), sentence case for section titles and body. Eyebrows are UPPERCASE mono with a leading em dash ("— What we do").
- **Headlines:** short, punchy, often two beats split by a period. Example: *"Keep Your Trucks Moving. We Handle The Dispatching."*
- **Numbers & proof:** concrete and specific — "$2,840/wk", "1,200+ owner-operators", "24 hours", "48 states". Rendered in the mono font to read like dispatch data.
- **CTAs:** action + immediacy. Primary: **"Get Started Today"**. Supporting: "See How It Works", "Book a Dispatcher", "Book Next Load".
- **Emoji:** none. The brand uses Lucide line icons, never emoji.
- **Trust language:** "no long-term contracts", "transparent flat fee", "FMCSA compliant", "real people on the phone — no bots, no phone trees".

---

## VISUAL FOUNDATIONS
- **Color vibe:** deep slate-navy canvas (`#0D1420`) — never pure black. Cool, nighttime, control-room. Electric blue is the hero accent; crimson is the spark. Greens/ambers appear only as load-status signals.
- **Surfaces:** an elevation ramp of navy tones (`navy-900` deep → `navy-600` card → `navy-500` hover). Cards sit on the base with a soft drop shadow and a 1px top **sheen** (`inset 0 1px 0 rgba(255,255,255,.06)`) for a subtle raised edge.
- **Typography:**
  - *Display* — **Space Grotesk** (700/600), tight tracking (`-0.03em`), line-height ~1.0 for big headlines.
  - *Body/UI* — **Manrope** (400–700), line-height 1.5–1.65.
  - *Mono* — **Space Mono** for rates, load IDs, eyebrows, stat captions — the "dispatch data" texture.
- **Backgrounds:** radial navy gradient on the hero (`--grad-hero`), plus a faint **blueprint grid** masked toward the top-right corner. No photography is required, though full-bleed road/truck imagery would slot in cleanly if provided. No noise/grain.
- **Gradients:** used purposefully — blue gradient on primary buttons and the hero accent text; crimson gradient on the energy CTA. Never rainbow or purple.
- **Corner radii:** generous. Chips/inputs 10–14px, cards 20px, hero panels 28px, all buttons fully **pill** (999px).
- **Cards:** rounded (20px), `--surface-card` fill, 1px subtle border, soft shadow + top sheen. Interactive cards lift 4px on hover and gain a blue border glow.
- **Borders:** hairline white-alpha (`rgba(255,255,255,.07–.18)`). Accent borders are blue-alpha.
- **Shadows:** restrained on dark — `md`/`lg` drop shadows for elevation, plus colored **glow** shadows (`--shadow-accent`, `--shadow-energy`) reserved for primary/energy buttons and the success state.
- **Motion:** quick and confident. `--ease-out` (`cubic-bezier(.16,1,.3,1)`), 140–420ms. Buttons brighten on hover and nudge down + scale 0.985 on press. The live-board status dot pulses. Respect reduced-motion for any entrance animation.
- **Hover states:** links lighten toward `--text-strong`; buttons brighten (`filter: brightness(1.08)`); cards lift + blue glow; social/icon tiles gain a blue border.
- **Press states:** translateY(1px) + scale(0.985).
- **Transparency & blur:** the sticky header uses `backdrop-filter: blur(14px)` over a translucent navy. Soft alpha fills (`rgba(255,255,255,.02)`) define inset rows on dark surfaces.
- **Layout:** 1200px max container, 32px gutters, ~120px section rhythm (tightens on mobile). Sticky header. Centered section heads with mono eyebrow → display title → body sub.

---

## ICONOGRAPHY
- **System:** [Lucide](https://lucide.dev) line icons, loaded from CDN (`lucide@0.460.0`) and rendered through the `window.Icon` wrapper in the website kit. **Substitution note:** the brief specified no icon set, so Lucide was chosen as a clean, consistent line family that matches the premium-logistics feel. Swap if a brand set is provided.
- **Style:** outlined, **1.75px stroke**, `currentColor` so icons inherit accent/text color. Sized in px via the wrapper.
- **Usage:** service tiles, "why" checklist, how-it-works step nodes, contact rows, footer social, inline affordances (arrow-right on CTAs, phone, star ratings). Common names: `truck`, `route`, `phone-call`, `file-text`, `headset`, `badge-dollar-sign`, `shield-check`, `handshake`, `banknote`, `star`, `quote`, `arrow-right`.
- **Emoji:** never. **Unicode glyphs:** only the em dash "—" in eyebrows and the "+/×" in the accordion (rotated "+").
- **Logo assets:** `assets/logo-mark.png` (navy W + red arrow, transparent), `assets/logo-mark-light.png` (light W + red arrow, for dark backgrounds), `assets/logo-mark.jpeg` (original on white).

---

## Index / manifest
**Root**
- `styles.css` — global entry point (imports only). Consumers link this.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`.
- `assets/` — logo variants.
- `readme.md` — this file. `SKILL.md` — Agent-Skills wrapper.

**Components** (`components/`, namespace `window.WestDispatchDesignSystem_52aa6d`)
- `core/` — `Button`, `Badge`, `Card`, `Stat`
- `forms/` — `Input`
- `feedback/` — `Accordion`

**UI kits** (`ui_kits/`)
- `website/` — full responsive marketing site (Header, Hero, Services, WhyChoose, HowItWorks, Testimonials, FAQ, Contact, Footer). See its `README.md`.

**Design System tab cards** — specimen cards live in `guidelines/` (Colors, Type, Spacing, Brand), each component directory (Components), and the website kit (Website).
