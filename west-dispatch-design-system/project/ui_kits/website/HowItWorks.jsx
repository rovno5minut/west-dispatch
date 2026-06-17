/* global React */
(function () {
const Icon = window.Icon;

const STEPS = [
  ["clipboard-list", "01", "Quick Onboarding", "Send us your MC authority, COI, W9 and equipment details. We get you set up within 30 minutes."],
  ["search", "02", "We Find Your Loads", "Your dedicated dispatcher sources high-paying lanes that fit your truck, your home time, and your preferred routes."],
  ["handshake", "03", "We Negotiate & Book", "We push for the best rate, confirm the load, and handle all the paperwork and broker setup for you."],
  ["banknote", "04", "You Drive & Get Paid", "Hit the road with a full schedule. We manage check calls and invoicing so the money keeps flowing."],
];

function HowItWorks() {
  return (
    <section className="wd-section" id="how">
      <div className="wd-container">
        <div className="wd-sectionhead">
          <span className="wd-eyebrow">— How it works</span>
          <h2 className="wd-sectionhead__title">From sign-up to loaded in 24 hours</h2>
          <p className="wd-sectionhead__sub">A simple, proven process built around keeping your truck moving.</p>
        </div>
        <div className="wd-steps">
          <div className="wd-steps__line"></div>
          {STEPS.map(([ic, n, t, b]) => (
            <div className="wd-step" key={n}>
              <div className="wd-step__node">
                <span className="wd-step__icon"><Icon name={ic} size={26} color="var(--wd-blue-300)" /></span>
                <span className="wd-step__num">{n}</span>
              </div>
              <h3 className="wd-step__title">{t}</h3>
              <p className="wd-step__body">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.HowItWorks = HowItWorks;
})();
