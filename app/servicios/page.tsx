import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Dekaelo Media desarrolla, produce y postproduce formatos audiovisuales, contenido corporativo y proyectos editoriales para empresas, marcas y audiencias.",
  alternates: {
    canonical: "/servicios",
  },
};

/* ============================================================
   SERVICIOS
============================================================ */

const services = [
  {
    number: "01",
    title: "Desarrollo de formatos",
    intro:
      "Convertimos una idea en un formato audiovisual con identidad, estructura y posibilidades reales de producción.",
    items: [
      "Vodcast",
      "Programas de conversación",
      "Entrevistas",
      "Series",
      "Contenido editorial",
      "Formatos para YouTube y plataformas digitales",
    ],
  },

  {
    number: "02",
    title: "Concepto y estructura",
    intro:
      "Definimos qué contar, cómo contarlo y qué necesita cada proyecto para funcionar.",
    items: [
      "Concepto creativo",
      "Estructura de episodios",
      "Línea editorial",
      "Guion y pauta",
      "Diseño de secciones",
      "Identidad audiovisual",
    ],
  },

  {
    number: "03",
    title: "Dirección audiovisual",
    intro:
      "Llevamos el concepto a una propuesta visual y narrativa coherente con el proyecto.",
    items: [
      "Dirección",
      "Lenguaje visual",
      "Dirección de entrevistas",
      "Dirección de cámaras",
      "Puesta en escena",
      "Criterio narrativo",
    ],
  },

  {
    number: "04",
    title: "Producción",
    intro:
      "Organizamos y ejecutamos cada etapa necesaria para llevar el proyecto desde la planificación hasta el rodaje.",
    items: [
      "Preproducción",
      "Planificación de rodaje",
      "Coordinación técnica",
      "Locaciones",
      "Equipamiento",
      "Producción en terreno",
    ],
  },

  {
    number: "05",
    title: "Realización",
    intro:
      "Nos hacemos cargo de la ejecución audiovisual para que cada jornada de producción llegue preparada y ordenada.",
    items: [
      "Rodaje multicámara",
      "Operación de cámaras",
      "Iluminación",
      "Captura de audio",
      "Dirección técnica en set",
      "Registro audiovisual",
    ],
  },

  {
    number: "06",
    title: "Postproducción",
    intro:
      "Construimos la pieza final a partir del material registrado, cuidando narrativa, imagen, sonido y versiones.",
    items: [
      "Edición",
      "Corrección de color",
      "Diseño sonoro",
      "Motion graphics",
      "Subtítulos",
      "Versiones para plataformas",
    ],
  },
];

/* ============================================================
   APLICACIONES
============================================================ */

const applications = [
  {
    title: "Vodcast corporativo",
    text:
      "Formatos de conversación y contenido audiovisual para comunicación interna, cultura y posicionamiento.",
  },
  {
    title: "Contenido institucional",
    text:
      "Piezas audiovisuales para comunicar proyectos, equipos, productos, servicios y cultura empresarial.",
  },
  {
    title: "Formatos editoriales",
    text:
      "Programas y series pensados para construir una audiencia alrededor de una temática, marca o proyecto.",
  },
  {
    title: "Contenido B2B",
    text:
      "Producciones audiovisuales para empresas de industria, tecnología, servicios y mercados especializados.",
  },
];

/* ============================================================
   EYEBROW
============================================================ */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">
      {children}
    </p>
  );
}

/* ============================================================
   PAGE
============================================================ */

