"use client";

import { useMemo, useState } from "react";
import { cropCatalog, type CropDifficulty } from "@/data/crops";
import { ButtonLink } from "./button";
import { Icon, type IconName } from "./icons";

type CropProfile = {
  cycles: string;
  note: string;
  light: string;
  level: CropDifficulty;
  recommendation: string;
};

const cropData = Object.fromEntries(
  cropCatalog.map((crop) => [
    crop.name,
    {
      cycles: crop.cycles,
      note: crop.summary,
      light: crop.light,
      level: crop.difficulty,
      recommendation: crop.tips,
    },
  ]),
) as Record<string, CropProfile>;

const useAdvice: Record<string, string> = {
  Autoconsumo:
    "Combina ciclos distintos y evita plantar toda la torre el mismo día para repartir las cosechas.",
  Profesional:
    "Reserva espacio adicional para circulación, manipulación, depósitos auxiliares y mantenimiento.",
  Hostelería:
    "Prioriza variedades de uso frecuente y programa reposiciones semanales para dar continuidad a cocina.",
  Educativo:
    "Sitúa la instalación en una zona visible y accesible, con protocolos claros de revisión.",
};

const MIN_AREA = 1;
const MAX_AREA = 100000;
const MIN_TOWERS = 1;
const MAX_TOWERS = 10000;
const PLANTS_PER_TOWER = 30;
const FOOTPRINT_PER_TOWER = 0.5;

