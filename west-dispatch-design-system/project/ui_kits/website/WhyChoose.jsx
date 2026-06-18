/* global React */
(function () {
const { Card, Stat, Badge } = window.WestDispatchDesignSystem_52aa6d;
const Icon = window.Icon;

const REASONS = [
  ["shield-check", "No long-term contracts", "Month-to-month. Stay because the loads are good — never because you're locked in."],
  ["percent", "Transparent flat fee", "One clear dispatch fee per load. No hidden cuts, no surprise factoring deductions."],
  ["clock", "24/7 dispatcher support", "Real people on the phone when you need them — nights, weekends, and breakdowns included."],
  ["trending-up", "Higher revenue per mile", "Our negotiators consistently book lanes above market — more money on every haul."],
];

const LIVE_STATS = [
  { id: "wd-live-revenue",    min: 2500, max: 7500, minJump: 300 },
  { id: "wd-live-downtime",   min: 30,   max: 40,   minJump: 2   },
  { id: "wd-live-dispatched", min: 100,  max: 200,  minJump: 8   },
];

const statValStyle = {
  fontFamily: "var(--font-display)", fontWeight: "var(--fw-bold)",
  fontSize: 46, lineHeight: 1, letterSpacing: "var(--ls-tight)", color: "var(--text-strong)",
};
const statLblStyle = {
  marginTop: 10, fontSize: 13, fontFamily: "var(--font-mono)",
  letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)",
};

function WhyChoose() {
  React.useEffect(() => {
    const rnd = (min, max) => Math.round(min + Math.random() * (max - min));
    const stats = LIVE_STATS.map(s => ({ ...s, cur: rnd(s.min, s.max), hist: [] }));
    const timers = [];
    function ease(t) { return t < 0.5 ? 2*t*t : -1 + (4-2*t)*t; }
    function fmt(s, v) {
      const n = Math.round(v);
      if (s.id === "wd-live-revenue")    return "$" + n.toLocaleString() + '<span style="color:var(--wd-blue-300);margin-left:2px">/wk</span>';
      if (s.id === "wd-live-downtime")   return n + "%";
      if (s.id === "wd-live-dispatched") return n + '<span style="color:var(--wd-blue-300);margin-left:2px">+</span>';
    }
    stats.forEach(s => { const el = document.getElementById(s.id); if (el) el.innerHTML = fmt(s, s.cur); });
    function nextVal(s) {
      let n, tries = 0;
      do { n = rnd(s.min, s.max); tries++; }
      while (tries < 30 && (Math.abs(n - s.cur) < s.minJump || s.hist.indexOf(n) !== -1));
      s.hist.push(n); if (s.hist.length > 4) s.hist.shift();
      return n;
    }
    function animateTo(s, target) {
      const from = s.cur, dur = 1000 + Math.random() * 600, t0 = performance.now();
      const el = document.getElementById(s.id);
      if (!el) return;
      (function tick(now) {
        const p = Math.min((now - t0) / dur, 1);
        el.innerHTML = fmt(s, from + (target - from) * ease(p));
        if (p < 1) requestAnimationFrame(tick);
        else { s.cur = target; schedule(s); }
      })(t0);
    }
    function schedule(s) {
      const t = setTimeout(() => animateTo(s, nextVal(s)), 2000 + Math.random() * 3000);
      timers.push(t);
    }
    stats.forEach((s, i) => {
      const t = setTimeout(() => schedule(s), Math.random() * 1500 + i * 500);
      timers.push(t);
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="wd-section wd-why" id="why">
      <div className="wd-container wd-why__grid">
        <div className="wd-why__left">
          <span className="wd-eyebrow">— Why West Dispatch</span>
          <h2 className="wd-sectionhead__title">Carriers stay with us because the numbers work</h2>
          <p className="wd-sectionhead__sub">We treat your truck like our own business. Less downtime, better rates, and a dispatcher who actually picks up the phone.</p>
          <div className="wd-why__list">
            {REASONS.map(([ic, t, b]) => (
              <div className="wd-why__item" key={t}>
                <span className="wd-why__check"><Icon name={ic} size={20} color="var(--wd-blue-300)" /></span>
                <div>
                  <div className="wd-why__t">{t}</div>
                  <div className="wd-why__b">{b}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="wd-why__right">
          <Card variant="accent" padding={32} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <div className="wd-live-header">
              <span className="wd-live-badge"><span className="wd-live-dot"></span>LIVE</span>
              <span className="wd-live-label">Dispatch metrics</span>
            </div>
            <div>
              <div id="wd-live-revenue" style={statValStyle}>$2,840<span style={{ color: "var(--wd-blue-300)", marginLeft: 2 }}>/wk</span></div>
              <div style={statLblStyle}>Avg. revenue lift per truck</div>
            </div>
            <div>
              <div id="wd-live-downtime" style={statValStyle}>36%</div>
              <div style={statLblStyle}>Less downtime between loads</div>
            </div>
            <div>
              <div id="wd-live-dispatched" style={statValStyle}>207<span style={{ color: "var(--wd-blue-300)", marginLeft: 2 }}>+</span></div>
              <div style={statLblStyle}>Owner-operators dispatched</div>
            </div>
            <Stat value="24/7" label="Dispatcher availability" tone="energy" />
          </Card>
          <div className="wd-why__quote">
            <Icon name="quote" size={28} color="var(--accent)" />
            <p>"They keep me loaded every single week. I just drive — they handle everything else."</p>
            <div className="wd-why__quoteby">— Marcus R., reefer owner-op, 3 trucks</div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.WhyChoose = WhyChoose;
})();
