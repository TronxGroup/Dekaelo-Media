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

    video: "https://www.youtube.com/embed/VIDEO_ID_BICE",

    objective:
      "Crear un espacio audiovisual para conversar, conectar y acercar las distintas voces que forman parte de BICE.",

    work:
      "Dekaelo Media estuvo a cargo de la producción audiovisual, registro, realización y postproducción del contenido.",

    result:
      "Una serie de conversaciones desarrollada con una identidad audiovisual consistente y preparada para su difusión en plataformas digitales.",

    hero: "/projects/bice/hero.png",

    images: [
      "/projects/bice/01.png",
      "/projects/bice/02.png",
      "/projects/bice/03.png",
    ],
  },

  lolosaurios: {
    title: "LOLOSAURIOS",
    subtitle: "La Nueva Tertulia",
    category: "Entretenimiento",
    description:
      "La conversación que ya no existe en televisión.",

    video: "https://www.youtube.com/embed/VIDEO_ID_LOLOSAURIOS",

    objective:
      "Crear un espacio de conversación y entretenimiento que recuperara el espíritu de las grandes tertulias televisivas.",

    work:
      "Dekaelo Media desarrolló la producción audiovisual del programa, desde la grabación multicámara hasta la edición y generación de contenidos para plataformas digitales.",

    result:
      "Un formato audiovisual propio diseñado para televisión, YouTube y redes sociales, con una identidad reconocible y capacidad de generar contenido adicional a partir de cada episodio.",

    hero: "/projects/lolosaurios/hero.png",

    images: [
      "/projects/lolosaurios/01.png",
      "/projects/lolosaurios/02.png",
      "/projects/lolosaurios/03.png",
    ],
  },

  "futbol-y-parrilla": {
    title: "FÚTBOL Y PARRILLA",
    subtitle: "Fútbol, historias y buena parrilla.",
    category: "Deporte · Entretenimiento",
    description:
      "Historias, fútbol y conversación alrededor de la mesa.",

    video: "https://www.youtube.com/embed/VIDEO_ID_FUTBOL",

    objective:
      "Desarrollar un formato que combinara conversación, fútbol y entretenimiento alrededor de una experiencia cercana y cotidiana.",

    work:
      "Producción audiovisual, registro, realización y postproducción del contenido.",

    result:
      "Un formato de entretenimiento construido alrededor de la conversación y la cultura futbolera.",

    hero: "/projects/futbol-y-parrilla/hero.png",

    images: [
      "/projects/futbol-y-parrilla/01.png",
      "/projects/futbol-y-parrilla/02.png",
      "/projects/futbol-y-parrilla/03.png",
    ],
  },

  "break-industrial": {
    title: "BREAK INDUSTRIAL",
    subtitle: "Tecnología · Innovación · Industria",
    category: "Industria · Tecnología",
    description:
      "Conversaciones sobre innovación y transformación industrial.",

    video: "https://www.youtube.com/embed/VIDEO_ID_BREAK",

    objective:
      "Generar contenido audiovisual capaz de acercar temas de industria, tecnología e innovación a una audiencia profesional.",

    work:
      "Producción audiovisual, registro de entrevistas y postproducción de contenido.",

    result:
      "Contenido audiovisual diseñado para comunicar conocimiento y experiencias de manera clara y atractiva.",

    hero: "/projects/break-industrial/hero.png",

    images: [
      "/projects/break-industrial/01.png",
      "/projects/break-industrial/02.png",
      "/projects/break-industrial/03.png",
    ],
  },

  "creando-lideres-para-asia": {
    title: "CREANDO LÍDERES PARA ASIA",
    subtitle: "Visión global · Liderazgo · Impacto regional",
    category: "Contenido internacional",
    description:
      "Conversaciones que conectan con Asia.",

    video: "https://www.youtube.com/embed/VIDEO_ID_ASIA",

    objective:
      "Crear conversaciones audiovisuales en torno al liderazgo, la visión internacional y las relaciones con Asia.",

    work:
      "Producción audiovisual, registro de entrevistas y desarrollo de contenidos para plataformas digitales.",

    result:
      "Una propuesta audiovisual orientada a conectar experiencias, liderazgo y oportunidades entre Chile y Asia.",

    hero: "/projects/creando-lideres-asia/hero.png",

    images: [
      "/projects/creando-lideres-asia/01.png",
      "/projects/creando-lideres-asia/02.png",
      "/projects/creando-lideres-asia/03.png",
    ],
  },
} as const;

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const project = projects[slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-[#050505] text-white">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="fixed left-0 top-0 z-50 w-full px-5 py-5 md:px-10 md:py-7">
        <Link
          href="/"
          className="text-[10px] uppercase tracking-[0.25em] text-white/70 transition hover:text-white"
        >
          Dekaelo Media
        </Link>
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative pt-28 md:pt-36">

        <div className="px-5 md:px-10">

          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/40 transition hover:text-white"
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

          <p className="mt-7 max-w-2xl text-lg text-white/45 md:text-xl">
            {project.subtitle}
          </p>

        </div>

        <div className="relative mt-14 aspect-[16/9] w-full overflow-hidden">
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

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="px-5 py-24 md:px-10 md:py-32">

        <div className="grid gap-12 md:grid-cols-12">

          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#f51b24]">
              El proyecto
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-6">

            <p className="text-3xl leading-tight tracking-[-0.03em] text-white/80 md:text-5xl">
              {project.description}
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          VIDEO
      ====================================================== */}

      <section className="px-5 pb-24 md:px-10 md:pb-32">

        <div className="mb-8 flex items-end justify-between">

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#f51b24]">
              Video
            </p>

            <h2 className="mt-3 text-2xl font-medium md:text-3xl">
              El proyecto en acción
            </h2>
          </div>

        </div>

        <div className="relative aspect-video w-full overflow-hidden bg-black">

          <iframe
            src={project.video}
            title={`${project.title} — Dekaelo Media`}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />

        </div>

      </section>

      {/* =====================================================
          PROJECT DETAILS
      ====================================================== */}

      <section className="border-t border-white/10 px-5 py-24 md:px-10 md:py-32">

        <div className="grid gap-20 md:grid-cols-12">

          {/* OBJECTIVE */}

          <div className="md:col-span-4">

            <p className="text-[10px] uppercase tracking-[0.3em] text-[#f51b24]">
              Objetivo
            </p>

            <h2 className="mt-5 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
              ¿Qué buscábamos?
            </h2>

          </div>

          <div className="md:col-span-7 md:col-start-6">

            <p className="text-xl leading-relaxed text-white/65 md:text-3xl">
              {project.objective}
            </p>

          </div>

          {/* WHAT WE DID */}

          <div className="md:col-span-4">

            <p className="text-[10px] uppercase tracking-[0.3em] text-[#f51b24]">
              Producción
            </p>

            <h2 className="mt-5 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
              Lo que hicimos
            </h2>

          </div>

          <div className="md:col-span-7 md:col-start-6">

            <p className="text-xl leading-relaxed text-white/65 md:text-3xl">
              {project.work}
            </p>

          </div>

          {/* RESULT */}

          <div className="md:col-span-4">

            <p className="text-[10px] uppercase tracking-[0.3em] text-[#f51b24]">
              Resultado
            </p>

            <h2 className="mt-5 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
              El resultado
            </h2>

          </div>

          <div className="md:col-span-7 md:col-start-6">

            <p className="text-xl leading-relaxed text-white/65 md:text-3xl">
              {project.result}
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          GALERÍA
      ====================================================== */}

      <section className="px-5 pb-24 md:px-10 md:pb-36">

        <div className="mb-10">

          <p className="text-[10px] uppercase tracking-[0.3em] text-[#f51b24]">
            Galería
          </p>

          <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
            Detrás del proyecto
          </h2>

        </div>

        <div className="space-y-8 md:space-y-12">

          {project.images.map((image, index) => (

            <div
              key={image}
              className={`relative aspect-[16/9] overflow-hidden ${
                index === 1 ? "md:ml-[16%]" : ""
              } ${
                index === 2 ? "md:mr-[16%]" : ""
              }`}
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

      {/* =====================================================
          CONTACT
      ====================================================== */}

      <section className="border-t border-white/10 px-5 py-28 md:px-10 md:py-36">

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          <div>

            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#f51b24]">
              ¿Tienes un proyecto?
            </p>

            <h2 className="text-4xl font-medium tracking-[-0.04em] md:text-6xl">
              ¿Hacemos
              <br />
              algo juntos?
            </h2>

          </div>

          <a
            href="mailto:info@dekaelomedia.com"
            className="group inline-flex items-center gap-3 border border-white/20 px-6 py-4 text-[10px] uppercase tracking-[0.2em] transition hover:border-[#f51b24] hover:bg-[#f51b24]"
          >
            Contactar

            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />

          </a>

        </div>

      </section>

    </main>
  );
}
