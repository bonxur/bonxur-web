import type { HTMLAttributes, ReactNode } from "react";

export function Card({
  children,
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div
      className={`tech-card rounded-[1.15rem] border border-forest-900/10 bg-white/95 p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
