import React from "react";

/**
 * Big metric display for proof/stat strips.
 * value (e.g. "$2,840"), label, optional suffix and accent tone.
 */
export function Stat({ value, label, suffix = "", tone = "accent", align = "left", style = {} }) {
  const toneColor = { accent: "var(--wd-blue-300)", energy: "var(--wd-red-400)", plain: "var(--text-strong)" }[tone] || "var(--wd-blue-300)";
  return (
    <div style={{ textAlign: align, ...style }}>
      <div style={{
        fontFamily: "var(--font-display)",
        fontWeight: "var(--fw-bold)",
        fontSize: 46,
        lineHeight: 1,
        letterSpacing: "var(--ls-tight)",
        color: "var(--text-strong)",
      }}>
        {value}
        {suffix && <span style={{ color: toneColor, marginLeft: 2 }}>{suffix}</span>}
      </div>
      <div style={{
        marginTop: 10,
        fontSize: 13,
        fontFamily: "var(--font-mono)",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "var(--text-muted)",
      }}>
        {label}
      </div>
    </div>
  );
}
