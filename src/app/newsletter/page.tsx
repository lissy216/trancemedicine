"use client";

import { useState } from "react";

export default function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
    <>
      {/* Hero */}
      <section className="py-24 px-6" style={{ backgroundColor: "#2F2925" }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-6" style={{ color: "#B38A32" }}>
            Trance Medicine
          </p>
          <h1
            className="text-4xl md:text-5xl leading-tight mb-6"
            style={{ fontFamily: "Georgia, serif", color: "#EADDC8" }}
          >
            The Newsletter
          </h1>
          <p className="text-lg" style={{ color: "#d4c4a8" }}>
            One idea per week. Taught with the depth it deserves.
          </p>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EADDC8" }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg leading-relaxed" style={{ color: "#2F2925", fontFamily: "Georgia, serif" }}>
            Trance Medicine is the weekly newsletter for people who want to understand hypnosis as real healing
            work. Not performance. Not manifestation theater. Not clinical detachment. One idea per week, taught
            with the depth it deserves, by someone who has done the work.
          </p>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="py-20 px-6" style={{ backgroundColor: "#2F2925" }}>
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl mb-6"
            style={{ fontFamily: "Georgia, serif", color: "#D9AA3A" }}
          >
            Try the Practice First
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: "#EADDC8" }}>
            Before you subscribe, try the practice. A 10-minute guided self-hypnosis exercise drawn from the
            eight-step method. It involves your body, not just your mind. You will know before the 10 minutes are
            up whether this work speaks to something you have been carrying.
          </p>

          {submitted ? (
            <div
              className="p-8 rounded text-center"
              style={{ backgroundColor: "#3d342e", border: "1px solid #B38A32" }}
            >
              <p
                className="text-xl"
                style={{ fontFamily: "Georgia, serif", color: "#D9AA3A" }}
              >
                You are in.
              </p>
              <p className="mt-2 text-sm" style={{ color: "#EADDC8" }}>
                Check your inbox. The practice is on its way.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 text-sm rounded outline-none"
                style={{ backgroundColor: "#3d342e", color: "#EADDC8", border: "1px solid #B38A32" }}
              />
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 text-sm rounded outline-none"
                style={{ backgroundColor: "#3d342e", color: "#EADDC8", border: "1px solid #B38A32" }}
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 text-sm font-semibold rounded transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#D9AA3A", color: "#2F2925" }}
              >
                {loading ? "Sending…" : "Send Me the Practice"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* What You Receive */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EADDC8" }}>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2
              className="text-2xl mb-6"
              style={{ fontFamily: "Georgia, serif", color: "#2F2925" }}
            >
              What You Will Receive
            </h2>
            <ul className="space-y-3 text-sm leading-relaxed" style={{ color: "#2F2925" }}>
              {[
                "One email per week. Under 500 words.",
                "Teaching that changes how you think about hypnosis.",
                "Stories from practice that carry the teaching inside them.",
                "Reframes that challenge what the field gets wrong.",
                "Guided exercises you can use the same day you read them.",
                "No fluff. No overclaiming. No pitch disguised as a lesson.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span style={{ color: "#B38A32", flexShrink: 0 }}>—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2
              className="text-2xl mb-6"
              style={{ fontFamily: "Georgia, serif", color: "#2F2925" }}
            >
              What This Newsletter Will Not Do
            </h2>
            <ul className="space-y-3 text-sm leading-relaxed" style={{ color: "#2F2925" }}>
              {[
                "Perform wellness.",
                "Promise transformation in a subject line.",
                "Sell you something every week.",
                "Treat you like someone who needs to be managed into a purchase.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span style={{ color: "#8A4F36", flexShrink: 0 }}>—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed" style={{ color: "#2F2925" }}>
              It will treat you like an adult carrying real weight who wants honest information from someone who has
              earned the right to offer it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
