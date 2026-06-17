import React from "react";

export interface AccordionItem {
  q: string;
  a: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  /** Index open on mount; -1 for all closed. @default 0 */
  defaultOpen?: number;
  style?: React.CSSProperties;
}

/** Single-open FAQ accordion. */
export function Accordion(props: AccordionProps): JSX.Element;
