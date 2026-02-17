"use client";

import { ReactNode } from "react";
import { HoverReveal } from "./HoverReveal";

interface CardProps {
  id: string;
  url: string;
  alt: string;
  title?: string;
  children?: ReactNode;
  onAction?: (action: string) => void;
}

export function Card({ id, url, alt, title, children, onAction }: CardProps) {
  const handle = (action: string) => onAction?.(action);

  return (
    <HoverReveal
      id={id}
      image={{ src: url, alt }}
      title={title}
      className="w-full aspect-square bg-surface border border-theme"
      controls={[
        { key: "view", label: "View", variant: "primary", onClick: () => handle("view") },
        { key: "edit", label: "Edit", variant: "secondary", onClick: () => handle("edit") },
        { key: "delete", label: "Delete", variant: "danger", onClick: () => handle("delete") },
      ]}
    >
      {children}
    </HoverReveal>
  );
}
