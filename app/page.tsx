import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button";
import { Card } from "@/components/card";
import { CTASection } from "@/components/cta-section";
import { Icon, type IconName } from "@/components/icons";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: {
    absolute: "Bonxur | Torre hidropónica vertical de 30 plantas",
  },
  description:
    "Solicita una torre hidropónica Bonxur 30 de prueba en Vigo y alrededores para cultivar hasta 30 plantas en vertical.",
};

const benefits: { icon: IconName; title: string; text: string; stat: string }[] = [
  {
    icon: "layers",
    title: "Más por metro cuadrado",
    text: "Cultiva hasta 30 plantas en una huella aproximada de solo 0,5 m².",
    stat: "30 plantas",
  },
  {
    icon: "droplet",
    title: "Agua que vuelve a empezar",
    text: "El circuito recircula agua y nutrientes desde el depósito inferior.",
    stat: "Circuito cerrado",
  },
  {
    icon: "leaf",
    title: "Cultivo limpio y cercano",
    text: "Sin tierra, con menos trabajo físico y cosechas a pocos pasos.",
    stat: "Sin suelo",
  },
];

const steps = [
  ["01", "Llena", "Añade agua y la solución nutritiva al depósito."],
  ["02", "Planta", "Coloca los plantones en los alojamientos de la torre."],
  ["03", "Programa", "La bomba eleva y distribuye el agua automáticamente."],
  ["04", "Cosecha", "Disfruta de producto fresco justo donde lo necesitas."],
];

