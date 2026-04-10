import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const waLink = "https://wa.me/56920080031?text=Hola%2C%20quiero%20conversar%20sobre%20un%20proyecto%20con%20Dekaelo%20Media.%0A%0AEmpresa%3A%0AQue%20necesito%3A%0AFecha%20tentativa%3A%0A%0AGracias";

export const metadata: Metadata = {
  title: "Quienes somos - Dekaelo Media",
  description: "Productora audiovisual en Chile con mas de una decada de trayectoria. Especializados en vodcast corporativo y video institucional. BICE, APCC, iGromi y mas.",
  alternates: { canonical: "https://www.dekaelomedia.com/quienes-somos" },
};

const stats = [
  { n: "150+", label: "videos producidos desde 2013" },
  { n: "3.8M", label: "vistas en un solo video organico" },
  { n: "60+", label: "episodios vodcast corporativos" },
  { n: "6+", label: "industrias distintas" },
];

const milestones = [
  { year: "2013", text: "Seleccion oficial a Sitges Film Festival y BARS con Yokai. Comerciales para Editorial Televisa Chile — Revista Caras." },
  { year: "2015", text: "Video tutorial para Oximixo supera 3.8M de vistas en YouTube con 18K likes. Organico, sin pauta." },
  { year: "2016-2022", text: "Videos corporativos para industria, tecnologia y educacion. Post-produccion para contenido interno de Ripley." },
  { year: "2023", text: "Mas de 20 episodios para la Camara de Comercio Asia Pacifico y serie para iGromi." },
  { year: "2024", text: "4 episodios de Futbol y Parrilla con mas de 357K vistas acumuladas. Inicio de serie vodcast institucional para BICE." },
  { year: "2025-2026", text: "Produccion continua para BICE. Temporada activa en curso." },
];

const values = [
  { title: "Claridad antes que estetica", desc: "Un video que no se entiende no sirve, por mas bonito que sea. Siempre empezamos por el mensaje." },
  { title: "Alcance por escrito antes de empezar", desc: "Antes de cualquier proyecto tienes por escrito que incluye y que cuesta. Sin sorpresas." },
  { title: "Entrega que funciona de verdad", desc: "No entregamos archivos genericos. Entregamos el formato correcto para cada plataforma donde vas a publicar." },
  { title: "Procesos ordenados", desc: "Respondemos rapido, cumplimos plazos y avisamos si algo cambia. Trabajar con nosotros no deberia ser estresante." },
];

function Eyebrow(props: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">{props.children}</p>;
}

