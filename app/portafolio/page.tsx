import type { Metadata } from "next";
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
      "Series institucionales y videos corporativos desarrollados para organizaciones de alto perfil en Chile.",
    url: "https://www.dekaelomedia.com/portafolio",
    siteName: "Dekaelo Media",
    locale: "es_CL",
    type: "website",
  },
};

/* ---------------------------------- utils --------------------------------- */

const toEmbed = (url: string) => {
  const match = url.match(/[?&]v=([a-zA-Z0-9_-]{11})|youtu\.be\/([a-zA-Z0-9_-]{11})/);
  const id = match?.[1] || match?.[2];
  return id
    ? `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`
    : url;
};

type Project = {
  title: string;
  youtube: string;
  tag: string;
  desc: string;
};

/* ------------------------------ CASOS ESTRATÉGICOS ------------------------------ */

const featured: Project[] = [
  {
    title: "Trewhela’s School — Documental 80 Años",
    youtube: toEmbed("https://www.youtube.com/watch?v=JKsSN2lo_RU"),
    tag: "Documental institucional",
    desc:
      "Producción documental conmemorativa con narrativa histórica, entrevistas multicámara y tratamiento cinematográfico aplicado al entorno educacional.",
  },
  {
    title: "Banco BICE — Serie institucional (2024–2026)",
    youtube: toEmbed("https://www.youtube.com/watch?v=lyt5wWzPCg8"),
    tag: "Serie corporativa",
    desc:
      "Temporada continua de vodcast ejecutivo enfocada en liderazgo y cultura organizacional. Diseño de formato, dirección editorial y producción integral.",
  },
  {
    title: "Coesam® — Video Corporativo Internacional",
    youtube: toEmbed("https://www.youtube.com/watch?v=b_sq_6TiwdE"),
    tag: "Video corporativo",
    desc:
      "Producción orientada a posicionamiento internacional. Mensaje estratégico y tratamiento visual sobrio enfocado en credibilidad global.",
  },
];

/* ------------------------------ OTROS PROYECTOS ------------------------------ */

const projects: Project[] = [
  {
    title: "Fútbol y Parrilla — Vodcast",
    youtube: toEmbed("https://www.youtube.com/watch?v=PLSfbZU_asQ"),
    tag: "Vodcast",
    desc:
      "+300.000 visualizaciones acumuladas. Producción multicámara con invitados profesionales y estructura de conversación dinámica.",
  },
  {
    title: "iGromi — Serie corporativa industrial",
    youtube: toEmbed("https://www.youtube.com/watch?v=2G7oKXKjPl8"),
    tag: "Serie corporativa",
    desc:
      "Serie audiovisual enfocada en posicionamiento tecnológico e industrial. Claridad técnica combinada con tratamiento cinematográfico.",
  },
  {
    title: "Reality Day — Serie documental",
    youtube: toEmbed("https://youtu.be/4xe4CtPW4lI"),
    tag: "Proyecto editorial",
    desc:
      "Serie original desarrollada junto a Tronx TV. Narrativa observacional aplicada a historias reales de trabajo.",
  },
  {
    title: "APCC — Ciclo de entrevistas empresariales",
    youtube: toEmbed("https://www.youtube.com/watch?v=byTylGKp-uI"),
    tag: "Serie institucional",
    desc:
      "Más de 20 episodios consecutivos orientados a posicionamiento institucional y comunicación estratégica digital.",
  },
  {
    title: "Exploflex® — Video Corporativo Sustentable",
    youtube: toEmbed("https://www.youtube.com/watch?v=RF8kLsTZgsU"),
    tag: "Video corporativo",
    desc:
      "Producción institucional enfocada en sostenibilidad y comunicación estratégica industrial. Dirección ejecutiva y tratamiento visual sobrio.",
  },
  {
    title: "U-Payments — Corporate",
    youtube: toEmbed("https://www.youtube.com/watch?v=BAN7i2d01W8"),
    tag: "Corporativo internacional",
    desc:
      "Pieza audiovisual orientada a posicionamiento internacional y fortalecimiento de confianza corporativa.",
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
          Producción audiovisual corporativa en Chile.
          Series institucionales, documentales corporativos y videos estratégicos
          desarrollados para organizaciones de alto perfil.
        </p>

        <p className="mt-6 text-white/60 leading-relaxed">
          Más de <strong>58 episodios</strong> producidos desde 2023,
          combinando claridad estratégica con estándar visual consistente.
        </p>
      </section>

      {/* CASOS ESTRATÉGICOS */}
      <Section title="Casos estratégicos" items={featured} />

      {/* OTROS PROYECTOS */}
      <Section title="Otros proyectos" items={projects} />

      {/* CTA FINAL */}
      <section className="container border-t border-white/10 py-28 text-center">
        <h2 className="text-2xl font-semibold mb-6">
          ¿Necesitas producir un video corporativo o una serie institucional?
        </h2>

        <p className="text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
          Diseñamos formatos sostenibles y ejecutamos producción audiovisual
          con estándar corporativo y criterio cinematográfico.
        </p>

        <Link
          href="/contacto"
          className="border border-white/30 px-8 py-3 text-sm hover:bg-white hover:text-black transition"
        >
          Solicitar propuesta
        </Link>
      </section>

    </main>
  );
}

/* ------------------------------ REUSABLE SECTION ------------------------------ */

function Section({ title, items }: { title: string; items: Project[] }) {
  return (
    <section className="container border-t border-white/10 py-28">
      <h2 className="text-sm uppercase tracking-widest text-white/40 mb-16">
        {title}
      </h2>

      <div className="grid md:grid-cols-3 gap-12">
        {items.map((p) => (
          <article key={p.title}>
            <VideoEmbed src={p.youtube} title={p.title} />

            <div className="mt-4 flex items-center justify-between">
              <h3 className="text-white font-medium">{p.title}</h3>
              <span className="text-xs text-white/50">{p.tag}</span>
            </div>

            <p className="text-white/60 text-sm mt-3">{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
