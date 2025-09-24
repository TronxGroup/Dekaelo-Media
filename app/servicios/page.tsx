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
        // Ajustes sugeridos:
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
        // Ajustes sugeridos:
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
        // Ajustes sugeridos:
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
          <a href="#planes" className="btn-outline" aria-label="Ver planes mensuales">Ver planes</a>
          <a href="#extras" className="btn-outline" aria-label="Ver servicios adicionales">Servicios adicionales</a>
          <a href="/portafolio" className="btn-outline" aria-label="Ver portafolio de videos">Portafolio</a>
        </div>

        {/* BENEFICIOS PARA EMPRESAS */}
        <section className="mt-8 bg-black">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">
            Beneficios para tu empresa
          </h2>
          <p className="text-center text-white/70 mt-3 max-w-3xl mx-auto">
            Más que producir videos: creamos un sistema mensual de contenido que mantiene tu comunicación
            activa, coherente y medible — tanto externa (marketing, ventas, marca) como <span className="text-white">interna</span>:
            inducción de personal, podcasts internos y contenido para salas de espera o señalética digital.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              { t: 'Consistencia que posiciona', d: 'Presencia sostenida mes a mes: tu marca deja de “aparecer y desaparecer”.' },
              { t: 'Velocidad & planificación', d: 'Calendario editorial, guion y rodaje programados. Menos urgencias, más calidad.' },
              { t: 'Eficiencia de costos', d: 'Aprovechamos cada jornada para múltiples entregas (video largo + clips).' },
              { t: 'Coherencia de marca', d: 'Mismo tono visual y narrativo en todas las piezas y plataformas.' },
              { t: 'Medición y mejora', d: 'Informe básico mensual para iterar según desempeño real.' },
              { t: 'Escalable', d: 'Sumamos jornadas, formatos o motion graphics según tus objetivos.' },
              { t: 'Comunicación interna', d: 'Inducción, onboarding, cultura y seguridad. Podcasts internos y contenidos para salas de espera, intranet y pantallas.' },
            ].map((b) => (
              <div key={b.t} className="p-6 rounded-2xl bg-gray-900 border border-white/10">
                <h3 className="font-semibold text-white">{b.t}</h3>
                <p className="text-white/70 mt-2">{b.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* POR QUÉ AHORA (VIDEO-FIRST 2025) */}
        <section className="mt-14 bg-black">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              ¿Por qué ahora? — El video mueve todo el viaje del cliente
            </h2>
            <p className="text-white/70 mt-3">
              El consumo cambió: las personas usan video para entretenerse, <span className="text-white">aprender</span>,
              <span className="text-white"> investigar compras</span> y <span className="text-white">decidir</span>. 
              Estudios recientes indican que el 69% prefiere aprender con video vs. texto/audio; 
              el 70% lo elige para “cómo construir algo” y el 63% para cocinar o seguir procesos.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { t: 'Del awareness a la acción', d: 'El video ya no es solo alcance: informa, compara y acelera decisiones.' },
              { t: 'De scroll a compra', d: 'Shorts, podcasts y CTV conviven en un mismo recorrido no lineal.' },
              { t: 'Confianza en creadores', d: 'El contenido con rostro humano reduce la fricción y acorta el ciclo de compra.' },
            ].map((i) => (
              <div key={i.t} className="p-6 rounded-2xl bg-gray-900 border border-white/10">
                <h3 className="font-semibold text-white">{i.t}</h3>
                <p className="text-white/70 mt-2">{i.d}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <span className="inline-block text-xs text-white/50">
              *Fuente: síntesis de hallazgos sectoriales 2025 sobre hábitos de video.
            </span>
          </div>
        </section>

        {/* EJEMPLOS COMUNICACIÓN INTERNA */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-white text-center">Ejemplos de comunicación interna</h2>
          <p className="text-center text-white/70 mt-2 max-w-3xl mx-auto">
            Piezas pensadas para onboarding, cultura y operaciones. Duraciones sugeridas y formatos listos para intranet, pantallas y correo interno.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { t: 'Onboarding / Inducción', d: '3–5 min · Bienvenida + procesos clave.' },
              { t: 'Cápsulas de Cultura', d: '30–60 s · Valores, beneficios, clima.' },
              { t: 'Seguridad y Prevención', d: '45–90 s · Protocolos críticos y recordatorios.' },
              { t: 'Mensaje de Gerencia', d: '60–90 s · Objetivos, hitos, reconocimientos.' },
              { t: 'Podcast Interno', d: '20–40 min · Conversaciones con líderes y equipos.' },
              { t: 'Salas de Espera / Señalética', d: '10–15 s en loop · Info útil y tips.' },
            ].map((e) => (
              <div key={e.t} className="p-6 rounded-2xl bg-gray-900 border border-white/10">
                <h3 className="font-semibold text-white">{e.t}</h3>
                <p className="text-white/70 mt-1">{e.d}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="/contacto#form" className="btn-outline" aria-label="Planificar piezas internas">Planificar piezas internas</a>
          </div>
        </section>

        {/* NOSOTROS LO HACEMOS POR TI */}
        <section className="mt-14 bg-black">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                Nosotros lo hacemos por ti
              </h2>
              <p className="text-white/70 mt-3">
                Si tu equipo no tiene tiempo (o no sabe por dónde partir), 
                <span className="text-white"> Dekaelo se encarga del proceso completo</span>: estrategia, guion, rodaje, post y entregas 
                optimizadas por plataforma. Tú solo validas y publicas.
              </p>
              <ul className="mt-6 space-y-3 text-white/80 text-sm">
                <li>• <span className="text-white">Estrategia mensual</span>: calendario, objetivos y mensajes clave.</li>
                <li>• <span className="text-white">Guion + pre</span>: pauta, locaciones, permisos, elenco si aplica.</li>
                <li>• <span className="text-white">Rodaje ágil</span>: 1–2 cámaras, audio pro y look consistente.</li>
                <li>• <span className="text-white">Post</span>: edición, color, motion graphics, subtítulos.</li>
                <li>• <span className="text-white">Distribución</span>: entregas para YouTube, LinkedIn, Instagram, intranet y pantallas.</li>
                <li>• <span className="text-white">Aprendizaje</span>: informe básico con mejoras para el mes siguiente.</li>
              </ul>
              <div className="mt-7">
                <a href="/contacto#form" className="btn" aria-label="Quiero que Dekaelo produzca mis videos">
                  Quiero que lo hagan por mí →
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-gray-900 border border-white/10 p-6">
              <h3 className="font-semibold text-white">Entregas típicas por jornada</h3>
              <ul className="mt-3 space-y-2 text-white/70 text-sm">
                <li>• 1 video largo (institucional, tutorial, vodcast o caso cliente).</li>
                <li>• 4–5 recortes verticales (reels/shorts) para RRSS.</li>
                <li>• 1 versión <span className="text-white">interna</span> (inducción, cultura o seguridad).</li>
                <li>• Paquete de thumbnails, carátulas y subtítulos.</li>
              </ul>
              <p className="mt-4 text-white/60 text-xs">
                * Según plan (Básico/Estándar/Premium) y objetivos del mes.
              </p>
            </div>
          </div>
        </section>

        {/* LO QUE DICEN LOS DATOS */}
        <section className="mt-12 bg-gradient-to-b from-gray-950 to-black rounded-3xl p-8 border border-white/10">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { n: '69%', d: 'prefiere aprender con video vs. texto/audio' },
              { n: '70%', d: 'elige video para resolver “cómo hacerlo”' },
              { n: '6 días', d: 'menos en el ciclo de compra cuando el contenido inspira confianza' },
            ].map((k) => (
              <div key={k.n} className="p-6 rounded-2xl bg-gray-900/60 border border-white/10">
                <div className="text-4xl font-extrabold text-white">{k.n}</div>
                <div className="text-white/70 mt-2 text-sm">{k.d}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-white/50 text-xs mt-4">
            *Indicadores de referencia del sector (estudios 2025).
          </p>
        </section>

        {/* COMPARATIVA: MENSUAL VS VIDEO SUELTO */}
        <section className="mt-12 bg-black">
          <h2 className="text-2xl font-bold text-white text-center">¿Por qué un plan mensual?</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-gray-900 border border-white/10 p-6">
              <h3 className="font-semibold text-white">Plan mensual</h3>
              <ul className="mt-3 space-y-2 text-white/80 text-sm leading-relaxed">
                <li>• Pipeline de producción estable (brief → guion → rodaje → entregas).</li>
                <li>• Mayor rendimiento por jornada: 1 video largo + 4–5 clips.</li>
                <li>• Consistencia en tono, look y mensajes clave.</li>
                <li>• Ajustes mensuales basados en datos reales.</li>
                <li>• Mejor costo/resultado en el tiempo.</li>
                <li>• Incluye piezas para <span className="text-white">comunicación interna</span>: inducción, cultura, seguridad, señalética digital.</li>
                <li>• Menos fricción en aprobaciones: pautas claras y stakeholders alineados.</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-gray-950 border border-white/10 p-6">
              <h3 className="font-semibold text-white/90">Videos sueltos</h3>
              <ul className="mt-3 space-y-2 text-white/60 text-sm leading-relaxed">
                <li>• Comunicación intermitente y poco predecible.</li>
                <li>• Briefs urgentes, mayor fricción y tiempos irregulares.</li>
                <li>• Inconsistencias visuales y narrativas entre piezas.</li>
                <li>• Difícil medir, aprender y escalar.</li>
                <li>• Mayor costo por impacto aislado.</li>
                <li>• Suele ignorar la dimensión interna (inducción, cultura, señalética).</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-6">
            <a href="/contacto#form" className="btn" aria-label="Evaluar mi plan audiovisual">Evaluar mi plan</a>
          </div>
        </section>

        {/* Planes mensuales */}
        <section
          id="planes"
          className="scroll-mt-20 py-24 px-0 bg-black rounded-3xl mt-8"
          data-testid="section-planes"
        >
          <h2 className="text-4xl font-extrabold text-center mb-4 text-white">Planes mensuales</h2>
          <p className="text-center text-white/60 mb-12">
            Valores IVA incluido. Contrato mínimo sugerido: 3 meses.
          </p>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {planes.map((p) => (
              <div key={p.key} className="relative p-1 rounded-3xl">
                <div
                  className="h-full w-full rounded-3xl bg-gray-900 border border-white/10 p-8 flex flex-col"
                  data-testid={`card-${p.key}`}
                >
                  {p.destacado && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full border border-white/15">
                      Recomendado
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white">{p.nombre}</h3>
                  <p className="mt-1 text-sm text-white/70">{p.subtitulo}</p>
                  <div className="mt-6">
                    <div className={`text-3xl ${p.destacado ? 'md:text-4xl' : ''} font-extrabold text-white`}>{p.precio}</div>
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
                    aria-label={`Quiero plan ${p.nombre}`}
                  >
                    {p.ctaLabel}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-white/60 text-sm mt-8">
            * Cupos limitados (máximo 5 empresas/mes) para mantener la calidad.
          </p>
        </section>

        {/* Extras */}
        <section id="extras" className="scroll-mt-20 py-20 px-0 bg-black text-center rounded-3xl mt-8">
          <h2 className="text-4xl font-extrabold mb-8 text-white">Servicios Adicionales</h2>
          <p className="max-w-4xl mx-auto text-lg text-white/70 leading-relaxed mb-10">
            Potencia tu plan con opciones extra a valores preferentes.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: '🎥 2ª cámara o dron', text: 'Mayor cobertura visual para tu proyecto (desde $150.000).' },
              { title: '🎙️ Locución y subtitulado', text: 'Voces profesionales y subtítulos listos para RRSS o TV.' },
              { title: '✨ Animación gráfica', text: 'Motion graphics para reforzar tu mensaje (logos, datos, transiciones).' },
              { title: '📦 Entregas extra', text: 'Reels adicionales o versiones extendidas según tus objetivos.' },
            ].map((s, i) => (
              <div key={i} className="p-8 bg-gray-900 rounded-3xl shadow-md border border-white/10 text-left">
                <h3 className="font-bold mb-3 text-white">{s.title}</h3>
                <p className="text-white/80">{s.text}</p>
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
            Dekaelo produce por ti: estrategia, guion, rodaje y post. 
            En 30 días tendrás un sistema de video mensual que informa, vende y comunica internamente.
          </p>
          <a
            href="/contacto#form"
            className="mt-8 inline-block px-10 py-4 bg-white text-black font-semibold rounded-2xl hover:opacity-90 transition"
            aria-label="Ir a contacto para cotizar"
          >
            Cotiza tu proyecto →
          </a>
        </section>
      </div>

      {/* JSON-LD: Service + Offers + Breadcrumbs */}
      <script
        type="application/ld+json"
        // @ts-ignore
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Servicios de Producción Audiovisual",
            provider: {
              "@type": "Organization",
              name: "Dekaelo Media",
              url: "https://www.dekaelomedia.com"
            },
            areaServed: { "@type": "Country", name: "Chile" },
            serviceType: "Plan Audiovisual Mensual, Video Corporativo, Comunicación Interna, Reels",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Planes mensuales",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Básico",
                  priceCurrency: "CLP",
                  price: "595000",
                  availability: "https://schema.org/InStock",
                  url: "https://www.dekaelomedia.com/servicios#planes"
                },
                {
                  "@type": "Offer",
                  name: "Estándar",
                  priceCurrency: "CLP",
                  price: "952000",
                  availability: "https://schema.org/InStock",
                  url: "https://www.dekaelomedia.com/servicios#planes"
                },
                {
                  "@type": "Offer",
                  name: "Premium",
                  priceCurrency: "CLP",
                  price: "1450000",
                  availability: "https://schema.org/InStock",
                  url: "https://www.dekaelomedia.com/servicios#planes"
                }
              ]
            }
          }),
        }}
      />
      <script
        type="application/ld+json"
        // @ts-ignore
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.dekaelomedia.com/" },
              { "@type": "ListItem", position: 2, name: "Servicios", item: "https://www.dekaelomedia.com/servicios" }
            ]
          }),
        }}
      />

      {/* JSON-LD: FAQPage (SEO enriquecido) */}
      <script
        type="application/ld+json"
        // @ts-ignore
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a }
            }))
          }),
        }}
      />
    </section>
  );
}
