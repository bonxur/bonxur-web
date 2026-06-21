import type { Metadata } from "next";
import { ButtonLink } from "@/components/button";
import { Card } from "@/components/card";
import { CTASection } from "@/components/cta-section";
import { Icon, type IconName } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Proyecto",
  description:
    "Conoce la misión, visión y valores de Bonxur, un proyecto de tecnología hidropónica diseñado en Galicia.",
};

const values: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "ruler",
    title: "Simplicidad útil",
    text: "Diseñamos para que la tecnología ayude sin ponerse en medio.",
  },
  {
    icon: "droplet",
    title: "Recursos con sentido",
    text: "Cada componente debe contribuir a usar agua, energía y espacio con criterio.",
  },
  {
    icon: "users",
    title: "Cercanía",
    text: "Construimos escuchando a quien cultiva, cocina, enseña o emprende.",
  },
  {
    icon: "sprout",
    title: "Progreso cultivable",
    text: "Preferimos mejoras reales, medibles y accesibles a promesas grandilocuentes.",
  },
];

export default function ProyectoPage() {
  return (
    <>
      <PageHeader
        eyebrow="El proyecto"
        title="Tecnología gallega para cultivar un futuro más cercano."
        text="Bonxur nace de una pregunta sencilla: ¿cómo podemos producir alimentos frescos allí donde vivimos, trabajamos y aprendemos?"
        aside={
          <div className="relative mx-auto max-w-sm rounded-[2rem] bg-forest-950 p-8 text-white shadow-2xl">
            <span className="text-6xl font-semibold tracking-[-0.08em] text-leaf-500">“</span>
            <p className="-mt-2 text-2xl font-semibold leading-9 tracking-tight">
              Hacer que cultivar bien ocupe menos espacio en la tierra y más espacio en nuestras vidas.
            </p>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-white/40">La idea Bonxur</p>
          </div>
        }
      />

      <section className="container-page py-20 sm:py-28">
        <div className="grid gap-5 lg:grid-cols-2">
          <Card className="bg-leaf-100/45 p-8 sm:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-leaf-600">Misión</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-forest-950">
              Acercar el cultivo a las personas.
            </h2>
            <p className="mt-4 leading-7 text-forest-900/60">
              Crear sistemas hidropónicos claros, fiables y compactos que permitan producir
              alimentos frescos en espacios antes desaprovechados. Queremos que hogares,
              restaurantes, centros educativos y profesionales puedan acercarse a la
              agricultura tecnológica con soluciones comprensibles, modulares y eficientes.
            </p>
          </Card>
          <Card className="bg-skysoft-100/65 p-8 sm:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-skysoft-500">Visión</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-forest-950">
              Una red de pequeños espacios productivos.
            </h2>
            <p className="mt-4 leading-7 text-forest-900/60">
              Terrazas, restaurantes, escuelas y alojamientos capaces de cultivar parte de lo
              que consumen y comprender mejor el valor de cada cosecha. Imaginamos una red de
              instalaciones conectadas que aprovechen mejor el agua, la energía y cada metro
              cuadrado disponible.
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-mist-50 py-20 sm:py-28">
        <div className="container-page">
          <SectionTitle
            align="center"
            eyebrow="Nuestros valores"
            title="Diseñar con los pies en la tierra, aunque cultivemos sin ella."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card className="p-7" key={value.title}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-950 text-leaf-500">
                  <Icon name={value.icon} size={21} />
                </div>
                <h3 className="mt-6 text-lg font-bold text-forest-950">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-forest-900/55">{value.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-forest-950 py-20 text-white sm:py-28">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div>
              <SectionTitle
                eyebrow="Visión de futuro"
                light
                title="España puede liderar una nueva agricultura tecnológica."
                text="Nuestro sol, clima y tradición agrícola crean una base excepcional para unir conocimiento agrario, ingeniería y nuevas formas de producción."
              />
              <p className="mt-6 leading-8 text-white/55">
                Bonxur quiere aprovechar espacios reducidos con torres hidropónicas y
                convertirlos en puntos productivos más controlables. El objetivo es sumar
                automatización y energía solar sin perder la sencillez de uso.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: "droplet" as const,
                  title: "Sensores de pH y EC",
                  text: "Medición de acidez y concentración de nutrientes para mantener condiciones estables.",
                },
                {
                  icon: "ruler" as const,
                  title: "Nivel de agua",
                  text: "Avisos para anticipar reposiciones y proteger el funcionamiento del sistema.",
                },
                {
                  icon: "zap" as const,
                  title: "Control de bomba",
                  text: "Programación y ajuste de ciclos de recirculación según cultivo y entorno.",
                },
                {
                  icon: "users" as const,
                  title: "Monitorización remota",
                  text: "Consulta de datos y alertas para gestionar una o varias torres a distancia.",
                },
                {
                  icon: "sun" as const,
                  title: "Integración solar",
                  text: "Energía renovable para mejorar la autonomía en instalaciones adecuadas.",
                },
                {
                  icon: "layers" as const,
                  title: "Sistemas inteligentes",
                  text: "Agricultura, ingeniería y automatización trabajando como un único sistema modular.",
                },
              ].map((item) => (
                <article
                  className="rounded-[1.4rem] border border-white/10 bg-white/[0.045] p-6"
                  key={item.title}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-leaf-500 text-forest-950">
                    <Icon name={item.icon} size={20} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/52">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div>
            <SectionTitle
              eyebrow="Próximos pasos"
              title="Una torre que aprenderá contigo."
              text="La Torre Bonxur 30 parte de una base sencilla. El futuro añade automatización para ayudarte a tomar mejores decisiones sin perder el contacto con el cultivo."
            />
            <ButtonLink className="mt-7" href="/cuestionario" variant="secondary">
              Solicitar torre de prueba
            </ButtonLink>
          </div>
          <div className="space-y-4">
            <div className="rounded-[1.5rem] bg-forest-950 p-7 text-white sm:p-8">
              <div className="flex items-start gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-leaf-500 text-forest-950">
                  <Icon name="zap" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-leaf-500">Automatización futura</p>
                  <h3 className="mt-2 text-xl font-bold">Datos que simplifican el cuidado</h3>
                  <p className="mt-2 leading-7 text-white/55">
                    Sensores, alertas y control de ciclos para anticipar necesidades y mantener
                    condiciones estables.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-forest-900/10 bg-white p-7 sm:p-8">
              <div className="flex items-start gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-skysoft-100 text-forest-900">
                  <Icon name="sun" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-skysoft-500">Energía solar</p>
                  <h3 className="mt-2 text-xl font-bold text-forest-950">Autonomía para espacios exteriores</h3>
                  <p className="mt-2 leading-7 text-forest-900/55">
                    Estudiamos la integración de alimentación solar para reducir dependencia
                    eléctrica en ubicaciones adecuadas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="¿Quieres crecer con el proyecto?"
        text="Buscamos personas de Vigo y alrededores que quieran probar la Torre Bonxur 30 y ayudarnos a mejorar con feedback real."
        primaryHref="/cuestionario"
        primaryLabel="Pedir presupuesto"
      />
    </>
  );
}
