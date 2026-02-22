// src/app/layout.tsx
import type { Metadata } from "next"
import "./globals.css"
import { Outfit, Fraunces } from "next/font/google";

export const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600"],
  style: ["italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://evercarehomeservice.com"),
  title: {
    default: "Evercare Home Service | Cleaning Services",
    template: "%s | Evercare Home Service",
  },
  description:
    "Empresa americana especializada em cleaning services e home care.",
  keywords: [
    "cleaning services",
    "home care",
    "house cleaning USA",
    "professional cleaning",
  ],
  authors: [{ name: "Evercare Home Service" }],
  creator: "Evercare Home Service",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://evercarehomeservice.com",
    siteName: "Evercare Home Service",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
