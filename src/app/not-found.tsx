import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 py-24"
      style={{ backgroundColor: "#2F2925" }}
    >
      <div className="max-w-md text-center">
        <p className="text-xs uppercase tracking-widest mb-6" style={{ color: "#B38A32" }}>
          404
        </p>
        <h1
          className="text-3xl md:text-4xl mb-6"
          style={{ fontFamily: "Georgia, serif", color: "#EADDC8" }}
        >
          This page does not exist.
        </h1>
        <p className="text-base mb-10" style={{ color: "#d4c4a8", fontFamily: "Georgia, serif" }}>
          But you do, and you are here, and that is enough for now.
        </p>
        <Link
          href="/"
          className="inline-block text-sm font-semibold px-8 py-4 rounded transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#D9AA3A", color: "#2F2925" }}
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}
