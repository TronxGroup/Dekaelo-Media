// app/components/ZohoLeadForm.tsx
"use client";

import Script from "next/script";

export default function ZohoLeadForm() {
  return (
    <>
      {/* reCAPTCHA v2 */}
      <Script src="https://www.google.com/recaptcha/api.js" async defer />

      {/* Lógica de validación de Zoho */}
      <Script id="zoho-form-logic" strategy="afterInteractive">
        {`
function addAriaSelected6988454000000608102(){var e=event.target,t=e.querySelector("[aria-selected=true]");t&&t.removeAttribute("aria-selected");e.querySelectorAll("option")[e.selectedIndex].ariaSelected="true"}
function rccallback6988454000000608102(){var e=document.getElementById("recap6988454000000608102");e&&e.setAttribute("captcha-verified",true);var t=document.getElementById("recapErr6988454000000608102");t&&"visible"==t.style.visibility&&(t.style.visibility="hidden")}
function reCaptchaAlert6988454000000608102(){var e=document.getElementById("recap6988454000000608102");return!e||"false"!=e.getAttribute("captcha-verified")||(document.getElementById("recapErr6988454000000608102").style.visibility="visible",!1)}
function validateEmail6988454000000608102(){for(var e=document.forms.WebToLeads6988454000000608102.querySelectorAll("[ftype=email]"),t=0;t<e.length;t++){var a=e[t].value;if(0!=a.replace(/^\\s+|\\s+$/g,"").length){var l=a.indexOf("@"),n=a.lastIndexOf(".");if(l<1||n<l+2||n+2>=a.length)return alert("Introduzca una dirección de correo electrónico válida. "),e[t].focus(),!1}}return!0}
function checkMandatory6988454000000608102(){var e=["Company","First Name","Last Name","Email","LEADCF3","LEADCF7","LEADCF8","privacy_accept"],t=["Empresa","Nombre","Apellido","Correo electrónico","Mensaje","Presupuesto estimado","Estoy interesado en...","Política de Privacidad"];for(i=0;i<e.length;i++){var a=document.forms.WebToLeads6988454000000608102[e[i]];if(a){if(0==(a.value||"").replace(/^\\s+|\\s+$/g,"").length){if("file"==a.type)return alert("Seleccione un archivo para cargar."),a.focus(),!1;return alert(t[i]+" no puede estar vacío."),a.focus(),!1}if("SELECT"==a.nodeName&&"-None-"==a.options[a.selectedIndex].value)return alert(t[i]+" no puede ser nulo."),a.focus(),!1;if("checkbox"==a.type&&!a.checked)return alert("Por favor acepta "+t[i]),a.focus(),!1;try{"Last Name"==a.name&&(name=a.value)}catch(e){}}}return!!validateEmail6988454000000608102()&&!!reCaptchaAlert6988454000000608102()&&(document.querySelector(".crmWebToEntityForm .formsubmit").setAttribute("disabled",!0),!0)}
        `}
      </Script>

      {/* Analytics Zoho */}
      <Script
        id="wf_anal"
        src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=b295830aa2a1a8f1c284b92f05d78747860f624b37ae286c2893509d8997ae440c424cad64dd8f369eb6ccc4c2213532gid2af55c2c9479a7a419067023dca38e00f2cd43b654b8472a7c7bf3a6d562f7c2gid6f41fc7f85d05c7d267d74c89cba9a1b7676c357121d6d2beeb5bcc95d727633gidf88b25e08459c256378a2a64cec75b5ba4a2b762afd555261181f8f0db19c5ce&tw=d368705fa9c87f6bc83134ae05165c3fe1197ff27ff04110b111e28b042029b6"
        strategy="afterInteractive"
      />

      {/* Mismo embed de Zoho, pero con fondo TRANSPARENTE y texto claro */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
<div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm' style='background-color: transparent; color: white; max-width: 600px;'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <META HTTP-EQUIV='content-type' CONTENT='text/html;charset=UTF-8'>

  <form id='webform6988454000000608102' action='https://crm.zoho.com/crm/WebToLeadForm' name='WebToLeads6988454000000608102' method='POST' onSubmit='javascript:document.charset="UTF-8"; return checkMandatory6988454000000608102()' accept-charset='UTF-8'>

    <input type='text' style='display:none;' name='xnQsjsdp' value='a4bba379f247a869243ae3a1f14aada5f117d913b23f09023ce587060a26c7f1'>
    <input type='hidden' name='zc_gad' id='zc_gad' value=''>
    <input type='text' style='display:none;' name='xmIwtLD' value='9f7679baaf5a209d4bc98662604fea8ca9fde298a48e90fd69fa74da4fc0c1f825c005d432b678662b814d8a4a7b4228'>
    <input type='text' style='display:none;' name='actionType' value='TGVhZHM='>
    <input type='text' style='display:none;' name='returnURL' value='https&#x3a;&#x2f;&#x2f;www.dekaelomedia.com&#x2f;gracias'>

    <style>
      html,body{ margin: 0px; }
      .formsubmit.zcwf_button{ color: white !important; background: transparent linear-gradient(0deg, #0279FF 0%, #00A3F3 100%); }
      #crmWebToEntityForm.zcwf_lblLeft{ width: 100%; padding: 25px; margin: 0 auto; box-sizing: border-box; }
      #crmWebToEntityForm.zcwf_lblLeft *{ box-sizing: border-box; }
      #crmWebToEntityForm { text-align: left; }
      #crmWebToEntityForm *{ direction: ltr; color: inherit; }
      .zcwf_lblLeft .zcwf_title{ word-wrap: break-word; padding: 0px 6px 10px; font-weight: bold }
      .zcwf_lblLeft.cpT_primaryBtn:hover{ background: linear-gradient(#02acff 0,#006be4 100%)no-repeat padding-box !important; box-shadow: 0 -2px 0 0 #0159b9 inset !important; border: 0 !important; color: #fff !important; outline: 0 !important; }

      /* Mantener layout original, pero adaptado a tema oscuro */
      .zcwf_lblLeft .zcwf_col_fld input[type=text],
      .zcwf_lblLeft .zcwf_col_fld input[type=password],
      .zcwf_lblLeft .zcwf_col_fld textarea,
      .zcwf_lblLeft .zcwf_col_fld_slt{
        width: 60%;
        border: 1px solid rgba(255,255,255,0.2) !important;
        background: rgba(255,255,255,0.06);
        color: white;
        resize: vertical; border-radius: 8px; float: left; padding: 8px 10px;
      }
      .zcwf_lblLeft .zcwf_col_lab{ width: 30%; word-break: break-word; padding: 0px 6px 0px; margin-right: 10px; margin-top: 5px; float: left; min-height: 1px; color: rgba(255,255,255,0.9); }
      .zcwf_lblLeft .zcwf_col_fld{ float: left; width: 68%; padding: 0px 6px 0px; position: relative; margin-top: 5px; }
      .zcwf_lblLeft .zcwf_privacy {padding: 6px; }
      .zcwf_lblLeft .wfrm_fld_dpNn {display: none; }
      .dIB {display: inline-block; }
      .zcwf_lblLeft .zcwf_row:after, .zcwf_lblLeft .zcwf_col_fld:after{ content: ''; display: table; clear: both; }
      .zcwf_lblLeft .zcwf_col_help{ float: left; margin-left: 7px; font-size: 12px; max-width: 35%; word-break: break-word; color: rgba(255,255,255,0.75); }
      .zcwf_lblLeft .zcwf_help_icon{ cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #111; border: 1px solid rgba(255,255,255,0.25); color: #c1c1c1; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%; }
      .zcwf_lblLeft .zcwf_row {margin: 15px 0px; }
      .zcwf_lblLeft .formsubmit{ margin-right: 5px; cursor: pointer; color: #0b0b0b; font-size: 12px; }
      .zcwf_lblLeft .zcwf_privacy_txt{ width: 90%; font-size: 12px; font-family: Arial; display: inline-block; vertical-align: top; color: rgba(255,255,255,0.85); padding-top: 2px; margin-left: 6px; }
      .zcwf_lblLeft .zcwf_button{ font-size: 12px; color: #313949; border: 1px solid rgba(255,255,255,0.25); padding: 3px 9px; border-radius: 6px; cursor: pointer; max-width: 120px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      @media all and (max-width: 600px){
        .zcwf_lblLeft .zcwf_col_lab, .zcwf_lblLeft .zcwf_col_fld{ width: auto; float: none !important; }
        .zcwf_lblLeft .zcwf_col_help {width: 40%; }
        .zcwf_lblLeft .zcwf_col_fld input[type=text],
        .zcwf_lblLeft .zcwf_col_fld input[type=password],
        .zcwf_lblLeft .zcwf_col_fld textarea,
        .zcwf_lblLeft .zcwf_col_fld_slt{ width: 100%; }
      }
    </style>

    <!-- Campos -->
    <div class='zcwf_row'>
      <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>
        <label for='First_Name'>Nombre <span style='color:#ff6b6b;'>*</span></label>
      </div>
      <div class='zcwf_col_fld'>
        <input type='text' id='First_Name' aria-required='true' aria-label='First Name' name='First Name' aria-valuemax='40' maxlength='40'>
        <div class='zcwf_col_help'></div>
      </div>
    </div>

    <div class='zcwf_row'>
      <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>
        <label for='Last_Name'>Apellido <span style='color:#ff6b6b;'>*</span></label>
      </div>
      <div class='zcwf_col_fld'>
        <input type='text' id='Last_Name' aria-required='true' aria-label='Last Name' name='Last Name' aria-valuemax='80' maxlength='80'>
        <div class='zcwf_col_help'></div>
      </div>
    </div>

    <div class='zcwf_row'>
      <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>
        <label for='Company'>Empresa <span style='color:#ff6b6b;'>*</span></label>
      </div>
      <div class='zcwf_col_fld'>
        <input type='text' id='Company' aria-required='true' aria-label='Company' name='Company' aria-valuemax='200' maxlength='200'>
        <div class='zcwf_col_help'></div>
      </div>
    </div>

    <div class='zcwf_row'>
      <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>
        <label for='Email'>Correo electrónico <span style='color:#ff6b6b;'>*</span></label>
      </div>
      <div class='zcwf_col_fld'>
        <input type='text' ftype='email' autocomplete='false' id='Email' aria-required='true' aria-label='Email' name='Email' aria-valuemax='100' crmlabel='' maxlength='100'>
        <div class='zcwf_col_help'></div>
      </div>
    </div>

    <div class='zcwf_row'>
      <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>
        <label for='Phone'>Teléfono</label>
      </div>
      <div class='zcwf_col_fld'>
        <input type='text' id='Phone' aria-required='false' aria-label='Phone' name='Phone' aria-valuemax='30' maxlength='30'>
        <div class='zcwf_col_help'></div>
      </div>
    </div>

    <div class='zcwf_row'>
      <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>
        <label for='LEADCF8'>Estoy interesado en... <span style='color:#ff6b6b;'>*</span></label>
      </div>
      <div class='zcwf_col_fld'>
        <select class='zcwf_col_fld_slt' role='combobox' aria-expanded='false' aria-haspopup='listbox' id='LEADCF8' onChange='addAriaSelected6988454000000608102()' aria-required='true' aria-label='LEADCF8' name='LEADCF8'>
          <option value='-None-'>-None-</option>
          <option selected value='Escoge&#x20;una&#x20;opci&oacute;n'>Escoge una opción</option>
          <option value='Plan&#x20;Audiovisual&#x20;Mensual'>Plan Audiovisual Mensual</option>
          <option value='Video&#x20;Corporativo&#x20;&#x2f;&#x20;Institucional'>Video Corporativo / Institucional</option>
          <option value='Podcast&#x20;en&#x20;Video'>Podcast en Video</option>
          <option value='Documental&#x20;&#x2f;&#x20;Testimonial'>Documental / Testimonial</option>
          <option value='Motion&#x20;Graphics&#x20;&#x2f;&#x20;Animaci&oacute;n'>Motion Graphics / Animación</option>
          <option value='Otro'>Otro</option>
        </select>
        <div class='zcwf_col_help'></div>
      </div>
    </div>

    <div class='zcwf_row'>
      <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>
        <label for='LEADCF7'>Presupuesto estimado <span style='color:#ff6b6b;'>*</span></label>
      </div>
      <div class='zcwf_col_fld'>
        <select class='zcwf_col_fld_slt' role='combobox' aria-expanded='false' aria-haspopup='listbox' id='LEADCF7' onChange='addAriaSelected6988454000000608102()' aria-required='true' aria-label='LEADCF7' name='LEADCF7'>
          <option value='-None-'>-None-</option>
          <option selected value='Escoge&#x20;una&#x20;opci&oacute;n'>Escoge una opción</option>
          <option value='&#x24;500.000&#x20;-&#x20;&#x24;1.000.000&#x20;CLP'>&#x24;500.000 – &#x24;1.000.000 CLP</option>
          <option value='&#x24;1.000.000&#x20;-&#x20;&#x24;2.000.000&#x20;CLP'>&#x24;1.000.000 – &#x24;2.000.000 CLP</option>
          <option value='&#x24;2.000.000&#x20;-&#x20;&#x24;4.000.000&#x20;CLP'>&#x24;2.000.000 – &#x24;4.000.000 CLP</option>
          <option value='&#x24;4.000.000&#x2b;&#x20;CLP'>&#x24;4.000.000+ CLP</option>
          <option value='No&#x20;estoy&#x20;seguro'>No estoy seguro</option>
        </select>
        <div class='zcwf_col_help'></div>
      </div>
    </div>

    <div class='zcwf_row'>
      <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>
        <label for='LEADCF3'>Mensaje <span style='color:#ff6b6b;'>*</span></label>
      </div>
      <div class='zcwf_col_fld'>
        <textarea style='font-family: Arial, sans-serif;' aria-multiline='true' id='LEADCF3' aria-required='true' aria-label='LEADCF3' name='LEADCF3'></textarea>
        <div class='zcwf_col_help'></div>
      </div>
    </div>

    <!-- Checkbox de Privacidad (requerido) -->
    <div class='zcwf_row'>
      <div class='zcwf_col_lab'></div>
      <div class='zcwf_col_fld'>
        <label class='zcwf_privacy_txt' style='display:flex; gap:10px; align-items:flex-start'>
          <input type='checkbox' id='privacy_accept' name='privacy_accept' required style='margin-top:3px'>
          <span>He leído y acepto la
            <a href='/privacidad-condiciones' target='_blank' rel='noopener noreferrer' style='color:#93c5fd; text-decoration:underline; margin-left:4px;'>Política de Privacidad y Condiciones</a>.
          </span>
        </label>
      </div>
    </div>

    <div class='zcwf_row'>
      <div class='zcwf_col_lab'></div>
      <div class='zcwf_col_fld'>
        <div class='g-recaptcha' data-sitekey='6LcB_M4rAAAAAJNy3AGA9wOt5ltN1EL23e8Q49H2' data-theme='dark' data-callback='rccallback6988454000000608102' captcha-verified='false' id='recap6988454000000608102'></div>
        <div id='recapErr6988454000000608102' style='font-size:12px;color:#ff6b6b;visibility:hidden;'>Error en validación de Captcha. Si no es un robot, inténtelo de nuevo.</div>
      </div>
    </div>

    <div class='zcwf_row wfrm_fld_dpNn'>
      <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'><label for='LEADCF5'>Marca</label></div>
      <div class='zcwf_col_fld'>
        <select class='zcwf_col_fld_slt' id='LEADCF5' name='LEADCF5'>
          <option value='-None-'>-None-</option>
          <option value='Tronx-Group'>Tronx-Group</option>
          <option selected value='Dekaelo'>Dekaelo</option>
          <option value='Tronx-TV'>Tronx-TV</option>
          <option value='Tonx-Strategy'>Tonx-Strategy</option>
          <option value='Echevensko'>Echevensko</option>
          <option value='APCC'>APCC</option>
          <option value='HKLABA'>HKLABA</option>
        </select>
        <div class='zcwf_col_help'></div>
      </div>
    </div>

    <div class='zcwf_row wfrm_fld_dpNn'>
      <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'><label for='LEADCF9'>Lead_Origen</label></div>
      <div class='zcwf_col_fld'>
        <select class='zcwf_col_fld_slt' id='LEADCF9' name='LEADCF9'>
          <option value='-None-'>-None-</option>
          <option value='plan.dekaelomedia.com'>plan.dekaelomedia.com</option>
          <option value='tronxgroup.com/Contacto'>tronxgroup.com/Contacto</option>
          <option value='tronxstrategic.com/contacto'>tronxstrategic.com/contacto</option>
          <option selected value='dekaelomedia.com/contacto'>dekaelomedia.com/contacto</option>
          <option value='empresas.echevensko.com'>empresas.echevensko.com</option>
          <option value='apccskills.asiapacific-chamber.com'>apccskills.asiapacific-chamber.com</option>
          <option value='asiapacific-chamber.com/contacto'>asiapacific-chamber.com/contacto</option>
          <option value='hklaba.com/contacto'>hklaba.com/contacto</option>
        </select>
        <div class='zcwf_col_help'></div>
      </div>
    </div>

    <input type='text' type='hidden' style='display: none;' name='aG9uZXlwb3Q' value=''/>
    <div class='zcwf_row'>
      <div class='zcwf_col_lab'></div>
      <div class='zcwf_col_fld'>
        <input type='submit' id='formsubmit' role='button' class='formsubmit zcwf_button' value='Enviar' aria-label='Enviar' title='Enviar'>
        <input type='reset' class='zcwf_button' role='button' name='reset' value='Restablecer' aria-label='Restablecer' title='Restablecer'>
      </div>
    </div>

  </form>
</div>
          `,
        }}
      />
    </>
  );
}
