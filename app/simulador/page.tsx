import type { Metadata } from "next";
import { Icon } from "@/components/icons";
import { Simulator } from "@/components/simulator";

export const metadata: Metadata = {
  title: "Simulador de torre hidropónica vertical Bonxur 30",
  description:
    "Calcula plantas, torres y superficie para una instalación hidropónica vertical Bonxur 30 en casa, terraza, finca o restaurante.",
  alternates: {
    canonical: "/simulador",
  },
  openGraph: {
    title: "Simulador Bonxur de torre hidropónica vertical",
    description:
      "Estima plantas, superficie ocupada y ocupación del espacio con Torres Bonxur 30.",
    url: "/simulador",
    images: [
      {
        url: "/images/torre-con-plantas.jpg",
        width: 1200,
        height: 1600,
        alt: "Torre hidropónica Bonxur con plantas para calcular una instalación vertical",
      },
    ],
  },
};

export default function SimuladorPage() {
  return (
    <>
      <section className="page-hero py-16 sm:py-20">
        <div className="water-lines absolute inset-x-0 bottom-0 h-1/2 opacity-35" />
        <div className="container-page relative z-10 max-w-3xl text-center">
          <span className="eyebrow">Simulador Bonxur</span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-forest-950 sm:text-5xl lg:text-6xl">
            Convierte metros cuadrados en una estimación de cultivo vertical.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-forest-900/60">
            Calcula cuántas Torres Bonxur 30 encajan, la superficie ocupada y el potencial
            aproximado de tu terraza, finca, invernadero o restaurante.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {["30 plantas por torre", "0,5 m² aprox.", "Cifras orientativas"].map((item) => (
              <span
                className="rounded-full border border-aqua-500/15 bg-white/74 px-3 py-2 text-xs font-bold text-forest-900/58 shadow-sm backdrop-blur"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="container-page -mt-3 pb-24 sm:-mt-5">
        <Simulator />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: "layers" as const,
              title: "Superficie teórica",
              text: "La huella orientativa es de 0,5 m² por Torre Bonxur 30. La distribución real debe estudiar accesos, separación y mantenimiento.",
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
            <article className="glass-panel rounded-[1.5rem] p-6" key={item.title}>
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
