import type { Metadata } from "next";
import { ButtonLink } from "@/components/button";
import { Card } from "@/components/card";
import { CTASection } from "@/components/cta-section";
import { Icon, type IconName } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Proyecto Bonxur | Hidroponía y agricultura vertical en Galicia",
  description:
    "Bonxur es un proyecto agrotech desarrollado en Galicia por estudiantes de Ingeniería de la Universidade de Vigo para impulsar torres hidropónicas verticales.",
  alternates: {
    canonical: "/proyecto",
  },
  openGraph: {
    title: "Proyecto Bonxur | Agricultura vertical hecha en Galicia",
    description:
      "Conoce la misión de Bonxur: hidroponía vertical, sostenibilidad, producto físico real y futuro con sensores, automatización y energía solar.",
    url: "/proyecto",
    images: [
      {
        url: "/images/torre-bonxur.png",
        width: 1200,
        height: 900,
        alt: "Proyecto Bonxur de torre hidropónica vertical desarrollada en Galicia",
      },
    ],
  },
};

const values: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "ruler",
    title: "Ingeniería útil",
    text: "Diseñamos para resolver problemas reales de espacio, cultivo y manejo, no para añadir complejidad innecesaria.",
  },
  {
    icon: "droplet",
    title: "Recursos con sentido",
    text: "El agua, la energía y cada componente deben aportar valor al cultivo y al usuario.",
  },
  {
    icon: "users",
    title: "Cercanía",
    text: "Empezamos con instalaciones locales para escuchar, aprender y mejorar con feedback real.",
  },
  {
    icon: "sprout",
    title: "Sostenibilidad práctica",
    text: "Queremos soluciones que puedan usarse en terrazas, aulas, restaurantes y proyectos productivos.",
  },
];

const roadmap: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "droplet",
    title: "Sensores de pH y EC",
    text: "Medición de acidez y concentración de nutrientes para ayudar a mantener condiciones estables.",
  },
  {
    icon: "ruler",
    title: "Nivel de agua",
    text: "Avisos para anticipar reposiciones y proteger el funcionamiento del sistema.",
  },
  {
    icon: "zap",
    title: "Control de bomba",
    text: "Programación y ajuste de ciclos de recirculación según cultivo y entorno.",
  },
  {
    icon: "users",
    title: "Monitorización remota",
    text: "Consulta de datos y alertas para gestionar una o varias torres a distancia.",
  },
  {
    icon: "sun",
    title: "Integración solar",
    text: "Estudio de alimentación renovable para ubicaciones exteriores adecuadas.",
  },
  {
    icon: "layers",
    title: "Sistema modular",
    text: "Torres que puedan crecer desde una prueba doméstica hasta proyectos más productivos.",
  },
];

