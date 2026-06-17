/* global React */
(function () {
const Icon = window.Icon;

function Footer() {
  const cols = [
    ["Services", ["Load Sourcing", "Rate Negotiation", "Route Planning", "Paperwork Management"]],
    ["Company", ["About Us", "Why West Dispatch", "Careers", "Contact"]],
    ["Resources", ["FAQ", "Owner-Operator Guide", "Rate Calculator", "Blog"]],
  ];
  return (
    <footer className="wd-footer">
      <div className="wd-container wd-footer__grid">
        <div className="wd-footer__brand">
          <a className="wd-logo" href="#top">
            <img src="../../assets/logo-mark-light.png" alt="West Dispatch" />
            <span className="wd-logo__name">WEST DISPATCH</span>
          </a>
          <p className="wd-footer__tag">Keeping America's owner-operators loaded, paid, and moving — 24/7.</p>
          <div className="wd-footer__social">
            {["facebook", "instagram", "linkedin", "youtube"].map(s => (
              <a key={s} href="#" className="wd-footer__soc" aria-label={s}><Icon name={s} size={18} color="var(--text-body)" /></a>
            ))}
          </div>
        </div>
        {cols.map(([h, items]) => (
          <div key={h} className="wd-footer__col">
            <div className="wd-footer__h">{h}</div>
            {items.map(i => <a key={i} href="#" className="wd-footer__link">{i}</a>)}
          </div>
        ))}
      </div>
      <div className="wd-container wd-footer__bar">
        <span>© 2026 West Dispatch LLC. All rights reserved.</span>
        <span className="wd-footer__legal"><a href="#">Privacy</a> · <a href="#">Terms</a></span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
})();
