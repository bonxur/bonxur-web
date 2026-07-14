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
    absolute: "Bonxur | Torre hidropónica vertical en Vigo y Galicia",
  },
  description:
    "Torre hidropónica vertical Bonxur 30 hecha en Galicia para cultivar hasta 30 plantas sin tierra en terrazas, patios, fincas y restaurantes de Vigo y alrededores.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bonxur | Torre hidropónica vertical en Vigo y Galicia",
    description:
      "Cultiva hasta 30 plantas en vertical desde tu terraza, patio, finca o restaurante con una torre hidropónica hecha en Galicia.",
    url: "/",
    images: [
      {
        url: "/images/torre-con-plantas.jpg",
        width: 1200,
        height: 1600,
        alt: "Torre hidropónica vertical Bonxur con lechugas en una terraza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bonxur | Torre hidropónica vertical en Vigo",
    description:
      "Torre hidropónica vertical hecha en Galicia para cultivar sin tierra en poco espacio.",
    images: ["/images/torre-con-plantas.jpg"],
  },
};

const benefits: { icon: IconName; title: string; text: string; stat: string }[] = [
  {
    icon: "layers",
    title: "Producción vertical",
    text: "Aprovecha terrazas, patios, fincas o locales con una torre de huella compacta.",
    stat: "0,5 m² aprox.",
  },
  {
    icon: "droplet",
    title: "Cultivo sin tierra",
    text: "Agua y nutrientes circulan desde el depósito inferior para alimentar las raíces.",
    stat: "Recirculación",
  },
  {
    icon: "leaf",
    title: "Fresco y cercano",
    text: "Ideal para hojas verdes, aromáticas y pequeñas producciones junto a quien las consume.",
    stat: "30 plantas",
  },
];

const trustItems = [
  "Hecha en Galicia",
  "Instalaciones cercanas en Vigo y alrededores",
  "Acompañamiento inicial",
  "Proyecto de estudiantes de Ingeniería de la Universidade de Vigo",
];

const audiences: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "home",
    title: "Terrazas y patios",
    text: "Una forma limpia de cultivar lechugas, aromáticas y hojas verdes en casa sin montar un huerto tradicional.",
  },
  {
    icon: "sun",
    title: "Fincas e invernaderos",
    text: "Pruebas modulares para validar cultivo vertical con control de agua, nutrientes y espacio ocupado.",
  },
  {
    icon: "restaurant",
    title: "Restaurantes",
    text: "Producto fresco a la vista, más cerca de cocina y con una historia sostenible para contar al cliente.",
  },
  {
    icon: "hotel",
    title: "Casas rurales",
    text: "Una experiencia visual y útil para alojamientos que quieren conectar gastronomía, territorio y sostenibilidad.",
  },
];

const steps = [
  ["01", "Instala", "Coloca la torre sobre una base estable con acceso a electricidad."],
  ["02", "Llena", "Añade agua y nutrientes al depósito inferior integrado."],
  ["03", "Cultiva", "La bomba recircula la solución nutritiva y alimenta las raíces sin tierra."],
  ["04", "Cosecha", "Recoge hojas y aromáticas frescas justo donde las necesitas."],
];

const zones = ["Vigo", "Redondela", "Nigrán", "Gondomar", "Pontevedra", "Baiona", "Cangas", "Moaña"];

