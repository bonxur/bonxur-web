import type { Metadata } from "next";
import { Icon } from "@/components/icons";
import { Simulator } from "@/components/simulator";

export const metadata: Metadata = {
  title: "Simulador Torre Hidropónica Bonxur 30",
  description:
    "Calcula plantas, torres y superficie para una instalación con la Torre Hidropónica Bonxur 30.",
};

export default function SimuladorPage() {
  return (
    <>
      <section className="page-hero py-16 sm:py-20">
        <div className="container-page relative z-10 max-w-3xl text-center">
          <span className="eyebrow">Simulador Bonxur</span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-forest-950 sm:text-5xl lg:text-6xl">
            Convierte metros cuadrados en plantas.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-forest-900/60">
            Calcula cuántas Torres Bonxur 30 caben, la superficie ocupada y el potencial
            de tu espacio en tiempo real.
          </p>
        </div>
      </section>
      <section className="container-page -mt-3 pb-24 sm:-mt-5">
        <Simulator />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: "layers" as const,
              title: "Superficie teórica",
              text: "La huella orientativa es de 0,5 m² por Torre Bonxur 30. La distribución real debe estudiar accesos y separación.",
            },
            {
              icon: "sprout" as const,
              title: "30 plantas por torre",
              text: "Cada Torre Bonxur 30 ofrece hasta 30 posiciones. La ocupación y productividad reales dependen de cada cultivo.",
            },
            {
              icon: "sun" as const,
              title: "Entorno de cultivo",
              text: "Interior y exterior requieren condiciones diferentes de luz, temperatura, protección y suministro eléctrico.",
            },
          ].map((item) => (
            <article className="rounded-[1.5rem] border border-forest-900/10 bg-white p-6" key={item.title}>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-leaf-100 text-leaf-600">
                <Icon name={item.icon} size={20} />
              </span>
              <h2 className="mt-5 text-lg font-bold text-forest-950">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-forest-900/55">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
