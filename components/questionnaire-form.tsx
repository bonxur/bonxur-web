"use client";

import { FormEvent, useState } from "react";
import { Button } from "./button";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdarnrpn";
const FORM_SUBJECT = "Nueva consulta Bonxur desde la web";
const FORM_ORIGIN = "Cuestionario web Bonxur / Instagram Ads";
const UNKNOWN_OPTION = "No lo sé todavía";

type Fields = {
  nombre: string;
  email: string;
  telefono: string;
  ciudad: string;
  zonaInstalacion: string;
  numeroTorres: string;
  tipoInstalacion: string;
  cultivosInteres: string[];
  mensaje: string;
};

const initialFields: Fields = {
  nombre: "",
  email: "",
  telefono: "",
  ciudad: "",
  zonaInstalacion: "",
  numeroTorres: "",
  tipoInstalacion: "",
  cultivosInteres: [],
  mensaje: "",
};

const towerOptions = ["1 torre", "2 torres", "3-5 torres", "Más de 5 torres", UNKNOWN_OPTION];
const installationTypes = [
  "Terraza",
  "Patio",
  "Jardín",
  "Invernadero",
  "Finca",
  "Restaurante/local",
  "Otro",
];
const cropOptions = [
  "Lechuga",
  "Espinaca",
  "Acelga",
  "Kale",
  "Canónigos",
  "Rúcula",
  "Albahaca",
  "Cilantro",
  "Perejil",
  "Menta",
  "Hierbabuena",
  "Cebollino",
  "Fresas",
  "Tomate cherry",
  UNKNOWN_OPTION,
];

