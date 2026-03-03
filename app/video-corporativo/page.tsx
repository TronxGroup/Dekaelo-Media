import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Video Corporativo Profesional en Chile | Desde $1.000.000 + IVA",
  description:
    "Producción de video corporativo profesional para empresas en Chile. Propuesta en 48 horas. Entrega en 2–4 semanas. Desde $1.000.000 + IVA.",
};

export default function Page() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center">
        <Image
          src="/images/dekaelo-entrevista.jpg"
          alt="Producción de video corporativo profesional en Chile"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="relative container max-w-4xl py-32">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Video corporativo profesional
          </h1>

          <p className="mt-6 text-lg text-white/80">
            Producción audiovisual institucional para empresas que necesitan
            comunicar con claridad, sobriedad y estándar profesional.
          </p>

          <div className="mt-6 text-sm text-white/60 space-y-2">
            <p>Propuesta clara en 48 horas.</p>
            <p>Producción en 2–4 semanas.</p>
            <p>Inversión desde $1.000.000 + IVA.</p>
          </div>

          <div className="mt-10">
            <Link
              href="/contacto"
              className="border border-white px-8 py-3 text-sm hover:bg-white hover:text-black transition"
            >
              Solicitar propuesta ejecutiva
            </Link>
          </div>
        </div>
      </section>

      {/* PRUEBA DE AUTORIDAD */}
      <section className="container border-t border-white/10 py-20 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-5xl font-semibold">58+</div>
            <p className="text-white/50 mt-3 text-sm">episodios producidos</p>
          </div>
          <div>
            <div className="text-5xl font-semibold">6</div>
            <p className="text-white/50 mt-3 text-sm">industrias distintas</p>
          </div>
          <div>
            <div className="text-5xl font-semibold">3+</div>
            <p className="text-white/50 mt-3 text-sm">años desarrollando series</p>
          </div>
        </div>
      </section>

      {/* MODALIDADES */}
      <section className="container border-t border-white/10 py-24 max-w-6xl">
        <h2 className="text-2xl font-semibold mb-12">
          Modalidades de producción
        </h2>

        <div className="grid md:grid-cols-3 gap-14 text-white/70 text-sm leading-relaxed">

          <div>
            <h3 className="text-white font-medium mb-4">
              Modalidad Base
            </h3>
            Desde $1.000.000 + IVA <br /><br />
            • 1 jornada de grabación <br />
            • 1 entrevistado principal <br />
            • Edición profesional <br />
            • Corrección de color <br />
            • Música licenciada <br />
            • Entrega en 2–3 semanas
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">
              Modalidad Profesional
            </h3>
            Proyectos con mayor profundidad narrativa,
            múltiples locaciones o estructura ampliada.
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">
              Serie Corporativa
            </h3>
            Desarrollo de formatos sostenidos en el tiempo
            para liderazgo ejecutivo o cultura organizacional.
          </div>

        </div>
      </section>

      {/* REEL */}
      <section className="container border-t border-white/10 py-24 max-w-4xl">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-10">
          Reel institucional
        </h2>

        <div className="aspect-video w-full rounded-lg overflow-hidden border border-white/10">
          <iframe
            src="https://www.youtube.com/embed/uul8LNP6BbQ?rel=0"
            title="Reel video corporativo profesional"
            className="w-full h-full"
            allowFullScreen
          />
        </div>
      </section>

      {/* PROCESO SIMPLE */}
      <section className="container border-t border-white/10 py-24 max-w-6xl">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-16">
          Proceso claro y eficiente
        </h2>

        <div className="grid md:grid-cols-4 gap-12 text-white/70 text-sm leading-relaxed">
          <div>
            <div className="text-white font-medium mb-3">01 — Reunión inicial</div>
            30 minutos para definir objetivo y alcance.
          </div>
          <div>
            <div className="text-white font-medium mb-3">02 — Propuesta</div>
            Presupuesto y estructura en 48 horas.
          </div>
          <div>
            <div className="text-white font-medium mb-3">03 — Rodaje</div>
            Equipo profesional con dirección precisa.
          </div>
          <div>
            <div className="text-white font-medium mb-3">04 — Entrega</div>
            Edición completa lista para web o uso interno.
          </div>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="container border-t border-white/10 py-24 max-w-4xl">
        <h2 className="text-2xl font-semibold mb-6">
          Ideal para
        </h2>

        <div className="text-white/70 leading-relaxed space-y-4">
          <p>• Empresas medianas y grandes.</p>
          <p>• Clínicas privadas y redes de salud.</p>
          <p>• Banca y organizaciones institucionales.</p>
          <p>• Equipos de marketing y comunicaciones internas.</p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="container border-t border-white/10 py-32 text-center max-w-3xl">
        <h2 className="text-2xl mb-6">
          Recibe tu propuesta en 48 horas
        </h2>

        <p className="text-white/50 mb-10">
          Envíanos contexto, objetivo y fechas estimadas.
          Diseñamos una propuesta clara y ajustada a tu organización.
        </p>

        <Link
          href="/contacto"
          className="border border-white px-10 py-4 text-sm hover:bg-white hover:text-black transition"
        >
          Solicitar propuesta ahora
        </Link>
      </section>

    </main>
  );
}
