import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { VideoEmbed } from "../components/VideoEmbed";

/* --------------------------------- SEO ---------------------------------- */

export const metadata: Metadata = {
  title:
    "Portafolio — Dekaelo Media | Producción Audiovisual Corporativa en Chile",
  description:
    "Portafolio de Dekaelo Media. Series institucionales, documentales corporativos y videos empresariales producidos para banca, educación, industria y tecnología en Chile.",
  keywords: [
    "portafolio productora audiovisual Chile",
    "video corporativo Chile",
    "documental institucional",
    "serie corporativa",
    "producción audiovisual ejecutiva",
  ],
  alternates: {
    canonical: "https://www.dekaelomedia.com/portafolio",
  },
  openGraph: {
    title: "Portafolio — Dekaelo Media",
    description:
      "Series institucionales, documentales corporativos y videos estratégicos desarrollados para organizaciones de alto perfil.",
    url: "https://www.dekaelomedia.com/portafolio",
    siteName: "Dekaelo Media",
    locale: "es_CL",
    type: "website",
  },
};

/* ---------------------------------- utils --------------------------------- */

const toEmbed = (url: string) => {
  const patterns = [
    /[?&]v=([a-zA-Z0-9_-]{11})/,
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /shorts\/([a-zA-Z0-9_-]{11})/,
    /embed\/([a-zA-Z0-9_-]{11})/,
  ];

  for (const p of patterns) {
    const m = url.match(p);
    if (m?.[1])
      return `https://www.youtube.com/embed/${m[1]}?rel=0&modestbranding=1&playsinline=1`;
  }

  return url;
};

type Project = {
  title: string;
  youtube: string;
  tag: string;
  desc: string;
};

/* ------------------------------ CASOS DESTACADOS ------------------------------ */

const featured: Project[] = [
  {
    title: "Trewhela’s School — Documental 80 Años",
    youtube: toEmbed("https://www.youtube.com/watch?v=JKsSN2lo_RU"),
    tag: "Documental institucional",
    desc:
      "Producción documental conmemorativa por los 80 años de Trewhela’s School. Narrativa histórica, entrevistas multicámara y tratamiento cinematográfico aplicado al entorno educacional.",
  },
  {
    title: "Banco BICE — Serie institucional (2024–2026)",
    youtube: toEmbed("https://www.youtube.com/watch?v=lyt5wWzPCg8"),
    tag: "Serie corporativa",
    desc:
      "Temporada continua de vodcast ejecutivo enfocada en liderazgo y cultura organizacional. Producción integral: diseño de formato, dirección editorial y grabación multicámara.",
  },
  {
    title: "Coesam® — Video Corporativo Internacional",
    youtube: toEmbed("https://www.youtube.com/watch?v=b_sq_6TiwdE"),
    tag: "Video corporativo",
    desc:
      "Producción corporativa orientada a posicionamiento internacional. Mensaje estratégico, entrevistas ejecutivas y tratamiento visual sobrio enfocado en credibilidad global.",
  },
];

/* ------------------------------ OTROS PROYECTOS ------------------------------ */

const projects: Project[] = [
  {
    title: "APCC — Ciclo de entrevistas empresariales",
    youtube: toEmbed("https://www.youtube.com/watch?v=byTylGKp-uI"),
    tag: "Serie institucional",
    desc:
      "Más de 20 episodios consecutivos orientados a posicionamiento institucional y comunicación estratégica en LinkedIn y YouTube.",
  },
  {
    title: "Reality Day — Serie documental",
    youtube: toEmbed("https://youtu.be/4xe4CtPW4lI?si=7kAElTNXlME8AYnb"),
    tag: "Proyecto editorial",
    desc:
      "Serie original desarrollada junto a Tronx TV. Narrativa observacional y estándar cinematográfico aplicado a historias reales de trabajo.",
  },
  {
    title: "Exploflex — Video institucional",
    youtube: toEmbed("https://www.youtube.com/watch?v=RF8kLsTZgsU"),
    tag: "Corporativo",
    desc:
      "Producción industrial orientada a presentaciones estratégicas y comunicación institucional.",
  },
  {
    title: "U-Payments — Corporate",
    youtube: toEmbed("https://www.youtube.com/watch?v=BAN7i2d01W8"),
    tag: "Corporativo internacional",
    desc:
      "Pieza audiovisual enfocada en posicionamiento internacional y fortalecimiento de confianza corporativa.",
  },
];

/* -------------------------------------------------------------------------- */

export default function Page() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="container max-w-4xl py-28">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Portafolio
        </h1>

        <p className="mt-6 text-white/65 leading-relaxed">
          Desde 2023 hemos producido más de <strong>58 episodios</strong> de
          series institucionales, documentales corporativos y videos
          empresariales en Chile.
        </p>

        <p className="mt-6 text-white/60 leading-relaxed">
          Nuestro foco está en proyectos con estructura narrativa clara,
          continuidad estratégica y estándar visual consistente.
        </p>
      </section>

      {/* MÉTRICAS */}
      <section className="container border-t border-white/10 py-20">
        <div className="grid md:grid-cols-3 gap-14 text-center">
          <div>
            <div className="text-5xl font-semibold">58+</div>
            <p className="text-white/50 text-sm mt-3">
              episodios producidos
            </p>
          </div>
          <div>
            <div className="text-5xl font-semibold">6</div>
            <p className="text-white/50 text-sm mt-3">
              industrias distintas
            </p>
          </div>
          <div>
            <div className="text-5xl font-semibold">3+</div>
            <p className="text-white/50 text-sm mt-3">
              años desarrollando series continuas
            </p>
          </div>
        </div>
      </section>

      {/* CASOS DESTACADOS */}
      <section className="container border-t border-white/10 py-28">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-16">
          Casos destacados
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {featured.map((p) => (
            <article key={p.title}>
              <VideoEmbed src={p.youtube} title={p.title} />

              <div className="mt-4 flex items-center justify-between">
                <h3 className="text-white font-medium">
                  {p.title}
                </h3>
                <span className="text-xs text-white/50">
                  {p.tag}
                </span>
              </div>

              <p className="text-white/60 text-sm mt-3">
                {p.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* OTROS PROYECTOS */}
      <section className="container border-t border-white/10 py-28">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-16">
          Otros proyectos
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p) => (
            <article key={p.title}>
              <VideoEmbed src={p.youtube} title={p.title} />

              <div className="mt-3 flex items-center justify-between">
                <h3 className="text-white font-medium">
                  {p.title}
                </h3>
                <span className="text-xs text-white/50">
                  {p.tag}
                </span>
              </div>

              <p className="text-white/60 text-sm mt-2">
                {p.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="container border-t border-white/10 py-28 text-center">
        <h2 className="text-2xl font-semibold mb-6">
          ¿Quieres producir un proyecto similar?
        </h2>

        <p className="text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
          Diseñamos formatos sostenibles en el tiempo y ejecutamos
          producción audiovisual con estándar corporativo y criterio
          cinematográfico.
        </p>

        <Link
          href="/contacto"
          className="border border-white/30 px-8 py-3 text-sm hover:bg-white hover:text-black transition"
        >
          Conversar proyecto
        </Link>
      </section>

    </main>
  );
}
