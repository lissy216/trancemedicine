"use client";

import { useState } from "react";

const inquiryTypes = [
  "Private Session",
  "CPH Enrollment",
  "Workshop / Retreat",
  "Media / Speaking",
  "Professional Referral",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", inquiryType: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(form), headers: { "Content-Type": "application/json" } });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const inputStyle = {
    backgroundColor: "#3d342e",
    color: "#EADDC8",
    border: "1px solid #B38A32",
  };

  return (
    <>
      {/* Hero */}
      <section className="py-24 px-6" style={{ backgroundColor: "#2F2925" }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-6" style={{ color: "#B38A32" }}>
            Contact
          </p>
          <h1
            className="text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: "Georgia, serif", color: "#EADDC8" }}
          >
            Get in Touch
          </h1>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 px-6" style={{ backgroundColor: "#2F2925" }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-sm leading-relaxed mb-8" style={{ color: "#d4c4a8" }}>
            If you have a question, a referral, a media inquiry, or something that does not fit neatly into a
            booking form, this is the place. For private session bookings, start with the intake form. For CPH
            enrollment questions, check the FAQ first. For everything else, this form reaches directly. Response
            time is typically within 48 hours.
          </p>

          {status === "success" ? (
            <div
              className="p-8 rounded text-center"
              style={{ backgroundColor: "#3d342e", border: "1px solid #B38A32" }}
            >
              <p className="text-xl mb-2" style={{ fontFamily: "Georgia, serif", color: "#D9AA3A" }}>
                Message received.
              </p>
              <p className="text-sm" style={{ color: "#EADDC8" }}>
                You will hear back within 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-sm rounded outline-none"
                  style={inputStyle}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-sm rounded outline-none"
                  style={inputStyle}
                />
              </div>
              <select
                name="inquiryType"
                value={form.inquiryType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-sm rounded outline-none"
                style={inputStyle}
              >
                <option value="" disabled>Inquiry type</option>
                {inquiryTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              <textarea
                name="message"
                placeholder="Your message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 text-sm rounded outline-none resize-none"
                style={inputStyle}
              />
              {status === "error" && (
                <p className="text-sm" style={{ color: "#8A4F36" }}>
                  Something went wrong. Please try again or email directly.
                </p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 text-sm font-semibold rounded transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#D9AA3A", color: "#2F2925" }}
              >
                {status === "loading" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
