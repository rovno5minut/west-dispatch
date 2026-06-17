/* global React */
(function () {
const { Card, Badge } = window.WestDispatchDesignSystem_52aa6d;
const Icon = window.Icon;

const QUOTES = [
  ["Marcus R.", "Reefer · 3 trucks · GA", "MR", "Since switching to West Dispatch my trucks haven't sat a single weekend. The rates they pull are 15–20% better than I booked on my own.", 210],
  ["Dana K.", "Dry van owner-op · TX", "DK", "My dispatcher knows my home time and never books me a load that ruins my weekend. Feels like having a partner, not a service.", 224],
  ["Sofia P.", "Flatbed · 2 trucks · OH", "SP", "The paperwork used to eat my evenings. Now it's just handled. I drive, they dispatch, and the invoices get paid on time.", 196],
  ["Darnell T.", "26ft box truck · TX", "DT", "Went owner-op on my 26-footer last year and had no clue where to start. West Dispatch set me up on regional loops out of Dallas — home every other night and clearing $4,500 a week.", 28],
  ["Angela V.", "26ft box truck · FL", "AV", "They actually specialize in box trucks. My dispatcher knows which lanes and brokers work for a 26ft, so I'm never chasing loads that don't fit. Revenue is up 22% since I signed on.", 155],
  ["Ray M.", "26ft box truck · IL", "RM", "I was doing $2,800–$3,000 weeks before West Dispatch. Now I'm consistently at $3,800–$4,200. They negotiate hard with brokers and I rarely sit more than a couple hours between loads.", 265],
];

function Testimonials() {
  return (
    <section className="wd-section wd-testi" id="testimonials">
      <div className="wd-container">
        <div className="wd-sectionhead">
          <span className="wd-eyebrow">— From the cab</span>
          <h2 className="wd-sectionhead__title">Drivers who never look back</h2>
        </div>
        <div className="wd-grid-3">
          {QUOTES.map(([name, meta, ini, quote, hue]) => (
            <Card key={name} variant="default" padding={28} style={{ display: "flex", flexDirection: "column", gap: 18, height: "100%" }}>
              <div className="wd-stars">
                {[0,1,2,3,4].map(i => <Icon key={i} name="star" size={15} color="rgb(245, 165, 36)" />)}
              </div>
              <p className="wd-testi__quote">"{quote}"</p>
              <div className="wd-testi__by">
                <span className="wd-ava" style={{ background: `hsl(${hue} 42% 30%)` }}>{ini}</span>
                <div>
                  <div className="wd-testi__name">{name}</div>
                  <div className="wd-testi__meta">{meta}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Testimonials = Testimonials;
})();
