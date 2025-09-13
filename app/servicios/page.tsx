export const metadata = {
  title: 'Servicios | Dekaelo Media',
  description: 'Producción integral, plan mensual, piezas corporativas, reels y cobertura de eventos.',
};

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h2">Servicios</h1>

        {/* Planes mensuales */}
        <section id="planes" className="scroll-mt-20 py-24 px-0 bg-gray-950 rounded-3xl mt-8" data-testid="section-planes">
          <h2 className="text-4xl font-extrabold text-center mb-4 text-yellow-500">Planes mensuales</h2>
          <p className="text-center text-gray-400 mb-12">Valores IVA incluido. Contrato mínimo sugerido: 3 meses.</p>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Básico */}
            <div className="relative p-1 rounded-3xl bg-gradient-to-b from-gray-700 to-gray-800">
              <div className="h-full w-full rounded-3xl bg-gray-900 border border-gray-800 p-8 flex flex-col" data-testid="card-basico">
                <h3 className="text-xl font-bold text-gray-200">Básico</h3>
                <p className="mt-1 text-sm text-gray-400">Para iniciar con presencia mensual</p>
                <div className="mt-6">
                  <div className="text-3xl font-extrabold">$595.000</div>
                  <div className="text-sm text-gray-400">CLP / mes / IVA inc.</div>
                </div>
                <ul className="mt-6 space-y-3 text-gray-300 text-sm">
                  <li>1 cápsula institucional (máx. 2 min)</li>
                  <li>2 reels/shorts/cápsulas</li>
                  <li>Grabación simple (1 cámara, hasta 3h)</li>
                  <li>Exportación para 1 plataforma</li>
                  <li>1 revisión</li>
                </ul>
                <a href="#contacto" className="mt-auto inline-block w-full text-center px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition">Quiero este plan</a>
              </div>
            </div>

            {/* Estándar */}
            <div className="relative p-1 rounded-3xl bg-gradient-to-b from-yellow-600 to-blue-700 shadow-2xl">
              <div className="h-full w-full rounded-3xl bg-gray-900 border border-gray-800 p-8 flex flex-col" data-testid="card-estandar">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">Recomendado</div>
                <h3 className="text-xl font-bold text-gray-200">Estándar</h3>
                <p className="mt-1 text-sm text-gray-300">Equilibrio perfecto para crecer</p>
                <div className="mt-6">
                  <div className="text-4xl font-extrabold">$952.000</div>
                  <div className="text-sm text-gray-400">CLP / mes / IVA inc.</div>
                </div>
                <ul className="mt-6 space-y-3 text-gray-200 text-sm">
                  <li>1 jornada de grabación (8 horas)</li>
                  <li>1 video largo institucional / YouTube / vodcast</li>
                  <li>4–5 reels/shorts/cápsulas</li>
                  <li>Asesoría + guion creativo</li>
                  <li>Entrega optimizada por plataforma</li>
                  <li>1 revisión</li>
                  <li>Informe mensual estratégico básico</li>
                </ul>
                <a href="#contacto" className="mt-auto inline-block w-full text-center px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-600 to-blue-700 hover:opacity-90 transition">Quiero este plan</a>
              </div>
            </div>

            {/* Premium */}
            <div className="relative p-1 rounded-3xl bg-gradient-to-b from-gray-700 to-gray-800">
              <div className="h-full w-full rounded-3xl bg-gray-900 border border-gray-800 p-8 flex flex-col" data-testid="card-premium">
                <h3 className="text-xl font-bold text-gray-200">Premium</h3>
                <p className="mt-1 text-sm text-gray-400">Para campañas y mayor cobertura</p>
                <div className="mt-6">
                  <div className="text-3xl font-extrabold">$1.450.000</div>
                  <div className="text-sm text-gray-400">CLP / mes / IVA inc.</div>
                </div>
                <ul className="mt-6 space-y-3 text-gray-300 text-sm">
                  <li>2 jornadas de grabación (16 horas)</li>
                  <li>2 videos largos de campaña</li>
                  <li>8–10 reels/shorts/cápsulas</li>
                  <li>Asesoría estratégica avanzada</li>
                  <li>2 rondas de revisión</li>
                  <li>Entregas personalizadas + material adicional</li>
                  <li>Informe mensual con métricas y recomendaciones de pauta</li>
                </ul>
                <a href="#contacto" className="mt-auto inline-block w-full text-center px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition">Quiero este plan</a>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 text-sm mt-8">* Cupos limitados (máximo 5 empresas/mes) para mantener la calidad.</p>
        </section>

        {/* Extras */}
        <section id="extras" className="scroll-mt-20 py-20 px-0 bg-gray-900 text-center rounded-3xl mt-8">
          <h2 className="text-4xl font-extrabold mb-8 text-blue-400">Servicios Adicionales</h2>
          <p className="max-w-4xl mx-auto text-lg text-gray-400 leading-relaxed mb-10">Potencia tu plan con opciones extra a valores preferentes.</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: '🎥 2ª cámara o dron', text: 'Mayor cobertura visual para tu proyecto (desde $150.000).'},
              { title: '🎙️ Locución y subtitulado', text: 'Voces profesionales y subtítulos listos para RRSS o TV.' },
              { title: '✨ Animación gráfica', text: 'Motion graphics para reforzar tu mensaje (logos, datos, transiciones).' },
              { title: '📦 Entregas extra', text: 'Reels adicionales o versiones extendidas según tus objetivos.' },
            ].map((s, i) => (
              <div key={i} className="p-8 bg-gray-800 rounded-3xl shadow-md border border-gray-700 text-left">
                <h3 className="font-bold mb-3 text-yellow-400">{s.title}</h3>
                <p className="text-gray-300">{s.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
