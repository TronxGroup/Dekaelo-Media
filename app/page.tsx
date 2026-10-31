import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowDownRight, ArrowUpRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Dekaelo Media | Productora Audiovisual y Contenido Digital",
  },
  description:
    "Creamos y producimos programas para YouTube, series de videos, podcasts, vodcasts y contenido para Instagram. Te ayudamos a desarrollar tu idea y nos encargamos de su realización audiovisual.",
  alternates: {
    canonical: "/",
  },
};

/* ============================================================
   PROYECTOS
============================================================ */

const projects = [
  {
    slug: "bice",
    title: "BICE",
    category: "Comunicación interna · Cultura",
    client: "BICECORP",
    image: "/projects/bice/hero.png",
  },
  {
    slug: "lolosaurios",
    title: "LOLOSAURIOS",
    category: "Programa digital · YouTube",
    client: "José Luis Larraín",
    image: "/projects/lolosaurios/hero.png",
  },
  {
    slug: "futbol-y-parrilla",
    title: "FÚTBOL Y PARRILLA",
    category: "Deporte · Entretenimiento",
    client: "Ian Mac-Niven",
    image: "/projects/futbol-y-parrilla/hero.png",
  },
  {
    slug: "break-industrial",
    title: "BREAK INDUSTRIAL",
    category: "Contenido B2B · Industria",
    client: "iGromi",
    image: "/projects/break-industrial/hero.png",
  },
  {
    slug: "creando-lideres-para-asia",
    title: "CREANDO LÍDERES PARA ASIA",
    category: "Comunicación institucional · Internacional",
    client: "Cámara de Comercio Asia Pacífico · APCC",
    image: "/projects/creando-lideres-asia/hero.png",
  },
];

/* ============================================================
   SERVICIOS
============================================================ */

const capabilities = [
  "Programas para YouTube",
  "Series de videos para empresas y marcas",
  "Contenido para Instagram y redes sociales",
  "Podcasts y vodcasts",
  "Dirección creativa y producción audiovisual",
];

/* ============================================================
   CLIENTES
============================================================ */

const clientLogos = [
  "/logo_2.png",
  "/logo_3.png",
  "/logo_4.png",
  "/logo_13.png",
  "/logo_5.png",
  "/logo_9.png",
  "/logo_1.png",
  "/logo_10.png",
  "/logo_15.png",
  "/logo_12.png",
];

/* ============================================================
   HOME
============================================================ */

