"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

const EMAIL = "info@dekaelomedia.com";
const FORMSPREE = "https://formspree.io/f/xnjovqaz";

const inputClass =
  "w-full border-b border-white/15 bg-transparent px-0 py-4 text-base text-white placeholder-white/25 outline-none transition focus:border-white";

function Label({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/35"
    >
      {children}
    </label>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "ok" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;

    try {
      const formData = new FormData(form);

      formData.append(
        "_subject",
        "Nueva solicitud de propuesta — Dekaelo Media"
      );

      const res = await fetch(FORMSPREE, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
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
      <div className="flex min-h-[430px] flex-col items-center justify-center border border-white/10 px-6 text-center">
        <CheckCircle2 className="h-9 w-9 text-white/70" strokeWidth={1.2} />

        <h3 className="mt-6 text-2xl font-medium tracking-[-0.03em]">
          Solicitud recibida.
        </h3>

        <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/40">
          Gracias por contactarnos. Revisaremos la información y te
          responderemos dentro de las próximas 24 horas hábiles.
        </p>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-[10px] uppercase tracking-[0.2em] text-white/35 transition hover:text-white"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* NOMBRE / EMPRESA */}

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <Label htmlFor="nombre">Nombre</Label>

          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            autoComplete="name"
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
            autoComplete="organization"
            placeholder="Nombre de la empresa"
            className={inputClass}
          />
        </div>
      </div>

      {/* EMAIL */}

      <div>
        <Label htmlFor="email">Correo electrónico</Label>

        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="tu@empresa.cl"
          className={inputClass}
        />
      </div>

      {/* SERVICIO */}

      <div>
        <Label htmlFor="servicio">Qué necesitas</Label>

        <select
          id="servicio"
          name="servicio"
          required
          defaultValue=""
          className={`${inputClass} cursor-pointer appearance-none`}
        >
          <option value="" disabled className="bg-[#050505]">
            Selecciona una opción
          </option>

          <option value="desarrollo-de-formatos" className="bg-[#050505]">
            Desarrollo de formatos
          </option>

          <option value="concepto-y-estructura" className="bg-[#050505]">
            Concepto y estructura
          </option>

          <option value="direccion-audiovisual" className="bg-[#050505]">
            Dirección audiovisual
          </option>

          <option value="produccion" className="bg-[#050505]">
            Producción
          </option>

          <option value="realizacion" className="bg-[#050505]">
            Realización
          </option>

          <option value="postproduccion" className="bg-[#050505]">
            Postproducción
          </option>

          <option value="orientacion" className="bg-[#050505]">
            No estoy seguro, necesito orientación
          </option>
        </select>
      </div>

      {/* MENSAJE */}

      <div>
        <Label htmlFor="mensaje">Cuéntanoss tu proyecto</Label>

        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          placeholder="Qué quieres producir, qué tienes grabado, dónde se publicará y cualquier información que nos ayude a entender el proyecto."
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* FECHA */}

      <div>
        <Label htmlFor="fecha">Fecha tentativa</Label>

        <input
          id="fecha"
          name="fecha"
          type="text"
          placeholder="Ej. octubre 2026"
          className={inputClass}
        />
      </div>

      {/* ERROR */}

      {status === "error" && (
        <div className="border border-red-500/20 bg-red-500/5 px-4 py-4">
          <p className="text-sm leading-relaxed text-red-300/80">
            No pudimos enviar la solicitud. Intenta nuevamente o escríbenos
            directamente a{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="text-red-200 underline underline-offset-4"
            >
              {EMAIL}
            </a>
            .
          </p>
        </div>
      )}

      {/* SUBMIT */}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-3 bg-white px-7 py-4 text-xs font-medium uppercase tracking-[0.18em] text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "sending" ? "Enviando..." : "Enviar solicitud"}

        {status !== "sending" && (
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        )}
      </button>

      <p className="text-center text-[10px] uppercase tracking-[0.15em] text-white/20">
        Respuesta dentro de 24 horas hábiles · Sin compromiso
      </p>
    </form>
  );
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="border-b border-white/10 px-5 pb-24 pt-36 md:px-10 md:pb-32 md:pt-48">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            {/* TITULO */}

            <div className="md:col-span-8">
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">
                Contacto
              </p>

              <h1 className="mt-7 text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.85] tracking-[-0.07em]">
                Hablemos
                <br />
                de tu
                <br />
                <span className="text-white/35">proyecto.</span>
              </h1>
            </div>

            {/* INTRO */}

            <div className="md:col-span-4">
              <p className="max-w-md text-base leading-relaxed text-white/55 md:text-lg">
                Cuéntanos qué quieres producir. Revisamos el proyecto,
                definimos el alcance y te respondemos con una propuesta clara.
              </p>

              <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-white/25">
                Respuesta en 24 horas hábiles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACTO + FORMULARIO
      ====================================================== */}

      <section className="px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            {/* =================================================
                INFORMACIÓN
            ================================================== */}

            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">
                  Empecemos
                </p>

                <h2 className="mt-6 text-[clamp(2.5rem,4vw,4.5rem)] font-medium leading-[0.92] tracking-[-0.06em]">
                  Cuéntanos
                  <br />
                  qué tienes
                  <br />
                  <span className="text-white/35">en mente.</span>
                </h2>

                <div className="mt-10 border-t border-white/10 pt-8">
                  <p className="text-sm leading-relaxed text-white/40">
                    No necesitas tener el proyecto completamente definido.
                    Podemos ayudarte a ordenar la idea, determinar el formato
                    y establecer el alcance de producción.
                  </p>
                </div>

                {/* CORREO */}

                <div className="mt-10 border-t border-white/10 pt-7">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                    Correo
                  </p>

                  <a
                    href={`mailto:${EMAIL}`}
                    className="mt-3 inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-white"
                  >
                    {EMAIL}

                    <ArrowUpRight
                      className="h-3.5 w-3.5"
                      strokeWidth={1.5}
                    />
                  </a>
                </div>

                {/* QUÉ AYUDA */}

                <div className="mt-10 border-t border-white/10 pt-7">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                    Para orientarnos
                  </p>

                  <ul className="mt-5 space-y-4">
                    {[
                      "Qué quieres comunicar",
                      "Qué tienes grabado, si corresponde",
                      "Dónde se publicará",
                      "Fecha tentativa",
                      "Cualquier referencia que tengas",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-white/40"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/30" />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 text-xs leading-relaxed text-white/20">
                    Si todavía no tienes esta información, no hay problema.
                    Cuéntanos simplemente qué necesitas.
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                FORMULARIO
            ================================================== */}

            <div className="lg:col-span-8">
              <div className="border border-white/10 bg-white/[0.02] p-6 md:p-10 lg:p-12">
                <div className="mb-10 flex items-end justify-between gap-6 border-b border-white/10 pb-7">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[#f51b24]">
                      Solicitar propuesta
                    </p>

                    <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em] md:text-3xl">
                      Cuéntanos tu proyecto.
                    </h2>
                  </div>

                  <span className="hidden text-[10px] uppercase tracking-[0.18em] text-white/20 sm:block">
                    01 / 01
                  </span>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CIERRE
      ====================================================== */}

      <section className="border-t border-white/10 px-5 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">
            Dekaelo Media
          </p>

          <h2 className="mt-7 text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.9] tracking-[-0.065em]">
            Distintas voces.
            <br />
            <span className="text-white/35">
              Una misma producción.
            </span>
          </h2>

          <a
            href={`mailto:${EMAIL}`}
            className="mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/45 transition hover:text-white"
          >
            {EMAIL}

            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </a>
        </div>
      </section>
    </main>
  );
}
