import React from "react";

export interface CardProps {
  children?: React.ReactNode;
  /** @default "default" */
  variant?: "default" | "raised" | "outline" | "accent";
  /** Enable hover lift + blue border glow. @default false */
  interactive?: boolean;
  /** Inner padding in px. @default 28 */
  padding?: number;
  style?: React.CSSProperties;
}

/** Rounded surface container for services, stats, testimonials. */
export function Card(props: CardProps): JSX.Element;