export default function Home() {
  return (
    <main className="bg-[#050505] text-white">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative h-[100svh] min-h-[620px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/dekaelo-reel.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/25" />

        <div className="absolute inset-x-0 bottom-0 px-5 pb-8 md:px-10 md:pb-12">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.32em] text-white/65">
                Productora audiovisual independiente
              </p>

              <h1 className="max-w-6xl text-[clamp(2.8rem,7.5vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.06em]">
                Tienes una idea.
                <br />
                <span className="text-white/65">
                  Nosotros la hacemos realidad.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/65 md:text-xl">
                Creamos y producimos programas, series y contenido audiovisual
                para YouTube, Instagram y plataformas digitales. Desde la idea
                inicial hasta la entrega final.
              </p>
            </div>

            <a
              href="#proyectos"
              className="group flex shrink-0 items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/75"
            >
              Explorar proyectos

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition group-hover:border-[#f51b24] group-hover:bg-[#f51b24]">
                <ArrowDownRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO / DIFERENCIAL
      ====================================================== */}

      <section
        id="nosotros"
        className="border-b border-white/10 px-5 py-28 md:px-10 md:py-40"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">
                Dekaelo Media
              </p>
            </div>

            <div className="md:col-span-8">
              <h2 className="max-w-6xl text-[clamp(2.7rem,6.5vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.06em]">
                No necesitas
                <br />
                <span className="text-white/35">saber cómo hacerlo.</span>
              </h2>

              <p className="mt-12 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
                ¿Tienes una idea para un programa de YouTube? ¿Quieres crear
                una serie de videos para tu empresa o contenido para Instagram?
                En Dekaelo te ayudamos a convertirla en un proyecto audiovisual
                profesional.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/35 md:text-lg">
                Podemos ayudarte a desarrollar el concepto y encontrar el
                formato adecuado, o trabajar sobre una idea que ya tienes
                definida. Creamos su identidad audiovisual y nos encargamos
                de la dirección, producción, realización y postproducción.
              </p>

              <Link
                href="/quienes-somos"
                className="group mt-10 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/60 transition hover:text-white"
              >
                Conocer Dekaelo

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition group-hover:border-[#f51b24] group-hover:bg-[#f51b24]">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PACK LANZAMIENTO VODCAST
      ====================================================== */}

      <section className="border-b border-white/10 px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">
                Una forma de empezar
              </p>

              <h2 className="mt-5 text-[clamp(2.8rem,5.5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.06em]">
                Tu propio
                <br />
                <span className="text-white/35">vodcast.</span>
              </h2>

              <p className="mt-8 max-w-md text-base leading-relaxed text-white/50 md:text-lg">
                Si quieres lanzar un programa de conversación, entrevistas o
                contenidos para YouTube, podemos ayudarte a ponerlo en marcha
                con una producción audiovisual profesional.
              </p>

              <Link
                href="/contacto"
                className="group mt-10 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
              >
                Hablemos de tu proyecto

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition group-hover:border-[#f51b24] group-hover:bg-[#f51b24]">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <div className="border-t border-white/20 pt-7">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#f51b24]">
                      Pack de lanzamiento
                    </p>

                    <h3 className="mt-4 text-2xl font-medium tracking-[-0.03em] md:text-3xl">
                      Vodcast
                    </h3>
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/30">
                    01
                  </span>
                </div>

                <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/45">
                  Una producción pensada para comenzar tu programa con
                  episodios completos y piezas breves que permiten ampliar
                  su presencia en plataformas digitales.
                </p>

                <div className="mt-10 space-y-0">
                  {[
                    "4 episodios de vodcast",
                    "12 reels para redes sociales",
                    "1 tráiler promocional",
                    "Identidad gráfica y audiovisual",
                    "Producción, edición y postproducción",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 border-b border-white/10 py-5"
                    >
                      <Check className="h-4 w-4 shrink-0 text-[#f51b24]" />

                      <span className="text-sm text-white/70 md:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-xs leading-relaxed text-white/30">
                  Cada proyecto se adapta a sus necesidades, formato,
                  locación y requerimientos de producción.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          REEL 2026
      ====================================================== */}

      <section className="border-b border-white/10 px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">
                Reel 2026
              </p>

              <h2 className="mt-4 text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.92] tracking-[-0.06em]">
                Ideas que
                <br />
                <span className="text-white/35">se hacen realidad.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-white/40 md:text-right">
              Una selección de proyectos, formatos y producciones que definen
              el trabajo de Dekaelo Media.
            </p>
          </div>

          <div className="relative aspect-video overflow-hidden bg-white/5">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/MY0sTHMoy1s"
              title="Dekaelo Media — Reel 2026"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className="mt-6 flex items-center justify-between gap-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
              Dekaelo Media · Reel 2026
            </p>

            <a
              href="https://youtu.be/AUUiBDv242k"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/50 transition hover:text-white"
            >
              Ver en YouTube

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition group-hover:border-[#f51b24] group-hover:bg-[#f51b24]">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          CLIENTES
      ====================================================== */}

      <section className="border-b border-white/10 px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">
                Algunos clientes
              </p>

              <h2 className="mt-4 text-4xl font-medium leading-[0.95] tracking-[-0.05em] md:text-5xl">
                Personas,
                <br />
                <span className="text-white/35">
                  marcas y organizaciones.
                </span>
              </h2>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <p className="max-w-xl text-base leading-relaxed text-white/40 md:text-lg">
                Trabajamos junto a personas, empresas e instituciones que
                necesitan transformar ideas en proyectos audiovisuales.
                Cada proyecto tiene su propia identidad, objetivos y audiencia.
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-3 md:grid-cols-5">
            {clientLogos.map((logo, index) => (
              <div
                key={logo}
                className="flex h-28 items-center justify-center border-b border-r border-white/10 px-8 py-6 md:h-32"
              >
                <Image
                  src={logo}
                  alt={`Cliente Dekaelo Media ${index + 1}`}
                  width={180}
                  height={80}
                  className="max-h-12 w-auto max-w-[150px] object-contain opacity-60 transition duration-300 hover:opacity-100 md:max-h-14 md:max-w-[170px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROYECTOS
      ====================================================== */}

      <section
        id="proyectos"
        className="px-5 py-24 md:px-10 md:py-36"
      >
        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">
              Nuestro trabajo
            </p>

            <h2 className="mt-4 text-5xl font-medium tracking-[-0.05em] md:text-7xl">
              Proyectos
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-white/40">
            Proyectos y producciones audiovisuales para comunicación
            corporativa, entretenimiento, deporte, tecnología y contenido
            digital.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/proyectos/${project.slug}`}
              className={`group ${
                index === projects.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes={
                    index === projects.length - 1
                      ? "100vw"
                      : "(max-width: 768px) 100vw, 50vw"
                  }
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                />

                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/25" />

                <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black opacity-0 transition duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.025em]">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-xs text-white/35">
                    {project.category}
                  </p>

                  <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-white/20">
                    Cliente · {project.client}
                  </p>
                </div>

                <span className="pt-1 text-[10px] text-white/20">
                  0{index + 1}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-end">
          <Link
            href="/proyectos"
            className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/50 transition hover:text-white"
          >
            Ver todos los proyectos

            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </section>

      {/* =====================================================
          MANIFIESTO
      ====================================================== */}

      <section className="border-y border-white/10 px-5 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">
            Cómo trabajamos
          </p>

          <h2 className="mt-8 max-w-6xl text-[clamp(2.7rem,6vw,6rem)] font-medium leading-[0.92] tracking-[-0.06em]">
            No necesitas llegar
            <br />
            <span className="text-white/35">con todo resuelto.</span>
          </h2>

          <div className="mt-16 grid gap-12 md:grid-cols-2">
            <div />

            <div>
              <p className="text-lg leading-relaxed text-white/55 md:text-xl">
                Cada proyecto comienza con una idea.
                <br />
                <br />
                Puede ser un programa de entrevistas, un espacio de conversación,
                una serie de videos, un canal de YouTube o una nueva forma de
                comunicar lo que haces.
                <br />
                <br />
                Si necesitas desarrollar el proyecto, podemos ayudarte a definir
                el concepto, la estructura y su lenguaje audiovisual. Si ya
                tienes el formato, nos sumamos para darle una identidad y
                convertirlo en una producción profesional.
                <br />
                <br />
                Nos encargamos de la dirección audiovisual, la producción,
                la edición y la postproducción hasta la entrega final.
              </p>

              <p className="mt-8 text-base leading-relaxed text-white/35 md:text-lg">
                Tú traes la idea. Nosotros ponemos la experiencia para
                convertirla en contenido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICIOS
      ====================================================== */}

      <section
        id="servicios"
        className="border-b border-white/10 px-5 py-24 md:px-10 md:py-32"
      >
        <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">
              Servicios
            </p>

            <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
              Una idea.
              <br />
              <span className="text-white/35">Muchos formatos.</span>
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/40">
              Desarrollamos y producimos proyectos audiovisuales a la medida
              de cada idea, persona, empresa y plataforma.
            </p>

            <Link
              href="/servicios"
              className="group mt-10 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/60 transition hover:text-white"
            >
              Ver servicios

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition group-hover:border-[#f51b24] group-hover:bg-[#f51b24]">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>

          <div className="border-t border-white/15">
            {capabilities.map((item, index) => (
              <Link
                key={item}
                href="/servicios"
                className="group flex items-center justify-between border-b border-white/10 py-6 transition hover:px-3"
              >
                <div className="flex items-center gap-6">
                  <span className="text-[10px] text-[#f51b24]">
                    0{index + 1}
                  </span>

                  <span className="text-lg text-white/75 transition group-hover:text-white md:text-2xl">
                    {item}
                  </span>
                </div>

                <ArrowUpRight className="h-4 w-4 text-white/20 transition group-hover:text-[#f51b24]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="relative overflow-hidden border-t border-white/10 px-5 py-32 md:px-10 md:py-44">
        <div className="absolute right-[-10%] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#f51b24]/10 blur-[150px]" />

        <div className="relative mx-auto max-w-6xl">
          <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">
            Hablemos
          </p>

          <h2 className="mt-7 max-w-5xl text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.9] tracking-[-0.06em]">
            ¿Tienes una
            <br />
            <span className="text-white/35">idea en mente?</span>
          </h2>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/40 md:text-lg">
            Puede ser un programa para YouTube, una serie de videos para tu
            empresa o contenido para Instagram. No necesitas tener todo
            resuelto. Cuéntanos qué tienes en mente y te ayudaremos a convertirlo
            en un proyecto audiovisual profesional.
          </p>

          <Link
            href="/contacto"
            className="group mt-12 inline-flex items-center gap-4 border border-white/20 px-7 py-4 text-xs uppercase tracking-[0.18em] transition hover:border-[#f51b24] hover:bg-[#f51b24]"
          >
            Cuéntanos tu idea

            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

          <p className="mt-5 text-[10px] uppercase tracking-[0.18em] text-white/25">
            Desde una primera conversación hasta una producción completa.
          </p>
        </div>
      </section>
    </main>
  );
}
