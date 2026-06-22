import { ButtonLink } from "./button";
import { Icon } from "./icons";

type Props = {
  title?: string;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;
};

export function CTASection({
  title = "¿Quieres probar una torre Bonxur en Vigo o alrededores?",
  text = "Rellena el cuestionario y estudiaremos tu espacio, ubicación y número de torres que pueden encajar.",
  primaryLabel = "Pedir presupuesto",
  primaryHref = "/cuestionario",
}: Props) {
  return (
    <section className="container-page py-16 sm:py-24">
      <div className="agro-tech-surface relative overflow-hidden rounded-[2rem] border border-leaf-600/15 px-6 py-10 shadow-[0_28px_90px_rgba(6,29,21,0.1)] sm:px-10 sm:py-14 lg:px-14">
        <div className="circuit-lines absolute inset-0 opacity-35" />
        <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-aqua-100/80 blur-2xl" />
        <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-leaf-100/70 blur-3xl" />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-aqua-500/20 bg-white/82 text-leaf-600 shadow-sm backdrop-blur">
              <Icon name="sprout" />
            </div>
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.12em] text-leaf-600">
              Primeras pruebas locales
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-forest-950 sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-forest-900/62">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink href={primaryHref} arrow>
              {primaryLabel}
            </ButtonLink>
            <ButtonLink
              href="/cuestionario"
              variant="secondary"
            >
              Solicitar torre de prueba
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
