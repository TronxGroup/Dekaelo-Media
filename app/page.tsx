import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Dekaelo Media — Productora Audiovisual",
  },

  description:
    "Dekaelo Media crea, desarrolla y produce formatos audiovisuales. Distintas voces, una misma producción.",

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
    category: "Formato editorial · Entretenimiento",
    client: "José Luis Larraín",
    image: "/projects/lolosaurios/hero.png",
  },
  {
    slug: "futbol-y-parrilla",
    title: "FÚTBOL Y PARRILLA",
    category: "Formato editorial · Deporte",
    client: "Ian Mac-Niven",
    image: "/projects/futbol-y-parrilla/hero.png",
  },
  {
    slug: "break-industrial",
    title: "BREAK INDUSTRIAL",
    category: "Posicionamiento B2B · Industria",
    client: "iGromi",
    image: "/projects/break-industrial/hero.png",
  },
  {
    slug: "creando-lideres-para-asia",
    title: "CREANDO LÍDERES PARA ASIA",
    category: "Posicionamiento B2B · Internacional",
    client: "Cámara de Comercio Asia Pacífico · APCC",
    image: "/projects/creando-lideres-asia/hero.png",
  },
];

/* ============================================================
   SERVICIOS
============================================================ */

const capabilities = [
  "Desarrollo de formatos",
  "Concepto y estructura",
  "Dirección audiovisual",
  "Producción",
  "Realización",
  "Postproducción",
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
        {/* VIDEO */}

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

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/25" />

        {/* HERO CONTENT */}

        <div className="absolute inset-x-0 bottom-0 px-5 pb-8 md:px-10 md:pb-12">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.32em] text-white/65">
                Desarrollo · Producción · Contenido audiovisual
              </p>

              <h1 className="max-w-6xl text-[clamp(2.8rem,7.5vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.06em]">
                Distintas voces,
                <br />
                <span className="text-white/65">
                  una misma producción.
                </span>
              </h1>
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
            {/* COLUMNA IZQUIERDA */}

            <div className="md:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">
                Dekaelo Media
              </p>
            </div>

            {/* COLUMNA DERECHA */}

            <div className="md:col-span-8">
              <h2 className="max-w-6xl text-[clamp(2.7rem,6.5vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.06em]">
                Del concepto
                <br />
                <span className="text-white/35">al formato.</span>
              </h2>

              <p className="mt-12 max-w-2xl text-lg leading-relaxed text-white/50 md:text-xl">
                Dekaelo Media crea, desarrolla y produce formatos
                audiovisuales para marcas, empresas y audiencias.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/35 md:text-lg">
                Diseñamos el concepto, la estructura, el ritmo y el lenguaje
                audiovisual de cada proyecto, y lo llevamos desde la idea
                hasta la producción y postproducción.
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
                Lo que
                <br />
                <span className="text-white/35">hacemos.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-white/40 md:text-right">
              Una selección de proyectos, formatos y producciones que definen
              el trabajo de Dekaelo Media.
            </p>
          </div>

          {/* VIDEO YOUTUBE */}

          <div className="relative aspect-video overflow-hidden bg-white/5">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/AUUiBDv242k"
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
                Marcas,
                <br />
                <span className="text-white/35">empresas e instituciones.</span>
              </h2>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <p className="max-w-xl text-base leading-relaxed text-white/40 md:text-lg">
                Trabajamos junto a organizaciones que necesitan transformar
                ideas, mensajes y contenidos en experiencias audiovisuales.
              </p>
            </div>
          </div>

          {/* LOGOS */}

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
            Formatos creados y producidos para comunicación corporativa,
            entretenimiento, deporte, tecnología y contenido original.
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
            No solo producimos.
            <br />
            <span className="text-white/35">Creamos formatos.</span>
          </h2>

          <div className="mt-16 grid gap-12 md:grid-cols-2">
            <div />

            <div>
              <p className="text-lg leading-relaxed text-white/55 md:text-xl">
                Cada proyecto comienza con una idea.
                <br />
                <br />
                A partir de ella desarrollamos la estructura, definimos el
                ritmo, construimos la dinámica y desarrollamos el lenguaje
                audiovisual que le dará identidad al formato.
                <br />
                <br />
                Después lo llevamos a producción.
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
          {/* INTRO */}

          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">
              Servicios
            </p>

            <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
              Una producción.
              <br />
              <span className="text-white/35">Distintos formatos.</span>
            </h2>

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

          {/* LISTA DE SERVICIOS */}

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
            <span className="text-white/35">historia que contar?</span>
          </h2>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/40 md:text-lg">
            Cuéntanos tu idea. Podemos ayudarte a convertirla en un formato
            audiovisual.
          </p>

          <Link
            href="/contacto"
            className="group mt-12 inline-flex items-center gap-4 border border-white/20 px-7 py-4 text-xs uppercase tracking-[0.18em] transition hover:border-[#f51b24] hover:bg-[#f51b24]"
          >
            Solicitar propuesta

            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

          <p className="mt-5 text-[10px] uppercase tracking-[0.18em] text-white/25">
            Respuesta en 24 horas hábiles.
          </p>
        </div>
      </section>
    </main>
  );
}
