"use client";

import { useTheme } from "@/context/ThemeProvider";
import { HoverReveal } from "@/components/ui/HoverReveal";
import { Button } from "@/components/ui/Button";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative w-full">
      <HoverReveal
        image={{
          src: "https://picsum.photos/1200/300?random=7",
          alt: "Portfolio header",
          priority: true,
        }}
        title={<span className="text-2xl font-bold">Portfolio</span>}
        className="w-full h-32"
        asNav={true}
        overlayPadding="px-4 sm:px-6 md:px-8 py-6"
        controls={[
          { key: "home", label: "Home", href: "/" },
          { key: "theme", label: theme === "light" ? "🌙" : "☀️", onClick: toggleTheme, variant: "secondary" },
        ]}
      />

      {/* Always-visible theme toggle */}
      <div className="absolute top-3 right-4">
        <Button variant="secondary" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </Button>
      </div>
    </div>
  );
}