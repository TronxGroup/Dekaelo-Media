import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowUp,
  ArrowUpRight,
} from "lucide-react";

/* ============================================================
   TIPOS
============================================================ */

type Project = {
  title: string;
  subtitle: string;
  category: string;
  client: string;
  description: string;
  intro: string;
  videoId: string;
  challenge: string;
  solution: string;
  result: string;
  stats: [string, string][];
  ranking?: [string, string, string][];
  hero: string;
  images: string[];
};

/* ============================================================
   PROYECTOS
============================================================ */

const projects: Record<string, Project> = {
  bice: {
    title: "BICE",
    subtitle: "Nos une el nuevo BICE",
    category: "Comunicación interna · Cultura",
    client: "BICECORP",
    description: "Conversaciones que conectan.",
    intro:
      "Nos Une es un formato de comunicación interna creado para acompañar la integración entre BICECORP y Grupo Security y acercar a sus equipos a través de conversaciones con sus principales protagonistas.",
    videoId: "2r11AjLM1oM",

    challenge:
      "Acompañar el proceso de integración entre BICECORP y Grupo Security mediante un formato de comunicación cercano que conectara a la alta administración con sus colaboradores.",

    solution:
      "Dekaelo Media desarrolló el formato Nos Une, definiendo su estructura, ritmo y dinámica audiovisual. Desde 2024, está a cargo de su producción audiovisual, incluyendo entrevistas, registro y postproducción.",

    result:
      "Una serie activa que continúa desarrollándose y que ha acompañado la comunicación interna de BICE durante 2024, 2025 y 2026.",

    stats: [
      ["14+", "episodios producidos"],
      ["2024–2026", "producción continua"],
      ["ACTIVA", "serie vigente"],
    ],

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
    category: "Formato editorial · Entretenimiento",
    client: "José Luis Larraín",
    description: "La conversación que ya no existe en televisión.",
    intro:
      "Un programa de conversación y entretenimiento creado desde cero para recuperar el espíritu de la tertulia y llevarlo a una nueva audiencia digital.",

    videoId: "8638BE6Uumg",

    challenge:
      "Crear un programa de conversación con identidad propia, capaz de conectar con una audiencia adulta interesada en humor, cultura y actualidad.",

    solution:
      "Dekaelo Media desarrolló el concepto y el formato desde cero: estructura, dinámica de conversación, ritmo, identidad y lenguaje audiovisual. También asumió la producción de los episodios y el desarrollo de contenido para YouTube e Instagram.",

    result:
      "En poco más de tres meses y con 14 episodios publicados, el canal de YouTube alcanzó 2.757 suscriptores, 217.426 vistas orgánicas y 29.400 horas de reproducción. La cuenta de Instagram llegó a 16.000 seguidores. El 83% de las vistas provino de personas de 45 años o más, y casi la mitad del tiempo de reproducción ocurrió en televisores. Cifras al 22 de octubre de 2026.",

    stats: [
      ["217,4K", "vistas en YouTube"],
      ["29,4K", "horas de reproducción"],
      ["16.000", "seguidores en Instagram"],
      ["2.757", "suscriptores en YouTube"],
      ["14", "episodios publicados"],
      ["3", "meses desde el lanzamiento"],
    ],

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
    category: "Formato editorial · Deporte",
    client: "Ian Mac-Niven",
    description: "Historias, fútbol y conversación alrededor de la mesa.",
    intro:
      "Un programa que reúne fútbol, historias y conversación alrededor de una mesa, conectando a referentes del deporte con una audiencia digital.",

    videoId: "PLSfbZU_asQ",

    challenge:
      "Desarrollar un formato de conversación sobre fútbol chileno, capaz de convocar a referentes históricos del deporte y construir una audiencia digital.",

    solution:
      "Dekaelo Media desarrolló el formato, definiendo su estructura, ritmo, dinámica de conversación y lenguaje audiovisual. Además, estuvo a cargo de la producción de los primeros cuatro episodios, incluyendo registro, realización y postproducción.",

    result:
      "Los primeros cuatro episodios alcanzaron aproximadamente 318 mil vistas en conjunto dentro de una serie de 43 capítulos.",

    stats: [
      ["4", "episodios producidos por Dekaelo"],
      ["43", "episodios del proyecto"],
      ["~318K", "vistas en los primeros cuatro"],
    ],

    ranking: [
      ["1", "162.460", "1°"],
      ["2", "53.170", "6°"],
      ["3", "35.705", "12°"],
      ["4", "66.265", "3°"],
    ],

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
    category: "Formato editorial · Industria",
    client: "iGromi",
    description: "Conversaciones sobre innovación y transformación industrial.",
    intro:
      "Un espacio de conversación dedicado a innovación, tecnología e industria, desarrollado para generar contenido especializado y abrir conversaciones sobre los cambios del sector.",

    videoId: "2G7oKXKjPl8",

    challenge:
      "Crear un espacio de conversación que conectara innovación, industria y emprendimiento.",

    solution:
      "Dekaelo Media desarrolló el formato Break Industrial, definiendo su concepto, estructura, ritmo y dinámica de conversación. También estuvo a cargo de la producción audiovisual y postproducción de la serie.",

    result:
      "Ocho episodios producidos para generar contenido especializado y conversaciones sobre innovación, tecnología e industria.",

    stats: [
      ["8", "episodios producidos"],
      ["B2B", "contenido especializado"],
      ["INDUSTRIA", "innovación y tecnología"],
    ],

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
    category: "Serie audiovisual · Internacional",
    client: "Cámara de Comercio Asia Pacífico · APCC",
    description: "Conversaciones que conectan con Asia.",
    intro:
      "Una serie de conversación internacional desarrollada para conectar a empresarios, diplomáticos y líderes con las oportunidades comerciales entre Chile y Asia.",

    videoId: "byTylGKp-uI",

    challenge:
      "Posicionar digitalmente a la Cámara de Comercio Asia Pacífico como referente en las relaciones comerciales entre Chile y Asia.",

    solution:
      "Dekaelo Media desarrolló el formato de la serie, definiendo su concepto, estructura, ritmo y lenguaje audiovisual. La producción se desarrolló durante quince meses, con entrevistas a empresarios, diplomáticos y líderes internacionales.",

    result:
      "24 episodios producidos, más de 15 meses de continuidad editorial y más de 50 nuevos socios incorporados durante el período de emisión.",

    stats: [
      ["24", "episodios producidos"],
      ["+15", "meses de continuidad"],
      ["+50", "nuevos socios"],
    ],

    hero: "/projects/creando-lideres-asia/hero.png",

    images: [
      "/projects/creando-lideres-asia/01.png",
      "/projects/creando-lideres-asia/02.png",
      "/projects/creando-lideres-asia/03.png",
    ],
  },
};

