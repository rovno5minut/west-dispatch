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

function WhyChoose() {
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
            <Stat value="$2,840" suffix="/wk" label="Avg. revenue lift per truck" />
            <Stat value="36%" label="Less downtime between loads" tone="energy" />
            <Stat value="400+" label="Owner-operators dispatched" />
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
