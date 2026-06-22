import type { Metadata } from "next";
import { CropCard } from "@/components/crop-card";
import { CTASection } from "@/components/cta-section";
import { Icon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { SectionTitle } from "@/components/section-title";
import { cropCatalog } from "@/data/crops";

export const metadata: Metadata = {
  title: "Cultivos para la Torre Hidropónica Bonxur 30",
  description:
    "Descubre 14 cultivos para la Torre Hidropónica Bonxur 30: hojas verdes, aromáticas, fresas y tomate cherry.",
};

export default function CultivosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Qué cultivar"
        title="Catorce cultivos para crecer en vertical."
        text="Hojas verdes, aromáticas y frutos pequeños para autoconsumo, restauración y proyectos productivos con la Torre Bonxur 30."
        aside={
          <div className="grid grid-cols-2 gap-3">
            {[
              ["leaf", "Hojas verdes"],
              ["sprout", "Aromáticas"],
              ["sun", "Frutos"],
              ["layers", "30 posiciones"],
            ].map(([icon, label]) => (
              <div
                className="rounded-2xl border border-forest-900/10 bg-white/80 p-5 shadow-sm backdrop-blur"
                key={label}
              >
                <Icon className="text-leaf-600" name={icon as "leaf" | "sprout" | "sun" | "layers"} />
                <p className="mt-4 text-sm font-bold text-forest-950">{label}</p>
              </div>
            ))}
          </div>
        }
      />

      <section className="container-page py-20 sm:py-28">
        <SectionTitle
          eyebrow="Catálogo de cultivos"
          title="Empieza por lo que te apetece cosechar."
          text="Abre cada tarjeta para consultar ciclo, dificultad y recomendaciones. Los tiempos son orientativos y dependen de la variedad, la luz, la temperatura y la nutrición."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cropCatalog.map((crop) => (
            <CropCard crop={crop} key={crop.slug} />
          ))}
        </div>
      </section>

      <section className="agro-tech-surface py-20 sm:py-28">
        <div className="container-page">
          <SectionTitle
            eyebrow="Planifica tu torre"
            title="Combina ciclos, tamaños y usos."
            text="Las hojas rápidas aportan continuidad, las aromáticas permiten cortes frecuentes y los frutos necesitan más luz, espacio y seguimiento."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Para empezar",
                text: "Lechuga, rúcula, acelga, albahaca, menta, hierbabuena y cebollino.",
                icon: "check" as const,
              },
              {
                title: "Para restauración",
                text: "Canónigos, rúcula, aromáticas, fresas y tomate cherry.",
                icon: "restaurant" as const,
              },
              {
                title: "Para producir",
                text: "Escalona plantaciones y reserva más espacio para kale, fresas y tomate cherry.",
                icon: "layers" as const,
              },
            ].map((item) => (
              <article
                className="glass-panel rounded-[1.4rem] p-6"
                key={item.title}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-leaf-100 text-leaf-600">
                  <Icon name={item.icon} size={20} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-forest-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-forest-900/55">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Combina cultivos en una torre de hasta 30 plantas."
        text="Usa el simulador para estimar tu instalación o consulta con Bonxur la distribución más adecuada."
        primaryHref="/simulador"
        primaryLabel="Abrir simulador"
      />
    </>
  );
}
