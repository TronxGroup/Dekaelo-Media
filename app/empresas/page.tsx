import Link from "next/link";
import { VideoEmbed } from "../components/VideoEmbed";
import { ClientLogos } from "../components/ClientLogos";

export const metadata = {
  title: "Producción Audiovisual para Empresas — Dekaelo Media",
  description:
    "Vodcast corporativo y contenido institucional para organizaciones. Más de 58 episodios producidos para banca y empresas B2B.",
};

export default function Page() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="container max-w-4xl py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Vodcast y contenido corporativo
          <br />
          para organizaciones
        </h1>

        <p className="mt-8 text-white/65 text-lg">
          Diseñamos y producimos series audiovisuales para banca,
          gremios empresariales, salud y empresas B2B.
        </p>

        <Link
          href="/contacto"
          className="mt-10 inline-block border border-white/30 px-8 py-3 hover:bg-white hover:text-black transition"
        >
          Conversar proyecto
        </Link>
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
            <p className="text-white/50">años de continuidad</p>
          </div>
        </div>
      </section>


      {/* REEL (solo 1) */}
      <section className="container border-t border-white/10 py-24 max-w-4xl">
        <VideoEmbed
          src="https://www.youtube.com/embed/uul8LNP6BbQ?rel=0"
          title="Dekaelo Media Reel"
        />
      </section>


      {/* CASOS TEXTO */}
      <section className="container border-t border-white/10 py-24 max-w-4xl text-white/70">
        <ul className="space-y-4">
          <li>Banco nacional — Vodcast institucional (contenido interno)</li>
          <li>APCC — 24 episodios de entrevistas empresariales</li>
          <li>Industria 4.0 — Podcast B2B tecnológico</li>
        </ul>
      </section>


      {/* CTA FINAL */}
      <section className="container border-t border-white/10 py-32 text-center">
        <Link
          href="/contacto"
          className="border border-white/30 px-10 py-4 hover:bg-white hover:text-black transition"
        >
          Contactar
        </Link>
      </section>

    </main>
  );
}
