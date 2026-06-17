/* global React */
(function () {
const { Accordion } = window.WestDispatchDesignSystem_52aa6d;

const FAQS = [
  { q: "Do you require a long-term contract?", a: "No. West Dispatch is month-to-month agreement. We earn your business one load at a time — if you're not making more money, you're free to walk." },
  { q: "What do you charge?", a: (<>
    <p style={{ margin: 0 }}>We charge a 10% dispatch fee based on the load amount. However, whenever possible, we negotiate higher rates with brokers and shippers to cover our fee.</p>
    <p style={{ margin: "12px 0 0" }}>For example, if a load pays $1,000, our fee would normally be $100. Instead, we may negotiate the rate up to $1,100, allowing you to receive the full $1,000 while our fee is covered by the increased rate.</p>
    <p style={{ margin: "12px 0 0" }}>Our goal is simple: maximize your revenue while keeping your trucks moving.</p>
  </>) },
  { q: "How fast can I get my first load?", a: "Most owner-operators are onboarded and booked on a paying load within 24 hours, as long as your authority and insurance are active." },
  { q: "Do I need my own authority?", a: "Yes — you'll need active operating authority (MC/DOT) and insurance. If you're still setting up, we can point you to trusted partners who help with that." },
  { q: "Can you work with my preferred lanes and home time?", a: "Absolutely. Your dedicated dispatcher builds your schedule around the lanes you want to run and the days you need to be home." },
  { q: "What equipment types do you dispatch?", a: "Dry van, reefer, flatbed, step deck, and power-only. Tell us what you run and we'll match you with a dispatcher who knows that freight." },
];

function FAQ() {
  return (
    <section className="wd-section" id="faq">
      <div className="wd-container wd-faq">
        <div className="wd-faq__head">
          <span className="wd-eyebrow">— Questions</span>
          <h2 className="wd-sectionhead__title">Everything you want to know</h2>
          <p className="wd-sectionhead__sub">Still unsure? Call a real dispatcher at (800) 555-0199 — no bots, no phone trees.</p>
        </div>
        <div className="wd-faq__body">
          <Accordion items={FAQS} defaultOpen={0} />
        </div>
      </div>
    </section>
  );
}
window.FAQ = FAQ;
})();