export default function Home() {
  return (
    <>
      <section className="hero-dark dark-panel relative overflow-hidden border-b border-white/5">
        <div className="hero-grid absolute inset-0" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-leaf-500/10 to-transparent" />
        <div className="container-page relative grid min-h-[calc(100vh-76px)] items-center gap-12 py-14 lg:grid-cols-[1.04fr_0.86fr] lg:py-20">
          <div className="relative z-10 max-w-3xl">
            <span className="eyebrow">Tecnología que echa raíces en Galicia</span>
            <h1 className="mt-8 text-[clamp(2.8rem,6.5vw,5.45rem)] font-semibold leading-[0.96] tracking-[-0.07em] text-white">
              Cultiva hasta 30 plantas en vertical desde tu terraza, patio o finca
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/55 sm:text-xl">
              Bonxur busca personas de Vigo y alrededores para probar sus primeras
              torres hidropónicas verticales.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink className="!border-leaf-500 !bg-leaf-500 !text-forest-950 hover:!bg-leaf-100" href="/cuestionario" arrow>
                Pedir presupuesto
              </ButtonLink>
              <ButtonLink
                className="!border-white/15 !bg-white/[0.055] !text-white hover:!border-white/25 hover:!bg-white/10"
                href="/cuestionario"
                variant="secondary"
              >
                Solicitar torre de prueba
              </ButtonLink>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-white/42">
              {["Diseñada en Galicia", "Montaje sencillo", "Uso interior y exterior"].map(
                (item) => (
                  <span className="flex items-center gap-2" key={item}>
                    <span className="flex h-5 w-5 items-center justify-center rounded-[0.35rem] border border-leaf-500/20 bg-leaf-500/10 text-leaf-500">
                      <Icon name="check" size={13} />
                    </span>
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[525px] lg:ml-auto">
            <div className="absolute -left-7 top-1/4 z-20 hidden rounded-[0.85rem] border border-white/10 bg-forest-950/80 p-4 shadow-2xl backdrop-blur-xl sm:block">
              <p className="tech-label text-[0.55rem] font-bold text-leaf-500">CAPACITY</p>
              <p className="mt-1 text-2xl font-bold text-white">30</p>
              <p className="text-xs font-semibold text-white/40">plantas por torre</p>
            </div>
            <div className="absolute -right-5 bottom-20 z-20 hidden rounded-[0.85rem] border border-white/10 bg-forest-950/80 p-4 shadow-2xl backdrop-blur-xl sm:block">
              <p className="tech-label text-[0.55rem] font-bold text-skysoft-500">FOOTPRINT</p>
              <p className="mt-1 text-2xl font-bold text-white">0,5 m²</p>
              <p className="text-xs font-semibold text-white/40">de huella aproximada</p>
            </div>
            <div className="absolute -inset-4 rounded-[1.8rem] border border-white/[0.055]" />
            <div className="absolute -left-4 -top-4 h-14 w-14 border-l border-t border-leaf-500/60" />
            <div className="absolute -bottom-4 -right-4 h-14 w-14 border-b border-r border-skysoft-500/50" />
            <div className="soft-shadow relative aspect-[4/5] overflow-hidden rounded-[1.35rem] border border-white/10 bg-white">
              <Image
                alt="Torre hidropónica Bonxur cultivando lechugas en una terraza"
                className="object-cover"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                src="/images/bonxur-cultivo.webp"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/80 via-forest-950/35 to-transparent px-6 pb-6 pt-28 text-white">
                <p className="tech-label text-[0.6rem] font-bold text-leaf-500">
                  TORRE HIDROPÓNICA / BX-30
                </p>
                <p className="mt-1 text-lg font-semibold">Tu huerta crece hacia arriba.</p>
              </div>
              <div className="absolute right-4 top-4 flex items-center gap-2 rounded-[0.55rem] border border-white/20 bg-white/75 px-3 py-2 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-leaf-600 shadow-[0_0_8px_rgba(32,167,93,0.8)]" />
                <span className="tech-label text-[0.52rem] font-bold text-forest-950/60">System ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="container-page">
        <SectionTitle
          align="center"
          eyebrow="Una nueva forma de cultivar"
          title="Menos espacio. Más control. Producto más fresco."
          text="La producción vertical convierte terrazas, patios, invernaderos y espacios urbanos en lugares capaces de alimentar."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {benefits.map((benefit) => (
            <Card className="group relative overflow-hidden p-7 transition hover:-translate-y-1 hover:border-leaf-600/25" key={benefit.title}>
              <div className="tech-dots absolute -right-3 -top-3 h-24 w-24 opacity-35 transition group-hover:opacity-60" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-[0.75rem] border border-forest-950 bg-forest-950 text-leaf-500 shadow-[0_10px_24px_rgba(6,29,21,0.14)]">
                  <Icon name={benefit.icon} />
                </div>
                <p className="tech-label mt-8 text-[0.63rem] font-bold text-leaf-600">
                  {benefit.stat}
                </p>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-forest-950">
                  {benefit.title}
                </h3>
                <p className="mt-3 leading-7 text-forest-900/60">{benefit.text}</p>
              </div>
            </Card>
          ))}
        </div>
        </div>
      </section>

      <section className="border-y border-forest-900/8 bg-mist-50 py-20 sm:py-28">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <SectionTitle
                eyebrow="Oferta principal"
                title="Torre hidropónica Bonxur 30"
                text="Torre hidropónica vertical de 1,5 m para cultivar hasta 30 plantas en poco espacio, sin tierra y con sistema de recirculación."
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/cuestionario" arrow>
                  Pedir presupuesto
                </ButtonLink>
                <ButtonLink href="/cuestionario" variant="secondary">
                  Solicitar torre de prueba
                </ButtonLink>
              </div>
              <p className="mt-4 text-sm font-semibold text-forest-900/50">
                Desde 179,99 €. Damos prioridad al estudio de tu espacio y al acompañamiento inicial.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Altura", "1,5 m"],
                ["Capacidad", "30 plantas"],
                ["Huella", "0,5 m² aprox."],
              ].map(([label, value]) => (
                <div className="rounded-[1.2rem] border border-forest-900/10 bg-white p-6 shadow-sm" key={label}>
                  <p className="text-xs font-extrabold uppercase tracking-[0.13em] text-leaf-600">{label}</p>
                  <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-forest-950">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <SectionTitle
              eyebrow="Pruebas locales"
              title="Disponible para pruebas en Vigo y alrededores"
              text="Estamos empezando con instalaciones cercanas para poder entregar, explicar el funcionamiento y recoger feedback real de los primeros usuarios."
            />
            <ButtonLink className="mt-7" href="/cuestionario" arrow>
              Solicitar torre de prueba
            </ButtonLink>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Entrega cercana", "Nos permite acompañar las primeras instalaciones."],
              ["Explicación inicial", "Revisamos contigo agua, bomba, cultivo y cuidados."],
              ["Feedback real", "Queremos aprender de terrazas, patios, fincas y locales."],
            ].map(([title, text]) => (
              <Card className="p-6" key={title}>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-leaf-100 text-leaf-600">
                  <Icon name="check" size={20} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-forest-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-forest-900/55">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-panel py-20 text-white sm:py-28">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <SectionTitle
                eyebrow="Así de sencillo"
                light
                title="Agua, nutrientes y una pequeña bomba."
                text="La hidroponía elimina la tierra de la ecuación. Las raíces reciben directamente lo que necesitan en un circuito sencillo y eficiente."
              />
              <ButtonLink className="mt-8" href="/cuestionario" variant="light" arrow>
                Pedir presupuesto
              </ButtonLink>
            </div>
            <div className="grid gap-px overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/10 sm:grid-cols-2">
              {steps.map(([number, title, text]) => (
                <div className="relative bg-forest-950/88 p-6 transition hover:bg-white/[0.035] sm:p-8" key={number}>
                  <span className="tech-label text-[0.62rem] font-extrabold text-leaf-500">
                    {number}
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/55">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="tech-card relative overflow-hidden rounded-[1.3rem] border border-skysoft-500/20 bg-skysoft-100 p-8 sm:p-12">
            <div className="tech-grid absolute inset-0 opacity-35" />
            <p className="tech-label relative text-[0.64rem] font-bold text-forest-900/45">
              Capacidad Bonxur 30
            </p>
            <div className="relative mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[0.9rem] border border-white bg-white/90 p-6 shadow-sm">
                <p className="tech-label text-[0.58rem] font-bold text-leaf-600">Una torre</p>
                <p className="mt-3 text-3xl font-semibold tracking-tight text-forest-950">
                  30 plantas
                </p>
                <p className="mt-2 text-sm text-forest-900/55">0,5 m² de huella aproximada</p>
              </div>
              <div className="rounded-[0.9rem] border border-forest-900 bg-forest-900 p-6 text-white shadow-xl">
                <p className="tech-label text-[0.58rem] font-bold text-leaf-500">Diez torres</p>
                <p className="mt-3 text-3xl font-semibold tracking-tight text-white">300 plantas</p>
                <p className="mt-2 text-sm text-white/55">5 m² de huella aproximada</p>
              </div>
            </div>
            <div className="relative mt-4 rounded-[0.9rem] border border-forest-900/10 bg-white/70 p-5 backdrop-blur">
              <div className="flex items-center justify-between text-sm font-semibold">
                <span>Un sistema modular para cada escala</span>
                <span className="text-leaf-600">30 plantas / torre</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
                <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-leaf-500 to-skysoft-500" />
              </div>
            </div>
          </div>
          <div>
            <SectionTitle
              eyebrow="Haz números"
              title="Tu espacio puede dar mucho más de sí."
              text="Indica cuántos metros tienes, el tipo de cultivo y el uso previsto. Nuestro simulador convierte el espacio disponible en una primera estimación clara."
            />
            <Link
              className="mt-7 inline-flex items-center gap-2 font-bold text-forest-900 underline decoration-leaf-500 decoration-2 underline-offset-4"
              href="/simulador"
            >
              Calcular mi capacidad <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
