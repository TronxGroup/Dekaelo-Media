import Image from 'next/image';
import { VideoEmbed } from '../components/VideoEmbed';

export const metadata = {
  title: 'Portafolio | Dekaelo Media',
  description: 'Selección de trabajos y proyectos.',
};

// Opción 1: sin loop automático, replay manual
// Los videos empiezan siempre desde 0 (start=0) y muestran solo relacionados del mismo canal (rel=0)
const toEmbed = (url: string) => {
  const match = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  const id = match ? match[1] : url.split('/').pop()?.split('?')[0] || '';
  return `https://www.youtube.com/embed/${id}?rel=0&start=0`;
};

type Project = {
  title: string;
  youtube: string;
  logo: string;
  desc: string;
};

const projects: Project[] = [
  {
    title: 'U-Payments — Corporate Spot',
    youtube: toEmbed('https://www.youtube.com/watch?v=BAN7i2d01W8'),
    logo: '/logo_6.png',
    desc: 'Pieza corporativa con foco en confianza y usabilidad. Concepto, guion técnico, dirección y entrega en múltiples formatos (web, RRSS, presentaciones).',
  },
  {
    title: 'Innova Talks — Banco BICE',
    youtube: toEmbed('https://www.youtube.com/watch?v=lyt5wWzPCg8'),
    logo: '/logo_2.png',
    desc: 'Podcast en video con entrevistas a colaboradores clave del banco. Concepto, dirección y producción técnica para un formato corporativo cercano y de alto estándar.',
  },
  {
    title: 'Exploflex — Video Corporativo',
    youtube: toEmbed('https://www.youtube.com/watch?v=RF8kLsTZgsU'),
    logo: '/logo_7.png',
    desc: 'Video institucional para industria. Grabación multicámara, motion graphics y master en formatos 16:9 / 1:1 / 9:16.',
  },
  {
    title: 'Coesam — Video Corporativo',
    youtube: toEmbed('https://www.youtube.com/watch?v=b_sq_6TiwdE'),
    logo: '/logo_8.png',
    desc: 'Producción audiovisual orientada a posicionamiento B2B y comercial internacional. Entregables optimizados para web y ferias.',
  },
  {
    title: 'Creando Líderes para Asia — APCC',
    youtube: toEmbed('https://www.youtube.com/watch?v=byTylGKp-uI'),
    logo: '/logo_9.png',
    desc: 'Podcast de la Cámara de Comercio Asia Pacífico. +20 episodios para LinkedIn y newsletters, con clippings optimizados para redes.',
  },
  {
    title: 'IGROMI — Episodio 8: Emprendimiento en la Industria 4.0',
    youtube: toEmbed('https://www.youtube.com/watch?v=2G7oKXKjPl8'),
    logo: '/logo_1.png',
    desc: 'Capítulo del podcast BREAK INDUSTRIAL financiado por CORFO, con referentes tecnológicos y de industria en Chile. Producción integral y distribución multiplataforma.',
  },
  {
    title: 'Revista CARAS — 25° Aniversario',
    youtube: toEmbed('https://www.youtube.com/watch?v=hs6DLxIJ0jA'),
    logo: '/logo_10.png',
    desc: 'Pieza conmemorativa 25 años. Montaje dinámico, musicalización y tratamiento de archivo.',
  },
  {
    title: 'Fútbol y Parrilla — Independiente',
    youtube: toEmbed('https://www.youtube.com/watch?v=PLSfbZU_asQ'),
    logo: '/logo_11.png',
    desc: 'Producción de los 4 primeros episodios. +300.000 vistas en YouTube. Diseño de dinámica, registro multicámara y edición ágil.',
  },
  {
    title: "Trewhela's School — Documental 80 Años",
    youtube: toEmbed('https://www.youtube.com/watch?v=JKsSN2lo_RU'),
    logo: '/logo_5.png',
    desc: 'Documental institucional que recorre origen, presente y futuro del colegio. Versión principal + cortes breves para marketing y RRSS.',
  },
  {
    title: 'Motion Graphics — KGHM, Inducom, TAPP',
    youtube: toEmbed('https://www.youtube.com/watch?v=ilvi2u_c_a0'),
    logo: '/logo_motion.png',
    desc: 'Animaciones para marcas B2B y corporativas: lower thirds, key visuals, data-visual y brand animations. Entrega para RRSS, web y presentaciones.',
  },
  {
    title: 'Reel Cine y Series — Yokai / La Horrible / Danny Wang',
    youtube: toEmbed('https://www.youtube.com/watch?v=550zTI8nEvY'),
    logo: '/logo_cine.png',
    desc: 'Largometraje “Yokai” (Selección Oficial Sitges y BARS); serie “La Horrible” (con Sigrid Alegría y Liliana Ross QEPD); proyecto premiado en Corea “Danny Wang”.',
  },
  {
    title: 'ACManet — Tutorial Better Life (A/C)',
    youtube: toEmbed('https://www.youtube.com/watch?v=f7BpYpTSPLk'),
    logo: '/logo_12.png',
    desc: 'Tutorial de instalación de aire acondicionado vigente en YouTube. +3.000.000 vistas y +18k me gusta; alto posicionamiento orgánico.',
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
              <VideoEmbed src={p.youtube} title={p.title} />
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
              </div>
              <h3 className="mt-4 font-semibold text-lg">{p.title}</h3>
              <p className="text-white/70 mt-2">{p.desc}</p>
              <div className="mt-4">
                <a href="/contacto" className="btn inline-block">
                  Cotizar este proyecto →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.youtube.com/@dekaelo_media"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Más videos en nuestro canal de YouTube →
          </a>
        </div>
      </div>
    </section>
  );
}
