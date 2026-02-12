// app/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import { VideoEmbed } from "./components/VideoEmbed";
import { ClientLogos } from "./components/ClientLogos";

const SITE_URL = "https://www.dekaelomedia.com";

export const metadata: Metadata = {
  title: "Dekaelo Media — Vodcast & Contenido Corporativo",
  description:
    "Productora boutique especializada en vodcast corporativo y series institucionales. Más de 58 episodios producidos para banca, gremios, salud y tecnología.",
};

export default function Page() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="container py-32 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Vodcast y contenido corporativo
          <br /> con criterio editorial.
        </h1>

        <p className="mt-8 text-lg text-white/70">
          En Dekaelo producimos series audiovisuales para organizaciones que
          necesitan comunicar con claridad y profesionalismo.
          <br />
          Más de 58 episodios realizados desde 2023 para banca, gremios,
          medicina y tecnología.
        </p>

        <div className="mt-10">
          <Link href="/contacto" className="btn-outline">
            Conversar un proyecto
          </Link>
        </div>
      </section>

      {/* REEL */}
      <section className="container pb-24">
        <VideoEmbed
          src="https://www.youtube.com/embed/uul8LNP6BbQ"
          title="Dekaelo Media Reel"
        />
      </section>

      {/* CASOS */}
      <section className="container py-24 border-t border-white/10">
        <h2 className="text-2xl mb-12 text-white/70">Casos recientes</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <VideoEmbed src="https://www.youtube.com/embed/dyP-ioW3Qng" title="Banco BICE — Nos Une" />
          <VideoEmbed src="https://www.youtube.com/embed/tu-link-reality-day" title="Reality Day — Tronx TV" />
        </div>
      </section>

      {/* CLIENTES */}
      <section className="py-20 border-t border-white/10">
        <div className="container">
          <ClientLogos />
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section className="container py-28 border-t border-white/10 max-w-5xl">
        <h2 className="text-3xl mb-12">Experiencia</h2>

        <div className="grid md:grid-cols-3 gap-12 text-white/70">
          <div>
            <div className="text-5xl font-semibold text-white">58+</div>
            <p className="mt-3">episodios producidos</p>
          </div>

          <div>
            <div className="text-5xl font-semibold text-white">6</div>
            <p className="mt-3">industrias distintas</p>
          </div>

          <div>
            <div className="text-5xl font-semibold text-white">3+</div>
            <p className="mt-3">años creando series continuas</p>
          </div>
        </div>

        <p className="mt-14 text-white/60 leading-relaxed">
          Hemos desarrollado formatos recurrentes para instituciones como
          Banco BICE, APCC, proyectos médicos y compañías tecnológicas,
          combinando narrativa, imagen cinematográfica y procesos de producción
          simples para equipos internos.
        </p>
      </section>

      {/* SERVICIOS */}
      <section className="container py-28 border-t border-white/10">
        <h2 className="text-3xl mb-12">Servicios</h2>

        <div className="grid md:grid-cols-3 gap-10 text-white/70">
          <div>
            <h3 className="text-white font-medium mb-3">Vodcast corporativo</h3>
            <p>Series de conversación, entrevistas y liderazgo de opinión.</p>
          </div>

          <div>
            <h3 className="text-white font-medium mb-3">Contenido institucional</h3>
            <p>Marca empleadora, cultura, onboarding y comunicación interna.</p>
          </div>

          <div>
            <h3 className="text-white font-medium mb-3">Series editoriales</h3>
            <p>Formatos documentales y storytelling para plataformas propias.</p>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="container py-28 border-t border-white/10 max-w-3xl">
        <p className="text-white/70 leading-relaxed">
          Dekaelo Media es el estudio audiovisual de Tronx Group.
          También desarrollamos proyectos editoriales originales como
          <strong> Tronx TV</strong> y la serie documental <strong>Reality Day</strong>,
          lo que mantiene nuestro estándar narrativo y visual más cercano al
          lenguaje cinematográfico que al video corporativo tradicional.
        </p>
      </section>

      {/* CONTACTO */}
      <section className="container py-28 border-t border-white/10 text-center">
        <h2 className="text-3xl mb-6">Hablemos</h2>
        <p className="text-white/60 mb-10">
          Si necesitas producir una serie o vodcast para tu organización,
          conversemos.
        </p>

        <Link href="/contacto" className="btn-outline">
          Escribirnos
        </Link>
      </section>
    </main>
  );
}