/* ============================================================
   STATIC PARAMS
============================================================ */

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

/* ============================================================
   METADATA DINÁMICA
============================================================ */

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = projects[params.slug];

  if (!project) {
    return {
      title: "Proyecto no encontrado | Dekaelo Media",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${project.title} | Proyectos Dekaelo Media`,
    description: `${project.description} ${project.category}. Conoce cómo desarrollamos y producimos este proyecto audiovisual.`,

    alternates: {
      canonical: `/proyectos/${params.slug}`,
    },

    openGraph: {
      type: "website",
      title: `${project.title} | Dekaelo Media`,
      description: project.description,
      url: `/proyectos/${params.slug}`,
      images: [
        {
          url: project.hero,
          width: 1920,
          height: 1080,
          alt: `${project.title} — Dekaelo Media`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Dekaelo Media`,
      description: project.description,
      images: [project.hero],
    },
  };
}

/* ============================================================
   PÁGINA DEL PROYECTO
============================================================ */

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects[params.slug];

  if (!project) {
    notFound();
  }

  return (
    <main
      id="top"
      className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black"
    >

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative pt-36 md:pt-44">

        <div className="px-5 md:px-10">

          <div className="flex items-center justify-between">

            <Link
              href="/proyectos"
              className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/40 transition hover:text-white"
            >
              <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
              Todos los proyectos
            </Link>

            <a
              href="#proyecto"
              className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/30 transition hover:text-white md:inline-flex"
            >
              Conocer el proyecto
              <ArrowUpRight className="h-3 w-3" />
            </a>

          </div>

          <div className="mt-16 flex flex-col gap-3 md:flex-row md:items-center md:gap-8">

            <p className="text-[10px] uppercase tracking-[0.3em] text-[#f51b24]">
              {project.category}
            </p>

            <span className="hidden h-3 w-px bg-white/20 md:block" />

            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Cliente · {project.client}
            </p>

          </div>

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
          INTRODUCCIÓN
      ====================================================== */}

      <section
        id="proyecto"
        className="scroll-mt-28 border-b border-white/10 px-5 py-24 md:px-10 md:py-32"
      >

        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">

          <div className="md:col-span-4">

            <p className="text-[10px] uppercase tracking-[0.3em] text-[#f51b24]">
              El proyecto
            </p>

            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/40">
              {project.intro}
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

      <section className="px-5 py-24 md:px-10 md:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">

            <div>

              <p className="text-[10px] uppercase tracking-[0.3em] text-[#f51b24]">
                Una muestra del proyecto
              </p>

              <h2 className="mt-3 text-2xl font-medium md:text-3xl">
                Así se ve y se escucha.
              </h2>

            </div>

            <p className="text-xs text-white/30">
              Video publicado en YouTube
            </p>

          </div>

          <div className="relative aspect-video w-full overflow-hidden bg-black">

            <iframe
              src={`https://www.youtube.com/embed/${project.videoId}`}
              title={`${project.title} — Dekaelo Media`}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />

          </div>

        </div>

      </section>

      {/* =====================================================
          RESULTADOS
      ====================================================== */}

      <section className="border-y border-white/10 px-5 py-12 md:px-10 md:py-16">

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3">

          {project.stats.map(([number, label]) => (

            <div key={`${number}-${label}`}>

              <div className="text-3xl font-medium tracking-[-0.04em] md:text-5xl">
                {number}
              </div>

              <div className="mt-2 max-w-[200px] text-[10px] uppercase leading-relaxed tracking-[0.2em] text-white/35">
                {label}
              </div>

            </div>

          ))}

        </div>

      </section>

      {/* =====================================================
          RANKING — FÚTBOL Y PARRILLA
      ====================================================== */}

      {project.ranking && (

        <section className="border-b border-white/10 px-5 py-20 md:px-10 md:py-28">

          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">

            <div className="md:col-span-4">

              <p className="text-[10px] uppercase tracking-[0.3em] text-[#f51b24]">
                Audiencia
              </p>

              <h2 className="mt-5 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
                Primeros cuatro episodios
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/40">
                Dekaelo Media desarrolló el formato y produjo los primeros
                cuatro episodios dentro de una serie de 43 capítulos.
              </p>

            </div>

            <div className="md:col-span-7 md:col-start-6">

              <div className="border-t border-white/20">

                <div className="grid grid-cols-3 border-b border-white/10 py-4 text-[10px] uppercase tracking-[0.2em] text-white/35">
                  <span>Ep.</span>
                  <span>Vistas</span>
                  <span>Posición canal</span>
                </div>

                {project.ranking.map(([episode, views, position]) => (

                  <div
                    key={episode}
                    className="grid grid-cols-3 border-b border-white/10 py-5 text-sm"
                  >
                    <span>{episode}</span>
                    <span>{views}</span>
                    <span>{position}</span>
                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>

      )}

      {/* =====================================================
          EL TRABAJO DE DEKAELO
      ====================================================== */}

      <section className="px-5 py-24 md:px-10 md:py-36">

        <div className="mx-auto max-w-7xl">

          <div className="mb-20 max-w-3xl md:mb-28">

            <p className="text-[10px] uppercase tracking-[0.3em] text-[#f51b24]">
              Cómo lo hicimos
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] md:text-6xl">
              De la idea
              <br />
              a la producción.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/45 md:text-xl">
              Cada proyecto comienza con una necesidad distinta. Nuestro
              trabajo consiste en entenderla, encontrar el formato adecuado
              y convertirlo en una producción audiovisual concreta.
            </p>

          </div>

          <div className="grid gap-y-20 md:grid-cols-12 md:gap-y-28">

            {/* DESAFÍO */}

            <div className="md:col-span-4">

              <p className="text-[10px] uppercase tracking-[0.3em] text-[#f51b24]">
                01
              </p>

              <h3 className="mt-5 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
                Qué había que crear
              </h3>

            </div>

            <div className="md:col-span-7 md:col-start-6">

              <p className="text-xl leading-relaxed text-white/65 md:text-3xl">
                {project.challenge}
              </p>

            </div>

            {/* DESARROLLO Y PRODUCCIÓN */}

            <div className="md:col-span-4">

              <p className="text-[10px] uppercase tracking-[0.3em] text-[#f51b24]">
                02
              </p>

              <h3 className="mt-5 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
                Qué desarrollamos
              </h3>

            </div>

            <div className="md:col-span-7 md:col-start-6">

              <p className="text-xl leading-relaxed text-white/65 md:text-3xl">
                {project.solution}
              </p>

            </div>

            {/* RESULTADO */}

            <div className="md:col-span-4">

              <p className="text-[10px] uppercase tracking-[0.3em] text-[#f51b24]">
                03
              </p>

              <h3 className="mt-5 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
                Qué conseguimos
              </h3>

            </div>

            <div className="md:col-span-7 md:col-start-6">

              <p className="text-xl leading-relaxed text-white/65 md:text-3xl">
                {project.result}
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CAPACIDADES
      ====================================================== */}

      <section className="border-y border-white/10 px-5 py-20 md:px-10 md:py-28">

        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">

          <div className="md:col-span-4">

            <p className="text-[10px] uppercase tracking-[0.3em] text-[#f51b24]">
              Dekaelo Media
            </p>

            <h2 className="mt-5 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
              Lo que hacemos
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/40">
              Podemos desarrollar un proyecto desde cero o incorporarnos
              en las etapas que necesites.
            </p>

          </div>

          <div className="md:col-span-7 md:col-start-6">

            <div className="grid border-t border-white/10 md:grid-cols-2">

              {[
                "Desarrollo de ideas y formatos",
                "Concepto y estructura",
                "Identidad audiovisual",
                "Dirección",
                "Producción y grabación",
                "Edición y postproducción",
              ].map((item, index) => (

                <div
                  key={item}
                  className="border-b border-white/10 py-5 text-sm text-white/65 md:pr-8"
                >

                  <span className="mr-4 text-[10px] text-[#f51b24]">
                    0{index + 1}
                  </span>

                  {item}

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          GALERÍA
      ====================================================== */}

      <section className="px-5 py-24 md:px-10 md:py-36">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10">

            <p className="text-[10px] uppercase tracking-[0.3em] text-[#f51b24]">
              Detrás del proyecto
            </p>

            <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              Imágenes de la producción.
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

        </div>

      </section>

      {/* =====================================================
          VOLVER ARRIBA
      ====================================================== */}

      <div className="border-t border-white/10 px-5 py-8 md:px-10">

        <div className="mx-auto max-w-7xl">

          <a
            href="#top"
            className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-white/35 transition hover:text-white"
          >
            Volver arriba

            <ArrowUp className="h-3 w-3 transition-transform group-hover:-translate-y-1" />
          </a>

        </div>

      </div>

      {/* =====================================================
          CTA FINAL
      ====================================================== */}

      <section className="border-t border-white/10 px-5 py-28 md:px-10 md:py-36">

        <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">

          <div>

            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#f51b24]">
              ¿Tienes una idea?
            </p>

            <h2 className="max-w-4xl text-[clamp(3rem,7vw,6rem)] font-medium leading-[0.88] tracking-[-0.06em]">
              Nosotros la hacemos
              <br />
              <span className="text-white/35">
                realidad.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/45 md:text-lg">
              Cuéntanos qué te gustaría crear. Podemos ayudarte a desarrollar
              el concepto, encontrar el formato y producirlo de principio a fin.
            </p>

          </div>

          <Link
            href="/contacto"
            className="group inline-flex shrink-0 items-center justify-between gap-8 border border-white/20 px-6 py-5 text-[10px] uppercase tracking-[0.2em] transition hover:border-[#f51b24] hover:bg-[#f51b24]"
          >
            Cuéntanos tu idea

            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

        </div>

      </section>

    </main>
  );
}
