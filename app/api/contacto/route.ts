import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const formData = await request.formData();

  const nombre = formData.get("nombre");
  const empresa = formData.get("empresa");
  const email = formData.get("email");
  const telefono = formData.get("telefono");
  const mensaje = formData.get("mensaje");

  await resend.emails.send({
    from: "Dekaelo Web <onboarding@resend.dev>",
    to: "info@dekaelomedia.com",
    subject: "Nuevo Lead - Video Corporativo",
    html: `
      <h2>Nuevo Lead</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Empresa:</strong> ${empresa}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${mensaje}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