export default function QuienesSomosPage() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">

      <section className="container max-w-4xl pt-28 pb-16 md:pt-36 md:pb-20">
        <Eyebrow>Quienes somos</Eyebrow>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
          Produccion audiovisual corporativa desde 2013.{" "}
          <span className="text-white/35">El mismo estandar de siempre, sin el precio de una agencia.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/55 leading-relaxed">
          Estudio audiovisual en Santiago especializado en vodcast corporativo y series institucionales.
          Produccion completa en terreno o post-produccion de lo que tu empresa ya grabo.
        </p>
      </section>

      <section className="border-t border-white/10 py-16">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.n} className="bg-black px-8 py-10">
                <p className="text-4xl font-semibold text-white">{s.n}</p>
                <p className="mt-2 text-sm text-white/40 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-24">
        <div className="container max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <Eyebrow>De donde venimos</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Empezamos en el cine</h2>
              <p className="mt-6 text-white/60 leading-relaxed">
                El recorrido parte en el cine independiente con <strong className="text-white">Yokai</strong>, largometraje seleccionado en Sitges Film Festival y Buenos Aires Rojo Sangre en 2014. Ahi aprendimos estructura narrativa, ritmo y criterio visual.
              </p>
              <p className="mt-4 text-white/60 leading-relaxed">
                Después de eso, comerciales para Editorial Televisa Chile y un video tutorial que llego a 3.8 millones de vistas sin pauta. Hoy, vodcast institucional para BICE.
              </p>
              <p className="mt-4 text-white/60 leading-relaxed">
                El mismo estandar de siempre, aplicado al video corporativo.
              </p>
            </div>
            <div>
              <Image
                src="/qs_dekaelo_3.png"
                alt="Rodaje Dekaelo Media"
                width={600}
                height={400}
                className="rounded-2xl border border-white/10 object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-24">
        <div className="container max-w-5xl">
          <Eyebrow>Trayectoria</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">El trabajo habla.</h2>
          <div className="mt-12">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={"grid grid-cols-[80px_1fr] gap-8 py-6" + (i !== milestones.length - 1 ? " border-b border-white/8" : "")}
              >
                <p className="text-sm font-semibold tabular-nums text-white/25 pt-0.5">{m.year}</p>
                <p className="text-sm text-white/60 leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-24">
        <div className="container max-w-5xl">
          <Eyebrow>Como trabajamos</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Sin procesos eternos</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              { n: "01", title: "Nos cuentas que necesitas", desc: "Por WhatsApp o formulario. Sin reuniones largas." },
              { n: "02", title: "Alcance y precio por escrito", desc: "En menos de 24 horas habiles." },
              { n: "03", title: "Grabamos o recibes el material", desc: "Llegamos a tu oficina o tu mandas el material." },
              { n: "04", title: "Recibes el video listo", desc: "Editado, en el formato correcto para publicar." },
            ].map((s) => (
              <div key={s.n}>
                <p className="text-3xl font-semibold text-white/10">{s.n}</p>
                <h3 className="mt-3 text-sm font-semibold text-white leading-snug">{s.title}</h3>
                <p className="mt-2 text-sm text-white/45 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Image
              src="/qs_dekaelo_4.png"
              alt="Produccion audiovisual corporativa"
              width={580}
              height={380}
              className="rounded-2xl border border-white/10 object-cover w-full"
            />
            <Image
              src="/qs_dekaelo_1.png"
              alt="Rodaje institucional"
              width={580}
              height={380}
              className="rounded-2xl border border-white/10 object-cover w-full"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-24">
        <div className="container max-w-5xl">
          <Eyebrow>Como pensamos</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Lo que nos importa al trabajar</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-base font-semibold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20">
        <div className="container max-w-5xl">
          <Eyebrow>Con quienes hemos trabajado</Eyebrow>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "BICE",
              "Camara de Comercio Asia Pacifico",
              "iGromi",
              "Editorial Televisa Chile",
              "Trewhela's School",
              "Coesam",
              "Exploflex",
              "U-Payments",
              "Oximixo",
              "Futbol y Parrilla",
            ].map((c) => (
              <span key={c} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/50">
                {c}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/30 leading-relaxed max-w-xl">
            Banca, educacion, industria, tecnologia, camaras empresariales y medios. Proyectos de uso interno y posicionamiento externo.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 py-28">
        <div className="container max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            BICE - trabajo continuo desde 2024
          </div>
          <h2 className="text-3xl font-semibold md:text-4xl">Consulta</h2>
          <p className="mx-auto mt-5 max-w-xl text-white/50 leading-relaxed">
            Cuentanos que necesitas. Te respondemos con un alcance claro y un precio concreto en menos de 24 horas habiles.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
  <a
    href={waLink}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-white px-10 py-4 text-sm font-semibold text-black transition hover:bg-white/90"
  >
    Escribir por WhatsApp <ArrowUpRight className="h-4 w-4" />
  </a>

  <Link
    href="/servicios"
    className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-10 py-4 text-sm text-white/55 transition hover:bg-white/10 hover:text-white"
  >
    Ver servicios y precios <ArrowRight className="h-4 w-4" />
  </Link>
</div>
          <p className="mt-6 text-xs text-white/25">Respondemos el mismo dia habil. Sin compromiso.</p>
        </div>
      </section>

    </main>
  );
}
