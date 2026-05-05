import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, inquiryType, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Trance Medicine <hello@trancemedicine.com>",
      to: ["the8thfire@outlook.com"],
      replyTo: email,
      subject: `[${inquiryType || "Contact"}] Message from ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; color: #2F2925; padding: 32px;">
          <h2 style="color: #8A4F36; margin-bottom: 8px;">New message from ${name}</h2>
          <p style="color: #B38A32; font-size: 14px; margin-bottom: 24px;">${inquiryType || "General inquiry"}</p>
          <p><strong>Email:</strong> ${email}</p>
          <div style="margin-top: 24px; padding: 20px; background: #EADDC8; border-left: 3px solid #D9AA3A;">
            <p style="white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
