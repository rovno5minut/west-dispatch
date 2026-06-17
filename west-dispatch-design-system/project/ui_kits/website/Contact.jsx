/* global React */
(function () {
const { Button, Badge } = window.WestDispatchDesignSystem_52aa6d;
const Icon = window.Icon;

const TG_TOKEN  = (window.WD_ENV && window.WD_ENV.TG_TOKEN)  || "";
const TG_CHAT   = (window.WD_ENV && window.WD_ENV.TG_CHAT)   || "";
const TG_URL    = "https://api.telegram.org/bot" + TG_TOKEN + "/sendMessage";

/* ---- shared styles (defined once at module level, never recreated) ---- */
const baseInputStyle = {
  background:"rgba(255,255,255,0.04)", border:"1px solid var(--border-default)",
  borderRadius:"var(--radius-sm)", padding:"10px 14px",
  color:"var(--text-strong)", fontSize:15, fontFamily:"inherit",
  outline:"none", width:"100%", boxSizing:"border-box",
  transition:"border-color 0.18s"
};
const baseLabelStyle = {
  fontFamily:"var(--font-mono)", fontSize:12, letterSpacing:"0.08em",
  textTransform:"uppercase", color:"var(--text-muted)"
};

/* ---- Field defined OUTSIDE Contact so its identity is stable ---- */
function Field({ label, value, onChange, placeholder, type, multiline, full }) {
  const [focused, setFocused] = React.useState(false);
  const style = focused
    ? Object.assign({}, baseInputStyle, { borderColor:"var(--accent)" })
    : baseInputStyle;
  const wrapStyle = full
    ? { display:"flex", flexDirection:"column", gap:6, gridColumn:"1 / -1" }
    : { display:"flex", flexDirection:"column", gap:6 };
  return (
    <div style={wrapStyle}>
      <span style={baseLabelStyle}>{label}</span>
      {multiline
        ? <textarea rows={3} value={value} onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
            style={Object.assign({}, style, { resize:"vertical", lineHeight:"var(--lh-relaxed)" })}
            onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />
        : <input type={type || "text"} value={value} onChange={e => onChange(e.target.value)}
            placeholder={placeholder} style={style}
            onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />
      }
    </div>
  );
}

function newCaptcha() {
  var a = Math.floor(Math.random() * 9) + 1;
  var b = Math.floor(Math.random() * 9) + 1;
  return { a: a, b: b, answer: a + b };
}

function Contact() {
  const [sent, setSent]       = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [err, setErr]         = React.useState("");

  const [name,  setName]  = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [mc,    setMc]    = React.useState("");
  const [equip, setEquip] = React.useState("");
  const [fleet, setFleet] = React.useState("");

  const [captcha, setCaptcha]       = React.useState(() => newCaptcha());
  const [captchaVal, setCaptchaVal] = React.useState("");
  const [captchaErr, setCaptchaErr] = React.useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setCaptchaErr("");
    setErr("");

    if (parseInt(captchaVal, 10) !== captcha.answer) {
      setCaptchaErr("Неверный ответ — попробуйте снова.");
      setCaptcha(newCaptcha());
      setCaptchaVal("");
      return;
    }
    if (!name.trim() || !phone.trim()) {
      setErr("Пожалуйста, заполните имя и телефон.");
      return;
    }

    setSending(true);
    const text =
      "🚛 <b>Новая заявка на консультацию</b>\n\n" +
      "👤 <b>Имя:</b> " + (name||"—") + "\n" +
      "📞 <b>Телефон:</b> " + (phone||"—") + "\n" +
      "🔖 <b>MC / DOT:</b> " + (mc||"—") + "\n" +
      "🚚 <b>Оборудование:</b> " + (equip||"—") + "\n" +
      "📝 <b>О флоте:</b> " + (fleet||"—");

    try {
      const res = await fetch(TG_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: TG_CHAT, text: text, parse_mode: "HTML" })
      });
      const json = await res.json();
      if (!json.ok) throw new Error(json.description || "Telegram error");
      setSent(true);
    } catch (e) {
      setErr("Ошибка отправки. Позвоните нам: (205) 557-3100");
    } finally {
      setSending(false);
    }
  }

  const CONTACT = [
    ["phone", "Call dispatch", "(205) 557-3100"],
    ["mail", "Email us", "westdispatch@hotmail.com"],
    ["clock", "Hours", "24 / 7 / 365"],
  ];

  return (
    <section className="wd-section wd-contact" id="contact">
      <div className="wd-container wd-contact__grid">
        <div className="wd-contact__left">
          <span className="wd-eyebrow">— Get started</span>
          <h2 className="wd-sectionhead__title">Let's keep your trucks loaded</h2>
          <p className="wd-sectionhead__sub">Tell us about your operation and a dispatcher will reach out within one business hour. No obligation, no pressure.</p>
          <div className="wd-contact__info">
            {CONTACT.map(([ic, l, v]) => (
              <div className="wd-contact__row" key={l}>
                <span className="wd-contact__ic"><Icon name={ic} size={20} color="var(--wd-blue-300)" /></span>
                <div>
                  <div className="wd-contact__l">{l}</div>
                  <div className="wd-contact__v">{v}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="wd-contact__badges">
            <Badge tone="success" dot>FMCSA compliant</Badge>
            <Badge tone="accent" dot>48 states</Badge>
          </div>
        </div>

        <div className="wd-contact__formwrap">
          <div className="wd-contact__form">
            {sent ? (
              <div className="wd-contact__sent" style={{ display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", padding:"40px 20px", gap:16 }}>
                <span className="wd-contact__sentic"><Icon name="check" size={30} color="#fff" /></span>
                <h3 className="wd-svc__title">You're all set!</h3>
                <p className="wd-svc__body">A West Dispatch dispatcher will call you within the hour. Keep your phone close.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="wd-contact__formtitle">Request your free dispatch consult</h3>
                <div className="wd-form__grid">
                  <Field label="Full name *" value={name} onChange={setName} placeholder="Jordan Hayes" />
                  <Field label="Phone *" value={phone} onChange={setPhone} placeholder="(555) 123-4567" type="tel" />
                  <Field label="MC / DOT number" value={mc} onChange={setMc} placeholder="MC-123456" />
                  <Field label="Equipment type" value={equip} onChange={setEquip} placeholder="Reefer, dry van…" />
                  <Field label="Tell us about your fleet" value={fleet} onChange={setFleet}
                    placeholder="How many trucks, lanes you run, home time…" multiline full />

                  {/* ---- Math captcha ---- */}
                  <div style={{ gridColumn:"1 / -1", background:"rgba(255,255,255,0.03)", border:"1px solid var(--border-default)", borderRadius:"var(--radius-md)", padding:"14px 16px", display:"flex", alignItems:"center", gap:14, flexWrap:"wrap" }}>
                    <span style={{ fontFamily:"var(--font-mono)", fontSize:13, color:"var(--text-muted)", letterSpacing:"0.04em", flexShrink:0 }}>
                      🤖 Anti-spam: <strong style={{ color:"var(--text-strong)", fontSize:16 }}>{captcha.a} + {captcha.b} = ?</strong>
                    </span>
                    <input
                      type="number" value={captchaVal}
                      onChange={e => { setCaptchaVal(e.target.value); setCaptchaErr(""); }}
                      placeholder="Answer"
                      style={{ width:90, background:"rgba(255,255,255,0.06)", border:"1px solid " + (captchaErr ? "var(--wd-red-400)" : "var(--border-default)"),
                        borderRadius:"var(--radius-sm)", padding:"8px 12px", color:"var(--text-strong)", fontSize:15, fontFamily:"inherit", outline:"none" }}
                    />
                    {captchaErr && <span style={{ color:"var(--wd-red-400)", fontSize:13, fontFamily:"var(--font-mono)" }}>{captchaErr}</span>}
                  </div>
                </div>

                {err && <p style={{ color:"var(--wd-red-400)", fontSize:13, margin:"10px 0 0", fontFamily:"var(--font-mono)" }}>{err}</p>}

                <Button variant="energy" size="lg" fullWidth iconRight={<Icon name={sending ? "loader" : "arrow-right"} size={18} />}
                  style={{ marginTop:18 }}>
                  {sending ? "Sending…" : "Get Started Today"}
                </Button>
                <p className="wd-contact__fine">By submitting you agree to be contacted by West Dispatch. We never sell your information.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
window.Contact = Contact;
})();
