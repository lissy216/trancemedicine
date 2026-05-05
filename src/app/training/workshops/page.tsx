import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Workshops & Retreats",
  description:
    "Immersive, experiential workshops and retreats. Entry points to experience the work before committing to a certification.",
};

export default function Workshops() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 px-6" style={{ backgroundColor: "#2F2925" }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-6" style={{ color: "#B38A32" }}>
            Training
          </p>
          <h1
            className="text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: "Georgia, serif", color: "#EADDC8" }}
          >
            Workshops &amp; Retreats
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EADDC8" }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-base leading-relaxed" style={{ color: "#2F2925" }}>
            Workshops and retreats are immersive, experiential, and do not require enrollment in the full CPH
            program. They are entry points: a chance to experience what this work feels like in your body before you
            commit to a certification or a long-term practice. Each offering is designed as a complete experience,
            not a sales pitch for something else.
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 px-6" style={{ backgroundColor: "#3d342e" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-2xl mb-6"
            style={{ fontFamily: "Georgia, serif", color: "#EADDC8" }}
          >
            The next workshop is being built.
          </h2>
          <p className="text-sm mb-8" style={{ color: "#d4c4a8" }}>
            If you want to be the first to know when it opens, leave your name below. You will hear from us before
            anyone else.
          </p>
          <Link
            href="/newsletter"
            className="inline-block text-sm font-semibold px-8 py-4 rounded transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#D9AA3A", color: "#2F2925" }}
          >
            Notify Me
          </Link>
        </div>
      </section>
    </>
  );
}
