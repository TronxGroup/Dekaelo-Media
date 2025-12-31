import Image from 'next/image';
import Link from 'next/link';
import { VideoEmbed } from '../components/VideoEmbed';

export const metadata = {
  title: 'Portafolio | Dekaelo Media',
  description:
    'Selección de videos corporativos, vodcasts, institucionales y motion graphics producidos por Dekaelo Media.',
};

const toEmbed = (url: string) => {
  // soporta: watch?v=, youtu.be/, shorts/, embed/
  const patterns = [
    /[?&]v=([a-zA-Z0-9_-]{11})/,
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
  ];

  for (const p of patterns) {
    const m = url.match(p);
    if (m?.[1]) return `https://www.youtube.com/embed/${m[1]}?rel=0&start=0&modestbranding=1&playsinline=1`;
  }

  // fallback
  const last = url.split('/').pop()?.split('?')[0] || '';
  return `https://www.youtube.com/embed/${last}?rel=0&start=0&modestbranding=1&playsinline=1`;
};

const slug = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');

type Project = {
  title: string;
  youtube: string;
  logo: string;
  desc: string;
  tag: 'Vodcast' | 'Institucional' | 'Corporativo' | 'Motion' | 'Serie' | 'Cine/Indie';
};

const projects: Project[] = [
  // 1) MAX TRUST (banca + vodcast corporativo)
  {
    title: 'Innova Talks — Banco BICE',
    youtube: toEmbed('https://www.youtube.com/watch?v=lyt5wWzPCg8'),
    logo: '/logo_2.png',
    tag: 'Vodcast',
    desc: 'Vodcast corporativo de alto estándar: entrevistas, dirección, multicámara y producción técnica completa para un formato escalable.',
  },

  // 2) PROOF OF FORMAT + AUDIENCE (vodcast con futbolistas + visitas)
  {
    title: 'Fútbol y Parrilla — Vodcast con futbolistas profesionales',
    youtube: toEmbed('https://www.youtube.com/watch?v=PLSfbZU_asQ'),
    logo: '/logo_11.png',
    tag: 'Vodcast',
    desc: '+310.000 vistas. Vodcast multicámara con invitados profesionales (futbolistas). 4 episodios, ritmo conversacional y piezas derivadas para difusión.',
  },

  // 3) INSTITUTIONAL SERIES (continuidad real)
  {
    title: 'Creando Líderes para Asia — APCC',
    youtube: toEmbed('https://www.youtube.com/watch?v=byTylGKp-uI'),
    logo: '/logo_9.png',
    tag: 'Vodcast',
    desc: '+20 episodios para LinkedIn/YouTube y newsletters. Serie institucional con continuidad editorial y piezas derivadas.',
  },

  // 4) INSTITUCIONAL (historia + versiones)
  {
    title: "Trewhela's School — Documental 80 Años",
    youtube: toEmbed('https://www.youtube.com/watch?v=JKsSN2lo_RU'),
    logo: '/logo_5.png',
    tag: 'Institucional',
    desc: 'Documental institucional con versiones y cortes breves para marketing, admisión, redes y presentaciones.',
  },

  // 5) CORPORATIVO (industria + entregas)
  {
    title: 'Exploflex — Video Corporativo',
    youtube: toEmbed('https://www.youtube.com/watch?v=RF8kLsTZgsU'),
    logo: '/logo_7.png',
    tag: 'Corporativo',
    desc: 'Institucional industrial: grabación, post y versiones para web, redes y presentaciones.',
  },

  // 6) CORPORATIVO (fintech/confianza)
  {
    title: 'U-Payments — Corporate Spot',
    youtube: toEmbed('https://www.youtube.com/watch?v=BAN7i2d01W8'),
    logo: '/logo_6.png',
    tag: 'Corporativo',
    desc: 'Pieza corporativa con foco en confianza, usabilidad y presencia global. Entregas en múltiples formatos.',
  },

  // 7) CORPORATIVO (B2B internacional)
  {
    title: 'Coesam — Video Corporativo',
    youtube: toEmbed('https://www.youtube.com/watch?v=b_sq_6TiwdE'),
    logo: '/logo_8.png',
    tag: 'Corporativo',
    desc: 'Video B2B orientado a posicionamiento comercial internacional. Material optimizado para web, ferias y clientes.',
  },

  // 8) TECH / PODCAST INDUSTRIAL
  {
    title: 'IGROMI — Industria 4.0',
    youtube: toEmbed('https://www.youtube.com/watch?v=2G7oKXKjPl8'),
    logo: '/logo_1.png',
    tag: 'Vodcast',
    desc: 'Capítulo del podcast BREAK INDUSTRIAL. Proyecto con foco tecnológico y distribución multiplataforma.',
  },

  // 9) INSTITUCIONAL / CONMEMORATIVO
  {
    title: 'Revista CARAS — 25° Aniversario',
    youtube: toEmbed('https://www.youtube.com/watch?v=hs6DLxIJ0jA'),
    logo: '/logo_10.png',
    tag: 'Institucional',
    desc: 'Video conmemorativo: edición dinámica, musicalización y piezas derivadas.',
  },

  // 10) MOTION (upsell / soporte)
  {
    title: 'Motion — KGHM, Inducom, TAPP',
    youtube: toEmbed('https://www.youtube.com/watch?v=ilvi2u_c_a0'),
    tag: 'Motion',
    desc: 'Lower thirds, key visuals, data-visual y animaciones de marca para campañas, institucionales y presentaciones.',
  },

  // 11) ORGANIC SCALE / TUTORIAL
  {
    title: 'OXIMIXO — Tutorial Better Life',
    youtube: toEmbed('https://www.youtube.com/watch?v=f7BpYpTSPLk'),
    logo: '/logo_12.png',
    tag: 'Serie',
    desc: 'Tutorial con más de 3.800.000 de visualizaciones. Alto posicionamiento orgánico y autoridad en el rubro.',
  },

  // 12) ORIGIN STORY (al final)
  {
    title: 'Reel Cine y Series',
    youtube: toEmbed('https://www.youtube.com/watch?v=550zTI8nEvY'),
    tag: 'Cine/Indie',
    desc: 'Largometraje “Yokai” (Sitges, BARS), “Las Horribles” y proyecto premiado “Danny Wang”.',
  },
];

