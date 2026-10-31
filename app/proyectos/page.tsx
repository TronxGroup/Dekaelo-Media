import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  ArrowLeft,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Proyectos | Dekaelo Media",
  description:
    "Conoce proyectos de comunicación, programas digitales y producciones audiovisuales realizadas por Dekaelo Media para empresas, marcas y organizaciones.",
  alternates: {
    canonical: "/proyectos",
  },
};

const projects = [
  {
    slug: "bice",
    title: "BICE",
    category: "Comunicación interna · Cultura organizacional",
    image: "/projects/bice/hero.png",
  },
  {
    slug: "lolosaurios",
    title: "LOLOSAURIOS",
    category: "Programa digital · YouTube e Instagram",
    image: "/projects/lolosaurios/hero.png",
  },
  {
    slug: "futbol-y-parrilla",
    title: "FÚTBOL Y PARRILLA",
    category: "Deporte · Entretenimiento",
    image: "/projects/futbol-y-parrilla/hero.png",
  },
  {
    slug: "break-industrial",
    title: "BREAK INDUSTRIAL",
    category: "Contenido B2B · Industria y tecnología",
    image: "/projects/break-industrial/hero.png",
  },
  {
    slug: "creando-lideres-para-asia",
    title: "CREANDO LÍDERES PARA ASIA",
    category: "Comunicación institucional · Internacional",
    image: "/projects/creando-lideres-asia/hero.png",
  },
];

export default function ProjectsPage() {
  return (
    <main
      id="top"
      className="min-h-screen bg-[#050505] px-5 pb-24 pt-36 text-white md:px-10 md:pb-32 md:pt-44"
    >
      {/* HEADER */}

      <div className="mx-auto max-w-7xl">
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
            Explorar proyectos
            <ArrowDown className="h-3 w-3 transition-transform group-hover:translate-y-1" />
          </a>
        </div>

        {/* INTRODUCCIÓN */}

        <div className="mb-20">
          <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">
            Ideas, contenidos y resultados
          </p>

          <h1 className="mt-4 text-[clamp(4rem,9vw,8rem)] font-medium leading-[0.88] tracking-[-0.065em]">
            Proyectos
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/45 md:text-lg">
            Cada proyecto responde a una necesidad distinta: comunicar,
            conectar con una audiencia, fortalecer una marca o generar
            nuevas oportunidades. Conoce cómo transformamos esas ideas
            en producciones audiovisuales concretas.
          </p>
        </div>
      </div>

      {/* PROYECTOS */}

      <div
        id="proyectos"
        className="mx-auto grid max-w-7xl scroll-mt-28 grid-cols-1 gap-x-6 gap-y-20 md:grid-cols-2 md:gap-y-24"
      >
        {projects.map((project, index) => (
          <Link
            href={`/proyectos/${project.slug}`}
            key={project.slug}
            className={`group ${
              index === projects.length - 1 ? "md:col-span-2" : ""
            }`}
          >
            {/* IMAGEN */}

            <div className="relative aspect-[16/9] overflow-hidden bg-white/5">
              <Image
                src={project.image}
                alt={`${project.title} — Dekaelo Media`}
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
                  {project.title}
                </h2>

                <p className="mt-2 text-xs uppercase tracking-[0.12em] text-white/35">
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

      {/* MENSAJE DE POSICIONAMIENTO */}

      <section className="mx-auto mt-32 max-w-7xl border-t border-white/10 pt-16 md:mt-40">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">
              Nuestro aporte
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <h2 className="text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">
              No se trata solamente de grabar.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/45 md:text-lg">
              Aportamos dirección creativa, identidad visual y sonora,
              realización, edición y postproducción. También podemos
              encargarnos de la gestión y publicación de contenidos
              digitales. Nos involucramos en lo necesario para que cada
              proyecto tenga una propuesta audiovisual coherente y
              profesional.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="mx-auto mt-32 max-w-7xl border-t border-white/10 pt-16 md:mt-40">
        <div className="max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">
            Tu proyecto puede ser el próximo
          </p>

          <h2 className="mt-5 text-4xl font-medium leading-[1.05] tracking-[-0.05em] md:text-6xl">
            ¿Tienes una idea?
            <br />
            Nosotros la hacemos realidad.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/40">
            No necesitas tener el formato definido ni saber cómo
            producirlo. Cuéntanos qué quieres comunicar o conseguir.
            Nosotros podemos ayudarte a darle forma y llevarlo a la pantalla.
          </p>

          <Link
            href="/contacto"
            className="group mt-9 inline-flex items-center gap-4 border-b border-white/30 pb-3 text-sm transition hover:border-[#f51b24]"
          >
            Conversemos sobre tu proyecto
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </section>

      {/* VOLVER ARRIBA */}

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
