import type { Metadata } from "next";
import Image from "next/image";
import ClientLogos from "@/components/ClientLogos";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Video Corporativo Profesional en Chile | Desde $1.000.000 + IVA",
  description:
    "Producción de video corporativo profesional para empresas en Chile. Propuesta en 48 horas. Entrega en 2–4 semanas. Desde $1.000.000 + IVA.",
};

export default function Page() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center">
        <Image
          src="/images/dekaelo-entrevista.jpg"
          alt="Producción de video corporativo profesional en Chile"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="relative container max-w-4xl py-28">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Video corporativo profesional en Chile
          </h1>

          <p className="mt-6 text-lg text-white/80">
            Producción audiovisual institucional para empresas que necesitan comunicar
            con claridad, estructura y estándar profesional.
          </p>

          <div className="mt-6 text-sm text-white/60 space-y-1">
            <p>✔ Propuesta en 48 horas</p>
            <p>✔ Producción en 2–4 semanas</p>
            <p>✔ Desde $1.000.000 + IVA</p>
          </div>

          <div className="mt-10">
            <a
              href="#formulario"
              className="border border-white px-8 py-3 text-sm hover:bg-white hover:text-black transition"
            >
              Solicitar propuesta ahora
            </a>
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section className="border-t border-white/10 py-24">
        <div className="container">
          <ClientLogos />
        </div>
      </section>

      {/* AUTORIDAD */}
      <section className="container border-t border-white/10 py-16 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="text-4xl font-semibold">58+</div>
            <p className="text-white/50 text-sm mt-2">episodios producidos</p>
          </div>
          <div>
            <div className="text-4xl font-semibold">6</div>
            <p className="text-white/50 text-sm mt-2">industrias distintas</p>
          </div>
          <div>
            <div className="text-4xl font-semibold">3+</div>
            <p className="text-white/50 text-sm mt-2">años desarrollando series</p>
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="formulario" className="container border-t border-white/10 py-24 max-w-3xl">
        <h2 className="text-2xl mb-6 text-center">
          Solicita tu propuesta
        </h2>

        <p className="text-white/50 text-center mb-10">
          Te responderemos en menos de 24 horas.
        </p>

        <form
          action="/api/contacto"
          method="POST"
          className="space-y-6"
        >
          <input
            name="nombre"
            type="text"
            placeholder="Nombre"
            className="w-full bg-black border border-white/20 px-4 py-3 text-sm"
            required
          />

          <input
            name="empresa"
            type="text"
            placeholder="Empresa"
            className="w-full bg-black border border-white/20 px-4 py-3 text-sm"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email corporativo"
            className="w-full bg-black border border-white/20 px-4 py-3 text-sm"
            required
          />

          <input
            name="telefono"
            type="tel"
            placeholder="Teléfono / WhatsApp"
            className="w-full bg-black border border-white/20 px-4 py-3 text-sm"
          />

          <textarea
            name="mensaje"
            placeholder="Describe brevemente tu proyecto"
            rows={4}
            className="w-full bg-black border border-white/20 px-4 py-3 text-sm"
            required
          />

          <button
            type="submit"
            className="w-full border border-white py-4 text-sm hover:bg-white hover:text-black transition"
          >
            Enviar solicitud
          </button>
        </form>
      </section>

    </main>
  );
}
