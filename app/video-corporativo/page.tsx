import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const formData = await request.formData();

  const nombre = formData.get("nombre");
  const empresa = formData.get("empresa");
  const email = formData.get("email");
  const telefono = formData.get("telefono");
  const mensaje = formData.get("mensaje");

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Formulario Web" <${process.env.EMAIL_USER}>`,
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

  return NextResponse.redirect(new URL("/gracias", request.url));
}
