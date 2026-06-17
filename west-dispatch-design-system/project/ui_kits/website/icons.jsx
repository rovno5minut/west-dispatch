/* global React */
(function () {
// Lucide-backed icon. Renders an <i data-lucide> that lucide.createIcons() upgrades to <svg>.
// We re-run createIcons after each mount/update so dynamically added icons render.
function Icon({ name, size = 20, color = "currentColor", strokeWidth = 1.75, style = {} }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      window.lucide.createIcons({
        attrs: { "stroke-width": strokeWidth },
        nameAttr: "data-lucide",
      });
    }
  });
  return (
    <span
      ref={ref}
      className="wd-ico"
      style={{ display: "inline-flex", lineHeight: 0, fontSize: size, color, ...style }}
    >
      <i data-lucide={name}></i>
    </span>
  );
}

window.Icon = Icon;
})();
