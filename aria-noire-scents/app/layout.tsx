import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE_URL, site } from "../lib/site";

const serif = localFont({
  src: [
    { path: "./fonts/cormorant-garamond-latin-wght-normal.woff2", style: "normal" },
    { path: "./fonts/cormorant-garamond-latin-wght-italic.woff2", style: "italic" },
  ],
  weight: "300 700",
  variable: "--font-serif",
  display: "swap",
});

const sans = localFont({
  src: "./fonts/jost-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: site.title,
  description: site.description,
  keywords: [
    "Aria Noire Scents",
    "fragrance collection",
    "perfume",
    "Arabian fragrances",
    "Middle Eastern fragrances",
    "oud",
    "luxury perfume",
  ],
  applicationName: site.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_US",
    images: [
      {
        url: site.logo,
        width: site.logoSize,
        height: site.logoSize,
        alt: "Aria Noire Scents logo — Elegance in Every Note",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.logo],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FDFBF7",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
