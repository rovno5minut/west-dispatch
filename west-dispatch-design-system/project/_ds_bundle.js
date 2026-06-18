/* @ds-bundle: {"format":3,"namespace":"WestDispatchDesignSystem_52aa6d","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"cc342941864c","components/core/Button.jsx":"071924c13893","components/core/Card.jsx":"40b0954a65ae","components/core/Stat.jsx":"c072b4fdf557","components/feedback/Accordion.jsx":"926bc9a7652a","components/forms/Input.jsx":"b67c9af98543","ui_kits/website/Contact.jsx":"3f428e742ed2","ui_kits/website/Equipment.jsx":"82cc1622c952","ui_kits/website/FAQ.jsx":"6311e8bc009a","ui_kits/website/Footer.jsx":"073727701152","ui_kits/website/Header.jsx":"77f24bef1869","ui_kits/website/Hero.jsx":"ff4abc580220","ui_kits/website/HowItWorks.jsx":"879aa779e39a","ui_kits/website/Services.jsx":"563ebcc4329a","ui_kits/website/Testimonials.jsx":"44762fdb561c","ui_kits/website/VideoHero.jsx":"6f6f720107b1","ui_kits/website/WhyChoose.jsx":"6a362ed313f6","ui_kits/website/icons.jsx":"d2976f321884"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WestDispatchDesignSystem_52aa6d = window.WestDispatchDesignSystem_52aa6d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Status / label badge. Logistics tones: loaded (green), in-transit (amber),
 * available (blue), plus neutral and energy.
 */
function Badge({
  children,
  tone = "neutral",
  dot = false,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      color: "var(--text-body)",
      bg: "rgba(255,255,255,0.06)",
      bd: "var(--border-default)",
      dotc: "var(--text-muted)",
      glow: "rgba(255,255,255,0.22)"
    },
    accent: {
      color: "var(--wd-blue-300)",
      bg: "var(--accent-soft)",
      bd: "rgba(46,107,255,0.3)",
      dotc: "var(--accent)",
      glow: "rgba(46,107,255,0.55)"
    },
    energy: {
      color: "var(--wd-red-400)",
      bg: "var(--energy-soft)",
      bd: "rgba(240,41,74,0.3)",
      dotc: "var(--energy)",
      glow: "rgba(240,41,74,0.55)"
    },
    success: {
      color: "#5BE3A7",
      bg: "rgba(31,191,117,0.13)",
      bd: "rgba(31,191,117,0.3)",
      dotc: "var(--success)",
      glow: "rgba(31,191,117,0.55)"
    },
    warning: {
      color: "#F8C46A",
      bg: "rgba(245,165,36,0.13)",
      bd: "rgba(245,165,36,0.3)",
      dotc: "var(--warning)",
      glow: "rgba(245,165,36,0.55)"
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      padding: "5px 12px",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: "var(--fw-bold)",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: t.color,
      background: t.bg,
      border: `1px solid ${t.bd}`,
      borderRadius: "var(--radius-pill)",
      transition: "transform 250ms var(--ease-out), filter 250ms var(--ease-out), box-shadow 250ms var(--ease-out)",
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.filter = "brightness(1.12)";
      e.currentTarget.style.transform = "scale(1.03)";
      e.currentTarget.style.boxShadow = `0 0 20px 2px ${t.glow}`;
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = "";
      e.currentTarget.style.transform = "";
      e.currentTarget.style.boxShadow = "";
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: t.dotc,
      boxShadow: `0 0 8px ${t.dotc}`
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * West Dispatch primary action button.
 * Variants: primary (electric blue), energy (logo crimson), secondary (outline), ghost.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "9px 16px",
      fontSize: 14,
      height: 38,
      gap: 8
    },
    md: {
      padding: "13px 24px",
      fontSize: 15,
      height: 48,
      gap: 10
    },
    lg: {
      padding: "17px 32px",
      fontSize: 17,
      height: 58,
      gap: 12
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: "var(--grad-accent)",
      color: "var(--text-on-accent)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-accent), var(--sheen-top)",
      glow: "0 0 28px 3px rgba(46,107,255,0.6), var(--sheen-top)"
    },
    energy: {
      background: "var(--grad-energy)",
      color: "var(--text-on-accent)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-energy), var(--sheen-top)",
      glow: "0 0 28px 3px rgba(240,41,74,0.6), var(--sheen-top)"
    },
    secondary: {
      background: "rgba(255,255,255,0.02)",
      color: "var(--text-strong)",
      border: "1px solid var(--border-strong)",
      boxShadow: "var(--sheen-top)",
      glow: "0 8px 24px rgba(255,255,255,0.08), var(--sheen-top)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-body)",
      border: "1px solid transparent",
      boxShadow: "none",
      glow: "none"
    }
  };
  const {
    glow,
    ...v
  } = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      width: fullWidth ? "100%" : "auto",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--fw-bold)",
      fontSize: s.fontSize,
      letterSpacing: "0.005em",
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "transform 250ms var(--ease-out), filter 250ms var(--ease-out), box-shadow 250ms var(--ease-out)",
      whiteSpace: "nowrap",
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "translateY(1px) scale(0.985)";
    },
    onMouseUp: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(1.03)";
    },
    onMouseEnter: e => {
      if (!disabled) {
        e.currentTarget.style.filter = "brightness(1.12)";
        e.currentTarget.style.transform = "scale(1.03)";
        e.currentTarget.style.boxShadow = glow;
      }
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = "";
      e.currentTarget.style.transform = "";
      e.currentTarget.style.boxShadow = "";
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface container. Variants: default (panel), raised (more elevation),
 * outline (transparent w/ border), accent (subtle blue glow).
 * Set `interactive` for hover lift.
 */
function Card({
  children,
  variant = "default",
  interactive = false,
  padding = 28,
  style = {},
  ...rest
}) {
  const variants = {
    default: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-md), var(--sheen-top)"
    },
    raised: {
      background: "var(--surface-card-hover)",
      border: "1px solid var(--border-default)",
      boxShadow: "var(--shadow-lg), var(--sheen-top)"
    },
    outline: {
      background: "rgba(255,255,255,0.015)",
      border: "1px solid var(--border-default)",
      boxShadow: "none"
    },
    accent: {
      background: "linear-gradient(180deg, rgba(46,107,255,0.10), rgba(46,107,255,0.02))",
      border: "1px solid rgba(46,107,255,0.28)",
      boxShadow: "var(--shadow-md)"
    }
  };
  const v = variants[variant] || variants.default;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: "var(--radius-lg)",
      padding,
      transition: "transform var(--dur-base) var(--ease-out), filter var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (!interactive) return;
      e.currentTarget.style.transform = "translateY(-4px) scale(1.03)";
      e.currentTarget.style.filter = "brightness(1.12)";
      e.currentTarget.style.borderColor = "rgba(46,107,255,0.4)";
      e.currentTarget.style.boxShadow = "var(--shadow-lg), 0 16px 48px rgba(46,107,255,0.30), 0 0 0 1px rgba(46,107,255,0.18)";
    },
    onMouseLeave: e => {
      if (!interactive) return;
      e.currentTarget.style.transform = "";
      e.currentTarget.style.filter = "";
      e.currentTarget.style.borderColor = "";
      e.currentTarget.style.boxShadow = "";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
/**
 * Big metric display for proof/stat strips.
 * value (e.g. "$2,840"), label, optional suffix and accent tone.
 */
function Stat({
  value,
  label,
  suffix = "",
  tone = "accent",
  align = "left",
  style = {}
}) {
  const toneColor = {
    accent: "var(--wd-blue-300)",
    energy: "var(--wd-red-400)",
    plain: "var(--text-strong)"
  }[tone] || "var(--wd-blue-300)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: 46,
      lineHeight: 1,
      letterSpacing: "var(--ls-tight)",
      color: "var(--text-strong)"
    }
  }, value, suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: toneColor,
      marginLeft: 2
    }
  }, suffix)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 13,
      fontFamily: "var(--font-mono)",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Accordion.jsx
