# West Dispatch — Project Progress

**Repo:** https://github.com/rovno5minut/west-dispatch  
**Last updated:** 2026-06-19  
**Stack:** Vanilla HTML / CSS / JS — no build step, no framework  
**CSS version:** `site.css?v=19`

---

## Current State

The marketing website is live on GitHub main. All major sections are built. The hero section features an interactive D3-powered USA freight heat map. Mobile layout is stacked (map above text). Live loads tick on each state independently.

---

## 1. Map Implementation

**Files:** `west-dispatch-design-system/project/site/index.html`  
**Libraries:** D3.js v7 (CDN) + TopoJSON client (CDN) + `topojson-110m.json` (~300 KB)  
**Projection:** `d3.geoAlbersUsa()` — Albers equal-area conic with Alaska/Hawaii insets

### Projection parameters

```js
var isMobile = W < 768;
projection = d3.geoAlbersUsa()
  .scale(W * (isMobile ? 1.45 : 1.28))
  .translate([isMobile ? W * 0.47 : W / 2, isMobile ? H * 0.32 : H * 0.47]);
```

- **Desktop:** scale `W×1.28`, centered at `(W/2, H×0.47)`
- **Mobile:** scale `W×1.45`, shifted right to `W×0.47` so California's interior is visible

### State visibility at 390px (measured, iPhone 14)

| State      | x1  | x2  | Visible |
|------------|-----|-----|---------|
| California | -21 |  42 | 67% (coast off-screen, LA/Central Valley/Sacramento visible) |
| Oregon     | -15 |  48 | 75% |
| Washington |  -1 |  51 | 98% |
| Maine      | 359 | 388 | 100% |
| Texas      |  99 | 209 | 100% |
| Florida    | 258 | 330 | 100% |

### Dynamic container trim (mobile only)

After all state paths are appended to the SVG, `getBBox()` locates the bottom of the southernmost visible state (Florida, y≈244). The container and SVG viewBox are then trimmed to `Florida_bottom + 72px` (72px for the legend):

```js
if (isMobile) {
  var maxStateY = 0;
  svgEl.querySelectorAll('path[data-name]').forEach(function(p) {
    var n = p.getAttribute('data-name');
    if (!n || n === 'Alaska' || n === 'Hawaii') return;
    try {
      var b = p.getBBox();
      if (b.x + b.width > 0 && b.x < W) {
        maxStateY = Math.max(maxStateY, Math.min(b.y + b.height, H));
      }
    } catch(e) {}
  });
  if (maxStateY > 80) {
    var trimH = Math.round(maxStateY + 72);
    svgEl.setAttribute('viewBox', '0 0 ' + W + ' ' + trimH);
    fmapEl.style.height = trimH + 'px';
    H = trimH;  // used by initCanvas() below
  }
}
```

Result at 390×844px: CSS initial height `clamp(440px, 55vh, 510px)` → trimmed to **316px**.  
This eliminates the ~148px dark ocean void that previously existed below Florida.

### Canvas route overlay

`<canvas id="fmap-canvas" position:absolute inset:0>` sits over the SVG (pointer-events: none).  
Initialized via `initCanvas(W, H)` immediately after the viewBox trim, using the updated H.  
DPR-aware: canvas attributes set to `W×dpr` / `H×dpr` (dpr capped at 2).

**16 hub cities:** Chicago, LA, NYC, Dallas, Atlanta, Houston, Memphis, KC, Denver, Seattle, Miami, Phoenix, Minneapolis, Detroit, Nashville, Charlotte

**23 routes across 3 tiers:**
- Tier 1 (major, 3 particles): Chicago↔LA, Chicago↔NYC, Chicago↔Dallas, LA↔Dallas, NYC↔Atlanta, Dallas↔Atlanta
- Tier 2 (regional, 2 particles): 12 corridors connecting secondary hubs
- Tier 3 (minor, 1 particle): 5 corridors

Each particle travels a quadratic bezier from hub A to B with a randomized bow. Hubs display breathing glow + expanding pulse rings.

### Resize handler

Debounced 180ms. Calls `renderMap(cachedUS)` — the dynamic trim re-runs on every resize.

---

## 2. Mobile Layout

**Breakpoint:** `@media (max-width: 767px)` in `site.css`

