import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();

  const nombre = formData.get("nombre");
  const empresa = formData.get("empresa");
  const email = formData.get("email");
  const telefono = formData.get("telefono");
  const mensaje = formData.get("mensaje");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
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
      }),
    });

    if (!response.ok) {
      throw new Error("Error enviando correo");
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}
