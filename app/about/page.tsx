"use client";
import Navbar from "@/components/common/Navbar"
import CTASection from "@/components/layout/about/CTASection"
import HeroSection from "@/components/layout/about/HeroSection"
import MissionSection from "@/components/layout/about/MissionSection"
import PillarsSection from "@/components/layout/about/PillarsSection"
import StickyScrollSection from "@/components/layout/about/StickyScrollSection"
import TimelineSection from "@/components/layout/about/TimelineSection"
import Footer from "@/components/layout/Footer"
import { generateSEO } from "@/lib/seo"

export const metadata = generateSEO({
  title: "Professional Cleaning Services in USA",
  description:
    "Reliable, professional and trusted cleaning services for homes and offices across the USA.",
})

export default function LandingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Evercare Home Service",
    image: "https://evercarehomeservice.com/og-image.png",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    description:
      "Professional cleaning and home care services in the United States.",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <StickyScrollSection />
      <TimelineSection />
      <PillarsSection />
      <CTASection />
      <Footer />
    </main>
    </>
  )
}
