// app/components/ZohoLeadForm.tsx
"use client";

import { useEffect, useState } from "react";

// URL del formulario Zoho (la que pegaste)
const ZOHO_IFRAME_SRC =
  "https://crm.zoho.com/crm/WebFormServeServlet?rid=dea476081908e17572424d261151002bc55f9556c10ac64e497c6206ce35a78d50b3de7a0f1d450df2b7f30212812b9dgid0f68003ad98dc4e2e75f15f6088fb0caa50948821ddc9a966459ad1a3aad0edb";

export default function ZohoLeadForm() {
  const [loaded, setLoaded] = useState(false);

  // Script de postMessage que pide Zoho
  useEffect(() => {
    function wfa_pstMesgFrmFom(evt: MessageEvent) {
      if (
        evt.origin === "https://crm.zoho.com" ||
        evt.origin === "https://crm.zohopublic.com"
      ) {
        const loc_obj = JSON.stringify({
          origin: window.location.origin,
          pathname: window.location.pathname,
          search: window.location.search,
          hash: window.location.hash,
        });

        if (evt.source && typeof (evt.source as WindowProxy).postMessage === "function") {
          (evt.source as WindowProxy).postMessage(
            "prnt_wnd_pg_lc_rc_frm_prwindow_" + loc_obj,
            evt.origin
          );
        }
      }
    }

    window.addEventListener("message", wfa_pstMesgFrmFom, false);
    return () => window.removeEventListener("message", wfa_pstMesgFrmFom, false);
  }, []);

  return (
    <div className="mt-4">
      {/* Mensaje mientras carga el iframe */}
      {!loaded && (
        <div className="mb-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/70">
          Cargando formulario seguro desde Zoho CRM…
          <br />
          Si demora demasiado, puedes escribirnos directamente a{" "}
          <a
            href="mailto:info@dekaelomedia.com?subject=Consulta%20Dekaelo%20Media"
            className="underline"
          >
            info@dekaelomedia.com
          </a>{" "}
          o vía WhatsApp al{" "}
          <a
            href="https://wa.me/56920080031"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            +56 9 2008 0031
          </a>
          .
        </div>
      )}

      {/* Contenedor más estrecho y centrado */}
      <div className="mx-auto max-w-[720px] overflow-hidden rounded-2xl border border-white/10 bg-black/40">
        {/* Igualamos la altura al valor del iframe de Zoho (800px) */}
        <div className="relative w-full h-[800px]">
          <iframe
            src={ZOHO_IFRAME_SRC}
            title="Formulario de contacto Dekaelo Media"
            className="absolute inset-0 h-full w-full"
            frameBorder={0}
            loading="lazy"
            onLoad={() => setLoaded(true)}
          />

          {/* Fallback visual si algo bloquea el iframe */}
          {!loaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-xs text-white/60">
              <p>
                Estamos cargando el formulario de Zoho CRM. Si no se muestra en unos segundos, puede
                que tu navegador esté bloqueando contenido de terceros.
              </p>
              <p className="mt-3">
                Escríbenos directamente a{" "}
                <a
                  href="mailto:info@dekaelomedia.com?subject=Consulta%20Dekaelo%20Media"
                  className="underline"
                >
                  info@dekaelomedia.com
                </a>{" "}
                o contáctanos por{" "}
                <a
                  href="https://wa.me/56920080031"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  WhatsApp
                </a>
                .
              </p>
            </div>
          )}
        </div>
      </div>

      <p className="mt-3 text-xs text-white/50">
        Formulario protegido y gestionado por Zoho CRM. Usamos tus datos solo para responder tu
        consulta y coordinar el proyecto. No enviamos correos masivos ni compartimos tu información
        con terceros.
      </p>
    </div>
  );
}
