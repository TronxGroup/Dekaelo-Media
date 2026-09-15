import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Dekaelo Media",
  description:
    "Dekaelo Media — Distintas voces, una misma producción.",
};

const projects = [
  {
    slug: "bice",
    title: "BICE",
    category: "Contenido corporativo",
    image: "/projects/bice/hero.jpg",
    images: [
      "/projects/bice/01.jpg",
      "/projects/bice/02.jpg",
      "/projects/bice/03.jpg",
    ],
  },
  {
    slug: "lolosaurios",
    title: "LOLOSAURIOS",
    category: "Entretenimiento",
    image: "/projects/lolosaurios/hero.jpg",
    images: [
      "/projects/lolosaurios/01.jpg",
      "/projects/lolosaurios/02.jpg",
      "/projects/lolosaurios/03.jpg",
    ],
  },
  {
    slug: "futbol-y-parrilla",
    title: "FÚTBOL Y PARRILLA",
    category: "Deporte · Entretenimiento",
    image: "/projects/futbol-y-parrilla/hero.jpg",
    images: [
      "/projects/futbol-y-parrilla/01.jpg",
      "/projects/futbol-y-parrilla/02.jpg",
      "/projects/futbol-y-parrilla/03.jpg",
    ],
  },
  {
    slug: "break-industrial",
    title: "BREAK INDUSTRIAL",
    category: "Industria · Tecnología",
    image: "/projects/break-industrial/hero.jpg",
    images: [
      "/projects/break-industrial/01.jpg",
      "/projects/break-industrial/02.jpg",
      "/projects/break-industrial/03.jpg",
    ],
  },
  {
    slug: "creando-lideres-para-asia",
    title: "CREANDO LÍDERES PARA ASIA",
    category: "Contenido internacional",
    image: "/projects/creando-lideres-asia/hero.jpg",
    images: [
      "/projects/creando-lideres-asia/01.jpg",
      "/projects/creando-lideres-asia/02.jpg",
      "/projects/creando-lideres-asia/03.jpg",
    ],
  },
];

