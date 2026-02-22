"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0">
        <Image
          src={"/assets/images/foto-header.jpg"}
          alt="Caregiver providing compassionate home care"
          className="w-full h-full object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-28 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary-foreground/80 font-body text-sm md:text-base tracking-[0.3em] uppercase mb-5"
        >
          About Us
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground font-semibold leading-tight max-w-5xl mx-auto"
        >
          A&L Total Care Solutions
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-24 h-[2px] bg-accent mx-auto my-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-primary-foreground/90 font-body text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
        >
          Caring for people, protecting homes, and restoring peace of mind.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
