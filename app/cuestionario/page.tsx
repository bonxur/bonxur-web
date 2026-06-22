import type { Metadata } from "next";
import { QuestionnaireForm } from "@/components/questionnaire-form";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Solicita tu torre Bonxur de prueba",
  description:
    "Formulario para solicitar una torre hidropónica Bonxur de prueba en Vigo y alrededores.",
};

export default function CuestionarioPage() {
  return (
    <section className="page-hero py-16 sm:py-20 lg:py-24">
      <div className="container-page relative z-10 grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div>
          <span className="eyebrow">Pruebas en Vigo</span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-forest-950 sm:text-5xl">
            Solicita tu torre Bonxur de prueba
          </h1>
          <p className="mt-5 text-lg leading-8 text-forest-900/60">
            Estamos buscando personas de Vigo y alrededores interesadas en probar nuestras
            torres hidropónicas verticales.
          </p>
          <p className="mt-4 text-base leading-7 text-forest-900/55">
            Rellena este formulario y te contactaremos para estudiar tu caso, ubicación y
            número de torres que te interesan.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {[
              ["map", "Vigo y alrededores"],
              ["layers", "Hasta 30 plantas por torre"],
              ["droplet", "Sin tierra y con recirculación"],
              ["sprout", "Hecha en Galicia"],
            ].map(([icon, text]) => (
              <div
                className="flex items-center gap-4 rounded-2xl border border-forest-900/10 bg-white/82 p-4 shadow-[0_12px_34px_rgba(6,29,21,0.045)]"
                key={text}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-leaf-100 text-leaf-600">
                  <Icon name={icon as "map" | "layers" | "droplet" | "sprout"} />
                </span>
                <span className="font-bold text-forest-950">{text}</span>
              </div>
            ))}
          </div>
        </div>
        <QuestionnaireForm />
      </div>
    </section>
  );
}