export default function Home() {
  return (
    <>
      <section className="page-hero relative overflow-hidden">
        <div className="topo-lines absolute inset-0 opacity-45" />
        <div className="water-lines absolute inset-x-0 bottom-0 h-1/2 opacity-40" />
        <div className="circuit-lines absolute inset-y-0 right-0 w-1/2 opacity-25" />
        <div className="premium-orb right-[9%] top-[12%] h-24 w-24 opacity-70" />
        <div className="container-page relative grid min-h-[calc(100vh-72px)] items-center gap-10 py-10 sm:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:py-16">
          <div className="relative z-10 max-w-3xl">
            <span className="eyebrow">Agricultura vertical hecha en Galicia</span>
            <h1 className="mt-7 text-[clamp(2.5rem,6vw,5.25rem)] font-semibold leading-[0.96] tracking-[-0.07em] text-forest-950">
              Cultiva hasta 30 plantas en vertical desde tu terraza, patio o finca
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-forest-900/68 sm:text-xl">
              Bonxur es una torre hidropónica vertical de 1,5 m para cultivar sin tierra,
              con recirculación de agua y una instalación pensada para Vigo y alrededores.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/cuestionario" arrow>
                Pedir presupuesto
              </ButtonLink>
              <ButtonLink href="/cuestionario" variant="secondary">
                Solicitar torre de prueba
              </ButtonLink>
            </div>
            <div className="trust-strip mt-10 grid gap-3 rounded-[1.5rem] p-4 sm:grid-cols-2">
              {trustItems.map((item) => (
                <span className="flex items-center gap-2 text-sm font-bold text-forest-900/66" key={item}>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-leaf-100 text-leaf-600">
                    <Icon name="check" size={14} />
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[540px] lg:ml-auto">
            <div className="glass-panel absolute -left-3 top-1/4 z-20 hidden rounded-2xl p-4 sm:block">
              <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-leaf-600">Capacidad</p>
              <p className="mt-1 text-3xl font-bold text-forest-950">30</p>
              <p className="text-xs font-semibold text-forest-900/50">plantas por torre</p>
            </div>
            <div className="glass-panel absolute -right-4 bottom-20 z-20 hidden rounded-2xl p-4 sm:block">
              <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-leaf-600">Huella</p>
              <p className="mt-1 text-3xl font-bold text-forest-950">0,5 m²</p>
              <p className="text-xs font-semibold text-forest-900/50">aproximados</p>
            </div>
            <div className="glass-panel absolute -right-2 top-12 z-20 hidden rounded-full px-3 py-2 text-xs font-bold text-forest-900/66 sm:flex sm:items-center sm:gap-2">
              <Icon className="text-aqua-500" name="droplet" size={15} />
              Recirculación
            </div>
            <div className="glass-panel absolute -left-2 bottom-9 z-20 hidden rounded-full px-3 py-2 text-xs font-bold text-forest-900/66 sm:flex sm:items-center sm:gap-2">
              <Icon className="text-leaf-600" name="sprout" size={15} />
              Sin tierra
            </div>
            <div className="absolute -inset-4 rounded-[2.2rem] border border-white/70 bg-white/30" />
            <div className="image-frame relative aspect-[4/5] rounded-[2rem]">
              <Image
                alt="Torre hidropónica vertical Bonxur cultivando lechugas en una terraza de Galicia"
                className="object-cover"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                src="/images/torre-con-plantas.jpg"
              />
              <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-forest-950/78 via-forest-950/26 to-transparent px-6 pb-6 pt-28 text-white">
                <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-leaf-100">
                  Torre Hidropónica Bonxur 30
                </p>
                <p className="mt-1 text-lg font-semibold">Producto real para cultivar en vertical.</p>
              </div>
              <div className="absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full border border-white/40 bg-white/86 px-3 py-2 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-leaf-600 shadow-[0_0_8px_rgba(32,167,93,0.8)]" />
                <span className="text-xs font-bold text-forest-950/65">Lista para primeras pruebas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-20 sm:py-28">
        <div className="topo-lines absolute inset-0 opacity-25" />
        <div className="container-page relative">
          <SectionTitle
            align="center"
            eyebrow="Por qué Bonxur"
            title="Una torre hidropónica para producir más en menos espacio."
            text="Bonxur une agricultura vertical, diseño físico y tecnología sencilla para acercar el cultivo a hogares, restaurantes y proyectos locales."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {benefits.map((benefit) => (
              <Card className="group relative overflow-hidden p-7 transition hover:-translate-y-1 hover:border-leaf-600/25" key={benefit.title}>
                <div className="circuit-lines absolute -right-6 -top-6 h-32 w-32 rounded-full opacity-25 transition group-hover:opacity-45" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-leaf-600/15 bg-leaf-100 text-leaf-600 shadow-sm">
                    <Icon name={benefit.icon} />
                  </div>
                  <p className="tech-label mt-8 text-[0.63rem] font-bold text-leaf-600">
                    {benefit.stat}
                  </p>
                  <h2 className="mt-2 text-xl font-bold tracking-tight text-forest-950">
                    {benefit.title}
                  </h2>
                  <p className="mt-3 leading-7 text-forest-900/60">{benefit.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="agro-tech-surface border-y border-forest-900/8 py-20 sm:py-28">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <SectionTitle
                eyebrow="El producto"
                title="Torre Hidropónica Bonxur 30"
                text="Una torre vertical de 1,5 m para cultivar hasta 30 plantas en poco espacio. El depósito integrado almacena agua y nutrientes, y la bomba los recircula por el interior de la torre."
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/cuestionario" arrow>
                  Solicitar información
                </ButtonLink>
                <ButtonLink href="/torre" variant="secondary">
                  Ver cómo funciona
                </ButtonLink>
              </div>
              <p className="mt-4 text-sm font-semibold text-forest-900/52">
                Condiciones especiales para primeras instalaciones cercanas. Te ayudamos a revisar ubicación, luz, cultivos y número de torres.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Altura", "1,5 m"],
                ["Capacidad", "30 plantas"],
                ["Sistema", "Sin tierra"],
              ].map(([label, value]) => (
                <div className="glass-panel rounded-[1.2rem] p-6" key={label}>
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
              eyebrow="Instalaciones cercanas"
              title="Disponible para pruebas en Vigo y alrededores."
              text="Empezamos cerca para entregar, explicar el funcionamiento y recoger feedback real de los primeros usuarios."
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {zones.map((zone) => (
                <span
                  className="rounded-full border border-leaf-600/15 bg-white px-3 py-2 text-xs font-bold text-forest-900/58 shadow-sm"
                  key={zone}
                >
                  {zone}
                </span>
              ))}
            </div>
            <ButtonLink className="mt-7" href="/cuestionario" arrow>
              Solicitar torre de prueba
            </ButtonLink>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Entrega cercana", "Podemos acompañar las primeras instalaciones y resolver dudas sobre uso real."],
              ["Explicación inicial", "Revisamos contigo agua, nutrientes, bomba, ubicación y cuidados básicos."],
              ["Feedback real", "Queremos aprender de terrazas, patios, fincas, restaurantes y alojamientos."],
            ].map(([title, text]) => (
              <Card className="p-6" key={title}>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-leaf-100 text-leaf-600">
                  <Icon name="check" size={20} />
                </span>
                <h2 className="mt-5 text-lg font-bold text-forest-950">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-forest-900/55">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="agro-tech-surface py-20 sm:py-28">
        <div className="container-page">
          <SectionTitle
            align="center"
            eyebrow="Dónde encaja"
            title="Pensada para espacios reales, no para una maqueta."
            text="La misma torre puede servir para autoconsumo, experiencia gastronómica, aprendizaje o pruebas agrícolas modulares."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience) => (
              <Card className="p-7" key={audience.title}>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-leaf-600 shadow-sm">
                  <Icon name={audience.icon} />
                </span>
                <h2 className="mt-6 text-xl font-bold text-forest-950">{audience.title}</h2>
                <p className="mt-3 text-sm leading-6 text-forest-900/58">{audience.text}</p>
                <Link
                  className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-leaf-700 underline decoration-leaf-500/30 underline-offset-4"
                  href="/cuestionario"
                >
                  Solicitar información <Icon name="arrow" size={15} />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionTitle
              eyebrow="Funcionamiento sencillo"
              title="Agua, nutrientes y recirculación."
              text="La hidroponía elimina la tierra. Las raíces reciben agua y nutrientes dentro de un circuito cerrado que vuelve al depósito inferior."
            />
            <ButtonLink className="mt-8" href="/cuestionario" arrow>
              Pedir presupuesto
            </ButtonLink>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map(([number, title, text]) => (
              <div className="glass-panel relative rounded-[1.4rem] p-6 transition hover:-translate-y-1 sm:p-8" key={number}>
                <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-leaf-600">
                  {number}
                </span>
                <h2 className="mt-5 text-xl font-bold text-forest-950">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-forest-900/58">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="agro-tech-surface py-20 sm:py-28">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="tech-card relative overflow-hidden rounded-[1.6rem] border border-aqua-500/20 bg-gradient-to-br from-aqua-50 via-white to-leaf-100/70 p-8 sm:p-12">
              <div className="circuit-lines absolute inset-0 opacity-30" />
              <p className="tech-label relative text-[0.64rem] font-bold text-forest-900/45">
                Estimación rápida
              </p>
              <div className="relative mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.1rem] border border-white/70 bg-white/84 p-6 shadow-sm backdrop-blur">
                  <p className="tech-label text-[0.58rem] font-bold text-leaf-600">Una torre</p>
                  <p className="mt-3 text-3xl font-semibold tracking-tight text-forest-950">
                    30 plantas
                  </p>
                  <p className="mt-2 text-sm text-forest-900/55">0,5 m² de huella aproximada</p>
                </div>
                <div className="rounded-[1.1rem] border border-leaf-600/20 bg-leaf-100/75 p-6 shadow-sm backdrop-blur">
                  <p className="tech-label text-[0.58rem] font-bold text-leaf-700">Diez torres</p>
                  <p className="mt-3 text-3xl font-semibold tracking-tight text-forest-950">300 plantas</p>
                  <p className="mt-2 text-sm text-forest-900/58">5 m² de huella aproximada</p>
                </div>
              </div>
              <div className="relative mt-4 rounded-[0.9rem] border border-forest-900/10 bg-white/72 p-5 backdrop-blur">
                <div className="flex items-center justify-between text-sm font-semibold">
                  <span>Simulación orientativa</span>
                  <span className="text-leaf-600">30 plantas / torre</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
                  <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-leaf-500 to-skysoft-500" />
                </div>
              </div>
            </div>
            <div>
              <SectionTitle
                eyebrow="Calcula tu caso"
                title="Tu espacio puede dar mucho más de sí."
                text="El simulador estima plantas, superficie ocupada y ocupación del espacio. Después, el cuestionario nos ayuda a revisar el caso real."
              />
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/cuestionario" arrow>
                  Pedir presupuesto
                </ButtonLink>
                <ButtonLink href="/simulador" variant="secondary">
                  Abrir simulador
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Cuéntanos tu espacio y te orientamos."
        text="Si estás en Vigo, Redondela, Nigrán, Gondomar, Pontevedra, Baiona, Cangas, Moaña o alrededores, podemos estudiar una primera instalación contigo."
        primaryHref="/cuestionario"
        primaryLabel="Pedir presupuesto"
      />
    </>
  );
}
