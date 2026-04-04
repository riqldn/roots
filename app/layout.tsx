import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import LenisProvider from "./components/lenis-provider";
import ReactLenis from "lenis/react";

const instrument = localFont({
  src: "../fonts/InstrumentSans.woff2",
  variable: "--font-instrument",
  weight: "100 600",
});

export const metadata = {
  title: "Roots Policy Consulting - Political Risk & Policy Intelligence",
  description:
    "Roots Policy Consulting delivers political risk analysis and policy intelligence across West Africa’s most complex markets, helping organisations make informed strategic decisions.",

  keywords: [
    "political risk consulting",
    "policy analysis",
    "West Africa intelligence",
    "geopolitical risk",
    "policy advisory",
    "risk assessment",
    "market entry strategy",
    "government relations consulting",
    "Africa political risk",
    "strategic intelligence",
  ],

  metadataBase: new URL("https://riserootsgroup.co.uk"),

  alternates: {
    canonical: "https://riserootsgroup.co.uk",
  },

  openGraph: {
    title: "Roots Policy Consulting - Political Risk & Policy Intelligence",
    description:
      "Expert political risk and policy analysis across West Africa, helping organisations navigate complex regulatory and geopolitical environments.",
    url: "https://riserootsgroup.co.uk",
    siteName: "Roots Policy Consulting",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // put this in /public
        width: 1200,
        height: 630,
        alt: "Roots Policy Consulting",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Roots Policy Consulting",
    description:
      "Political risk & policy intelligence across West Africa’s most complex markets.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrument.variable} h-full antialiased`}>
     


        <body className="flex min-h-full flex-col">
           <ReactLenis root>
          {children}
             </ReactLenis>
        </body>

    </html>
  );
}