### Stack order

```
[Nav bar — 77px fixed]
[.fmap — 316px, dynamically trimmed by JS]
[28px gap]
[.ssh__content — eyebrow, headline, description, CTAs]
```

### Key CSS overrides

```css
/* Hero becomes a normal flex column instead of sticky scroll section */
.ssh__sticky {
  position: relative;
  height: auto;
  overflow: visible;
  display: flex;
  flex-direction: column;
  background: #08111F;
}

/* Map block — initial height before JS trim */
.fmap {
  position: relative;
  inset: auto;
  width: 100%;
  height: clamp(440px, 55vh, 510px);  /* JS overrides to ~316px */
  flex-shrink: 0;
}

/* Text section below map */
.ssh__content {
  position: static;
  padding: 0 20px 52px;
  margin-top: 28px;
}

/* Typography */
.ssh__title   { font-size: clamp(30px, 8.5vw, 44px); text-shadow: none; }
.ssh__sub     { font-size: 15px; margin-top: 14px; }
.ssh__actions { flex-direction: column; gap: 10px; margin-top: 22px; }
.ssh__actions .wd-btn { width: 100%; justify-content: center; }

/* Hidden on mobile */
.ssh__scrim { display: none; }
.ssh__cue   { display: none; }
```

**Desktop:** unchanged — `.fmap` stays `position:absolute; inset:0` filling the full hero. Text overlays with absolute positioning and scrim gradient.

**Why `clamp(440px, 55vh, 510px)` as initial height:**  
The projection needs `H ≥ 440px` so that `TY = H×0.32 ≥ 141px`, which positions Washington state at the map top edge (y ≈ 0) without clipping.

---

## 3. Heat Map System

### State data (SDATA)

Each state entry: `{ loads: N, rate: '$X.XX', tier: 1–5 }`

**Tier 1 — Major Market (100+ loads/day, bright blue):**  
California 138, Texas 124, Illinois 118, Georgia 112, Florida 107, Ohio 103, Pennsylvania 98

**Tier 2 — Strong Market (60–99 loads/day):**  
Tennessee 94, New York 91, North Carolina 86, Indiana 83, Michigan 78, Missouri 74, Wisconsin 68, Virginia 64

**Tier 3 — Active Market (25–59 loads/day):**  
Alabama, Arizona, Colorado, Iowa, Kansas, Kentucky, Minnesota, Mississippi, Nebraska, Nevada, New Jersey, South Carolina, Utah

**Tier 4 — Light Market (10–24 loads/day):**  
Arkansas, Connecticut, Idaho, Louisiana, Maryland, New Mexico, Oklahoma, Oregon, Washington, West Virginia + others

**Tier 5 — Thin Market (<10 loads/day, near-black):**  
Alaska, Delaware, Hawaii, Maine, Montana, New Hampshire, North Dakota, Rhode Island, South Dakota, Vermont, Wyoming

### Tier → color mapping

| Tier | Base fill | Stroke |
|------|-----------|--------|
| 1 | `rgba(58,141,255,0.38)` — bright blue | `rgba(90,165,255,0.60)` |
| 2 | `rgba(36,98,188,0.48)` | `rgba(65,130,225,0.52)` |
| 3 | `rgba(26,70,140,0.56)` | `rgba(48,105,200,0.46)` |
| 4 | `rgba(18,48,96,0.62)` | `rgba(34,75,155,0.40)` |
| 5 | `rgba(14,35,66,0.75)` — near-black navy | `rgba(22,52,105,0.35)` |

**Hover (all tiers):** amber `rgba(201,168,76,…)` with dual `drop-shadow` glow. Amber is exclusively reserved for interaction — never used as a base fill.

### Tooltip

Appears on mouseover / touchstart. Shows: state name, live load count with ↑/↓ direction arrow, avg rate, tier label.  
Left-edge clamped to `8px` to prevent clipping at the viewport left edge.  
Touch: auto-dismisses after 1.4s.

---

## 4. Live Loads System

### State of each state

```js
var LIVE = {};  // { [stateName]: { cur, prev, dir } }
// cur = current displayed value (interpolated)
// dir = +1 (up), -1 (down), 0 (flat)
```

### Tick parameters

