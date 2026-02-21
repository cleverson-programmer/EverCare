"use client";

import Navbar from "@/components/common/Navbar"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { WordRotate } from "@/components/ui/word-rotate"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { VideoMask } from "../ui/video-text"

export default function Header() {
  return (
    <header className="relative w-full h-[100dvh] overflow-hidden">

      {/* SCROLL PROGRESS */}
      <ScrollProgress />

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/video/video-header2.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* NAVBAR */}
      <div className="absolute top-0 w-full z-30">
        <Navbar />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-6">

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-4xl">
          We Provide Total{" "}
          <span className="text-primary">
            <WordRotate
              words={[
                "Care",
                "Protection",
                "Support",
                "Peace of Mind",
              ]}
              className="text-primary"
            />
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/80">
          Stability and professional home support when your family needs it most.
        </p>
      </div>

      {/* CURVED TRANSITION + VIDEO MASK */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] z-20 overflow-hidden">

        {/* SVG SHAPE */}
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full drop-shadow-xl"
        >
          <path
            fill="#f3f4f6"
            d="M0,96C120,80,240,64,360,74.7C480,85,600,123,720,170.7C840,219,960,277,1080,293.3C1200,309,1320,283,1380,269.3L1440,256L1440,320L0,320Z"
          />
        </svg>

        {/* RESPONSIVE VIDEO MASK */}
        <VideoMask
          src="/assets/video/video-header2.mp4"
          maskSrc="/assets/images/logo.svg"
          className="
            absolute
            top-16
            right-12
            w-[260px]
            h-[200px]

            sm:w-[320px]
            sm:h-[240px]

            md:w-[360px]
            md:h-[270px]

            lg:w-[400px]
            lg:h-[300px]
            lg:right-10
            lg:top-20
          "
        />
      </div>
    </header>
  )
}
