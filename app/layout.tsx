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

export const metadata: Metadata = {
  title: "Roots Policy Consulting",
  description:
    "A specialist political-risk and policy-analysis consultancy delivering actionable intelligence across West Africa’s most complex markets.",
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
      <ReactLenis root>


        <body className="flex min-h-full flex-col">
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
