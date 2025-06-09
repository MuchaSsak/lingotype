import React from "react";
import type { Metadata } from "next";
import { Noto_Color_Emoji, Geist_Mono } from "next/font/google";

import "@/app/globals.css";
import Providers from "@/components/layout/Providers";
import NavBar from "@/components/layout/NavBar";
import { ReactScan } from "@/components/layout/ReactScan";
import Footer from "@/components/layout/Footer";
import {
  GITHUB_FABIAN_PROFILE_LINK,
  GITHUB_MATEUSZ_PROFILE_LINK,
  LINGOTYPE_PRODUCTION_URL,
} from "@/lib/constants";

const notoColorEmoji = Noto_Color_Emoji({
  variable: "--font-noto-color-emoji",
  subsets: ["emoji"],
  weight: "400",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LingoType – Learn Languages by Typing",
  description:
    "LingoType helps you learn foreign languages by reinforcing vocabulary through typing. Import custom words lists, view sentence translations and practice sentence structure with the help of artificial intelligence.",
  keywords: [
    "LingoType",
    "typing practice",
    "language learning",
    "foreign languages",
    "vocabulary builder",
    "AI typing tool",
    "learn to type",
    "typing test",
    "WPM",
    "artificial intelligence",
    "study languages",
    "language app",
    "typing trainer",
    "vocabulary practice",
    "custom word lists",
  ],
  authors: [
    { name: "Mateusz Muszarski", url: GITHUB_MATEUSZ_PROFILE_LINK },
    { name: "Fabian Dróżkowski", url: GITHUB_FABIAN_PROFILE_LINK },
  ],
  creator: "Mateusz Muszarski",
  applicationName: "LingoType",
  generator: "Next.js",
  robots: "index, follow",
  metadataBase: new URL(LINGOTYPE_PRODUCTION_URL),
  openGraph: {
    title: "LingoType – Learn Languages by Typing",
    description:
      "Master vocabulary and grammar by typing. LingoType uses AI to help you learn foreign languages in an interactive and customizable way.",
    url: LINGOTYPE_PRODUCTION_URL,
    siteName: "LingoType",
    images: [
      {
        url: `${LINGOTYPE_PRODUCTION_URL}/logo.png`,
        width: 1200,
        height: 630,
        alt: "LingoType – Learn languages by typing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body
        className={`${notoColorEmoji.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {/* <ReactScan /> */}
          <NavBar />

          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