try { (() => {
/**
 * FAQ accordion. items: [{ q, a }]. Single-open by default.
 */
function Accordion({
  items = [],
  defaultOpen = 0,
  style = {}
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      ...style
    }
  }, items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderRadius: "var(--radius-md)",
        border: `1px solid ${isOpen ? "rgba(46,107,255,0.32)" : "var(--border-default)"}`,
        background: isOpen ? "rgba(46,107,255,0.05)" : "rgba(255,255,255,0.015)",
        overflow: "hidden",
        transition: "border-color var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        padding: "20px 24px",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        fontFamily: "var(--font-display)",
        fontWeight: "var(--fw-semibold)",
        fontSize: 18,
        color: "var(--text-strong)",
        letterSpacing: "var(--ls-snug)"
      }
    }, it.q, /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0,
        width: 26,
        height: 26,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        color: isOpen ? "var(--accent)" : "var(--text-muted)",
        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
        transition: "transform var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)",
        fontSize: 24,
        fontWeight: 300,
        lineHeight: 1
      }
    }, "+")), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: isOpen ? 320 : 0,
        opacity: isOpen ? 1 : 0,
        transition: "max-height var(--dur-slow) var(--ease-out), opacity var(--dur-base) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 24px 22px",
        color: "var(--text-body)",
        fontSize: 15,
        lineHeight: "var(--lh-relaxed)"
      }
    }, it.a)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text field for the contact / lead form. Dark inset surface with blue focus ring.
 * Renders <textarea> when multiline.
 */
