import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/button";
import { CTASection } from "@/components/cta-section";
import { Icon, type IconName } from "@/components/icons";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Torre hidropónica vertical Bonxur 30 en Vigo y Galicia",
  description:
    "Torre hidropónica vertical Bonxur 30 de 1,5 m para cultivar hasta 30 plantas sin tierra en casa, terraza, finca, invernadero o restaurante.",
  alternates: {
    canonical: "/torre",
  },
  openGraph: {
    title: "Torre hidropónica vertical Bonxur 30",
    description:
      "Conoce cómo funciona la Torre Bonxur 30: cultivo sin tierra, recirculación, depósito integrado y hasta 30 plantas en vertical.",
    url: "/torre",
    images: [
      {
        url: "/images/bonxur-30.webp",
        width: 1200,
        height: 1600,
        alt: "Torre hidropónica vertical Bonxur 30 de 1,5 metros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Torre hidropónica vertical Bonxur 30",
    description:
      "Torre hidropónica vertical hecha en Galicia para cultivar hasta 30 plantas sin tierra.",
    images: ["/images/bonxur-30.webp"],
  },
};

const specifications = [
  ["Altura", "Aprox. 1,5 m"],
  ["Capacidad", "Hasta 30 plantas"],
  ["Superficie", "Aprox. 0,5 m²"],
  ["Sistema", "Hidroponía vertical"],
  ["Circulación", "Bomba de recirculación"],
  ["Depósito", "Inferior integrado"],
  ["Cultivo", "Sin tierra"],
  ["Ubicación", "Interior luminoso o exterior protegido"],
];

const benefits: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "layers",
    title: "Aprovecha el espacio vertical",
    text: "Permite producir hojas verdes, aromáticas y cultivos compactos donde un huerto horizontal ocuparía mucho más.",
  },
  {
    icon: "droplet",
    title: "Agua en recirculación",
    text: "La solución nutritiva sube por la torre, alimenta las raíces y vuelve al depósito para repetir el ciclo.",
  },
  {
    icon: "sprout",
    title: "Cultivo limpio",
    text: "Sin tierra, con una estructura más ordenada para terrazas, patios, invernaderos, aulas y espacios de hostelería.",
  },
  {
    icon: "ruler",
    title: "Sistema modular",
    text: "Puedes empezar con una torre y valorar más unidades según espacio, uso, luz, cultivos y objetivos.",
  },
];

const included = [
  {
    icon: "layers" as IconName,
    title: "Torre vertical",
    text: "Columna de 1,5 m con alojamientos distribuidos para cultivar hasta 30 plantas.",
  },
  {
    icon: "droplet" as IconName,
    title: "Depósito integrado",
    text: "La base almacena agua y nutrientes para alimentar el circuito hidropónico.",
  },
  {
    icon: "zap" as IconName,
    title: "Bomba de recirculación",
    text: "Impulsa el agua hacia la parte superior para distribuirla por el interior.",
  },
  {
    icon: "leaf" as IconName,
    title: "Sistema sin tierra",
    text: "Las raíces reciben agua y nutrientes directamente dentro de la torre.",
  },
];

const cycle = [
  ["01", "Depósito inferior", "Añade agua y nutrientes al depósito integrado.", "droplet"],
  ["02", "Bomba activa", "La bomba eleva la solución nutritiva hacia la parte superior.", "zap"],
  ["03", "Raíces alimentadas", "El agua desciende por el interior y llega a las plantas.", "sprout"],
  ["04", "Recirculación", "El excedente vuelve al depósito y el ciclo continúa.", "layers"],
] as const;

const audiences: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "home",
    title: "Casa, terraza o patio",
    text: "Para autoconsumo, aprendizaje y cultivo limpio en espacios compactos.",
  },
  {
    icon: "restaurant",
    title: "Restaurantes",
    text: "Para acercar aromáticas, hojas verdes y producto fresco a cocina o sala.",
  },
  {
    icon: "school",
    title: "Centros educativos",
    text: "Para explicar agua, nutrientes, sostenibilidad, biología y tecnología de forma práctica.",
  },
  {
    icon: "sun",
    title: "Fincas e invernaderos",
    text: "Para pruebas piloto de cultivo vertical antes de escalar una instalación.",
  },
];

