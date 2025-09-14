import Link from "next/link";
import { Check, Video, BarChart3, Users, Camera } from "lucide-react";

export const metadata = {
  title: "Plan Audiovisual Mensual | Dekaelo Media",
  description:
    "Producción Audiovisual Estratégica: 1 jornada de rodaje, video largo + 4–5 reels para tu marca cada mes.",
};

export default function Page() {
  return (
    <section className="section">
      <div className="container max-w-4xl">
        {/* HERO */}
        <header className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Plan Audiovisual Mensual
          </h1>
          <p className="mt-3 text-white/70 text-lg max-w-2xl mx-auto">
            Contenido con calidad cinematográfica para tu empresa, todos los
            meses. Nosotros nos encargamos de ideas, guion, rodaje y entrega;
            tu equipo se enfoca en crecer.
          </p>
        </header>

        {/* BENEFICIOS */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="card">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Camera size={20} /> Incluye
            </h2>
            <ul className="mt-4 space-y-2 text-white/80">
              <li className="flex gap-2">
                <Check size={16} /> 1 jornada de grabación profesional (hasta 8
                horas)
              </li>
              <li className="flex gap-2">
                <Check size={16} /> 1 video largo institucional / YouTube /
                podcast
              </li>
              <li className="flex gap-2">
                <Check size={16} /> 4–5 reels o cápsulas para redes sociales
              </li>
              <li className="flex gap-2">
                <Check size={16} /> Guion creativo + asesoría en publicaciones
              </li>
              <li className="flex gap-2">
                <Check size={16} /> 1 ronda de revisión incluida
              </li>
              <li className="flex gap-2">
                <Check size={16} /> Entregas optimizadas por plataforma
              </li>
              <li className="flex gap-2">
                <Check size={16} /> Informe mensual con ideas y análisis básico
              </li>
            </ul>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <BarChart3 size={20} /> Beneficios
            </h2>
            <ul className="mt-4 space-y-2 text-white/80">
              <li className="flex gap-2">
                <Check size={16} /> Presencia digital constante
              </li>
              <li className="flex gap-2">
                <Check size={16} /> Contenido profesional que transmite confianza
              </li>
              <li className="flex gap-2">
                <Check size={16} /> Estrategia creativa alineada a objetivos
              </li>
              <li className="flex gap-2">
                <Check size={16} /> Equipo técnico y creativo especializado
              </li>
              <li className="flex gap-2">
                <Check size={16} /> Reportes claros para medir impacto
              </li>
            </ul>
          </div>
        </div>

        {/* PRECIO */}
        <div className="card mt-12 text-center">
          <h3 className="text-2xl font-semibold">Valor Plan</h3>
          <p className="mt-2 text-3xl font-bold text-white">$952.000</p>
          <p className="text-sm text-white/70">IVA incluido</p>
          <p className="mt-2 text-white/70">
            Cupos limitados: máximo 5 empresas al mes para asegurar calidad y
            personalización.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <Link href="/contacto" className="btn">
              Contratar ahora
            </Link>
            <Link href="/contacto" className="btn-outline">
              Hablar con un asesor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
