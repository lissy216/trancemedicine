import type { Metadata } from "next";
import Link from "next/link";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Private Sessions",
  description:
    "Private hypnosis sessions. Body-centered, evidence-informed. A held space where you and your body do the work.",
};

export default function PrivateSessions() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 px-6" style={{ backgroundColor: "#2F2925" }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-6" style={{ color: "#B38A32" }}>
            Work With Me
          </p>
          <h1
            className="text-4xl md:text-5xl leading-tight mb-6"
            style={{ fontFamily: "Georgia, serif", color: "#EADDC8" }}
          >
            Private Sessions
          </h1>
          <p className="text-lg" style={{ color: "#d4c4a8" }}>
            A held space where you and your body do the work.
          </p>
        </div>
      </section>

      {/* What a Session Is */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EADDC8" }}>
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl mb-8"
            style={{ fontFamily: "Georgia, serif", color: "#2F2925" }}
          >
            What a Session Is
          </h2>
          <div className="space-y-5 text-base leading-relaxed" style={{ color: "#2F2925" }}>
            <p>
              A private hypnosis session is a held space where you and your body do the work. You will not be fixed,
              programmed, or told what to feel. You will be met where you are by a practitioner who has sat with his
              own material and is not afraid of yours.
            </p>
            <p>
              The session begins with your body, not a script. What you are carrying has a physical address: the
              tightness in your chest, the tension in your jaw, the weight across your shoulders that nobody else
              can see. This work goes there first, because your body has been trying to tell you something, and most
              approaches have been too busy talking to listen.
            </p>
            <p>
              Sessions are structured around the eight-step method and adapted to what your system needs. Some
              sessions are quiet. Some sessions move. All of them are honest about what is happening and why. You
              will leave each session with something you can use on your own, because the goal of this work is for
              you to stop needing me.
            </p>
          </div>
        </div>
      </section>

      {/* What It&apos;s Not */}
      <section className="py-20 px-6" style={{ backgroundColor: "#2F2925" }}>
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl mb-6"
            style={{ fontFamily: "Georgia, serif", color: "#D9AA3A" }}
          >
            What a Session Is Not
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#EADDC8" }}>
            Not therapy. Not a replacement for medical or mental health treatment. It is not stage hypnosis, and you
            will not cluck like a chicken. It is also not a single-session miracle. If someone promises you
            transformation in one hour, they are selling you something. This work is honest about what it takes:
            willingness, time, and the courage to stop performing your recovery and start being real about where you
            actually are.
          </p>
        </div>
      </section>

      {/* Who It&apos;s For */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EADDC8" }}>
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl mb-8"
            style={{ fontFamily: "Georgia, serif", color: "#2F2925" }}
          >
            Who This Is For
          </h2>
          <ul className="space-y-3 text-sm leading-relaxed" style={{ color: "#2F2925" }}>
            {[
              "You are carrying something that other approaches have not reached.",
              "The talk therapy helped you understand it, but your body is still holding it.",
              "The meditation practice calmed your mind, but the weight is still there when you stop.",
              "You have tried performing your way through it, and you are ready for something that does not flinch.",
              "You have been referred by a therapist or counselor for complementary work.",
              "You have read Trance Medicine and want to experience the practice the book describes.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span style={{ color: "#B38A32", flexShrink: 0 }}>—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Session Types */}
      <section className="py-20 px-6" style={{ backgroundColor: "#3d342e" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl mb-8"
            style={{ fontFamily: "Georgia, serif", color: "#EADDC8" }}
          >
            Session Options
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Initial Session",
                duration: "90 minutes",
                desc: "Includes intake, assessment, and your first full session. The intake is not paperwork. It is the beginning of the work.",
              },
              {
                title: "Follow-Up Sessions",
                duration: "60 minutes",
                desc: "Continuing work tailored to where your system is and what it is ready for.",
              },
              {
                title: "Session Packages",
                duration: "Flexible",
                desc: "Available for people who know they are committing to the work. Pricing and structure available on inquiry.",
              },
            ].map((opt) => (
              <div
                key={opt.title}
                className="p-6 rounded"
                style={{ backgroundColor: "#2F2925", border: "1px solid #B38A32" }}
              >
                <h3
                  className="text-lg mb-1"
                  style={{ fontFamily: "Georgia, serif", color: "#D9AA3A" }}
                >
                  {opt.title}
                </h3>
                <p className="text-xs mb-4" style={{ color: "#B38A32" }}>
                  {opt.duration}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#EADDC8" }}>
                  {opt.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-center" style={{ color: "#B38A32" }}>
            Pricing provided at intake. Virtual and in-person available.
          </p>
        </div>
      </section>

      {/* Book a Session */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EADDC8" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2
              className="text-2xl mb-4"
              style={{ fontFamily: "Georgia, serif", color: "#2F2925" }}
            >
              Book a Session
            </h2>
            <p className="text-sm leading-relaxed max-w-xl mx-auto" style={{ color: "#2F2925" }}>
              Choose 90 minutes for your first session (includes intake) or 60 minutes for follow-up work.
              Select your preferred format — video, phone, or in-person at Dark Horse Healing Lodge.
            </p>
          </div>
          <CalendlyEmbed />
          <p className="mt-6 text-xs text-center" style={{ color: "#8A4F36" }}>
            Have a question before booking?{" "}
            <Link href="/contact" className="underline hover:opacity-70">
              Get in touch first.
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
