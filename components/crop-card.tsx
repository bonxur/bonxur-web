"use client";

import Image from "next/image";
import { useState } from "react";
import type { Crop } from "@/data/crops";
import { Icon } from "./icons";

const fallbackImage = "/images/bonxur-cultivo.webp";

export function CropCard({ crop }: { crop: Crop }) {
  const [imageSrc, setImageSrc] = useState(crop.image);

  return (
    <article className="glass-panel group overflow-hidden rounded-[1.5rem] transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-leaf-100 to-aqua-100">
        <Image
          alt={`${crop.name} para cultivo hidropónico`}
          className="object-cover transition duration-500 group-hover:scale-105"
          fill
          onError={() => setImageSrc(fallbackImage)}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          src={imageSrc}
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/45 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-white/85 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-forest-950 backdrop-blur">
          {crop.type}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-forest-950">{crop.name}</h2>
            <p className="mt-2 text-sm leading-6 text-forest-900/55">{crop.summary}</p>
          </div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-aqua-50 text-leaf-600">
            <Icon name="sprout" size={19} />
          </span>
        </div>

        <details className="mt-5 border-t border-forest-900/8 pt-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-bold text-leaf-700 marker:hidden">
            Ver más información
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-aqua-50">
              <Icon name="arrow" size={15} />
            </span>
          </summary>
          <div className="mt-5 space-y-4">
            <p className="text-sm leading-6 text-forest-900/58">{crop.description}</p>
            <div className="grid grid-cols-2 gap-3">
              <Info label="Dificultad" value={crop.difficulty} />
              <Info label="Crecimiento" value={crop.growthTime} />
            </div>
            <Detail icon="leaf" label="Consejos básicos" text={crop.tips} />
            <Detail
              icon="layers"
              label="En la Torre Bonxur 30"
              text={crop.towerRecommendation}
            />
            <Detail icon="users" label="Uso recomendado" text={crop.use} />
          </div>
        </details>
      </div>
    </article>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-aqua-500/12 bg-aqua-50 p-3">
      <p className="text-[10px] font-extrabold uppercase tracking-[0.1em] text-forest-900/35">
        {label}
      </p>
      <p className="mt-1 text-sm font-bold text-forest-950">{value}</p>
    </div>
  );
}

function Detail({
  icon,
  label,
  text,
}: {
  icon: "leaf" | "layers" | "users";
  label: string;
  text: string;
}) {
  return (
    <div className="flex gap-3 text-sm leading-6 text-forest-900/58">
      <Icon className="mt-1 shrink-0 text-leaf-600" name={icon} size={16} />
      <p>
        <strong className="block text-forest-950">{label}</strong>
        {text}
      </p>
    </div>
  );
}
