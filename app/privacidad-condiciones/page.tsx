import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://www.dekaelomedia.com";
const EMAIL = "info@dekaelomedia.com";

export const metadata: Metadata = {
  title: "Privacidad y Condiciones — Dekaelo Media",
  description:
    "Política de privacidad y condiciones de uso del sitio web de Dekaelo Media.",
  alternates: {
    canonical: `${SITE_URL}/privacidad-y-condiciones`,
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <main className="bg-black text-white">
      <section className="container max-w-3xl py-28">

        <h1 className="text-4xl md:text-5xl font-semibold">
          Privacidad y Condiciones
        </h1>

        <p className="mt-6 text-white/60 text-sm">
          Última actualización: Febrero 2026
        </p>

        {/* INTRO */}
        <section className="mt-16 space-y-6 text-white/70 leading-relaxed">
          <p>
            El presente documento regula el uso del sitio web
            <strong> Dekaelo Media</strong> (www.dekaelomedia.com),
            así como el tratamiento de datos personales recopilados
            a través de los canales de contacto disponibles.
          </p>

          <p>
            Al acceder y utilizar este sitio, el usuario acepta
            las condiciones aquí descritas.
          </p>
        </section>

        {/* DATOS PERSONALES */}
        <section className="mt-20 border-t border-white/10 pt-12 space-y-6">
          <h2 className="text-xl font-semibold">
            1. Tratamiento de datos personales
          </h2>

          <p className="text-white/70 leading-relaxed">
            Los datos entregados voluntariamente por el usuario a través
            de formularios, correo electrónico o WhatsApp (nombre,
            organización, correo, teléfono u otra información relevante)
            serán utilizados exclusivamente para responder consultas,
            evaluar proyectos y mantener comunicación comercial.
          </p>

          <p className="text-white/70 leading-relaxed">
            Dekaelo Media no vende, arrienda ni comparte datos personales
            con terceros, salvo obligación legal.
          </p>

          <p className="text-white/70 leading-relaxed">
            El usuario puede solicitar la eliminación o actualización
            de sus datos escribiendo a <a href={`mailto:${EMAIL}`} className="underline">{EMAIL}</a>.
          </p>
        </section>

        {/* COOKIES */}
        <section className="mt-20 border-t border-white/10 pt-12 space-y-6">
          <h2 className="text-xl font-semibold">
            2. Uso de cookies y herramientas analíticas
          </h2>

          <p className="text-white/70 leading-relaxed">
            Este sitio utiliza herramientas de análisis como Google Analytics
            y Google Ads con el fin de medir tráfico, comportamiento de usuario
            y efectividad de campañas publicitarias.
          </p>

          <p className="text-white/70 leading-relaxed">
            Estas herramientas pueden recopilar información anónima como
            dirección IP (anonimizada), tipo de dispositivo, navegador y
            páginas visitadas.
          </p>

          <p className="text-white/70 leading-relaxed">
            El usuario puede configurar su navegador para bloquear cookies,
            aunque esto podría afectar la experiencia de navegación.
          </p>
        </section>

        {/* PROPIEDAD INTELECTUAL */}
        <section className="mt-20 border-t border-white/10 pt-12 space-y-6">
          <h2 className="text-xl font-semibold">
            3. Propiedad intelectual
          </h2>

          <p className="text-white/70 leading-relaxed">
            Todos los contenidos publicados en este sitio —incluyendo textos,
            videos, imágenes, logotipos, gráficos y estructura visual—
            son propiedad de Dekaelo Media o de sus respectivos clientes,
            y se encuentran protegidos por la legislación vigente.
          </p>

          <p className="text-white/70 leading-relaxed">
            Queda prohibida su reproducción, distribución o uso sin autorización
            expresa por escrito.
          </p>
        </section>

        {/* RESPONSABILIDAD */}
        <section className="mt-20 border-t border-white/10 pt-12 space-y-6">
          <h2 className="text-xl font-semibold">
            4. Limitación de responsabilidad
          </h2>

          <p className="text-white/70 leading-relaxed">
            Dekaelo Media no garantiza la disponibilidad permanente del sitio
            ni la ausencia de errores técnicos, aunque se adoptan medidas
            razonables para su correcto funcionamiento.
          </p>

          <p className="text-white/70 leading-relaxed">
            El uso del sitio es responsabilidad exclusiva del usuario.
          </p>
        </section>

        {/* ENLACES EXTERNOS */}
        <section className="mt-20 border-t border-white/10 pt-12 space-y-6">
          <h2 className="text-xl font-semibold">
            5. Enlaces externos
          </h2>

          <p className="text-white/70 leading-relaxed">
            Este sitio puede contener enlaces a plataformas externas como
            YouTube, Instagram o LinkedIn. Dekaelo Media no es responsable
            de las políticas de privacidad ni del contenido publicado
            en dichos sitios.
          </p>
        </section>

        {/* MODIFICACIONES */}
        <section className="mt-20 border-t border-white/10 pt-12 space-y-6">
          <h2 className="text-xl font-semibold">
            6. Modificaciones
          </h2>

          <p className="text-white/70 leading-relaxed">
            Dekaelo Media se reserva el derecho de modificar la presente
            política en cualquier momento. Las actualizaciones serán
            publicadas en esta misma página.
          </p>
        </section>

        {/* CONTACTO */}
        <section className="mt-20 border-t border-white/10 pt-12 space-y-6">
          <h2 className="text-xl font-semibold">
            7. Contacto
          </h2>

          <p className="text-white/70 leading-relaxed">
            Para consultas relacionadas con privacidad o condiciones
            de uso, puedes escribir a:
          </p>

          <p className="text-white/70">
            <a href={`mailto:${EMAIL}`} className="underline">
              {EMAIL}
            </a>
          </p>
        </section>

        {/* VOLVER */}
        <div className="mt-24 text-sm text-white/40">
          <Link href="/" className="hover:text-white transition">
            ← Volver al inicio
          </Link>
        </div>

      </section>
    </main>
  );
}
