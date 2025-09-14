'use client';

import { useRef, useEffect, FormEvent, useState } from 'react';

export const metadata = {
  title: 'Contacto | Dekaelo Media',
  description: 'Agenda una llamada o cuéntanos sobre tu proyecto.',
};

export default function Page() {
  const zohoContainerRef = useRef<HTMLDivElement>(null);
  const zohoFormRef = useRef<HTMLFormElement | null>(null);

  // Estado del formulario visible
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service_interest: '',
    budget: '',
    message: '',
    consent: false,
  });

  // Carga el formulario Zoho (HTML provisto) en un contenedor oculto
  useEffect(() => {
    if (!zohoContainerRef.current) return;

    // Inyectamos el HTML de Zoho (tal cual lo entregaste) dentro del contenedor oculto
    zohoContainerRef.current.innerHTML = `
<div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm' style='background-color:white;color:black;max-width:600px;'>
<meta name='viewport' content='width=device-width, initial-scale=1.0'>
<META HTTP-EQUIV='content-type' CONTENT='text/html;charset=UTF-8'>
<form id='webform6988454000000608102' action='https://crm.zoho.com/crm/WebToLeadForm' name='WebToLeads6988454000000608102' method='POST' onSubmit='javascript:document.charset="UTF-8"; return checkMandatory6988454000000608102()' accept-charset='UTF-8'>
<input type='text' style='display:none;' name='xnQsjsdp' value='3cb0104ebf0b3e0fbe28221c26ca713333df8de335680d6ecd132d0abd02376e' />
<input type='hidden' name='zc_gad' id='zc_gad' value='' />
<input type='text' style='display:none;' name='xmIwtLD' value='6e97b9c64a45e3d6d92c2c1e99dca8ac878e07493a02b57788c616aa9f6b7ab6cb1508e571d9e22fb00ec0acaf8e49fd' />
<input type='text' style='display:none;' name='actionType' value='TGVhZHM=' />
<input type='text' style='display:none;' name='returnURL' value='https://www.dekaelomedia.com/gracias' />
<style>
  html,body{ margin:0 }
  .formsubmit.zcwf_button{ color:#fff!important; background:#000; border:1px solid #000 }
  #crmWebToEntityForm.zcwf_lblLeft{ width:100%; padding:0; margin:0 auto; box-sizing:border-box }
  #crmWebToEntityForm.zcwf_lblLeft *{ box-sizing:border-box }
  .zcwf_lblLeft .zcwf_row{ margin:10px 0 }
  .zcwf_lblLeft .zcwf_col_lab{ width:30%; float:left; display:none } /* ocultamos labels nativas */
  .zcwf_lblLeft .zcwf_col_fld{ width:100%; float:none } /* ocupamos ancho completo */
  .zcwf_lblLeft .zcwf_col_fld input[type=text],
  .zcwf_lblLeft .zcwf_col_fld textarea,
  .zcwf_lblLeft .zcwf_col_fld select{ width:100%; }
  .wfrm_fld_dpNn{ display:block } /* queremos poder setear la marca */
</style>

<!-- Campos Zoho -->
<div class='zcwf_row'>
  <div class='zcwf_col_lab'><label for='First_Name'>Nombre</label></div>
  <div class='zcwf_col_fld'><input type='text' id='First_Name' name='First Name' maxlength='40' /></div>
</div>
<div class='zcwf_row'>
  <div class='zcwf_col_lab'><label for='Last_Name'>Apellidos *</label></div>
  <div class='zcwf_col_fld'><input type='text' id='Last_Name' name='Last Name' maxlength='80' /></div>
</div>
<div class='zcwf_row'>
  <div class='zcwf_col_lab'><label for='Company'>Empresa *</label></div>
  <div class='zcwf_col_fld'><input type='text' id='Company' name='Company' maxlength='200' /></div>
</div>
<div class='zcwf_row'>
  <div class='zcwf_col_lab'><label for='Email'>Correo electrónico</label></div>
  <div class='zcwf_col_fld'><input type='text' ftype='email' id='Email' name='Email' maxlength='100' /></div>
</div>
<div class='zcwf_row'>
  <div class='zcwf_col_lab'><label for='Phone'>Teléfono</label></div>
  <div class='zcwf_col_fld'><input type='text' id='Phone' name='Phone' maxlength='30' /></div>
</div>
<div class='zcwf_row'>
  <div class='zcwf_col_lab'><label for='LEADCF8'>Estoy interesado en... *</label></div>
  <div class='zcwf_col_fld'>
    <select id='LEADCF8' name='LEADCF8'>
      <option value='-None-'>-None-</option>
      <option value='Plan Audiovisual Mensual'>Plan Audiovisual Mensual</option>
      <option value='Video Corporativo / Institucional'>Video Corporativo / Institucional</option>
      <option value='Podcast en Video'>Podcast en Video</option>
      <option value='Documental / Testimonial'>Documental / Testimonial</option>
      <option value='Motion Graphics / Animación'>Motion Graphics / Animación</option>
      <option value='Otro'>Otro</option>
    </select>
  </div>
</div>
<div class='zcwf_row'>
  <div class='zcwf_col_lab'><label for='LEADCF7'>Presupuesto estimado</label></div>
  <div class='zcwf_col_fld'>
    <select id='LEADCF7' name='LEADCF7'>
      <option value='-None-'>-None-</option>
      <option value='$500.000 - $1.000.000 CLP'>$500.000 - $1.000.000 CLP</option>
      <option value='$1.000.000 - $2.000.000 CLP'>$1.000.000 - $2.000.000 CLP</option>
      <option value='$2.000.000 - $4.000.000 CLP'>$2.000.000 - $4.000.000 CLP</option>
      <option value='$4.000.000+ CLP'>$4.000.000+ CLP</option>
      <option value='No estoy seguro'>No estoy seguro</option>
    </select>
  </div>
</div>
<div class='zcwf_row'>
  <div class='zcwf_col_lab'><label for='LEADCF3'>Mensaje</label></div>
  <div class='zcwf_col_fld'><textarea id='LEADCF3' name='LEADCF3'></textarea></div>
</div>
<div class='zcwf_row wfrm_fld_dpNn'>
  <div class='zcwf_col_lab'><label for='LEADCF5'>Marca</label></div>
  <div class='zcwf_col_fld'>
    <select id='LEADCF5' name='LEADCF5'>
      <option value='Echevensko'>Echevensko</option>
      <option value='Tonx-Strategy'>Tonx-Strategy</option>
      <option value='APCC'>APCC</option>
      <option value='Dekaelo' selected>Dekaelo</option>
    </select>
  </div>
</div>

<!-- Botones Zoho (los dispararemos por JS, no se muestran) -->
<div class='zcwf_row' style='display:none'>
  <div class='zcwf_col_fld'>
    <input type='submit' id='formsubmit' class='formsubmit zcwf_button' value='Enviar' />
    <input type='reset' class='zcwf_button' name='reset' value='Restablecer' />
  </div>
</div>

<script>
  function validateEmail6988454000000608102(){
    var form = document.forms['WebToLeads6988454000000608102'];
    var emailFld = form.querySelectorAll('[ftype=email]');
    for (var i=0; i<emailFld.length; i++) {
      var emailVal = (emailFld[i].value || '').trim();
      if (emailVal.length) {
        var atpos = emailVal.indexOf('@');
        var dotpos = emailVal.lastIndexOf('.');
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
          alert('Introduzca una dirección de correo electrónico válida.');
          emailFld[i].focus();
          return false;
        }
      }
    }
    return true;
  }
  function checkMandatory6988454000000608102(){
    var form = document.forms['WebToLeads6988454000000608102'];
    var mndFileds = ['Company','Last Name','LEADCF8'];
    var fldLangVal = ['Empresa','Apellidos','Estoy interesado en...'];
    for (var i=0; i<mndFileds.length; i++) {
      var fieldObj = form[mndFileds[i]];
      if (fieldObj && (fieldObj.value || '').trim().length == 0) {
        alert(fldLangVal[i] + ' no puede estar vacío.');
        fieldObj.focus();
        return false;
      }
    }
    return validateEmail6988454000000608102();
  }
</script>

<!-- Analytics de Zoho -->
<script id='wf_anal' src='https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=87574270206ccc1df6afb95ac5fff2cf8bccb3daceeb9910447deb276eccd0336d430006fd180a7c284a546d159415edgidcb16d5e639ff5afef9beb4dbc19c5a7fa0e5d3464eb6fbe30e03f1e7db8bc32fgid195deb16a8ab34fbdd284792997675b81ff54044741c06ec629178b74dd4f9begid9ea6a46f83bdc665e05ba6894760e96d04e3cbd25412e90faca5cd6b165e3749&tw=1a744f034b446705d7f306b9fd5fdf0f9dbf5d53372f59ccb9166898d969a895'></script>

</form>
</div>
    `;

    // Guardamos referencia al form Zoho para submit programático
    zohoFormRef.current = zohoContainerRef.current.querySelector<HTMLFormElement>(
      '#webform6988454000000608102'
    );
  }, []);

  // Handler submit: mapea campos del formulario visible → Zoho y envía
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!zohoFormRef.current) return;

    // Validación básica
    if (!form.consent) {
      alert('Debes aceptar la Política de Privacidad y Condiciones.');
      return;
    }
    if (!form.name || !form.email) {
      alert('Por favor, completa al menos tu nombre y email.');
      return;
    }

    // Split de nombre / apellido (Zoho requiere Last Name como obligatorio)
    const parts = form.name.trim().split(' ');
    const lastName = parts.length > 1 ? parts.slice(1).join(' ') : '(Sin apellido)';
    const firstName = parts[0];

    // Seteamos campos de Zoho
    const z = zohoFormRef.current;
    (z.querySelector<HTMLInputElement>('#First_Name')!).value = firstName;
    (z.querySelector<HTMLInputElement>('#Last_Name')!).value = lastName;
    (z.querySelector<HTMLInputElement>('#Company')!).value = form.company || '(No especifica)';
    (z.querySelector<HTMLInputElement>('#Email')!).value = form.email || '';
    (z.querySelector<HTMLInputElement>('#Phone')!).value = form.phone || '';
    (z.querySelector<HTMLSelectElement>('#LEADCF8')!).value = form.service_interest || '-None-';
    (z.querySelector<HTMLSelectElement>('#LEADCF7')!).value = form.budget || '-None-';
    (z.querySelector<HTMLTextAreaElement>('#LEADCF3')!).value = form.message || '';
    (z.querySelector<HTMLSelectElement>('#LEADCF5')!).value = 'Dekaelo'; // Marca

    // Disparamos validación nativa Zoho (su onSubmit la ejecuta). Si pasa, submit.
    const ok = (z as any).onsubmit ? (z as any).onsubmit() : true;
    if (ok !== false) {
      z.submit();
    }
  };

  return (
    <section className="section">
      <div className="container max-w-2xl">
        <h1 className="h2">Contacto</h1>
        <p className="p mt-2 text-white/80">
          Cuéntanos brevemente tu necesidad y coordinamos una llamada. Respondemos dentro de 24–48h hábiles.
        </p>

        {/* Alternativas rápidas */}
        <div className="mt-6 grid sm:grid-cols-2 gap-3">
          <a
            href="mailto:info@dekaelomedia.com?subject=Consulta%20Dekaelo%20Media"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center hover:bg-white/10 transition"
          >
            ✉️ Escribir a info@dekaelomedia.com
          </a>
          <a
            href="https://wa.me/56920080031"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-white text-black px-4 py-3 text-center font-semibold hover:opacity-90 transition"
          >
            WhatsApp: +56 9 2008 0031
          </a>
        </div>

        {/* Formulario visible (Tailwind) */}
        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          {/* anti-spam honeypot (opcional) */}
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid md:grid-cols-2 gap-4">
            <label className="block">
              <span className="sr-only">Nombre y Apellido</span>
              <input
                name="name"
                required
                placeholder="Nombre y Apellido"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-white/20"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>
            <label className="block">
              <span className="sr-only">Email</span>
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-white/20"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </label>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <label className="block">
              <span className="sr-only">Empresa</span>
              <input
                name="company"
                placeholder="Empresa (opcional)"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-white/20"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />
            </label>
            <label className="block">
              <span className="sr-only">Teléfono</span>
              <input
                name="phone"
                type="tel"
                placeholder="Teléfono (opcional)"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-white/20"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </label>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <label className="block">
              <span className="sr-only">Interés</span>
              <select
                name="service_interest"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-white/20"
                value={form.service_interest}
                onChange={(e) => setForm({ ...form, service_interest: e.target.value })}
                required
              >
                <option value="" disabled>Estoy interesado en…</option>
                <option>Plan Audiovisual Mensual</option>
                <option>Video Corporativo / Institucional</option>
                <option>Podcast en Video</option>
                <option>Documental / Testimonial</option>
                <option>Motion Graphics / Animación</option>
                <option>Otro</option>
              </select>
            </label>
            <label className="block">
              <span className="sr-only">Presupuesto estimado</span>
              <select
                name="budget"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-white/20"
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
              >
                <option value="" disabled>Presupuesto estimado</option>
                <option>$500.000 - $1.000.000 CLP</option>
                <option>$1.000.000 - $2.000.000 CLP</option>
                <option>$2.000.000 - $4.000.000 CLP</option>
                <option>$4.000.000+ CLP</option>
                <option>No estoy seguro</option>
              </select>
            </label>
          </div>

          <label className="block">
            <span className="sr-only">Mensaje</span>
            <textarea
              name="message"
              required
              placeholder="Cuéntanos el objetivo, público y ejemplos de referencia."
              rows={6}
              className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-white/20"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </label>

          {/* Checkbox de Privacidad & Condiciones */}
          <label className="flex items-start gap-3 text-sm text-white/70">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5"
              checked={form.consent}
              onChange={(e) => setForm({ ...form, consent: e.target.checked })}
            />
            <span>
              He leído y acepto la{' '}
              <a href="/privacidad-condiciones" className="underline" target="_blank" rel="noopener noreferrer">
                Política de Privacidad y Condiciones
              </a>
              .
            </span>
          </label>

          <div className="flex items-center gap-3">
            <button className="btn" type="submit">Enviar</button>
            <p className="text-xs text-white/50">
              *Usaremos tus datos solo para coordinar y responder a tu solicitud.
            </p>
          </div>
        </form>

        {/* Información adicional */}
        <div className="mt-10 rounded-2xl bg-gray-900 border border-white/10 p-5">
          <p className="text-sm text-white/70">
            <span className="font-semibold text-white">¿Qué sigue?</span> Te escribiremos para agendar una llamada
            breve, entender objetivos y proponerte el enfoque audiovisual correcto (plan mensual o proyecto puntual).
          </p>
        </div>

        {/* Contenedor oculto con el formulario Zoho */}
        <div
          ref={zohoContainerRef}
          className="hidden"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
