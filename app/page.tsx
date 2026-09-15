import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Dekaelo Media",
  description: "Distintas voces, una misma producción.",
};

const projects = [
  {
    slug: "bice",
    title: "BICE",
    category: "Contenido corporativo",
    image: "/projects/bice/hero.png",
  },
  {
    slug: "lolosaurios",
    title: "LOLOSAURIOS",
    category: "Entretenimiento",
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
    category: "Industria · Tecnología",
    image: "/projects/break-industrial/hero.png",
  },
  {
    slug: "creando-lideres-para-asia",
    title: "CREANDO LÍDERES PARA ASIA",
    category: "Contenido internacional",
    image: "/projects/creando-lideres-asia/hero.png",
  },
];

export default function Home() {
  return (
    <main className="bg-[#050505] text-white">
      <header className="fixed left-0 top-0 z-50 w-full">
        <div className="flex items-center justify-between px-5 py-5 md:px-10 md:py-7">
          <Link href="/" aria-label="Dekaelo Media">
            <Image
              src="/dekaelo-logo.png"
              alt="Dekaelo Media"
              width={220}
              height={80}
              priority
              className="h-auto w-[135px] md:w-[165px]"
            />
          </Link>

          <nav className="flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] md:gap-10 md:text-[11px]">
            <a href="#proyectos" className="text-white/75 transition hover:text-white">
              Proyectos
            </a>
            <a href="#nosotros" className="hidden text-white/75 transition hover:text-white sm:block">
              Nosotros
            </a>
            <a href="#contacto" className="text-white/75 transition hover:text-white">
              Contacto
            </a>
          </nav>
        </div>
      </header>

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
                Producción audiovisual
              </p>

              <h1 className="max-w-5xl text-[clamp(2.8rem,7.5vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.06em]">
                Distintas voces,
                <br />
                <span className="text-white/65">una misma producción.</span>
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

      <section id="proyectos" className="px-5 py-24 md:px-10 md:py-36">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">
              Nuestro trabajo
            </p>
            <h2 className="mt-4 text-5xl font-medium tracking-[-0.05em] md:text-7xl">
              Proyectos
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-white/40">
            Contenido corporativo, entretenimiento, deporte, tecnología y
            conversaciones para distintas audiencias.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/proyectos/${project.slug}`}
              className={`group ${index === projects.length - 1 ? "md:col-span-2" : ""}`}
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes={index === projects.length - 1 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/25" />
                <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black opacity-0 transition group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.025em]">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/35">{project.category}</p>
                </div>
                <span className="pt-1 text-[10px] text-white/20">0{index + 1}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="nosotros" className="border-y border-white/10 px-5 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">
            Dekaelo Media
          </p>

          <h2 className="mt-8 max-w-6xl text-[clamp(2.7rem,6.5vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.06em]">
            Creamos historias.
            <br />
            <span className="text-white/35">Conectamos audiencias.</span>
          </h2>

          <div className="mt-14 grid md:grid-cols-2">
            <div />
            <p className="max-w-xl text-base leading-relaxed text-white/50 md:text-lg">
              Dekaelo Media desarrolla y produce contenidos audiovisuales para
              marcas, empresas y audiencias. Desde conversaciones corporativas
              hasta entretenimiento, deporte, tecnología y contenido original.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">
              Capacidades
            </p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
              Una producción.
              <br />
              Distintos formatos.
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
                  <span className="text-[10px] text-[#f51b24]">0{index + 1}</span>
                  <span className="text-lg text-white/75 transition group-hover:text-white md:text-2xl">
                    {item}
                  </span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/20 transition group-hover:text-[#f51b24]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="relative overflow-hidden border-t border-white/10 px-5 py-32 md:px-10 md:py-44">
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

          <a
            href="mailto:contacto@dekaelo.cl"
            className="group mt-12 inline-flex items-center gap-4 border border-white/20 px-7 py-4 text-xs uppercase tracking-[0.18em] transition hover:border-[#f51b24] hover:bg-[#f51b24]"
          >
            Contactar a Dekaelo
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Image
              src="/dekaelo-logo.png"
              alt="Dekaelo Media"
              width={220}
              height={80}
              className="w-[140px]"
            />
            <p className="mt-5 text-xs text-white/30">
              Distintas voces, una misma producción.
            </p>
          </div>

          <div className="flex gap-7 text-[10px] uppercase tracking-[0.18em] text-white/35">
            <a href="#proyectos" className="transition hover:text-white">Proyectos</a>
            <a href="#nosotros" className="transition hover:text-white">Nosotros</a>
            <a href="#contacto" className="transition hover:text-white">Contacto</a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-[10px] text-white/20">
          © {new Date().getFullYear()} Dekaelo Media
        </div>
      </footer>
    </main>
  );
}