export default function ServiciosPage() {
  return (
    <main className="bg-[#050505] text-white selection:bg-white selection:text-black">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[88vh] overflow-hidden border-b border-white/10 px-5 pb-24 pt-40 md:px-10 md:pb-36 md:pt-52">

        {/* FOTO DE FONDO */}

        <div className="absolute inset-0">

          <Image
            src="/BG_Servicios.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

        </div>

        {/* OVERLAY OSCURO */}

        <div className="absolute inset-0 bg-black/60" />

        {/* DEGRADADO */}

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-[#050505]" />

        {/* CONTENIDO */}

        <div className="relative z-10 mx-auto flex min-h-[68vh] max-w-7xl flex-col justify-end">

          <Eyebrow>Servicios</Eyebrow>

          <div className="mt-6 grid gap-12 md:grid-cols-12 md:items-end">

            <div className="md:col-span-9">

              <h1 className="max-w-6xl text-[clamp(3.2rem,8vw,8rem)] font-medium leading-[0.88] tracking-[-0.065em]">

                Del concepto
                <br />
                a la producción.
                <br />

                <span className="text-white/45">
                  Una misma mirada.
                </span>

              </h1>

            </div>

            <div className="md:col-span-3">

              <p className="text-sm leading-relaxed text-white/70 md:text-base">
                Desarrollamos, producimos y postproducimos formatos
                audiovisuales para empresas, marcas y audiencias.
              </p>

              <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-white/45">
                Dekaelo Media · Desde 2013
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="border-b border-white/10 px-5 py-24 md:px-10 md:py-36">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 md:grid-cols-12">

            <div className="md:col-span-4">

              <Eyebrow>Nuestra forma de trabajar</Eyebrow>

            </div>

            <div className="md:col-span-8">

              <h2 className="max-w-5xl text-[clamp(2.7rem,6vw,6rem)] font-medium leading-[0.92] tracking-[-0.06em]">

                Una producción
                <br />

                <span className="text-white/35">
                  de principio a fin.
                </span>

              </h2>

              <p className="mt-12 max-w-3xl text-lg leading-relaxed text-white/50 md:text-xl">
                No trabajamos únicamente sobre la pieza final. Nos
                involucramos desde la definición del formato y la
                estructura hasta la producción, realización y
                postproducción.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/35 md:text-lg">
                Esto permite mantener una misma dirección creativa y
                audiovisual durante todo el proceso.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICIOS
      ====================================================== */}

      <section className="border-b border-white/10 px-5 py-24 md:px-10 md:py-36">

        <div className="mx-auto max-w-7xl">

          <div className="mb-20 max-w-3xl">

            <Eyebrow>Capacidades</Eyebrow>

            <h2 className="mt-5 text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.92] tracking-[-0.06em]">
              Lo que hacemos.
            </h2>

          </div>

          <div className="divide-y divide-white/10">

            {services.map((service) => (

              <article
                key={service.number}
                className="grid gap-8 py-12 md:grid-cols-12 md:py-16"
              >

                <div className="md:col-span-1">

                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#f51b24]">
                    {service.number}
                  </span>

                </div>

                <div className="md:col-span-5">

                  <h3 className="text-[clamp(2rem,4vw,4rem)] font-medium leading-[0.95] tracking-[-0.05em]">
                    {service.title}
                  </h3>

                </div>

                <div className="md:col-span-6">

                  <p className="max-w-xl text-base leading-relaxed text-white/50 md:text-lg">
                    {service.intro}
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-white/10 pt-6 sm:grid-cols-3">

                    {service.items.map((item) => (

                      <p
                        key={item}
                        className="text-xs text-white/35 md:text-sm"
                      >
                        {item}
                      </p>

                    ))}

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          APLICACIONES
      ====================================================== */}

      <section className="px-5 py-24 md:px-10 md:py-36">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 md:grid-cols-12">

            <div className="md:col-span-5">

              <Eyebrow>Aplicaciones</Eyebrow>

              <h2 className="mt-6 text-[clamp(2.7rem,5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.06em]">

                Diferentes
                <br />
                proyectos.
                <br />

                <span className="text-white/35">
                  Una misma producción.
                </span>

              </h2>

            </div>

            <div className="md:col-span-7">

              <div className="divide-y divide-white/10 border-y border-white/10">

                {applications.map((application, index) => (

                  <div
                    key={application.title}
                    className="grid gap-5 py-9 md:grid-cols-12"
                  >

                    <div className="md:col-span-1">

                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                        0{index + 1}
                      </span>

                    </div>

                    <div className="md:col-span-4">

                      <h3 className="text-xl font-medium tracking-[-0.02em]">
                        {application.title}
                      </h3>

                    </div>

                    <div className="md:col-span-7">

                      <p className="text-sm leading-relaxed text-white/40 md:text-base">
                        {application.text}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PROCESO
      ====================================================== */}

      <section className="border-t border-white/10 px-5 py-24 md:px-10 md:py-36">

        <div className="mx-auto max-w-7xl">

          <div className="mb-20 grid gap-12 md:grid-cols-12 md:items-end">

            <div className="md:col-span-7">

              <Eyebrow>Proceso</Eyebrow>

              <h2 className="mt-5 text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.92] tracking-[-0.06em]">

                Una idea.
                <br />
                Un proceso.
                <br />

                <span className="text-white/35">
                  Una producción.
                </span>

              </h2>

            </div>

            <div className="md:col-span-5">

              <p className="text-base leading-relaxed text-white/40 md:text-lg">
                Cada proyecto tiene necesidades distintas. El proceso se
                adapta al formato, pero mantenemos una estructura clara
                para llegar desde la idea hasta la pieza terminada.
              </p>

            </div>

          </div>

          <div className="grid border-y border-white/10 md:grid-cols-4">

            {[
              {
                number: "01",
                title: "Definición",
                text: "Objetivo, audiencia, formato y alcance.",
              },
              {
                number: "02",
                title: "Desarrollo",
                text: "Concepto, estructura, pauta y planificación.",
              },
              {
                number: "03",
                title: "Producción",
                text: "Rodaje, realización y ejecución audiovisual.",
              },
              {
                number: "04",
                title: "Postproducción",
                text: "Edición, sonido, color y entregas finales.",
              },
            ].map((step) => (

              <div
                key={step.number}
                className="border-b border-white/10 px-6 py-10 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:py-12"
              >

                <span className="text-[10px] uppercase tracking-[0.2em] text-[#f51b24]">
                  {step.number}
                </span>

                <h3 className="mt-8 text-2xl font-medium tracking-[-0.03em]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-white/35">
                  {step.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          EXPERIENCIA
      ====================================================== */}

      <section className="border-y border-white/10 px-5 py-24 md:px-10 md:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 md:grid-cols-12 md:items-start">

            <div className="md:col-span-4">

              <Eyebrow>Experiencia</Eyebrow>

              <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em] md:text-5xl">
                Producción
                <br />
                continua.
              </h2>

            </div>

            <div className="md:col-span-7 md:col-start-6">

              <p className="text-xl leading-relaxed text-white/65 md:text-3xl">
                BICECORP trabaja con Dekaelo Media desde 2024 en la
                producción continua de su serie de comunicación interna
                Nos Une.
              </p>

              <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">

                <div>

                  <p className="text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                    14+
                  </p>

                  <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/35">
                    episodios producidos
                  </p>

                </div>

                <div>

                  <p className="text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                    2024
                  </p>

                  <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/35">
                    inicio de la colaboración
                  </p>

                </div>

                <div>

                  <p className="text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                    ACTIVA
                  </p>

                  <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/35">
                    producción vigente
                  </p>

                </div>

              </div>

              <div className="mt-10">

                <Link
                  href="/proyectos/bice"
                  className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-white/45 transition hover:text-white"
                >
                  Ver proyecto BICE

                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="border-t border-white/10 px-5 py-28 md:px-10 md:py-44">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 md:grid-cols-12 md:items-end">

            <div className="md:col-span-9">

              <Eyebrow>Trabajemos juntos</Eyebrow>

              <h2 className="mt-6 text-[clamp(3.2rem,8vw,8rem)] font-medium leading-[0.88] tracking-[-0.065em]">

                ¿Tienes una idea?
                <br />

                <span className="text-white/35">
                  Hagámosla producción.
                </span>

              </h2>

            </div>

            <div className="md:col-span-3">

              <Link
                href="/contacto"
                className="group inline-flex items-center gap-4 text-sm uppercase tracking-[0.18em]"
              >
                Hablemos

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 transition group-hover:border-[#f51b24] group-hover:bg-[#f51b24]">
                  <ArrowUpRight className="h-4 w-4" />
                </span>

              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
