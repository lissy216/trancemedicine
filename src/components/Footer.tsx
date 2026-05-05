import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#2F2925", color: "#EADDC8" }} className="pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Tagline */}
        <div className="mb-12 pb-8" style={{ borderBottom: "1px solid #3d342e" }}>
          <p style={{ fontFamily: "Georgia, serif", fontSize: "1.125rem", color: "#D9AA3A" }} className="max-w-xl">
            Structured, honest, body-centered training and healing that creates sovereignty, not dependency.
          </p>
        </div>

        {/* Four columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B38A32" }}>
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "FAQ", href: "/faq" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[#D9AA3A] transition-colors" style={{ color: "#EADDC8" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B38A32" }}>
              Programs
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "CPH Certification", href: "/training/cph" },
                { label: "Workshops & Retreats", href: "/training/workshops" },
                { label: "Private Sessions", href: "/sessions/private" },
                { label: "Group Programs", href: "/sessions/groups" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[#D9AA3A] transition-colors" style={{ color: "#EADDC8" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B38A32" }}>
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "The Newsletter", href: "/newsletter" },
                { label: "The Book", href: "/book" },
                { label: "Contact", href: "/contact" },
                { label: "Student Login", href: "/student" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[#D9AA3A] transition-colors" style={{ color: "#EADDC8" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B38A32" }}>
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Privacy Policy", href: "/legal#privacy" },
                { label: "Terms of Service", href: "/legal#terms" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[#D9AA3A] transition-colors" style={{ color: "#EADDC8" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <div
                className="inline-block px-3 py-1 text-xs rounded"
                style={{ border: "1px solid #B38A32", color: "#B38A32" }}
              >
                ICBCH Aligned
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2" style={{ borderTop: "1px solid #3d342e" }}>
          <p className="text-xs" style={{ color: "#8A4F36" }}>
            © {year} Trance Medicine. Miskwa Kimiwan. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "#8A4F36" }}>
            trancemedicine.com
          </p>
        </div>
      </div>
    </footer>
  );
}
