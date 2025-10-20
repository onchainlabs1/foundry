import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AIMS Studio — ISO 42001 & EU AI Act Compliance Platform",
  description: "Centralize AI systems, classify risk, map controls and generate Annex IV, FRIA and SoA documentation with SHA-256 integrity.",
  keywords: [
    "AI management system",
    "ISO 42001",
    "EU AI Act",
    "AI inventory",
    "AI risk classification",
    "Annex IV",
    "FRIA",
    "SoA",
    "AI compliance",
    "evidence management",
    "SHA-256",
    "AI governance"
  ],
  authors: [{ name: "AIMS Studio" }],
  creator: "AIMS Studio",
  publisher: "AIMS Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://aims-studio.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aims-studio.com",
    title: "AIMS Studio — ISO 42001 & EU AI Act Compliance Platform",
    description: "Centralize AI systems, classify risk, map controls and generate Annex IV, FRIA and SoA documentation with SHA-256 integrity.",
    siteName: "AIMS Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIMS Studio — ISO 42001 & EU AI Act Compliance Platform",
    description: "Centralize AI systems, classify risk, map controls and generate Annex IV, FRIA and SoA documentation with SHA-256 integrity.",
    creator: "@aimsstudio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AIMS Studio",
              url: "https://aims-studio.com",
              logo: "https://aims-studio.com/logo.png",
              description: "AI Management System for ISO 42001 and EU AI Act compliance — from AI inventory to Annex IV documentation.",
              sameAs: [
                "https://linkedin.com/company/aims-studio"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "English"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
