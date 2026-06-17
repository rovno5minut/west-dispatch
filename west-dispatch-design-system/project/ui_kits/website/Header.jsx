/* global React */
(function () {
const { Button, Badge } = window.WestDispatchDesignSystem_52aa6d;
const Icon = window.Icon;

function Header() {
  const [open, setOpen] = React.useState(false);
  const links = [
    ["Services", "#services"],
    ["Why Us", "#why"],
    ["How It Works", "#how"],
    ["FAQ", "#faq"],
  ];
  return (
    <header className="wd-header">
      <div className="wd-container wd-header__inner">
        <a className="wd-logo" href="#top">
          <img src="../../assets/logo-mark-light.png" alt="West Dispatch" />
          <span className="wd-logo__name">WEST DISPATCH</span>
        </a>

        <nav className="wd-nav wd-desktop">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="wd-nav__link">{l}</a>
          ))}
        </nav>

        <div className="wd-header__cta wd-desktop">
          <a href="tel:+18005550199" className="wd-nav__link wd-nav__phone">
            <Icon name="phone" size={15} /> (800) 555-0199
          </a>
          <Button variant="primary" size="sm" iconRight={<Icon name="arrow-right" size={15} />}>Get Started</Button>
        </div>

        <button className="wd-burger wd-mobile" onClick={() => setOpen(!open)} aria-label="Menu">
          <Icon name={open ? "x" : "menu"} size={24} color="var(--text-strong)" />
        </button>
      </div>

      {open && (
        <div className="wd-mobile wd-mobilemenu">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="wd-mobilemenu__link" onClick={() => setOpen(false)}>{l}</a>
          ))}
          <Button variant="primary" fullWidth iconRight={<Icon name="arrow-right" size={16} />}>Get Started Today</Button>
        </div>
      )}
    </header>
  );
}
window.Header = Header;
})();
