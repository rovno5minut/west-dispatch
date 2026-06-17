import React from "react";

/**
 * Surface container. Variants: default (panel), raised (more elevation),
 * outline (transparent w/ border), accent (subtle blue glow).
 * Set `interactive` for hover lift.
 */
export function Card({ children, variant = "default", interactive = false, padding = 28, style = {}, ...rest }) {
  const variants = {
    default: { background: "var(--surface-card)", border: "1px solid var(--border-subtle)", boxShadow: "var(--shadow-md), var(--sheen-top)" },
    raised: { background: "var(--surface-card-hover)", border: "1px solid var(--border-default)", boxShadow: "var(--shadow-lg), var(--sheen-top)" },
    outline: { background: "rgba(255,255,255,0.015)", border: "1px solid var(--border-default)", boxShadow: "none" },
    accent: { background: "linear-gradient(180deg, rgba(46,107,255,0.10), rgba(46,107,255,0.02))", border: "1px solid rgba(46,107,255,0.28)", boxShadow: "var(--shadow-md)" },
  };
  const v = variants[variant] || variants.default;
  return (
    <div
      style={{
        borderRadius: "var(--radius-lg)",
        padding,
        transition: "transform var(--dur-base) var(--ease-out), filter var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
        ...v,
        ...style,
      }}
      onMouseEnter={(e) => {
        if (!interactive) return;
        e.currentTarget.style.transform = "translateY(-4px) scale(1.03)";
        e.currentTarget.style.filter = "brightness(1.12)";
        e.currentTarget.style.borderColor = "rgba(46,107,255,0.4)";
        e.currentTarget.style.boxShadow = "var(--shadow-lg), 0 16px 48px rgba(46,107,255,0.30), 0 0 0 1px rgba(46,107,255,0.18)";
      }}
      onMouseLeave={(e) => {
        if (!interactive) return;
        e.currentTarget.style.transform = "";
        e.currentTarget.style.filter = "";
        e.currentTarget.style.borderColor = "";
        e.currentTarget.style.boxShadow = "";
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
