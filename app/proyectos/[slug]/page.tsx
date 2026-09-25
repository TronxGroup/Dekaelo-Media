import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const projects = {
  bice: {
    title: "BICE",
    subtitle: "Nos une el nuevo BICE",
    category: "Comunicación interna · Cultura",
    description: "Conversaciones que conectan.",
    videoId: "AUUiBDv242k",

    challenge:
      "Acompañar el proceso de integración entre BICECORP y Grupo Security mediante un formato de comunicación cercano que conectara a la alta administración con más de 6.600 colaboradores.",

    solution:
      "La serie interna Nos Une, conducida por Paloma Ávila, comunicó decisiones estratégicas, avances del proceso de integración y mensajes de liderazgo con un lenguaje audiovisual cercano, claro y profesional.",

    result:
      "Más de 14 episodios producidos y una herramienta de comunicación interna para acompañar uno de los principales procesos de integración del grupo.",

    stats: [
      ["+14", "episodios"],
      ["+6.600", "colaboradores"],
      ["2024", "desde"],
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
    description:
      "La conversación que ya no existe en televisión.",
    videoId: "8638BE6Uumg",

    challenge:
      "Crear un formato de conversación con identidad propia y conectar con una comunidad interesada en humor, cultura y conversación.",

    solution:
      "Desarrollamos y producimos Lolosaurios como un formato editorial multiplataforma, con una producción audiovisual consistente, identidad reconocible y estrategia de publicación en YouTube.",

    result:
      "Una temporada proyectada de 12 episodios. Al momento del dossier, el canal registraba 6 episodios publicados, 1.715 suscriptores y 88.316 vistas acumuladas.",

    stats: [
      ["12", "episodios temporada"],
      ["1.715", "suscriptores"],
      ["88.316", "vistas del canal"],
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
    description:
      "Historias, fútbol y conversación alrededor de la mesa.",
    videoId: "PLSfbZU_asQ",

    challenge:
      "Desarrollar para Ian Mac-Niven un formato de conversación sobre fútbol chileno, bajo su nombre, capaz de convocar a referentes históricos del deporte y construir una audiencia digital medible.",

    solution:
      "Desarrollamos un formato de conversación alrededor de una parrilla, reuniendo a referentes del fútbol y figuras públicas en un espacio pensado para generar conversación, historias y contenido digital.",

    result:
      "Los primeros cuatro episodios acumularon aproximadamente 316 mil vistas. El primer episodio alcanzó 161.472 vistas.",

    stats: [
      ["~316K", "vistas · 4 episodios"],
      ["161K", "vistas · episodio 1"],
      ["2024", "producción"],
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
    category: "Posicionamiento B2B · Liderazgo de industria",
    description:
      "Conversaciones sobre innovación y transformación industrial.",
    videoId: "2G7oKXKjPl8",

    challenge:
      "Crear un espacio de conversación que conectara innovación, industria y emprendimiento.",

    solution:
      "Una serie financiada por CORFO y auspiciada por la Universidad Andrés Bello y Colbún, con representantes de CORFO, Microsoft Sudamérica, Siemens y Kauel.",

    result:
      "Una serie de 8 episodios orientada a generar contenido especializado y posicionamiento B2B alrededor de la innovación y la industria.",

    stats: [
      ["8", "episodios"],
      ["CORFO", "financiamiento"],
      ["B2B", "posicionamiento"],
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
    category: "Posicionamiento B2B · Liderazgo de industria",
    description:
      "Conversaciones que conectan con Asia.",
    videoId: "byTylGKp-uI",

    challenge:
      "Posicionar digitalmente a la Cámara de Comercio Asia Pacífico como referente en las relaciones comerciales entre Chile y Asia.",

    solution:
      "Una serie internacional conducida por Guillermo Holzmann, desarrollada durante quince meses, con representantes, empresarios, diplomáticos y líderes internacionales.",

    result:
      "24 episodios producidos, más de 15 meses de continuidad editorial y más de 50 nuevos socios incorporados durante el período de emisión.",

    stats: [
      ["24", "episodios"],
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

      {/* HEADER */}

      <header className="fixed left-0 top-0 z-50 w-full px-5 py-5 md:px-10 md:py-7">
        <Link
          href="/"
          className="text-[10px] uppercase tracking-[0.25em] text-white/70 transition hover:text-white"
        >
          Dekaelo Media
        </Link>
      </header>

      {/* HERO */}

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

      {/* INTRO */}

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

      {/* VIDEO */}

      <section className="px-5 pb-24 md:px-10 md:pb-32">

        <div className="mb-8">

          <p className="text-[10px] uppercase tracking-[0.3em] text-[#f51b24]">
            Video
          </p>

          <h2 className="mt-3 text-2xl font-medium md:text-3xl">
            Ver proyecto
          </h2>

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

      </section>

      {/* STATS */}

      <section className="border-y border-white/10 px-5 py-12 md:px-10 md:py-16">

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

          {project.stats.map(([number, label]) => (

            <div key={label}>

              <div className="text-4xl font-medium tracking-[-0.04em] md:text-6xl">
                {number}
              </div>

              <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/35">
                {label}
              </div>

            </div>

          ))}

        </div>

      </section>

      {/* CASE STUDY */}

      <section className="px-5 py-24 md:px-10 md:py-36">

        <div className="grid gap-y-20 md:grid-cols-12 md:gap-y-28">

          {/* DESAFÍO */}

          <div className="md:col-span-4">

            <p className="text-[10px] uppercase tracking-[0.3em] text-[#f51b24]">
              01
            </p>

            <h2 className="mt-5 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
              El desafío
            </h2>

          </div>

          <div className="md:col-span-7 md:col-start-6">

            <p className="text-xl leading-relaxed text-white/65 md:text-3xl">
              {project.challenge}
            </p>

          </div>

          {/* SOLUCIÓN */}

          <div className="md:col-span-4">

            <p className="text-[10px] uppercase tracking-[0.3em] text-[#f51b24]">
              02
            </p>

            <h2 className="mt-5 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
              La solución
            </h2>

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

      {/* GALERÍA */}

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

      {/* CONTACT */}

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
