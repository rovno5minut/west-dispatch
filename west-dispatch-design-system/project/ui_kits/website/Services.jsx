/* global React */
(function () {
const { Card, Badge } = window.WestDispatchDesignSystem_52aa6d;
const Icon = window.Icon;

const SERVICES = [
  ["truck", "Load Sourcing", "We scour load boards, broker networks, and direct shippers to keep your truck on the highest-paying lanes."],
  ["badge-dollar-sign", "Rate Negotiation", "Our dispatchers negotiate every rate so you earn what the freight is truly worth — not the first number offered."],
  ["route", "Route Planning", "Smart routing that minimizes deadhead miles, balances hours of service, and maximizes revenue per mile."],
  ["phone-call", "Broker Communication", "We handle every call, email, and check-in with brokers and shippers so you can stay focused on driving."],
  ["file-text", "Paperwork Management", "Rate cons, BOLs, setup packets, and invoicing — handled. Your documents stay organized and on time."],
  ["headset", "Dedicated Dispatcher", "A single point of contact who knows your truck, your lanes, and your goals — available when you need them."],
];

function ServiceCard({ icon, title, body }) {
  return (
    <Card variant="default" interactive padding={28} style={{ display: "flex", flexDirection: "column", gap: 16, height: "100%" }}>
      <span className="wd-svc__icon"><Icon name={icon} size={24} color="var(--wd-blue-300)" /></span>
      <h3 className="wd-svc__title">{title}</h3>
      <p className="wd-svc__body">{body}</p>
    </Card>
  );
}

function Services() {
  return (
    <section className="wd-section" id="services">
      <div className="wd-container">
        <div className="wd-sectionhead">
          <span className="wd-eyebrow">— What we do</span>
          <h2 className="wd-sectionhead__title">Full-service dispatching, end to end</h2>
          <p className="wd-sectionhead__sub">Everything it takes to keep your wheels turning and your revenue climbing — managed by a team that lives in the freight market.</p>
        </div>
        <div className="wd-grid-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s[1]} icon={s[0]} title={s[1]} body={s[2]} />
          ))}
        </div>
      </div>
    </section>
  );
}
window.Services = Services;
})();
