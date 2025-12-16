import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import localFont from "next/font/local";

export const primaryFont = localFont({
  src: "../public/font.otf",
  variable: "--font-primary",
  display: "swap",
});

export const secFont = localFont({
  src: "../public/sec.otf",
  variable: "--font-subheading",
  display: "swap",
});

import { Source_Serif_4 } from "next/font/google";

export const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Campfire Lahore - Lahore Game jam",
  description:
    "Join Campfire Lahore in Lahore! A teen-led game jam where you'll build amazing games with other high schoolers. Food, workshops, and prizes included!",
  keywords:
    "game jam, hackathon, teen coding, Hack Club, game development, Lahore, Lahore",
  authors: [{ name: "Muhammad Ali", url: "https://alimad.co" }],
  alternates: {
    canonical: "https://campfire.hackclub.com/lahore"
  },
  icons: "https://campfire.hackclub.com/favicon.png"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${primaryFont.variable} ${secFont.variable} ${sourceSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
