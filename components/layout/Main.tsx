"use client";

import { HeroParallax, Product } from "@/components/ui/hero-parallax"

const products: Product[] = [
  {
    title: "Residential Cleaning",
    link: "/services#cleaning",
    thumbnail: "/assets/images/main1.jpg",
    category: "cleaning",
  },
  {
    title: "Deep Cleaning",
    link: "/services#cleaning",
    thumbnail: "/assets/images/main2.jpg",
    category: "cleaning",
  },
    {
    title: "Deep Cleaning",
    link: "/services#cleaning",
    thumbnail: "/assets/images/main2.jpg",
    category: "cleaning",
  },
    {
    title: "Deep Cleaning",
    link: "/services#cleaning",
    thumbnail: "/assets/images/main2.jpg",
    category: "cleaning",
  },
  {
    title: "Elderly Assistance",
    link: "/services#home-care",
    thumbnail: "/assets/images/main3.jpg",
    category: "care",
  },
  {
    title: "Personal Support",
    link: "/services#home-care",
    thumbnail: "/assets/images/main4.jpg",
    category: "care",
  },
    {
    title: "Personal Support",
    link: "/services#home-care",
    thumbnail: "/assets/images/main4.jpg",
    category: "care",
  },
    {
    title: "Personal Support",
    link: "/services#home-care",
    thumbnail: "/assets/images/main4.jpg",
    category: "care",
  },
];


export default function Main() {
  return (
    <main className="relative bg-background text-foreground">
      <HeroParallax products={products} />
    </main>
  )
}
