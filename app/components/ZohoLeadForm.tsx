// app/components/ZohoLeadForm.tsx
"use client";

import Script from "next/script";

export default function ZohoLeadForm() {
  return (
    <>
      {/* Validación + FIX: devuelve true para permitir submit */}
      <Script id="zoho-form-logic" strategy="afterInteractive">
        {`
          function validateEmail6988454000000608102(){
            var form = document.forms['WebToLeads6988454000000608102'];
            if (!form) return true;

            var emailFld = form.querySelectorAll('[ftype=email]');
            for (var i = 0; i < emailFld.length; i++) {
              var emailVal = emailFld[i].value || '';
              if ((emailVal.replace(/^\\s+|\\s+$/g,'')).length != 0) {
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
            if (!form) return true;

            // ✅ Minimal obligatorio: Empresa, Nombre, Email, Interés
            var mndFileds = new Array('Company', 'First Name', 'Email', 'LEADCF8');
            var fldLangVal = new Array('Empresa', 'Nombre', 'Correo electrónico', 'Estoy interesado en...');

            for (var i = 0; i < mndFileds.length; i++ ){
              var fieldObj = form[mndFileds[i]];
              if (fieldObj) {
                if (((fieldObj.value || '').replace(/^\\s+|\\s+$/g,'')).length == 0) {
                  alert(fldLangVal[i] + ' no puede estar vacío.');
                  fieldObj.focus();
                  return false;
                } else if (fieldObj.nodeName == 'SELECT') {
                  if (fieldObj.options[fieldObj.selectedIndex].value == '-None-') {
                    alert(fldLangVal[i] + ' no puede ser nulo.');
                    fieldObj.focus();
                    return false;
                  }
                }
              }
            }

            // Email válido
            if (!validateEmail6988454000000608102()){
              return false;
            }

            // Mantener parámetro smarturl si aplica
            var urlparams = new URLSearchParams(window.location.search);
            if (urlparams.has('service') && (urlparams.get('service') === 'smarturl')) {
              var webform = document.getElementById('webform6988454000000608102');
              if (webform) {
                var service = urlparams.get('service');
                var smarturlfield = document.createElement('input');
                smarturlfield.setAttribute('type', 'hidden');
                smarturlfield.setAttribute('value', service);
                smarturlfield.setAttribute('name', 'service');
                webform.appendChild(smarturlfield);
              }
            }

            // Deshabilitar botón para evitar doble envío
            var btn = document.querySelector('.crmWebToEntityForm .formsubmit');
            if (btn) btn.setAttribute('disabled', 'true');

            // ✅ CRÍTICO: permitir submit
            return true;
          }
        `}
      </Script>

      {/* Analytics Zoho (puedes dejarlo o quitarlo) */}
      <Script
        id="zoho-analytics"
        src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=f738b1083a42bb7645f44bf90b466e2f84f3da3089fb008bf9211cb096a5db76f0499c94e623402d1d10b4efe759835fgidde426dbf3cb0125aace78127281d09643518aa808b5294282cf76847cff1100dgid1478aea27212a3475e4594b1bfe3815fdc68c9e0a80da8358dc68af9da9eb218gid19951d35bc935b174d6dc9e09086e7c9c983dfae728f8d7867350352d7052e2a&tw=435be2395c0f878fdc2952b19efa3e8c2a5d36c544a5c622e0a53d29cc306a3c"
        strategy="afterInteractive"
      />

      {/* Form Zoho (simple) */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
<div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm' style='background: transparent; color: white; max-width: 700px; font-size: 14px;'>
  <form id='webform6988454000000608102'
        action='https://crm.zoho.com/crm/WebToLeadForm'
        name='WebToLeads6988454000000608102'
        method='POST'
        accept-charset='UTF-8'
        onSubmit='javascript:document.charset="UTF-8"; return checkMandatory6988454000000608102()'>

    <!-- tokens -->
    <input type='text' style='display:none;' name='xnQsjsdp' value='5bb7b0a1e5ad2fab6a98e314d47b987403b938448c1d0dff59c7e7027ab361f3'>
    <input type='hidden' name='zc_gad' id='zc_gad' value=''>
    <input type='text' style='display:none;' name='xmIwtLD' value='2f6e972015fa2fd7ece8a670994b5b2c3db3ee5c674d19c077ee3efad102030890c7cf62318fc335a40f125ac92167e5'>
    <input type='text' style='display:none;' name='actionType' value='TGVhZHM='>
    <input type='text' style='display:none;' name='returnURL' value='https://www.dekaelomedia.com/gracias'>

    <style>
      .zcwf_lblLeft .zcwf_row{margin:14px 0; display:flex; flex-wrap:wrap;}
      .zcwf_lblLeft .zcwf_col_lab{width:35%; min-width:130px; font-size:13px; font-family:Arial; padding:0 6px 0 0; margin-top:5px; color:#e5e5e5;}
      .zcwf_lblLeft .zcwf_col_fld{flex:1; padding:0 6px; margin-top:5px;}
      .zcwf_lblLeft input[type=text],
      .zcwf_lblLeft textarea,
      .zcwf_lblLeft select{
        width:100%;
        border:1px solid rgba(255,255,255,0.25) !important;
        background:rgba(0,0,0,0.4);
        color:#f9fafb;
        padding:10px 12px;
        border-radius:10px;
        font-size:14px;
      }
      .zcwf_lblLeft textarea{min-height:110px; resize:vertical;}
      .zcwf_lblLeft .formsubmit.zcwf_button{
        background:linear-gradient(90deg,#0279FF,#00A3F3);
        color:#fff !important;
        border:0;
        padding:10px 18px;
        border-radius:999px;
        font-size:14px;
        cursor:pointer;
        margin-right:10px;
      }
      .zcwf_lblLeft .zcwf_button{
        background:transparent;
        color:#9ca3af;
        border:1px solid rgba(255,255,255,0.2);
        padding:10px 16px;
        border-radius:999px;
        font-size:14px;
        cursor:pointer;
      }
      .help{
        font-size:12px;
        color:#cbd5e1;
        font-family:Arial;
        padding:0 6px;
        margin-top:8px;
      }
      @media (max-width:640px){
        .zcwf_lblLeft .zcwf_col_lab,
        .zcwf_lblLeft .zcwf_col_fld{width:100%;}
      }
    </style>

    <!-- Campos mínimos -->
    <div class='zcwf_row'>
      <div class='zcwf_col_lab'><label for='First_Name'>Nombre <span style='color:#f87171;'>*</span></label></div>
      <div class='zcwf_col_fld'>
        <input type='text' id='First_Name' name='First Name' maxlength='40' aria-required='true' placeholder='Tu nombre'>
      </div>
    </div>

    <div class='zcwf_row'>
      <div class='zcwf_col_lab'><label for='Company'>Empresa <span style='color:#f87171;'>*</span></label></div>
      <div class='zcwf_col_fld'>
        <input type='text' id='Company' name='Company' maxlength='200' aria-required='true' placeholder='Empresa / organización'>
      </div>
    </div>

    <div class='zcwf_row'>
      <div class='zcwf_col_lab'><label for='Email'>Correo <span style='color:#f87171;'>*</span></label></div>
      <div class='zcwf_col_fld'>
        <input type='text' id='Email' name='Email' ftype='email' maxlength='100' aria-required='true' placeholder='tu@empresa.com'>
      </div>
    </div>

    <div class='zcwf_row'>
      <div class='zcwf_col_lab'><label for='LEADCF8'>Qué necesitas <span style='color:#f87171;'>*</span></label></div>
      <div class='zcwf_col_fld'>
        <select id='LEADCF8' name='LEADCF8' aria-required='true'>
          <option value='-None-' selected>- Selecciona -</option>
          <option value='Video Corporativo / Institucional'>Video corporativo / institucional</option>
          <option value='Plan Audiovisual Mensual'>Plan mensual audiovisual</option>
          <option value='Podcast en Video'>Vodcast / podcast en video</option>
          <option value='Cobertura de Evento / Aftermovie'>Cobertura de evento / aftermovie</option>
          <option value='Motion Graphics / Animación'>Motion graphics / animación</option>
          <option value='Otro'>Otro</option>
        </select>
      </div>
    </div>

    <!-- Opcionales (sin fricción) -->
    <div class='zcwf_row'>
      <div class='zcwf_col_lab'><label for='LEADCF7'>Presupuesto (opcional)</label></div>
      <div class='zcwf_col_fld'>
        <select id='LEADCF7' name='LEADCF7'>
          <option value='-None-' selected>- No estoy seguro -</option>
          <option value='$500.000 - $1.000.000 CLP'>$500.000 – $1.000.000 CLP</option>
          <option value='$1.000.000 - $2.000.000 CLP'>$1.000.000 – $2.000.000 CLP</option>
          <option value='$2.000.000 - $4.000.000 CLP'>$2.000.000 – $4.000.000 CLP</option>
          <option value='$4.000.000+ CLP'>$4.000.000+ CLP</option>
          <option value='No estoy seguro'>No estoy seguro</option>
        </select>
      </div>
    </div>

    <div class='zcwf_row'>
      <div class='zcwf_col_lab'><label for='LEADCF3'>Brief (opcional)</label></div>
      <div class='zcwf_col_fld'>
        <textarea id='LEADCF3' name='LEADCF3' placeholder='Objetivo, fecha/ciudad, plataformas y links (si tienes).'></textarea>
      </div>
    </div>

    <!-- Campos ocultos -->
    <div class='zcwf_row wfrm_fld_dpNn' style='display:none;'>
      <div class='zcwf_col_lab'><label for='LEADCF5'>Marca</label></div>
      <div class='zcwf_col_fld'>
        <select id='LEADCF5' name='LEADCF5'>
          <option value='-None-'>-None-</option>
          <option selected value='Dekaelo'>Dekaelo</option>
          <option value='Tronx-Group'>Tronx-Group</option>
          <option value='Tronx-TV'>Tronx-TV</option>
          <option value='Tonx-Strategy'>Tonx-Strategy</option>
          <option value='Echevensko'>Echevensko</option>
          <option value='APCC'>APCC</option>
          <option value='HKLABA'>HKLABA</option>
          <option value='SANRAVAL'>SANRAVAL</option>
        </select>
      </div>
    </div>

    <div class='zcwf_row wfrm_fld_dpNn' style='display:none;'>
      <div class='zcwf_col_lab'><label for='LEADCF9'>Lead_Origen</label></div>
      <div class='zcwf_col_fld'>
        <select id='LEADCF9' name='LEADCF9'>
          <option value='-None-'>-None-</option>
          <option selected value='dekaelomedia.com/contacto'>dekaelomedia.com/contacto</option>
        </select>
      </div>
    </div>

    <input type='text' style='display:none;' name='aG9uZXlwb3Q' value='' />

    <div class='zcwf_row'>
      <div class='zcwf_col_lab'></div>
      <div class='zcwf_col_fld'>
        <input type='submit' id='formsubmit' class='formsubmit zcwf_button' value='Recibir propuesta'>
        <input type='reset' class='zcwf_button' name='reset' value='Limpiar'>
        <div class='help'>No llamamos. Respondemos por mail o WhatsApp en 24–48h hábiles.</div>
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
