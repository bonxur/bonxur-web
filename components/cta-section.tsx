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
      <div className="dark-panel relative overflow-hidden rounded-[1.5rem] border border-white/8 px-6 py-10 shadow-[0_30px_80px_rgba(6,29,21,0.18)] sm:px-10 sm:py-14 lg:px-14">
        <div className="absolute right-0 top-0 h-full w-1/3 border-l border-white/5 bg-white/[0.018]" />
        <div className="absolute right-12 top-10 grid grid-cols-5 gap-2 opacity-30">
          {Array.from({ length: 20 }).map((_, index) => (
            <span className="h-1 w-1 rounded-full bg-leaf-500" key={index} />
          ))}
        </div>
        <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-[0.7rem] border border-leaf-500/30 bg-leaf-500/12 text-leaf-500">
              <Icon name="sprout" />
            </div>
            <p className="tech-label mb-3 text-[0.65rem] font-bold text-leaf-500">Bonxur / next step</p>
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-white/52">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink href={primaryHref} variant="light" arrow>
              {primaryLabel}
            </ButtonLink>
            <ButtonLink
              className="!border-white/20 !bg-transparent !text-white hover:!bg-white/10"
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