function Input({
  label,
  hint,
  multiline = false,
  rows = 4,
  id,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const fieldId = id || (label ? "wd-" + label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const fieldStyle = {
    width: "100%",
    fontFamily: "var(--font-body)",
    fontSize: 15,
    color: "var(--text-strong)",
    background: "var(--surface-inset)",
    border: `1px solid ${focused ? "var(--accent)" : "var(--border-default)"}`,
    borderRadius: "var(--radius-md)",
    padding: multiline ? "14px 16px" : "0 16px",
    height: multiline ? "auto" : 50,
    outline: "none",
    boxShadow: focused ? "0 0 0 4px var(--accent-ring)" : "none",
    transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
    resize: multiline ? "vertical" : undefined,
    fontFamily: "var(--font-body)"
  };
  const common = {
    id: fieldId,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: fieldStyle,
    ...rest
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "block",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginBottom: 8,
      fontSize: 13,
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-body)"
    }
  }, label), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows
  }, common)) : /*#__PURE__*/React.createElement("input", common), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: 6,
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
/* global React */
(function () {
  const {
    Button,
    Badge
  } = window.WestDispatchDesignSystem_52aa6d;
  const Icon = window.Icon;
  const TG_TOKEN = "8871274229:AAH8Vo7X2xYpkR3sSbGjcPiHElNdfu8A42w";
  const TG_CHAT = "245780";
  const TG_URL = "https://api.telegram.org/bot" + TG_TOKEN + "/sendMessage";

  /* ---- shared styles (defined once at module level, never recreated) ---- */
  const baseInputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid var(--border-default)",
    borderRadius: "var(--radius-sm)",
    padding: "10px 14px",
    color: "var(--text-strong)",
    fontSize: 15,
    fontFamily: "inherit",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    transition: "border-color 0.18s"
  };
  const baseLabelStyle = {
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--text-muted)"
  };

  /* ---- Field defined OUTSIDE Contact so its identity is stable ---- */
  function Field({
    label,
    value,
    onChange,
    placeholder,
    type,
    multiline,
    full
  }) {
    const [focused, setFocused] = React.useState(false);
    const style = focused ? Object.assign({}, baseInputStyle, {
      borderColor: "var(--accent)"
    }) : baseInputStyle;
    const wrapStyle = full ? {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      gridColumn: "1 / -1"
    } : {
      display: "flex",
      flexDirection: "column",
      gap: 6
    };
    return /*#__PURE__*/React.createElement("div", {
      style: wrapStyle
    }, /*#__PURE__*/React.createElement("span", {
      style: baseLabelStyle
    }, label), multiline ? /*#__PURE__*/React.createElement("textarea", {
      rows: 3,
      value: value,
      onChange: e => onChange(e.target.value),
      placeholder: placeholder,
      style: Object.assign({}, style, {
        resize: "vertical",
        lineHeight: "var(--lh-relaxed)"
      }),
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false)
    }) : /*#__PURE__*/React.createElement("input", {
      type: type || "text",
      value: value,
      onChange: e => onChange(e.target.value),
      placeholder: placeholder,
      style: style,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false)
    }));
  }
  function newCaptcha() {
    var a = Math.floor(Math.random() * 9) + 1;
    var b = Math.floor(Math.random() * 9) + 1;
    return {
      a: a,
      b: b,
      answer: a + b
    };
  }
  function Contact() {
    const [sent, setSent] = React.useState(false);
    const [sending, setSending] = React.useState(false);
    const [err, setErr] = React.useState("");
    const [name, setName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [mc, setMc] = React.useState("");
    const [equip, setEquip] = React.useState("");
    const [fleet, setFleet] = React.useState("");
    const [captcha, setCaptcha] = React.useState(() => newCaptcha());
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
      const text = "🚛 <b>Новая заявка на консультацию</b>\n\n" + "👤 <b>Имя:</b> " + (name || "—") + "\n" + "📞 <b>Телефон:</b> " + (phone || "—") + "\n" + "🔖 <b>MC / DOT:</b> " + (mc || "—") + "\n" + "🚚 <b>Оборудование:</b> " + (equip || "—") + "\n" + "📝 <b>О флоте:</b> " + (fleet || "—");
      try {
        const res = await fetch(TG_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            chat_id: TG_CHAT,
            text: text,
            parse_mode: "HTML"
          })
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
    const CONTACT = [["phone", "Call dispatch", "(205) 557-3100"], ["mail", "Email us", "westdispatch@hotmail.com"], ["clock", "Hours", "24 / 7 / 365"]];
    return /*#__PURE__*/React.createElement("section", {
      className: "wd-section wd-contact",
      id: "contact"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wd-container wd-contact__grid"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wd-contact__left"
    }, /*#__PURE__*/React.createElement("span", {
      className: "wd-eyebrow"
    }, "\u2014 Get started"), /*#__PURE__*/React.createElement("h2", {
      className: "wd-sectionhead__title"
    }, "Let's keep your trucks loaded"), /*#__PURE__*/React.createElement("p", {
      className: "wd-sectionhead__sub"
    }, "Tell us about your operation and a dispatcher will reach out within one business hour. No obligation, no pressure."), /*#__PURE__*/React.createElement("div", {
      className: "wd-contact__info"
    }, CONTACT.map(([ic, l, v]) => /*#__PURE__*/React.createElement("div", {
      className: "wd-contact__row",
      key: l
    }, /*#__PURE__*/React.createElement("span", {
      className: "wd-contact__ic"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 20,
      color: "var(--wd-blue-300)"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "wd-contact__l"
    }, l), /*#__PURE__*/React.createElement("div", {
      className: "wd-contact__v"
    }, v))))), /*#__PURE__*/React.createElement("div", {
      className: "wd-contact__badges"
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      dot: true
    }, "FMCSA compliant"), /*#__PURE__*/React.createElement(Badge, {
      tone: "accent",
      dot: true
    }, "48 states"))), /*#__PURE__*/React.createElement("div", {
      className: "wd-contact__formwrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wd-contact__form"
    }, sent ? /*#__PURE__*/React.createElement("div", {
      className: "wd-contact__sent",
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "40px 20px",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "wd-contact__sentic"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 30,
      color: "#fff"
    })), /*#__PURE__*/React.createElement("h3", {
      className: "wd-svc__title"
    }, "You're all set!"), /*#__PURE__*/React.createElement("p", {
      className: "wd-svc__body"
    }, "A West Dispatch dispatcher will call you within the hour. Keep your phone close.")) : /*#__PURE__*/React.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/React.createElement("h3", {
      className: "wd-contact__formtitle"
    }, "Request your free dispatch consult"), /*#__PURE__*/React.createElement("div", {
      className: "wd-form__grid"
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Full name *",
      value: name,
      onChange: setName,
      placeholder: "Jordan Hayes"
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Phone *",
      value: phone,
      onChange: setPhone,
      placeholder: "(555) 123-4567",
      type: "tel"
    }), /*#__PURE__*/React.createElement(Field, {
      label: "MC / DOT number",
      value: mc,
      onChange: setMc,
      placeholder: "MC-123456"
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Equipment type",
      value: equip,
      onChange: setEquip,
      placeholder: "Reefer, dry van\u2026"
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Tell us about your fleet",
      value: fleet,
      onChange: setFleet,
      placeholder: "How many trucks, lanes you run, home time\u2026",
      multiline: true,
      full: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: "1 / -1",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid var(--border-default)",
        borderRadius: "var(--radius-md)",
        padding: "14px 16px",
        display: "flex",
        alignItems: "center",
        gap: 14,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: "var(--text-muted)",
        letterSpacing: "0.04em",
        flexShrink: 0
      }
    }, "\uD83E\uDD16 Anti-spam: ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--text-strong)",
        fontSize: 16
      }
    }, captcha.a, " + ", captcha.b, " = ?")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: captchaVal,
      onChange: e => {
        setCaptchaVal(e.target.value);
        setCaptchaErr("");
      },
      placeholder: "Answer",
      style: {
        width: 90,
        background: "rgba(255,255,255,0.06)",
        border: "1px solid " + (captchaErr ? "var(--wd-red-400)" : "var(--border-default)"),
        borderRadius: "var(--radius-sm)",
        padding: "8px 12px",
        color: "var(--text-strong)",
        fontSize: 15,
        fontFamily: "inherit",
        outline: "none"
      }
    }), captchaErr && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--wd-red-400)",
        fontSize: 13,
        fontFamily: "var(--font-mono)"
      }
    }, captchaErr))), err && /*#__PURE__*/React.createElement("p", {
      style: {
        color: "var(--wd-red-400)",
        fontSize: 13,
        margin: "10px 0 0",
        fontFamily: "var(--font-mono)"
      }
    }, err), /*#__PURE__*/React.createElement(Button, {
      variant: "energy",
      size: "lg",
      fullWidth: true,
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: sending ? "loader" : "arrow-right",
        size: 18
      }),
      style: {
        marginTop: 18
      }
    }, sending ? "Sending…" : "Get Started Today"), /*#__PURE__*/React.createElement("p", {
      className: "wd-contact__fine"
    }, "By submitting you agree to be contacted by West Dispatch. We never sell your information."))))));
  }
  window.Contact = Contact;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Equipment.jsx
