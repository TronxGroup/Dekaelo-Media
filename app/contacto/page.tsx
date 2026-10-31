import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto | Dekaelo Media",
  description:
    "¿Tienes una idea para un programa, una serie de videos o contenido para tus redes? Conversemos y hagámosla realidad.",
  alternates: {
    canonical: "/contacto",
  },
};

const EMAIL = "info@dekaelomedia.com";

const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Quiero desarrollar un proyecto audiovisual"
)}&body=${encodeURIComponent(
  "Hola, quiero conversar sobre un proyecto audiovisual.\n\nMi nombre o empresa:\nQué me gustaría producir:\nDónde se publicará:\nFecha tentativa:\nReferencias o ideas que tengo:\n\nGracias."
)}`;

const orientacion = [
  "Qué te gustaría crear o comunicar",
  "Si tienes una idea o un proyecto ya definido",
  "Dónde te gustaría publicar el contenido",
  "Si tienes alguna fecha tentativa",
  "Referencias, ejemplos o cualquier idea que quieras compartir",
];

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-white/10 px-5 pb-24 pt-36 md:px-10 md:pb-32 md:pt-48">

        <div className="absolute inset-0">
          <Image
            src="/BG_Contacto.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">

          <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">
            Contacto
          </p>

          <h1 className="mt-7 text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.85] tracking-[-0.07em]">
            Hablemos
            <br />
            de tu
            <br />
            <span className="text-white/35">
              proyecto.
            </span>
          </h1>

          <p className="mt-10 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            ¿Tienes una idea para un programa, una serie de videos o
            contenido para tus redes? Cuéntanos qué tienes en mente.
            No necesitas tenerlo todo definido: podemos ayudarte a
            desarrollar la idea y convertirla en una producción audiovisual.
          </p>

        </div>
      </section>

      {/* =====================================================
          CORREO
      ====================================================== */}

      <section className="px-5 py-24 md:px-10 md:py-36">

        <div className="mx-auto max-w-7xl">

          <a
            href={MAILTO}
            className="group block border-b border-white/15 pb-10 transition hover:border-[#f51b24] focus-visible:border-[#f51b24] focus-visible:outline-none md:pb-14"
          >

            <span className="flex items-end justify-between gap-6">

              <span className="break-all text-[clamp(2rem,6.5vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.055em] transition group-hover:text-white/80">
                {EMAIL}
              </span>

              <span className="mb-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 transition group-hover:border-[#f51b24] group-hover:bg-[#f51b24] md:h-16 md:w-16">
                <ArrowUpRight
                  className="h-5 w-5"
                  strokeWidth={1.5}
                />
              </span>

            </span>

          </a>

          <p className="mt-6 text-sm text-white/40">
            Respuesta en 24 horas hábiles. Sin compromiso.
          </p>

          {/* =====================================================
              ORIENTACIÓN
          ====================================================== */}

          <div className="mt-24 grid gap-12 md:mt-32 md:grid-cols-12">

            <div className="md:col-span-5">

              <h2 className="text-[clamp(2rem,3.5vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.05em]">
                No necesitas
                <br />
                tenerlo todo
                <br />
                <span className="text-white/35">
                  resuelto.
                </span>
              </h2>

              <p className="mt-8 max-w-sm text-sm leading-relaxed text-white/40 md:text-base">
                Podemos partir desde una idea, una necesidad o simplemente
                algo que te gustaría hacer. Nosotros te ayudamos a encontrar
                el formato y desarrollar el proyecto.
              </p>

            </div>

            <div className="md:col-span-6 md:col-start-7">

              <p className="mb-6 text-[10px] uppercase tracking-[0.25em] text-[#f51b24]">
                Para comenzar la conversación
              </p>

              <ul className="border-t border-white/10">

                {orientacion.map((item) => (
                  <li
                    key={item}
                    className="border-b border-white/10 py-5 text-base text-white/60 md:text-lg"
                  >
                    {item}
                  </li>
                ))}

              </ul>

              <p className="mt-8 max-w-md text-sm leading-relaxed text-white/35">
                No importa si quieres lanzar un programa en YouTube,
                producir una serie de videos para tu empresa o crear
                contenido para Instagram. Conversemos sobre lo que
                tienes en mente.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CIERRE
      ====================================================== */}

      <section className="border-t border-white/10 px-5 py-20 md:px-10 md:py-28">

        <div className="mx-auto max-w-7xl">

          <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">
            Dekaelo Media
          </p>

          <h2 className="mt-6 max-w-4xl text-[clamp(2.5rem,6vw,6rem)] font-medium leading-[0.95] tracking-[-0.06em]">
            Tienes una idea.
            <br />
            <span className="text-white/35">
              Nosotros la hacemos realidad.
            </span>
          </h2>

          <a
            href={MAILTO}
            className="group mt-10 inline-flex items-center gap-5 border-b border-white/30 pb-3 text-xs uppercase tracking-[0.18em] transition hover:border-[#f51b24]"
          >
            Cuéntanos tu proyecto

            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

        </div>

      </section>

    </main>
  );
}
