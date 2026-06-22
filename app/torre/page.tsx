import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/button";
import { CTASection } from "@/components/cta-section";
import { Icon, type IconName } from "@/components/icons";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Torre hidropónica Bonxur 30 en Vigo",
  description:
    "Torre hidropónica vertical Bonxur 30 de 1,5 m para cultivar hasta 30 plantas en casa, terraza, finca o restaurante en Vigo y Galicia.",
};

const specifications = [
  ["Altura", "Aprox. 1,5 m"],
  ["Capacidad", "Hasta 30 plantas"],
  ["Superficie", "Aprox. 0,5 m²"],
  ["Sistema", "Hidroponía vertical"],
  ["Circulación", "Bomba de recirculación"],
  ["Depósito", "Inferior integrado"],
  ["Cultivo", "Sin tierra"],
  ["Ubicación", "Interior o exterior protegido"],
];

const included = [
  {
    icon: "layers" as IconName,
    title: "Torre vertical",
    text: "Columna de 1,5 m con alojamientos distribuidos para cultivar hasta 30 plantas.",
  },
  {
    icon: "droplet" as IconName,
    title: "Depósito inferior",
    text: "La base almacena agua y nutrientes para alimentar el circuito.",
  },
  {
    icon: "zap" as IconName,
    title: "Bomba de recirculación",
    text: "Impulsa el agua hacia la parte superior para que vuelva a descender por la torre.",
  },
  {
    icon: "sprout" as IconName,
    title: "Cultivo sin tierra",
    text: "Las raíces reciben agua y nutrientes directamente dentro del sistema.",
  },
];

const cycle = [
  ["01", "Llena", "Añade agua y nutrientes al depósito inferior.", "droplet"],
  ["02", "Planta", "Coloca los plantones en los alojamientos de la torre.", "sprout"],
  ["03", "Recircula", "La bomba sube el agua y la distribuye por el interior.", "zap"],
  ["04", "Cosecha", "El excedente vuelve al depósito y el ciclo continúa.", "leaf"],
] as const;

const faqs = [
  {
    question: "¿Qué es la Torre Hidropónica Bonxur 30?",
    answer:
      "Es una torre hidropónica vertical de aproximadamente 1,5 m diseñada para cultivar hasta 30 plantas en poco espacio, sin tierra y con recirculación de agua.",
  },
  {
    question: "¿Sirve para terraza, patio o finca?",
    answer:
      "Sí. Puede instalarse en terrazas, patios, jardines, fincas, invernaderos o locales, siempre que haya una base estable y acceso a electricidad.",
  },
  {
    question: "¿Necesito tierra?",
    answer:
      "No. El cultivo se realiza con agua, nutrientes y un sustrato adecuado para hidroponía.",
  },
  {
    question: "¿Qué cultivos puedo probar?",
    answer:
      "Lechuga, espinaca, acelga, kale, canónigos, rúcula, aromáticas, fresas y tomate cherry, entre otros cultivos compatibles.",
  },
  {
    question: "¿Por qué pedís ubicación en Vigo y alrededores?",
    answer:
      "Estamos empezando con instalaciones cercanas para poder entregar, explicar el funcionamiento y recoger feedback real de los primeros usuarios.",
  },
];

