/* global React */
(function () {
const Icon = window.Icon;

const STEPS = [
  ["clipboard-list", "01", "Quick Onboarding",    "Send us your MC authority, COI, W9 and equipment details. We get you set up within 30 minutes.", 1],
  ["search",         "02", "We Find Your Loads",  "Your dedicated dispatcher sources high-paying lanes that fit your truck, your home time, and your preferred routes.", 2],
  ["handshake",      "03", "We Negotiate & Book", "We push for the best rate, confirm the load, and handle all the paperwork and broker setup for you.", 3],
  ["banknote",       "04", "You Drive & Get Paid","Hit the road with a full schedule. We manage check calls and invoicing so the money keeps flowing.", 4],
];

const HOLD   = [1400, 1400, 1400, 2200];
const TRAVEL = 650;

function HowItWorks() {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const fill = container.querySelector('#wd-flow-fill');
    const dot  = container.querySelector('#wd-flow-dot');
    const line = container.querySelector('.wd-flow__line');
    const steps = Array.from(container.querySelectorAll('[data-step]'));
    if (!fill || !dot || !steps.length) return;

    function posOf(i) {
      if (!line) return 0;
      const node = steps[i].querySelector('.wd-step__node');
      const l = line.getBoundingClientRect();
      const n = node.getBoundingClientRect();
      return Math.max(0, Math.min(100, (n.left + n.width / 2 - l.left) / l.width * 100));
    }

    function setClasses(i, ...cls) {
      const s = steps[i];
      s.classList.remove('wd-step--muted', 'wd-step--active', 'wd-step--done', 'wd-step--success');
      cls.forEach(c => s.classList.add(c));
    }

    function moveLine(toIdx, cb) {
      const p = posOf(toIdx) + '%';
      fill.style.transition = `width ${TRAVEL}ms cubic-bezier(0.4,0,0.2,1)`;
      dot.style.transition  = `left ${TRAVEL}ms cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease`;
      fill.style.width = p;
      dot.style.left   = p;
      dot.style.opacity = '1';
      timers.push(setTimeout(cb, TRAVEL));
    }

    const timers = [];
    let active = true;

    function cycle() {
      if (!active) return;
      steps.forEach(s => {
        s.classList.remove('wd-step--active', 'wd-step--done', 'wd-step--success');
        s.classList.add('wd-step--muted');
      });
      requestAnimationFrame(() => {
        fill.style.transition = 'none';
        fill.style.width = posOf(0) + '%';
        dot.style.transition = 'none';
        dot.style.left   = posOf(0) + '%';
        dot.style.opacity = '0';

        requestAnimationFrame(() => {
          setClasses(0, 'wd-step--active');
          dot.style.transition = 'opacity 0.3s ease';
          dot.style.opacity = '1';

          timers.push(setTimeout(() => {
            setClasses(0, 'wd-step--done');
            moveLine(1, () => {
              setClasses(1, 'wd-step--active');
              timers.push(setTimeout(() => {
                setClasses(1, 'wd-step--done');
                moveLine(2, () => {
                  setClasses(2, 'wd-step--active');
                  timers.push(setTimeout(() => {
                    setClasses(2, 'wd-step--done');
                    moveLine(3, () => {
                      setClasses(3, 'wd-step--active', 'wd-step--success');
                      timers.push(setTimeout(() => {
                        setClasses(3, 'wd-step--done');
                        dot.style.transition = 'opacity 0.5s ease';
                        dot.style.opacity = '0';
                        timers.push(setTimeout(cycle, 700));
                      }, HOLD[3]));
                    });
                  }, HOLD[2]));
                });
              }, HOLD[1]));
            });
          }, HOLD[0]));
        });
      });
    }

    const section = container.closest('#how') || container.parentElement;
    if (window.IntersectionObserver && section) {
      const io = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) { io.disconnect(); timers.push(setTimeout(cycle, 400)); }
      }, { threshold: 0.25 });
      io.observe(section);
    } else {
      timers.push(setTimeout(cycle, 800));
    }

    return () => { active = false; timers.forEach(clearTimeout); };
  }, []);

  return (
    <section className="wd-section" id="how">
      <div className="wd-container">
        <div className="wd-sectionhead">
          <span className="wd-eyebrow">— How it works</span>
          <h2 className="wd-sectionhead__title">From sign-up to loaded in 24 hours</h2>
          <p className="wd-sectionhead__sub">A simple, proven process built around keeping your truck moving.</p>
        </div>
        <div className="wd-steps" id="wd-flow-steps" ref={containerRef}>
          <div className="wd-flow__line" aria-hidden="true">
            <div className="wd-flow__fill" id="wd-flow-fill"></div>
            <div className="wd-flow__dot"  id="wd-flow-dot"></div>
          </div>
          {STEPS.map(([ic, n, t, b, stepNum]) => (
            <div className="wd-step" key={n} data-step={stepNum}>
              <div className="wd-step__node">
                <span className="wd-step__icon"><Icon name={ic} size={26} color="var(--wd-blue-300)" /></span>
                <span className="wd-step__num">{n}</span>
                <span className="wd-step__check" aria-hidden="true"></span>
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
