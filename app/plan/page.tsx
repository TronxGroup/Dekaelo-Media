// app/plan/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Plan Audiovisual Mensual | Dekaelo Media",
  description:
    "Producción audiovisual estratégica para tu empresa: grabación profesional, video institucional, 4–5 reels y análisis mensual. Cupos limitados.",
};

export default function Page() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Plan Audiovisual Mensual
        </h1>
        <p className="max-w-2xl text-lg text-white/80 mb-8">
          Producción audiovisual estratégica: ideas, guion, rodaje y entrega.{" "}
          <br />
          Nosotros nos encargamos de todo; tu equipo se enfoca en crecer.
        </p>
        <Link
          href="/contacto?utm_source=plan"
          className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-yellow-300 transition"
        >
          Quiero mi plan audiovisual
        </Link>
        <p className="mt-3 text-sm text-white/60">
          Cupos limitados: máximo 5 empresas al mes
        </p>
      </section>

      {/* CHECKLIST */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          📋 Incluye:
        </h2>
        <ul className="grid gap-4 text-lg">
          <li>✅ 1 jornada de grabación profesional (hasta 8 horas)</li>
          <li>✅ 1 video largo institucional / YouTube / vodcast</li>
          <li>✅ 4–5 reels o cápsulas para redes</li>
          <li>✅ Asesoría en publicaciones + guion creativo</li>
          <li>✅ 1 ronda de revisión incluida</li>
          <li>✅ Entrega optimizada por plataforma</li>
          <li>✅ Informe mensual con ideas y análisis básico</li>
        </ul>
      </section>

      {/* BENEFICIOS */}
      <section className="py-16 px-6 bg-gray-900">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          🎯 Beneficios para tu empresa
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto text-lg">
          <div className="p-6 bg-gray-800 rounded-2xl">
            📈 Presencia digital constante y profesional
          </div>
          <div className="p-6 bg-gray-800 rounded-2xl">
            🎥 Calidad cinematográfica para tu marca
          </div>
          <div className="p-6 bg-gray-800 rounded-2xl">
            ⚡ Equipo creativo y técnico a tu servicio
          </div>
          <div className="p-6 bg-gray-800 rounded-2xl">
            🤝 Alianza estratégica con foco en resultados
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-6">
          ¿Listo para transformar tu comunicación?
        </h2>
        <p className="text-white/80 mb-8">
          Asegura tu cupo y empieza a construir una presencia audiovisual
          constante y profesional.
        </p>
        <Link
          href="/contacto?utm_source=plan-bottom"
          className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-yellow-300 transition"
        >
          Cotizar mi plan
        </Link>
      </section>
    </main>
  );
}
