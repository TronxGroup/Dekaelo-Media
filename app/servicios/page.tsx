// app/servicios/page.tsx
export const metadata = {
  title: 'Servicios de Producción Audiovisual | Dekaelo Media',
  description:
    'Plan Audiovisual Mensual, videos corporativos, comunicación interna, reels y motion graphics. Producción estratégica en Chile.',
  alternates: {
    canonical: 'https://www.dekaelomedia.com/servicios',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.dekaelomedia.com/servicios',
    title: 'Servicios de Producción Audiovisual | Dekaelo Media',
    description:
      'Plan mensual, institucional, comunicación interna y reels para marcas en Chile.',
    images: ['/og-cover.jpg'],
  },
  twitter: { card: 'summary_large_image' },
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
};

export default function Page() {
  const beneficios = [
    { t: 'Consistencia que posiciona', d: 'Presencia sostenida mes a mes: tu marca deja de “aparecer y desaparecer”.' },
    { t: 'Velocidad & planificación', d: 'Calendario editorial, guion y rodaje programados. Menos urgencias, más calidad.' },
    { t: 'Eficiencia de costos', d: 'Aprovechamos cada jornada para múltiples entregas (video largo + clips).' },
    { t: 'Coherencia de marca', d: 'Mismo tono visual y narrativo en todas las piezas y plataformas.' },
    { t: 'Medición y mejora', d: 'Informe básico mensual para iterar según desempeño real.' },
    { t: 'Comunicación interna', d: 'Inducción, onboarding, cultura y seguridad. Podcasts internos y contenidos para salas de espera, intranet y pantallas.' },
  ];

  const planes = [
    {
      key: 'basico',
      nombre: 'Básico',
      subtitulo: 'Para marcas que inician presencia mensual',
      precio: '$595.000',
      bullets: [
        '1 cápsula institucional (máx. 2 min)',
        '2 reels/shorts/cápsulas',
        'Grabación simple (1 cámara, hasta 3h)',
        'Exportación para 1 plataforma',
        '1 revisión',
        'Publicación lista para: YouTube / LinkedIn / Instagram / Intranet.',
        'Dekaelo gestiona guion, rodaje y post. Tú apruebas.',
      ],
      ctaLabel: 'Quiero este plan',
      destacado: false,
    },
    {
      key: 'estandar',
      nombre: 'Estándar',
      subtitulo: 'Para equipos con calendario activo de marketing',
      precio: '$952.000',
      bullets: [
        '1 jornada de grabación (8 horas)',
        '1 video largo institucional / YouTube / vodcast',
        '4–5 reels/shorts/cápsulas',
        'Asesoría + guion creativo',
        'Entrega optimizada por plataforma',
        '1 revisión',
        'Informe mensual estratégico básico',
        'Publicación lista para: YouTube / LinkedIn / Instagram / Intranet.',
        'Dekaelo gestiona guion, rodaje y post. Tú apruebas.',
      ],
      ctaLabel: 'Quiero este plan',
      destacado: true,
    },
    {
      key: 'premium',
      nombre: 'Premium',
      subtitulo: 'Para campañas y mayor cobertura',
      precio: '$1.450.000',
      bullets: [
        '2 jornadas de grabación (16 horas)',
        '2 videos largos de campaña',
        '8–10 reels/shorts/cápsulas',
        'Asesoría estratégica avanzada',
        '2 rondas de revisión',
        'Entregas personalizadas + material adicional',
        'Informe mensual con métricas y recomendaciones de pauta',
        'Publicación lista para: YouTube / LinkedIn / Instagram / Intranet.',
        'Dekaelo gestiona guion, rodaje y post. Tú apruebas.',
      ],
      ctaLabel: 'Quiero este plan',
      destacado: false,
    },
  ] as const;

  const faq = [
    {
      q: 'No tenemos tiempo ni ideas, ¿igual sirve?',
      a: 'Sí. Partimos con una reunión corta mensual; nosotros proponemos calendario, guiones y formatos. Solo validas.',
    },
    {
      q: '¿Publican por nosotros?',
      a: 'Entregamos archivos optimizados y, si lo necesitas, te asistimos con la carga y buenas prácticas por plataforma.',
    },
    {
      q: '¿Trabajan en regiones?',
      a: 'Sí. Coordinamos logística y equipo local o viajamos según agenda y plan.',
    },
    {
      q: '¿Pueden incluir más reels o un evento?',
      a: 'Claro. El plan es escalable: sumamos jornadas, segunda cámara/dron, motion extra o cobertura especial.',
    },
  ];

  return (
    <section className="section bg-black">
      <div className="container">
        {/* H1 + accesos rápidos */}
        <h1 className="h2">Servicios</h1>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="#planes" className="btn-outline">Ver planes</a>
          <a href="#extras" className="btn-outline">Servicios adicionales</a>
          <a href="/portafolio" className="btn-outline">Portafolio</a>
        </div>

        {/* BENEFICIOS */}
        <section className="mt-8 bg-black">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">
            Beneficios para tu empresa
          </h2>
          <p className="text-center text-white/70 mt-3 max-w-3xl mx-auto">
            Más que producir videos: creamos un sistema mensual de contenido que mantiene tu comunicación activa, coherente y medible.
          </p>

          <div className="mt-8 flex justify-center">
            <img
              src="/images/beneficios.jpg"
              alt="Producción audiovisual Dekaelo"
              className="rounded-2xl shadow-lg max-h-80 object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {beneficios.map((b) => (
              <div key={b.t} className="p-6 rounded-2xl bg-gray-900 border border-white/10">
                <h3 className="font-semibold text-white">{b.t}</h3>
                <p className="text-white/70 mt-2">{b.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* NOSOTROS + VIDEO */}
        <section className="mt-14 bg-black">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                Nosotros lo hacemos por ti
              </h2>
              <p className="text-white/70 mt-3">
                Si tu equipo no tiene tiempo, <span className="text-white">Dekaelo se encarga del proceso completo</span>: estrategia, guion, rodaje, post y entregas optimizadas. Tú solo validas y publicas.
              </p>
              <div className="mt-7">
                <a href="/contacto#form" className="btn">
                  Quiero que lo hagan por mí →
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/uul8LNP6BbQ&loop=1"
                title="Video Dekaelo Media"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* PLANES */}
        <section id="planes" className="scroll-mt-20 py-24 px-0 bg-black rounded-3xl mt-12">
          <h2 className="text-4xl font-extrabold text-center mb-4 text-white">Planes mensuales</h2>
          <p className="text-center text-white/60 mb-12">
            Valores IVA incluido. Contrato mínimo sugerido: 3 meses.
          </p>

          <div className="mb-12 flex justify-center">
            <img
              src="/images/planes.jpg"
              alt="Planes audiovisuales Dekaelo"
              className="rounded-2xl shadow-lg max-h-80 object-cover"
            />
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {planes.map((p) => (
              <div key={p.key} className="relative p-1 rounded-3xl">
                <div className="h-full w-full rounded-3xl bg-gray-900 border border-white/10 p-8 flex flex-col">
                  {p.destacado && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full border border-white/15">
                      Recomendado
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white">{p.nombre}</h3>
                  <p className="mt-1 text-sm text-white/70">{p.subtitulo}</p>
                  <div className="mt-6">
                    <div className="text-3xl font-extrabold text-white">{p.precio}</div>
                    <div className="text-sm text-white/50">CLP / mes / IVA inc.</div>
                  </div>
                  <ul className="mt-6 space-y-3 text-white/80 text-sm">
                    {p.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                  <a
                    href="/contacto#form"
                    className={`mt-auto inline-block w-full text-center px-6 py-3 rounded-xl transition ${
                      p.destacado
                        ? 'bg-white text-black font-semibold hover:opacity-90 border border-white/10'
                        : 'bg-white/10 hover:bg-white/15 border border-white/15 text-white'
                    }`}
                  >
                    {p.ctaLabel}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-16 bg-black">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center">Preguntas frecuentes</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {faq.map((f) => (
              <div key={f.q} className="p-6 rounded-2xl bg-gray-900 border border-white/10">
                <h3 className="font-semibold text-white">{f.q}</h3>
                <p className="text-white/70 mt-2">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            ¿Listo para potenciar tu comunicación audiovisual?
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Dekaelo produce por ti: estrategia, guion, rodaje y post. En 30 días tendrás un sistema audiovisual constante que informa, vende y comunica.
          </p>
          <a
            href="/contacto#form"
            className="mt-8 inline-block px-10 py-4 bg-white text-black font-semibold rounded-2xl hover:opacity-90 transition"
          >
            Cotiza tu proyecto →
          </a>
        </section>
      </div>
    </section>
  );
}
