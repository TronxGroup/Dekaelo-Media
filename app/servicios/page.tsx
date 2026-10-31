import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios | Dekaelo Media",
  description:
    "Creamos y producimos programas para YouTube, series de videos, podcasts, vodcasts y contenido para Instagram. Desarrollamos tu idea desde cero y nos encargamos de todo el proceso audiovisual.",
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
    title: "Programas para YouTube",
    intro:
      "¿Quieres tener tu propio programa, pero no sabes cómo desarrollarlo? Creamos el formato desde cero y lo convertimos en una producción audiovisual lista para llegar a su audiencia.",
    items: [
      "Programas de conversación",
      "Entrevistas",
      "Paneles y debates",
      "Programas temáticos",
      "Entretenimiento",
      "Series y formatos originales",
    ],
  },
  {
    number: "02",
    title: "Series de videos",
    intro:
      "Desarrollamos series audiovisuales para personas, empresas y marcas que quieren comunicar de manera constante, construir una identidad y conectar con sus audiencias.",
    items: [
      "Series corporativas",
      "Contenido educativo",
      "Historias de marca",
      "Videos institucionales",
      "Cápsulas audiovisuales",
      "Contenido editorial",
    ],
  },
  {
    number: "03",
    title: "Contenido para redes sociales",
    intro:
      "Creamos contenido pensado para el lenguaje y las características de cada plataforma. Desde la idea hasta las piezas finales listas para publicar.",
    items: [
      "Reels",
      "Videos verticales",
      "Entrevistas breves",
      "Cápsulas de contenido",
      "Videos promocionales",
      "Adaptaciones multiplataforma",
    ],
  },
  {
    number: "04",
    title: "Podcasts y vodcasts",
    intro:
      "Diseñamos y producimos espacios de conversación en audio y video. Definimos su identidad, dinámica, conducción y estructura para crear un formato con personalidad propia.",
    items: [
      "Podcasts corporativos",
      "Vodcast",
      "Entrevistas",
      "Conversaciones",
      "Programas periódicos",
      "Identidad audiovisual",
    ],
  },
  {
    number: "05",
    title: "Desarrollo creativo",
    intro:
      "No necesitas llegar con un proyecto resuelto. Te ayudamos a transformar una idea inicial en un concepto audiovisual concreto, con una propuesta creativa y posibilidades reales de producción.",
    items: [
      "Concepto creativo",
      "Nombre y branding",
      "Creación de logotipo",
      "Identidad gráfica",
      "Estructura y secciones",
      "Pauta y guion",
    ],
  },
  {
    number: "06",
    title: "Producción y postproducción",
    intro:
      "Nos encargamos de llevar el proyecto a la pantalla. Organizamos las grabaciones y desarrollamos todo el trabajo de edición y postproducción hasta entregar las piezas terminadas.",
    items: [
      "Preproducción",
      "Dirección audiovisual",
      "Rodaje multicámara",
      "Edición",
      "Color y sonido",
      "Motion graphics y subtítulos",
    ],
  },
];

/* ============================================================
   APLICACIONES
============================================================ */

const applications = [
  {
    title: "Quiero tener un programa en YouTube",
    text:
      "Tienes una idea para un programa de entrevistas, conversación, actualidad o entretenimiento. Desarrollamos el formato, creamos su identidad y producimos los episodios.",
  },
  {
    title: "Quiero crear contenido para mi empresa",
    text:
      "Necesitas comunicar lo que haces, compartir conocimientos, mostrar a tu equipo o desarrollar una serie audiovisual para tus clientes y colaboradores.",
  },
  {
    title: "Quiero producir contenido para Instagram",
    text:
      "Buscas generar videos y reels con una identidad propia, una línea de contenido coherente y calidad audiovisual profesional.",
  },
  {
    title: "Tengo una idea, pero no sé cómo hacerla",
    text:
      "No tienes que llegar con el formato, el guion ni la producción resueltos. Conversamos contigo, desarrollamos una propuesta y nos encargamos de hacerla realidad.",
  },
];

/* ============================================================
   PROCESO
============================================================ */

