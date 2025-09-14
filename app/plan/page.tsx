// app/plan/page.tsx
export const metadata = {
  title: 'Plan Audiovisual Mensual | Dekaelo Media',
  description:
    'Contenido de calidad cinematográfica para tu marca todos los meses. Incluye grabación, videos, reels y asesoría estratégica.',
};

export default function Page() {
  return (
    <section className="section py-20 px-6 max-w-5xl mx-auto">
      {/* Hero */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-400">
          Plan Audiovisual Mensual
        </h1>
        <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
          Producción audiovisual estratégica: ideas, guion, rodaje y entrega.
          Nosotros nos encargamos de todo; tu equipo se enfoca en crecer.
        </p>
      </header>

      {/* Beneficios principales */}
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">📋 Incluye:</h2>
          <ul className="space-y-3 text-white/80">
            <li className="flex gap-2"><span>✅</span> 1 jornada de grabación profesional (hasta 8 horas)</li>
            <li className="flex gap-2"><span>✅</span> 1 video largo institucional / YouTube / vodcast</li>
            <li className="flex gap-2"><span>✅</span> 4–5 reels o cápsulas para redes</li>
            <li className="flex gap-2"><span>✅</span> Asesoría en publicaciones + guion creativo</li>
            <li className="flex gap-2"><span>✅</span> 1 ronda de revisión incluida</li>
            <li className="flex gap-2"><span>✅</span> Entrega optimizada por plataforma</li>
            <li className="flex gap-2"><span>✅</span> Informe mensual con ideas y análisis básico</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">🎯 Beneficios:</h2>
          <ul className="space-y-3 text-white/80">
            <li className="flex gap-2"><span>📈</span> Presencia digital constante y profesional</li>
            <li className="flex gap-2"><span>🎥</span> Calidad cinematográfica para tu marca</li>
            <li className="flex gap-2"><span>⚡</span> Equipo creativo y técnico a tu servicio</li>
            <li className="flex gap-2"><span>🤝</span> Alianza estratégica con foco en resultados</li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <p className="text-lg text-white/90 mb-6">
          Cupos limitados: trabajamos con máximo 5 empresas al mes para asegurar
          calidad y personalización.
        </p>
        <a
          href="/contacto"
          className="inline-block rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 transition"
        >
          Quiero mi plan audiovisual
        </a>
      </div>
    </section>
  );
}
