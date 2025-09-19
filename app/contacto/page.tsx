// app/contacto/page.tsx
"use client";

import Script from "next/script";

export const metadata = {
  title: "Contacto | Dekaelo Media",
  description: "Agenda una llamada o cuéntanos sobre tu proyecto.",
};

export default function Page() {
  return (
    <section className="section">
      <div className="container max-w-2xl">
        <h1 className="h2">Contacto</h1>
        <p className="p mt-2 text-white/80">
          Cuéntanos brevemente tu necesidad y coordinamos una llamada. Respondemos dentro de 24–48h hábiles.
        </p>

        {/* Atajos */}
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

        {/* ========= ZOHO WEB-TO-LEAD (EMBED OFICIAL) ========= */}
        {/* Cargamos reCAPTCHA (requerido por Zoho) */}
        <Script src="https://www.google.com/recaptcha/api.js" async defer />

        {/* CSS de integración (dark theme) */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
#crmWebToEntityForm.zcwf_lblLeft{width:100%;max-width:100%;padding:0;margin:0 auto;box-sizing:border-box}
#crmWebToEntityForm *{box-sizing:border-box}
#crmWebToEntityForm .zcwf_row{margin:14px 0}
#crmWebToEntityForm .zcwf_col_lab{width:100%;margin-bottom:6px;color:#cbd5e1;font-size:12px}
#crmWebToEntityForm .zcwf_col_fld{width:100%}
#crmWebToEntityForm input[type=text],
#crmWebToEntityForm input[type=email],
#crmWebToEntityForm input[type=tel],
#crmWebToEntityForm select,
#crmWebToEntityForm textarea{
  width:100%;border-radius:12px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);
  color:#e5e7eb;padding:12px 14px;outline:0
}
#crmWebToEntityForm textarea{min-height:140px}
#crmWebToEntityForm .formsubmit.zcwf_button,
#crmWebToEntityForm .zcwf_button{
  border-radius:12px;padding:10px 16px;border:1px solid rgba(255,255,255,.1);
}
#crmWebToEntityForm .formsubmit.zcwf_button{
  background: #fff;color:#000;font-weight:600
}
#crmWebToEntityForm .zcwf_privacy_txt{color:#cbd5e1}
/* Dark recaptcha */
#crmWebToEntityForm .g-recaptcha{transform:scale(1.0);transform-origin:left top}
            `,
          }}
        />

        <div className="mt-8 rounded-2xl bg-white/5 border border-white/10 p-6">
          <div
            id="crmWebToEntityForm"
            className="zcwf_lblLeft crmWebToEntityForm"
            style={{ backgroundColor: "transparent", color: "white" }}
          >
            <form
              id="webform6988454000000608102"
              action="https://crm.zoho.com/crm/WebToLeadForm"
              name="WebToLeads6988454000000608102"
              method="POST"
              onSubmit={() => {
                // estas validaciones se definen abajo (Script inline)
                // @ts-expect-error
                document.charset = "UTF-8";
                // @ts-expect-error
                return window.checkMandatory6988454000000608102();
              }}
              acceptCharset="UTF-8"
            >
              <input type="hidden" name="xnQsjsdp" value="c1decf9b255b45483881cded17cb62aa469c1838dc5da8f4d700dca6fb78e1b3" />
              <input type="hidden" name="zc_gad" id="zc_gad" value="" />
              <input type="hidden" name="xmIwtLD" value="8f5a31310683b83674afa3197fe3a841b16c7a92f18c214c683dcd4da3b687eecc97035a64782d7f68637f65e654562a" />
              <input type="hidden" name="actionType" value="TGVhZHM=" />
              <input type="hidden" name="returnURL" value="https://www.dekaelomedia.com/gracias" />
              {/* Marca y Origen */}
              <input type="hidden" name="LEADCF5" value="Dekaelo" />
              <input type="hidden" id="lead_origin" name="LEADCF9" value="dekaelomedia.com/contacto" />
              {/* Honeypot */}
              <input type="text" style={{ display: "none" }} name="aG9uZXlwb3Q" defaultValue="" />

              {/* Nombre / Apellidos */}
              <div className="zcwf_row">
                <div className="zcwf_col_lab"><label htmlFor="First_Name">Nombre</label></div>
                <div className="zcwf_col_fld">
                  <input type="text" id="First_Name" name="First Name" maxLength={40} />
                </div>
              </div>
              <div className="zcwf_row">
                <div className="zcwf_col_lab"><label htmlFor="Last_Name">Apellidos <span style={{color:'red'}}>*</span></label></div>
                <div className="zcwf_col_fld">
                  <input type="text" id="Last_Name" name="Last Name" maxLength={80} required />
                </div>
              </div>

              {/* Empresa / Email */}
              <div className="zcwf_row">
                <div className="zcwf_col_lab"><label htmlFor="Company">Empresa <span style={{color:'red'}}>*</span></label></div>
                <div className="zcwf_col_fld">
                  <input type="text" id="Company" name="Company" maxLength={200} required />
                </div>
              </div>
              <div className="zcwf_row">
                <div className="zcwf_col_lab"><label htmlFor="Email">Correo electrónico</label></div>
                <div className="zcwf_col_fld">
                  <input type="email" id="Email" name="Email" maxLength={100} />
                </div>
              </div>

              {/* Teléfono / Interés */}
              <div className="zcwf_row">
                <div className="zcwf_col_lab"><label htmlFor="Phone">Teléfono</label></div>
                <div className="zcwf_col_fld">
                  <input type="tel" id="Phone" name="Phone" maxLength={30} />
                </div>
              </div>
              <div className="zcwf_row">
                <div className="zcwf_col_lab"><label htmlFor="LEADCF8">Estoy interesado en… <span style={{color:'red'}}>*</span></label></div>
                <div className="zcwf_col_fld">
                  <select id="LEADCF8" name="LEADCF8" required defaultValue="">
                    <option value="" disabled>Escoge una opción</option>
                    <option value="Plan Audiovisual Mensual">Plan Audiovisual Mensual</option>
                    <option value="Video Corporativo / Institucional">Video Corporativo / Institucional</option>
                    <option value="Podcast en Video">Podcast en Video</option>
                    <option value="Documental / Testimonial">Documental / Testimonial</option>
                    <option value="Motion Graphics / Animación">Motion Graphics / Animación</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>

              {/* Presupuesto */}
              <div className="zcwf_row">
                <div className="zcwf_col_lab"><label htmlFor="LEADCF7">Presupuesto estimado</label></div>
                <div className="zcwf_col_fld">
                  <select id="LEADCF7" name="LEADCF7" defaultValue="">
                    <option value="" disabled>Escoge una opción</option>
                    <option value="$500.000 - $1.000.000 CLP">$500.000 – $1.000.000 CLP</option>
                    <option value="$1.000.000 - $2.000.000 CLP">$1.000.000 – $2.000.000 CLP</option>
                    <option value="$2.000.000 - $4.000.000 CLP">$2.000.000 – $4.000.000 CLP</option>
                    <option value="$4.000.000+ CLP">$4.000.000+ CLP</option>
                    <option value="No estoy seguro">No estoy seguro</option>
                  </select>
                </div>
              </div>

              {/* Mensaje */}
              <div className="zcwf_row">
                <div className="zcwf_col_lab"><label htmlFor="LEADCF3">Mensaje</label></div>
                <div className="zcwf_col_fld">
                  <textarea id="LEADCF3" name="LEADCF3" placeholder="Cuéntanos el objetivo, público y ejemplos de referencia." />
                </div>
              </div>

              {/* Privacidad */}
              <label className="flex items-start gap-3 text-sm text-white/70 mt-4">
                <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5" />
                <span>
                  He leído y acepto la {" "}
                  <a href="/privacidad-condiciones" className="underline" target="_blank" rel="noopener noreferrer">
                    Política de Privacidad y Condiciones
                  </a>.
                </span>
              </label>

              {/* reCAPTCHA */}
              <div className="zcwf_row">
                <div className="zcwf_col_lab" />
                <div className="zcwf_col_fld">
                  <div className="g-recaptcha" data-sitekey="6LcB_M4rAAAAAJNy3AGA9wOt5ltN1EL23e8Q49H2" data-theme="dark" id="recap6988454000000608102" />
                  <div id="recapErr6988454000000608102" style={{fontSize:'12px',color:'red',visibility:'hidden'}}>Error en validación de Captcha. Si no es un robot, inténtelo de nuevo.</div>
                </div>
              </div>

              {/* Botones */}
              <div className="zcwf_row">
                <div className="zcwf_col_lab" />
                <div className="zcwf_col_fld flex items-center gap-3">
                  <input type="submit" id="formsubmit" className="formsubmit zcwf_button" value="Enviar" />
                  <input type="reset" className="zcwf_button" name="reset" value="Restablecer" />
                </div>
              </div>

              {/* Zoho validation helpers (ejecutan en cliente) */}
              <Script id="zoho-form-logic" strategy="afterInteractive">
                {`