try { (() => {
/* global React */
(function () {
  const TRUCKS = [["images/truck-box.jpg", "26 ft Box Truck", "Straight truck · liftgate"], ["images/truck-dryvan.jpg", "53' Dry Van", "Enclosed dry freight"], ["images/truck-flatbed.jpg", "48' Flatbed", "Open deck · step-deck"]];
  function TruckCard({
    src,
    name,
    spec,
    dup
  }) {
    return /*#__PURE__*/React.createElement("figure", {
      className: "wd-truck",
      "aria-hidden": dup ? "true" : undefined
    }, /*#__PURE__*/React.createElement("div", {
      className: "wd-truck__media"
    }, /*#__PURE__*/React.createElement("img", {
      className: "wd-truck__photo",
      src: src,
      alt: dup ? "" : name
    })), /*#__PURE__*/React.createElement("figcaption", {
      className: "wd-truck__cap"
    }, /*#__PURE__*/React.createElement("span", {
      className: "wd-truck__name"
    }, name), /*#__PURE__*/React.createElement("span", {
      className: "wd-truck__spec"
    }, spec)));
  }
  function Equipment() {
    return /*#__PURE__*/React.createElement("section", {
      className: "wd-section wd-equip",
      id: "equipment"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wd-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wd-sectionhead"
    }, /*#__PURE__*/React.createElement("span", {
      className: "wd-eyebrow"
    }, "\u2014 What we haul"), /*#__PURE__*/React.createElement("h2", {
      className: "wd-sectionhead__title"
    }, "Every trailer type, kept loaded"), /*#__PURE__*/React.createElement("p", {
      className: "wd-sectionhead__sub"
    }, "Box truck, dry van, or flatbed \u2014 whatever you run, we keep it booked on high-paying lanes."))), /*#__PURE__*/React.createElement("div", {
      className: "wd-marquee"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wd-marquee__track"
    }, TRUCKS.map((t, i) => /*#__PURE__*/React.createElement(TruckCard, {
      key: i,
      src: t[0],
      name: t[1],
      spec: t[2]
    })), TRUCKS.map((t, i) => /*#__PURE__*/React.createElement(TruckCard, {
      key: "d" + i,
      src: t[0],
      name: t[1],
      spec: t[2],
      dup: true
    })))));
  }
  window.Equipment = Equipment;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Equipment.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FAQ.jsx
try { (() => {
/* global React */
(function () {
  const {
    Accordion
  } = window.WestDispatchDesignSystem_52aa6d;
  const FAQS = [{
    q: "Do you require a long-term contract?",
    a: "No. West Dispatch is month-to-month agreement. We earn your business one load at a time — if you're not making more money, you're free to walk."
  }, {
    q: "What do you charge?",
    a: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0
      }
    }, "We charge a 10% dispatch fee based on the load amount. However, whenever possible, we negotiate higher rates with brokers and shippers to cover our fee."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "12px 0 0"
      }
    }, "For example, if a load pays $1,000, our fee would normally be $100. Instead, we may negotiate the rate up to $1,100, allowing you to receive the full $1,000 while our fee is covered by the increased rate."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "12px 0 0"
      }
    }, "Our goal is simple: maximize your revenue while keeping your trucks moving."))
  }, {
    q: "How fast can I get my first load?",
    a: "Most owner-operators are onboarded and booked on a paying load within 24 hours, as long as your authority and insurance are active."
  }, {
    q: "Do I need my own authority?",
    a: "Yes — you'll need active operating authority (MC/DOT) and insurance. If you're still setting up, we can point you to trusted partners who help with that."
  }, {
    q: "Can you work with my preferred lanes and home time?",
    a: "Absolutely. Your dedicated dispatcher builds your schedule around the lanes you want to run and the days you need to be home."
  }, {
    q: "What equipment types do you dispatch?",
    a: "Dry van, reefer, flatbed, step deck, and power-only. Tell us what you run and we'll match you with a dispatcher who knows that freight."
  }];
  function FAQ() {
    return /*#__PURE__*/React.createElement("section", {
      className: "wd-section",
      id: "faq"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wd-container wd-faq"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wd-faq__head"
    }, /*#__PURE__*/React.createElement("span", {
      className: "wd-eyebrow"
    }, "\u2014 Questions"), /*#__PURE__*/React.createElement("h2", {
      className: "wd-sectionhead__title"
    }, "Everything you want to know"), /*#__PURE__*/React.createElement("p", {
      className: "wd-sectionhead__sub"
    }, "Still unsure? Call a real dispatcher at (800) 555-0199 \u2014 no bots, no phone trees.")), /*#__PURE__*/React.createElement("div", {
      className: "wd-faq__body"
    }, /*#__PURE__*/React.createElement(Accordion, {
      items: FAQS,
      defaultOpen: 0
    }))));
  }
  window.FAQ = FAQ;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FAQ.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* global React */
(function () {
  const Icon = window.Icon;
  function Footer() {
    const cols = [["Services", ["Load Sourcing", "Rate Negotiation", "Route Planning", "Paperwork Management"]], ["Company", ["About Us", "Why West Dispatch", "Careers", "Contact"]], ["Resources", ["FAQ", "Owner-Operator Guide", "Rate Calculator", "Blog"]]];
    return /*#__PURE__*/React.createElement("footer", {
      className: "wd-footer"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wd-container wd-footer__grid"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wd-footer__brand"
    }, /*#__PURE__*/React.createElement("a", {
      className: "wd-logo",
      href: "#top"
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-mark-light.png",
      alt: "West Dispatch"
    }), /*#__PURE__*/React.createElement("span", {
      className: "wd-logo__name"
    }, "WEST DISPATCH")), /*#__PURE__*/React.createElement("p", {
      className: "wd-footer__tag"
    }, "Keeping America's owner-operators loaded, paid, and moving \u2014 24/7."), /*#__PURE__*/React.createElement("div", {
      className: "wd-footer__social"
    }, ["facebook", "instagram", "linkedin", "youtube"].map(s => /*#__PURE__*/React.createElement("a", {
      key: s,
      href: "#",
      className: "wd-footer__soc",
      "aria-label": s
    }, /*#__PURE__*/React.createElement(Icon, {
      name: s,
      size: 18,
      color: "var(--text-body)"
    }))))), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
      key: h,
      className: "wd-footer__col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wd-footer__h"
    }, h), items.map(i => /*#__PURE__*/React.createElement("a", {
      key: i,
      href: "#",
      className: "wd-footer__link"
    }, i))))), /*#__PURE__*/React.createElement("div", {
      className: "wd-container wd-footer__bar"
    }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 West Dispatch LLC. All rights reserved."), /*#__PURE__*/React.createElement("span", {
      className: "wd-footer__legal"
    }, /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, "Privacy"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, "Terms"))));
  }
  window.Footer = Footer;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
/* global React */
(function () {
  const {
    Button,
    Badge
  } = window.WestDispatchDesignSystem_52aa6d;
  const Icon = window.Icon;
  function Header() {
    const [open, setOpen] = React.useState(false);
    const links = [["Services", "#services"], ["Why Us", "#why"], ["How It Works", "#how"], ["FAQ", "#faq"]];
    return /*#__PURE__*/React.createElement("header", {
      className: "wd-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wd-container wd-header__inner"
    }, /*#__PURE__*/React.createElement("a", {
      className: "wd-logo",
      href: "#top"
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-mark-light.png",
      alt: "West Dispatch"
    }), /*#__PURE__*/React.createElement("span", {
      className: "wd-logo__name"
    }, "WEST DISPATCH")), /*#__PURE__*/React.createElement("nav", {
      className: "wd-nav wd-desktop"
    }, links.map(([l, h]) => /*#__PURE__*/React.createElement("a", {
      key: l,
      href: h,
      className: "wd-nav__link"
    }, l))), /*#__PURE__*/React.createElement("div", {
      className: "wd-header__cta wd-desktop"
    }, /*#__PURE__*/React.createElement("a", {
      href: "tel:+18005550199",
      className: "wd-nav__link wd-nav__phone"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 15
    }), " (800) 555-0199"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 15
      })
    }, "Get Started")), /*#__PURE__*/React.createElement("button", {
      className: "wd-burger wd-mobile",
      onClick: () => setOpen(!open),
      "aria-label": "Menu"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: open ? "x" : "menu",
      size: 24,
      color: "var(--text-strong)"
    }))), open && /*#__PURE__*/React.createElement("div", {
      className: "wd-mobile wd-mobilemenu"
    }, links.map(([l, h]) => /*#__PURE__*/React.createElement("a", {
      key: l,
      href: h,
      className: "wd-mobilemenu__link",
      onClick: () => setOpen(false)
    }, l)), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      })
    }, "Get Started Today")));
  }
  window.Header = Header;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* global React */