const tagStyle = (tag: Project['tag']) => {
  const base = 'inline-flex items-center rounded-full px-3 py-1 text-[11px] border bg-white/5 border-white/15 text-white/80';
  return base;
};

export default function Page() {
  return (
    <section>
      {/* HEADER */}
      <div className="section container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <h1 className="h2">Portafolio</h1>
            <p className="p mt-2 text-white/70">
              Selección de videos corporativos, institucionales, vodcasts y motion para marcas, bancos, cámaras y
              empresas. Si necesitas un caso detallado (objetivo → proceso → entregas), escríbenos.
            </p>
          </div>

          {/* quick CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link href="/servicios#planes" className="btn" data-cta="portfolio_to_plans">
              Ver planes mensuales →
            </Link>
            <Link href="/contacto#form" className="btn-outline" data-cta="portfolio_to_contact">
              Cotizar proyecto puntual
            </Link>
            <Link href="/servicios" className="btn-outline" data-cta="portfolio_to_services">
              Ver servicios
            </Link>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="container pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => {
            const key = slug(p.title);
            return (
              <article key={p.title} className="card">
                <VideoEmbed src={p.youtube} title={p.title} />

                <div className="mt-5 flex items-center justify-between gap-3">
                  <div className="h-8 flex items-center">
                    <Image src={p.logo} alt={p.title} width={110} height={32} className="object-contain opacity-90" />
                  </div>

                  <span className={tagStyle(p.tag)}>{p.tag}</span>
                </div>

                <h3 className="mt-4 font-semibold text-lg text-white">{p.title}</h3>
                <p className="text-white/70 mt-2">{p.desc}</p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link href="/contacto#form" className="btn inline-block" data-cta={`portfolio_quote_${key}`}>
                    Cotizar un video así →
                  </Link>
                  <Link href="/servicios#planes" className="btn-outline inline-block" data-cta={`portfolio_plans_${key}`}>
                    Ver planes
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.youtube.com/@dekaelo_media"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            data-cta="portfolio_youtube"
          >
            Ver más en YouTube →
          </a>
          <p className="mt-3 text-xs text-white/50">
            Tip: si tu foco es LinkedIn/YouTube B2B, podemos recomendarte formato, duración y entregables por plataforma.
          </p>
        </div>
      </div>
    </section>
  );
}
