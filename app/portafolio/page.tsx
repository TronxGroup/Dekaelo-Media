import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { VideoEmbed } from "../components/VideoEmbed";

const waLink = `https://wa.me/56920080031?text=${encodeURIComponent("Hola 👋 Vi el portafolio de Dekaelo Media y quiero conversar sobre un proyecto.\n\nEmpresa:\nQué necesito:\nFecha tentativa:\n\nGracias")}`;

export const metadata: Metadata = {
  title: "Portafolio — Dekaelo Media | Video corporativo en Chile",
  description: "Portafolio de Dekaelo Media: vodcast Banco BICE, documental Trewhela's School, videos Coesam, iGromi, APCC y más. +58 episodios producidos.",
  alternates: { canonical: "https://www.dekaelomedia.com/portafolio" },
};

const toEmbed = (url: string) => {
  const match = url.match(/[?&]v=([a-zA-Z0-9_-]{11})|youtu\.be\/([a-zA-Z0-9_-]{11})/);
  const id = match?.[1] || match?.[2];
  return id ? `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1` : url;
};

const featured = [
  { title: "Banco BICE — Serie vodcast institucional", youtube: toEmbed("https://www.youtube.com/watch?v=lyt5wWzPCg8"), tag: "Vodcast · Serie institucional", tagClass: "text-amber-300/70", desc: "Producción continua de 11 episodios enfocada en liderazgo ejecutivo y cultura organizacional.", note: "Contenido confidencial de uso interno.", highlight: "2024–2026 · 11 episodios" },
  { title: "Trewhela's School — Documental 80 Años", youtube: toEmbed("https://www.youtube.com/watch?v=JKsSN2lo_RU"), tag: "Documental institucional", tagClass: "text-sky-300/70", desc: "Documental conmemorativo con narrativa histórica, entrevistas multicámara y tratamiento cinematográfico.", highlight: "Pieza única · Uso externo" },
  { title: "Coesam® — Video Corporativo Internacional", youtube: toEmbed("https://www.youtube.com/watch?v=b_sq_6TiwdE"), tag: "Video corporativo", tagClass: "text-emerald-300/70", desc: "Pieza orientada a posicionamiento internacional. Mensaje estratégico y estética sobria.", highlight: "Uso externo · Internacional" },
];

const more = [
  { title: "APCC — Ciclo de entrevistas empresariales", youtube: toEmbed("https://www.youtube.com/watch?v=byTylGKp-uI"), tag: "Serie institucional", desc: "Ciclo de entrevistas orientado a posicionamiento institucional. Más de 20 episodios." },
  { title: "iGromi — Serie corporativa industrial", youtube: toEmbed("https://www.youtube.com/watch?v=2G7oKXKjPl8"), tag: "Vodcast corporativo", desc: "Serie de posicionamiento tecnológico e industrial. Claridad técnica con tratamiento cinematográfico." },
  { title: "Exploflex® — Video Corporativo Sustentable", youtube: toEmbed("https://www.youtube.com/watch?v=RF8kLsTZgsU"), tag: "Video corporativo", desc: "Video institucional enfocado en sostenibilidad y comunicación estratégica industrial." },
  { title: "U-Payments — Corporate", youtube: toEmbed("https://www.youtube.com/watch?v=BAN7i2d01W8"), tag: "Corporativo internacional", desc: "Pieza corporativa orientada a posicionamiento internacional y fortalecimiento de confianza." },
  { title: "Fútbol y Parrilla — Vodcast", youtube: toEmbed("https://www.youtube.com/watch?v=PLSfbZU_asQ"), tag: "Vodcast", desc: "Producción multicámara con invitados profesionales. +300.000 visualizaciones acumuladas." },
  { title: "Reality Day — Serie documental", youtube: toEmbed("https://youtu.be/4xe4CtPW4lI"), tag: "Proyecto editorial", desc: "Serie original de narrativa observacional aplicada a historias reales de trabajo y oficios en Chile." },
];

const stats = [
  { n: "58+", label: "episodios producidos desde 2023" },
  { n: "6", label: "industrias distintas" },
  { n: "3+", label: "años en series continuas" },
  { n: "300K+", label: "visualizaciones acumuladas" },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">{children}</p>;
}

export default function PortafolioPage() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">

      <section className="container max-w-4xl pt-28 pb-16 md:pt-36 md:pb-20">
        <Eyebrow>Portafolio</Eyebrow>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">Lo que hemos producido</h1>
        <p className="mt-6 max-w-2xl text-lg text-white/55 leading-relaxed">Series institucionales, documentales corporativos y videos estratégicos para empresas e instituciones en Chile.</p>
      </section>

      <section className="border-t border-white/10 py-14">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.n}>
                <p className="text-4xl font-semibold text-white">{s.n}</p>
                <p className="mt-2 text-sm text-white/40 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container border-t border-white/10 py-24 max-w-6xl">
        <div className="mb-12">
          <Eyebrow>Casos destacados</Eyebrow>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl">Proyectos principales</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {featured.map((p) => (
            <article key={p.title} className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
              <VideoEmbed src={p.youtube} title={p.title} />
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <p className={`text-xs font-medium ${p.tagClass}`}>{p.tag}</p>
                  {p.highlight && <p className="text-xs text-white/25 shrink-0">{p.highlight}</p>}
                </div>
                <h3 className="mt-2 text-base font-semibold text-white leading-snug">{p.title}</h3>
                <p className="mt-2.5 text-sm text-white/50 leading-relaxed">{p.desc}</p>
                {p.note && <p className="mt-2 text-xs text-white/25 italic">{p.note}</p>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container border-t border-white/10 py-24 max-w-6xl">
        <div className="mb-12">
          <Eyebrow>Más proyectos</Eyebrow>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl">Otros trabajos realizados</h2>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {more.map((p) => (
            <article key={p.title}>
              <VideoEmbed src={p.youtube} title={p.title} />
              <div className="mt-4">
                <p className="text-xs text-white/35">{p.tag}</p>
                <h3 className="mt-1.5 text-sm font-semibold text-white leading-snug">{p.title}</h3>
                <p className="mt-2 text-xs text-white/45 leading-relaxed">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 py-20">
        <div className="container max-w-5xl">
          <Eyebrow>Experiencia por industria</Eyebrow>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Banca y finanzas","Educación","Industria y manufactura","Tecnología","Salud","Cámaras empresariales","Servicios profesionales"].map(ind => (
              <span key={ind} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/50">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-28">
        <div className="container max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Banco BICE · Trewhela's · Coesam · APCC · iGromi · Exploflex
          </div>
          <h2 className="text-3xl font-semibold md:text-4xl">¿Tu empresa necesita algo así?</h2>
          <p className="mx-auto mt-5 max-w-xl text-white/50 leading-relaxed">Cuéntanos qué tienes grabado o qué quieres comunicar. En una conversación corta te decimos si podemos ayudarte y a qué precio.</p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white px-10 py-4 text-sm font-semibold text-black transition hover:bg-white/90">
              Escríbenos por WhatsApp<ArrowUpRight className="h-4 w-4" />
            </a>
            <Link href="/servicios" className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-10 py-4 text-sm text-white/55 transition hover:bg-white/10 hover:text-white">
              Ver servicios y precios<ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-6 text-xs text-white/25">Respondemos el mismo día hábil. Sin compromiso.</p>
        </div>
      </section>

    </main>
  );
}