(function () {
  const {
    Button,
    Badge,
    Stat
  } = window.WestDispatchDesignSystem_52aa6d;
  const Icon = window.Icon;
  function LoadRow({
    id,
    lane,
    rate,
    miles,
    status,
    tone
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "wd-load"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wd-load__main"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wd-load__lane"
    }, lane), /*#__PURE__*/React.createElement("div", {
      className: "wd-load__meta"
    }, id, " \xB7 ", miles, " mi")), /*#__PURE__*/React.createElement("div", {
      className: "wd-load__right"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wd-load__rate"
    }, rate), /*#__PURE__*/React.createElement(Badge, {
      tone: tone,
      dot: true
    }, status)));
  }
  function Hero() {
    return /*#__PURE__*/React.createElement("section", {
      className: "wd-hero",
      id: "loadboard"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wd-hero__grid-bg"
    }), /*#__PURE__*/React.createElement("div", {
      className: "wd-container wd-hero__inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wd-hero__copy"
    }, /*#__PURE__*/React.createElement("span", {
      className: "wd-eyebrow"
    }, "\u2014 Live load board"), /*#__PURE__*/React.createElement("h2", {
      className: "wd-hero__title"
    }, "Real loads, real rates,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      className: "wd-hero__accent"
    }, "booked while you drive.")), /*#__PURE__*/React.createElement("p", {
      className: "wd-hero__sub"
    }, "Every load below was sourced, negotiated, and booked by your dispatch team \u2014 you keep rolling, we keep the board full."), /*#__PURE__*/React.createElement("div", {
      className: "wd-hero__cta"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 18
      })
    }, "Get Started Today"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "play",
        size: 16
      })
    }, "See How It Works")), /*#__PURE__*/React.createElement("div", {
      className: "wd-hero__proof"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wd-hero__avatars"
    }, ["JT", "MR", "DK", "SP"].map((i, n) => /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "wd-ava",
      style: {
        background: `hsl(${210 + n * 14} 40% ${26 + n * 4}%)`
      }
    }, i))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "wd-stars"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "star",
      size: 14,
      color: "var(--warning)"
    }), /*#__PURE__*/React.createElement(Icon, {
      name: "star",
      size: 14,
      color: "var(--warning)"
    }), /*#__PURE__*/React.createElement(Icon, {
      name: "star",
      size: 14,
      color: "var(--warning)"
    }), /*#__PURE__*/React.createElement(Icon, {
      name: "star",
      size: 14,
      color: "var(--warning)"
    }), /*#__PURE__*/React.createElement(Icon, {
      name: "star",
      size: 14,
      color: "var(--warning)"
    })), /*#__PURE__*/React.createElement("div", {
      className: "wd-hero__prooftext"
    }, "Trusted by ", /*#__PURE__*/React.createElement("strong", null, "1,200+"), " owner-operators nationwide")))), /*#__PURE__*/React.createElement("div", {
      className: "wd-hero__panel"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wd-board"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wd-board__head"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wd-board__title"
    }, /*#__PURE__*/React.createElement("span", {
      className: "wd-board__live"
    }), " Live Load Board"), /*#__PURE__*/React.createElement("span", {
      className: "wd-board__tag"
    }, "DALLAS, TX")), /*#__PURE__*/React.createElement(LoadRow, {
      id: "WD-48201",
      lane: "CA \u2192 GA",
      rate: "$2.42/mi",
      miles: "2232",
      status: "Booked",
      tone: "success"
    }), /*#__PURE__*/React.createElement(LoadRow, {
      id: "WD-48207",
      lane: "IL \u2192 TX",
      rate: "$2.18/mi",
      miles: "994",
      status: "In Transit",
      tone: "warning"
    }), /*#__PURE__*/React.createElement(LoadRow, {
      id: "WD-48219",
      lane: "PA \u2192 NJ",
      rate: "$3.96/mi",
      miles: "238",
      status: "Available",
      tone: "accent"
    }), /*#__PURE__*/React.createElement("div", {
      className: "wd-board__foot"
    }, /*#__PURE__*/React.createElement(Stat, {
      value: "$7,420",
      suffix: " wk",
      label: "Booked this week"
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "energy",
      size: "sm"
    }, "Book Next Load"))))));
  }
  window.Hero = Hero;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HowItWorks.jsx
