import React from "react";

/**
 * Status / label badge. Logistics tones: loaded (green), in-transit (amber),
 * available (blue), plus neutral and energy.
 */
export function Badge({ children, tone = "neutral", dot = false, style = {}, ...rest }) {
  const tones = {
    neutral: { color: "var(--text-body)", bg: "rgba(255,255,255,0.06)", bd: "var(--border-default)", dotc: "var(--text-muted)", glow: "rgba(255,255,255,0.22)" },
    accent: { color: "var(--wd-blue-300)", bg: "var(--accent-soft)", bd: "rgba(46,107,255,0.3)", dotc: "var(--accent)", glow: "rgba(46,107,255,0.55)" },
    energy: { color: "var(--wd-red-400)", bg: "var(--energy-soft)", bd: "rgba(240,41,74,0.3)", dotc: "var(--energy)", glow: "rgba(240,41,74,0.55)" },
    success: { color: "#5BE3A7", bg: "rgba(31,191,117,0.13)", bd: "rgba(31,191,117,0.3)", dotc: "var(--success)", glow: "rgba(31,191,117,0.55)" },
    warning: { color: "#F8C46A", bg: "rgba(245,165,36,0.13)", bd: "rgba(245,165,36,0.3)", dotc: "var(--warning)", glow: "rgba(245,165,36,0.55)" },
  };
  const t = tones[tone] || tones.neutral;
  return (
    <span
      style={{
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
        transition:
          "transform 250ms var(--ease-out), filter 250ms var(--ease-out), box-shadow 250ms var(--ease-out)",
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.filter = "brightness(1.12)";
        e.currentTarget.style.transform = "scale(1.03)";
        e.currentTarget.style.boxShadow = `0 0 20px 2px ${t.glow}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.filter = "";
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "";
      }}
      {...rest}
    >
      {dot && (
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: t.dotc, boxShadow: `0 0 8px ${t.dotc}` }} />
      )}
      {children}
    </span>
  );
}
