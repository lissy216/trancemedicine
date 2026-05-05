import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "The origin story, credentials, and philosophical position behind Trance Medicine and the work of Miskwa Kimiwan.",
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 px-6" style={{ backgroundColor: "#2F2925" }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-6" style={{ color: "#B38A32" }}>
            About
          </p>
          <h1
            className="text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: "Georgia, serif", color: "#EADDC8" }}
          >
            The Origin Story
          </h1>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EADDC8" }}>
        <div className="max-w-2xl mx-auto space-y-6 text-base leading-relaxed" style={{ color: "#2F2925" }}>
          <p>
            Something broke. Not the kind of breaking that mends over a weekend. The kind where you are on the floor
            at 3 a.m. and the only honest question left is whether you are too far gone to come back from this.
          </p>
          <p>
            I had no framework for what I was living. The self-help world offered affirmations I could not make my
            body believe. The clinical world offered distance I did not need. The spiritual world offered light, and I
            was standing in the dark, and the light felt like a lie.
          </p>
          <p>
            So I stayed in the dark. Not because I wanted to. Because there was nowhere else to go. And something
            happened there that I did not expect. The dark taught me things the light never could. That the body
            knows what the mind is still arguing about. That pain, if you stop running from it, starts to change
            form. That the parts of your story you have been hiding are not the parts that disqualify you. They are
            the parts that qualify you to help someone else.
          </p>
          <p>
            That is how this work was built. Not from a textbook. From the ground up, in the wreckage. I trained in
            hypnosis because I needed something that could reach the body directly, without asking the mind&apos;s
            permission first. I studied the science because I was tired of a field that overclaimed and undertrained.
            I built a 100-hour curriculum because the certifications available were not built for the weight that
            walks through a practitioner&apos;s door.
          </p>
          <p>
            I am not a guru. I do not have the answers to your life. I have been broken, and I have caused breaking,
            and I have learned that neither of those things disqualifies anyone from wholeness. What I have is a
            methodology built from the intersection of evidence and experience, a willingness to sit with you in
            whatever you are carrying, and the certainty, earned the hard way, that you are not too far gone.
            No one is.
          </p>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 px-6" style={{ backgroundColor: "#2F2925" }}>
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl mb-8"
            style={{ fontFamily: "Georgia, serif", color: "#D9AA3A" }}
          >
            Training and Credentials
          </h2>
          <ul className="space-y-3 text-sm leading-relaxed" style={{ color: "#EADDC8" }}>
            {[
              "ICBCH-aligned Certified Professional Hypnotist training (100 hours, The Quiet Fire CPH)",
              "Published author: Trance Medicine, Red Rain: A Soul Shattered, The Book of Questions",
              "Training in Quantum Shamanic Reiki (4 levels)",
              "Living The Light Sacred Alchemy (2-year program)",
              "Over a decade of practice at the intersection of evidence-informed methodology and sacred tradition",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span style={{ color: "#B38A32", flexShrink: 0 }}>—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Philosophical Position */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EADDC8" }}>
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl mb-8"
            style={{ fontFamily: "Georgia, serif", color: "#2F2925" }}
          >
            What I Believe About This Work
          </h2>
          <div className="space-y-6 text-base leading-relaxed" style={{ color: "#2F2925" }}>
            <p>
              You already have everything you need to heal. My job is not to give you something. It is to help you
              get out of your own way.
            </p>
            <p>
              Your body holds four kinds of intelligence: physical, emotional, mental, and something deeper that most
              training programs skip entirely. This work does not privilege your thinking over your feeling. It does
              not treat the body as a vehicle for the mind. The body is where the truth lives, and it speaks first
              if you let it.
            </p>
            <p>
              I believe the practitioner&apos;s job is to create safety and remove barriers, not to heal. You are
              the one doing the work. I am the one making sure the container holds. And every technique I teach you
              is designed to become yours. The goal of this work is for you to stop needing me. A successful outcome
              is a client who walks away with everything they need and does not come back because they do not have to.
            </p>
            <p>
              The pain you carry is not a flaw. It is unfinished business. And if you are willing to stop performing
              your recovery and start being honest about where you actually are, that pain will teach you something
              the comfort never could.
            </p>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-20 px-6" style={{ backgroundColor: "#3d342e" }}>
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">
          <Link
            href="/sessions/private"
            className="flex-1 text-center py-4 px-6 rounded text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#D9AA3A", color: "#2F2925" }}
          >
            Book a Session
          </Link>
          <Link
            href="/training/cph"
            className="flex-1 text-center py-4 px-6 rounded text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ border: "1px solid #D9AA3A", color: "#D9AA3A" }}
          >
            Explore the Training
          </Link>
        </div>
      </section>
    </>
  );
}
