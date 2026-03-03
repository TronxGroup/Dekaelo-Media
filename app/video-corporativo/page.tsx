"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { VideoEmbed } from "../components/VideoEmbed";
import { ClientLogos } from "../components/ClientLogos";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const res = await fetch("/api/contacto", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      router.push("/video-corporativo-gracias");
    }

    setLoading(false);
  }

  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="container max-w-4xl py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Video corporativo profesional en Chile
        </h1>

        <p className="mt-8 text-white/70 text-lg">
          Producción audiovisual institucional para empresas que necesitan
          comunicar con claridad, liderazgo y estándar profesional.
        </p>

        <div className="mt-8 text-sm text-white/50">
          Desde $1.000.000 + IVA • Propuesta en 48 horas • Entrega 2–4 semanas
        </div>

        <a
          href="#formulario"
          className="mt-10 inline-block border border-white/40 px-8 py-3 hover:bg-white hover:text-black transition"
        >
          Solicitar propuesta
        </a>
      </section>

      {/* CLIENTES */}
      <section className="border-t border-white/10 py-24">
        <div className="container">
          <ClientLogos />
        </div>
      </section>

      {/* MÉTRICAS */}
      <section className="container border-t border-white/10 py-20 text-center">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="text-5xl font-semibold">58+</div>
            <p className="text-white/50">episodios producidos</p>
          </div>
          <div>
            <div className="text-5xl font-semibold">6</div>
            <p className="text-white/50">industrias distintas</p>
          </div>
          <div>
            <div className="text-5xl font-semibold">3+</div>
            <p className="text-white/50">años desarrollando series</p>
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="container border-t border-white/10 py-24 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-10 text-center">
          Qué incluye tu video corporativo
        </h2>

        <div className="grid md:grid-cols-2 gap-12 text-white/70 text-sm leading-relaxed">
          <div>
            • Reunión estratégica inicial <br />
            • Definición clara de mensaje y audiencia <br />
            • 1 jornada de grabación profesional <br />
            • Dirección y puesta en escena cuidada <br />
            • Iluminación y sonido profesional <br />
            • Edición completa y corrección de color <br />
            • Música licenciada <br />
            • Entrega optimizada para web o uso interno
          </div>

          <div>
            Ideal para:
            <br /><br />
            • Video institucional empresa <br />
            • Comunicación interna ejecutiva <br />
            • Presentación a directorio <br />
            • Marca empleadora <br />
            • Lanzamientos corporativos
          </div>
        </div>
      </section>

      {/* REEL */}
      <section className="container border-t border-white/10 py-24 max-w-4xl">
        <VideoEmbed
          src="https://www.youtube.com/embed/uul8LNP6BbQ?rel=0"
          title="Reel Dekaelo Media"
        />
      </section>

      {/* DIFERENCIAL */}
      <section className="container border-t border-white/10 py-24 max-w-4xl text-center">
        <h2 className="text-2xl font-semibold mb-6">
          Nuestro diferencial
        </h2>

        <p className="text-white/70 leading-relaxed">
          No producimos piezas improvisadas. Diseñamos cada proyecto con estructura,
          narrativa clara y estándar cinematográfico aplicado al entorno corporativo.
          Trabajamos con procesos eficientes y discreción profesional.
        </p>
      </section>

      {/* FORMULARIO */}
      <section id="formulario" className="container border-t border-white/10 py-24 max-w-3xl text-center">
        <h2 className="text-2xl mb-6">
          Recibe tu propuesta en 48 horas
        </h2>

        <p className="text-white/50 mb-10">
          Cuéntanos objetivo, fechas y contexto del proyecto.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">

          <input
            name="nombre"
            type="text"
            placeholder="Nombre"
            required
            className="w-full bg-black border border-white/20 px-4 py-3"
          />

          <input
            name="empresa"
            type="text"
            placeholder="Empresa"
            required
            className="w-full bg-black border border-white/20 px-4 py-3"
          />

          <input
            name="email"
            type="email"
            placeholder="Email corporativo"
            required
            className="w-full bg-black border border-white/20 px-4 py-3"
          />

          <input
            name="telefono"
            type="tel"
            placeholder="Teléfono / WhatsApp"
            className="w-full bg-black border border-white/20 px-4 py-3"
          />

          <textarea
            name="mensaje"
            placeholder="Describe brevemente tu proyecto"
            required
            rows={4}
            className="w-full bg-black border border-white/20 px-4 py-3"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full border border-white py-4 hover:bg-white hover:text-black transition"
          >
            {loading ? "Enviando..." : "Solicitar propuesta"}
          </button>
        </form>
      </section>

    </main>
  );
}
