import Link from "next/link";
import { Icon } from "./icons";
import { Logo } from "./logo";

const nav = [
  ["Torre Bonxur 30", "/torre"],
  ["Simulador", "/simulador"],
  ["Cultivos", "/cultivos"],
  ["Soluciones", "/soluciones"],
  ["Proyecto", "/proyecto"],
  ["Pedir presupuesto", "/cuestionario"],
];

export function Footer() {
  return (
    <footer className="agro-tech-surface border-t border-aqua-500/15 text-forest-950">
      <div className="circuit-lines absolute inset-0 opacity-20" />
      <div className="container-page relative grid gap-10 py-14 md:grid-cols-[1.3fr_0.7fr_0.8fr]">
        <div>
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-6 text-forest-900/62">
            Tecnología hidropónica vertical diseñada en Galicia para cultivar más,
            más cerca y con menos recursos.
          </p>
          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-aqua-500/15 bg-white/82 px-4 py-2 text-sm font-bold text-forest-900/70 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-leaf-600" />
            Hecha en Galicia
          </div>
        </div>
        <div>
          <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.12em] text-leaf-600">
            Explora
          </p>
          <div className="grid grid-cols-2 gap-x-5 gap-y-3 md:grid-cols-1">
            {nav.map(([label, href]) => (
              <Link className="group flex items-center gap-2 text-sm font-semibold text-forest-900/58 transition hover:text-forest-950" href={href} key={href}>
                <span className="h-px w-0 bg-leaf-600 transition-all group-hover:w-3" />
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.12em] text-leaf-600">
            Hablemos
          </p>
          <a className="flex items-center gap-3 text-sm font-semibold text-forest-900/58 hover:text-forest-950" href="mailto:info@bonxur.com">
            <Icon name="mail" size={18} />
            info@bonxur.com
          </a>
          <p className="mt-4 flex items-center gap-3 text-sm font-semibold text-forest-900/58">
            <Icon name="map" size={18} />
            Vigo y alrededores
          </p>
        </div>
      </div>
      <div className="relative border-t border-forest-900/10 bg-white/55 backdrop-blur">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-forest-900/48 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Bonxur. Cultivando futuro.</p>
          <p>Diseñado y pensado en Galicia.</p>
        </div>
      </div>
    </footer>
  );
}
