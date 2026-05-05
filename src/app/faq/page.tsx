"use client";

import { useState } from "react";

const categories = [
  {
    title: "About Hypnosis",
    faqs: [
      {
        q: "What is hypnosis?",
        a: "Hypnosis is a natural state of focused attention in which the body's own intelligence becomes more accessible. It is not sleep, not unconsciousness, and not someone else controlling your mind. You remain aware and in control throughout. What changes is the depth of access you have to the parts of yourself that operate below your conscious awareness — the parts that hold patterns, memories, and truths your thinking mind has been arguing with.",
      },
      {
        q: "Is hypnosis safe?",
        a: "For most people, yes. There are specific contraindications: active psychosis, suicidal ideation, severe dissociative identity disorder, uncontrolled epilepsy, and intoxication are absolute. Other conditions require assessment before proceeding. A responsible practitioner screens for these before the first session. That screening is built into the intake process here.",
      },
      {
        q: "Will I lose control?",
        a: "No. Stage hypnosis has done real damage to the public understanding of this work. In a therapeutic context, you are aware, you are in control, and you can open your eyes and stop at any point. Hypnosis works with your system, not against it. If your body does not feel safe, it will not go deeper. That is a feature, not a problem.",
      },
      {
        q: "Can hypnosis fix me?",
        a: "Nothing fixes you because you are not broken. Hypnosis creates conditions for your own system to do what it already knows how to do. It does not install new programming. It does not override your will. It creates access to parts of yourself that have been doing important work below the surface, and it gives you a way to work with them directly.",
      },
    ],
  },
  {
    title: "About Private Sessions",
    faqs: [
      {
        q: "What should I expect in a first session?",
        a: "The first session is 90 minutes. It begins with an intake conversation that is part of the work, not just paperwork. We talk about what you are carrying, where your body holds it, and what you are hoping for. Then we move into a full hypnosis session adapted to what your system is ready for. You will leave with something you can practice on your own.",
      },
      {
        q: "How many sessions will I need?",
        a: "That depends on what you are working with and how your system responds. Some people experience significant shifts in a few sessions. Others are doing deeper work that takes longer. You will hear honest feedback about what is being observed and what the work needs. Sessions will never be extended beyond what is useful.",
      },
      {
        q: "Do you offer virtual sessions?",
        a: "Yes. Virtual sessions are conducted over secure video. Many clients find virtual sessions as effective as in-person, particularly after the first session establishes the working relationship.",
      },
    ],
  },
  {
    title: "About the CPH Training",
    faqs: [
      {
        q: "Do I need prior experience with hypnosis?",
        a: "No. The program is built from the ground up. What is required is willingness to do the work, which includes your own personal material. You cannot hold space for someone else's pain if you have not faced your own.",
      },
      {
        q: "Is this program accredited?",
        a: "The program is aligned with the International Certification Board of Clinical Hypnotherapists (ICBCH). Graduates receive the Certified Professional Hypnotist (CPH) designation, which is recognized internationally.",
      },
      {
        q: "What is the time commitment?",
        a: "100 hours total. Five intensive weekends (48 hours live) plus 52 hours of online self-paced work completed between weekends. The program is designed for working professionals.",
      },
    ],
  },
  {
    title: "General",
    faqs: [
      {
        q: "Who is behind this work?",
        a: "Miskwa Kimiwan is the practitioner, author, and curriculum developer behind everything on this site. The hypnosis work here is one arm of a larger body of work built on the same philosophical foundations, including Quantum Shamanic Reiki, Living The Light Sacred Alchemy, and published books including Red Rain: A Soul Shattered and The Book of Questions.",
      },
      {
        q: "How do I cancel or reschedule a session?",
        a: "Cancellation and rescheduling policies are provided at the time of booking. Please provide at least 48 hours notice for cancellations.",
      },
    ],
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="py-24 px-6" style={{ backgroundColor: "#2F2925" }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-6" style={{ color: "#B38A32" }}>
            FAQ
          </p>
          <h1
            className="text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: "Georgia, serif", color: "#EADDC8" }}
          >
            Common Questions
          </h1>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EADDC8" }}>
        <div className="max-w-2xl mx-auto space-y-12">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h2
                className="text-xs uppercase tracking-widest mb-6"
                style={{ color: "#8A4F36" }}
              >
                {cat.title}
              </h2>
              <div className="space-y-2">
                {cat.faqs.map((faq) => {
                  const key = `${cat.title}-${faq.q}`;
                  const isOpen = open === key;
                  return (
                    <div
                      key={faq.q}
                      className="rounded overflow-hidden"
                      style={{ border: "1px solid #d4c4a8" }}
                    >
                      <button
                        className="w-full text-left px-6 py-4 flex justify-between items-center gap-4 transition-colors"
                        style={{
                          backgroundColor: isOpen ? "#2F2925" : "#EADDC8",
                          color: isOpen ? "#EADDC8" : "#2F2925",
                        }}
                        onClick={() => setOpen(isOpen ? null : key)}
                      >
                        <span
                          className="text-sm font-medium"
                          style={{ fontFamily: "Georgia, serif" }}
                        >
                          {faq.q}
                        </span>
                        <span className="text-xl flex-shrink-0 leading-none">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      {isOpen && (
                        <div
                          className="px-6 py-5 text-sm leading-relaxed"
                          style={{ backgroundColor: "#f5ede0", color: "#2F2925" }}
                        >
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
