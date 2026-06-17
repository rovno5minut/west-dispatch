import React from "react";

export interface InputProps {
  label?: string;
  hint?: string;
  /** Render a textarea. @default false */
  multiline?: boolean;
  rows?: number;
  id?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  style?: React.CSSProperties;
}

/** Labeled text input / textarea with blue focus ring. */
export function Input(props: InputProps): JSX.Element;
