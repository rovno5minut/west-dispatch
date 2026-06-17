import React from "react";

export interface StatProps {
  /** Headline number, e.g. "$2,840" or "98%". */
  value: string;
  /** Caption under the number. */
  label: string;
  /** Trailing unit shown in accent color, e.g. "+" or "/mi". */
  suffix?: string;
  /** @default "accent" */
  tone?: "accent" | "energy" | "plain";
  /** @default "left" */
  align?: "left" | "center";
  style?: React.CSSProperties;
}

/** Large numeric proof-point stat. */
export function Stat(props: StatProps): JSX.Element;