try { (() => {
/* global React */
(function () {
  const Icon = window.Icon;
  const STEPS = [
    ["clipboard-list","01","Quick Onboarding",    "Send us your MC authority, COI, W9 and equipment details. We get you set up within 30 minutes.",1],
    ["search",        "02","We Find Your Loads",  "Your dedicated dispatcher sources high-paying lanes that fit your truck, your home time, and your preferred routes.",2],
    ["handshake",     "03","We Negotiate & Book", "We push for the best rate, confirm the load, and handle all the paperwork and broker setup for you.",3],
    ["banknote",      "04","You Drive & Get Paid","Hit the road with a full schedule. We manage check calls and invoicing so the money keeps flowing.",4],
  ];
  const HOLD = [1400,1400,1400,2200], TRAVEL = 650;
  function ArrowConnector({index}) {
    return React.createElement("div",{className:"wd-step-arrow","data-arrow":index,"aria-hidden":"true"},
      React.createElement("div",{className:"wd-arrow-track"},
        React.createElement("div",{className:"wd-arrow-fill"}),
        React.createElement("div",{className:"wd-arrow-pulse"})),
      React.createElement("svg",{className:"wd-arrow-chevron",viewBox:"0 0 22 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},
        React.createElement("path",{d:"M1 1L11 10L21 1",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})));
  }
  function HowItWorks() {
    const containerRef = React.useRef(null);
    React.useEffect(() => {
      const container = containerRef.current; if (!container) return;
      const fill = container.querySelector('#wd-flow-fill');
      const dot  = container.querySelector('#wd-flow-dot');
      const line = container.querySelector('.wd-flow__line');
      const steps = Array.from(container.querySelectorAll('[data-step]'));
      const arrowEls = Array.from(container.querySelectorAll('[data-arrow]'));
      if (!fill || !dot || !steps.length) return;
      function posOf(i) {
        if (!line) return 0;
        const node = steps[i].querySelector('.wd-step__node');
        const l = line.getBoundingClientRect(), n = node.getBoundingClientRect();
        return Math.max(0, Math.min(100, (n.left + n.width/2 - l.left) / l.width * 100));
      }
      function setClasses(i) {
        const s = steps[i];
        s.classList.remove('wd-step--muted','wd-step--active','wd-step--done','wd-step--success');
        for (let a=1;a<arguments.length;a++) s.classList.add(arguments[a]);
      }
      function fireArrow(arrowIdx) {
        const a = container.querySelector('[data-arrow="'+arrowIdx+'"]');
        if (!a) return;
        a.classList.remove('wd-step-arrow--active','wd-step-arrow--done');
        void a.offsetWidth;
        a.classList.add('wd-step-arrow--active');
        timers.push(setTimeout(()=>{ a.classList.remove('wd-step-arrow--active'); a.classList.add('wd-step-arrow--done'); }, TRAVEL));
      }
      function moveLine(toIdx,cb) {
        const p = posOf(toIdx)+'%';
        fill.style.transition = `width ${TRAVEL}ms cubic-bezier(0.4,0,0.2,1)`;
        dot.style.transition  = `left ${TRAVEL}ms cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease`;
        fill.style.width = p; dot.style.left = p; dot.style.opacity='1';
        fireArrow(toIdx);
        timers.push(setTimeout(cb,TRAVEL));
      }
      const timers=[]; let active=true;
      function cycle() {
        if (!active) return;
        steps.forEach(s=>{s.classList.remove('wd-step--active','wd-step--done','wd-step--success');s.classList.add('wd-step--muted');});
        arrowEls.forEach(a=>{a.classList.remove('wd-step-arrow--active','wd-step-arrow--done');});
        requestAnimationFrame(()=>{
          fill.style.transition='none'; fill.style.width=posOf(0)+'%';
          dot.style.transition='none'; dot.style.left=posOf(0)+'%'; dot.style.opacity='0';
          requestAnimationFrame(()=>{
            setClasses(0,'wd-step--active'); dot.style.transition='opacity 0.3s ease'; dot.style.opacity='1';
            timers.push(setTimeout(()=>{
              setClasses(0,'wd-step--done');
              moveLine(1,()=>{ setClasses(1,'wd-step--active');
                timers.push(setTimeout(()=>{
                  setClasses(1,'wd-step--done');
                  moveLine(2,()=>{ setClasses(2,'wd-step--active');
                    timers.push(setTimeout(()=>{
                      setClasses(2,'wd-step--done');
                      moveLine(3,()=>{ setClasses(3,'wd-step--active','wd-step--success');
                        timers.push(setTimeout(()=>{
                          setClasses(3,'wd-step--done');
                          dot.style.transition='opacity 0.5s ease'; dot.style.opacity='0';
                          timers.push(setTimeout(cycle,2000));
                        },HOLD[3]));
                      });
                    },HOLD[2]));
                  });
                },HOLD[1]));
              });
            },HOLD[0]));
          });
        });
      }
      const section = container.closest('#how') || container.parentElement;
      if (window.IntersectionObserver && section) {
        const io = new IntersectionObserver(entries=>{ if(entries[0].isIntersecting){io.disconnect();timers.push(setTimeout(cycle,400));} },{threshold:0.25});
        io.observe(section);
      } else { timers.push(setTimeout(cycle,800)); }
      return ()=>{ active=false; timers.forEach(clearTimeout); };
    },[]);
    return React.createElement("section",{className:"wd-section",id:"how"},
      React.createElement("div",{className:"wd-container"},
        React.createElement("div",{className:"wd-sectionhead"},
          React.createElement("span",{className:"wd-eyebrow"},"\u2014 How it works"),
          React.createElement("h2",{className:"wd-sectionhead__title"},"From sign-up to loaded in 24 hours"),
          React.createElement("p",{className:"wd-sectionhead__sub"},"A simple, proven process built around keeping your truck moving.")),
        React.createElement("div",{className:"wd-steps",id:"wd-flow-steps",ref:containerRef},
          React.createElement("div",{className:"wd-flow__line","aria-hidden":"true"},
            React.createElement("div",{className:"wd-flow__fill",id:"wd-flow-fill"}),
            React.createElement("div",{className:"wd-flow__dot",id:"wd-flow-dot"})),
          STEPS.map(([ic,n,t,b,stepNum],i)=>
            React.createElement(React.Fragment,{key:n},
              React.createElement("div",{className:"wd-step","data-step":stepNum},
                React.createElement("div",{className:"wd-step__node"},
                  React.createElement("span",{className:"wd-step__icon"},React.createElement(Icon,{name:ic,size:26,color:"var(--wd-blue-300)"})),
                  React.createElement("span",{className:"wd-step__num"},n),
                  React.createElement("span",{className:"wd-step__check","aria-hidden":"true"})),
                React.createElement("h3",{className:"wd-step__title"},t),
                React.createElement("p",{className:"wd-step__body"},b)),
              i < STEPS.length-1 && React.createElement(ArrowConnector,{index:stepNum}))))));
  }
  window.HowItWorks = HowItWorks;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HowItWorks.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
/* global React */
(function () {
  const {
    Card,
    Badge
  } = window.WestDispatchDesignSystem_52aa6d;
  const Icon = window.Icon;
  const SERVICES = [["truck", "Load Sourcing", "We scour load boards, broker networks, and direct shippers to keep your truck on the highest-paying lanes."], ["badge-dollar-sign", "Rate Negotiation", "Our dispatchers negotiate every rate so you earn what the freight is truly worth — not the first number offered."], ["route", "Route Planning", "Smart routing that minimizes deadhead miles, balances hours of service, and maximizes revenue per mile."], ["phone-call", "Broker Communication", "We handle every call, email, and check-in with brokers and shippers so you can stay focused on driving."], ["file-text", "Paperwork Management", "Rate cons, BOLs, setup packets, and invoicing — handled. Your documents stay organized and on time."], ["headset", "Dedicated Dispatcher", "A single point of contact who knows your truck, your lanes, and your goals — available when you need them."]];
  function ServiceCard({
    icon,
    title,
    body
  }) {
    return /*#__PURE__*/React.createElement(Card, {
      variant: "default",
      interactive: true,
      padding: 28,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16,
        height: "100%"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "wd-svc__icon"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 24,
      color: "var(--wd-blue-300)"
    })), /*#__PURE__*/React.createElement("h3", {
      className: "wd-svc__title"
    }, title), /*#__PURE__*/React.createElement("p", {
      className: "wd-svc__body"
    }, body));
  }
  function Services() {
    return /*#__PURE__*/React.createElement("section", {
      className: "wd-section",
      id: "services"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wd-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wd-sectionhead"
    }, /*#__PURE__*/React.createElement("span", {
      className: "wd-eyebrow"
    }, "\u2014 What we do"), /*#__PURE__*/React.createElement("h2", {
      className: "wd-sectionhead__title"
    }, "Full-service dispatching, end to end"), /*#__PURE__*/React.createElement("p", {
      className: "wd-sectionhead__sub"
    }, "Everything it takes to keep your wheels turning and your revenue climbing \u2014 managed by a team that lives in the freight market.")), /*#__PURE__*/React.createElement("div", {
      className: "wd-grid-3"
    }, SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
      key: s[1],
      icon: s[0],
      title: s[1],
      body: s[2]
    })))));
  }
  window.Services = Services;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Testimonials.jsx
try { (() => {
/* global React */
(function () {
  const {
    Card,
    Badge
  } = window.WestDispatchDesignSystem_52aa6d;
  const Icon = window.Icon;
  const QUOTES = [["Marcus R.", "Reefer · 3 trucks · GA", "MR", "Since switching to West Dispatch my trucks haven't sat a single weekend. The rates they pull are 15–20% better than I booked on my own.", 210], ["Dana K.", "Dry van owner-op · TX", "DK", "My dispatcher knows my home time and never books me a load that ruins my weekend. Feels like having a partner, not a service.", 224], ["Sofia P.", "Flatbed · 2 trucks · OH", "SP", "The paperwork used to eat my evenings. Now it's just handled. I drive, they dispatch, and the invoices get paid on time.", 196], ["Darnell T.", "26ft box truck · TX", "DT", "Went owner-op on my 26-footer last year and had no clue where to start. West Dispatch set me up on regional loops out of Dallas — home every other night and clearing $4,500 a week.", 28], ["Angela V.", "26ft box truck · FL", "AV", "They actually specialize in box trucks. My dispatcher knows which lanes and brokers work for a 26ft, so I’m never chasing loads that don’t fit. Revenue is up 22% since I signed on.", 155], ["Ray M.", "26ft box truck · IL", "RM", "I was doing $2,800–$3,000 weeks before West Dispatch. Now I’m consistently at $3,800–$4,200. They negotiate hard with brokers and I rarely sit more than a couple hours between loads.", 265]];
  function Testimonials() {
    return /*#__PURE__*/React.createElement("section", {
      className: "wd-section wd-testi",
      id: "testimonials"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wd-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wd-sectionhead"
    }, /*#__PURE__*/React.createElement("span", {
      className: "wd-eyebrow"
    }, "\u2014 From the cab"), /*#__PURE__*/React.createElement("h2", {
      className: "wd-sectionhead__title"
    }, "Drivers who never look back")), /*#__PURE__*/React.createElement("div", {
      className: "wd-grid-3"
    }, QUOTES.map(([name, meta, ini, quote, hue]) => /*#__PURE__*/React.createElement(Card, {
      key: name,
      variant: "default",
      padding: 28,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 18,
        height: "100%"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wd-stars"
    }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(Icon, {
      key: i,
      name: "star",
      size: 15,
      color: "rgb(245, 165, 36)"
    }))), /*#__PURE__*/React.createElement("p", {
      className: "wd-testi__quote"
    }, "\"", quote, "\""), /*#__PURE__*/React.createElement("div", {
      className: "wd-testi__by"
    }, /*#__PURE__*/React.createElement("span", {
      className: "wd-ava",
      style: {
        background: `hsl(${hue} 42% 30%)`
      }
    }, ini), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "wd-testi__name"
    }, name), /*#__PURE__*/React.createElement("div", {
      className: "wd-testi__meta"
    }, meta))))))));
  }
  window.Testimonials = Testimonials;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Testimonials.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/VideoHero.jsx
