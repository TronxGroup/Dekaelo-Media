import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  ["bice", "BICE", "Contenido corporativo", "/projects/bice/hero.png"],
  ["lolosaurios", "LOLOSAURIOS", "Entretenimiento", "/projects/lolosaurios/hero.png"],
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
    <main className="min-h-screen bg-[#050505] px-5 py-24 text-white md:px-10 md:py-32">
      <div className="mb-16 flex items-end justify-between gap-8">
        <div>
          <Link
            href="/"
            className="text-[10px] uppercase tracking-[0.25em] text-white/40 transition hover:text-white"
          >
            ← Dekaelo Media
          </Link>

          <p className="mt-12 text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">
            Nuestro trabajo
          </p>

          <h1 className="mt-4 text-6xl font-medium tracking-[-0.06em] md:text-8xl">
            Proyectos
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2">
        {projects.map(([slug, title, category, image], index) => (
          <Link
            href={`/proyectos/${slug}`}
            key={slug}
            className={`group ${
              index === projects.length - 1 ? "md:col-span-2" : ""
            }`}
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-white/5">
              <Image
                src={image}
                alt={title}
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

            <div className="mt-5 flex justify-between gap-6">
              <div>
                <h2 className="text-xl font-medium tracking-[-0.025em]">
                  {title}
                </h2>

                <p className="mt-1 text-xs text-white/35">
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
    </main>
  );
}
