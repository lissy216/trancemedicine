import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

// A newsletter sign-up from the footer bar or /newsletter. Until a mailing-list
// service is connected, each sign-up is emailed to the same inbox as the contact
// form, and the list is kept there. Send the guided practice and the weekly
// letter from that inbox.

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  let body: { name?: string; email?: string; source?: string; website?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body.website) return NextResponse.json({ success: true }); // honeypot

  const name = (body.name ?? "").trim().slice(0, 200);
  const email = (body.email ?? "").trim();
  if (!name || !EMAIL.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Please check your name and email." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("[newsletter] RESEND_API_KEY is not set; sign-up not recorded.");
    return NextResponse.json(
      { error: "Sign-ups are not working right now. Please try again later." },
      { status: 503 }
    );
  }

  const source = (body.source ?? "website").slice(0, 50);
  const when = new Date().toISOString();

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Trance Medicine <heal@trancemedicine.com>",
      to: ["the8thfire@outlook.com"],
      replyTo: email,
      subject: `[Newsletter] New subscriber: ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; color: #2F2925; padding: 32px;">
          <h2 style="color: #8A4F36; margin-bottom: 8px;">New newsletter subscriber</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Signed up from:</strong> ${escapeHtml(source)}, ${when}</p>
          <p style="margin-top: 24px; color: #8A4F36;">
            They asked for the weekly letter and the free guided self-hypnosis practice.
            Reply to this email to send it to them.
          </p>
        </div>
      `,
    });
    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[newsletter] send error:", err);
    return NextResponse.json({ error: "That did not go through. Please try again." }, { status: 502 });
  }
}
