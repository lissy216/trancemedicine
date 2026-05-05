import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trance Medicine — The Book by Miskwa Kimiwan",
  description:
    "Trance Medicine is a 30-chapter book on body-centered hypnosis by Miskwa Kimiwan. What hypnosis actually looks like when stripped of performance and clinical distance.",
  alternates: { canonical: "https://trancemedicine.com/book" },
  openGraph: {
    title: "Trance Medicine — The Book by Miskwa Kimiwan",
    description:
      "30 chapters on what hypnosis actually looks like when you strip away the performance and the clinical distance. A book for practitioners, clients, and the curious.",
    url: "https://trancemedicine.com/book",
    type: "book",
  },
};

const bookJsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Trance Medicine",
  url: "https://trancemedicine.com/book",
  author: {
    "@type": "Person",
    name: "Miskwa Kimiwan",
    url: "https://trancemedicine.com/about",
  },
  description:
    "30 chapters on body-centered, evidence-informed hypnosis. What hypnosis actually looks like when you strip away the performance and the clinical distance.",
  genre: ["Hypnosis", "Psychology", "Mind-Body Medicine", "Self-Help"],
  inLanguage: "en",
  publisher: {
    "@type": "Organization",
    name: "Trance Medicine",
    url: "https://trancemedicine.com",
  },
};

export default function Book() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }}
      />
      {/* Hero */}
      <section className="py-24 px-6" style={{ backgroundColor: "#2F2925" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-6" style={{ color: "#B38A32" }}>
            Trance Medicine
          </p>
          <h1
            className="text-4xl md:text-5xl leading-tight mb-6"
            style={{ fontFamily: "Georgia, serif", color: "#EADDC8" }}
          >
            Trance Medicine
          </h1>
          <p className="text-lg" style={{ color: "#B38A32", fontFamily: "Georgia, serif" }}>
            The book the hypnosis field was not ready for.
          </p>
        </div>
      </section>

      {/* What This Book Is */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EADDC8" }}>
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl mb-8"
            style={{ fontFamily: "Georgia, serif", color: "#2F2925" }}
          >
            What This Book Is
          </h2>
          <div className="space-y-5 text-base leading-relaxed" style={{ color: "#2F2925" }}>
            <p>
              Trance Medicine is 30 chapters of what hypnosis actually looks like when you strip away the
              performance, the manifestation promises, and the clinical distance that keeps the practitioner safe but
              leaves the client alone.
            </p>
            <p>
              It covers the eight-step self-hypnosis method, a six-phase therapeutic framework called The Clearing,
              practitioner development built on philosophical foundations most training programs skip, and the
              hard-won truth that your body already knows how to heal if someone will stop telling it what to do and
              start listening to what it is saying.
            </p>
            <p>
              Not a textbook. Not a self-help manual. A field guide written by someone who built the methodology
              from what he found in the dark, for anyone willing to go there too.
            </p>
          </div>
        </div>
      </section>

      {/* Who It&apos;s For */}
      <section className="py-20 px-6" style={{ backgroundColor: "#2F2925" }}>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2
              className="text-2xl mb-6"
              style={{ fontFamily: "Georgia, serif", color: "#D9AA3A" }}
            >
              Who This Book Is For
            </h2>
            <ul className="space-y-3 text-sm leading-relaxed" style={{ color: "#EADDC8" }}>
              {[
                "You have been through something, and the books that were supposed to help felt written for someone with a smaller wound.",
                "You want to understand hypnosis as real work, not as stage performance or manifesting technique.",
                "You are a practitioner who finished a certification and felt the gap between what you were taught and what walks through your door.",
                "You are a therapist or counselor looking for a missing piece that is grounded in something defensible.",
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
              style={{ fontFamily: "Georgia, serif", color: "#8A4F36" }}
            >
              Who This Book Is Not For
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#EADDC8" }}>
              If you are looking for scripts to memorize, quick results, or a shortcut to calling yourself a
              hypnotist, this book will frustrate you. It asks more than that. It asks you to sit with your own
              material first, to understand the philosophical ground you are standing on before you pick up a
              technique. That is not for everyone. It is for the ones who stay.
            </p>
          </div>
        </div>
      </section>

      {/* Excerpt */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EADDC8" }}>
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl mb-8"
            style={{ fontFamily: "Georgia, serif", color: "#2F2925" }}
          >
            From the Pages
          </h2>
          <blockquote
            className="pl-6 text-base leading-relaxed italic"
            style={{
              borderLeft: "3px solid #D9AA3A",
              color: "#2F2925",
              fontFamily: "Georgia, serif",
            }}
          >
            &ldquo;The body does not lie. It cannot. It has no mechanism for dishonesty. When your mind says you
            are fine and your shoulders are pressed against your ears, believe the shoulders. When your mind says you
            have forgiven and your jaw is clenched so tight it aches, believe the jaw. The body is the primary site
            of truth, and it has been trying to tell you something for years. This book is about learning to
            listen.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Get the Book */}
      <section className="py-20 px-6" style={{ backgroundColor: "#3d342e" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-3xl mb-4"
            style={{ fontFamily: "Georgia, serif", color: "#EADDC8" }}
          >
            Get the Book
          </h2>
          <p className="text-sm mb-8" style={{ color: "#d4c4a8" }}>
            Trance Medicine is available now.
          </p>
          <Link
            href="/newsletter"
            className="inline-block text-sm font-semibold px-8 py-4 rounded transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#D9AA3A", color: "#2F2925" }}
          >
            Order Trance Medicine
          </Link>
          <p className="mt-6 text-xs" style={{ color: "#B38A32" }}>
            Not ready to order? Subscribe to the newsletter and be the first to know about updates, events, and
            new chapters.
          </p>
        </div>
      </section>
    </>
  );
}
