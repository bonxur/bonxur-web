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
    "border border-leaf-500/40 bg-gradient-to-r from-forest-800 via-leaf-600 to-aqua-500 text-white shadow-[0_16px_34px_rgba(32,167,93,0.25)] hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(40,184,184,0.24)]",
  secondary:
    "border border-forest-900/12 bg-white/82 text-forest-900 shadow-[0_12px_28px_rgba(6,29,21,0.06)] backdrop-blur hover:-translate-y-0.5 hover:border-aqua-500/35 hover:bg-aqua-50",
  light:
    "border border-white/85 bg-white/92 text-forest-900 shadow-[0_12px_30px_rgba(6,29,21,0.14)] backdrop-blur hover:-translate-y-0.5 hover:bg-aqua-50",
};

function classes(variant: CommonProps["variant"], className = "") {
  return `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold tracking-[-0.01em] transition duration-200 active:translate-y-0 ${styles[variant ?? "primary"]} ${className}`;
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
