import React from "react";

/**
 * West Dispatch primary action button.
 * Variants: primary (electric blue), energy (logo crimson), secondary (outline), ghost.
 */
export function Button({
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
    sm: { padding: "9px 16px", fontSize: 14, height: 38, gap: 8 },
    md: { padding: "13px 24px", fontSize: 15, height: 48, gap: 10 },
    lg: { padding: "17px 32px", fontSize: 17, height: 58, gap: 12 },
  };
  const s = sizes[size] || sizes.md;

  const variants = {
    primary: {
      background: "var(--grad-accent)",
      color: "var(--text-on-accent)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-accent), var(--sheen-top)",
      glow: "0 0 28px 3px rgba(46,107,255,0.6), var(--sheen-top)",
    },
    energy: {
      background: "var(--grad-energy)",
      color: "var(--text-on-accent)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-energy), var(--sheen-top)",
      glow: "0 0 28px 3px rgba(240,41,74,0.6), var(--sheen-top)",
    },
    secondary: {
      background: "rgba(255,255,255,0.02)",
      color: "var(--text-strong)",
      border: "1px solid var(--border-strong)",
      boxShadow: "var(--sheen-top)",
      glow: "0 8px 24px rgba(255,255,255,0.08), var(--sheen-top)",
    },
    ghost: {
      background: "transparent",
      color: "var(--text-body)",
      border: "1px solid transparent",
      boxShadow: "none",
      glow: "none",
    },
  };
  const { glow, ...v } = variants[variant] || variants.primary;

  return (
    <button
      disabled={disabled}
      style={{
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
        ...style,
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = "translateY(1px) scale(0.985)"; }}
      onMouseUp={(e) => { if (!disabled) e.currentTarget.style.transform = "scale(1.03)"; }}
      onMouseEnter={(e) => { if (!disabled) { e.currentTarget.style.filter = "brightness(1.12)"; e.currentTarget.style.transform = "scale(1.03)"; e.currentTarget.style.boxShadow = glow; } }}
      onMouseLeave={(e) => { e.currentTarget.style.filter = ""; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
