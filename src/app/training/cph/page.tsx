import type { Metadata } from "next";
import CPHClient from "./CPHClient";

export const metadata: Metadata = {
  title: "The Quiet Fire — Certified Professional Hypnotist (CPH) Training",
  description:
    "100-hour ICBCH-aligned hypnosis certification by Miskwa Kimiwan. The Quiet Fire CPH program builds body-centered, evidence-informed hypnosis practitioners — not script-readers.",
  alternates: { canonical: "https://trancemedicine.com/training/cph" },
  openGraph: {
    title: "The Quiet Fire — CPH Certification | Trance Medicine",
    description:
      "100 hours. ICBCH-aligned. Body-centered. The Quiet Fire Certified Professional Hypnotist program trains practitioners to do real hypnosis work, not perform it.",
    url: "https://trancemedicine.com/training/cph",
    type: "website",
  },
};

export default function CPH() {
  return <CPHClient />;
}
