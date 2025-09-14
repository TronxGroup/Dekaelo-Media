export const metadata = {
  title: 'Servicios | Dekaelo Media',
  description: 'Producción integral, plan mensual, piezas corporativas, reels y cobertura de eventos.',
};

export default function Page() {
  return (
    <section className="section bg-black">
      <div className="container">
        <h1 className="h2">Servicios</h1>

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

        {/* EJEMPLOS COMUNICACIÓN INTERNA */}
        <section className="mt-10">
          <h3 className="text-2xl font-bold text-white text-center">Ejemplos de comunicación interna</h3>
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
                <h4 className="font-semibold text-white">{e.t}</h4>
                <p className="text-white/70 mt-1">{e.d}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="/contacto#form" className="btn-outline">Planificar piezas internas</a>
          </div>
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
            <a href="/contacto#form" className="btn">Evaluar mi plan</a>
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
            {/* Básico */}
            <div className="relative p-1 rounded-3xl">
              <div className="h-full w-full rounded-3xl bg-gray-900 border border-white/10 p-8 flex flex-col" data-testid="card-basico">
                <h3 className="text-xl font-bold text-white">Básico</h3>
                <p className="mt-1 text-sm text-white/60">Para iniciar con presencia mensual</p>
                <div className="mt-6">
                  <div className="text-3xl font-extrabold text-white">$595.000</div>
                  <div className="text-sm text-white/50">CLP / mes / IVA inc.</div>
                </div>
                <ul className="mt-6 space-y-3 text-white/80 text-sm">
                  <li>1 cápsula institucional (máx. 2 min)</li>
                  <li>2 reels/shorts/cápsulas</li>
                  <li>Grabación simple (1 cámara, hasta 3h)</li>
                  <li>Exportación para 1 plataforma</li>
                  <li>1 revisión</li>
                </ul>
                <a href="/contacto#form" className="mt-auto inline-block w-full text-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 transition border border-white/15">
                  Quiero este plan
                </a>
              </div>
            </div>

            {/* Estándar */}
            <div className="relative p-1 rounded-3xl">
              <div className="h-full w-full rounded-3xl bg-gray-900 border border-white/10 p-8 flex flex-col" data-testid="card-estandar">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full border border-white/15">
                  Recomendado
                </div>
                <h3 className="text-xl font-bold text-white">Estándar</h3>
                <p className="mt-1 text-sm text-white/70">Equilibrio perfecto para crecer</p>
                <div className="mt-6">
                  <div className="text-4xl font-extrabold text-white">$952.000</div>
                  <div className="text-sm text-white/50">CLP / mes / IVA inc.</div>
                </div>
                <ul className="mt-6 space-y-3 text-white/90 text-sm">
                  <li>1 jornada de grabación (8 horas)</li>
                  <li>1 video largo institucional / YouTube / vodcast</li>
                  <li>4–5 reels/shorts/cápsulas</li>
                  <li>Asesoría + guion creativo</li>
                  <li>Entrega optimizada por plataforma</li>
                  <li>1 revisión</li>
                  <li>Informe mensual estratégico básico</li>
                </ul>
                <a href="/contacto#form" className="mt-auto inline-block w-full text-center px-6 py-3 rounded-xl bg-white text-black font-semibold hover:opacity-90 transition">
                  Quiero este plan
                </a>
              </div>
            </div>

            {/* Premium */}
            <div className="relative p-1 rounded-3xl">
              <div className="h-full w-full rounded-3xl bg-gray-900 border border-white/10 p-8 flex flex-col" data-testid="card-premium">
                <h3 className="text-xl font-bold text-white">Premium</h3>
                <p className="mt-1 text-sm text-white/60">Para campañas y mayor cobertura</p>
                <div className="mt-6">
                  <div className="text-3xl font-extrabold text-white">$1.450.000</div>
                  <div className="text-sm text-white/50">CLP / mes / IVA inc.</div>
                </div>
                <ul className="mt-6 space-y-3 text-white/80 text-sm">
                  <li>2 jornadas de grabación (16 horas)</li>
                  <li>2 videos largos de campaña</li>
                  <li>8–10 reels/shorts/cápsulas</li>
                  <li>Asesoría estratégica avanzada</li>
                  <li>2 rondas de revisión</li>
                  <li>Entregas personalizadas + material adicional</li>
                  <li>Informe mensual con métricas y recomendaciones de pauta</li>
                </ul>
                <a href="/contacto#form" className="mt-auto inline-block w-full text-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 transition border border-white/15">
                  Quiero este plan
                </a>
              </div>
            </div>
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

        {/* CTA FINAL */}
        <section className="py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            ¿Listo para potenciar tu comunicación audiovisual?
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Cotiza tu plan hoy y asegura un aliado creativo que transforma ideas en impacto real.
          </p>
          <a
            href="/contacto"
            className="mt-8 inline-block px-10 py-4 bg-white text-black font-semibold rounded-2xl hover:opacity-90 transition"
          >
            Cotiza tu proyecto →
          </a>
        </section>
      </div>
    </section>
  );
}
