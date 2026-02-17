"use client";

import Image from "next/image";
import { ReactNode, useState } from "react";
import { Button } from "./Button";

type Control = {
  key: string;
  label?: ReactNode;
  variant?: "primary" | "secondary" | "danger";
  onClick?: () => void;
  href?: string;
};

interface HoverRevealProps {
  id?: string;
  image?: { src: string; alt?: string; priority?: boolean };
  title?: ReactNode;
  controls?: Control[];
  children?: ReactNode;
  className?: string;
  asNav?: boolean; // render navigation semantics
  overlayPadding?: string; // extra classes for padding (defaults align with gallery)
}

export function HoverReveal({
  id,
  image,
  title,
  controls = [],
  children,
  className = "",
  asNav = false,
  overlayPadding = "px-4 sm:px-6 md:px-8 py-4",
}: HoverRevealProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const overlayClassName = `transition-opacity pt-10 duration-600 ${isHovered ? "opacity-100" : "opacity-0"} ${overlayPadding}`;

  const controlsMarkup =
    controls.length > 0 ? (
      <div className="flex gap-2 animate-slide-down items-center">
        {controls.map((c) =>
          c.href ? (
            <a
              key={c.key}
              href={c.href}
              className="text-surface text-sm font-medium whitespace-nowrap px-3 py-2 rounded bg-white/10 hover:bg-white/20 transition-colors"
            >
              {c.label}
            </a>
          ) : (
            <Button key={c.key} variant={c.variant || "primary"} onClick={c.onClick}>
              {c.label}
            </Button>
          )
        )}
      </div>
    ) : null;

  const inner = (
    <>
      {title && (
        <div className="mb-2">
          <h3 className="text-sm font-medium text-white line-clamp-2">{title}</h3>
        </div>
      )}

      {controlsMarkup}

      {children && <div className="mt-2">{children}</div>}
    </>
  );

  return (
    <div
      id={id}
      className={`relative ${className} rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-lg border-clip-sharp`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
    >
      {image && (
        <div className="relative w-full h-full">
          {!imgError ? (
            <Image
              src={image.src}
              alt={image.alt || ""}
              fill
              className={`object-cover transition-opacity duration-300 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgError(true)}
              priority={image.priority}
            />
          ) : (
            <div className="w-full h-full bg-surface flex items-center justify-center">
              <span className="text-muted text-sm">{image.alt || "Image unavailable"}</span>
            </div>
          )}
        </div>
      )}

      {/* overlay container */}
      <div
        className={`absolute inset-0 flex flex-col justify-end transition-all duration-300 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-hidden={!isHovered}
      >
        {asNav ? (
          <nav aria-label="navigation" className={overlayClassName} style={{ background: `linear-gradient(to top, var(--overlay-start), var(--overlay-mid), transparent)` }}>
            {inner}
          </nav>
        ) : (
          <div className={overlayClassName} style={{ background: `linear-gradient(to top, var(--overlay-start), var(--overlay-mid), transparent)` }}>
            {inner}
          </div>
        )}
      </div>
    </div>
  );
}

export type { Control };
