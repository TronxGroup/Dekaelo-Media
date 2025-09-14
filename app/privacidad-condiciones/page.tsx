export const metadata = {
  title: 'Privacidad y Condiciones | Dekaelo Media',
  description:
    'Política de privacidad y términos de uso de los servicios de Dekaelo Media.',
};

export default function Page() {
  return (
    <section className="section container max-w-4xl">
      <h1 className="h2 mb-6">Privacidad y Condiciones</h1>

      <p className="text-white/70 mb-4">
        En <strong>Dekaelo Media</strong> valoramos la confianza de nuestros clientes y usuarios.
        Este documento reúne nuestra <strong>Política de Privacidad</strong> y nuestros
        <strong> Términos & Condiciones</strong>, que regulan el uso de nuestro sitio web y
        servicios audiovisuales.
      </p>

      {/* PRIVACIDAD */}
      <h2 className="h3 mt-10 mb-3">1. Política de Privacidad</h2>

      <h3 className="font-semibold mt-6 mb-2">1.1 Datos recopilados</h3>
      <p className="text-white/70 mb-4">
        Podemos recopilar datos como nombre, correo electrónico, teléfono u otra información entregada
        voluntariamente al usar formularios de contacto, suscribirse a campañas o contratar servicios.
      </p>

      <h3 className="font-semibold mt-6 mb-2">1.2 Uso de la información</h3>
      <p className="text-white/70 mb-4">
        La información será utilizada exclusivamente para fines relacionados con la prestación de
        servicios, gestión de relaciones comerciales, envío de comunicaciones y mejoras en nuestros
        procesos internos.
      </p>

      <h3 className="font-semibold mt-6 mb-2">1.3 Almacenamiento y seguridad</h3>
      <p className="text-white/70 mb-4">
        Los datos se almacenan en plataformas seguras y de acceso restringido. No vendemos ni
        compartimos información con terceros, salvo obligación legal o proveedores que nos ayudan a
        operar los servicios (ej: hosting, CRM, email marketing).
      </p>

      <h3 className="font-semibold mt-6 mb-2">1.4 Derechos del usuario</h3>
      <p className="text-white/70 mb-4">
        Todo usuario puede solicitar acceso, rectificación o eliminación de sus datos escribiendo a{' '}
        <a href="mailto:info@dekaelomedia.com" className="underline">
          info@dekaelomedia.com
        </a>.
      </p>

      {/* CONDICIONES */}
      <h2 className="h3 mt-10 mb-3">2. Términos y Condiciones</h2>

      <h3 className="font-semibold mt-6 mb-2">2.1 Propiedad intelectual</h3>
      <p className="text-white/70 mb-4">
        Todo material audiovisual, gráfico o escrito creado por Dekaelo Media es propiedad de la
        empresa, salvo acuerdo contractual distinto. El cliente adquiere el derecho de uso para los
        fines definidos, pero no puede revender ni sublicenciar sin autorización.
      </p>

      <h3 className="font-semibold mt-6 mb-2">2.2 Uso de contenidos</h3>
      <p className="text-white/70 mb-4">
        El cliente es responsable del uso de los contenidos entregados. Dekaelo Media no se hace
        responsable por ediciones, modificaciones o distribuciones no autorizadas.
      </p>

      <h3 className="font-semibold mt-6 mb-2">2.3 Confidencialidad</h3>
      <p className="text-white/70 mb-4">
        Toda la información compartida por el cliente durante la producción será tratada de manera
        confidencial y utilizada solo para los servicios contratados.
      </p>

      <h3 className="font-semibold mt-6 mb-2">2.4 Plazos y entregas</h3>
      <p className="text-white/70 mb-4">
        Los plazos de entrega se establecerán en cada propuesta o contrato. Dekaelo Media no es
        responsable de retrasos causados por demoras en aprobaciones, pagos o envío de insumos por
        parte del cliente.
      </p>

      <h3 className="font-semibold mt-6 mb-2">2.5 Pagos</h3>
      <p className="text-white/70 mb-4">
        Las condiciones de pago se detallarán en cada propuesta. El incumplimiento puede generar
        suspensión del servicio y retención de los materiales hasta regularizar la situación.
      </p>

      <h3 className="font-semibold mt-6 mb-2">2.6 Limitación de responsabilidad</h3>
      <p className="text-white/70 mb-4">
        Dekaelo Media no será responsable por daños indirectos, pérdida de beneficios o perjuicios
        derivados del uso de los contenidos.
      </p>

      <h3 className="font-semibold mt-6 mb-2">2.7 Legislación aplicable</h3>
      <p className="text-white/70 mb-8">
        Estas condiciones se rigen por las leyes de la República de Chile. Cualquier disputa será
        sometida a los tribunales competentes de Santiago.
      </p>

      <p className="text-sm text-white/60">
        Última actualización: {new Date().getFullYear()}
      </p>
    </section>
  );
}
