import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Group Programs",
  description:
    "Ongoing group healing and training programs. A different kind of container — for people ready to do the work in the presence of others doing it too.",
};

export default function GroupPrograms() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 px-6" style={{ backgroundColor: "#2F2925" }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-6" style={{ color: "#B38A32" }}>
            Work With Me
          </p>
          <h1
            className="text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: "Georgia, serif", color: "#EADDC8" }}
          >
            Group Programs
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EADDC8" }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-base leading-relaxed mb-6" style={{ color: "#2F2925" }}>
            Group work is not diluted individual work. It is a different kind of container. There are things a group
            can hold that one person alone cannot, and things that surface in a room of people who are willing to be
            honest that would never surface in a private session.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#2F2925" }}>
            These programs are built for people who are ready to do the work in the presence of others who are
            doing it too.
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
            The next group program is being formed.
          </h2>
          <p className="text-sm mb-8" style={{ color: "#d4c4a8" }}>
            If you want to be in the first cohort, put your name on the list. When it opens, you will hear from us
            before anyone else.
          </p>
          <Link
            href="/newsletter"
            className="inline-block text-sm font-semibold px-8 py-4 rounded transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#D9AA3A", color: "#2F2925" }}
          >
            Join the Waitlist
          </Link>
        </div>
      </section>
    </>
  );
}
