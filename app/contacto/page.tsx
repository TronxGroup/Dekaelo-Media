"use client";

import { useState } from "react";
import { ArrowUpRight, ArrowRight, CheckCircle2 } from "lucide-react";

const EMAIL = "info@dekaelomedia.com";
const FORMSPREE = "https://formspree.io/f/xnjovqaz";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition focus:border-white/30 focus:bg-white/8";

function Label(props: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={props.htmlFor}
      className="mb-1.5 block text-sm font-medium text-white/60"
    >
      {props.children}
    </label>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;

    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <CheckCircle2 className="h-10 w-10 text-emerald-400" />

        <h3 className="text-xl font-semibold text-white">
          Solicitud recibida
        </h3>

        <p className="max-w-xs text-sm leading-relaxed text-white/50">
          Recibirás una respuesta dentro de las próximas 24 horas hábiles con
          una propuesta inicial.
        </p>

        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm text-white/35 transition hover:text-white"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="nombre">Nombre</Label>

          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            placeholder="Tu nombre"
            className={inputClass}
          />
        </div>

        <div>
          <Label htmlFor="empresa">Empresa u organización</Label>

          <input
            id="empresa"
            name="empresa"
            type="text"
            required
            placeholder="Nombre de la empresa"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email">Correo electrónico</Label>

        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="tu@empresa.cl"
          className={inputClass}
        />
      </div>

      <div>
        <Label htmlFor="servicio">Qué necesitas</Label>

        <select
          id="servicio"
          name="servicio"
          required
          defaultValue=""
          className={inputClass + " cursor-pointer"}
        >
          <option value="" disabled className="bg-black">
            Selecciona una opción
          </option>

          <option value="produccion" className="bg-black">
            Producción completa — vodcast o serie corporativa
          </option>

          <option value="postproduccion" className="bg-black">
            Postproducción — edición de material grabado
          </option>

          <option value="no-se" className="bg-black">
            No estoy seguro, necesito orientación
          </option>
        </select>
      </div>

      <div>
        <Label htmlFor="mensaje">Cuéntanos tu proyecto</Label>

        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={4}
          placeholder="Qué tienes grabado o qué quieres comunicar. Fecha tentativa si la tienes."
          className={inputClass + " resize-none"}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Algo salió mal. Intenta nuevamente o escríbenos directamente por
          correo.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90 disabled:opacity-50"
      >
        {status === "sending" ? "Enviando..." : "Enviar solicitud"}

        {status !== "sending" && <ArrowRight className="h-4 w-4" />}
      </button>

      <p className="text-center text-xs text-white/25">
        Respuesta dentro de 24 horas hábiles. Sin compromiso.
      </p>
    </form>
  );
}

export default function ContactoPage() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">
      <section className="container max-w-4xl pb-16 pt-28 md:pb-20 md:pt-36">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
          Contacto
        </p>

        <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
          Solicitar propuesta.{" "}
          <span className="text-white/35">
            Te respondemos dentro del mismo día hábil.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/55">
          Describe brevemente lo que necesitas. En menos de 24 horas hábiles
          recibes una propuesta clara, con alcance y precio definidos.
        </p>
      </section>

      <section className="container max-w-5xl pb-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:items-start">
          <div>
            <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="mb-3 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/50">
                Correo electrónico
              </div>

              <h2 className="text-lg font-semibold text-white">
                Contacto directo
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-white/50">
                Para resolver dudas, solicitar información o definir el alcance
                de un proyecto. Te responderemos dentro del mismo día hábil.
              </p>

              <a
                href={"mailto:" + EMAIL}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Escribir por correo
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="mb-1 text-base font-semibold text-white">
                Correo
              </h2>

              <p className="mb-4 text-sm text-white/45">
                Para solicitudes formales o envío de material de referencia.
              </p>

              <a
                href={"mailto:" + EMAIL}
                className="inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-white"
              >
                {EMAIL}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
              <h2 className="mb-4 text-sm font-semibold text-white">
                Para una propuesta más precisa:
              </h2>

              <ul className="space-y-2">
                {[
                  "Qué tienes grabado o qué quieres comunicar",
                  "Si necesitas producción completa o solo edición",
                  "A qué plataforma va el contenido",
                  "Fecha tentativa si la tienes",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-white/40"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/25" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-xs leading-relaxed text-white/25">
                Si aún no lo tienes definido, lo vemos contigo en el primer
                intercambio.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-7 lg:sticky lg:top-24">
            <h2 className="mb-6 text-base font-semibold text-white">
              Formulario de contacto
            </h2>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
