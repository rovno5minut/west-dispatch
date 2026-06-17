import React from "react";

export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: "primary" | "energy" | "secondary" | "ghost";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Primary call-to-action button for West Dispatch.
 * @startingPoint section="Core" subtitle="Pill CTA buttons with blue & crimson variants" viewport="700x180"
 */
export function Button(props: ButtonProps): JSX.Element;