const steps = [
  {
    number: "01",
    title: "Conversamos",
    text:
      "Nos cuentas tu idea, qué quieres conseguir y a quién quieres llegar.",
  },
  {
    number: "02",
    title: "Desarrollamos",
    text:
      "Creamos el concepto, definimos el formato, la identidad, la estructura y el estilo.",
  },
  {
    number: "03",
    title: "Producimos",
    text:
      "Organizamos y realizamos las grabaciones con los recursos adecuados para el proyecto.",
  },
  {
    number: "04",
    title: "Entregamos",
    text:
      "Editamos, trabajamos imagen y sonido y preparamos las piezas finales para cada plataforma.",
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

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-[#050505]" />

        <div className="relative z-10 mx-auto flex min-h-[68vh] max-w-7xl flex-col justify-end">

          <Eyebrow>Qué hacemos</Eyebrow>

          <div className="mt-6 grid gap-12 md:grid-cols-12 md:items-end">

            <div className="md:col-span-9">

              <h1 className="max-w-6xl text-[clamp(3.2rem,8vw,8rem)] font-medium leading-[0.88] tracking-[-0.065em]">
                Tienes una idea.
                <br />
                Nosotros la
                <br />
                <span className="text-white/45">
                  hacemos realidad.
                </span>
              </h1>

            </div>

            <div className="md:col-span-3">

              <p className="text-sm leading-relaxed text-white/70 md:text-base">
                Creamos y producimos programas, series y contenido audiovisual
                para YouTube, Instagram y otras plataformas digitales.
              </p>

              <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-white/45">
                Desarrollo · Producción · Postproducción
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

                No necesitas
                <br />

                <span className="text-white/35">
                  saber cómo producirlo.
                </span>

              </h2>

              <p className="mt-12 max-w-3xl text-lg leading-relaxed text-white/60 md:text-xl">
                Muchas buenas ideas nunca llegan a realizarse porque no
                sabemos cómo convertirlas en un proyecto audiovisual.
                No sabes qué formato utilizar, cómo debería ser el programa,
                qué necesitas para grabarlo o cómo llevarlo a las plataformas.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/40 md:text-lg">
                En Dekaelo nos encargamos de resolver ese proceso contigo.
                No necesitas llegar con un programa diseñado ni una
                estrategia definida. Partimos desde tu idea y desarrollamos
                todo lo necesario para convertirla en contenido profesional.
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

            <Eyebrow>Lo que podemos hacer</Eyebrow>

            <h2 className="mt-5 text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.92] tracking-[-0.06em]">
              Un proyecto.
              <br />
              <span className="text-white/35">
                Todo lo necesario.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/40 md:text-lg">
              Podemos desarrollar un proyecto desde cero o integrarnos a
              una idea que ya está en marcha. Adaptamos el trabajo a las
              necesidades y objetivos de cada producción.
            </p>

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

              <Eyebrow>¿Qué tienes en mente?</Eyebrow>

              <h2 className="mt-6 text-[clamp(2.7rem,5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.06em]">

                Cada idea
                <br />

                <span className="text-white/35">
                  tiene su formato.
                </span>

              </h2>

              <p className="mt-8 max-w-md text-base leading-relaxed text-white/40 md:text-lg">
                Trabajamos con personas, emprendedores, marcas y empresas.
                No importa si quieres lanzar un programa o producir una
                serie de videos: podemos ayudarte a encontrar el camino.
              </p>

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

                    <div className="md:col-span-5">

                      <h3 className="text-xl font-medium tracking-[-0.02em]">
                        {application.title}
                      </h3>

                    </div>

                    <div className="md:col-span-6">

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

              <Eyebrow>De la idea a la pantalla</Eyebrow>

              <h2 className="mt-5 text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.92] tracking-[-0.06em]">

                Nosotros nos
                <br />

                <span className="text-white/35">
                  encargamos.
                </span>

              </h2>

            </div>

            <div className="md:col-span-5">

              <p className="text-base leading-relaxed text-white/40 md:text-lg">
                Cada proyecto tiene necesidades distintas. Adaptamos
                el proceso a la idea, pero mantenemos una dirección
                creativa y audiovisual durante todas sus etapas.
              </p>

            </div>

          </div>

          <div className="grid border-y border-white/10 md:grid-cols-4">

            {steps.map((step) => (

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
                Proyectos reales.
                <br />
                Producción continua.
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
                    +6K
                  </p>

                  <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/35">
                    colaboradores
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
                  Cuéntanosla.
                </span>

              </h2>

              <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/40 md:text-lg">
                No necesitas saber cómo producirla ni tener todo resuelto.
                Hablemos de lo que tienes en mente y encontremos juntos
                la mejor manera de hacerlo realidad.
              </p>

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
