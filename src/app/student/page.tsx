import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Student Portal",
  description: "Student login for enrolled Quiet Fire CPH participants.",
};

export default function StudentPortal() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 py-24"
      style={{ backgroundColor: "#2F2925" }}
    >
      <div className="max-w-md w-full text-center">
        <p className="text-xs uppercase tracking-widest mb-6" style={{ color: "#B38A32" }}>
          The Quiet Fire CPH
        </p>
        <h1
          className="text-3xl mb-4"
          style={{ fontFamily: "Georgia, serif", color: "#EADDC8" }}
        >
          Student Portal
        </h1>
        <p className="text-sm leading-relaxed mb-8" style={{ color: "#d4c4a8" }}>
          Welcome back. Your course materials, assignments, and discussion boards are inside. Log in with the
          credentials you received at enrollment.
        </p>
        <a
          href="#"
          className="inline-block w-full py-4 text-sm font-semibold rounded transition-opacity hover:opacity-90 mb-4"
          style={{ backgroundColor: "#D9AA3A", color: "#2F2925" }}
        >
          Student Login
        </a>
        <p className="text-xs" style={{ color: "#B38A32" }}>
          Not yet enrolled?{" "}
          <Link href="/training/cph" className="underline hover:text-[#D9AA3A]">
            Learn about the CPH program
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
