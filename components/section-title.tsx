type Props = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionTitle({
  eyebrow,
  title,
  text,
  align = "left",
  light = false,
}: Props) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className={`mb-4 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
          <span className={`h-px w-7 ${light ? "bg-leaf-500/70" : "bg-leaf-600/70"}`} />
          <p
            className={`tech-label text-[0.68rem] font-extrabold ${
              light ? "text-leaf-500" : "text-leaf-600"
            }`}
          >
            {eyebrow}
          </p>
        </div>
      )}
      <h2
        className={`text-3xl font-semibold tracking-[-0.045em] sm:text-4xl lg:text-[2.8rem] lg:leading-[1.06] ${
          light ? "text-white" : "text-forest-950"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-5 text-base leading-7 ${
            light ? "text-white/58" : "text-forest-900/58"
          }`}
        >
          {text}
        </p>
      )}
    </div>
  );
}
