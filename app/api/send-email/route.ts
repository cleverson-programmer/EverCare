import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {
      name,
      phone,
      email,
      address,
      bedrooms,
      bathrooms,
      kitchens,
      selectedFurniture,
      observations,
      serviceType,
    } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const furnitureList = selectedFurniture?.length
      ? selectedFurniture.join(", ")
      : "Nenhum móvel selecionado";

    /* ==============================
       📩 EMAIL PARA A EMPRESA
    ===============================*/

    const companyEmailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #1e293b;">Nova Solicitação de Serviço</h2>
        <hr/>

        <h3>📌 Dados do Cliente</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Endereço:</strong> ${address}</p>

        <h3>🏠 Detalhes do Serviço</h3>
        <p><strong>Tipo de Serviço:</strong> ${serviceType}</p>
        <p><strong>Quartos:</strong> ${bedrooms}</p>
        <p><strong>Banheiros:</strong> ${bathrooms}</p>
        <p><strong>Cozinhas:</strong> ${kitchens}</p>

        <h3>🪑 Móveis Selecionados</h3>
        <p>${furnitureList}</p>

        <h3>📝 Observações</h3>
        <p>${observations || "Nenhuma observação informada"}</p>

        <hr/>
        <p style="font-size: 12px; color: gray;">
          Este email foi enviado automaticamente pelo site.
        </p>
      </div>
    `;

    /* ==============================
       📧 EMAIL PARA O CLIENTE
    ===============================*/

    const clientEmailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #1e293b;">Recebemos sua Solicitação ✅</h2>
        <p>Olá <strong>${name}</strong>,</p>

        <p>
          Recebemos sua solicitação de <strong>${serviceType}</strong>.
          Nossa equipe entrará em contato em breve.
        </p>

        <hr/>

        <h3>📋 Resumo da sua solicitação</h3>

        <p><strong>Endereço:</strong> ${address}</p>
        <p><strong>Quartos:</strong> ${bedrooms}</p>
        <p><strong>Banheiros:</strong> ${bathrooms}</p>
        <p><strong>Cozinhas:</strong> ${kitchens}</p>

        <p><strong>Móveis:</strong> ${furnitureList}</p>

        <p><strong>Observações:</strong> ${
          observations || "Nenhuma observação informada"
        }</p>

        <hr/>

        <p>
          Caso precise complementar alguma informação,
          basta responder este email.
        </p>

        <p style="margin-top:20px;">
          Atenciosamente,<br/>
          <strong>Sua Empresa de Limpeza</strong>
        </p>
      </div>
    `;

    /* ==============================
       🚀 ENVIO DOS DOIS EMAILS
    ===============================*/

    await transporter.sendMail({
      from: `"Site - Solicitação" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Email da empresa
      subject: "Nova Solicitação Recebida",
      html: companyEmailHTML,
    });

    await transporter.sendMail({
      from: `"Sua Empresa de Limpeza" <${process.env.EMAIL_USER}>`,
      to: email, // Email do cliente
      subject: "Recebemos sua solicitação",
      html: clientEmailHTML,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
