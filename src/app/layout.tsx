import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterBar from "@/components/NewsletterBar";

export const metadata: Metadata = {
  title: {
    default: "Trance Medicine",
    template: "%s | Trance Medicine",
  },
  description:
    "Body-centered, evidence-informed hypnosis for healing, learning, and practice. The Quiet Fire CPH certification, private sessions, and the Trance Medicine book.",
  metadataBase: new URL("https://trancemedicine.com"),
  openGraph: {
    siteName: "Trance Medicine",
    locale: "en_CA",
    type: "website",
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
