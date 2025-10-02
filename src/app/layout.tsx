import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Governance & EU AI Act | ISO/IEC 42001 (AIMS) | Foundry AI Governance",
  description: "We operationalize AI governance and EU AI Act compliance with ISO/IEC 42001 and Annex IV evidence — from discovery to post-market monitoring. Book a 30-min consultation.",
  keywords: [
    "AI governance",
    "EU AI Act",
    "ISO/IEC 42001",
    "AIMS",
    "AI compliance",
    "AI risk management",
    "AI transparency",
    "AI audit",
    "machine learning governance",
    "AI ethics"
  ],
  authors: [{ name: "Foundry AI Governance" }],
  creator: "Foundry AI Governance",
  publisher: "Foundry AI Governance",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://foundry-ai-governance.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://foundry-ai-governance.com",
    title: "AI Governance & EU AI Act | ISO/IEC 42001 (AIMS) | Foundry AI Governance",
    description: "We operationalize AI governance and EU AI Act compliance with ISO/IEC 42001 and Annex IV evidence — from discovery to post-market monitoring. Book a 30-min consultation.",
    siteName: "Foundry AI Governance",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Governance & EU AI Act | ISO/IEC 42001 (AIMS) | Foundry AI Governance",
    description: "We operationalize AI governance and EU AI Act compliance with ISO/IEC 42001 and Annex IV evidence — from discovery to post-market monitoring. Book a 30-min consultation.",
    creator: "@foundryaigov",
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
              name: "Foundry AI Governance",
              url: "https://foundry-ai-governance.com",
              logo: "https://foundry-ai-governance.com/logo.png",
              description: "We operationalize AI governance and EU AI Act compliance with ISO/IEC 42001 and Annex IV evidence — from discovery to post-market monitoring.",
              sameAs: [
                "https://linkedin.com/company/foundry-ai-governance"
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
