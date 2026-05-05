import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://trancemedicine.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/book`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/sessions/private`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/training/cph`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/newsletter`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/training/workshops`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/sessions/groups`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/legal`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
