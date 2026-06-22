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
    "border border-leaf-600 bg-leaf-600 text-white shadow-[0_14px_30px_rgba(32,167,93,0.22)] hover:-translate-y-0.5 hover:border-forest-800 hover:bg-forest-800 hover:shadow-[0_18px_38px_rgba(6,29,21,0.18)]",
  secondary:
    "border border-forest-900/12 bg-white/90 text-forest-900 shadow-[0_10px_24px_rgba(6,29,21,0.055)] hover:-translate-y-0.5 hover:border-leaf-600/45 hover:bg-cream-50",
  light:
    "border border-white bg-white text-forest-900 shadow-[0_12px_30px_rgba(6,29,21,0.16)] hover:-translate-y-0.5 hover:bg-cream-50",
};

function classes(variant: CommonProps["variant"], className = "") {
  return `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold tracking-[-0.01em] transition duration-200 ${styles[variant ?? "primary"]} ${className}`;
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