try { (() => {
/* global React */
(function () {
  const {
    Button
  } = window.WestDispatchDesignSystem_52aa6d;
  const Icon = window.Icon;
  const FRAME_COUNT = 60;
  const NAT_W = 900,
    NAT_H = 506;
  const SCROLL_HEIGHT = 2400;
  const framePath = i => "images/frames/f-" + String(i).padStart(3, "0") + ".jpg";
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
      const clamp01 = v => v < 0 ? 0 : v > 1 ? 1 : v;
      const frames = new Array(FRAME_COUNT);
      let loaded = 0,
        ready = false,
        curIndex = -1,
        targetIndex = 0,
        rafPending = false;
      function resize() {
        canvas.width = Math.round(canvas.clientWidth * dpr);
        canvas.height = Math.round(canvas.clientHeight * dpr);
        curIndex = -1;
        draw();
      }
      function draw() {
        if (!ready) return;
        let i = targetIndex;
        if (i === curIndex) return;
        let img = frames[i];
        if (!img || !img.complete || !img.naturalWidth) {
          let j = i;
          while (j >= 0 && (!frames[j] || !frames[j].complete)) j--;
          if (j < 0) return;
          img = frames[j];
        }
        const cw = canvas.width,
          ch = canvas.height;
        const scale = Math.max(cw / NAT_W, ch / NAT_H);
        const dw = NAT_W * scale,
          dh = NAT_H * scale;
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
        if (!rafPending) {
          rafPending = true;
          requestAnimationFrame(() => {
            rafPending = false;
            draw();
          });
        }
      }
      for (let i = 0; i < FRAME_COUNT; i++) {
        (idx => {
          const img = new Image();
          img.decoding = "async";
          img.onload = () => {
            loaded++;
            if (!ready && (loaded >= 8 || loaded === FRAME_COUNT)) {
              ready = true;
              section.classList.add("is-ready");
              resize();
            } else if (idx === targetIndex || idx === curIndex) {
              curIndex = -1;
              draw();
            }
          };
          img.src = framePath(idx);
          frames[idx] = img;
        })(i);
      }
      targetIndex = computeTarget();
      if (!reduceMotion) window.addEventListener("scroll", onScroll, {
        passive: true
      });else if (cue) cue.style.display = "none";
      window.addEventListener("resize", resize);
      section.style.height = "calc(" + SCROLL_HEIGHT + "px + 100vh)";
      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", resize);
      };
    }, []);
    return /*#__PURE__*/React.createElement("section", {
      className: "ssh",
      id: "top",
      ref: sectionRef
    }, /*#__PURE__*/React.createElement("div", {
      className: "ssh__sticky"
    }, /*#__PURE__*/React.createElement("canvas", {
      className: "ssh__canvas",
      ref: canvasRef
    }), /*#__PURE__*/React.createElement("img", {
      className: "ssh__poster",
      src: framePath(0),
      alt: "26 ft box truck driving on the highway at sunset"
    }), /*#__PURE__*/React.createElement("div", {
      className: "ssh__scrim"
    }), /*#__PURE__*/React.createElement("div", {
      className: "ssh__content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wd-container"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ssh__eyebrow"
    }, "\u2014 Truck dispatching for owner-operators"), /*#__PURE__*/React.createElement("h1", {
      className: "ssh__title"
    }, "Keep your wheels turning."), /*#__PURE__*/React.createElement("p", {
      className: "ssh__sub"
    }, "West Dispatch finds the high-paying loads, negotiates your rate, and handles the paperwork \u2014 so every mile you drive is a mile that pays."), /*#__PURE__*/React.createElement("div", {
      className: "ssh__actions"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 18
      })
    }, "Get Started Today"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "phone",
        size: 16
      })
    }, "(205) 557-3100")))), /*#__PURE__*/React.createElement("div", {
      className: "ssh__cue",
      ref: cueRef
    }, /*#__PURE__*/React.createElement("span", null, "Scroll"), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 20
    }))));
  }
  window.VideoHero = VideoHero;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/VideoHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WhyChoose.jsx
