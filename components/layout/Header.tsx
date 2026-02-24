"use client";

import Navbar from "@/components/common/Navbar"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { WordRotate } from "@/components/ui/word-rotate"
import { VideoMask } from "../ui/video-text"
import { ServiceToggle } from "@/components/common/ServiceToggle";
import { useState } from "react";

export default function Header() {

  const [selectedService, setSelectedService] = useState<"cleaning" | "care">("cleaning");

  return (
    <header className="relative w-full h-[100dvh] overflow-hidden">

      {/* SCROLL PROGRESS */}
      <ScrollProgress />

      {/* VIDEO BACKGROUND */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/video/video-header2.mp4" type="video/mp4" />
      </video> */}
      <img src="/assets/images/header-logo-img.jpeg" alt="Header Image" className="absolute inset-0 w-full h-full object-cover" />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* NAVBAR */}
      <div className="absolute top-0 w-full z-30">
        <Navbar />
      </div>

    {/* HERO CONTENT */}
    <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-6">
      
      {/* TÍTULO PRINCIPAL */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-5xl">
        <span className="inline-flex flex-wrap items-center justify-center gap-x-2 md:gap-x-3">
          Professional 
          <WordRotate
            words={[
              "Cleaning",
              "Deep Cleaning",
              "Home Support",
              "Commercial Cleaning",
              "Assistance"
            ]}
            className="text-primary"
          />
          You
        </span>
        <span className="block mt-1 md:mt-2">
          Can Trust
        </span>
      </h1>

      {/* SERVICE TOGGLE (Substituindo o parágrafo) */}
      <div className="mt-10 w-full flex justify-center">
        <ServiceToggle 
          selected={selectedService} 
          onChange={(value) => setSelectedService(value)} 
        />
      </div>
    </div>

    {/* CURVED TRANSITION + VIDEO MASK */}
    <div className="absolute bottom-[-2px] left-0 w-full h-[200px] sm:h-[250px] md:h-[300px] z-20 overflow-hidden">

      {/* SVG SHAPE */}
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full drop-shadow-[0_-10px_15px_rgba(0,0,0,0.05)]"
      >
        <path
          // fill-white para o Light Mode
          // dark:fill-background para usar o seu #0F1E24 definido no global.css
          className="fill-white dark:fill-background transition-colors duration-500"
          d="M0,160 C240,128 420,128 720,224 C960,320 1200,120 1540,220 V320 H0 Z"
        />
      </svg>

      {/* RESPONSIVE VIDEO MASK */}
      {/* <VideoMask
        src="/assets/video/video-header2.mp4"
        maskSrc="/assets/images/logo.svg"
        className="
          absolute
          top-16
          right-6
          w-[200px]
          h-[150px]
          sm:w-[260px]
          sm:h-[190px]
          sm:right-10
          md:w-[320px]
          md:h-[240px]
          md:right-12
          lg:w-[400px]
          lg:h-[300px]
          lg:right-24
          lg:-bottom-4
          pointer-events-none
        "
      /> */}
    </div>
    </header>
  )
}
