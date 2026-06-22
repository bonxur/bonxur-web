import type { Metadata } from "next";
import { ButtonLink } from "@/components/button";
import { CTASection } from "@/components/cta-section";
import { Icon, type IconName } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Soluciones con la Torre Hidropónica Bonxur 30",
  description:
    "Soluciones con la Torre Hidropónica Bonxur 30 para agricultura, restauración, hogares, educación y turismo.",
};

const solutions: {
  icon: IconName;
  title: string;
  text: string;
  benefit: string;
  model: string;
}[] = [
  {
    icon: "sprout",
    title: "Agricultores",
    text: "La modularidad de Bonxur 30 permite plantear pruebas piloto, nuevos cultivos e instalaciones productivas.",
    benefit: "Producción modular",
    model: "Torre Bonxur 30 en configuración modular",
  },
  {
    icon: "restaurant",
    title: "Restaurantes",
    text: "Bonxur 30 encaja en cocinas, terrazas y locales que quieren acercar el cultivo al plato.",
    benefit: "Del cultivo al plato",
    model: "Recomendado: Torre Bonxur 30",
  },
  {
    icon: "home",
    title: "Particulares",
    text: "Convierte una terraza, patio o porche en una huerta compacta y fácil de disfrutar.",
    benefit: "Autoconsumo cercano",
    model: "Recomendado: Bonxur 30",
  },
  {
    icon: "school",
    title: "Centros educativos",
    text: "Aprende biología, sostenibilidad y tecnología con una experiencia práctica y medible.",
    benefit: "Aula viva",
    model: "Recomendado: Bonxur 30",
  },
  {
    icon: "hotel",
    title: "Hoteles",
    text: "Combina varias torres según la superficie para incorporar producto propio en terrazas, jardines o cocinas.",
    benefit: "Experiencia sostenible",
    model: "Instalación modular Bonxur 30",
  },
  {
    icon: "building",
    title: "Casas rurales",
    text: "Conecta a los huéspedes con el territorio mediante una pequeña cosecha local.",
    benefit: "Turismo con raíces",
    model: "Recomendado: Bonxur 30",
  },
];

export default function SolucionesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Soluciones"
        title="Una torre. Muchas maneras de crear valor."
        text="Desde una terraza particular hasta un proyecto profesional: Bonxur 30 se adapta al objetivo mediante configuraciones modulares."
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
          title="El cultivo se acerca a quien lo necesita."
          text="El mismo sistema puede priorizar rentabilidad, frescura, aprendizaje, bienestar o experiencia."
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
              <p className="mt-3 flex-1 leading-7 text-forest-900/55">
                {solution.text}
              </p>
              <p className="mt-6 inline-flex self-start rounded-lg border border-leaf-500/20 bg-leaf-100 px-3 py-2 text-xs font-bold text-forest-900">
                {solution.model}
              </p>
              <ButtonLink className="mt-5 w-full" href="/cuestionario" variant="secondary" arrow>
                Solicitar torre de prueba
              </ButtonLink>
            </article>
          ))}
        </div>
      </section>

      <section className="agro-tech-surface py-20 sm:py-24">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <SectionTitle
            eyebrow="Proyecto a medida"
            title="¿Tu caso no encaja en una casilla?"
            text="Cuéntanos el espacio, la ubicación y el objetivo. Pensaremos contigo una primera configuración sensata."
          />
          <ButtonLink href="/cuestionario" arrow>
            Pedir presupuesto
          </ButtonLink>
        </div>
      </section>

      <CTASection />
    </>
  );
}
