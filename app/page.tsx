import { generateSEO } from "@/lib/seo"
import Header from "@/components/layout/Header"
import Main from "@/components/layout/Main"
import { HomeBentoSection } from "@/components/layout/HomeBentoSection"
import PricingSection from "@/components/layout/PricingSection"
import TestimonialsSection from "@/components/layout/CommentSection"
import StatsSection from "@/components/layout/StatsSection"
import ContactFAQSection from "@/components/layout/ContactFAQSection"
import Footer from "@/components/layout/Footer"

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
      <Header />
      <Main />
      <HomeBentoSection />
      <PricingSection />
      <TestimonialsSection />
      <StatsSection />
      <ContactFAQSection />
      <Footer />
    </>
  )
}