export function Simulator() {
  const [availableAreaInput, setAvailableAreaInput] = useState("100");
  const [towersInput, setTowersInput] = useState("10");
  const [crop, setCrop] = useState("Lechuga");
  const [use, setUse] = useState("Autoconsumo");
  const [location, setLocation] = useState("Exterior");

  const availableArea = getClampedValue(availableAreaInput, MIN_AREA, MAX_AREA);
  const towers = getClampedValue(towersInput, MIN_TOWERS, MAX_TOWERS);

  const results = useMemo(() => {
    const plants = towers * PLANTS_PER_TOWER;
    const area = towers * FOOTPRINT_PER_TOWER;
    const maxTowers = Math.min(
      MAX_TOWERS,
      Math.floor(availableArea / FOOTPRINT_PER_TOWER),
    );
    const fits = area <= availableArea;
    const occupancy = (area / availableArea) * 100;
    const remainingArea = Math.max(0, availableArea - area);
    const remainingTowers = Math.max(0, maxTowers - towers);

    return {
      plants,
      area,
      maxTowers,
      fits,
      occupancy,
      remainingArea,
      remainingTowers,
    };
  }, [availableArea, towers]);

  const recommendations = useMemo(() => {
    const items: { icon: IconName; title: string; text: string; tone?: "warning" }[] = [];

    items.push({
      icon: "layers",
      title: "Escala de la instalación",
      text: getScaleRecommendation(towers),
    });

    items.push({
      icon: "sprout",
      title: "Configuración Bonxur 30",
      text: "Un sistema modular de 30 plantas por torre para autoconsumo, restauración, educación y proyectos profesionales.",
    });

    if (!results.fits) {
      items.push({
        icon: "ruler",
        title: "La configuración supera el espacio",
        text: "Con esta configuración, las torres ocuparían más superficie de la disponible. Reduce el número de torres o aumenta el espacio.",
        tone: "warning",
      });
    } else if (results.occupancy > 80) {
      items.push({
        icon: "layers",
        title: "Instalación muy compacta",
        text: "La huella calculada cabe, pero conviene comprobar accesos y espacio de mantenimiento.",
        tone: "warning",
      });
    } else {
      items.push({
        icon: "check",
        title: "Buena relación entre capacidad y espacio",
        text: `Quedan ${formatNumber(results.remainingArea)} m² de superficie sin ocupar por la huella teórica de las torres.`,
      });
    }

    items.push({
      icon: "leaf",
      title: `Consejo para ${crop.toLowerCase()}`,
      text: cropData[crop].recommendation,
    });

    items.push({
      icon: location === "Interior" ? "sun" : "home",
      title: location === "Interior" ? "Revisa la iluminación" : "Protege la ubicación",
      text:
        location === "Interior"
          ? `En interior, comprueba que puedas aportar ${cropData[crop].light.toLowerCase()} de forma estable.`
          : "En exterior, busca buena luz, acceso a electricidad y protección frente a viento o lluvia intensa.",
    });

    items.push({
      icon: use === "Educativo" ? "school" : use === "Hostelería" ? "restaurant" : "users",
      title: `Pensado para ${use.toLowerCase()}`,
      text: useAdvice[use],
    });

    return items;
  }, [crop, location, results, towers, use]);

  const occupancyAngle = Math.min(results.occupancy, 100) * 3.6;
  const visibleTowers = Math.min(towers, 6);

  return (
    <div className="overflow-hidden rounded-[2rem] border border-forest-900/10 bg-white shadow-[0_30px_80px_rgba(12,54,37,0.1)]">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="p-6 sm:p-9 lg:p-10">
          <div className="mb-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-leaf-600">
              Configura tu espacio
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-forest-950">
              Dimensiona tu instalación
            </h2>
            <p className="mt-2 text-sm leading-6 text-forest-900/50">
              El simulador permite calcular desde pequeñas instalaciones domésticas hasta
              proyectos agrícolas o comerciales de gran escala. Las cifras son orientativas.
            </p>
          </div>

          <div className="space-y-7">
            <div className="rounded-xl border border-leaf-500/25 bg-leaf-100/65 p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-forest-950">Torre Hidropónica Bonxur 30</p>
                  <p className="mt-1 text-xs leading-5 text-forest-900/52">
                    30 plantas · 1,5 m · 0,5 m² de huella aproximada
                  </p>
                </div>
                <Icon className="shrink-0 text-leaf-600" name="layers" />
              </div>
            </div>

            <div>
              <label className="mb-3 block text-sm font-bold text-forest-950" htmlFor="area">
                Metros cuadrados disponibles
              </label>
              <div className="relative">
                <input
                  className="input-base pr-14 text-lg font-bold tabular-nums [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  id="area"
                  inputMode="numeric"
                  max={MAX_AREA}
                  min={MIN_AREA}
                  onBlur={() => setAvailableAreaInput(String(availableArea))}
                  onChange={(event) =>
                    setAvailableAreaInput(
                      normalizeInput(event.target.value, MIN_AREA, MAX_AREA),
                    )
                  }
                  step="1"
                  type="number"
                  value={availableAreaInput}
                />
                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-bold text-forest-900/40">
                  m²
                </span>
              </div>
              <p className="mt-2 text-xs leading-5 text-forest-900/45">
                Introduce entre {formatInteger(MIN_AREA)} y {formatInteger(MAX_AREA)} m².
              </p>
            </div>

            <div>
              <label className="mb-3 block text-sm font-bold text-forest-950" htmlFor="towers">
                Número de torres
              </label>
              <div className="relative">
                <input
                  className="input-base pr-20 text-lg font-bold tabular-nums [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  id="towers"
                  inputMode="numeric"
                  max={MAX_TOWERS}
                  min={MIN_TOWERS}
                  onBlur={() => setTowersInput(String(towers))}
                  onChange={(event) =>
                    setTowersInput(
                      normalizeInput(event.target.value, MIN_TOWERS, MAX_TOWERS),
                    )
                  }
                  step="1"
                  type="number"
                  value={towersInput}
                />
                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-bold text-forest-900/40">
                  torres
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between gap-3 text-xs text-forest-900/45">
                <span>
                  Entre {formatInteger(MIN_TOWERS)} y {formatInteger(MAX_TOWERS)} torres
                </span>
                {results.maxTowers !== towers && (
                  <button
                    className="font-bold text-leaf-600 underline decoration-leaf-500/30 underline-offset-2"
                    onClick={() => setTowersInput(String(results.maxTowers))}
                    type="button"
                  >
                    Usar capacidad ({formatInteger(results.maxTowers)})
                  </button>
                )}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-bold text-forest-950">
                Cultivo principal
                <select
                  className="input-base mt-2 font-normal"
                  onChange={(event) => setCrop(event.target.value)}
                  value={crop}
                >
                  {Object.keys(cropData).map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
              <label className="text-sm font-bold text-forest-950">
                Uso previsto
                <select
                  className="input-base mt-2 font-normal"
                  onChange={(event) => setUse(event.target.value)}
                  value={use}
                >
                  {["Autoconsumo", "Profesional", "Hostelería", "Educativo"].map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
            </div>

            <fieldset>
              <legend className="mb-3 text-sm font-bold text-forest-950">Ubicación</legend>
              <div className="grid grid-cols-2 gap-3">
                {["Interior", "Exterior"].map((item) => (
                  <label
                    className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-bold transition ${
                      location === item
                        ? "border-forest-900 bg-forest-900 text-white"
                        : "border-forest-900/15 text-forest-900 hover:bg-mist-50"
                    }`}
                    key={item}
                  >
                    <input
                      checked={location === item}
                      className="sr-only"
                      name="location"
                      onChange={() => setLocation(item)}
                      type="radio"
                    />
                    <Icon name={item === "Interior" ? "home" : "sun"} size={17} />
                    {item}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        </div>

        <div className="relative overflow-hidden bg-forest-950 p-6 text-white sm:p-9 lg:p-10">
          <div className="absolute -right-24 -top-20 h-80 w-80 rounded-full border-[48px] border-leaf-500/[0.04]" />
          <div className="relative flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-leaf-500">
                Resultado visual
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight">Tu instalación Bonxur</h2>
            </div>
            <span
              className={`self-start rounded-full border px-3 py-1.5 text-xs font-bold ${
                results.fits
                  ? "border-leaf-500/25 bg-leaf-500/10 text-leaf-100"
                  : "border-amber-300/25 bg-amber-300/10 text-amber-100"
              }`}
            >
              {results.fits ? "Configuración posible" : "Supera el espacio"}
            </span>
          </div>

          <div className="relative mt-6 flex flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.045] p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="tech-label text-[0.56rem] font-bold text-white/35">
                Sistema calculado
              </p>
              <p className="mt-1 text-lg font-bold text-white">Bonxur 30</p>
            </div>
            <div className="flex gap-5 sm:text-right">
              <div>
                <p className="text-xl font-semibold text-leaf-500">
                  {PLANTS_PER_TOWER}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-white/35">
                  plantas por torre
                </p>
              </div>
              <div>
                <p className="text-xl font-semibold text-white">
                  {formatNumber(FOOTPRINT_PER_TOWER)} m²
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-white/35">
                  huella por torre
                </p>
              </div>
            </div>
          </div>

          <div className="relative mt-7 grid gap-4 sm:grid-cols-[0.8fr_1.2fr]">
            <div className="flex min-h-52 flex-col items-center justify-center rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 text-center">
              <div
                aria-label={`${formatNumber(results.occupancy)}% de ocupación teórica`}
                className="relative flex h-32 w-32 items-center justify-center rounded-full"
                style={{
                  background: `conic-gradient(${
                    results.fits ? "#56c779" : "#f2c66d"
                  } 0deg ${occupancyAngle}deg, rgba(255,255,255,0.08) ${occupancyAngle}deg 360deg)`,
                }}
              >
                <div className="flex h-[102px] w-[102px] flex-col items-center justify-center rounded-full bg-forest-950">
                  <span
                    className={`font-semibold tracking-[-0.05em] ${
                      results.occupancy >= 10000
                        ? "text-xl"
                        : results.occupancy >= 1000
                          ? "text-2xl"
                          : "text-3xl"
                    }`}
                  >
                    {formatNumber(results.occupancy)}%
                  </span>
                  <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/35">
                    ocupación
                  </span>
                </div>
              </div>
              <p className="mt-4 text-xs leading-5 text-white/40">
                Huella de torres frente a superficie indicada
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <ResultMetric
                accent
                label="plantas totales"
                value={formatInteger(results.plants)}
                icon="sprout"
              />
              <ResultMetric label="torres" value={formatInteger(towers)} icon="layers" />
              <ResultMetric label="m² ocupados" value={formatNumber(results.area)} icon="ruler" />
              <ResultMetric
                label={results.fits ? "m² libres" : "m² que faltan"}
                value={formatNumber(
                  results.fits ? results.remainingArea : results.area - availableArea,
                )}
                icon={results.fits ? "check" : "ruler"}
                warning={!results.fits}
              />
            </div>
          </div>

          <div className="relative mt-4 rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.13em] text-white/35">
                  Vista de capacidad
                </p>
                <p className="mt-1 text-sm font-semibold">
                  {formatInteger(towers)} {towers === 1 ? "torre" : "torres"} Bonxur 30 ·{" "}
                  {formatInteger(results.plants)} plantas
                </p>
              </div>
              {towers > 6 && (
                <span className="rounded-full bg-white/8 px-3 py-1 text-xs font-bold text-white/55">
                  +{formatInteger(towers - 6)}
                </span>
              )}
            </div>
            <div className="mt-5 flex min-h-32 items-end justify-center gap-2 overflow-hidden sm:gap-3">
              {Array.from({ length: visibleTowers }).map((_, index) => (
                <MiniTower key={index} />
              ))}
            </div>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/8">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  results.fits ? "bg-leaf-500" : "bg-amber-300"
                }`}
                style={{ width: `${Math.min(results.occupancy, 100)}%` }}
              />
            </div>
            <div className="mt-2 flex justify-between text-[10px] font-semibold text-white/30">
              <span>{formatNumber(results.area)} m² usados</span>
              <span>{formatNumber(availableArea)} m² disponibles</span>
            </div>
          </div>

          <div
            className={`relative mt-4 flex gap-3 rounded-2xl border p-4 text-sm ${
              results.fits
                ? "border-leaf-500/25 bg-leaf-500/10 text-leaf-100"
                : "border-amber-300/25 bg-amber-300/10 text-amber-100"
            }`}
          >
            <Icon className="mt-0.5 shrink-0" name={results.fits ? "check" : "ruler"} size={19} />
            <p className="leading-6">
              {results.fits
                ? `La huella teórica cabe en tus ${formatNumber(availableArea)} m². ${
                    results.remainingTowers > 0
                      ? `Aún podrías añadir ${formatInteger(results.remainingTowers)} ${
                          results.remainingTowers === 1 ? "torre" : "torres"
                        }, sin contar zonas de paso.`
                      : "Has alcanzado la capacidad teórica del espacio."
                  }`
                : "Con esta configuración, las torres ocuparían más superficie de la disponible. Reduce el número de torres o aumenta el espacio."}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-forest-900/10 bg-mist-50 p-6 sm:p-9 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-leaf-600">
              Recomendaciones
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-forest-950">
              Antes de decidir la instalación
            </h2>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <SummaryItem label="Cultivo" value={crop} />
              <SummaryItem label="Dificultad" value={cropData[crop].level} />
              <SummaryItem label="Luz" value={cropData[crop].light} />
              <SummaryItem label="Ritmo" value={cropData[crop].cycles} />
            </div>
            <p className="mt-4 text-xs leading-5 text-forest-900/45">{cropData[crop].note}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {recommendations.map((item) => (
              <article
                className={`rounded-[1.3rem] border bg-white p-5 ${
                  item.tone === "warning" ? "border-amber-400/35" : "border-forest-900/10"
                }`}
                key={item.title}
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                    item.tone === "warning"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-leaf-100 text-leaf-600"
                  }`}
                >
                  <Icon name={item.icon} size={19} />
                </span>
                <h3 className="mt-5 font-bold text-forest-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-forest-900/55">{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-7 grid gap-5 rounded-[1.5rem] border border-skysoft-500/25 bg-skysoft-100 p-5 sm:p-6 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-skysoft-500 shadow-sm">
            <Icon name="ruler" size={22} />
          </span>
          <div>
            <p className="font-bold text-forest-950">Las cifras son orientativas</p>
            <p className="mt-1 text-sm leading-6 text-forest-900/60">
              El cálculo usa {PLANTS_PER_TOWER} plantas y{" "}
              {formatNumber(FOOTPRINT_PER_TOWER)} m² por Torre Bonxur 30.
              No incluye pasillos, accesos,
              separación entre equipos, orientación solar, iluminación artificial, clima,
              variedad, ciclos reales ni necesidades de mantenimiento. La instalación final
              debe revisarse para cada espacio.
            </p>
          </div>
          <ButtonLink className="w-full lg:w-auto" href="/cuestionario" arrow>
            Pedir presupuesto
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

function ResultMetric({
  value,
  label,
  icon,
  accent = false,
  warning = false,
}: {
  value: string;
  label: string;
  icon: IconName;
  accent?: boolean;
  warning?: boolean;
}) {
  return (
    <div className="flex min-h-24 flex-col justify-between rounded-2xl bg-white/[0.065] p-4">
      <Icon
        className={warning ? "text-amber-300" : accent ? "text-leaf-500" : "text-white/35"}
        name={icon}
        size={17}
      />
      <div className="mt-3">
        <p
          className={`${value.length > 6 ? "text-2xl" : "text-3xl"} font-semibold tracking-[-0.05em] ${
            warning ? "text-amber-200" : accent ? "text-leaf-500" : "text-white"
          }`}
        >
          {value}
        </p>
        <p className="mt-1 text-xs text-white/40">{label}</p>
      </div>
    </div>
  );
}

function MiniTower() {
  return (
    <div className="relative h-28 w-9 shrink-0 rounded-t-xl border border-white/20 bg-white/85 sm:w-10">
      {[14, 37, 60, 83].map((top, index) => (
        <div key={top}>
          <span
            className="absolute -left-1.5 h-3.5 w-3.5 rounded-full bg-leaf-500"
            style={{ top }}
          />
          <span
            className="absolute -right-1.5 h-3.5 w-3.5 rounded-full bg-leaf-600"
            style={{ top: top + (index % 2 ? 4 : 0) }}
          />
        </div>
      ))}
      <div className="absolute -bottom-2 left-1/2 h-5 w-12 -translate-x-1/2 rounded-lg bg-forest-800 ring-1 ring-leaf-500/25 sm:w-14" />
    </div>
  );
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-forest-900/8 bg-white p-3">
      <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-forest-900/35">
        {label}
      </p>
      <p className="mt-1 text-sm font-bold text-forest-950">{value}</p>
    </div>
  );
}

function formatNumber(value: number) {
  return value.toLocaleString("es-ES", {
    minimumFractionDigits: Number.isInteger(value) ? 0 : 1,
    maximumFractionDigits: 1,
  });
}

function formatInteger(value: number) {
  return value.toLocaleString("es-ES", {
    maximumFractionDigits: 0,
  });
}

function getClampedValue(value: string, min: number, max: number) {
  if (value.trim() === "") {
    return min;
  }

  const parsedValue = Number(value);

  if (!Number.isFinite(parsedValue)) {
    return min;
  }

  return Math.min(max, Math.max(min, Math.trunc(parsedValue)));
}

function normalizeInput(value: string, min: number, max: number) {
  if (value === "") {
    return "";
  }

  const parsedValue = Number(value);

  if (!Number.isFinite(parsedValue)) {
    return "";
  }

  return String(Math.min(max, Math.max(min, Math.trunc(parsedValue))));
}

function getScaleRecommendation(towers: number) {
  if (towers <= 2) {
    return "Ideal para autoconsumo o prueba pequeña.";
  }

  if (towers <= 10) {
    return "Interesante para restaurante, terraza amplia o pequeño proyecto.";
  }

  if (towers <= 30) {
    return "Adecuado para prueba piloto agrícola.";
  }

  if (towers <= 200) {
    return "Instalación agrícola o comercial de tamaño medio.";
  }

  if (towers <= 1000) {
    return "Proyecto productivo grande que requiere estudio técnico.";
  }

  return "Instalación profesional a gran escala. Recomendamos estudio personalizado.";
}
