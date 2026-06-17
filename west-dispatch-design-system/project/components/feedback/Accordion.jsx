import React from "react";

/**
 * FAQ accordion. items: [{ q, a }]. Single-open by default.
 */
export function Accordion({ items = [], defaultOpen = 0, style = {} }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, ...style }}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            style={{
              borderRadius: "var(--radius-md)",
              border: `1px solid ${isOpen ? "rgba(46,107,255,0.32)" : "var(--border-default)"}`,
              background: isOpen ? "rgba(46,107,255,0.05)" : "rgba(255,255,255,0.015)",
              overflow: "hidden",
              transition: "border-color var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)",
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              style={{
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
                letterSpacing: "var(--ls-snug)",
              }}
            >
              {it.q}
              <span style={{
                flexShrink: 0,
                width: 26, height: 26,
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                color: isOpen ? "var(--accent)" : "var(--text-muted)",
                transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                transition: "transform var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)",
                fontSize: 24, fontWeight: 300, lineHeight: 1,
              }}>+</span>
            </button>
            <div style={{
              maxHeight: isOpen ? 320 : 0,
              opacity: isOpen ? 1 : 0,
              transition: "max-height var(--dur-slow) var(--ease-out), opacity var(--dur-base) var(--ease-out)",
            }}>
              <div style={{ padding: "0 24px 22px", color: "var(--text-body)", fontSize: 15, lineHeight: "var(--lh-relaxed)" }}>
                {it.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
