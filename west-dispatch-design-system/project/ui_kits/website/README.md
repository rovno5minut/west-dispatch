# West Dispatch — Website UI Kit

A high-fidelity recreation of the West Dispatch marketing site: a dark, premium logistics landing page for owner-operators and small fleets.

## Files
- `index.html` — assembles the full responsive page and is the **starting point** entry.
- `site.css` — page-level layout + responsive rules (the kit's own scaffolding; reusable primitives live in `/components`).
- `icons.jsx` — `window.Icon`, a Lucide-backed icon wrapper.
- `Header.jsx`, `Hero.jsx`, `Services.jsx`, `WhyChoose.jsx`, `HowItWorks.jsx`, `Testimonials.jsx`, `FAQ.jsx`, `Contact.jsx`, `Footer.jsx` — one section each, each registers itself on `window`.
- `mobile.card.html` — frames `index.html` at 430px to preview the responsive layout.

## Sections (in order)
1. **Header** — sticky, blurred; logo + nav + phone + Get Started. Collapses to a hamburger under 960px.
2. **Hero** — headline "Keep Your Trucks Moving. We Handle The Dispatching." + a live load-board mock panel.
3. **Services** — 6 services in a 3-up card grid (load sourcing, rate negotiation, route planning, broker comms, paperwork, dedicated dispatcher).
4. **Why Choose** — trust bullets + a stat card + pull quote.
5. **How It Works** — 4 numbered steps on a connecting line.
6. **Testimonials** — 3 driver quote cards.
7. **FAQ** — sticky heading + Accordion.
8. **Contact** — info column + lead form with a success state.
9. **Footer** — brand, link columns, social, legal bar.

## Composition notes
- Built **on top of** the design-system primitives: `Button`, `Badge`, `Card`, `Stat`, `Input`, `Accordion` come from `window.WestDispatchDesignSystem_52aa6d` (the compiled `_ds_bundle.js`). The kit does not re-implement them.
- Icons are **Lucide** via CDN (`lucide@0.460.0`), rendered through `window.Icon`. Stroke weight 1.75 to match the premium feel.
- Fully responsive: 3-up → 2-up → 1-up grids; hero reflows; nav becomes a mobile menu.