export default function Home() {
  return (
    <main className="bg-[#050505] text-white">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="fixed left-0 top-0 z-50 w-full">
        <div className="flex items-center justify-between px-6 py-6 md:px-10">

          <Link
            href="/"
            className="relative z-10 flex items-center"
            aria-label="Dekaelo Media"
          >
            <Image
              src="/dekaelo-logo.png"
              alt="Dekaelo Media"
              width={180}
              height={70}
              priority
              className="h-auto w-[135px] md:w-[165px]"
            />
          </Link>

          <nav className="hidden items-center gap-8 text-[11px] font-medium uppercase tracking-[0.18em] md:flex">
            <a
              href="#proyectos"
              className="text-white/70 transition hover:text-white"
            >
              Proyectos
            </a>

            <a
              href="#nosotros"
              className="text-white/70 transition hover:text-white"
            >
              Nosotros
            </a>

            <a
              href="#contacto"
              className="text-white/70 transition hover:text-white"
            >
              Contacto
            </a>
          </nav>

          <a
            href="#contacto"
            className="group hidden items-center gap-2 border border-white/20 px-4 py-2.5 text-[10px] uppercase tracking-[0.16em] transition hover:border-[#ff161f] hover:bg-[#ff161f] md:flex"
          >
            Hablemos
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </header>


      {/* =====================================================
          HERO VIDEO
      ====================================================== */}

      <section className="relative h-[100svh] min-h-[650px] overflow-hidden">

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

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/35" />

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/30" />

        {/* HERO CONTENT */}
        <div className="absolute inset-x-0 bottom-0 px-6 pb-10 md:px-10 md:pb-14">

          <div className="max-w-5xl">

            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-white/65">
              Dekaelo Media
            </p>

            <h1 className="max-w-4xl text-[clamp(2.7rem,7vw,7rem)] font-medium leading-[0.9] tracking-[-0.055em]">
              Distintas voces,
              <br />
              <span className="text-white/65">
                una misma producción.
              </span>
            </h1>

          </div>

          <div className="mt-10 flex items-center justify-between">

            <p className="hidden max-w-sm text-xs leading-relaxed text-white/55 md:block">
              Producción audiovisual, contenido original y narrativas
              para marcas, empresas y audiencias.
            </p>

            <a
              href="#proyectos"
              className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
            >
              Explorar proyectos

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition group-hover:border-[#ff161f] group-hover:bg-[#ff161f]">
                <ArrowDownRight className="h-4 w-4" />
              </span>
            </a>

          </div>
        </div>
      </section>


      {/* =====================================================
          PROJECTS
      ====================================================== */}

      <section
        id="proyectos"
        className="px-6 py-24 md:px-10 md:py-36"
      >

        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#ff161f]">
              Nuestro trabajo
            </p>

            <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] md:text-6xl">
              Proyectos
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-white/40">
            Contenido corporativo, entretenimiento, deporte, tecnología
            y conversaciones que conectan con distintas audiencias.
          </p>

        </div>


        {/* PROJECT GRID */}

        <div className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2">

          {projects.map((project, index) => (

            <Link
              key={project.slug}
              href={`/proyectos/${project.slug}`}
              className={`group block ${
                index === 4 ? "md:col-span-2" : ""
              }`}
            >

              <div className="relative aspect-[16/9] overflow-hidden bg-white/5">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes={
                    index === 4
                      ? "100vw"
                      : "(max-width: 768px) 100vw, 50vw"
                  }
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                />

                {/* HOVER */}
                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/25" />

                <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black opacity-0 transition duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </div>

              </div>

              <div className="mt-5 flex items-start justify-between gap-6">

                <div>
                  <h3 className="text-lg font-medium tracking-[-0.02em] md:text-xl">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-xs text-white/35">
                    {project.category}
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
          STATEMENT
      ====================================================== */}

      <section
        id="nosotros"
        className="border-y border-white/10 px-6 py-28 md:px-10 md:py-40"
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-[10px] uppercase tracking-[0.3em] text-[#ff161f]">
            Dekaelo Media
          </p>

          <h2 className="mt-8 max-w-6xl text-[clamp(2.5rem,6vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.055em]">
            Creamos historias.
            <br />
            <span className="text-white/35">
              Conectamos audiencias.
            </span>
          </h2>

          <div className="mt-14 grid gap-10 md:grid-cols-2">

            <div />

            <p className="max-w-xl text-base leading-relaxed text-white/50 md:text-lg">
              Dekaelo Media desarrolla y produce contenidos audiovisuales
              para distintas industrias y audiencias. Desde conversaciones
              corporativas hasta contenido original, entretenimiento,
              deporte y tecnología.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES / CAPABILITIES
      ====================================================== */}

      <section className="px-6 py-24 md:px-10 md:py-32">

        <div className="grid gap-16 md:grid-cols-[1fr_2fr]">

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#ff161f]">
              Lo que hacemos
            </p>

            <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
              Producción
              <br />
              audiovisual.
            </h2>
          </div>


          <div className="border-t border-white/15">

            {[
              "Contenido corporativo",
              "Vodcast y entrevistas",
              "Series y contenido original",
              "Producción audiovisual",
              "Contenido para redes",
              "Post-producción",
            ].map((item, index) => (

              <div
                key={item}
                className="group flex items-center justify-between border-b border-white/10 py-6 transition hover:px-3"
              >

                <div className="flex items-center gap-6">

                  <span className="text-[10px] text-[#ff161f]">
                    0{index + 1}
                  </span>

                  <span className="text-lg text-white/75 transition group-hover:text-white md:text-2xl">
                    {item}
                  </span>

                </div>

                <ArrowUpRight className="h-4 w-4 text-white/20 transition group-hover:text-[#ff161f]" />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section
        id="contacto"
        className="relative overflow-hidden border-t border-white/10 px-6 py-32 md:px-10 md:py-44"
      >

        <div className="absolute right-[-10%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#ff161f]/10 blur-[150px]" />

        <div className="relative mx-auto max-w-6xl">

          <p className="text-[10px] uppercase tracking-[0.3em] text-[#ff161f]">
            Hablemos
          </p>

          <h2 className="mt-7 max-w-5xl text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.9] tracking-[-0.06em]">
            ¿Tienes una
            <br />
            <span className="text-white/35">
              historia que contar?
            </span>
          </h2>

          <a
            href="mailto:contacto@dekaelo.cl"
            className="group mt-12 inline-flex items-center gap-4 border border-white/20 px-7 py-4 text-xs uppercase tracking-[0.18em] transition hover:border-[#ff161f] hover:bg-[#ff161f]"
          >
            Contactar a Dekaelo

            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="border-t border-white/10 px-6 py-10 md:px-10">

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          <div>

            <Image
              src="/dekaelo-logo.png"
              alt="Dekaelo Media"
              width={180}
              height={70}
              className="w-[140px]"
            />

            <p className="mt-5 text-xs text-white/30">
              Distintas voces, una misma producción.
            </p>

          </div>


          <div className="flex gap-7 text-[10px] uppercase tracking-[0.18em] text-white/35">

            <a
              href="#proyectos"
              className="transition hover:text-white"
            >
              Proyectos
            </a>

            <a
              href="#nosotros"
              className="transition hover:text-white"
            >
              Nosotros
            </a>

            <a
              href="#contacto"
              className="transition hover:text-white"
            >
              Contacto
            </a>

          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-[10px] text-white/20">
          © {new Date().getFullYear()} Dekaelo Media
        </div>

      </footer>

    </main>
  );
}
