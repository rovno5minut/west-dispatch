import React from "react";

/**
 * Text field for the contact / lead form. Dark inset surface with blue focus ring.
 * Renders <textarea> when multiline.
 */
export function Input({ label, hint, multiline = false, rows = 4, id, style = {}, ...rest }) {
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
    fontFamily: "var(--font-body)",
  };

  const common = {
    id: fieldId,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: fieldStyle,
    ...rest,
  };

  return (
    <label htmlFor={fieldId} style={{ display: "block", ...style }}>
      {label && (
        <span style={{ display: "block", marginBottom: 8, fontSize: 13, fontWeight: "var(--fw-semibold)", color: "var(--text-body)" }}>
          {label}
        </span>
      )}
      {multiline ? <textarea rows={rows} {...common} /> : <input {...common} />}
      {hint && (
        <span style={{ display: "block", marginTop: 6, fontSize: 12, color: "var(--text-muted)" }}>{hint}</span>
      )}
    </label>
  );
}
