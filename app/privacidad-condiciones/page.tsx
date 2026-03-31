import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacidad y Condiciones — Dekaelo Media",
  description: "Política de privacidad y condiciones de uso de Dekaelo Media.",
  robots: { index: false, follow: false },
};

export default function PrivacidadPage() {
  return (
    <main className="bg-black text-white">
      <section className="container max-w-3xl py-28">
        <h1 className="text-3xl font-semibold mb-10">Privacidad y Condiciones</h1>

        <div className="space-y-10 text-white/60 leading-relaxed text-sm">
          <div>
            <h2 className="text-base font-semibold text-white mb-3">1. Información que recopilamos</h2>
            <p>Recopilamos únicamente la información que tú nos proporcionas directamente a través del formulario de contacto o por WhatsApp: nombre, correo electrónico, nombre de empresa y descripción del proyecto. No recopilamos datos de forma automática más allá de lo que Google Analytics registra de forma anónima.</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-3">2. Uso de la información</h2>
            <p>La información que nos envías se usa exclusivamente para responder tu consulta y gestionar el proyecto si decides trabajar con nosotros. No vendemos, compartimos ni cedemos tu información a terceros.</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-3">3. Cookies y analytics</h2>
            <p>Este sitio utiliza Google Analytics con IP anonimizada para entender cómo se navega el sitio. No usamos cookies de publicidad ni de seguimiento entre sitios.</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-3">4. Contenido producido</h2>
            <p>Todo el contenido audiovisual producido por Dekaelo Media para un cliente es propiedad del cliente una vez completado el pago acordado. Dekaelo Media puede usar fragmentos del trabajo en su portafolio salvo acuerdo expreso de confidencialidad.</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-3">5. Contacto</h2>
            <p>Si tienes preguntas sobre esta política, escríbenos a <a href="mailto:info@dekaelomedia.com" className="text-white hover:underline">info@dekaelomedia.com</a>.</p>
          </div>

          <p className="text-white/30 text-xs pt-4 border-t border-white/10">
            Última actualización: marzo 2026 · Dekaelo Media · Tronx Group SpA · RUT 78.297.435-1
          </p>
        </div>
      </section>
    </main>
  );
}
