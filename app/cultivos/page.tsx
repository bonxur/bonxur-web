import type { Metadata } from "next";
import { CropCard } from "@/components/crop-card";
import { CTASection } from "@/components/cta-section";
import { Icon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { SectionTitle } from "@/components/section-title";
import { cropCatalog } from "@/data/crops";

export const metadata: Metadata = {
  title: "Cultivos para torre hidropónica vertical Bonxur 30",
  description:
    "Descubre cultivos para torre hidropónica vertical: lechuga, espinaca, acelga, kale, canónigos, rúcula, aromáticas, fresas y tomate cherry.",
  alternates: {
    canonical: "/cultivos",
  },
  openGraph: {
    title: "Cultivos para torre hidropónica vertical Bonxur",
    description:
      "Guía de hojas verdes, aromáticas y frutos pequeños para cultivar sin tierra en la Torre Bonxur 30.",
    url: "/cultivos",
    images: [
      {
        url: "/images/bonxur-cultivo.webp",
        width: 1200,
        height: 900,
        alt: "Cultivos compatibles con una torre hidropónica vertical",
      },
    ],
  },
};

export default function CultivosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Qué cultivar"
        title="Cultivos para una torre hidropónica vertical."
        text="Hojas verdes, aromáticas y frutos pequeños para autoconsumo, restauración y pruebas productivas con la Torre Bonxur 30."
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
          title="Empieza por cultivos que respondan bien en hidroponía."
          text="Abre cada tarjeta para consultar dificultad, tiempo aproximado, consejos y uso recomendado. Los tiempos dependen de variedad, luz, temperatura, nutrición y manejo."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cropCatalog.map((crop) => (
            <CropCard crop={crop} key={crop.slug} />
          ))}
        </div>
      </section>

      <section className="agro-tech-surface py-20 sm:py-28">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div>
              <SectionTitle
                eyebrow="Planifica tu torre"
                title="Combina ciclos, tamaños y usos."
                text="Las hojas rápidas aportan continuidad, las aromáticas permiten cortes frecuentes y los frutos necesitan más luz, espacio y seguimiento."
              />
              <p className="mt-6 leading-7 text-forest-900/58">
                Para una terraza en Vigo o una cocina de restaurante, la clave no es llenar todos
                los huecos sin criterio: conviene combinar cultivos de ritmo parecido y dejar
                espacio a las variedades más voluminosas.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
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
        </div>
      </section>

      <section className="container-page py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <SectionTitle
            eyebrow="Uso práctico"
            title="Qué cultivar según tu objetivo."
            text="Para autoconsumo suelen funcionar muy bien hojas y aromáticas de corte frecuente. Para restaurantes, interesa priorizar cultivos con valor culinario y reposición sencilla. Para pruebas comerciales, la planificación por ciclos es tan importante como la torre."
          />
          <div className="glass-panel rounded-[1.6rem] p-6 sm:p-8">
            <div className="grid gap-3">
              {[
                ["Principiante", "Lechuga, rúcula, menta, hierbabuena, cebollino"],
                ["Restaurante", "Albahaca, cilantro, canónigos, rúcula, fresas"],
                ["Terraza", "Lechuga, acelga, perejil, menta, tomate cherry con buena luz"],
                ["Comercial", "Hojas verdes escalonadas y aromáticas de alta rotación"],
              ].map(([label, value]) => (
                <div
                  className="rounded-2xl border border-aqua-500/12 bg-white/72 p-4"
                  key={label}
                >
                  <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-leaf-600">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-6 text-forest-900/64">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Combina cultivos en una torre de hasta 30 plantas."
        text="Cuéntanos qué quieres cultivar y dónde instalarías la torre. Te ayudaremos a plantear una combinación sensata para tu espacio."
        primaryHref="/cuestionario"
        primaryLabel="Solicitar información"
      />
    </>
  );
}
