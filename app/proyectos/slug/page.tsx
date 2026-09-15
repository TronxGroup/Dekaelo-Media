import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const projects = {
  bice: {
    title: "BICE",
    subtitle: "Nos une el nuevo BICE",
    category: "Contenido corporativo",
    description: "Conversaciones que conectan.",
    hero: "/projects/bice/hero.jpg",
    images: ["/projects/bice/01.jpg", "/projects/bice/02.jpg", "/projects/bice/03.jpg"],
  },
  lolosaurios: {
    title: "LOLOSAURIOS",
    subtitle: "La Nueva Tertulia",
    category: "Entretenimiento",
    description: "La conversación que ya no existe en televisión.",
    hero: "/projects/lolosaurios/hero.jpg",
    images: ["/projects/lolosaurios/01.jpg", "/projects/lolosaurios/02.jpg", "/projects/lolosaurios/03.jpg"],
  },
  "futbol-y-parrilla": {
    title: "FÚTBOL Y PARRILLA",
    subtitle: "Fútbol, historias y buena parrilla.",
    category: "Deporte · Entretenimiento",
    description: "Historias, fútbol y conversación alrededor de la mesa.",
    hero: "/projects/futbol-y-parrilla/hero.jpg",
    images: ["/projects/futbol-y-parrilla/01.jpg", "/projects/futbol-y-parrilla/02.jpg", "/projects/futbol-y-parrilla/03.jpg"],
  },
  "break-industrial": {
    title: "BREAK INDUSTRIAL",
    subtitle: "Tecnología · Innovación · Industria",
    category: "Industria · Tecnología",
    description: "Conversaciones sobre innovación y transformación industrial.",
    hero: "/projects/break-industrial/hero.jpg",
    images: ["/projects/break-industrial/01.jpg", "/projects/break-industrial/02.jpg", "/projects/break-industrial/03.jpg"],
  },
  "creando-lideres-para-asia": {
    title: "CREANDO LÍDERES PARA ASIA",
    subtitle: "Visión global · Liderazgo · Impacto regional",
    category: "Contenido internacional",
    description: "Conversaciones que conectan con Asia.",
    hero: "/projects/creando-lideres-asia/hero.jpg",
    images: ["/projects/creando-lideres-asia/01.jpg", "/projects/creando-lideres-asia/02.jpg", "/projects/creando-lideres-asia/03.jpg"],
  },
} as const;

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];

  if (!project) notFound();

  return (
    <main className="bg-[#050505] text-white">
      <header className="fixed left-0 top-0 z-50 w-full px-5 py-5 md:px-10 md:py-7">
        <Link href="/" className="text-[10px] uppercase tracking-[0.25em] text-white/70 hover:text-white">
          Dekaelo Media
        </Link>
      </header>

      <section className="relative pt-28 md:pt-36">
        <div className="px-5 md:px-10">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white"
          >
            <ArrowLeft className="h-3 w-3" />
            Todos los proyectos
          </Link>

          <p className="mt-16 text-[10px] uppercase tracking-[0.3em] text-[#f51b24]">
            {project.category}
          </p>

          <h1 className="mt-5 max-w-6xl text-[clamp(3rem,8vw,8rem)] font-medium leading-[0.88] tracking-[-0.065em]">
            {project.title}
          </h1>

          <p className="mt-7 text-lg text-white/45 md:text-xl">{project.subtitle}</p>
        </div>

        <div className="mt-14 relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={project.hero}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="grid md:grid-cols-2">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#f51b24]">
              El proyecto
            </p>
          </div>
          <p className="max-w-xl text-2xl leading-snug text-white/70 md:text-4xl">
            {project.description}
          </p>
        </div>

        <div className="mt-24 space-y-8 md:mt-36">
          {project.images.map((image, index) => (
            <div
              key={image}
              className={`relative aspect-[16/9] overflow-hidden ${index === 1 ? "md:ml-[16%]" : ""} ${index === 2 ? "md:mr-[16%]" : ""}`}
            >
              <Image
                src={image}
                alt={`${project.title} — fotografía ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 84vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-28 md:px-10 md:py-36">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl font-medium tracking-[-0.04em] md:text-6xl">
            ¿Hacemos
            <br />
            algo juntos?
          </h2>
          <a
            href="mailto:contacto@dekaelo.cl"
            className="group inline-flex items-center gap-3 border border-white/20 px-6 py-4 text-[10px] uppercase tracking-[0.2em] transition hover:border-[#f51b24] hover:bg-[#f51b24]"
          >
            Contactar
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}

