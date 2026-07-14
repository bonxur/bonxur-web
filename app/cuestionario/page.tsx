import type { Metadata } from "next";
import { QuestionnaireForm } from "@/components/questionnaire-form";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Pedir presupuesto de torre hidropónica Bonxur en Vigo",
  description:
    "Solicita información o torre Bonxur de prueba en Vigo y alrededores. Formulario rápido para estudiar tu terraza, patio, finca o local.",
  alternates: {
    canonical: "/cuestionario",
  },
  openGraph: {
    title: "Solicita tu torre hidropónica Bonxur de prueba",
    description:
      "Cuéntanos tu espacio y te contactaremos para estudiar una Torre Bonxur 30 en Vigo y alrededores.",
    url: "/cuestionario",
    images: [
      {
        url: "/images/torre-con-plantas.jpg",
        width: 1200,
        height: 1600,
        alt: "Torre hidropónica Bonxur en una terraza para solicitar información",
      },
    ],
  },
};

export default function CuestionarioPage() {
  return (
    <section className="page-hero py-16 sm:py-20 lg:py-24">
      <div className="topo-lines absolute inset-0 opacity-40" />
      <div className="water-lines absolute inset-x-0 bottom-0 h-1/2 opacity-35" />
      <div className="container-page relative z-10 grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div>
          <span className="eyebrow">Pedir presupuesto</span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-forest-950 sm:text-5xl">
            Solicita tu torre Bonxur de prueba
          </h1>
          <p className="mt-5 text-lg leading-8 text-forest-900/60">
            Estamos buscando personas, restaurantes y espacios de Vigo y alrededores
            interesados en probar nuestras torres hidropónicas verticales.
          </p>
          <p className="mt-4 text-base leading-7 text-forest-900/55">
            Rellena el formulario y te contactaremos para estudiar tu ubicación, el número
            de torres que te interesan y los cultivos que quieres probar.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {[
              ["map", "Disponible en Vigo y alrededores"],
              ["layers", "Hasta 30 plantas por torre"],
              ["droplet", "Sin tierra y con recirculación"],
              ["sprout", "Hecha en Galicia"],
            ].map(([icon, text]) => (
              <div
                className="glass-panel flex items-center gap-4 rounded-2xl p-4"
                key={text}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-leaf-100 text-leaf-600">
                  <Icon name={icon as "map" | "layers" | "droplet" | "sprout"} />
                </span>
                <span className="font-bold text-forest-950">{text}</span>
              </div>
            ))}
          </div>

          <div className="trust-strip mt-6 rounded-[1.5rem] p-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-leaf-600">
              Qué ocurre después
            </p>
            <p className="mt-2 text-sm leading-6 text-forest-900/58">
              Revisamos tu caso, te preguntamos lo necesario y valoramos si una primera
              instalación Bonxur 30 encaja en tu espacio.
            </p>
          </div>
        </div>
        <QuestionnaireForm />
      </div>
    </section>
  );
}
