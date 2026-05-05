import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterBar from "@/components/NewsletterBar";

export const metadata: Metadata = {
  title: {
    default: "Trance Medicine | Body-Centered Hypnosis for Healing & Practice",
    template: "%s | Trance Medicine",
  },
  description:
    "Trance Medicine offers body-centered, evidence-informed hypnosis — private sessions, the Quiet Fire CPH certification, and the book that reframes what hypnosis can do.",
  metadataBase: new URL("https://trancemedicine.com"),
  keywords: [
    "trance medicine",
    "hypnosis",
    "clinical hypnosis",
    "body-centered hypnosis",
    "evidence-informed hypnosis",
    "somatic hypnosis",
    "trauma-informed hypnosis",
    "hypnosis book",
    "certified professional hypnotist",
    "CPH certification",
    "ICBCH certification",
    "hypnosis training Canada",
    "private hypnosis sessions",
    "Miskwa Kimiwan",
    "online hypnosis",
    "hypnosis certification",
    "Dark Horse Healing Lodge",
  ],
  authors: [{ name: "Miskwa Kimiwan" }],
  openGraph: {
    siteName: "Trance Medicine",
    locale: "en_CA",
    type: "website",
    title: "Trance Medicine | Body-Centered Hypnosis for Healing & Practice",
    description:
      "Body-centered, evidence-informed hypnosis. Private sessions, CPH certification training, and the book Trance Medicine by Miskwa Kimiwan.",
    url: "https://trancemedicine.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trance Medicine | Body-Centered Hypnosis",
    description:
      "Body-centered, evidence-informed hypnosis. Private sessions, CPH certification training, and the book Trance Medicine.",
  },
  alternates: {
    canonical: "https://trancemedicine.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <NewsletterBar />
        <Footer />
      </body>
    </html>
  );
}
