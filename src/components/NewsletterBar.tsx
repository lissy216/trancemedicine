"use client";

import { useState } from "react";

export default function NewsletterBar() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <section style={{ backgroundColor: "#3d342e", color: "#EADDC8" }} className="py-12">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p
          className="mb-2 text-xs uppercase tracking-widest"
          style={{ color: "#B38A32" }}
        >
          Trance Medicine
        </p>
        <h2
          className="mb-4 text-2xl md:text-3xl"
          style={{ fontFamily: "Georgia, serif", color: "#EADDC8" }}
        >
          One idea per week, taught with the depth it deserves.
        </h2>
        <p className="mb-8 text-sm" style={{ color: "#d4c4a8" }}>
          Plus a free guided self-hypnosis practice when you subscribe.
        </p>

        {submitted ? (
          <p className="text-lg" style={{ color: "#D9AA3A", fontFamily: "Georgia, serif" }}>
            You are in. Check your inbox for the practice.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="flex-1 px-4 py-3 text-sm rounded outline-none"
              style={{
                backgroundColor: "#2F2925",
                color: "#EADDC8",
                border: "1px solid #B38A32",
              }}
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 text-sm rounded outline-none"
              style={{
                backgroundColor: "#2F2925",
                color: "#EADDC8",
                border: "1px solid #B38A32",
              }}
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 text-sm font-semibold rounded transition-opacity"
              style={{ backgroundColor: "#D9AA3A", color: "#2F2925" }}
            >
              {loading ? "Sending…" : "Subscribe"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
