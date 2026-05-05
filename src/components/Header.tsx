"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Trance Medicine",
    children: [
      { label: "The Book", href: "/book" },
      { label: "The Newsletter", href: "/newsletter" },
    ],
  },
  {
    label: "Training",
    children: [
      { label: "CPH Certification", href: "/training/cph" },
      { label: "Workshops & Retreats", href: "/training/workshops" },
    ],
  },
  {
    label: "Work With Me",
    children: [
      { label: "Private Sessions", href: "/sessions/private" },
      { label: "Group Programs", href: "/sessions/groups" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header
      style={{ backgroundColor: "#2F2925", color: "#EADDC8" }}
      className="sticky top-0 z-50 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex-shrink-0"
          style={{ fontFamily: "Georgia, serif", fontSize: "1.25rem", letterSpacing: "0.05em", color: "#D9AA3A" }}
        >
          Trance Medicine
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button
                  className="flex items-center gap-1 text-sm hover:text-[#D9AA3A] transition-colors duration-200"
                  style={{ color: "#EADDC8" }}
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.label}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  </svg>
                </button>
                <div
                  className="absolute top-full left-0 pt-2 z-50"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  style={{ display: openDropdown === item.label ? "block" : "none" }}
                >
                  <div
                    className="rounded shadow-lg py-2 min-w-[200px]"
                    style={{ backgroundColor: "#3d342e", border: "1px solid #B38A32" }}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm hover:text-[#D9AA3A] hover:bg-[#2F2925] transition-colors"
                        style={{ color: "#EADDC8" }}
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className="text-sm hover:text-[#D9AA3A] transition-colors duration-200"
                style={{ color: "#EADDC8" }}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Utility Nav */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/newsletter"
            className="text-sm px-4 py-2 rounded transition-colors"
            style={{ backgroundColor: "#D9AA3A", color: "#2F2925", fontWeight: "600" }}
          >
            Subscribe
          </Link>
          <Link
            href="/student"
            className="text-sm hover:text-[#D9AA3A] transition-colors"
            style={{ color: "#EADDC8" }}
          >
            Student Login
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2"
          style={{ color: "#EADDC8" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <>
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="lg:hidden px-6 pb-6 pt-2 flex flex-col gap-1" style={{ backgroundColor: "#2F2925", borderTop: "1px solid #3d342e" }}>
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <div className="text-xs uppercase tracking-widest py-2 mt-2" style={{ color: "#B38A32" }}>
                  {item.label}
                </div>
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block py-2 pl-3 text-sm hover:text-[#D9AA3A]"
                    style={{ color: "#EADDC8" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className="block py-2 text-sm hover:text-[#D9AA3A]"
                style={{ color: "#EADDC8" }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="/newsletter"
              className="text-sm text-center px-4 py-2 rounded"
              style={{ backgroundColor: "#D9AA3A", color: "#2F2925", fontWeight: "600" }}
              onClick={() => setMobileOpen(false)}
            >
              Subscribe
            </Link>
            <Link
              href="/student"
              className="text-sm text-center py-2 hover:text-[#D9AA3A]"
              style={{ color: "#EADDC8" }}
              onClick={() => setMobileOpen(false)}
            >
              Student Login
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
