"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "What are the prerequisites?",
    a: "None. This program is designed for beginners and experienced practitioners. What is required is willingness to do the work, including your own.",
  },
  {
    q: "Can I complete it while working full-time?",
    a: "Yes. The five weekends are intensive but scheduled to accommodate working professionals. The 52 online hours are self-paced and can be completed between weekends.",
  },
  {
    q: "What is the difference between CPH and other hypnosis certifications?",
    a: "Most hypnosis certifications teach technique. This one teaches a way of being with the client that makes every technique more effective. The 100-hour structure, the ICBCH alignment, the evidence-informed approach, and the philosophical foundations are not standard in the field. They should be.",
  },
  {
    q: "What can I do with this certification?",
    a: "Practice hypnosis professionally within CPH scope. Many graduates integrate hypnosis into existing therapeutic, coaching, or healing practices. Others build standalone hypnosis practices. The certification provides the professional standing and the clinical depth to do either.",
  },
];

export default function CPHClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="py-24 px-6" style={{ backgroundColor: "#2F2925" }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B38A32" }}>
            Training
          </p>
          <h1
            className="text-4xl md:text-5xl leading-tight mb-4"
            style={{ fontFamily: "Georgia, serif", color: "#EADDC8" }}
          >
            The Quiet Fire
          </h1>
          <p className="text-lg mb-6" style={{ color: "#B38A32" }}>
            Certified Professional Hypnotist &nbsp;|&nbsp; 100 Hours &nbsp;|&nbsp; ICBCH-Aligned
          </p>
          <p className="text-base" style={{ color: "#d4c4a8" }}>
            Built for practitioners who want to do real work, not perform it.
          </p>
        </div>
      </section>

      {/* Who It&apos;s For */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EADDC8" }}>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2
              className="text-2xl mb-6"
              style={{ fontFamily: "Georgia, serif", color: "#2F2925" }}
            >
              Who This Training Is For
            </h2>
            <ul className="space-y-3 text-sm leading-relaxed" style={{ color: "#2F2925" }}>
              {[
                "You want to practice hypnosis at a professional level with the rigor and depth the work demands.",
                "You are a therapist adding hypnosis to your practice.",
                "A career changer entering the healing field because something in your own experience told you this is where you belong.",
                "An existing practitioner who finished a certification and knew, before the ink was dry, that it was not enough.",
                "You want training that starts with what you believe about the person sitting across from you, not with a script.",
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
              Who This Training Is Not For
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#2F2925" }}>
              If you are collecting certificates, this program will feel like too much work. If you want a weekend
              credential, this is 100 hours and you will feel every one of them. If you are looking for scripts to
              memorize rather than a practice to embody, you will be uncomfortable here. That discomfort is the
              point. The people who sit across from you deserve a practitioner who has done more than memorize a
              script.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophical Foundations */}
      <section className="py-20 px-6" style={{ backgroundColor: "#2F2925" }}>
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl mb-6"
            style={{ fontFamily: "Georgia, serif", color: "#D9AA3A" }}
          >
            What Makes This Program Different
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: "#EADDC8" }}>
            Before we teach you a single induction, you need to understand what you believe about the person
            sitting across from you.
          </p>
          <p className="text-base leading-relaxed mb-8" style={{ color: "#EADDC8" }}>
            This program is built on six philosophical foundations that most hypnosis training skips. The client is
            already whole. You are not installing capacity or fixing what is broken. You are creating conditions
            safe enough for their system to do what it already knows how to do. The body holds four kinds of
            intelligence, and this program does not treat the somatic as a warm-up act for the cognitive. Every
            technique transfers to the client, because the goal of this work is for the client to stop needing you.
            And acceptance and transformation are not opposites. You cannot transform what you refuse to
            acknowledge.
          </p>
          <p className="text-sm italic" style={{ color: "#B38A32" }}>
            These are not abstract philosophy. They change how you conduct an intake, how you write a suggestion,
            how you structure a session, and how you sit in silence when the client&apos;s body starts doing
            something you did not plan for.
          </p>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EADDC8" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl mb-4"
            style={{ fontFamily: "Georgia, serif", color: "#2F2925" }}
          >
            Program Structure
          </h2>
          <p className="text-sm mb-10" style={{ color: "#8A4F36" }}>
            100 hours total &mdash; 48 live across five intensive weekends &mdash; 52 online, self-paced
          </p>
          <div className="space-y-6">
            {[
              {
                label: "Modules 1–3",
                title: "Knowledge Foundation",
                desc: "History and science of hypnosis. The nature of trance and models of mind. Suggestibility, assessment, and client intake. The intellectual ground you need before you touch a technique.",
              },
              {
                label: "Modules 4–5",
                title: "Professional Foundation",
                desc: "Ethics, law, and professional standards. Safety, contraindications, and referral. Knowing when not to proceed is the clinical skill that separates a trained practitioner from a dangerous one.",
              },
              {
                label: "Modules 6–10",
                title: "Clinical Foundation",
                desc: "Induction techniques. Deepening and trance maintenance. Suggestion writing: direct, indirect, and post-hypnotic. Complete session structure and script development. Self-hypnosis instruction for clients.",
              },
              {
                label: "Modules 11–19",
                title: "Advanced Practice",
                desc: "Specialized applications, advanced techniques, supervised practice, and integration. The work that turns a competent practitioner into someone who can hold what walks through the door.",
              },
            ].map((phase) => (
              <div
                key={phase.label}
                className="p-6 rounded"
                style={{ backgroundColor: "#2F2925" }}
              >
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#B38A32" }}>
                  {phase.label}
                </p>
                <h3
                  className="text-lg mb-3"
                  style={{ fontFamily: "Georgia, serif", color: "#D9AA3A" }}
                >
                  {phase.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#EADDC8" }}>
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 px-6" style={{ backgroundColor: "#2F2925" }}>
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl mb-8"
            style={{ fontFamily: "Georgia, serif", color: "#D9AA3A" }}
          >
            What You Will Be Able to Do
          </h2>
          <ul className="space-y-3 text-sm leading-relaxed" style={{ color: "#EADDC8" }}>
            {[
              "Conduct a thorough intake and assessment.",
              "Select and deliver inductions matched to the specific person in front of you, not a script.",
              "Write custom suggestions grounded in the client's own language.",
              "Structure a complete session arc from intake through emergence and debrief.",
              "Teach clients self-hypnosis they can carry forward without you.",
              "Recognize scope boundaries and make appropriate referrals.",
              "Practice with the confidence of someone trained to a standard the field needs.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span style={{ color: "#B38A32", flexShrink: 0 }}>—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Investment */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EADDC8" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-2xl mb-4"
            style={{ fontFamily: "Georgia, serif", color: "#2F2925" }}
          >
            Investment
          </h2>
          <p className="text-sm mb-8" style={{ color: "#2F2925" }}>
            Tuition, payment plan options, and enrollment dates are announced to the waitlist first.
          </p>
          <Link
            href="/contact"
            className="inline-block text-sm font-semibold px-8 py-4 rounded transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#D9AA3A", color: "#2F2925" }}
          >
            Join the Waitlist
          </Link>
          <div className="mt-8 inline-block px-4 py-2 text-xs rounded" style={{ border: "1px solid #B38A32", color: "#8A4F36" }}>
            ICBCH Aligned &nbsp;&mdash;&nbsp; Certified Professional Hypnotist (CPH)
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="py-20 px-6" style={{ backgroundColor: "#3d342e" }}>
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl mb-4"
            style={{ fontFamily: "Georgia, serif", color: "#EADDC8" }}
          >
            Your Instructor
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#d4c4a8" }}>
            Miskwa Kimiwan built this curriculum from the intersection of personal practice, published research, and
            the conviction that the hypnosis field can do better. Author of Trance Medicine, and a practitioner
            whose work sits in the gap between clinical distance and spiritual bypassing.
          </p>
          <Link
            href="/about"
            className="text-sm hover:opacity-80 transition-opacity"
            style={{ color: "#D9AA3A" }}
          >
            Read the Full Story &rarr;
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EADDC8" }}>
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl mb-8"
            style={{ fontFamily: "Georgia, serif", color: "#2F2925" }}
          >
            Common Questions
          </h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded overflow-hidden"
                style={{ border: "1px solid #d4c4a8" }}
              >
                <button
                  className="w-full text-left px-6 py-4 flex justify-between items-center gap-4"
                  style={{ backgroundColor: openFaq === i ? "#2F2925" : "#EADDC8", color: openFaq === i ? "#EADDC8" : "#2F2925" }}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-sm font-medium" style={{ fontFamily: "Georgia, serif" }}>{faq.q}</span>
                  <span className="text-lg flex-shrink-0">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 py-4 text-sm leading-relaxed" style={{ backgroundColor: "#f5ede0", color: "#2F2925" }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
