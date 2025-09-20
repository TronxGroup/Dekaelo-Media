// app/plan/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Plan Audiovisual Mensual | Dekaelo Media",
  description:
    "Producción audiovisual estratégica para tu empresa: jornada de rodaje, video principal, 4–5 reels y asesoría mensual. Cupos limitados.",
};

export default function Page() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-16">
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
            Plan mensual
          </span>
          <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
            Producción + Estrategia
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Plan Audiovisual Mensual
        </h1>
        <p className="max-w-2xl text-lg text-white/80">
          Ideas, guion, rodaje y entrega optimizada. Nosotros producimos;
          tu equipo se enfoca en crecer.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href="/contacto?utm_source=plan&utm_medium=cta_hero"
            className="btn bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-yellow-300 transition text-base"
          >
            Quiero mi plan audiovisual
          </Link>
          <Link
            href="/portafolio?utm_source=plan&utm_medium=cta_hero_secondary"
            className="btn-outline px-8 py-4 rounded-xl text-base"
          >
            Ver trabajos recientes
          </Link>
        </div>

        <p className="mt-3 text-sm text-white/60">
          Cupos limitados: máximo 5 empresas al mes
        </p>
      </section>

      {/* TRUST / LOGOS (opcional) */}
      {/* 
      <section className="border-y border-white/10 bg-black/60">
        <div className="container py-8">
          <p className="text-center text-white/50 text-sm mb-4">Confían en nosotros</p>
          <ClientLogos />
        </div>
      </section>
      */}

      {/* QUÉ INCLUYE */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-2">Qué incluye</h2>
        <p className="text-center text-white/70 mb-8">
          Entregables consistentes cada mes, listos para publicar.
        </p>
        <ul className="grid md:grid-cols-2 gap-4 text-base md:text-lg">
          <li className="rounded-2xl border border-white/10 bg-gray-900/40 p-4">✅ 1 jornada de grabación profesional (hasta 8 horas)</li>
          <li className="rounded-2xl border border-white/10 bg-gray-900/40 p-4">✅ 1 video largo principal (institucional / YouTube / vodcast)</li>
          <li className="rounded-2xl border border-white/10 bg-gray-900/40 p-4">✅ 4–5 reels o cápsulas para redes</li>
          <li className="rounded-2xl border border-white/10 bg-gray-900/40 p-4">✅ Guion creativo + asesoría en publicaciones</li>
          <li className="rounded-2xl border border-white/10 bg-gray-900/40 p-4">✅ 1 ronda de revisión incluida</li>
          <li className="rounded-2xl border border-white/10 bg-gray-900/40 p-4">✅ Entrega optimizada por plataforma (16:9 / 1:1 / 9:16)</li>
          <li className="rounded-2xl border border-white/10 bg-gray-900/40 p-4">✅ Informe mensual con ideas y análisis básico</li>
        </ul>
      </section>

      {/* PROCESO */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Cómo funciona</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: "1", t: "Kickoff", d: "Brief, objetivos, calendario y referencias." },
              { n: "2", t: "Guion & Plan", d: "Guion técnico y plan de rodaje." },
              { n: "3", t: "Rodaje", d: "Jornada de producción profesional." },
              { n: "4", t: "Entrega", d: "Video principal + 4–5 reels y asesoría." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <div className="text-yellow-400 font-bold text-2xl">{s.n}</div>
                <h3 className="font-semibold mt-2">{s.t}</h3>
                <p className="text-white/70 text-sm mt-1">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARATIVA */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">¿Plan mensual o proyecto puntual?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-gray-900/40 p-6">
              <h3 className="font-semibold text-xl">Plan mensual (recomendado)</h3>
              <ul className="mt-3 space-y-2 text-white/80 text-sm">
                <li>• Consistencia y ritmo de publicación</li>
                <li>• Mejor costo por pieza</li>
                <li>• Aprendizaje continuo y mejora mensual</li>
                <li>• Soporte creativo y técnico dedicado</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gray-900/20 p-6">
              <h3 className="font-semibold text-xl">Proyecto puntual</h3>
              <ul className="mt-3 space-y-2 text-white/70 text-sm">
                <li>• Ideal para un hito o campaña específica</li>
                <li>• Entregables cerrados y fechas definidas</li>
                <li>• Menor continuidad de contenidos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIO RÁPIDO (opcional, inline) */}
      <section className="py-10 px-6">
        <div className="max-w-4xl mx-auto rounded-2xl bg-gray-900 border border-white/10 p-6">
          <p className="text-white/80 italic">
            “Muy profesionales y puntuales en cada jornada. El podcast no solo nos dio visibilidad,
            también se convirtió en una herramienta clave para generar nuevos negocios.”
          </p>
          <p className="mt-3 text-sm text-white/60">— Víctor Ruz, CEO IGROMI</p>
        </div>
      </section>

      {/* FAQ CORTO */}
      <section className="py-16 px-6 bg-black/60 border-t border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Preguntas frecuentes</h2>
          <div className="grid md:grid-cols-2 gap-6 text-white/80">
            <div className="rounded-2xl bg-gray-900/40 border border-white/10 p-5">
              <h3 className="font-semibold">¿Cuándo es el rodaje?</h3>
              <p className="text-sm mt-1">Agendamos la jornada en la primera semana del ciclo mensual.</p>
            </div>
            <div className="rounded-2xl bg-gray-900/40 border border-white/10 p-5">
              <h3 className="font-semibold">¿Cuánto tardan las entregas?</h3>
              <p className="text-sm mt-1">Versión 1 del video principal en 5–10 días hábiles; reels luego de la aprobación.</p>
            </div>
            <div className="rounded-2xl bg-gray-900/40 border border-white/10 p-5">
              <h3 className="font-semibold">¿Pueden incluir locaciones/actores?</h3>
              <p className="text-sm mt-1">Sí, se cotiza como adicional según requerimientos de casting o arriendo.</p>
            </div>
            <div className="rounded-2xl bg-gray-900/40 border border-white/10 p-5">
              <h3 className="font-semibold">¿Trabajan fuera de Santiago?</h3>
              <p className="text-sm mt-1">Sí. Traslados/viáticos se agregan según ciudad y logística.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="cta" className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-3">¿Listo para empezar?</h2>
        <p className="text-white/80 mb-8">
          Asegura tu cupo y construyamos una presencia audiovisual constante y profesional.
        </p>
        <Link
          href="/contacto?utm_source=plan&utm_medium=cta_bottom"
          className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-yellow-300 transition"
        >
          Cotizar / Agenda una llamada →
        </Link>
        <p className="mt-3 text-xs text-white/50">Respondemos en 24–48h hábiles.</p>
      </section>

      {/* Product/Offer JSON-LD (SEO) */}
      <script
        type="application/ld+json"
        // @ts-ignore
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Plan Audiovisual Mensual",
            brand: { "@type": "Brand", name: "Dekaelo Media" },
            description:
              "Producción audiovisual mensual con video principal, 4–5 reels y asesoría.",
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/LimitedAvailability",
              url: "https://www.dekaelomedia.com/plan",
              priceCurrency: "CLP",
              price: "0", // si no publicas precio, deja 0 o quita price para evitar confusión
              eligibleRegion: "CL",
            },
            slogan: "Contenido con calidad cinematográfica todos los meses",
            audience: { "@type": "Audience", audienceType: "Empresas y marcas" },
          }),
        }}
      />
    </main>
  );
}
