/* global React */
(function () {
const TRUCKS = [
  ["images/truck-box.jpg", "26 ft Box Truck", "Straight truck · liftgate"],
  ["images/truck-dryvan.jpg", "53' Dry Van", "Enclosed dry freight"],
  ["images/truck-flatbed.jpg", "48' Flatbed", "Open deck · step-deck"],
];

function TruckCard({ src, name, spec, dup }) {
  return (
    <figure className="wd-truck" aria-hidden={dup ? "true" : undefined}>
      <div className="wd-truck__media">
        <img className="wd-truck__photo" src={src} alt={dup ? "" : name} />
      </div>
      <figcaption className="wd-truck__cap">
        <span className="wd-truck__name">{name}</span>
        <span className="wd-truck__spec">{spec}</span>
      </figcaption>
    </figure>
  );
}

function Equipment() {
  return (
    <section className="wd-section wd-equip" id="equipment">
      <div className="wd-container">
        <div className="wd-sectionhead">
          <span className="wd-eyebrow">— What we haul</span>
          <h2 className="wd-sectionhead__title">Every trailer type, kept loaded</h2>
          <p className="wd-sectionhead__sub">Box truck, dry van, or flatbed — whatever you run, we keep it booked on high-paying lanes.</p>
        </div>
      </div>
      <div className="wd-marquee">
        <div className="wd-marquee__track">
          {TRUCKS.map((t, i) => <TruckCard key={i} src={t[0]} name={t[1]} spec={t[2]} />)}
          {TRUCKS.map((t, i) => <TruckCard key={"d" + i} src={t[0]} name={t[1]} spec={t[2]} dup />)}
        </div>
      </div>
    </section>
  );
}
window.Equipment = Equipment;
})();
