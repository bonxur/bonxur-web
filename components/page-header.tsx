type Props = {
  eyebrow: string;
  title: string;
  text: string;
  aside?: React.ReactNode;
};

export function PageHeader({ eyebrow, title, text, aside }: Props) {
  return (
    <section className="page-hero py-16 sm:py-20 lg:py-28">
      <div className="topo-lines absolute inset-0 opacity-40" />
      <div className="water-lines absolute inset-x-0 bottom-0 h-1/2 opacity-30" />
      <div className="container-page relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_0.72fr]">
        <div className="max-w-3xl">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-7 text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-forest-950 sm:text-5xl lg:text-[4rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-forest-900/58">{text}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["30 plantas", "1,5 m", "Recirculación"].map((item, index) => (
              <span
                className="tech-label flex items-center gap-2 rounded-full border border-aqua-500/15 bg-white/70 px-3 py-2 text-[0.59rem] font-bold text-forest-900/52 shadow-sm backdrop-blur"
                key={item}
              >
                <span className={index === 1 ? "text-skysoft-500" : "text-leaf-600"}>0{index + 1}</span>
                {item}
              </span>
            ))}
          </div>
        </div>
        {aside && (
          <div className="relative">
            <div className="absolute -inset-5 rounded-[2rem] border border-forest-900/[0.045]" />
            {aside}
          </div>
        )}
      </div>
    </section>
  );
}
