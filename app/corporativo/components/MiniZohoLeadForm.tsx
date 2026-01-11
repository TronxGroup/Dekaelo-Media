// app/corporativo/components/MiniZohoLeadForm.tsx
"use client";

const RETURN_URL = "https://www.dekaelomedia.com/gracias";

const ZOHO = {
  action: "https://crm.zoho.com/crm/WebToLeadForm",
  xnQsjsdp: "5bb7b0a1e5ad2fab6a98e314d47b987403b938448c1d0dff59c7e7027ab361f3",
  xmIwtLD:
    "2f6e972015fa2fd7ece8a670994b5b2c3db3ee5c674d19c077ee3efad102030890c7cf62318fc335a40f125ac92167e5",
  actionType: "TGVhZHM=",
} as const;

export default function MiniZohoLeadForm() {
  return (
    <form action={ZOHO.action} method="POST" acceptCharset="UTF-8" className="grid gap-3">
      {/* Hidden Zoho tokens */}
      <input type="text" style={{ display: "none" }} name="xnQsjsdp" value={ZOHO.xnQsjsdp} readOnly />
      <input type="hidden" name="zc_gad" id="zc_gad" value="" />
      <input type="text" style={{ display: "none" }} name="xmIwtLD" value={ZOHO.xmIwtLD} readOnly />
      <input type="text" style={{ display: "none" }} name="actionType" value={ZOHO.actionType} readOnly />
      <input type="text" style={{ display: "none" }} name="returnURL" value={RETURN_URL} readOnly />

      {/* Marca / origen */}
      <input type="hidden" name="LEADCF5" value="Dekaelo" />
      <input type="hidden" name="LEADCF9" value="dekaelomedia.com/corporativo" />

      {/* Honeypot */}
      <input type="text" style={{ display: "none" }} name="aG9uZXlwb3Q" value="" readOnly />

      <div className="grid sm:grid-cols-2 gap-3">
        <input
          name="First Name"
          placeholder="Nombre *"
          required
          className="w-full border border-white/10 bg-black/40 text-white px-3 py-2 rounded-xl"
        />
        <input
          name="Last Name"
          placeholder="Apellido *"
          required
          className="w-full border border-white/10 bg-black/40 text-white px-3 py-2 rounded-xl"
        />
      </div>

      <input
        name="Company"
        placeholder="Empresa *"
        required
        className="w-full border border-white/10 bg-black/40 text-white px-3 py-2 rounded-xl"
      />

      <div className="grid sm:grid-cols-2 gap-3">
        <input
          name="Email"
          placeholder="Correo *"
          required
          type="email"
          className="w-full border border-white/10 bg-black/40 text-white px-3 py-2 rounded-xl"
        />
        <input
          name="Phone"
          placeholder="Teléfono (opcional)"
          className="w-full border border-white/10 bg-black/40 text-white px-3 py-2 rounded-xl"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <select
          name="LEADCF8"
          required
          defaultValue="-None-"
          className="w-full border border-white/10 bg-black/40 text-white px-3 py-2 rounded-xl"
        >
          <option value="-None-">Estoy interesado en… *</option>
          <option value="Video Corporativo / Institucional">Video Corporativo / Institucional</option>
          <option value="Podcast en Video">Vodcast / Podcast en video</option>
          <option value="Plan Audiovisual Mensual">Plan Audiovisual Mensual</option>
          <option value="Otro">Otro</option>
        </select>

        <select
          name="LEADCF7"
          required
          defaultValue="No estoy seguro"
          className="w-full border border-white/10 bg-black/40 text-white px-3 py-2 rounded-xl"
        >
          <option value="-None-">Presupuesto estimado *</option>
          <option value="No estoy seguro">No estoy seguro</option>
          <option value="$500.000 - $1.000.000 CLP">$500.000 – $1.000.000</option>
          <option value="$1.000.000 - $2.000.000 CLP">$1.000.000 – $2.000.000</option>
          <option value="$2.000.000 - $4.000.000 CLP">$2.000.000 – $4.000.000</option>
          <option value="$4.000.000+ CLP">$4.000.000+</option>
        </select>
      </div>

      <textarea
        name="LEADCF3"
        required
        placeholder="Mensaje * (objetivo + fecha/ciudad + referencias si tienes)"
        className="w-full border border-white/10 bg-black/40 text-white px-3 py-2 rounded-xl min-h-[110px]"
      />

      <button type="submit" className="btn w-full">
        Enviar y recibir propuesta
      </button>

      <p className="text-xs text-white/50">
        Respuesta típica en 24–48 horas hábiles. Si es urgente (≤10 días), indícalo en el mensaje.
      </p>
    </form>
  );
}
