"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { VideoEmbed } from "../components/VideoEmbed";
import { ClientLogos } from "../components/ClientLogos";

type LeadObjective =
  | "Video corporativo"
  | "Video institucional"
  | "Comunicación interna"
  | "Marca empleadora"
  | "Serie corporativa (3–8 episodios)"
  | "Otro";

type BudgetRange =
  | "$1.000.000 – $1.500.000"
  | "$1.500.000 – $3.000.000"
  | "$3.000.000 – $6.000.000"
  | "$6.000.000+";

const OBJECTIVES: LeadObjective[] = [
  "Video corporativo",
  "Video institucional",
  "Comunicación interna",
  "Marca empleadora",
  "Serie corporativa (3–8 episodios)",
  "Otro",
];

const BUDGETS: BudgetRange[] = [
  "$1.000.000 – $1.500.000",
  "$1.500.000 – $3.000.000",
  "$3.000.000 – $6.000.000",
  "$6.000.000+",
];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type QueryState = {
  intent: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  gclid: string;
};

const EMPTY_QUERY: QueryState = {
  intent: "",
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_content: "",
  utm_term: "",
  gclid: "",
};

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [q, setQ] = useState<QueryState>(EMPTY_QUERY);
  const router = useRouter();

  // Lee query params SOLO en cliente (compatible con next export)
  useEffect(() => {
    try {
      const sp = new URLSearchParams(window.location.search);
      const intent = (sp.get("intent") || "").toLowerCase();

      setQ({
        intent,
        utm_source: sp.get("utm_source") || "",
        utm_medium: sp.get("utm_medium") || "",
        utm_campaign: sp.get("utm_campaign") || "",
        utm_content: sp.get("utm_content") || "",
        utm_term: sp.get("utm_term") || "",
        gclid: sp.get("gclid") || "",
      });
    } catch {
      setQ(EMPTY_QUERY);
    }
  }, []);

  const hero = useMemo(() => {
    if (
      q.intent === "interno" ||
      q.intent === "comunicacion" ||
      q.intent === "comunicacion-interna"
    ) {
      return {
        h1: "Comunicación interna en video",
        sub:
          "Producción audiovisual institucional para liderazgo y equipos. Mensajes claros, discretos y bien ejecutados.",
        bullets: ["Ideal para cultura y RRHH", "Propuesta en 48 horas", "Entrega 2–4 semanas"],
        cta: "Recibir propuesta en 48h",
      };
    }

    if (q.intent === "productora" || q.intent === "agencia" || q.intent === "proveedor") {
      return {
        h1: "Productora audiovisual corporativa",
        sub:
          "Proceso ejecutivo para empresas que necesitan estándar profesional: dirección, sonido, color y entrega clara.",
        bullets: ["Desde $1.000.000 + IVA", "Propuesta en 48 horas", "Entrega 2–4 semanas"],
        cta: "Solicitar propuesta",
      };
    }

    if (q.intent === "institucional") {
      return {
        h1: "Video institucional empresa",
        sub:
          "Producción audiovisual institucional clara y discreta para posicionamiento, cultura interna y presentaciones ejecutivas.",
        bullets: ["Desde $1.000.000 + IVA", "Propuesta en 48 horas", "Entrega 2–4 semanas"],
        cta: "Recibir propuesta en 48h",
      };
    }

    return {
      h1: "Video corporativo profesional en Chile",
      sub:
        "Video corporativo y comunicación interna para liderazgo y equipos. Producción audiovisual institucional clara y discreta.",
      bullets: ["Desde $1.000.000 + IVA", "Propuesta en 48 horas", "Entrega 2–4 semanas"],
      cta: "Recibir propuesta en 48h",
    };
  }, [q.intent]);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Adjunta tracking (por si quieres guardarlo)
    formData.set("utm_source", q.utm_source);
    formData.set("utm_medium", q.utm_medium);
    formData.set("utm_campaign", q.utm_campaign);
    formData.set("utm_content", q.utm_content);
    formData.set("utm_term", q.utm_term);
    formData.set("gclid", q.gclid);
    formData.set("intent", q.intent);

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        router.push("/video-corporativo-gracias");
        return;
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-black text-white">
      {/* TOP BAR (logo only) */}
      <div className="container max-w-6xl pt-6">
        <div className="flex items-center justify-between">
          <a href="/" className="inline-flex items-center gap-3">
            <Image
              src="/logo_text_white.png"
              alt="Dekaelo Media"
              width={170}
              height={28}
              priority
            />
          </a>

          <a
            href="#formulario"
            className="hidden sm:inline-flex items-center justify-center border border-white/20 bg-white/5 px-5 py-2 text-sm text-white/80 hover:bg-white/10 transition"
          >
            Recibir propuesta
          </a>
        </div>
      </div>

      {/* HERO */}
      <section className="container max-w-5xl py-20 md:py-28 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/70">
          <span className="inline-block h-2 w-2 rounded-full bg-white/50" />
          Estándar institucional • Proceso ejecutivo • Discreción profesional
        </div>

        <h1 className="mt-8 text-4xl md:text-6xl font-semibold leading-tight">
          {hero.h1}
        </h1>

        <p className="mt-6 text-white/70 text-lg leading-relaxed">{hero.sub}</p>

        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-white/60">
          {hero.bullets.map((b) => (
            <span
              key={b}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2"
            >
              {b}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#formulario"
            className="inline-flex items-center justify-center border border-white/40 px-8 py-3 hover:bg-white hover:text-black transition"
          >
            {hero.cta}
          </a>

          <a
            href="#reel"
            className="inline-flex items-center justify-center border border-white/15 bg-white/5 px-8 py-3 hover:bg-white/10 transition text-white/80"
          >
            Ver reel (60s)
          </a>
        </div>

        <div className="mt-4 text-xs text-white/50">
          Respuesta en 48h hábiles • Sin compromiso • Agenda y aprobación clara
        </div>
      </section>

      {/* CLIENTES */}
      <section className="border-t border-white/10 py-16 md:py-20">
        <div className="container">
          <div className="mb-8 text-center text-sm text-white/60">
            Experiencia en producción institucional y ejecutiva
          </div>
          <ClientLogos />
        </div>
      </section>

      {/* MÉTRICAS */}
      <section className="container border-t border-white/10 py-16 md:py-20 text-center">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="text-5xl font-semibold">58+</div>
            <p className="mt-2 text-white/50">episodios producidos</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="text-5xl font-semibold">6</div>
            <p className="mt-2 text-white/50">industrias distintas</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="text-5xl font-semibold">3+</div>
            <p className="mt-2 text-white/50">años desarrollando series</p>
          </div>
        </div>
      </section>

      {/* PAQUETES */}
      <section className="container border-t border-white/10 py-16 md:py-20 max-w-6xl">
        <h2 className="text-2xl font-semibold mb-10 text-center">
          Rangos de servicio (referencial)
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="text-sm text-white/60">Institucional esencial</div>
            <div className="mt-2 text-xl font-semibold">Desde $1.000.000 + IVA</div>
            <div className="mt-4 text-sm text-white/70 leading-relaxed">
              1 jornada de grabación, dirección cuidada y post completa.
              Ideal para presentación institucional o mensaje ejecutivo.
            </div>
            <div className="mt-6 text-xs text-white/50">Entrega típica: 2–4 semanas</div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="text-sm text-white/60">Institucional pro</div>
            <div className="mt-2 text-xl font-semibold">$1.500.000 – $3.000.000</div>
            <div className="mt-4 text-sm text-white/70 leading-relaxed">
              Más estructura narrativa, 1–2 jornadas y piezas derivadas para uso interno o web.
            </div>
            <div className="mt-6 text-xs text-white/50">
              Para directorio, marca empleadora o cultura
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="text-sm text-white/60">Serie corporativa</div>
            <div className="mt-2 text-xl font-semibold">3–8 episodios (contrato)</div>
            <div className="mt-4 text-sm text-white/70 leading-relaxed">
              Sistema editorial corporativo: entrevistas ejecutivas, cápsulas de cultura o vodcast con calendario.
            </div>
            <div className="mt-6 text-xs text-white/50">Propuesta a medida en 48 horas</div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-white/50">
          Los rangos dependen de objetivos, jornadas, locaciones y nivel de postproducción.
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="container border-t border-white/10 py-16 md:py-20 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-10 text-center">
          Qué incluye tu producción
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-white/70 text-sm leading-relaxed">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="text-white font-medium mb-3">Proceso</div>
            <ul className="space-y-2">
              <li>• Reunión estratégica inicial</li>
              <li>• Definición clara de mensaje y audiencia</li>
              <li>• Dirección y puesta en escena cuidada</li>
              <li>• Iluminación y sonido profesional</li>
              <li>• Edición completa y corrección de color</li>
              <li>• Música licenciada (según requerimiento)</li>
              <li>• Entrega optimizada para web o uso interno</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="text-white font-medium mb-3">Ideal para</div>
            <ul className="space-y-2">
              <li>• Video institucional empresa</li>
              <li>• Comunicación interna ejecutiva</li>
              <li>• Presentación a directorio</li>
              <li>• Marca empleadora</li>
              <li>• Series corporativas / entrevistas</li>
              <li>• Lanzamientos y hitos</li>
            </ul>
          </div>
        </div>
      </section>

      {/* REEL */}
      <section id="reel" className="container border-t border-white/10 py-16 md:py-20 max-w-4xl">
        <VideoEmbed
          src="https://www.youtube.com/embed/uul8LNP6BbQ?rel=0"
          title="Reel Dekaelo Media"
        />
      </section>

      {/* DIFERENCIAL */}
      <section className="container border-t border-white/10 py-16 md:py-20 max-w-4xl text-center">
        <h2 className="text-2xl font-semibold mb-6">Nuestro diferencial</h2>
        <p className="text-white/70 leading-relaxed">
          No producimos piezas improvisadas. Diseñamos cada proyecto con estructura,
          narrativa clara y estándar aplicado al entorno corporativo. Procesos eficientes y discreción profesional.
        </p>
      </section>

      {/* FORMULARIO */}
      <section
        id="formulario"
        className="container border-t border-white/10 py-16 md:py-20 max-w-3xl text-center"
      >
        <h2 className="text-2xl mb-3">Recibe tu propuesta en 48 horas</h2>
        <p className="text-white/50 mb-10">
          Cuéntanos objetivo, fechas y contexto. Si no hay fecha definida, indícalo igual.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          {/* Tracking hidden */}
          <input type="hidden" name="utm_source" value={q.utm_source} />
          <input type="hidden" name="utm_medium" value={q.utm_medium} />
          <input type="hidden" name="utm_campaign" value={q.utm_campaign} />
          <input type="hidden" name="utm_content" value={q.utm_content} />
          <input type="hidden" name="utm_term" value={q.utm_term} />
          <input type="hidden" name="gclid" value={q.gclid} />
          <input type="hidden" name="intent" value={q.intent} />

          <div className="grid sm:grid-cols-2 gap-4">
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
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
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
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <select
              name="objetivo"
              required
              defaultValue={
                q.intent === "interno" ||
                q.intent === "comunicacion" ||
                q.intent === "comunicacion-interna"
                  ? "Comunicación interna"
                  : q.intent === "institucional"
                  ? "Video institucional"
                  : ""
              }
              className={cx("w-full bg-black border border-white/20 px-4 py-3", "text-white/90")}
            >
              <option value="" disabled>
                Objetivo principal
              </option>
              {OBJECTIVES.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>

            <select
              name="presupuesto"
              required
              defaultValue=""
              className={cx("w-full bg-black border border-white/20 px-4 py-3", "text-white/90")}
            >
              <option value="" disabled>
                Presupuesto estimado
              </option>
              {BUDGETS.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <select
              name="plazo"
              required
              defaultValue=""
              className="w-full bg-black border border-white/20 px-4 py-3 text-white/90"
            >
              <option value="" disabled>
                ¿Para cuándo lo necesitas?
              </option>
              <option value="1–2 semanas">1–2 semanas</option>
              <option value="3–4 semanas">3–4 semanas</option>
              <option value="1–2 meses">1–2 meses</option>
              <option value="Sin fecha definida">Sin fecha definida</option>
            </select>

            <select
              name="jornadas"
              required
              defaultValue=""
              className="w-full bg-black border border-white/20 px-4 py-3 text-white/90"
            >
              <option value="" disabled>
                Jornadas de grabación
              </option>
              <option value="1 jornada">1 jornada</option>
              <option value="2 jornadas">2 jornadas</option>
              <option value="A definir">A definir</option>
            </select>
          </div>

          <textarea
            name="mensaje"
            placeholder="Describe brevemente tu proyecto (objetivo, audiencia y contexto)"
            required
            rows={5}
            className="w-full bg-black border border-white/20 px-4 py-3"
          />

          <div className="text-xs text-white/50">
            Respuesta en 48h hábiles. Ideal correo corporativo, pero recibimos cualquier correo.
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full border border-white py-4 hover:bg-white hover:text-black transition"
          >
            {loading ? "Enviando..." : "Recibir propuesta en 48h"}
          </button>
        </form>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-xs text-white/40">
        Dekaelo Media • Producción audiovisual corporativa • Santiago, Chile
      </footer>
    </main>
  );
}
