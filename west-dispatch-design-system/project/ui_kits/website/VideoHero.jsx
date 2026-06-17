/* global React */
(function () {
const { Button } = window.WestDispatchDesignSystem_52aa6d;
const Icon = window.Icon;

const FRAME_COUNT = 60;
const NAT_W = 900, NAT_H = 506;
const SCROLL_HEIGHT = 2400;
const framePath = (i) => "images/frames/f-" + String(i).padStart(3, "0") + ".jpg";

function VideoHero() {
  const sectionRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const cueRef = React.useRef(null);

  React.useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const cue = cueRef.current;
    if (!section || !canvas) return;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);

    const frames = new Array(FRAME_COUNT);
    let loaded = 0, ready = false, curIndex = -1, targetIndex = 0, rafPending = false;

    function resize() {
      canvas.width = Math.round(canvas.clientWidth * dpr);
      canvas.height = Math.round(canvas.clientHeight * dpr);
      curIndex = -1; draw();
    }
    function draw() {
      if (!ready) return;
      let i = targetIndex;
      if (i === curIndex) return;
      let img = frames[i];
      if (!img || !img.complete || !img.naturalWidth) {
        let j = i; while (j >= 0 && (!frames[j] || !frames[j].complete)) j--;
        if (j < 0) return; img = frames[j];
      }
      const cw = canvas.width, ch = canvas.height;
      const scale = Math.max(cw / NAT_W, ch / NAT_H);
      const dw = NAT_W * scale, dh = NAT_H * scale;
      ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
      curIndex = i;
    }
    function computeTarget() {
      const y = window.scrollY || window.pageYOffset;
      const p = clamp01(y / SCROLL_HEIGHT);
      if (cue) cue.style.opacity = String(clamp01(1 - p * 2.4));
      return Math.round(p * (FRAME_COUNT - 1));
    }
    function onScroll() {
      targetIndex = computeTarget();
      if (!rafPending) { rafPending = true; requestAnimationFrame(() => { rafPending = false; draw(); }); }
    }
    for (let i = 0; i < FRAME_COUNT; i++) {
      ((idx) => {
        const img = new Image();
        img.decoding = "async";
        img.onload = () => {
          loaded++;
          if (!ready && (loaded >= 8 || loaded === FRAME_COUNT)) { ready = true; section.classList.add("is-ready"); resize(); }
          else if (idx === targetIndex || idx === curIndex) { curIndex = -1; draw(); }
        };
        img.src = framePath(idx);
        frames[idx] = img;
      })(i);
    }
    targetIndex = computeTarget();
    if (!reduceMotion) window.addEventListener("scroll", onScroll, { passive: true });
    else if (cue) cue.style.display = "none";
    window.addEventListener("resize", resize);
    section.style.height = "calc(" + SCROLL_HEIGHT + "px + 100vh)";

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="ssh" id="top" ref={sectionRef}>
      <div className="ssh__sticky">
        <canvas className="ssh__canvas" ref={canvasRef}></canvas>
        <img className="ssh__poster" src={framePath(0)} alt="26 ft box truck driving on the highway at sunset" />
        <div className="ssh__scrim"></div>
        <div className="ssh__content">
          <div className="wd-container">
            <span className="ssh__eyebrow">— Truck dispatching for owner-operators</span>
            <h1 className="ssh__title">Keep your wheels turning.</h1>
            <p className="ssh__sub">West Dispatch finds the high-paying loads, negotiates your rate, and handles the paperwork — so every mile you drive is a mile that pays.</p>
            <div className="ssh__actions">
              <Button variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Get Started Today</Button>
              <Button variant="secondary" size="lg" iconLeft={<Icon name="phone" size={16} />}>(205) 557-3100</Button>
            </div>
          </div>
        </div>
        <div className="ssh__cue" ref={cueRef}><span>Scroll</span><Icon name="chevron-down" size={20} /></div>
      </div>
    </section>
  );
}
window.VideoHero = VideoHero;
})();
