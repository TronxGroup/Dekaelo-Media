import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowDown, ArrowUp, ArrowUpRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Conoce proyectos audiovisuales desarrollados y producidos por Dekaelo Media para empresas, marcas y organizaciones.",
  alternates: {
    canonical: "/proyectos",
  },
};

const projects = [
  [
    "bice",
    "BICE",
    "Contenido corporativo",
    "/projects/bice/hero.png",
  ],
  [
    "lolosaurios",
    "LOLOSAURIOS",
    "Entretenimiento",
    "/projects/lolosaurios/hero.png",
  ],
  [
    "futbol-y-parrilla",
    "FÚTBOL Y PARRILLA",
    "Deporte · Entretenimiento",
    "/projects/futbol-y-parrilla/hero.png",
  ],
  [
    "break-industrial",
    "BREAK INDUSTRIAL",
    "Industria · Tecnología",
    "/projects/break-industrial/hero.png",
  ],
  [
    "creando-lideres-para-asia",
    "CREANDO LÍDERES PARA ASIA",
    "Contenido internacional",
    "/projects/creando-lideres-asia/hero.png",
  ],
] as const;

export default function ProjectsPage() {
  return (
    <main
      id="top"
      className="min-h-screen bg-[#050505] px-5 pb-24 pt-36 text-white md:px-10 md:pb-32 md:pt-44"
    >
      {/* =====================================================
          HEADER DE PÁGINA
      ====================================================== */}

      <div className="mx-auto max-w-7xl">

        {/* NAVEGACIÓN */}

        <div className="mb-16 flex items-center justify-between border-b border-white/10 pb-5">

          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/35 transition hover:text-white"
          >
            <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
            Volver al inicio
          </Link>

          <a
            href="#proyectos"
            className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/35 transition hover:text-white"
          >
            Ver proyectos
            <ArrowDown className="h-3 w-3 transition-transform group-hover:translate-y-1" />
          </a>

        </div>

        {/* TÍTULO */}

        <div className="mb-20">

          <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">
            Nuestro trabajo
          </p>

          <h1 className="mt-4 text-[clamp(4rem,9vw,8rem)] font-medium leading-[0.88] tracking-[-0.065em]">
            Proyectos
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/40 md:text-lg">
            Una selección de formatos, contenidos y producciones
            desarrollados y producidos por Dekaelo Media.
          </p>

        </div>

      </div>

      {/* =====================================================
          PROYECTOS
      ====================================================== */}

      <div
        id="proyectos"
        className="mx-auto grid max-w-7xl scroll-mt-28 grid-cols-1 gap-x-6 gap-y-20 md:grid-cols-2 md:gap-y-24"
      >

        {projects.map(([slug, title, category, image], index) => (

          <Link
            href={`/proyectos/${slug}`}
            key={slug}
            className={`group ${
              index === projects.length - 1
                ? "md:col-span-2"
                : ""
            }`}
          >

            {/* IMAGEN */}

            <div className="relative aspect-[16/9] overflow-hidden bg-white/5">

              <Image
                src={image}
                alt={`${title} — Dekaelo Media`}
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

            {/* INFORMACIÓN */}

            <div className="mt-5 flex justify-between gap-6">

              <div>

                <h2 className="text-xl font-medium tracking-[-0.025em] md:text-2xl">
                  {title}
                </h2>

                <p className="mt-2 text-xs uppercase tracking-[0.12em] text-white/35">
                  {category}
                </p>

              </div>

              <span className="pt-1 text-[10px] text-white/20">
                0{index + 1}
              </span>

            </div>

          </Link>

        ))}

      </div>

      {/* =====================================================
          VOLVER ARRIBA
      ====================================================== */}

      <div className="mx-auto mt-24 max-w-7xl border-t border-white/10 pt-8">

        <a
          href="#top"
          className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-white/35 transition hover:text-white"
        >
          Volver arriba
          <ArrowUp className="h-3 w-3 transition-transform group-hover:-translate-y-1" />
        </a>

      </div>

    </main>
  );
}
