import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="min-h-screen flex items-center justify-center px-6 py-24"
        style={{ backgroundColor: "#2F2925" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest mb-8" style={{ color: "#B38A32" }}>
            Trance Medicine
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ fontFamily: "Georgia, serif", color: "#EADDC8" }}
          >
            Healing is not about escaping the thing that is hurting you. It is about becoming conscious of it.
          </h1>
          <div className="mt-16 w-8 h-px mx-auto" style={{ backgroundColor: "#D9AA3A" }} />
        </div>
      </section>

      {/* The Gap */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EADDC8" }}>
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl mb-8"
            style={{ fontFamily: "Georgia, serif", color: "#2F2925" }}
          >
            The Gap
          </h2>
          <div className="space-y-5 text-base leading-relaxed" style={{ color: "#2F2925" }}>
            <p>
              You have tried to think your way out of it. You have read the books, said the affirmations, told
              yourself it was behind you. And still your body holds what your mind keeps insisting is finished.
            </p>
            <p>
              Most of what passes for healing asks you to perform recovery. Smile. Affirm. Rise above. The hypnosis
              industry is no different. Stage tricks on one end. Clinical detachment on the other. Manifestation
              promises in the middle. None of them sit with you in the place where the weight actually lives.
            </p>
            <p>
              There is a different way to work. It starts with the body, not the mind. It requires honesty, not
              performance. And it does not need a guru, a pedestal, or anyone else&apos;s participation. Just you,
              willing to stay.
            </p>
          </div>
        </div>
      </section>

      {/* What This Work Is */}
      <section className="py-20 px-6" style={{ backgroundColor: "#2F2925" }}>
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl mb-8"
            style={{ fontFamily: "Georgia, serif", color: "#D9AA3A" }}
          >
            What This Work Is
          </h2>
          <p className="text-base leading-relaxed mb-6" style={{ color: "#EADDC8" }}>
            Hypnosis as it was meant to be practiced. Body-centered. Evidence-informed. Built from personal crisis,
            not from a textbook. The practitioner has done the work. The philosophical foundations are: you are
            already whole, your body holds intelligence your mind has not caught up to yet, and every technique you
            learn here becomes yours to carry forward without anyone else&apos;s help.
          </p>
          <p className="text-base italic" style={{ color: "#B38A32" }}>
            No masters. No pedestals. The guide has bled too.
          </p>
        </div>
      </section>

      {/* Three Pathways */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EADDC8" }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl mb-12 text-center"
            style={{ fontFamily: "Georgia, serif", color: "#2F2925" }}
          >
            Where do you want to begin?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "I Want to Heal",
                body: "You are carrying something and you are ready to put it down. Private sessions and group programs designed around your body’s own intelligence, held by someone who will not rush you and will not lie about what is ahead.",
                button: "Explore Sessions",
                href: "/sessions/private",
              },
              {
                title: "I Want to Learn",
                body: "You want to practice hypnosis at a level the field has not trained you for. A 100-hour ICBCH-aligned certification, workshops, and a book that rewrites what you thought you knew about this work.",
                button: "See the Training",
                href: "/training/cph",
              },
              {
                title: "I Want to Understand",
                body: "You are not ready to book or enroll. You are ready to read. A weekly newsletter that teaches one idea with depth, and a book that will change how you understand hypnosis, healing, and the body.",
                button: "Start Reading",
                href: "/newsletter",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-8 rounded flex flex-col"
                style={{ backgroundColor: "#2F2925", color: "#EADDC8" }}
              >
                <h3
                  className="text-xl mb-4"
                  style={{ fontFamily: "Georgia, serif", color: "#D9AA3A" }}
                >
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed mb-8 flex-1">{card.body}</p>
                <Link
                  href={card.href}
                  className="inline-block text-center text-sm font-semibold px-6 py-3 rounded transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#D9AA3A", color: "#2F2925" }}
                >
                  {card.button}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6" style={{ backgroundColor: "#3d342e" }}>
        <div className="max-w-4xl mx-auto">
          <div
            className="flex flex-wrap justify-center gap-6 mb-12 text-xs uppercase tracking-widest text-center"
            style={{ color: "#B38A32" }}
          >
            <span>ICBCH-Aligned Training</span>
            <span>&middot;</span>
            <span>100 Hours</span>
            <span>&middot;</span>
            <span>Evidence-Informed</span>
            <span>&middot;</span>
            <span>Body-Centered</span>
          </div>
          <blockquote className="text-center max-w-2xl mx-auto">
            <p
              className="text-xl md:text-2xl leading-relaxed mb-6"
              style={{ fontFamily: "Georgia, serif", color: "#EADDC8" }}
            >
              &ldquo;I came in carrying something I could not name. I left knowing what it was, and that I could carry
              it differently.&rdquo;
            </p>
            <cite className="text-sm" style={{ color: "#B38A32" }}>
              &mdash; Session participant
            </cite>
          </blockquote>
        </div>
      </section>
    </>
  );
}
