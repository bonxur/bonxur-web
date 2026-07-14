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
            Tecnología hidropónica vertical diseñada en Galicia para cultivar más cerca,
            sin tierra y aprovechando mejor cada metro disponible.
          </p>
          <div className="mt-7 grid max-w-md gap-2 sm:grid-cols-2">
            {["Hecha en Galicia", "Pruebas en Vigo", "Acompañamiento inicial", "Producto físico real"].map((item) => (
              <div
                className="inline-flex items-center gap-2 rounded-full border border-aqua-500/15 bg-white/82 px-3 py-2 text-xs font-bold text-forest-900/70 shadow-sm backdrop-blur"
                key={item}
              >
                <span className="h-2 w-2 rounded-full bg-leaf-600" />
                {item}
              </div>
            ))}
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
          <Link
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-forest-800 to-leaf-600 px-4 py-2 text-sm font-extrabold text-white shadow-[0_14px_30px_rgba(32,167,93,0.18)]"
            href="/cuestionario"
          >
            Pedir presupuesto
            <Icon name="arrow" size={16} />
          </Link>
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