export function QuestionnaireForm() {
  const [fields, setFields] = useState(initialFields);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function toggleCrop(option: string) {
    setFields((current) => {
      const exists = current.cultivosInteres.includes(option);
      const withoutOption = current.cultivosInteres.filter((item) => item !== option);

      if (exists) {
        return { ...current, cultivosInteres: withoutOption };
      }

      if (option === UNKNOWN_OPTION) {
        return { ...current, cultivosInteres: [UNKNOWN_OPTION] };
      }

      return {
        ...current,
        cultivosInteres: [
          ...current.cultivosInteres.filter((item) => item !== UNKNOWN_OPTION),
          option,
        ],
      };
    });
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof Fields, string>> = {};

    if (fields.nombre.trim().length < 2) nextErrors.nombre = "Escribe tu nombre.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
      nextErrors.email = "Introduce un email válido.";
    }
    if (fields.telefono.trim().length < 6) {
      nextErrors.telefono = "Introduce un teléfono válido.";
    }
    if (fields.ciudad.trim().length < 2) {
      nextErrors.ciudad = "Indica tu ciudad o zona.";
    }
    if (fields.zonaInstalacion.trim().length < 2) {
      nextErrors.zonaInstalacion = "Indica la zona aproximada de instalación.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _subject: FORM_SUBJECT,
          origen: FORM_ORIGIN,
          nombre: fields.nombre.trim(),
          email: fields.email.trim(),
          telefono: fields.telefono.trim(),
          ciudad: fields.ciudad.trim(),
          zona_instalacion: fields.zonaInstalacion.trim(),
          numero_torres: fields.numeroTorres,
          tipo_instalacion: fields.tipoInstalacion,
          cultivos_interes: fields.cultivosInteres.join(", "),
          mensaje: fields.mensaje.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("No se pudo completar el envío.");
      }

      setStatus("success");
      setFields(initialFields);
      setErrors({});
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className="glass-panel rounded-[2rem] p-5 sm:p-8 lg:p-9"
      noValidate
      onSubmit={submit}
    >
      <input name="_subject" type="hidden" value={FORM_SUBJECT} />
      <input name="origen" type="hidden" value={FORM_ORIGIN} />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre" htmlFor="nombre" error={errors.nombre}>
          <input
            className="input-base"
            id="nombre"
            name="nombre"
            onChange={(event) => setFields({ ...fields, nombre: event.target.value })}
            placeholder="Tu nombre"
            required
            type="text"
            value={fields.nombre}
          />
        </Field>

        <Field label="Email" htmlFor="email" error={errors.email}>
          <input
            className="input-base"
            id="email"
            name="email"
            onChange={(event) => setFields({ ...fields, email: event.target.value })}
            placeholder="tu@email.com"
            required
            type="email"
            value={fields.email}
          />
        </Field>

        <Field label="Teléfono" htmlFor="telefono" error={errors.telefono}>
          <input
            className="input-base"
            id="telefono"
            inputMode="tel"
            name="telefono"
            onChange={(event) => setFields({ ...fields, telefono: event.target.value })}
            placeholder="+34 600 000 000"
            required
            type="tel"
            value={fields.telefono}
          />
        </Field>

        <Field label="Ciudad o zona donde vive" htmlFor="ciudad" error={errors.ciudad}>
          <input
            className="input-base"
            id="ciudad"
            name="ciudad"
            onChange={(event) => setFields({ ...fields, ciudad: event.target.value })}
            placeholder="Vigo, Nigrán, Redondela..."
            required
            type="text"
            value={fields.ciudad}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field
          label="Dirección aproximada o zona de instalación"
          htmlFor="zona_instalacion"
          error={errors.zonaInstalacion}
        >
          <input
            className="input-base"
            id="zona_instalacion"
            name="zona_instalacion"
            onChange={(event) => setFields({ ...fields, zonaInstalacion: event.target.value })}
            placeholder="Barrio, parroquia, zona o tipo de espacio"
            required
            type="text"
            value={fields.zonaInstalacion}
          />
        </Field>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field label="Número de torres que le interesan" htmlFor="numero_torres">
          <select
            className="input-base"
            id="numero_torres"
            name="numero_torres"
            onChange={(event) => setFields({ ...fields, numeroTorres: event.target.value })}
            value={fields.numeroTorres}
          >
            <option value="">Selecciona una opción</option>
            {towerOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Tipo de instalación" htmlFor="tipo_instalacion">
          <select
            className="input-base"
            id="tipo_instalacion"
            name="tipo_instalacion"
            onChange={(event) => setFields({ ...fields, tipoInstalacion: event.target.value })}
            value={fields.tipoInstalacion}
          >
            <option value="">Selecciona una opción</option>
            {installationTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <fieldset className="mt-6">
        <legend className="mb-3 block text-sm font-bold text-forest-950">
          Cultivos de interés
        </legend>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {cropOptions.map((option) => {
            const checked = fields.cultivosInteres.includes(option);

            return (
              <label
                className={`flex cursor-pointer items-center gap-3 rounded-xl border px-3 py-2.5 text-sm font-medium transition ${
                  checked
                    ? "border-aqua-500 bg-aqua-50 text-forest-950 shadow-[0_8px_20px_rgba(40,184,184,0.1)]"
                    : "border-forest-900/10 bg-white/64 text-forest-900/62 hover:border-aqua-500/50 hover:bg-white"
                }`}
                key={option}
              >
                <input
                  checked={checked}
                  className="h-4 w-4 accent-leaf-600"
                  name="cultivos_interes"
                  onChange={() => toggleCrop(option)}
                  type="checkbox"
                  value={option}
                />
                {option}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-5">
        <Field label="Mensaje opcional" htmlFor="mensaje">
          <textarea
            className="input-base min-h-32 resize-y"
            id="mensaje"
            name="mensaje"
            onChange={(event) => setFields({ ...fields, mensaje: event.target.value })}
            placeholder="Cuéntanos cualquier detalle adicional sobre tu espacio o lo que quieres cultivar."
            value={fields.mensaje}
          />
        </Field>
      </div>

      {status !== "idle" && (
        <div
          className={`mt-5 rounded-xl border p-4 text-sm font-semibold ${
            status === "error"
              ? "border-red-200 bg-red-50 text-red-700"
              : "border-leaf-500/25 bg-leaf-100 text-forest-900"
          }`}
        >
          {status === "loading" && "Enviando consulta..."}
          {status === "success" &&
            "Gracias. Hemos recibido tu consulta y te contactaremos pronto."}
          {status === "error" &&
            "Ha ocurrido un error al enviar el formulario. Inténtalo de nuevo o contáctanos por email."}
        </div>
      )}

      <Button className="mt-7 w-full sm:w-auto" disabled={status === "loading"} type="submit" arrow>
        Enviar consulta
      </Button>
      <p className="mt-4 text-xs text-forest-900/40">
        Revisaremos tu caso y te responderemos para valorar la instalación más adecuada.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-forest-950" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs font-medium text-red-600">{error}</p>}
    </div>
  );
}
