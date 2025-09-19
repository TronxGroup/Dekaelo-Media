import Image from 'next/image';
import { VideoEmbed } from '../components/VideoEmbed';

export const metadata = {
  title: 'Portafolio | Dekaelo Media',
  description: 'Selección de trabajos y proyectos.',
};

// Utilidad para asegurar formato /embed/ con rel=0 y start=0
const toEmbed = (url: string) => {
  // Extrae ID de YouTube de diversos formatos
  const match = url
    .replace('youtu.be/', 'www.youtube.com/watch?v=')
    .match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  const id = match ? match[1] : url.split('/').pop()?.split('?')[0] || '';
  return `https://www.youtube.com/embed/${id}?rel=0&start=0`;
};

type Project = {
  title: string;
  youtube: string; // URL embebida de YouTube (formato /embed/)
  logo: string; // ruta en /public
  year: string;
  desc: string;
};

// Ordenados por importancia (criterio editorial)
const projects: Project[] = [
  {
    title: 'U-Payments — Corporate Spot',
    youtube: toEmbed('https://youtu.be/BAN7i2d01W8?si=xHr35oqILychBdQ9'),
    logo: '/logo_upayments.png',
    year: '2025',
    desc: 'Pieza corporativa con foco en confianza y usabilidad. Concepto, guion técnico, dirección y entrega en múltiples formatos (web, RRSS, presentaciones).',
  },
  {
    title: 'Exploflex — Video Corporativo',
    youtube: toEmbed('https://youtu.be/RF8kLsTZgsU?si=7uy7CypWUVIuQHzM'),
    logo: '/logo_exploflex.png',
    year: '2025',
    desc: 'Video institucional para industria. Grabación multicámara, motion graphics y master en formatos 16:9 / 1:1 / 9:16.',
  },
  {
    title: 'Coesam — Video Corporativo',
    youtube: toEmbed('https://youtu.be/b_sq_6TiwdE?si=B1jOvzIAxmn9AN6S'),
    logo: '/logo_coesam.png',
    year: '2025',
    desc: 'Producción audiovisual orientada a posicionamiento B2B y comercial internacional. Entregables optimizados para web y ferias.',
  },
  {
    title: 'IGROMI — Episodio 8: Emprendimiento en la Industria 4.0',
    youtube: toEmbed('https://www.youtube.com/watch?v=2G7oKXKjPl8'),
    logo: '/logo_1.png',
    year: '2024',
    desc: 'Capítulo del podcast BREAK INDUSTRIAL financiado por CORFO, con referentes tecnológicos y de industria en Chile. Producción integral y distribución multiplataforma.',
  },
  {
    title: 'Creando Líderes para Asia — APCC',
    youtube: toEmbed('https://youtu.be/byTylGKp-uI?si=fxG22lOWIY6X6Uqr'),
    logo: '/logo_6.png',
    year: '2023–2025',
    desc: 'Podcast de la Cámara de Comercio Asia Pacífico. +20 episodios para LinkedIn y newsletters, con clippings optimizados para redes.',
  },
  {
    title: 'Revista CARAS — 25° Aniversario',
    youtube: toEmbed('https://youtu.be/hs6DLxIJ0jA?si=zQLUtXU1JtsjB3X1'),
    logo: '/logo_caras.png',
    year: 'Aniversario',
    desc: 'Pieza conmemorativa 25 años. Montaje dinámico, musicalización y tratamiento de archivo.',
  },
  {
    title: 'Innova Talks — Banco BICE',
    youtube: toEmbed('https://www.youtube.com/embed/lyt5wWzPCg8?rel=0'),
    logo: '/logo_2.png',
    year: '2025',
    desc: 'Podcast en video con entrevistas a colaboradores clave del banco. Concepto, dirección y producción técnica para un formato corporativo cercano y de alto estándar.',
  },
  {
    title: 'Fútbol y Parrilla — Independiente',
    youtube: toEmbed('https://www.youtube.com/embed/6YZHDcwYZfo?rel=0'),
    logo: '/logo_3.png',
    year: '2024',
    desc: 'Producción de los 4 primeros episodios. +300.000 vistas en YouTube. Diseño de dinámica, registro multicámara y edición ágil.',
  },
  {
    title: "Trewhela's School — Documental 80 Años",
    youtube: toEmbed('https://www.youtube.com/watch?v=2G7oKXKjPl8'), // enlace provisto
    logo: '/logo_5.png',
    year: '2018',
    desc: 'Documental institucional que recorre origen, presente y futuro del colegio. Versión principal + cortes breves para marketing y RRSS.',
  },
  {
    title: 'Tutorial — Better Life (A/C)',
    youtube: toEmbed('https://www.youtube.com/embed/f7BpYpTSPLk?rel=0'),
    logo: '/logo_4.png',
    year: '2015',
    desc: 'Tutorial de instalación de aire acondicionado vigente en YouTube. +3.000.000 vistas y +18k me gusta; alto posicionamiento orgánico.',
  },
  {
    title: 'Cine y Series — Yokai / La Horrible / Danny Wang',
    youtube: toEmbed('https://www.youtube.com/embed/550zTI8nEvY?rel=0'),
    logo: '/logo_cine.png',
    year: '2014–2020',
    desc: 'Largometraje “Yokai” (Selección Oficial Sitges y BARS); serie “La Horrible” (con Sigrid Alegría y Liliana Ross QEPD); proyecto premiado en Corea “Danny Wang”.',
  },
  {
    title: 'Motion Graphics — KGHM, Inducom, TAPP',
    youtube: toEmbed('https://www.youtube.com/embed/ilvi2u_c_a0?rel=0'),
    logo: '/logo_motion.png',
    year: '2018–2020',
    desc: 'Animaciones para marcas B2B y corporativas: lower thirds, key visuals, data-visual y brand animations. Entrega para RRSS, web y presentaciones.',
  },
];

export default function Page() {
  return (
    <section>
      <div className="section container">
        <h1 className="h2">Portafolio</h1>
        <p className="p mt-2">
          Una selección de piezas recientes. Solicita el reel completo o casos detallados en contacto.
        </p>
      </div>

      <div className="container pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <article key={p.title} className="card">
              {/* Video */}
              <VideoEmbed src={p.youtube} title={p.title} />

              {/* Meta */}
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src={p.logo}
                    alt={p.title}
                    width={120}
                    height={36}
                    className="object-contain opacity-90"
                  />
                </div>
                <span className="text-xs text-white/60 border border-white/10 rounded-full px-3 py-1">
                  {p.year}
                </span>
              </div>

              {/* Texto */}
              <h3 className="mt-4 font-semibold text-lg">{p.title}</h3>
              <p className="text-white/70 mt-2">{p.desc}</p>

              {/* CTA */}
              <div className="mt-4">
                <a href="/contacto" className="btn inline-block">
                  Cotizar este proyecto →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
