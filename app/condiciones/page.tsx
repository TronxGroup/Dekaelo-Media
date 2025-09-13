// app/condiciones/page.tsx
import Link from 'next/link';

export const metadata = {
  title: 'Condiciones de Servicio | Dekaelo Media',
  description:
    'Términos y Condiciones de Dekaelo Media para la prestación de servicios audiovisuales y complementarios en Chile.',
  robots: { index: true, follow: true },
};

export default function Page() {
  const updatedAt = '13 de septiembre de 2025';

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Condiciones de Servicio</h1>
      <p className="mt-3 text-gray-300 max-w-3xl">
        Estas Condiciones regulan la relación entre <b>Dekaelo Media</b> (“Dekaelo”, “nosotros”) y el cliente
        (“el Cliente”, “tú”) respecto de los servicios audiovisuales y complementarios descritos en este sitio.
        Al contratar o solicitar una cotización, aceptas estas Condiciones.
      </p>
      <p className="mt-1 text-sm text-gray-500">Última actualización: {updatedAt}</p>

      {/* Resumen rápido */}
      <section className="rounded-3xl border border-gray-800 bg-gray-900/40 p-6 mt-8">
        <h2 className="text-xl font-semibold">Resumen rápido</h2>
        <ul className="mt-3 grid md:grid-cols-2 gap-2 text-sm text-gray-300">
          {[
            'Anticipo para reservar fechas y equipo.',
            '1 ronda de revisión incluida (según plan).',
            'Licencia de uso para los entregables finales en tus canales.',
            'El material bruto (raw) no se entrega por defecto.',
            'Permisos de locación, personas y música: responsabilidad compartida.',
            'Plazos y reprogramaciones sujetos a disponibilidad.',
          ].map((t, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-400" /> {t}
            </li>
          ))}
        </ul>
      </section>

      {/* Secciones */}
      <Section title="1. Identificación y ámbito">
        <p>
          Dekaelo Media es un estudio de producción audiovisual con base en Santiago de Chile. Prestamos servicios
          de grabación, edición, postproducción y contenidos relacionados para empresas y organizaciones.
        </p>
      </Section>

      <Section title="2. Propuesta, alcance y cambios">
        <p>
          El alcance, entregables, plazos y precio se detallan en la propuesta o cotización aceptada por el Cliente.
          Cambios fuera de alcance (p. ej., mayor duración, nuevas piezas, regrabaciones) se cotizarán y aprobarán
          por escrito antes de ejecutarse.
        </p>
      </Section>

      <Section title="3. Reserva, pagos y facturación">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <b>Anticipo:</b> se solicita un anticipo para bloquear fechas, agenda y equipo técnico.
          </li>
          <li>
            <b>Planes mensuales:</b> se facturan y pagan por adelantado cada mes (IVA incluido cuando corresponda).
          </li>
          <li>
            <b>Saldo:</b> antes de la entrega final o según hito pactado (por ejemplo, pre-entrega para revisión).
          </li>
          <li>
            <b>Moras:</b> pagos fuera de plazo pueden suspender entregas y futuras grabaciones hasta regularización.
          </li>
          <li>
            Se emite factura electrónica conforme a la normativa chilena.
          </li>
        </ul>
      </Section>

      <Section title="4. Cancelaciones y reprogramaciones">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <b>Reprogramación</b> por parte del Cliente requiere aviso escrito y está sujeta a disponibilidad.
          </li>
          <li>
            Costos ya incurridos (arriendos, traslados, reservas) se cobran si no son reembolsables.
          </li>
          <li>
            Por <b>fuerza mayor</b> (clima extremo, contingencias), las partes reprogramarán en la primera fecha viable.
          </li>
        </ul>
      </Section>

      <Section title="5. Permisos, derechos de imagen y locaciones">
        <p>
          El Cliente garantiza contar con permisos de filmación, autorizaciones de locación y derechos de imagen de
          personas y marcas mostradas. Dekaelo puede apoyar con modelos de releases cuando se solicite, pero la
          responsabilidad final de su obtención y archivo recae en el Cliente.
        </p>
      </Section>

      <Section title="6. Música, materiales de terceros y cumplimiento">
        <p>
          Cuando se utilicen pistas, imágenes o tipografías de terceros, se emplearán licencias válidas para el
          uso acordado. Costos de licencias <i>premium</i> o de uso extendido (p. ej., campañas pagadas masivas, TV)
          serán cotizados aparte. El Cliente declara que cuenta con los derechos sobre los materiales que nos entrega.
        </p>
      </Section>

      <Section title="7. Propiedad intelectual y licencia de uso">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Dekaelo retiene los derechos patrimoniales sobre el <b>material bruto (raw)</b>, archivos de proyecto,
            plantillas y fuentes. Por defecto, esos insumos no se entregan.
          </li>
          <li>
            El Cliente recibe una <b>licencia no exclusiva, mundial y sin límite de tiempo</b> para usar los
            <b> entregables finales</b> en sus canales declarados (web/redes/plataformas). Usos no previstos
            (p. ej., TV abierta, DOOH, sublicencia a terceros) requieren autorización y licencia adicional.
          </li>
          <li>
            Si el Cliente desea adquirir el <b>material bruto</b> o archivos editables, puede solicitar una cotización
            de cesión/licencia extendida.
          </li>
        </ul>
      </Section>

      <Section title="8. Créditos y portafolio">
        <p>
          Dekaelo podrá exhibir piezas en su portafolio, redes y propuestas comerciales, para fines de difusión
          profesional. Si el Cliente requiere <b>no</b> aparecer en portafolio, debe comunicarlo por escrito antes de
          la publicación a <Link className="underline underline-offset-4" href="mailto:info@dekaelomedia.com">info@dekaelomedia.com</Link>.
        </p>
      </Section>

      <Section title="9. Entregas, revisiones y aceptación">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Los planes incluyen <b>1 ronda de revisión</b> por pieza, salvo que la propuesta indique otra cosa.
          </li>
          <li>
            Cambios tras la ronda incluida o por nuevas definiciones editoriales se cotizan como adicionales.
          </li>
          <li>
            Si dentro de <b>5 días hábiles</b> desde la pre-entrega no recibimos comentarios, se entenderá
            <b> aceptación tácita</b> y se procederá a la exportación final.
          </li>
        </ul>
      </Section>

      <Section title="10. Confidencialidad y datos personales">
        <p>
          Trataremos como confidencial la información no pública del Cliente a la que accedamos por la prestación.
          El tratamiento de datos personales se rige por nuestra{' '}
          <Link href="/privacidad" className="underline underline-offset-4">Política de Privacidad</Link>.
        </p>
      </Section>

      <Section title="11. Responsabilidad y limitación">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Dekaelo actúa con diligencia profesional. No garantizamos resultados específicos en vistas, ventas o
            posicionamiento, pues dependen de variables externas (algoritmos, pauta, mercado, etc.).
          </li>
          <li>
            En cualquier caso, la responsabilidad total de Dekaelo se limita al <b>monto efectivamente pagado</b> por
            el Cliente en los <b>últimos 3 meses</b> por el servicio que originó el reclamo.
          </li>
        </ul>
      </Section>

      <Section title="12. Comunicaciones y uso de plataformas">
        <p>
          Para la operación usaremos herramientas de terceros (p. ej., YouTube, Google Drive, Wetransfer, Meta).
          El Cliente acepta sus términos y reconoce que fallas o políticas de dichas plataformas son ajenas a Dekaelo.
        </p>
      </Section>

      <Section title="13. Impuestos y retenciones">
        <p>
          Los precios informados pueden indicar si incluyen o no IVA; ante duda, se asume que los valores son <b>IVA
          incluido</b>. Cualquier retención o impuesto adicional aplicable será de cargo del Cliente cuando corresponda.
        </p>
      </Section>

      <Section title="14. Vigencia, modificaciones y nulidad">
        <p>
          Podemos actualizar estas Condiciones para reflejar cambios legales u operativos. La versión vigente siempre
          será la publicada en este sitio. Si alguna cláusula fuese nula, el resto permanecerá plenamente vigente.
        </p>
      </Section>

      <Section title="15. Ley aplicable y jurisdicción">
        <p>
          Estas Condiciones se rigen por las leyes de la República de Chile. Para todos los efectos, las partes fijan
          domicilio en la ciudad de Santiago y se someten a la competencia de sus tribunales ordinarios.
        </p>
      </Section>

      {/* CTA */}
      <div className="mt-10 rounded-3xl border border-gray-800 bg-gray-900/40 p-6">
        <h2 className="text-lg font-semibold">¿Dudas sobre estas Condiciones?</h2>
        <p className="mt-2 text-gray-300">
          Escríbenos a{' '}
          <Link className="underline underline-offset-4" href="mailto:info@dekaelomedia.com">
            info@dekaelomedia.com
          </Link>{' '}
          y te respondemos a la brevedad.
        </p>
      </div>
    </div>
  );
}

/* ---------- Subcomponentes ---------- */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-gray-800 bg-gray-900/40 p-6 mt-8">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-3 text-gray-300 text-sm leading-relaxed">{children}</div>
    </section>
  );
}
