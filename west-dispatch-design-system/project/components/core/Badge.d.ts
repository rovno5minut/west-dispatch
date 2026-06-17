import React from "react";

export interface BadgeProps {
  children?: React.ReactNode;
  /** @default "neutral" */
  tone?: "neutral" | "accent" | "energy" | "success" | "warning";
  /** Show a leading status dot. @default false */
  dot?: boolean;
  style?: React.CSSProperties;
}

/** Small uppercase status / label pill. */
export function Badge(props: BadgeProps): JSX.Element;
