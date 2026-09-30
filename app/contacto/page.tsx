import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escríbenos a info@dekaelomedia.com para solicitar una propuesta. Respuesta en 24 horas hábiles.",
  alternates: {
    canonical: "/contacto",
  },
};

const EMAIL = "info@dekaelomedia.com";

// El correo se abre con asunto y una guía breve ya escrita.
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Solicitud de propuesta"
)}&body=${encodeURIComponent(
  "Hola, quiero conversar sobre un proyecto.\n\nEmpresa:\nQué quiero producir:\nDónde se publicará:\nFecha tentativa:\n\nGracias."
)}`;

const orientacion = [
  "Qué quieres comunicar",
  "Qué tienes grabado, si corresponde",
  "Dónde se publicará",
  "Fecha tentativa",
  "Cualquier referencia que tengas",
];

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="border-b border-white/10 px-5 pb-24 pt-36 md:px-10 md:pb-32 md:pt-48">
        <div className="mx-auto max-w-7xl">
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

          <p className="mt-10 max-w-xl text-base leading-relaxed text-white/55 md:text-lg">
            Cuéntanos qué quieres producir. Revisamos el proyecto, definimos
            el alcance y te respondemos con una propuesta clara.
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
                <ArrowUpRight className="h-5 w-5" strokeWidth={1.5} />
              </span>
            </span>
          </a>

          <p className="mt-6 text-sm text-white/40">
            Respuesta en 24 horas hábiles. Sin compromiso.
          </p>

          {/* ORIENTACIÓN */}

          <div className="mt-24 grid gap-12 md:mt-32 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="text-[clamp(2rem,3.5vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.05em]">
                Qué incluir
                <br />
                <span className="text-white/35">en tu correo.</span>
              </h2>
            </div>

            <div className="md:col-span-6 md:col-start-7">
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
                No necesitas tener el proyecto completamente definido.
                Podemos ayudarte a ordenar la idea, determinar el formato y
                establecer el alcance de producción.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
