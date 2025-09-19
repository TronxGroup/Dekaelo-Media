// app/components/ZohoLeadForm.tsx
"use client";

import Script from "next/script";

export default function ZohoLeadForm() {
  return (
    <>
      <Script src="https://www.google.com/recaptcha/api.js" async defer />
      <Script id="zoho-form-logic" strategy="afterInteractive">
        {`
          // === funciones zoho ===
          function addAriaSelected6988454000000608102(){var e=event.target,t=e.querySelector("[aria-selected=true]");t&&t.removeAttribute("aria-selected");e.querySelectorAll("option")[e.selectedIndex].ariaSelected="true"}
          function rccallback6988454000000608102(){var e=document.getElementById("recap6988454000000608102");e&&e.setAttribute("captcha-verified",true);var t=document.getElementById("recapErr6988454000000608102");t&&"visible"==t.style.visibility&&(t.style.visibility="hidden")}
          function reCaptchaAlert6988454000000608102(){var e=document.getElementById("recap6988454000000608102");return!e||"false"!=e.getAttribute("captcha-verified")||(document.getElementById("recapErr6988454000000608102").style.visibility="visible",!1)}
          function validateEmail6988454000000608102(){for(var e=document.forms.WebToLeads6988454000000608102.querySelectorAll("[ftype=email]"),t=0;t<e.length;t++){var a=e[t].value;if(0!=a.replace(/^\\s+|\\s+$/g,"").length){var l=a.indexOf("@"),n=a.lastIndexOf(".");if(l<1||n<l+2||n+2>=a.length)return alert("Introduzca una dirección de correo electrónico válida. "),e[t].focus(),!1}}return!0}
          function checkMandatory6988454000000608102(){var e=["Company","First Name","Last Name","Email","LEADCF3","LEADCF7","LEADCF8","privacy_accept"],t=["Empresa","Nombre","Apellido","Correo electrónico","Mensaje","Presupuesto estimado","Estoy interesado en...","Política de Privacidad"];for(i=0;i<e.length;i++){var a=document.forms.WebToLeads6988454000000608102[e[i]];if(a){if(0==(a.value||"").replace(/^\\s+|\\s+$/g,"").length)return alert(t[i]+" no puede estar vacío."),a.focus(),!1;if("SELECT"==a.nodeName&&"-None-"==a.options[a.selectedIndex].value)return alert(t[i]+" no puede ser nulo."),a.focus(),!1;if("checkbox"==a.type&&!a.checked)return alert("Por favor acepta "+t[i]),a.focus(),!1}}return!!validateEmail6988454000000608102()&&!!reCaptchaAlert6988454000000608102()&&(document.querySelector(".crmWebToEntityForm .formsubmit").setAttribute("disabled",!0),!0)}
        `}
      </Script>

      <div
        dangerouslySetInnerHTML={{
          __html: `
<div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm' style='background: transparent; color: white; max-width: 800px; font-size: 15px;'>
  <form id='webform6988454000000608102' action='https://crm.zoho.com/crm/WebToLeadForm' name='WebToLeads6988454000000608102' method='POST' onSubmit='javascript:document.charset="UTF-8"; return checkMandatory6988454000000608102()' accept-charset='UTF-8'>

    <!-- tokens -->
    <input type='hidden' name='xnQsjsdp' value='a4bba379f247a869243ae3a1f14aada5f117d913b23f09023ce587060a26c7f1'>
    <input type='hidden' name='xmIwtLD' value='9f7679baaf5a209d4bc98662604fea8ca9fde298a48e90fd69fa74da4fc0c1f825c005d432b678662b814d8a4a7b4228'>
    <input type='hidden' name='actionType' value='TGVhZHM='>
    <input type='hidden' name='returnURL' value='https://www.dekaelomedia.com/gracias'>

    <style>
      .zcwf_lblLeft .zcwf_row{display:flex;flex-wrap:wrap;gap:15px;margin:12px 0;}
      .zcwf_lblLeft .zcwf_col_lab{flex:1 1 40%;color:#e5e5e5;font-size:14px;align-self:center;}
      .zcwf_lblLeft .zcwf_col_fld{flex:1 1 55%;}
      .zcwf_lblLeft input[type=text],
      .zcwf_lblLeft textarea,
      .zcwf_lblLeft select{
        width:100%;
        border:1px solid rgba(255,255,255,0.2);
        background:rgba(255,255,255,0.05);
        color:white;
        padding:10px;
        border-radius:8px;
        font-size:14px;
      }
      .zcwf_lblLeft textarea{min-height:120px;}
      .zcwf_lblLeft .formsubmit.zcwf_button{
        background:linear-gradient(90deg,#0279FF,#00A3F3);
        color:white !important;
        border:0;
        padding:10px 20px;
        border-radius:6px;
        font-size:14px;
        cursor:pointer;
      }
      .zcwf_privacy_txt{font-size:13px;color:#ccc;}
      @media(max-width:640px){.zcwf_lblLeft .zcwf_col_lab,.zcwf_lblLeft .zcwf_col_fld{flex:1 1 100%;}}
    </style>

    <!-- Campos principales -->
    <div class='zcwf_row'>
      <div class='zcwf_col_lab'><label for='First_Name'>Nombre *</label></div>
      <div class='zcwf_col_fld'><input type='text' id='First_Name' name='First Name' required></div>
    </div>

    <div class='zcwf_row'>
      <div class='zcwf_col_lab'><label for='Last_Name'>Apellido *</label></div>
      <div class='zcwf_col_fld'><input type='text' id='Last_Name' name='Last Name' required></div>
    </div>

    <div class='zcwf_row'>
      <div class='zcwf_col_lab'><label for='Company'>Empresa *</label></div>
      <div class='zcwf_col_fld'><input type='text' id='Company' name='Company' required></div>
    </div>

    <div class='zcwf_row'>
      <div class='zcwf_col_lab'><label for='Email'>Correo electrónico *</label></div>
      <div class='zcwf_col_fld'><input type='email' id='Email' name='Email' required></div>
    </div>

    <div class='zcwf_row'>
      <div class='zcwf_col_lab'><label for='Phone'>Teléfono</label></div>
      <div class='zcwf_col_fld'><input type='text' id='Phone' name='Phone'></div>
    </div>

    <div class='zcwf_row'>
      <div class='zcwf_col_lab'><label for='LEADCF8'>Estoy interesado en... *</label></div>
      <div class='zcwf_col_fld'>
        <select id='LEADCF8' name='LEADCF8' required>
          <option value=''>Escoge una opción</option>
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
      <div class='zcwf_col_lab'><label for='LEADCF7'>Presupuesto estimado *</label></div>
      <div class='zcwf_col_fld'>
        <select id='LEADCF7' name='LEADCF7' required>
          <option value=''>Escoge una opción</option>
          <option value='$500.000 - $1.000.000 CLP'>$500.000 – $1.000.000 CLP</option>
          <option value='$1.000.000 - $2.000.000 CLP'>$1.000.000 – $2.000.000 CLP</option>
          <option value='$2.000.000 - $4.000.000 CLP'>$2.000.000 – $4.000.000 CLP</option>
          <option value='$4.000.000+ CLP'>$4.000.000+ CLP</option>
          <option value='No estoy seguro'>No estoy seguro</option>
        </select>
      </div>
    </div>

    <div class='zcwf_row'>
      <div class='zcwf_col_lab'><label for='LEADCF3'>Mensaje *</label></div>
      <div class='zcwf_col_fld'><textarea id='LEADCF3' name='LEADCF3' required></textarea></div>
    </div>

    <!-- Checkbox privacidad -->
    <div class='zcwf_row'>
      <div class='zcwf_col_lab'></div>
      <div class='zcwf_col_fld'>
        <label class='zcwf_privacy_txt'>
          <input type='checkbox' id='privacy_accept' name='privacy_accept' required>
          He leído y acepto la <a href='/privacidad-condiciones' target='_blank' style='color:#60a5fa;'>Política de Privacidad y Condiciones</a>.
        </label>
      </div>
    </div>

    <!-- reCAPTCHA -->
    <div class='zcwf_row'>
      <div class='zcwf_col_lab'></div>
      <div class='zcwf_col_fld'>
        <div class='g-recaptcha' data-sitekey='6LcB_M4rAAAAAJNy3AGA9wOt5ltN1EL23e8Q49H2' data-theme='dark' data-callback='rccallback6988454000000608102' id='recap6988454000000608102'></div>
        <div id='recapErr6988454000000608102' style='font-size:13px;color:#ff6b6b;visibility:hidden;'>Error en validación de Captcha.</div>
      </div>
    </div>

    <div class='zcwf_row'>
      <div class='zcwf_col_lab'></div>
      <div class='zcwf_col_fld'>
        <input type='submit' class='formsubmit zcwf_button' value='Enviar'>
        <input type='reset' class='zcwf_button' value='Restablecer'>
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
