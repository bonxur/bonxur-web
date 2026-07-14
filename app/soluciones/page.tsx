import type { Metadata } from "next";
import { ButtonLink } from "@/components/button";
import { CTASection } from "@/components/cta-section";
import { Icon, type IconName } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Soluciones con torre hidropónica para casa, terraza y restaurantes",
  description:
    "Soluciones Bonxur con torre hidropónica vertical para particulares, terrazas, restaurantes, hoteles, casas rurales, agricultores y centros educativos en Galicia.",
  alternates: {
    canonical: "/soluciones",
  },
  openGraph: {
    title: "Soluciones Bonxur con torre hidropónica vertical",
    description:
      "Cultivo hidropónico sin tierra para casas, terrazas, restaurantes, hoteles, casas rurales, agricultores y centros educativos.",
    url: "/soluciones",
    images: [
      {
        url: "/images/torre-con-plantas.jpg",
        width: 1200,
        height: 1600,
        alt: "Torre hidropónica Bonxur para terrazas, restaurantes y proyectos agrícolas",
      },
    ],
  },
};

const solutions: {
  icon: IconName;
  title: string;
  text: string;
  benefit: string;
  detail: string;
}[] = [
  {
    icon: "home",
    title: "Particulares",
    text: "Convierte una terraza, patio o porche en una zona de cultivo limpia y compacta.",
    benefit: "Autoconsumo fresco",
    detail: "Ideal para empezar con hojas verdes y aromáticas de uso diario.",
  },
  {
    icon: "sun",
    title: "Terrazas",
    text: "Aprovecha luz natural y espacio vertical sin montar bancales ni grandes jardineras.",
    benefit: "Huerto vertical urbano",
    detail: "Revisamos orientación, viento, acceso a agua y electricidad.",
  },
  {
    icon: "restaurant",
    title: "Restaurantes",
    text: "Acerca aromáticas y hojas frescas a cocina, terraza o sala con una historia visible.",
    benefit: "Del cultivo al plato",
    detail: "Útil para albahaca, rúcula, menta, canónigos y cultivos de alto valor culinario.",
  },
  {
    icon: "hotel",
    title: "Hoteles",
    text: "Añade una experiencia sostenible y diferencial en terrazas, jardines o zonas gastronómicas.",
    benefit: "Experiencia premium",
    detail: "La torre puede funcionar como producto, decoración viva y relato de sostenibilidad.",
  },
  {
    icon: "building",
    title: "Casas rurales",
    text: "Conecta a los huéspedes con el territorio y con una pequeña cosecha cercana.",
    benefit: "Turismo con raíces",
    detail: "Una instalación sencilla para explicar cultivo, agua y producto local.",
  },
  {
    icon: "sprout",
    title: "Agricultores",
    text: "Prueba cultivo vertical, nuevos formatos y producción modular antes de escalar.",
    benefit: "Prueba piloto agrícola",
    detail: "Adecuada para validar cultivos, manejo y rendimiento por superficie.",
  },
  {
    icon: "school",
    title: "Centros educativos",
    text: "Convierte biología, tecnología y sostenibilidad en una experiencia práctica.",
    benefit: "Aula viva",
    detail: "Permite observar raíces, agua, nutrientes, luz y crecimiento vegetal.",
  },
];

export default function SolucionesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Soluciones"
        title="Una torre hidropónica. Muchas formas de crear valor."
        text="Bonxur 30 se adapta a hogares, terrazas, restaurantes, hoteles, casas rurales, agricultores y centros educativos mediante instalaciones compactas y modulares."
        aside={
          <div className="grid grid-cols-2 gap-3">
            {solutions.slice(0, 4).map((solution) => (
              <div className="glass-panel rounded-2xl p-5" key={solution.title}>
                <Icon className="text-leaf-600" name={solution.icon} />
                <p className="mt-4 text-sm font-bold text-forest-950">{solution.title}</p>
              </div>
            ))}
          </div>
        }
      />

      <section className="container-page py-20 sm:py-28">
        <SectionTitle
          eyebrow="Para cada espacio"
          title="El cultivo vertical se acerca a quien lo necesita."
          text="El valor no siempre es el mismo: puede ser autoconsumo, frescura en cocina, aprendizaje, experiencia turística o validación agrícola."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <article
              className="glass-panel group flex h-full flex-col rounded-[1.5rem] p-7 text-forest-950 transition hover:-translate-y-1 hover:border-leaf-500/30 hover:shadow-lg"
              key={solution.title}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf-100 text-leaf-600">
                <Icon name={solution.icon} />
              </div>
              <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.14em] text-leaf-600">
                {solution.benefit}
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight">{solution.title}</h2>
              <p className="mt-3 leading-7 text-forest-900/58">{solution.text}</p>
              <p className="mt-4 flex-1 text-sm leading-6 text-forest-900/50">{solution.detail}</p>
              <ButtonLink className="mt-6 w-full" href="/cuestionario" variant="secondary" arrow>
                Solicitar información
              </ButtonLink>
            </article>
          ))}
        </div>
      </section>

      <section className="agro-tech-surface py-20 sm:py-24">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <SectionTitle
            eyebrow="Vigo y Galicia"
            title="Empezamos con instalaciones cercanas y casos reales."
            text="Trabajamos el primer encaje con personas y negocios de Vigo, Redondela, Nigrán, Gondomar, Pontevedra, Baiona, Cangas, Moaña y alrededores para aprender de espacios reales."
          />
          <ButtonLink href="/cuestionario" arrow>
            Pedir presupuesto
          </ButtonLink>
        </div>
      </section>

      <CTASection
        title="Cuéntanos qué espacio tienes."
        text="Te orientamos sobre número de torres, cultivos adecuados y condiciones básicas para instalar una Torre Bonxur 30."
        primaryHref="/cuestionario"
        primaryLabel="Solicitar torre de prueba"
      />
    </>
  );
}
