// app/contacto/page.tsx
export const metadata = {
  title: 'Contacto | Dekaelo Media',
  description: 'Agenda una llamada o cuéntanos sobre tu proyecto.',
};

export default function Page() {
  // 🔒 Pega aquí el HTML crudo que te da Zoho
  const ZOHO_HTML = `
<div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm' style='background-color: white;color: black;max-width: 600px;'>
<meta name='viewport' content='width=device-width, initial-scale=1.0'>
<META HTTP-EQUIV='content-type' CONTENT='text/html;charset=UTF-8'>
<form id='webform6988454000000608102' action='https://crm.zoho.com/crm/WebToLeadForm' name='WebToLeads6988454000000608102' method='POST' onSubmit='javascript:document.charset="UTF-8"; return checkMandatory6988454000000608102()' accept-charset='UTF-8'>
  <input type='text' style='display:none;' name='xnQsjsdp' value='ce62e73bed20037db6ee6838f49416e499734aff217562fa76a422e065326b90'>
  <input type='hidden' name='zc_gad' id='zc_gad' value=''>
  <input type='text' style='display:none;' name='xmIwtLD' value='db58bb9a738ed6cfe67bbaf363abb7342f2c174b973a23c8e85cdb2e07fc82d790fea1e3b812fad58176ae891950a449'>
  <input type='text' style='display:none;' name='actionType' value='TGVhZHM='>
  <input type='text' style='display:none;' name='returnURL' value='https&#x3a;&#x2f;&#x2f;www.dekaelomedia.com&#x2f;gracias'>
  <!-- Do not remove this code. -->
  <style>
    html,body{ margin: 0px; }
    .formsubmit.zcwf_button{ color: white !important; background: transparent linear-gradient(0deg, #0279FF 0%, #00A3F3 100%); }
    #crmWebToEntityForm.zcwf_lblLeft{ width: 100%; padding: 25px; margin: 0 auto; box-sizing: border-box; }
    #crmWebToEntityForm.zcwf_lblLeft *{ box-sizing: border-box; }
    #crmWebToEntityForm {text-align: left; }
    #crmWebToEntityForm *{ direction: ltr; }
    .zcwf_lblLeft .zcwf_title{ word-wrap: break-word; padding: 0px 6px 10px; font-weight: bold }
    .zcwf_lblLeft.cpT_primaryBtn:hover{ background: linear-gradient(#02acff 0,#006be4 100%)no-repeat padding-box !important; box-shadow: 0 -2px 0 0 #0159b9 inset !important; border: 0 !important; color: #fff !important; outline: 0 !important; }
    .zcwf_lblLeft .zcwf_col_fld input[type=text], input[type=password], .zcwf_lblLeft .zcwf_col_fld textarea{ width: 60%; border: 1px solid #c0c6cc !important; resize: vertical; border-radius: 2px; float: left; }
    .zcwf_lblLeft .zcwf_col_lab{ width: 30%; word-break: break-word; padding: 0px 6px 0px; margin-right: 10px; margin-top: 5px; float: left; min-height: 1px; }
    .zcwf_lblLeft .zcwf_col_fld{ float: left; width: 68%; padding: 0px 6px 0px; position: relative; margin-top: 5px; }
    .zcwf_lblLeft .zcwf_privacy {padding: 6px; }
    .zcwf_lblLeft .wfrm_fld_dpNn {display: none; }
    .dIB {display: inline-block; }
    .zcwf_lblLeft .zcwf_col_fld_slt{ width: 60%; border: 1px solid #ccc; background: #fff; border-radius: 4px; font-size: 12px; float: left; resize: vertical; padding: 2px 5px; }
    .zcwf_lblLeft .zcwf_row:after, .zcwf_lblLeft .zcwf_col_fld:after{ content: ''; display: table; clear: both; }
    .zcwf_lblLeft .zcwf_col_help{ float: left; margin-left: 7px; font-size: 12px; max-width: 35%; word-break: break-word; }
    .zcwf_lblLeft .zcwf_help_icon{ cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #fff; border: 1px solid #c0c6cc; color: #c1c1c1; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%; }
    .zcwf_lblLeft .zcwf_row {margin: 15px 0px; }
    .zcwf_lblLeft .formsubmit{ margin-right: 5px; cursor: pointer; color: #313949; font-size: 12px; }
    .zcwf_lblLeft .zcwf_privacy_txt{ width: 90%; color: #313949; font-size: 12px; font-family: Arial; display: inline-block; vertical-align: top; padding-top: 2px; margin-left: 6px; }
    .zcwf_lblLeft .zcwf_button{ font-size: 12px; color: #313949; border: 1px solid #c0c6cc; padding: 3px 9px; border-radius: 4px; cursor: pointer; max-width: 120px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .zcwf_lblLeft .zcwf_tooltip_over{ position: relative; }
    .zcwf_lblLeft .zcwf_tooltip_ctn{ position: absolute; background: #dedede; padding: 3px 6px; top: 3px; border-radius: 4px; word-break: break-word; min-width: 100px; max-width: 150px; color: #313949; z-index: 100; }
    .zcwf_lblLeft .zcwf_ckbox{ float: left; }
    .zcwf_lblLeft .zcwf_file{ width: 55%; box-sizing: border-box; float: left; }
    .cBoth:after{ content: ''; display: block; clear: both; }
    @media all and (max-width: 600px){
      .zcwf_lblLeft .zcwf_col_lab, .zcwf_lblLeft .zcwf_col_fld{ width: auto; float: none !important; }
      .zcwf_lblLeft .zcwf_col_help {width: 40%; }
    }
  </style>

  <div class='zcwf_row'>
    <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>
      <label for='First_Name'>Nombre</label>
    </div>
    <div class='zcwf_col_fld'>
      <input type='text' id='First_Name' name='First Name' maxlength='40'>
      <div class='zcwf_col_help'></div>
    </div>
  </div>

  <div class='zcwf_row'>
    <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>
      <label for='Last_Name'>Apellidos <span style='color:red;'>*</span></label>
    </div>
    <div class='zcwf_col_fld'>
      <input type='text' id='Last_Name' name='Last Name' maxlength='80'>
      <div class='zcwf_col_help'></div>
    </div>
  </div>

  <div class='zcwf_row'>
    <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>
      <label for='Company'>Empresa <span style='color:red;'>*</span></label>
    </div>
    <div class='zcwf_col_fld'>
      <input type='text' id='Company' name='Company' maxlength='200'>
      <div class='zcwf_col_help'></div>
    </div>
  </div>

  <div class='zcwf_row'>
    <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>
      <label for='Email'>Correo electr&oacute;nico</label>
    </div>
    <div class='zcwf_col_fld'>
      <input type='text' ftype='email' autocomplete='false' id='Email' name='Email' maxlength='100'>
      <div class='zcwf_col_help'></div>
    </div>
  </div>

  <div class='zcwf_row'>
    <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>
      <label for='Phone'>Tel&eacute;fono</label>
    </div>
    <div class='zcwf_col_fld'>
      <input type='text' id='Phone' name='Phone' maxlength='30'>
      <div class='zcwf_col_help'></div>
    </div>
  </div>

  <div class='zcwf_row'>
    <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>
      <label for='LEADCF8'>Estoy interesado en... <span style='color:red;'>*</span></label>
    </div>
    <div class='zcwf_col_fld'>
      <select class='zcwf_col_fld_slt' id='LEADCF8' name='LEADCF8'>
        <option value='-None-'>-None-</option>
        <option selected value='Escoge una opción'>Escoge una opción</option>
        <option value='Plan Audiovisual Mensual'>Plan Audiovisual Mensual</option>
        <option value='Video Corporativo / Institucional'>Video Corporativo / Institucional</option>
        <option value='Podcast en Video'>Podcast en Video</option>
        <option value='Documental / Testimonial'>Documental / Testimonial</option>
        <option value='Motion Graphics / Animación'>Motion Graphics / Animación</option>
        <option value='Otro'>Otro</option>
      </select>
      <div class='zcwf_col_help'></div>
    </div>
  </div>

  <div class='zcwf_row'>
    <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>
      <label for='LEADCF7'>Presupuesto estimado</label>
    </div>
    <div class='zcwf_col_fld'>
      <select class='zcwf_col_fld_slt' id='LEADCF7' name='LEADCF7'>
        <option value='-None-'>-None-</option>
        <option selected value='Escoge una opción'>Escoge una opción</option>
        <option value='$500.000 - $1.000.000 CLP'>$500.000 - $1.000.000 CLP</option>
        <option value='$1.000.000 - $2.000.000 CLP'>$1.000.000 - $2.000.000 CLP</option>
        <option value='$2.000.000 - $4.000.000 CLP'>$2.000.000 - $4.000.000 CLP</option>
        <option value='$4.000.000+ CLP'>$4.000.000+ CLP</option>
        <option value='No estoy seguro'>No estoy seguro</option>
      </select>
      <div class='zcwf_col_help'></div>
    </div>
  </div>

  <div class='zcwf_row'>
    <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>
      <label for='LEADCF3'>Mensaje</label>
    </div>
    <div class='zcwf_col_fld'>
      <textarea id='LEADCF3' name='LEADCF3'></textarea>
      <div class='zcwf_col_help'></div>
    </div>
  </div>

  <!-- Marca -->
  <div class='zcwf_row wfrm_fld_dpNn'>
    <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>
      <label for='LEADCF5'>Marca</label>
    </div>
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

  <!-- Origen -->
  <div class='zcwf_row wfrm_fld_dpNn'>
    <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>
      <label for='LEADCF9'>Lead_Origen</label>
    </div>
    <div class='zcwf_col_fld'>
      <select class='zcwf_col_fld_slt' id='LEADCF9' name='LEADCF9'>
        <option value='-None-'>-None-</option>
        <option value='plan.dekaelomedia.com'>plan.dekaelomedia.com</option>
        <option value='tronxgroup.com/contacto'>tronxgroup.com/contacto</option>
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

  <input type='text' style='display: none;' name='aG9uZXlwb3Q' value=''/>
  <div class='zcwf_row'>
    <div class='zcwf_col_lab'></div>
    <div class='zcwf_col_fld'>
      <input type='submit' id='formsubmit' role='button' class='formsubmit zcwf_button' value='Enviar' title='Enviar'>
      <input type='reset' class='zcwf_button' role='button' name='reset' value='Restablecer' title='Restablecer'>
    </div>
  </div>

  <script>
    function addAriaSelected6988454000000608102 (){}
    function validateEmail6988454000000608102 (){ return true; }
    function checkMandatory6988454000000608102 (){
      var mndFileds = new Array('Company','Last Name','LEADCF8');
      var fldLangVal = new Array('Empresa','Apellidos','Estoy interesado en...');
      for(var i=0; i<mndFileds.length; i++){
        var fieldObj = document.forms['WebToLeads6988454000000608102'][mndFileds[i]];
        if(fieldObj){
          if(((fieldObj.value).replace(/^\\s+|\\s+$/g,'')).length==0){
            alert(fldLangVal[i] + ' no puede estar vacío.');
            fieldObj.focus();
            return false;
          } else if(fieldObj.nodeName=='SELECT'){
            if(fieldObj.options[fieldObj.selectedIndex].value=='-None-'){
              alert(fldLangVal[i] + ' no puede ser nulo.');
              fieldObj.focus();
              return false;
            }
          }
        }
      }
      return true;
    }
  </script>
  <!-- Do not remove this --- Analytics Tracking code starts -->
  <script id='wf_anal' src='https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=c04c910ee9b5291dec3a9d5465f0788e4c55d6db26f41b0f346367309e961b7642198dca80eec58f8da4df99de247ceegid96c5cd4a9cacaee0942898be665efbc1226f8ffc6acab4c766eced904e65b339gid465e39213806ec60c10c1b699f83ca1c14a2b737931d1a2f583baa76e746c0bagid6867920e722b4af3e091ee237264a5ff4e36afe8a7f73ce87bc9942c170b1c30&tw=ce042dbb94b4d6b1cfed135b7e07950e955aebd601908a06db64c9e75c04e341'></script>
  <!-- Do not remove this --- Analytics Tracking code ends. -->
</form>
</div>
`;

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

        {/* Wrapper visual (oscuro) */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          {/* Inyección del formulario Zoho */}
          <div dangerouslySetInnerHTML={{ __html: ZOHO_HTML }} />

          {/* Overrides de estilo para mantener look del sitio */}
          <style>{`
            /* Fondo y textos */
            #crmWebToEntityForm {
              background: transparent !important;
              color: #fff !important;
            }
            #crmWebToEntityForm .zcwf_col_lab label { color: #ddd !important; }
            #crmWebToEntityForm .zcwf_col_fld input[type="text"],
            #crmWebToEntityForm .zcwf_col_fld textarea,
            #crmWebToEntityForm .zcwf_col_fld select {
              width: 100% !important;
              background: rgba(255,255,255,0.05) !important;
              border: 1px solid rgba(255,255,255,0.15) !important;
              color: #fff !important;
              border-radius: 12px !important;
              padding: 10px 12px !important;
            }
            #crmWebToEntityForm .zcwf_row { margin: 10px 0 !important; }
            #crmWebToEntityForm .zcwf_button,
            #crmWebToEntityForm .formsubmit.zcwf_button {
              border-radius: 12px !important;
              padding: 10px 16px !important;
            }
            #crmWebToEntityForm .zcwf_button { 
              background: transparent !important; 
              color: #fff !important; 
              border: 1px solid rgba(255,255,255,0.15) !important;
            }
            #crmWebToEntityForm .formsubmit.zcwf_button {
              background: #fff !important;
              color: #000 !important;
              border: none !important;
              font-weight: 600 !important;
            }
          `}</style>

          {/* Script para setear origen dinámico (LEADCF9) y marca (por si ajustas el embed) */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(){
                try {
                  var origen = (location.host + location.pathname).toLowerCase();
                  var sel = document.getElementById('LEADCF9');
                  if (sel) {
                    var found = false;
                    for (var i = 0; i < sel.options.length; i++) {
                      if (sel.options[i].value.toLowerCase() === origen) {
                        sel.selectedIndex = i; found = true; break;
                      }
                    }
                    if (!found) {
                      // Si no existe en las opciones, crea una dinámica
                      var opt = document.createElement('option');
                      opt.value = origen;
                      opt.text = origen;
                      sel.appendChild(opt);
                      sel.value = origen;
                    }
                  }
                  // Marca por defecto (por si tocan el embed)
                  var marca = document.getElementById('LEADCF5');
                  if (marca && marca.options) {
                    for (var j=0; j<marca.options.length; j++) {
                      if (marca.options[j].value === 'Dekaelo') { marca.selectedIndex = j; break; }
                    }
                  }
                } catch(e){}
              })();
            `,
            }}
          />
        </div>

        {/* Información adicional */}
        <div className="mt-6 rounded-2xl bg-gray-900 border border-white/10 p-5">
          <p className="text-sm text-white/70">
            <span className="font-semibold text-white">¿Qué sigue?</span> Te escribiremos para agendar una llamada
            breve, entender objetivos y proponerte el enfoque audiovisual correcto (plan mensual o proyecto puntual).
          </p>
        </div>
      </div>
    </section>
  );
}
