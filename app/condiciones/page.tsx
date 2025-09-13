// app/condiciones/page.tsx
export const metadata = {
  title: 'Condiciones de Servicio | Dekaelo Media',
  description: 'Términos y condiciones de uso y contratación de Dekaelo Media.',
  robots: { index: true, follow: true },
};

export default function Page() {
  const updatedAt = '13 de septiembre de 2025';

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Condiciones de Servicio</h1>
      <p className="mt-3 text-gray-300 max-w-3xl">
        Estas Condiciones regulan el uso del sitio y la contratación de nuestros servicios de producción audiovisual.
        Al acceder o contratar, aceptas estos términos.
      </p>
      <p className="mt-1 text-sm text-gray-500">Última actualización: {updatedAt}</p>

      <Section title="1. Partes">
        <p><b>Dekaelo Media</b> (el “Proveedor”) y el cliente (la “Empresa/Cliente”).</p>
      </Section>

      <Section title="2. Alcance de los servicios">
        <p>El alcance, entregables y plazos de cada proyecto se detallan en la propuesta aceptada o contrato. Cambios posteriores podrán implicar ajustes de costo o cronograma.</p>
      </Section>

      <Section title="3. Precios y pagos">
        <ul className="list-disc pl-5 space-y-2">
          <li>Los valores incluyen IVA cuando se indique expresamente.</li>
          <li>Se puede requerir anticipo (por ej., 50%) para iniciar trabajos.</li>
          <li>Los pagos se realizan según hitos o calendario acordado.</li>
          <li>Retrasos en pago pueden suspender entregas hasta regularización.</li>
        </ul>
      </Section>

      <Section title="4. Materiales, licencias y autorizaciones">
        <ul className="list-disc pl-5 space-y-2">
          <li>El Cliente garantiza derechos y permisos sobre los materiales que aporte.</li>
          <li>El Proveedor podrá usar material resultante con fines de portafolio, salvo pacto de confidencialidad.</li>
          <li>Licencias de música, stock u otros recursos se cotizan según uso requerido.</li>
        </ul>
      </Section>

      <Section title="5. Propiedad intelectual">
        <p>Los entregables se transfieren al Cliente con la licencia/cesión indicada tras el pago total. Archivos editables o brutos no están incluidos salvo acuerdo expreso.</p>
      </Section>

      <Section title="6. Confidencialidad">
        <p>Ambas partes mantendrán confidencial la información no pública a la que accedan durante el proyecto.</p>
      </Section>

      <Section title="7. Responsabilidad y garantías">
        <p>Se presta el servicio con diligencia profesional. No se garantizan resultados comerciales específicos. La responsabilidad total del Proveedor se limita al monto efectivamente pagado por el Cliente por el servicio correspondiente.</p>
      </Section>

      <Section title="8. Plazos y fuerza mayor">
        <p>Los plazos podrán ajustarse por causas no imputables (clima, permisos, disponibilidad de locaciones, etc.). Se notificará oportunamente.</p>
      </Section>

      <Section title="9. Cancelaciones y reprogramaciones">
        <ul className="list-disc pl-5 space-y-2">
          <li>Reagendamientos requieren aviso previo razonable y coordinación de agenda.</li>
          <li>Cancelaciones con poco aviso pueden generar cobros por costos incurridos.</li>
        </ul>
      </Section>

      <Section title="10. Datos personales">
        <p>El tratamiento de datos se rige por nuestra <a href="/privacidad" className="underline">Política de Privacidad</a>.</p>
      </Section>

      <Section title="11. Ley aplicable y jurisdicción">
        <p>Estas Condiciones se rigen por las leyes de Chile. Cualquier controversia se someterá a los tribunales de Santiago, Chile.</p>
      </Section>

      <Section title="12. Contacto">
        <p>Consultas sobre estas Condiciones: <a href="mailto:info@dekaelomedia.com" className="underline">info@dekaelomedia.com</a>.</p>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-gray-800 bg-gray-900/40 p-6 mt-8">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-3 text-gray-300 text-sm leading-relaxed">{children}</div>
    </section>
  );
}
