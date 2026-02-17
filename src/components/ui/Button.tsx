import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
  onClick?: () => void;
}

export function Button({ children, variant = "primary", onClick }: ButtonProps) {
  const base = "px-3 py-2 rounded font-medium text-xs transition-colors whitespace-nowrap";
  const variants: Record<string, string> = {
    primary: "bg-accent text-surface hover:opacity-90",
    secondary: "bg-surface text-theme border border-theme hover:opacity-95",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}