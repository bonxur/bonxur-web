import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Icon } from "./icons";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
  arrow?: boolean;
};

const styles = {
  primary:
    "border border-forest-900 bg-forest-900 text-white shadow-[0_12px_30px_rgba(6,29,21,0.18)] hover:-translate-y-0.5 hover:border-forest-800 hover:bg-forest-800 hover:shadow-[0_16px_36px_rgba(6,29,21,0.22)]",
  secondary:
    "border border-forest-900/15 bg-white/85 text-forest-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] hover:-translate-y-0.5 hover:border-leaf-600/45 hover:bg-white",
  light:
    "border border-white bg-white text-forest-900 shadow-[0_12px_30px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 hover:bg-leaf-100",
};

function classes(variant: CommonProps["variant"], className = "") {
  return `inline-flex min-h-12 items-center justify-center gap-2 rounded-[0.75rem] px-5 py-3 text-sm font-bold tracking-[-0.01em] transition duration-200 ${styles[variant ?? "primary"]} ${className}`;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  arrow = false,
}: CommonProps & { href: string }) {
  return (
    <Link className={classes(variant, className)} href={href}>
      {children}
      {arrow && <Icon name="arrow" size={17} />}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  className,
  arrow = false,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={classes(variant, className)} {...props}>
      {children}
      {arrow && <Icon name="arrow" size={17} />}
    </button>
  );
}