export default function TorrePage() {
  return (
    <>
      <section className="page-hero py-14 sm:py-20 lg:py-24">
        <div className="topo-lines absolute inset-0 opacity-40" />
        <div className="container-page relative z-10 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="glass-panel absolute -inset-4 rounded-[2rem]" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white bg-white shadow-[0_30px_80px_rgba(6,29,21,0.12)]">
              <Image
                alt=""
                aria-hidden
                className="scale-110 object-cover opacity-18 blur-xl"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                src="/images/bonxur-30.webp"
              />
              <Image
                alt="Torre Hidropónica Bonxur 30 de 1,5 metros"
                className="object-contain p-5"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                src="/images/bonxur-30.webp"
              />
              <span className="absolute left-5 top-5 rounded-full bg-leaf-500 px-3 py-2 text-[11px] font-extrabold uppercase tracking-[0.1em] text-forest-950">
                Pruebas en Vigo
              </span>
            </div>
          </div>

          <div>
            <span className="eyebrow">Torre hidropónica vertical</span>
            <h1 className="mt-7 text-4xl font-semibold leading-[1.01] tracking-[-0.06em] text-forest-950 sm:text-5xl lg:text-[4.2rem]">
              Torre hidropónica Bonxur 30
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-forest-900/60">
              Torre hidropónica vertical de 1,5 m para cultivar hasta 30 plantas en poco
              espacio, sin tierra y con sistema de recirculación.
            </p>
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.12em] text-leaf-700">
              Torre de prueba disponible. Precio especial para primeras instalaciones.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/cuestionario" arrow>
                Pedir presupuesto
              </ButtonLink>
              <ButtonLink href="/cuestionario" variant="secondary">
                Solicitar torre de prueba
              </ButtonLink>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                ["Altura", "1,5 m"],
                ["Capacidad", "30 plantas"],
                ["Huella", "0,5 m²"],
              ].map(([label, value]) => (
                <div className="glass-panel rounded-xl p-3" key={label}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-forest-900/35">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-bold text-forest-950">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div>
            <SectionTitle
              eyebrow="Ficha técnica"
              title="Una torre compacta para producir en vertical."
              text="Pensada para espacios donde importa cada metro: terrazas, patios, fincas, restaurantes, centros educativos e invernaderos."
            />
            <ButtonLink className="mt-7" href="/cuestionario" variant="secondary" arrow>
              Solicitar torre de prueba
            </ButtonLink>
          </div>
          <div className="glass-panel overflow-hidden rounded-[1.5rem]">
            {specifications.map(([label, value], index) => (
              <div
                className={`grid grid-cols-[0.8fr_1.2fr] gap-4 px-5 py-4 sm:px-6 ${
                  index < specifications.length - 1 ? "border-b border-forest-900/8" : ""
                }`}
                key={label}
              >
                <span className="text-sm font-semibold text-forest-900/45">{label}</span>
                <span className="text-sm font-bold text-forest-950">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="agro-tech-surface py-20 sm:py-28">
        <div className="container-page">
          <SectionTitle
            align="center"
            eyebrow="Qué incluye"
            title="El sistema esencial para cultivar sin tierra."
            text="La torre reúne estructura, almacenamiento y circulación en un equipo sencillo de entender."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {included.map((item) => (
              <article className="glass-panel rounded-[1.4rem] p-6" key={item.title}>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-leaf-100 text-leaf-600">
                  <Icon name={item.icon} size={20} />
                </span>
                <h3 className="mt-6 text-lg font-bold text-forest-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-forest-900/55">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-aqua-50 py-20 sm:py-28" id="como-funciona">
        <div className="container-page">
          <SectionTitle
            align="center"
            eyebrow="Cómo funciona"
            title="Agua y nutrientes en un circuito continuo."
            text="La bomba mueve la solución nutritiva por la torre, las raíces absorben lo necesario y el excedente regresa al depósito."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {cycle.map(([number, title, text, icon]) => (
              <article
                className="glass-panel rounded-[1.5rem] p-6 transition hover:-translate-y-1 hover:border-leaf-500/30"
                key={number}
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-leaf-100 text-leaf-600">
                    <Icon name={icon} size={20} />
                  </span>
                  <span className="text-xs font-extrabold tracking-[0.15em] text-forest-900/25">
                    {number}
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-bold text-forest-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-forest-900/58">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="agro-tech-surface py-20 sm:py-28">
        <div className="container-page max-w-4xl">
          <SectionTitle
            align="center"
            eyebrow="Preguntas frecuentes"
            title="Lo esencial antes de solicitar una prueba."
          />
          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details
                className="glass-panel group rounded-[1.2rem] px-5 py-4 open:shadow-md sm:px-6"
                key={faq.question}
              >
                <summary className="cursor-pointer list-none pr-8 font-bold text-forest-950 marker:hidden">
                  {faq.question}
                </summary>
                <p className="mt-4 border-t border-forest-900/8 pt-4 text-sm leading-7 text-forest-900/58">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Solicita tu torre Bonxur de prueba."
        text="Cuéntanos dónde quieres instalarla y qué cultivos te interesan. Empezamos con pruebas cerca de Vigo."
        primaryHref="/cuestionario"
        primaryLabel="Pedir presupuesto"
      />
    </>
  );
}
