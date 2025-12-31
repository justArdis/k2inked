import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { cn } from "@/utils";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { CookiesBanner } from "@/components/CookiesBanner/CookiesBanner";

const inconsolata = localFont({
  src: "./Fonts/Inconsolata.woff2",
  variable: "--font-inconsolata",
  weight: "400 500 600 700",
});

const marcellusSC = localFont({
  src: "./Fonts/MarcellusSC.woff2",
  variable: "--font-marcellus-sc",
  weight: "500 700",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://k2inked.pl"), // to change later to real domain
  title: {
    default: "K2.inked — Studio tatuażu Warszawa",
    template: "%s | K2.inked — Studio tatuażu Warszawa",
  },
  description:
    "K2.inked — profesjonalne studio tatuażu w sercu Warszawy. Autorskie projekty, higiena, precyzja i indywidualne podejście. Zarezerwuj termin.",
  keywords: [
    "tatuaż Warszawa",
    "studio tatuażu Warszawa",
    "tattoo Warsaw",
    "piercing Warszawa",
    "dotwork",
    "blackwork",
    "fineline",
    "realism",
    "k2inked",
    "K2 inked",
  ],
  applicationName: "K2.inked",
  authors: [{ name: "Agata Kuklińska" }],
  creator: "Agata Kuklińska",
  publisher: "K2.inked",
  alternates: {
    canonical: "/",
    languages: {
      "pl-PL": "/",
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "K2.inked — Studio tatuażu Warszawa",
    description:
      "Profesjonalne studio tatuażu w sercu Warszawy. Zobacz portfolio artystek i umów wizytę.",
    siteName: "K2.inked",
    locale: "pl_PL",
    images: [
      {
        url: "/og/k2-og.jpg", // <-- export a 1200x630 image, add later
        width: 1200,
        height: 630,
        alt: "K2.inked — Studio tatuażu Warszawa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "K2.inked — Studio tatuażu Warszawa",
    description:
      "Profesjonalne studio tatuażu, higiena i precyzja. Zarezerwuj termin w K2.inked.",
    // images: ["/og/k2-og.jpg"], <-- to add later if needed
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "beauty",
  verification: {
    // To replace later with real codes
    google: "", // e.g. "google-site-verification-code"
    //other: { "facebook-domain-verification": [""] },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" data-scroll-behavior="smooth">
      <body
        className={cn(
          inconsolata.variable,
          marcellusSC.variable,
          "font-inconsolata text-dark flex min-h-screen flex-col antialiased",
        )}
      >
        <Header />
        <main className="flex-grow">{children}
          <CookiesBanner/>
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <Script
          id="ld-localbusiness"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TattooParlor",
            name: "K2.inked",
            url: "https://k2inked.pl", 
            telephone: "+48 883 308 451",
            priceRange: "$$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Krucza 47A",
              addressLocality: "Warszawa",
              postalCode: "00-509",
              addressCountry: "PL",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 52.2302385893085,
              longitude: 21.016352031548752,
            },
            sameAs: [
              "https://www.instagram.com/k2.inked",
              "https://www.facebook.com/k2.inked",
            ],
          })}
        </Script>
      </body>
    </html>
  );
}
