"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ButtonLink } from "./button";
import { Icon } from "./icons";
import { Logo } from "./logo";

const links = [
  { href: "/torre", label: "Torre" },
  { href: "/simulador", label: "Simulador" },
  { href: "/cultivos", label: "Cultivos" },
  { href: "/soluciones", label: "Soluciones" },
  { href: "/proyecto", label: "Proyecto" },
  { href: "/cuestionario", label: "Pedir presupuesto" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest-900/10 bg-white/90 shadow-[0_8px_28px_rgba(6,29,21,0.045)] backdrop-blur-2xl">
      <div className="container-page flex h-[72px] items-center justify-between">
        <Logo />
        <nav
          className="hidden items-center gap-0.5 rounded-full border border-aqua-500/12 bg-aqua-50/80 p-1 lg:flex"
          aria-label="Navegación principal"
        >
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                className={`relative rounded-full px-3.5 py-2 text-[0.82rem] font-semibold transition ${
                  active
                    ? "bg-white text-forest-950 shadow-[0_4px_14px_rgba(6,29,21,0.07)]"
                    : "text-forest-900/55 hover:bg-white/65 hover:text-forest-900"
                }`}
                href={link.href}
                key={link.href}
              >
                {link.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-leaf-500" />
                )}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <span className="flex items-center gap-2 text-xs font-bold text-forest-900/48">
            <span className="h-2 w-2 rounded-full bg-leaf-600" />
            Vigo y alrededores
          </span>
          <ButtonLink className="min-h-10 px-4 py-2" href="/cuestionario" arrow>
            Solicitar información
          </ButtonLink>
        </div>
        <button
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="flex h-11 w-11 items-center justify-center rounded-[0.7rem] border border-forest-900/12 bg-white text-forest-950 shadow-sm lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
      {open && (
        <div className="border-t border-forest-900/8 bg-white/96 px-4 pb-5 pt-3 backdrop-blur-2xl lg:hidden">
          <nav className="container-page flex flex-col gap-1" aria-label="Navegación móvil">
            {links.map((link) => (
              <Link
                className={`rounded-[0.75rem] border px-4 py-3 text-sm font-semibold ${
                  pathname === link.href
                    ? "border-leaf-500/25 bg-leaf-100 text-forest-900"
                    : "border-transparent text-forest-900/65"
                }`}
                href={link.href}
                key={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink className="mt-3 w-full" href="/cuestionario" arrow>
              Solicitar torre de prueba
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  );
}
