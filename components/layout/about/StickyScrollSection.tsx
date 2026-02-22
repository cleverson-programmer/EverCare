"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Heart, Sparkles, ShieldCheck, Users } from "lucide-react";

const content = [
  {
    title: "Dedicated Patient Support",
    description:
      "With a professionally certified caregiver leading our team, we provide specialized assistance for those with mobility challenges. We handle every person with the dignity, patience, and technical skill they deserve.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Heart className="w-16 h-16 text-primary-foreground/80" />
      </div>
    ),
  },
  {
    title: "Health-Focused Cleaning",
    description:
      "We go beyond traditional cleaning. We focus on creating a sanitized environment that is essential for recovery and long-term health, preventing infections and promoting well-being.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Sparkles className="w-16 h-16 text-primary-foreground/80" />
      </div>
    ),
  },
  {
    title: "Commitment to Trust",
    description:
      "As a family-owned business in Massachusetts, our reputation is built on integrity. We are fully insured and bonded, providing our clients with absolute peace of mind that their loved ones and property are protected.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <ShieldCheck className="w-16 h-16 text-primary-foreground/80" />
      </div>
    ),
  },
  {
    title: "360° Care Approach",
    description:
      "We know that caring for a person with limited mobility requires a complete approach. It's not just about physical assistance; it's about ensuring the home they live in is safe, sanitized, and serene.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Users className="w-16 h-16 text-primary-foreground/80" />
      </div>
    ),
  },
];

const StickyScrollSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 mb-20 text-center">
        <p className="text-secondary text-sm md:text-base tracking-[0.25em] uppercase mb-4 font-semibold">
          What We Offer
        </p>

        <h2 className="text-4xl md:text-6xl lg:text-7xl text-foreground font-bold leading-tight">
          Our <span className="emotional">Services</span> in Detail
        </h2>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <StickyScroll content={content} />
      </div>
    </section>
  );
};

export default StickyScrollSection;
