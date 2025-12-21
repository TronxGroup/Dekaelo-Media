import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Servicios de Producción Audiovisual y Videos Corporativos | Dekaelo Media',
  description:
    'Plan audiovisual mensual, videos corporativos, comunicación interna, reels y motion graphics para bancos, cámaras, colegios y empresas del Chile Central.',
  alternates: {
    canonical: 'https://www.dekaelomedia.com/servicios',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.dekaelomedia.com/servicios',
    title: 'Servicios de Producción Audiovisual y Videos Corporativos | Dekaelo Media',
    description:
      'Planes mensuales, videos corporativos y servicios audiovisuales para comunicación interna, institucional y campañas en Chile.',
    images: ['/og-cover.jpg'],
  },
  twitter: { card: 'summary_large_image' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export default function Page() {
  const beneficios = [
    {
      t: 'Consistencia que posiciona',
      d: 'Presencia sostenida mes a mes: tu marca deja de “aparecer y desaparecer” según la urgencia del momento.',
    },
    {
      t: 'Velocidad y planificación',
      d: 'Calendario editorial, guion y rodaje programados. Menos incendios de última hora, más calidad y foco.',
    },
    {
      t: 'Eficiencia de costos',
      d: 'Aprovechamos cada jornada al máximo: un video corporativo largo, varios clips y versiones para distintos canales.',
    },
    {
      t: 'Coherencia de marca',
      d: 'Mismo tono visual y narrativo en todas las piezas: YouTube, LinkedIn, redes sociales e intranet.',
    },
    {
      t: 'Medición y mejora',
      d: 'Informe básico mensual para entender qué funciona mejor y ajustar formatos, mensajes y duración.',
    },
    {
      t: 'Comunicación interna',
      d: 'Inducción, onboarding, cultura y seguridad. Podcasts internos y contenidos para salas, intranet y pantallas.',
    },
  ];

  /**
   * ✅ PRECIOS NUEVOS (posicionamiento corporativo / partner mensual)
   * - Básico: $750.000 (IVA incl.)
   * - Estándar: $1.290.000 (IVA incl.)
   * - Premium: $1.750.000 (IVA incl.)
   *
   * Nota: si quieres, puedo agregar "Desde" o "Precio 2026" o "Empresas / Instituciones"
   */
  const planes = [
    {
      key: 'basico',
      nombre: 'Básico',
      subtitulo: 'Para marcas que inician presencia mensual',
      precio: '$750.000',
      bullets: [
        '1 cápsula institucional (máx. 2 minutos)',
        '2 reels / shorts / cápsulas',
        'Grabación simple (1 cámara, hasta 3 horas)',
        'Exportación para 1 plataforma',
        '1 revisión incluida',
        'Publicación lista para YouTube / LinkedIn / Instagram / Intranet',
        'Dekaelo gestiona guion, rodaje y post. Tu equipo solo aprueba.',
      ],
      ctaLabel: 'Cotizar plan Básico',
      destacado: false,
    },
    {
      key: 'estandar',
      nombre: 'Estándar',
      subtitulo: 'Para equipos con calendario activo de marketing',
      precio: '$1.290.000',
      bullets: [
        '1 jornada de grabación (8 horas)',
        '1 video largo institucional / YouTube / vodcast',
        '4–5 reels / shorts / cápsulas',
        'Asesoría + guion creativo',
        'Entrega optimizada por plataforma',
        '1 revisión incluida',
        'Informe mensual estratégico básico',
        'Publicación lista para YouTube / LinkedIn / Instagram / Intranet',
        'Dekaelo gestiona guion, rodaje y post. Tu equipo solo aprueba.',
      ],
      ctaLabel: 'Cotizar plan Estándar',
      destacado: true,
    },
    {
      key: 'premium',
      nombre: 'Premium',
      subtitulo: 'Para campañas y mayor cobertura',
      precio: '$1.750.000',
      bullets: [
        '2 jornadas de grabación (16 horas)',
        '2 videos largos de campaña',
        '8–10 reels / shorts / cápsulas',
        'Asesoría estratégica avanzada',
        '2 rondas de revisión',
        'Entregas personalizadas + material adicional',
        'Informe mensual con métricas y recomendaciones de pauta',
        'Publicación lista para YouTube / LinkedIn / Instagram / Intranet',
        'Dekaelo gestiona guion, rodaje y post. Tu equipo solo aprueba.',
      ],
      ctaLabel: 'Cotizar plan Premium',
      destacado: false,
    },
  ] as const;

  const faq = [
    {
      q: 'No tenemos tiempo ni ideas, ¿igual sirve?',
      a: 'Sí. Partimos con una reunión corta mensual; nosotros proponemos calendario, guiones y formatos. Tu equipo solo valida antes de grabar.',
    },
    {
      q: '¿Publican por nosotros?',
      a: 'Entregamos archivos optimizados y, si lo necesitas, te asistimos con la carga, formatos y buenas prácticas por plataforma.',
    },
    {
      q: '¿Trabajan en regiones?',
      a: 'Sí. Coordinamos logística y equipo local o viajamos según agenda y plan. Lo vemos caso a caso en la propuesta.',
    },
    {
      q: '¿Pueden incluir más reels o un evento?',
      a: 'Claro. El plan es escalable: podemos sumar jornadas, multicámara/dron, motion extra o cobertura de eventos específicos.',
    },
  ];

  /**
   * ✅ PRECIOS NUEVOS EXTRAS (más coherentes con estándar corporativo)
   */
  const extras = [
    {
      t: 'Cobertura de eventos',
      d: 'Registro de charlas, lanzamientos y conferencias. Entrega de video highlight + clips para redes y comunicación interna.',
      p: 'desde $850.000',
      note: 'IVA incluido · valores desde, según duración y logística.',
    },
    {
      t: 'Multicámara / Dron',
      d: 'Segunda cámara y/o tomas aéreas certificadas para dar más dinamismo y contexto a tus videos corporativos y eventos.',
      p: 'desde $250.000',
      note: 'IVA incluido · sujeto a permisos y locación.',
    },
    {
      t: 'Motion Graphics',
      d: 'Gráficos animados, lower thirds e inserción de datos clave para presentaciones, videos institucionales y campañas.',
      p: 'desde $320.000',
      note: 'IVA incluido · depende de cantidad de piezas y complejidad.',
    },
    {
      t: 'Streaming y webinars',
      d: 'Producción técnica para transmisiones en YouTube, LinkedIn o Zoom, con gráficas, overlays y soporte de Q&A.',
      p: 'desde $750.000',
      note: 'IVA incluido · según número de cámaras, plataforma y duración.',
    },
    {
      t: 'Podcast / Vodcast corporativo',
      d: 'Formato conversacional para liderazgo, cultura interna, onboarding y comunicación con equipos distribuidos.',
      p: 'desde $650.000',
      note: 'IVA incluido · incluye set básico y postproducción estándar.',
    },
    {
      t: 'Kit de marca para video',
      d: 'Plantillas, lower thirds, paletas y tipografías para que todo tu contenido audiovisual mantenga la misma identidad.',
      p: 'desde $320.000',
      note: 'IVA incluido · entregable reusable para todo el año.',
    },
  ] as const;

  return (
    <main className="section bg-black">
      <div className="container">
        {/* Breadcrumb / contexto */}
        <nav className="text-xs text-white/50 mb-4" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1">
            <li>
              <Link href="/" className="hover:text-white">
                Inicio
              </Link>
            </li>
            <li className="text-white/40">/</li>
            <li>
              <span className="text-white">Servicios audiovisuales</span>
            </li>
          </ol>
        </nav>

        {/* H1 + accesos rápidos */}
        <header>
          <h1 className="h2">Servicios de producción audiovisual y videos corporativos</h1>
          <p className="mt-2 text-white/70 max-w-2xl">
            Planes mensuales, videos corporativos y servicios adicionales para que tu marca tenga
            contenido constante, profesional y alineado con tus objetivos de comunicación interna,
            institucional y comercial.
          </p>

          {/* microcopy para sostener el reposicionamiento (sin sonar arrogante) */}
          <p className="mt-3 text-sm text-white/60 max-w-2xl">
            Valores referenciales (IVA incluido). Trabajamos con estándar corporativo: alcance claro,
            entregas por hitos y revisiones acotadas. Para licitaciones o compliance, armamos propuesta formal.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="#videos-corporativos" className="btn-outline">
              Videos corporativos
            </Link>
            <Link href="#planes" className="btn-outline">
              Ver planes mensuales
            </Link>
            <Link href="#extras" className="btn-outline">
              Servicios adicionales
            </Link>
            <Link href="/portafolio" className="btn-outline">
              Ver portafolio
            </Link>
          </div>
        </header>

        {/* BLOQUE: VIDEOS CORPORATIVOS & PROYECTOS PUNTUALES */}
        <section
          id="videos-corporativos"
          className="mt-10 bg-black border-y border-white/10 py-12 rounded-3xl"
        >
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                Videos corporativos y proyectos puntuales
              </h2>
              <p className="text-white/70 mt-3">
                Producción de <span className="text-white">videos corporativos e institucionales</span>{' '}
                para empresas que necesitan comunicar con claridad a clientes, colaboradores o
                inversionistas. Desde una sola pieza estratégica hasta un plan recurrente de
                contenido.
              </p>
              <ul className="mt-4 space-y-2 text-white/80 text-sm">
                <li>• Videos institucionales para web, presentaciones y admisión.</li>
                <li>• Videos corporativos para comunicación con clientes y proveedores.</li>
                <li>• Cápsulas de comunicación interna, cultura y seguridad.</li>
                <li>• Vodcasts corporativos y piezas para LinkedIn y YouTube.</li>
                <li>• Videos explicativos de procesos, productos o servicios B2B.</li>
              </ul>
              <p className="text-white/70 mt-4 text-sm">
                Puedes contratar un <span className="text-white">proyecto puntual de video
                corporativo</span> o integrarlo dentro de un plan mensual, según tus necesidades y
                calendario de comunicación.
              </p>

              {/* ancla de valor para corporativo (sin poner precio fijo en la web) */}
              <div className="mt-5 rounded-2xl border border-white/10 bg-gray-900 p-4">
                <p className="text-sm text-white/70">
                  <span className="text-white font-semibold">Proyectos puntuales (desde):</span>{' '}
                  videos institucionales desde <span className="text-white">$1.200.000</span>{' '}
                  (IVA incl.), según locación, guion y piezas derivadas. Te cotizamos rápido con alcance claro.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contacto#form" className="btn">
                  Cotizar video corporativo →
                </Link>
                <Link href="/portafolio" className="btn-outline">
                  Ver ejemplos de videos →
                </Link>
              </div>
            </div>

            <div className="relative w-full h-80 md:h-full">
              <Image
                src="/images/videos-corporativos.jpg"
                alt="Rodaje de video corporativo Dekaelo Media"
                fill
                className="rounded-2xl shadow-lg object-cover border border-white/10"
              />
            </div>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className="mt-10 bg-black">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">
            Beneficios para tu empresa
          </h2>
          <p className="text-center text-white/70 mt-3 max-w-3xl mx-auto">
            Más que producir videos sueltos: creamos un sistema mensual de contenido que mantiene tu
            comunicación activa, coherente y medible, sin sobrecargar a tu equipo interno.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="relative w-full max-w-3xl h-80">
              <Image
                src="/images/beneficios.jpg"
                alt="Producción audiovisual Dekaelo Media en rodaje"
                fill
                className="rounded-2xl shadow-lg object-cover border border-white/10"
                priority
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {beneficios.map((b) => (
              <article
                key={b.t}
                className="p-6 rounded-2xl bg-gray-900 border border-white/10"
              >
                <h3 className="font-semibold text-white">{b.t}</h3>
                <p className="text-white/70 mt-2">{b.d}</p>
              </article>
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
                Si tu equipo no tiene tiempo,{' '}
                <span className="text-white">Dekaelo se encarga del proceso completo</span>:
                estrategia, guion, rodaje, postproducción y entregas optimizadas. Tú te concentras en
                la operación y las decisiones, no en coordinar una productora distinta cada vez.
              </p>
              <p className="text-white/70 mt-3">
                Trabajamos especialmente con equipos de marketing, comunicaciones internas y
                directorios que necesitan producción seria, plazos claros y material que pueda
                reutilizarse en múltiples canales.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contacto#form" className="btn">
                  Quiero que lo hagan por mí →
                </Link>
                <Link href="/portafolio" className="btn-outline">
                  Ver ejemplos de trabajos →
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/uul8LNP6BbQ?playlist=uul8LNP6BbQ&loop=1&rel=0&modestbranding=1&playsinline=1"
                title="Reel Dekaelo Media"
                className="aspect-video w-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* PLANES */}
        <section id="planes" className="scroll-mt-20 py-24 bg-black rounded-3xl mt-12">
          <h2 className="text-4xl font-extrabold text-center mb-4 text-white">
            Planes audiovisuales mensuales
          </h2>
          <p className="text-center text-white/60 mb-12 max-w-3xl mx-auto">
            Valores IVA incluido. Contrato mínimo sugerido: 3 meses. Pensado para equipos que
            necesitan contenido constante y un partner estable en producción audiovisual, además de
            proyectos puntuales de video corporativo cuando se requiera.
          </p>

          <div className="mb-12 flex justify-center">
            <div className="relative w-full max-w-3xl h-80">
              <Image
                src="/images/planes.jpg"
                alt="Planes audiovisuales mensuales Dekaelo Media"
                fill
                className="rounded-2xl shadow-lg object-cover border border-white/10"
              />
            </div>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {planes.map((p) => (
              <article key={p.key} className="relative p-1 rounded-3xl">
                <div className="h-full w-full rounded-3xl bg-gray-900 border border-white/10 p-8 flex flex-col">
                  {p.destacado && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full border border-white/15">
                      Plan recomendado
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white">{p.nombre}</h3>
                  <p className="mt-1 text-sm text-white/70">{p.subtitulo}</p>
                  <div className="mt-6">
                    <div className="text-3xl font-extrabold text-white">{p.precio}</div>
                    <div className="text-sm text-white/50">CLP / mes · IVA incluido</div>
                  </div>

                  {/* mini sello de control de alcance */}
                  <div className="mt-4 text-xs text-white/55">
                    Incluye 1 ciclo de revisión por pieza (ajustes menores). Cambios mayores o versiones extra se cotizan.
                  </div>

                  <ul className="mt-6 space-y-3 text-white/80 text-sm">
                    {p.bullets.map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>
                  <Link
                    href="/contacto#form"
                    className={`mt-auto inline-block w-full text-center px-6 py-3 rounded-xl transition ${
                      p.destacado
                        ? 'bg-white text-black font-semibold hover:opacity-90 border border-white/10'
                        : 'bg-white/10 hover:bg-white/15 border border-white/15 text-white'
                    }`}
                  >
                    {p.ctaLabel}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-white/60 max-w-3xl mx-auto">
            ¿Tienes una necesidad particular (más jornadas, más piezas, un video corporativo
            específico o integración con campañas)? Podemos ajustar cualquiera de los planes en la
            propuesta.
          </p>
        </section>

        {/* SERVICIOS ADICIONALES */}
        <section id="extras" className="scroll-mt-20 py-24 bg-black rounded-3xl mt-12">
          <h2 className="text-4xl font-extrabold text-center mb-4 text-white">
            Servicios adicionales
          </h2>
          <p className="text-center text-white/60 mb-12 max-w-3xl mx-auto">
            Complementa tus planes mensuales o tus videos corporativos con servicios clave para
            eventos, campañas y comunicación interna. Todo se integra a tu identidad de marca y a tu
            calendario de comunicación.
          </p>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            {extras.map((x) => (
              <article
                key={x.t}
                className="p-6 rounded-2xl bg-gray-900 border border-white/10 flex flex-col"
              >
                <h3 className="font-semibold text-white">{x.t}</h3>
                <p className="text-white/70 mt-2">{x.d}</p>
                <div className="mt-4 text-sm text-white/60">{x.p} <span className="text-white/30">· IVA incluido</span></div>
                {'note' in x && x.note ? (
                  <div className="mt-2 text-xs text-white/45">{x.note}</div>
                ) : null}
                <Link
                  href="/contacto#form"
                  className="mt-6 inline-block w-full text-center px-6 py-3 rounded-xl transition bg-white/10 hover:bg-white/15 border border-white/15 text-white"
                >
                  Solicitar cotización →
                </Link>
              </article>
            ))}
          </div>

          <p className="text-center mt-10 text-white/60 text-sm max-w-3xl mx-auto">
            Si necesitas algo más específico (por ejemplo, fotografía corporativa o traducciones),
            podemos incorporarlo en una propuesta a medida.
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-16 bg-black">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center">
            Preguntas frecuentes
          </h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {faq.map((f) => (
              <article
                key={f.q}
                className="p-6 rounded-2xl bg-gray-900 border border-white/10"
              >
                <h3 className="font-semibold text-white">{f.q}</h3>
                <p className="text-white/70 mt-2">{f.a}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            ¿Listo para tu próximo video corporativo?
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            En 30 días puedes tener un video corporativo bien producido —o un sistema audiovisual
            constante— que informe, venda y comunique mejor hacia dentro y hacia fuera de tu
            organización.
          </p>
          <Link
            href="/contacto#form"
            className="mt-8 inline-block px-10 py-4 bg-white text-black font-semibold rounded-2xl hover:opacity-90 transition"
          >
            Cotizar mi proyecto →
          </Link>
          <p className="mt-4 text-xs text-white/50">
            *Valores referenciales IVA incluido. Alcance definitivo se confirma en propuesta formal según calendario, locación y entregables.
          </p>
        </section>
      </div>
    </main>
  );
}
