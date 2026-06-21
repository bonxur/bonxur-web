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
    <footer className="dark-panel border-t border-white/5 text-white">
      <div className="container-page relative">
        <div className="grid gap-3 border-b border-white/8 py-5 sm:grid-cols-3">
          {[
            ["SYSTEM", "Vertical hydroponics"],
            ["ORIGIN", "Galicia · 42.8° N"],
            ["STATUS", "Diseñando futuro"],
          ].map(([label, value], index) => (
            <div
              className={`flex items-center gap-3 text-xs ${
                index > 0 ? "sm:border-l sm:border-white/8 sm:pl-5" : ""
              }`}
              key={label}
            >
              <span className="tech-label text-[0.55rem] font-bold text-leaf-500">{label}</span>
              <span className="text-white/42">{value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="container-page relative grid gap-10 py-14 md:grid-cols-[1.3fr_0.7fr_0.8fr]">
        <div>
          <Logo light />
          <p className="mt-6 max-w-sm text-sm leading-6 text-white/48">
            Tecnología hidropónica vertical diseñada en Galicia para cultivar más,
            más cerca y con menos recursos.
          </p>
          <div className="mt-7 inline-flex items-center gap-2 rounded-[0.55rem] border border-white/8 bg-white/[0.035] px-3 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-leaf-500 shadow-[0_0_10px_rgba(72,209,123,0.8)]" />
            <span className="tech-label text-[0.54rem] font-bold text-white/38">
              Cultivation system online
            </span>
          </div>
        </div>
        <div>
          <p className="tech-label mb-5 text-[0.6rem] font-bold text-leaf-500">
            Explora
          </p>
          <div className="grid grid-cols-2 gap-x-5 gap-y-3 md:grid-cols-1">
            {nav.map(([label, href]) => (
              <Link className="group flex items-center gap-2 text-sm text-white/55 transition hover:text-white" href={href} key={href}>
                <span className="h-px w-0 bg-leaf-500 transition-all group-hover:w-3" />
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="tech-label mb-5 text-[0.6rem] font-bold text-leaf-500">
            Hablemos
          </p>
          <a className="flex items-center gap-3 text-sm text-white/55 hover:text-white" href="mailto:ola@bonxur.gal">
            <Icon name="mail" size={18} />
            ola@bonxur.gal
          </a>
          <p className="mt-4 flex items-center gap-3 text-sm text-white/55">
            <Icon name="map" size={18} />
            Galicia
          </p>
        </div>
      </div>
      <div className="relative border-t border-white/8">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Bonxur. Cultivando futuro.</p>
          <p>Diseñado y pensado en Galicia.</p>
        </div>
      </div>
    </footer>
  );
}