| Tier | Max swing | Step | Interval |
|------|-----------|------|----------|
| 1 | ±25 | ±10 | 2–5s |
| 2 | ±15 | ±7  | 2–5s |
| 3 | ±8  | ±5  | 2–5s |
| 4 | ±4  | ±3  | 2–5s |
| 5 | ±2  | ±2  | 2–5s |

### Tick behavior

1. Random delta `(±step, non-zero)` applied to `cur`, clamped to `[base−max, base+max]`
2. Smooth ease-in-out animation over 500–1000ms (`p < 0.5 ? 2p² : −1+(4−2p)p`)
3. If that state is currently hovered: tooltip load count updates live, hover fill opacity nudges
4. Next tick scheduled at `2000 + rand(0–3000)ms`
5. Staggered start: each state's first tick fires at a random offset `0–2500ms` so states don't pulse in sync

### Live hover fill

```js
function liveHoverFill(tier, name) {
  var ratio = (live.cur - d.loads) / TIER_MAX[tier];
  var op = Math.max(0.08, Math.min(0.72, ts.hoverFillOpacity + ratio * 0.07));
  return 'rgba(201,168,76,' + op.toFixed(2) + ')';
}
```

High-demand spike → slightly brighter amber. Low-demand dip → slightly dimmer. Max ±7% opacity shift.

---

## 5. Remaining Tasks

### High priority

- [ ] **California coast** — Pacific coastline is 21px off-screen left. Interior (LA, Sacramento, Central Valley) is visible but coast strip is cut. To show full CA coast at x=0, reduce scale to `W×1.38`; tradeoff is ~5% smaller states overall.
- [ ] **WA top edge** — Washington state top (y=−14) is slightly above the SVG origin. Small dark gap at map top edge. Fix: increase `H×0.32` to `H×0.34` or add a few pixels of top padding in the viewBox crop.
- [ ] **Contact form** — no submit handler. Form submits to nowhere. Wire to Formspree, EmailJS, or a serverless function.

### Medium priority

- [ ] **Mobile live-loads counter in hero** — a "Available Loads: 1,247 ↑" ticker above the fold that pulses in real-time. Currently the stats section is below the fold.
- [ ] **Mobile route animation visibility** — canvas particles and hub rings may be too small at `W×1.45` scale. Review particle size / line weight for <400px viewports.
- [ ] **Legend overlap** — the "FREIGHT DEMAND" legend sits at y=315–375 in a 316px-tall container. Its bottom edge is exactly at the container edge and may visually clip on some devices. Add `overflow: visible` to `.fmap` or reduce legend height.
- [ ] **Map blank on CDN failure** — D3, TopoJSON, and the JSON file all load from CDN. No fallback UI if any request fails. Add a try/catch with a visible error message.

### Lower priority

- [ ] **Testimonials** — replace placeholder cards with real customer quotes and photos
- [ ] **SEO** — Open Graph tags, Twitter card, LocalBusiness structured data, canonical URL
- [ ] **Favicon** — replace `logo-mark-light.png` with a proper multi-size `.ico` set
- [ ] **Analytics** — Google Analytics or Plausible
- [ ] **Legal pages** — Privacy Policy and Terms of Service linked from footer
- [ ] **Deployment** — Vercel/Netlify/GitHub Pages with custom domain
- [ ] **Performance** — D3 + TopoJSON CDN loads ~300 KB; add a skeleton/spinner so the hero isn't blank while loading

---

## Commit History

| Hash | Description |
|------|-------------|
| `00d5139` | Add interactive D3 freight map hero with amber hover states |
| `d3d2531` | Replace video hero with live canvas freight network animation |
| `bfb0778` | Convert hero to scroll-driven video animation |
| `9e8b45b` | Replace hero with animated map video; add mobile How It Works arrows |
| `5577e1b` | Add animated How It Works process flow and live dispatch stats |
| `1da117f` | Initial website commit |

---

## Key File Locations

| File | Purpose |
|------|---------|
| `project/site/index.html` | All JS, SDATA, HUBS, RDEFS, FIPS lookup, HTML structure |
| `project/site/site.css` | All styles; mobile overrides at `@media (max-width: 767px)` |
| `project/site/topojson-110m.json` | US state geometry (fetched at runtime, ~300 KB) |
