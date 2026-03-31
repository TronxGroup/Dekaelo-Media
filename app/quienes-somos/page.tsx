import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const waLink = `https://wa.me/56920080031?text=${encodeURIComponent("Hola 👋 Quiero conversar sobre un proyecto con Dekaelo Media.\n\nEmpresa:\nQué necesito:\nFecha tentativa:\n\nGracias")}`;

export const metadata: Metadata = {
  title: "Quiénes somos — Dekaelo Media",
  description: "Dekaelo Media es una productora audiovisual en Chile especializada en video corporativo, series institucionales y vodcast. +58 episodios producidos desde 2023.",
  alternates: { canonical: "https://www.dekaelomedia.com/quienes-somos" },
};

const stats = [
  { n: "58+", label: "episodios producidos desde 2023" },
  { n: "6", label: "industrias distintas" },
  { n: "3+", label: "años en producción continua" },
  { n: "300K+", label: "visualizaciones acumuladas" },
];

const values = [
  { title: "Claridad antes que estética", desc: "Un video que no se entiende no sirve, por más bonito que sea. Siempre empezamos por el mensaje." },
  { title: "Precio y alcance por escrito", desc: "Antes de empezar cualquier proyecto, tienes por escrito qué incluye y qué cuesta. Sin sorpresas." },
  { title: "Entrega que funciona de verdad", desc: "No entregamos archivos genéricos. Entregamos el formato correcto para cada plataforma donde vas a publicar." },
  { title: "Procesos ordenados", desc: "Respondemos rápido, cumplimos plazos y avisamos si algo cambia. Trabajar con nosotros no debería ser estresante." },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">{children}</p>;
}

export default function QuienesSomosPage() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">

      <section className="container max-w-4xl pt-28 pb-16 md:pt-36 md:pb-20">
        <Eyebrow>Quiénes somos</Eyebrow>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
          Hacemos video corporativo profesional.{" "}
          <span className="text-white/35">Sin el ego ni el precio de una agencia grande.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/55 leading-relaxed">
          Somos un estudio audiovisual en Santiago especializado en edición de contenido corporativo mensual, videos institucionales puntuales y series vodcast ejecutivas para empresas e instituciones en Chile.
        </p>
      </section>

      <section className="border-t border-white/10 py-16">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.n}>
                <p className="text-4xl font-semibold text-white">{s.n}</p>
                <p className="mt-2 text-sm text-white/40 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-24">
        <div className="container max-w-5xl">
          <Eyebrow>Qué hacemos exactamente</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Video que las empresas realmente pueden usar</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { badge: "Más pedido", badgeClass: "bg-emerald-500/15 text-emerald-300 border border-emerald-400/20", name: "Contenido corporativo mensual", desc: "Tú grabas, nosotros editamos. 4 videos por mes listos para LinkedIn e Instagram.", price: "$700.000 – $900.000 / mes" },
              { badge: "Entrada rápida", badgeClass: "bg-sky-500/15 text-sky-300 border border-sky-400/20", name: "Video institucional editado", desc: "Material grabado que necesita quedar profesional. Entrega en 5 días hábiles.", price: "$400.000 – $650.000" },
              { badge: "Premium", badgeClass: "bg-amber-500/15 text-amber-300 border border-amber-400/20", name: "Serie vodcast ejecutiva", desc: "Diseñamos el formato, grabamos en tu oficina y producimos la temporada completa.", price: "Desde $1.200.000 / temporada" },
            ].map(s => (
              <div key={s.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className={`mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${s.badgeClass}`}>{s.badge}</div>
                <h3 className="text-base font-semibold text-white mb-2">{s.name}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
                <p className="mt-4 text-sm font-medium text-white">{s.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/servicios" className="inline-flex items-center gap-2 text-sm text-white/40 transition hover:text-white">
              Ver detalle completo de servicios y precios<ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-24">
        <div className="container max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <Eyebrow>De dónde venimos</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Empezamos en el cine</h2>
              <p className="mt-6 text-white/60 leading-relaxed">Nuestro recorrido parte en el cine independiente con <strong className="text-white">"Yokai"</strong>, película seleccionada en festivales internacionales en 2014. Ahí aprendimos a contar historias con estructura, ritmo y criterio visual.</p>
              <p className="mt-4 text-white/60 leading-relaxed">Hoy aplicamos ese mismo estándar al video corporativo. Desde 2023 hemos producido más de 58 episodios para banca, educación, industria, tecnología y cámaras empresariales en Chile.</p>
            </div>
            <div>
              <Image src="/qs_dekaelo_3.png" alt="Rodaje Dekaelo Media" width={600} height={400} className="rounded-2xl border border-white/10 object-cover w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-24">
        <div className="container max-w-5xl">
          <Eyebrow>Cómo trabajamos</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Sin procesos eternos</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              { n: "01", title: "Nos cuentas qué necesitas", desc: "Por WhatsApp o formulario. Sin reuniones largas." },
              { n: "02", title: "Alcance y precio por escrito", desc: "En menos de 24 horas hábiles." },
              { n: "03", title: "Produces o mandas el material", desc: "Tú grabas o lo grabamos nosotros." },
              { n: "04", title: "Recibes el video listo", desc: "Editado, en el formato correcto para publicar." },
            ].map(s => (
              <div key={s.n}>
                <p className="text-3xl font-semibold text-white/10">{s.n}</p>
                <h3 className="mt-3 text-sm font-semibold text-white leading-snug">{s.title}</h3>
                <p className="mt-2 text-sm text-white/45 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Image src="/qs_dekaelo_4.png" alt="Producción audiovisual corporativa" width={580} height={380} className="rounded-2xl border border-white/10 object-cover w-full" />
            <Image src="/qs_dekaelo_1.png" alt="Rodaje institucional" width={580} height={380} className="rounded-2xl border border-white/10 object-cover w-full" />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-24">
        <div className="container max-w-5xl">
          <Eyebrow>Cómo pensamos</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Lo que nos importa al trabajar</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {values.map(v => (
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
          <Eyebrow>Con quiénes hemos trabajado</Eyebrow>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Banco BICE","Trewhela's School","Coesam®","iGromi","APCC","Exploflex®","U-Payments"].map(c => (
              <span key={c} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/50">{c}</span>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/30 leading-relaxed max-w-xl">Banca, educación, industria, tecnología y cámaras empresariales. Proyectos de uso interno y posicionamiento externo.</p>
        </div>
      </section>

      <section className="border-t border-white/10 py-28">
        <div className="container max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />Banco BICE confía en nosotros desde 2024
          </div>
          <h2 className="text-3xl font-semibold md:text-4xl">¿Tu empresa necesita video profesional?</h2>
          <p className="mx-auto mt-5 max-w-xl text-white/50 leading-relaxed">Cuéntanos qué necesitas. Te respondemos con un alcance claro y un precio concreto en menos de 24 horas hábiles.</p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white px-10 py-4 text-sm font-semibold text-black transition hover:bg-white/90">
              Escríbenos por WhatsApp<ArrowUpRight className="h-4 w-4" />
            </a>
            <Link href="/servicios" className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-10 py-4 text-sm text-white/55 transition hover:bg-white/10 hover:text-white">
              Ver servicios y precios<ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-6 text-xs text-white/25">Respondemos el mismo día hábil. Sin compromiso.</p>
        </div>
      </section>

    </main>
  );
}
