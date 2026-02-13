import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { VideoEmbed } from "../components/VideoEmbed";

/* --------------------------------- SEO ---------------------------------- */

export const metadata: Metadata = {
  title:
    "Portafolio — Dekaelo Media | Producción Audiovisual Corporativa",
  description:
    "Portafolio de Dekaelo Media. Series institucionales, vodcast ejecutivos y proyectos documentales producidos para banca, gremios empresariales, salud y tecnología en Chile.",
  keywords: [
    "portafolio productora audiovisual",
    "vodcast corporativo Chile",
    "video institucional Chile",
    "serie corporativa",
    "producción audiovisual ejecutiva",
  ],
  alternates: {
    canonical: "https://www.dekaelomedia.com/portafolio",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Portafolio — Dekaelo Media",
    description:
      "Series institucionales, vodcast ejecutivos y proyectos documentales desarrollados para organizaciones de alto perfil.",
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
  logo?: string;
  desc: string;
  tag: string;
};

/* ------------------------------ CASOS ESTRATÉGICOS ------------------------------ */

const featured: Project[] = [
  {
    title: "Banco BICE — Serie institucional (2024–2026)",
    youtube: toEmbed("https://www.youtube.com/watch?v=lyt5wWzPCg8"),
    logo: "/logo_2.png",
    tag: "Serie corporativa",
    desc:
      "Temporada continua de vodcast ejecutivo para liderazgo y cultura organizacional. Producción integral: diseño de formato, dirección editorial, grabación multicámara y postproducción.",
  },
  {
    title: "APCC — Ciclo de entrevistas empresariales",
    youtube: toEmbed("https://www.youtube.com/watch?v=byTylGKp-uI"),
    logo: "/logo_9.png",
    tag: "Serie institucional",
    desc:
      "Más de 20 episodios consecutivos orientados a posicionamiento institucional y comunicación estratégica en LinkedIn y YouTube.",
  },
  {
    title: "Reality Day — Serie documental",
    youtube: toEmbed("https://youtu.be/4xe4CtPW4lI?si=7kAElTNXlME8AYnb"),
    logo: "/logo_cine.png",
    tag: "Proyecto editorial",
    desc:
      "Serie original desarrollada junto a Tronx TV. Narrativa observacional y estándar cinematográfico aplicado a historias reales de trabajo.",
  },
];

/* ------------------------------ OTROS PROYECTOS ------------------------------ */

const projects: Project[] = [
  {
    title: "Fútbol y Parrilla",
    youtube: toEmbed("https://www.youtube.com/watch?v=PLSfbZU_asQ"),
    tag: "Vodcast",
    desc:
      "+300.000 visualizaciones acumuladas. Conversación multicámara con invitados profesionales.",
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
    tag: "Corporativo",
    desc:
      "Pieza enfocada en posicionamiento internacional y confianza corporativa.",
  },
  {
    title: "Sistemas Motion Graphics",
    youtube: toEmbed("https://www.youtube.com/watch?v=ilvi2u_c_a0"),
    tag: "Motion",
    desc:
      "Diseño de lower thirds, sistemas gráficos y paquetes visuales para series continuas.",
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
          series institucionales, vodcast ejecutivos y proyectos documentales
          para organizaciones de alto perfil.
          <br />
          Nos especializamos en formatos de continuidad, no en piezas aisladas.
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

              <div className="mt-4 flex items-center gap-3">
                {p.logo && (
                  <Image
                    src={p.logo}
                    alt=""
                    width={90}
                    height={28}
                    className="opacity-80"
                  />
                )}
                <span className="text-xs text-white/50">{p.tag}</span>
              </div>

              <h3 className="mt-3 text-white font-medium">
                {p.title}
              </h3>

              <p className="text-white/60 text-sm mt-2">
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
          ¿Necesitas producir una serie o proyecto similar?
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
