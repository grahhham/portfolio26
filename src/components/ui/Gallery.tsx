"use client";

import { ReactNode } from "react";
import { Card } from "./Card";

interface GalleryItem {
  id: string;
  url: string;
  alt: string;
  title?: string;
}

interface GalleryProps {
  items: GalleryItem[];
  onItemAction?: (itemId: string, action: string) => void;
  children?: ReactNode;
}

export function Gallery({
  items,
  onItemAction,
  children,
}: GalleryProps) {
  return (
    <div className="w-full">
      {children && <div className="mb-6">{children}</div>}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            url={item.url}
            alt={item.alt}
            title={item.title}
            onAction={(action) => onItemAction?.(item.id, action)}
          />
        ))}
      </div>
    </div>
  );
}
