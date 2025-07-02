import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { nombre, email, telefono, mensaje } = await req.json();
    if (!nombre || !email || !telefono || !mensaje) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    const html = `
      <h2>Nuevo mensaje de contacto</h2>
      <p><b>Nombre:</b> ${nombre}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Teléfono:</b> ${telefono}</p>
      <p><b>Mensaje:</b><br/>${mensaje.replace(/\n/g, "<br/>")}</p>
    `;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL || "grupomaterialero@gmail.com",
      subject: "Nuevo mensaje de contacto desde la web",
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
