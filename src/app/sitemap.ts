import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://k2inked.pl/", lastModified: new Date() },
    { url: "https://k2inked.pl/galeria", lastModified: new Date() },
    { url: "https://k2inked.pl/kontakt", lastModified: new Date() },
    { url: "https://k2inked.pl/regulamin", lastModified: new Date() },
    {
      url: "https://k2inked.pl/polityka-prywatnosci",
      lastModified: new Date(),
    },
    { url: "https://k2inked.pl/klaudia", lastModified: new Date() },
    { url: "https://k2inked.pl/kari", lastModified: new Date() },
    { url: "https://k2inked.pl/sonia", lastModified: new Date() },
    { url: "https://k2inked.pl/ewelina", lastModified: new Date() },
    { url: "https://k2inked.pl/mirella", lastModified: new Date() },
    { url: "https://k2inked.pl/emi", lastModified: new Date() },
  ];
}