const care = [
  "Revisar nivel de agua del depósito.",
  "Añadir nutrientes según cultivo y etapa.",
  "Comprobar que la bomba recircula correctamente.",
  "Limpiar componentes entre ciclos de cultivo.",
  "Controlar luz, temperatura y ventilación del espacio.",
];

const faqs = [
  {
    question: "¿Qué es una torre hidropónica vertical?",
    answer:
      "Es un sistema de cultivo que coloca las plantas en vertical y alimenta sus raíces con agua y nutrientes, sin usar tierra. Así se aprovecha mejor el espacio disponible.",
  },
  {
    question: "¿Qué incluye la Torre Hidropónica Bonxur 30?",
    answer:
      "Incluye la torre vertical, depósito inferior integrado, bomba de recirculación y sistema preparado para cultivo hidropónico sin tierra.",
  },
  {
    question: "¿Cuántas plantas puedo cultivar?",
    answer:
      "La Torre Bonxur 30 está pensada para cultivar hasta 30 plantas, según tamaño del cultivo, luz disponible y manejo de la instalación.",
  },
  {
    question: "¿Sirve para terraza, patio o finca?",
    answer:
      "Sí. Puede instalarse en terrazas, patios, jardines, fincas, invernaderos o locales si hay base estable, acceso a electricidad y condiciones adecuadas de luz y protección.",
  },
  {
    question: "¿Qué mantenimiento necesita?",
    answer:
      "Conviene revisar nivel de agua, nutrientes, funcionamiento de la bomba, limpieza del sistema y estado de las plantas. Bonxur acompaña las primeras instalaciones cercanas para explicar el uso básico.",
  },
  {
    question: "¿Qué cultivos puedo probar?",
    answer:
      "Lechuga, espinaca, acelga, kale, canónigos, rúcula, albahaca, cilantro, perejil, menta, hierbabuena, cebollino, fresas y tomate cherry, entre otros cultivos compatibles.",
  },
  {
    question: "¿Necesito tierra?",
    answer:
      "No. El cultivo se realiza con agua, nutrientes y un sustrato adecuado para hidroponía.",
  },
];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Torre Hidropónica Bonxur 30",
  image: "https://bonxur.com/images/bonxur-30.webp",
  brand: {
    "@type": "Brand",
    name: "Bonxur",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Bonxur",
  },
  description:
    "Torre hidropónica vertical de 1,5 m para cultivar hasta 30 plantas sin tierra, con depósito integrado y bomba de recirculación.",
  category: "Torre hidropónica vertical",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function TorrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="page-hero py-14 sm:py-20 lg:py-24">
        <div className="topo-lines absolute inset-0 opacity-40" />
        <div className="water-lines absolute inset-x-0 bottom-0 h-1/2 opacity-35" />
        <div className="container-page relative z-10 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="glass-panel absolute -inset-4 rounded-[2rem]" />
            <div className="image-frame relative aspect-[4/5] rounded-[2rem]">
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
                alt="Torre hidropónica vertical Bonxur 30 de 1,5 metros con depósito inferior"
                className="object-contain p-5"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                src="/images/bonxur-30.webp"
              />
              <span className="absolute left-5 top-5 z-10 rounded-full bg-leaf-500 px-3 py-2 text-[11px] font-extrabold uppercase tracking-[0.1em] text-forest-950">
                Pruebas en Vigo
              </span>
              <span className="absolute bottom-5 right-5 z-10 rounded-full border border-white/60 bg-white/84 px-3 py-2 text-xs font-bold text-forest-950/66 backdrop-blur">
                Hecha en Galicia
              </span>
            </div>
          </div>

          <div>
            <span className="eyebrow">Torre hidropónica vertical</span>
            <h1 className="mt-7 text-4xl font-semibold leading-[1.01] tracking-[-0.06em] text-forest-950 sm:text-5xl lg:text-[4.2rem]">
              Torre Hidropónica Bonxur 30
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-forest-900/62">
              Un sistema de cultivo vertical de 1,5 m para cultivar hasta 30 plantas en
              poco espacio, sin tierra y con recirculación de agua desde el depósito inferior.
            </p>
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.12em] text-leaf-700">
              Torre de prueba disponible para primeras instalaciones cercanas.
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
              eyebrow="Qué es"
              title="Una torre para cultivar hacia arriba."
              text="Bonxur 30 concentra el cultivo en una estructura vertical. En lugar de tierra, las plantas reciben agua y nutrientes en un circuito recirculado, lo que permite producir en menos superficie y con un entorno más limpio."
            />
            <ButtonLink className="mt-7" href="/cuestionario" variant="secondary" arrow>
              Solicitar información
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
            eyebrow="Beneficios"
            title="Diseñada para espacios donde cada metro importa."
            text="La Torre Bonxur 30 busca hacer accesible la hidroponía vertical sin convertir el cultivo en algo complicado."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <article className="glass-panel rounded-[1.4rem] p-6" key={item.title}>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-leaf-100 text-leaf-600">
                  <Icon name={item.icon} size={20} />
                </span>
                <h2 className="mt-6 text-lg font-bold text-forest-950">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-forest-900/55">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 sm:py-28" id="como-funciona">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <SectionTitle
            eyebrow="Cómo funciona"
            title="Un circuito sencillo de agua y nutrientes."
            text="La torre no necesita tierra. La bomba mueve la solución nutritiva por la estructura, las raíces absorben lo necesario y el excedente vuelve al depósito para seguir circulando."
          />
          <div className="grid gap-4 md:grid-cols-2">
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
                <h2 className="mt-7 text-xl font-bold text-forest-950">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-forest-900/58">{text}</p>
              </article>
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
            text="Estructura, almacenamiento y recirculación reunidos en un equipo compacto y fácil de entender."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {included.map((item) => (
              <article className="glass-panel rounded-[1.4rem] p-6" key={item.title}>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-leaf-100 text-leaf-600">
                  <Icon name={item.icon} size={20} />
                </span>
                <h2 className="mt-6 text-lg font-bold text-forest-950">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-forest-900/55">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div>
            <SectionTitle
              eyebrow="Para quién es"
              title="Una torre para casa, hostelería, educación y pruebas agrícolas."
              text="Bonxur 30 está pensada para empezar de forma compacta y aprender con una instalación real antes de plantear escalas mayores."
            />
            <ButtonLink className="mt-7" href="/cuestionario" arrow>
              Pedir presupuesto
            </ButtonLink>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {audiences.map((audience) => (
              <article className="glass-panel rounded-[1.4rem] p-6" key={audience.title}>
                <Icon className="text-leaf-600" name={audience.icon} />
                <h2 className="mt-5 text-lg font-bold text-forest-950">{audience.title}</h2>
                <p className="mt-2 text-sm leading-6 text-forest-900/56">{audience.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="agro-tech-surface py-20 sm:py-28">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white bg-white shadow-[0_24px_80px_rgba(6,29,21,0.1)] sm:min-h-[520px]">
              <Image
                alt="Torre hidropónica Bonxur con plantas en una terraza"
                className="object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                src="/images/torre-con-plantas.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-leaf-100">Instalación real</p>
                <p className="mt-2 text-2xl font-semibold tracking-tight">Cultivo vertical visible, limpio y cercano.</p>
              </div>
            </div>
            <div>
              <SectionTitle
                eyebrow="Instalación y mantenimiento"
                title="Lo importante es elegir bien el espacio."
                text="Antes de instalar conviene revisar luz, acceso a electricidad, estabilidad de la base, protección frente a viento o lluvia intensa y facilidad para rellenar el depósito."
              />
              <div className="mt-8 space-y-3">
                {care.map((item) => (
                  <div className="glass-panel flex items-center gap-3 rounded-2xl p-4" key={item}>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-leaf-100 text-leaf-600">
                      <Icon name="check" size={16} />
                    </span>
                    <p className="text-sm font-semibold text-forest-900/66">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-forest-900/58">
                En las primeras instalaciones cercanas a Vigo podemos explicar el funcionamiento inicial y recoger feedback para mejorar el producto.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page max-w-4xl py-20 sm:py-28">
        <SectionTitle
          align="center"
          eyebrow="Preguntas frecuentes"
          title="Dudas habituales antes de solicitar una torre."
          text="Respuestas claras para entender si una torre hidropónica vertical encaja en tu casa, restaurante, finca o proyecto."
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
      </section>

      <CTASection
        title="Solicita tu torre Bonxur de prueba."
        text="Cuéntanos dónde quieres instalarla y qué cultivos te interesan. Empezamos con pruebas cerca de Vigo y alrededores."
        primaryHref="/cuestionario"
        primaryLabel="Pedir presupuesto"
      />
    </>
  );
}
