"use client";

import Navbar from "@/components/common/Navbar"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { WordRotate } from "@/components/ui/word-rotate"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { VideoMask } from "../ui/video-text"

export default function Header() {
  return (
    <header className="relative w-full h-screen overflow-hidden">

      {/* SCROLL PROGRESS */}
      <ScrollProgress />

        {/*VIDEO BACKGROUND */}
        <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        >
        <source src="/assets/video/video-header.mp4" type="video/mp4" />
        </video>


      {/* DARK OVERLAY FOR READABILITY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* NAVBAR */}
      <div className="absolute top-0 w-full">
        <Navbar />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-6">

        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-4xl">
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

        <p className=" max-w-2xl text-lg text-white/80">
          Stability and professional home support when your family needs it most.
        </p>

        {/* CTA BUTTON */}
        {/* <div className="mt-10">
          <button className="px-8 py-3 rounded-full cursor-pointer bg-primary hover:opacity-90 transition-all">
            <AnimatedShinyText className="cursor-pointer">
              Get Started Today 
            </AnimatedShinyText>
          </button>
        </div> */}

      </div>
        {/* CURVED TRANSITION WITH VIDEO TEXT */}
        <div className="absolute bottom-0 left-0 w-full h-[300px] z-20 overflow-hidden">
            {/* SVG SHAPE BACKGROUND */}
            <svg
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full drop-shadow-xl"
            >
                <path
                fill="#f3f4f6" // mesma cor do <main>
                d="M0,96C120,80,240,64,360,74.7C480,85,600,123,720,170.7C840,219,960,277,1080,293.3C1200,309,1320,283,1380,269.3L1440,256L1440,320L0,320Z"
                />
            </svg>

            {/* VIDEO TEXT */}
            <VideoMask
            src="/assets/video/video-header.mp4"
            maskSrc="/assets/images/logo.svg"
            className="absolute right-10 h-[300px] w-[400px] top-20"
            />
        </div>
    </header>
  )
}