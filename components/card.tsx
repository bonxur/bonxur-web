import type { HTMLAttributes, ReactNode } from "react";

export function Card({
  children,
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div
      className={`tech-card glass-panel rounded-[1.6rem] p-7 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
