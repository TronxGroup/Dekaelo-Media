"use client";

import { useState } from "react";
import { VideoEmbed } from "../components/VideoEmbed";
import { ClientLogos } from "../components/ClientLogos";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const res = await fetch("/api/contacto", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setSent(true);
      e.target.reset();
    }

    setLoading(false);
  }

  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="container max-w-4xl py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Video corporativo profesional
          <br />
          para organizaciones
        </h1>

        <p className="mt-8 text-white/65 text-lg">
          Producción audiovisual institucional para banca,
          salud, gremios y empresas B2B en Chile.
        </p>

        <div className="mt-8 text-sm text-white/50">
          Desde $1.000.000 + IVA • Propuesta en 48 horas • Entrega 2–4 semanas
        </div>

        <a
          href="#formulario"
          className="mt-10 inline-block border border-white/30 px-8 py-3 hover:bg-white hover:text-black transition"
        >
          Solicitar propuesta
        </a>
      </section>

      {/* LOGOS */}
      <section className="border-t border-white/10 py-16">
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
            <p className="text-white/50">años dee continuidad</p>
          </div>
        </div>
      </section>

      {/* REEL */}
      <section className="container border-t border-white/10 py-24 max-w-4xl">
        <VideoEmbed
          src="https://www.youtube.com/embed/uul8LNP6BbQ?rel=0"
          title="Dekaelo Media Reel"
        />
      </section>

      {/* FORMULARIO */}
      <section id="formulario" className="container border-t border-white/10 py-24 max-w-3xl text-center">
        <h2 className="text-2xl mb-6">
          Solicita tu propuesta
        </h2>

        <p className="text-white/50 mb-10">
          Te responderemos en menos de 24 horas.
        </p>

        {sent && (
          <div className="mb-6 text-green-400">
            Mensaje enviado correctamente.
          </div>
        )}

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
            {loading ? "Enviando..." : "Enviar solicitud"}
          </button>
        </form>
      </section>

    </main>
  );
}