export default function ProyectoPage() {
  return (
    <>
      <PageHeader
        eyebrow="El proyecto"
        title="Agrotech gallego para cultivar más cerca."
        text="Bonxur nace en Galicia con una idea clara: hacer que la hidroponía vertical sea más accesible, útil y comprensible para espacios reales."
        aside={
          <div className="relative mx-auto max-w-sm rounded-[2rem] border border-forest-900/10 bg-white p-8 text-forest-950 shadow-[0_24px_70px_rgba(6,29,21,0.08)]">
            <span className="text-6xl font-semibold tracking-[-0.08em] text-leaf-600">“</span>
            <p className="-mt-2 text-2xl font-semibold leading-9 tracking-tight">
              Cultivar sin tierra no tiene por qué sentirse lejano: puede empezar en una terraza, un aula o una cocina.
            </p>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-forest-900/45">
              La idea Bonxur
            </p>
          </div>
        }
      />

      <section className="container-page py-20 sm:py-28">
        <div className="grid gap-5 lg:grid-cols-3">
          <Card className="bg-leaf-100/45 p-8 sm:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-leaf-600">Origen</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-forest-950">
              Desarrollado en Galicia.
            </h2>
            <p className="mt-4 leading-7 text-forest-900/60">
              Bonxur es un proyecto impulsado por estudiantes de Ingeniería de la
              Universidade de Vigo, con foco en producto físico, aprendizaje real y mejora
              continua a partir de instalaciones cercanas.
            </p>
          </Card>
          <Card className="bg-skysoft-100/65 p-8 sm:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-skysoft-500">Misión</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-forest-950">
              Acercar el cultivo a las personas.
            </h2>
            <p className="mt-4 leading-7 text-forest-900/60">
              Crear torres hidropónicas claras, compactas y útiles para cultivar alimentos
              frescos en espacios que antes no parecían productivos: terrazas, patios,
              restaurantes, aulas, alojamientos y fincas.
            </p>
          </Card>
          <Card className="bg-white p-8 sm:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-leaf-600">Visión</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-forest-950">
              Agricultura vertical accesible.
            </h2>
            <p className="mt-4 leading-7 text-forest-900/60">
              España tiene sol, clima y tradición agrícola para ser referente en agricultura
              tecnológica. Bonxur quiere aportar desde Galicia con sistemas compactos,
              medibles y sostenibles.
            </p>
          </Card>
        </div>
      </section>

      <section className="agro-tech-surface py-20 sm:py-28">
        <div className="container-page">
          <SectionTitle
            align="center"
            eyebrow="Nuestros valores"
            title="Diseñar con los pies en la tierra, aunque cultivemos sin ella."
            text="La tecnología solo tiene sentido si hace más fácil producir, aprender o cuidar mejor un cultivo real."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card className="p-7" key={value.title}>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-leaf-100 text-leaf-600">
                  <Icon name={value.icon} size={21} />
                </div>
                <h2 className="mt-6 text-lg font-bold text-forest-950">{value.title}</h2>
                <p className="mt-2 text-sm leading-6 text-forest-900/55">{value.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div>
            <SectionTitle
              eyebrow="Producto físico real"
              title="Primero una torre que funcione. Después, más inteligencia."
              text="Bonxur 30 parte de una base tangible: torre vertical, depósito inferior, bomba de recirculación y cultivo sin tierra. La automatización futura debe sumar control sin alejar al usuario del cultivo."
            />
            <ButtonLink className="mt-7" href="/cuestionario" arrow>
              Solicitar torre de prueba
            </ButtonLink>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Hidroponía", "Agua y nutrientes alimentando las raíces sin necesidad de tierra."],
              ["Verticalidad", "Más plantas en menos superficie, útil para espacios urbanos y compactos."],
              ["Galicia", "Desarrollo cercano, pruebas locales y visión industrial desde el territorio."],
              ["Sostenibilidad", "Mejor aprovechamiento de espacio, agua y producción cercana."],
            ].map(([title, text]) => (
              <article className="glass-panel rounded-[1.4rem] p-6" key={title}>
                <h2 className="text-lg font-bold text-forest-950">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-forest-900/58">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="agro-tech-surface py-20 sm:py-28">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div>
              <SectionTitle
                eyebrow="Visión de futuro"
                title="Sensores, automatización y energía solar como siguiente capa."
                text="No queremos prometer magia: queremos desarrollar tecnología útil y progresiva para que el cultivo vertical sea más medible, autónomo y fácil de mantener."
              />
              <p className="mt-6 leading-8 text-forest-900/60">
                El objetivo futuro es unir agricultura, ingeniería, automatización y energía
                solar en sistemas inteligentes con sensores de pH, EC, nivel de agua, control
                de bomba, monitorización remota e integración solar cuando el espacio lo permita.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {roadmap.map((item) => (
                <article className="glass-panel rounded-[1.4rem] p-6" key={item.title}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-leaf-100 text-leaf-600">
                    <Icon name={item.icon} size={20} />
                  </span>
                  <h2 className="mt-5 text-lg font-bold text-forest-950">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-forest-900/58">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="¿Quieres formar parte de las primeras pruebas?"
        text="Buscamos personas y espacios de Vigo y alrededores que quieran probar la Torre Bonxur 30 y ayudarnos a mejorar con feedback real."
        primaryHref="/cuestionario"
        primaryLabel="Pedir presupuesto"
      />
    </>
  );
}
