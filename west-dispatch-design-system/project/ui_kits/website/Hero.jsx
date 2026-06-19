/* global React */
(function () {
const { Button, Badge, Stat } = window.WestDispatchDesignSystem_52aa6d;
const Icon = window.Icon;

function LoadRow({ id, lane, rate, miles, status, tone }) {
  return (
    <div className="wd-load">
      <div className="wd-load__main">
        <div className="wd-load__lane">{lane}</div>
        <div className="wd-load__meta">{id} · {miles} mi</div>
      </div>
      <div className="wd-load__right">
        <div className="wd-load__rate">{rate}</div>
        <Badge tone={tone} dot>{status}</Badge>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="wd-hero" id="loadboard">
      <div className="wd-hero__grid-bg"></div>
      <div className="wd-container wd-hero__inner">
        <div className="wd-hero__copy">
          <span className="wd-eyebrow">— Live load board</span>
          <h2 className="wd-hero__title">Real loads, real rates,<br/><span className="wd-hero__accent">booked while you drive.</span></h2>
          <p className="wd-hero__sub">
            Every load below was sourced, negotiated, and booked by your dispatch team —
            you keep rolling, we keep the board full.
          </p>
          <div className="wd-hero__cta">
            <Button variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Get Started Today</Button>
            <Button variant="secondary" size="lg" iconLeft={<Icon name="play" size={16} />}>See How It Works</Button>
          </div>
          <div className="wd-hero__proof">
            <div className="wd-hero__avatars">
              {["JT","MR","DK","SP"].map((i, n) => (
                <span key={i} className="wd-ava" style={{ background: `hsl(${210 + n*14} 40% ${26 + n*4}%)` }}>{i}</span>
              ))}
            </div>
            <div>
              <div className="wd-stars"><Icon name="star" size={14} color="var(--warning)"/><Icon name="star" size={14} color="var(--warning)"/><Icon name="star" size={14} color="var(--warning)"/><Icon name="star" size={14} color="var(--warning)"/><Icon name="star" size={14} color="var(--warning)"/></div>
              <div className="wd-hero__prooftext">Trusted by <strong>200+</strong> owner-operators</div>
            </div>
          </div>
        </div>

        <div className="wd-hero__panel">
          <div className="wd-board">
            <div className="wd-board__head">
              <div className="wd-board__title"><span className="wd-board__live"></span> Live Load Board</div>
              <span className="wd-board__tag">DALLAS, TX</span>
            </div>
            <LoadRow id="WD-48201" lane="CA → GA" rate="$2.42/mi" miles="2232" status="Booked" tone="success" />
            <LoadRow id="WD-48207" lane="IL → TX" rate="$2.18/mi" miles="994" status="In Transit" tone="warning" />
            <LoadRow id="WD-48219" lane="PA → NJ" rate="$3.96/mi" miles="238" status="Available" tone="accent" />
            <div className="wd-board__foot">
              <Stat value="$7,420" suffix=" wk" label="Booked this week" />
              <Button variant="energy" size="sm">Book Next Load</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
})();
