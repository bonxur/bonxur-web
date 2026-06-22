import type { HTMLAttributes, ReactNode } from "react";

export function Card({
  children,
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div
      className={`tech-card rounded-[1.6rem] border border-forest-900/10 bg-white/95 p-7 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
