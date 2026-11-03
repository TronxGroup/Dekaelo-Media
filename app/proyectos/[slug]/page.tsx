import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

/* ============================================================
   CONFIGURACIÓN — EDITAR AQUÍ
============================================================ */

// WhatsApp: número en formato internacional, sin "+" ni espacios.
const WHATSAPP_NUMBER = "569XXXXXXXX";

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
  valueTitle: string;
  valueDescription: string;
  stats: [string, string][];
  capabilities: string[];
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
    description: "Conversaciones que conectan a toda una organización.",
    intro:
      "Nos Une es una serie audiovisual de comunicación interna que acompaña la integración entre BICECORP y Grupo Security, acercando a sus equipos a través de conversaciones con sus principales protagonistas.",

    videoId: "2r11AjLM1oM",

    challenge:
      "Acompañar el proceso de integración entre BICECORP y Grupo Security mediante un contenido cercano, capaz de conectar a la alta administración con una comunidad de más de 6.000 colaboradores.",

    solution:
      "Dekaelo Media estuvo a cargo de la dirección creativa y realización audiovisual de la serie. Desarrolló su identidad visual y sonora, la selección musical, las piezas de apertura y cierre, el tratamiento de imagen y color, y el lenguaje de edición. También realizó las grabaciones y la postproducción de los episodios.",

    result:
      "Una serie audiovisual con identidad propia y continuidad de producción durante 2024, 2025 y 2026, concebida como un canal de comunicación interna para una organización de más de 6.000 colaboradores.",

    valueTitle: "Comunicación interna a escala.",
    valueDescription:
      "Un espacio audiovisual que permite acercar a los equipos a sus líderes, transmitir mensajes institucionales y acompañar procesos importantes de transformación organizacional.",

    stats: [
      ["6.000+", "colaboradores"],
      ["14+", "episodios producidos"],
      ["2024–2026", "producción continua"],
    ],

    capabilities: [
      "Dirección creativa y audiovisual",
      "Identidad visual y sonora",
      "Selección musical y diseño sonoro",
      "Piezas de apertura y cierre",
      "Dirección de grabación",
      "Tratamiento de imagen y color",
      "Edición y montaje",
      "Postproducción",
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
    category: "Programa digital · YouTube",
    client: "José Luis Larraín",
    description: "Una idea que se convirtió en un programa y una comunidad digital.",
    intro:
      "Lolosaurios es un programa de conversación y entretenimiento que recupera el espíritu de la tertulia: cuatro participantes, distintas miradas y conversaciones sobre cultura, actualidad y experiencias de vida.",

    videoId: "8638BE6Uumg",

    challenge:
      "El punto de partida fue una idea sencilla: reunir a cuatro personas para conversar semanalmente. El desafío era convertir esa premisa en un programa con identidad propia y construir una presencia digital capaz de conectar con una audiencia adulta.",

    solution:
      "Dekaelo Media desarrolló toda la identidad audiovisual del programa: identidad gráfica, selección musical, intro, cortinas y cierre, tratamiento de imagen y color, dirección audiovisual, montaje y ritmo narrativo. También asumió la edición y postproducción de los episodios, además de la gestión de los canales de YouTube e Instagram, incluyendo adaptación, preparación y publicación de contenidos.",

    result:
      "En poco más de tres meses, el proyecto alcanzó 217.426 visualizaciones orgánicas en YouTube, 29.400 horas de reproducción y 16.000 seguidores en Instagram. El canal llegó a 2.757 suscriptores con 14 episodios publicados. Cifras al 22 de octubre de 2026.",

    valueTitle: "De una idea a una presencia digital.",
    valueDescription:
      "El proyecto muestra cómo una idea puede transformarse en un programa reconocible, con identidad audiovisual consistente, publicaciones periódicas y una comunidad que encuentra en YouTube e Instagram nuevos espacios para seguir la conversación.",

    stats: [
      ["217,4K", "vistas en YouTube"],
      ["29,4K", "horas de reproducción"],
      ["16.000", "seguidores en Instagram"],
      ["2.757", "suscriptores en YouTube"],
      ["14", "episodios publicados"],
      ["3", "meses desde el lanzamiento"],
    ],

    capabilities: [
      "Dirección audiovisual",
      "Identidad gráfica y audiovisual",
      "Selección musical, intro, cortinas y cierre",
      "Tratamiento de imagen y color",
      "Edición, montaje y ritmo narrativo",
      "Postproducción",
      "Gestión de canales de YouTube e Instagram",
      "Adaptación y publicación de contenidos",
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
    category: "Deporte · Entretenimiento",
    client: "Ian Mac-Niven",
    description: "Historias, fútbol y conversación alrededor de la mesa.",
    intro:
      "Un programa que reúne fútbol, historias y conversación alrededor de una mesa, conectando a referentes del deporte con una audiencia digital.",

    videoId: "PLSfbZU_asQ",

    challenge:
      "Llevar una propuesta de conversación sobre fútbol chileno a una producción audiovisual atractiva, con referentes históricos del deporte y una puesta en escena adecuada para plataformas digitales.",

    solution:
      "Dekaelo Media estuvo a cargo de la dirección y realización audiovisual de los primeros cuatro episodios. El trabajo incluyó el registro, la dirección de las grabaciones, el tratamiento visual, el montaje, el ritmo narrativo y la postproducción.",

    result:
      "Los primeros cuatro episodios producidos por Dekaelo alcanzaron aproximadamente 318 mil visualizaciones en conjunto, dentro de una serie de 43 capítulos.",

    valueTitle: "Contenido que encuentra a su audiencia.",
    valueDescription:
      "Una producción audiovisual pensada para llevar las historias y conversaciones del deporte a una audiencia digital, con una puesta en escena y un tratamiento editorial propios.",

    stats: [
      ["4", "episodios producidos por Dekaelo"],
      ["43", "episodios del proyecto"],
      ["~318K", "vistas en los primeros cuatro"],
    ],

    capabilities: [
      "Dirección audiovisual",
      "Dirección de grabación",
      "Tratamiento visual",
      "Edición y montaje",
      "Ritmo narrativo",
      "Postproducción",
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
    category: "Contenido B2B · Industria",
    client: "iGromi",
    description: "Conversaciones que abren oportunidades en la industria.",
    intro:
      "Un espacio de conversación dedicado a innovación, tecnología e industria, que reúne a invitados relevantes para abordar los cambios y desafíos del sector.",

    videoId: "2G7oKXKjPl8",

    challenge:
      "Generar conversaciones con representantes de la industria, la innovación y el emprendimiento, creando un espacio para compartir conocimientos y acercar a distintos actores del sector.",

    solution:
      "Dekaelo Media estuvo a cargo de la dirección creativa y realización audiovisual de la serie. Desarrolló la identidad visual y sonora, la selección musical y los elementos gráficos, además de dirigir las grabaciones y realizar el montaje, tratamiento de imagen y sonido y postproducción de los ocho episodios.",

    result:
      "Ocho episodios producidos y más de 16 empresas invitadas. El cliente valoró especialmente las relaciones comerciales que pudo desarrollar a partir de las conversaciones y los vínculos establecidos con los invitados del programa.",

    valueTitle: "El contenido también puede generar negocios.",
    valueDescription:
      "En proyectos B2B, una conversación bien planteada puede ser mucho más que una pieza de comunicación: puede convertirse en una oportunidad para acercarse a potenciales clientes, conocer actores relevantes y construir relaciones comerciales dentro de una industria.",

    stats: [
      ["8", "episodios producidos"],
      ["16+", "empresas invitadas"],
    ],

    capabilities: [
      "Dirección creativa y audiovisual",
      "Identidad visual y sonora",
      "Selección musical y elementos gráficos",
      "Dirección de grabación",
      "Edición y montaje",
      "Tratamiento de imagen y sonido",
      "Postproducción",
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
    category: "Comunicación institucional · Internacional",
    client: "Cámara de Comercio Asia Pacífico · APCC",
    description: "Conversaciones que conectan con Asia.",
    intro:
      "Una serie de entrevistas y conversaciones con empresarios, diplomáticos y líderes internacionales, enfocada en las oportunidades comerciales y las relaciones entre Chile y Asia.",

    videoId: "byTylGKp-uI",

    challenge:
      "Dar visibilidad a las actividades y conversaciones de la Cámara de Comercio Asia Pacífico, fortaleciendo su presencia digital y acercando sus contenidos a empresarios y líderes interesados en las relaciones comerciales entre Chile y Asia.",

    solution:
      "Dekaelo Media estuvo a cargo de la dirección y realización audiovisual de la serie durante quince meses. El trabajo incluyó la dirección de las grabaciones, el tratamiento visual y sonoro, el montaje y la postproducción de las entrevistas a empresarios, diplomáticos y líderes internacionales.",

    result:
      "24 episodios producidos, más de 15 meses de continuidad y más de 50 nuevos socios incorporados durante el período de emisión.",

    valueTitle: "Visibilidad y continuidad institucional.",
    valueDescription:
      "Una serie audiovisual que permitió dar espacio a las voces de distintos líderes, mantener una presencia comunicacional sostenida y acompañar los objetivos de vinculación de la Cámara.",

    stats: [
      ["24", "episodios producidos"],
      ["+15", "meses de continuidad"],
      ["+50", "nuevos socios"],
    ],

    capabilities: [
      "Dirección audiovisual",
      "Dirección de grabación",
      "Tratamiento visual y sonoro",
      "Edición y montaje",
      "Postproducción",
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
    description: `${project.description} ${project.category}. Conoce el trabajo de dirección creativa y producción audiovisual de Dekaelo Media.`,
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

  const capabilities = project.capabilities;

  // Siguiente proyecto (vuelve al primero al llegar al final).
  const slugs = Object.keys(projects);
  const nextSlug = slugs[(slugs.indexOf(params.slug) + 1) % slugs.length];
  const nextProject = projects[nextSlug];

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola, vi el proyecto ${project.title} en el sitio de Dekaelo Media y quiero conversar sobre algo similar.`,
  )}`;

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
            alt={`${project.title} — ${project.category}, producción de Dekaelo Media para ${project.client}`}
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
        <div
          className={`mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-10 ${
            project.stats.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
          }`}
        >
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
                Dekaelo Media estuvo a cargo de la realización audiovisual
                de los primeros cuatro episodios dentro de una serie de
                43 capítulos.
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
              El trabajo de Dekaelo
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] md:text-6xl">
              De la idea
              <br />
              al resultado.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/45 md:text-xl">
              Cada proyecto tiene un punto de partida distinto. A partir
              de la idea y los objetivos del cliente, aportamos dirección
              creativa, criterio audiovisual y experiencia de producción
              para convertirlo en un contenido con identidad propia.
            </p>
          </div>

          <div className="grid gap-y-20 md:grid-cols-12 md:gap-y-28">
            {/* DESAFÍO */}

            <div className="md:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#f51b24]">
                01
              </p>

              <h3 className="mt-5 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
                El desafío
              </h3>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <p className="text-xl leading-relaxed text-white/65 md:text-3xl">
                {project.challenge}
              </p>
            </div>

            {/* TRABAJO */}

            <div className="md:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#f51b24]">
                02
              </p>

              <h3 className="mt-5 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
                Qué hicimos
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
                El resultado
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
          VALOR PARA EL CLIENTE
      ====================================================== */}

      <section className="border-y border-white/10 bg-[#0a0a0a] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#f51b24]">
              Más allá de la producción
            </p>

            <h2 className="mt-5 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
              El valor del proyecto
            </h2>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <h3 className="text-3xl font-medium leading-tight tracking-[-0.04em] text-white/90 md:text-5xl">
              {project.valueTitle}
            </h3>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/45 md:text-lg">
              {project.valueDescription}
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPACIDADES
      ====================================================== */}

      <section className="border-b border-white/10 px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#f51b24]">
              Dekaelo Media
            </p>

            <h2 className="mt-5 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
              Lo que hacemos
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/40">
              Nos involucramos en las etapas creativas y técnicas necesarias
              para darle identidad, calidad y continuidad a cada producción.
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <div className="grid border-t border-white/10 md:grid-cols-2">
              {capabilities.map((item, index) => (
                <div
                  key={item}
                  className="border-b border-white/10 py-5 text-sm text-white/65 md:pr-8"
                >
                  <span className="mr-4 text-[10px] text-[#f51b24]">
                    {String(index + 1).padStart(2, "0")}
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
                } ${index === 2 ? "md:mr-[16%]" : ""}`}
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
          SIGUIENTE PROYECTO
      ====================================================== */}

      <section className="border-t border-white/10">
        <Link
          href={`/proyectos/${nextSlug}`}
          className="group relative block overflow-hidden px-5 py-20 md:px-10 md:py-28"
        >
          <Image
            src={nextProject.hero}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-35"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-transparent" />

          <div className="relative mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#f51b24]">
                Siguiente proyecto
              </p>

              <h2 className="mt-5 text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.06em]">
                {nextProject.title}
              </h2>

              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-white/40">
                {nextProject.category} · Cliente · {nextProject.client}
              </p>
            </div>

            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/25 transition group-hover:border-[#f51b24] group-hover:bg-[#f51b24]">
              <ArrowRight className="h-5 w-5" />
            </span>
          </div>
        </Link>
      </section>

      {/* =====================================================
          CTA FINAL
      ====================================================== */}

      <section className="border-t border-white/10 px-5 py-28 md:px-10 md:py-36">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#f51b24]">
              Hablemos
            </p>

            <h2 className="max-w-4xl text-[clamp(3rem,7vw,6rem)] font-medium leading-[0.88] tracking-[-0.06em]">
              ¿Quieres un
              <br />
              <span className="text-white/35">
                proyecto así?
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/45 md:text-lg">
              Cuéntanos qué te gustaría conseguir. Podemos ayudarte a
              darle forma audiovisual a tu idea, producir los contenidos
              y acompañarte hasta su publicación.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-between gap-8 border border-[#f51b24] bg-[#f51b24] px-6 py-5 text-[10px] uppercase tracking-[0.2em] transition hover:bg-transparent"
            >
              Escríbenos por WhatsApp
              <MessageCircle className="h-4 w-4" />
            </a>

            <Link
              href="/contacto"
              className="group inline-flex items-center justify-between gap-8 border border-white/20 px-6 py-5 text-[10px] uppercase tracking-[0.2em] transition hover:border-[#f51b24] hover:bg-[#f51b24]"
            >
              Cuéntanos tu idea
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
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
    </main>
  );
}
