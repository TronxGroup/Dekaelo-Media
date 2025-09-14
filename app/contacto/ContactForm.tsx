'use client';

import { useEffect, useRef, useState, FormEvent } from 'react';

export default function ContactForm() {
  const zohoContainerRef = useRef<HTMLDivElement>(null);
  const zohoFormRef = useRef<HTMLFormElement | null>(null);

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

  useEffect(() => {
    if (!zohoContainerRef.current) return;

    // Inyecta el formulario WebToLead de Zoho (tu HTML original, con estilos neutralizados para ocultarlo)
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
      /* Ocultamos estructura nativa; solo usamos campos por JS */
      .zcwf_lblLeft .zcwf_row { display:none; }
    </style>

    <!-- Campos Zoho (visibles solo para el DOM) -->
    <div class='zcwf_row'><div class='zcwf_col_fld'><input type='text' id='First_Name' name='First Name' /></div></div>
    <div class='zcwf_row'><div class='zcwf_col_fld'><input type='text' id='Last_Name' name='Last Name' /></div></div>
    <div class='zcwf_row'><div class='zcwf_col_fld'><input type='text' id='Company' name='Company' /></div></div>
    <div class='zcwf_row'><div class='zcwf_col_fld'><input type='text' ftype='email' id='Email' name='Email' /></div></div>
    <div class='zcwf_row'><div class='zcwf_col_fld'><input type='text' id='Phone' name='Phone' /></div></div>

    <div class='zcwf_row'><div class='zcwf_col_fld'>
      <select id='LEADCF8' name='LEADCF8'>
        <option value='-None-'>-None-</option>
        <option value='Plan Audiovisual Mensual'>Plan Audiovisual Mensual</option>
        <option value='Video Corporativo / Institucional'>Video Corporativo / Institucional</option>
        <option value='Podcast en Video'>Podcast en Video</option>
        <option value='Documental / Testimonial'>Documental / Testimonial</option>
        <option value='Motion Graphics / Animación'>Motion Graphics / Animación</option>
        <option value='Otro'>Otro</option>
      </select>
    </div></div>

    <div class='zcwf_row'><div class='zcwf_col_fld'>
      <select id='LEADCF7' name='LEADCF7'>
        <option value='-None-'>-None-</option>
        <option value='$500.000 - $1.000.000 CLP'>$500.000 - $1.000.000 CLP</option>
        <option value='$1.000.000 - $2.000.000 CLP'>$1.000.000 - $2.000.000 CLP</option>
        <option value='$2.000.000 - $4.000.000 CLP'>$2.000.000 - $4.000.000 CLP</option>
        <option value='$4.000.000+ CLP'>$4.000.000+ CLP</option>
        <option value='No estoy seguro'>No estoy seguro</option>
      </select>
    </div></div>

    <div class='zcwf_row'><div class='zcwf_col_fld'><textarea id='LEADCF3' name='LEADCF3'></textarea></div></div>

    <div class='zcwf_row'><div class='zcwf_col_fld'>
      <select id='LEADCF5' name='LEADCF5'>
        <option value='Echevensko'>Echevensko</option>
        <option value='Tonx-Strategy'>Tonx-Strategy</option>
        <option value='APCC'>APCC</option>
        <option value='Dekaelo' selected>Dekaelo</option>
      </select>
    </div></div>

    <div style='display:none'><input type='submit' id='formsubmit' class='formsubmit zcwf_button' value='Enviar' /></div>

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

    <script id='wf_anal' src='https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=87574270206ccc1df6afb95ac5fff2cf8bccb3daceeb9910447deb276eccd0336d430006fd180a7c284a546d159415edgidcb16d5e639ff5afef9beb4dbc19c5a7fa0e5d3464eb6fbe30e03f1e7db8bc32fgid195deb16a8ab34fbdd284792997675b81ff54044741c06ec629178b74dd4f9begid9ea6a46f83bdc665e05ba6894760e96d04e3cbd25412e90faca5cd6b165e3749&tw=1a744f034b446705d7f306b9fd5fdf0f9dbf5d53372f59ccb9166898d969a895'></script>
  </form>
</div>
    `;

    zohoFormRef.current =
      zohoContainerRef.current.querySelector<HTMLFormElement>('#webform6988454000000608102');
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!zohoFormRef.current) return;

    if (!form.consent) {
      alert('Debes aceptar la Política de Privacidad y Condiciones.');
      return;
    }
    if (!form.name || !form.email) {
      alert('Por favor, completa al menos tu nombre y email.');
      return;
    }

    // Split nombre/apellido para Zoho (Last Name es obligatorio)
    const [firstName, ...rest] = form.name.trim().split(' ');
    const lastName = rest.length ? rest.join(' ') : '(Sin apellido)';

    const z = zohoFormRef.current;
    (z.querySelector<HTMLInputElement>('#First_Name')!).value = firstName || '';
    (z.querySelector<HTMLInputElement>('#Last_Name')!).value = lastName || '';
    (z.querySelector<HTMLInputElement>('#Company')!).value = form.company || '(No especifica)';
    (z.querySelector<HTMLInputElement>('#Email')!).value = form.email || '';
    (z.querySelector<HTMLInputElement>('#Phone')!).value = form.phone || '';
    (z.querySelector<HTMLSelectElement>('#LEADCF8')!).value = form.service_interest || '-None-';
    (z.querySelector<HTMLSelectElement>('#LEADCF7')!).value = form.budget || '-None-';
    (z.querySelector<HTMLTextAreaElement>('#LEADCF3')!).value = form.message || '';
    (z.querySelector<HTMLSelectElement>('#LEADCF5')!).value = 'Dekaelo';

    const ok = (z as any).onsubmit ? (z as any).onsubmit() : true;
    if (ok !== false) z.submit();
  };

  return (
    <>
      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        {/* honeypot */}
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
            </a>.
          </span>
        </label>

        <div className="flex items-center gap-3">
          <button className="btn" type="submit">Enviar</button>
          <p className="text-xs text-white/50">
            *Usaremos tus datos solo para coordinar y responder a tu solicitud.
          </p>
        </div>
      </form>

      {/* Contenedor oculto para Zoho */}
      <div ref={zohoContainerRef} className="hidden" aria-hidden="true" />
    </>
  );
}
