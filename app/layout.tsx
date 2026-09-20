import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist, Newsreader, Manrope, DM_Sans, Instrument_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fusion Folio — Your 360° Creative & Digital Partner",
  description:
    "Websites, experiences, motion, reels and Meta campaigns. One connected team to bring your brand forward.",
  metadataBase: new URL("https://fusionfolio.com"),
  openGraph: {
    title: "Fusion Folio — 360° Creative & Digital Agency",
    description:
      "Websites, experiences, motion, reels and Meta campaigns. One connected team to bring your brand forward.",
    url: "https://fusionfolio.com",
    siteName: "Fusion Folio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fusion Folio — 360° Creative & Digital Agency",
    description:
      "Websites, experiences, motion, reels and Meta campaigns. One connected team to bring your brand forward.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://fusionfolio.com/#organization",
      name: "Fusion Folio",
      url: "https://fusionfolio.com",
      logo: "https://fusionfolio.com/fusion-folio-logo.png",
      description:
        "Global 360° creative and digital agency specializing in high-performance web engineering, brand design systems, viral reels, and Meta ads.",
      sameAs: [
        "https://twitter.com/fusionfolio",
        "https://linkedin.com/company/fusionfolio",
        "https://github.com/fusionfolio",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support & Sales",
        email: "hello@fusionfolio.com",
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://fusionfolio.com/#website",
      url: "https://fusionfolio.com",
      name: "Fusion Folio",
      publisher: {
        "@id": "https://fusionfolio.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${geist.variable} ${newsreader.variable} ${manrope.variable} ${dmSans.variable} ${instrumentSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