window.addAriaSelected6988454000000608102 = function(){ var optionElem = event.target; var previousSelectedOption = optionElem.querySelector('[aria-selected=true]'); if(previousSelectedOption){ previousSelectedOption.removeAttribute('aria-selected'); } optionElem.querySelectorAll('option')[ optionElem.selectedIndex ].ariaSelected = 'true'; }
window.rccallback6988454000000608102 = function(){ var n=document.getElementById('recap6988454000000608102'); if(n){ n.setAttribute('captcha-verified', true); } var e=document.getElementById('recapErr6988454000000608102'); if(e && e.style.visibility=='visible'){ e.style.visibility='hidden'; } }
window.reCaptchaAlert6988454000000608102 = function(){ var recap=document.getElementById('recap6988454000000608102'); if(recap && recap.getAttribute('captcha-verified')=='false'){ document.getElementById('recapErr6988454000000608102').style.visibility='visible'; return false;} return true; }
window.validateEmail6988454000000608102 = function(){ var form = document.forms['WebToLeads6988454000000608102']; var emailFld = form.querySelectorAll('[type=email]'); for(var i=0;i<emailFld.length;i++){ var emailVal=emailFld[i].value; if(emailVal.trim().length!=0){ var atpos=emailVal.indexOf('@'); var dotpos=emailVal.lastIndexOf('.'); if(atpos<1 || dotpos<atpos+2 || dotpos+2>=emailVal.length){ alert('Introduzca una dirección de correo electrónico válida.'); emailFld[i].focus(); return false; } } } return true; }
window.checkMandatory6988454000000608102 = function(){ var mnd=['Company','Last Name','LEADCF8']; var names=['Empresa','Apellidos','Estoy interesado en...']; for(var i=0;i<mnd.length;i++){ var f=document.forms['WebToLeads6988454000000608102'][mnd[i]]; if(f){ if((f.value||'').trim().length==0){ alert(names[i]+" no puede estar vacío."); f.focus(); return false; } else if(f.nodeName=='SELECT' && f.options[f.selectedIndex].value==''){ alert(names[i]+" no puede ser nulo."); f.focus(); return false; } else if(f.type=='checkbox' && !f.checked){ alert('Por favor acepta '+names[i]); f.focus(); return false; } if(f.name=='Last Name'){ name=f.value; } } }
 if(!window.validateEmail6988454000000608102()){ return false; }
 if(!window.reCaptchaAlert6988454000000608102()){ return false; }
 document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
 return true;
}
// Setear origen dinámico (LEADCF9)
(function(){ try{ var origen=(location.host+location.pathname).toLowerCase(); var fld=document.getElementById('lead_origin'); if(fld) fld.value=origen; }catch(e){} })();
                `}
              </Script>

              {/* Analytics Zoho */}
              <Script id="wf_anal" src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=083816ee5c73fcd4557e0661ddb8c1be6896fc3905ae543b1e23e564b52a160a911ed05e100ff339e2115859ebc2ee39gid082dad1b8b8b5bd1c0ef11235faa71b6b616f87063880d2cfc02cfa73d26f434gid5b9b75a298966d85cb7b8af84b5233ed1b5e57a503ceb7cbabd382b5b014e057gide67e4fcd9e706adddd3648f77202af06e936aa22580dc2a6a2b636571ad42cf4&tw=a0a95210c62850354d9f99443683792922931151ef45f9b05072591c351d5f79" strategy="afterInteractive" />
            </form>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="mt-10 flex justify-center gap-6 text-white/80">
          <a href="https://www.instagram.com/dekaelo_media" target="_blank" rel="noopener noreferrer">📸 Instagram</a>
          <a href="https://www.linkedin.com/company/dekaelo-media" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
          <a href="https://www.youtube.com/@dekaelo_media" target="_blank" rel="noopener noreferrer">▶️ YouTube</a>
        </div>
      </div>
    </section>
  );
}