try { (() => {
/* global React */
(function () {
  const {
    Card,
    Stat,
    Badge
  } = window.WestDispatchDesignSystem_52aa6d;
  const Icon = window.Icon;
  const REASONS = [["shield-check", "No long-term contracts", "Month-to-month. Stay because the loads are good — never because you're locked in."], ["percent", "Transparent flat fee", "One clear dispatch fee per load. No hidden cuts, no surprise factoring deductions."], ["clock", "24/7 dispatcher support", "Real people on the phone when you need them — nights, weekends, and breakdowns included."], ["trending-up", "Higher revenue per mile", "Our negotiators consistently book lanes above market — more money on every haul."]];
  const LIVE_STATS = [
    { id: "wd-live-revenue",    min: 2500, max: 7500, minJump: 300 },
    { id: "wd-live-downtime",   min: 30,   max: 40,   minJump: 2   },
    { id: "wd-live-dispatched", min: 100,  max: 200,  minJump: 8   },
  ];
  const statValStyle = { fontFamily: "var(--font-display)", fontWeight: "var(--fw-bold)", fontSize: 46, lineHeight: 1, letterSpacing: "var(--ls-tight)", color: "var(--text-strong)" };
  const statLblStyle = { marginTop: 10, fontSize: 13, fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)" };

  function WhyChoose() {
    React.useEffect(() => {
      const rnd = (min, max) => Math.round(min + Math.random() * (max - min));
      const stats = LIVE_STATS.map(s => ({ ...s, cur: rnd(s.min, s.max), hist: [] }));
      const timers = [];
      function ease(t) { return t < 0.5 ? 2*t*t : -1 + (4-2*t)*t; }
      function fmt(s, v) {
        const n = Math.round(v);
        if (s.id === "wd-live-revenue")    return "$" + n.toLocaleString() + '<span style="color:var(--wd-blue-300);margin-left:2px">/wk</span>';
        if (s.id === "wd-live-downtime")   return n + "%";
        if (s.id === "wd-live-dispatched") return n + '<span style="color:var(--wd-blue-300);margin-left:2px">+</span>';
      }
      stats.forEach(s => { const el = document.getElementById(s.id); if (el) el.innerHTML = fmt(s, s.cur); });
      function nextVal(s) {
        let n, tries = 0;
        do { n = rnd(s.min, s.max); tries++; }
        while (tries < 30 && (Math.abs(n - s.cur) < s.minJump || s.hist.indexOf(n) !== -1));
        s.hist.push(n); if (s.hist.length > 4) s.hist.shift();
        return n;
      }
      function animateTo(s, target) {
        const from = s.cur, dur = 1000 + Math.random() * 600, t0 = performance.now();
        const el = document.getElementById(s.id);
        if (!el) return;
        (function tick(now) {
          const p = Math.min((now - t0) / dur, 1);
          el.innerHTML = fmt(s, from + (target - from) * ease(p));
          if (p < 1) requestAnimationFrame(tick);
          else { s.cur = target; schedule(s); }
        })(t0);
      }
      function schedule(s) {
        const t = setTimeout(() => animateTo(s, nextVal(s)), 2000 + Math.random() * 3000);
        timers.push(t);
      }
      stats.forEach((s, i) => { const t = setTimeout(() => schedule(s), Math.random() * 1500 + i * 500); timers.push(t); });
      return () => timers.forEach(clearTimeout);
    }, []);

    return /*#__PURE__*/React.createElement("section", {
      className: "wd-section wd-why",
      id: "why"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wd-container wd-why__grid"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wd-why__left"
    }, /*#__PURE__*/React.createElement("span", {
      className: "wd-eyebrow"
    }, "\u2014 Why West Dispatch"), /*#__PURE__*/React.createElement("h2", {
      className: "wd-sectionhead__title"
    }, "Carriers stay with us because the numbers work"), /*#__PURE__*/React.createElement("p", {
      className: "wd-sectionhead__sub"
    }, "We treat your truck like our own business. Less downtime, better rates, and a dispatcher who actually picks up the phone."), /*#__PURE__*/React.createElement("div", {
      className: "wd-why__list"
    }, REASONS.map(([ic, t, b]) => /*#__PURE__*/React.createElement("div", {
      className: "wd-why__item",
      key: t
    }, /*#__PURE__*/React.createElement("span", {
      className: "wd-why__check"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 20,
      color: "var(--wd-blue-300)"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "wd-why__t"
    }, t), /*#__PURE__*/React.createElement("div", {
      className: "wd-why__b"
    }, b)))))), /*#__PURE__*/React.createElement("div", {
      className: "wd-why__right"
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "accent",
      padding: 32,
      style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }
    }, /*#__PURE__*/React.createElement("div", { className: "wd-live-header" },
      /*#__PURE__*/React.createElement("span", { className: "wd-live-badge" },
        /*#__PURE__*/React.createElement("span", { className: "wd-live-dot" }),
        "LIVE"
      ),
      /*#__PURE__*/React.createElement("span", { className: "wd-live-label" }, "Dispatch metrics")
    ), /*#__PURE__*/React.createElement("div", null,
      /*#__PURE__*/React.createElement("div", { id: "wd-live-revenue", style: statValStyle },
        "$2,840", /*#__PURE__*/React.createElement("span", { style: { color: "var(--wd-blue-300)", marginLeft: 2 } }, "/wk")
      ),
      /*#__PURE__*/React.createElement("div", { style: statLblStyle }, "Avg. revenue lift per truck")
    ), /*#__PURE__*/React.createElement("div", null,
      /*#__PURE__*/React.createElement("div", { id: "wd-live-downtime", style: statValStyle }, "36%"),
      /*#__PURE__*/React.createElement("div", { style: statLblStyle }, "Less downtime between loads")
    ), /*#__PURE__*/React.createElement("div", null,
      /*#__PURE__*/React.createElement("div", { id: "wd-live-dispatched", style: statValStyle },
        "207", /*#__PURE__*/React.createElement("span", { style: { color: "var(--wd-blue-300)", marginLeft: 2 } }, "+")
      ),
      /*#__PURE__*/React.createElement("div", { style: statLblStyle }, "Owner-operators dispatched")
    ), /*#__PURE__*/React.createElement(Stat, {
      value: "24/7",
      label: "Dispatcher availability",
      tone: "energy"
    })), /*#__PURE__*/React.createElement("div", {
      className: "wd-why__quote"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "quote",
      size: 28,
      color: "var(--accent)"
    }), /*#__PURE__*/React.createElement("p", null, "\"They keep me loaded every single week. I just drive \u2014 they handle everything else.\""), /*#__PURE__*/React.createElement("div", {
      className: "wd-why__quoteby"
    }, "\u2014 Marcus R., reefer owner-op, 3 trucks")))));
  }
  window.WhyChoose = WhyChoose;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WhyChoose.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/icons.jsx
try { (() => {
/* global React */
(function () {
  // Lucide-backed icon. Renders an <i data-lucide> that lucide.createIcons() upgrades to <svg>.
  // We re-run createIcons after each mount/update so dynamically added icons render.
  function Icon({
    name,
    size = 20,
    color = "currentColor",
    strokeWidth = 1.75,
    style = {}
  }) {
    const ref = React.useRef(null);
    React.useEffect(() => {
      if (window.lucide && ref.current) {
        window.lucide.createIcons({
          attrs: {
            "stroke-width": strokeWidth
          },
          nameAttr: "data-lucide"
        });
      }
    });
    return /*#__PURE__*/React.createElement("span", {
      ref: ref,
      className: "wd-ico",
      style: {
        display: "inline-flex",
        lineHeight: 0,
        fontSize: size,
        color,
        ...style
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": name
    }));
  }
  window.Icon = Icon;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Input = __ds_scope.Input;

})();
