"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Star, Shield, Clock } from "lucide-react";
import { Lens } from "@/components/ui/lens";
import ServiceCard from "@/components/common/ServiceCard";
import CleaningForm from "@/components/common/CleaningForm";
import HomeCareForm from "@/components/common/HomeCareForm";
import type { ServiceData } from "@/components/data/services";
import cleaningHero from "@/public/assets/images/main1.jpg";
import homecareHero from "@/public/assets/images/main2.jpg";

interface Props {
  service: ServiceData;
}

const trustBadges = [
  { icon: Star, label: "4.9 de avaliação média", color: "text-yellow-500" },
  { icon: Shield, label: "Equipe verificada e treinada", color: "text-green-500" },
  { icon: Clock, label: "Pontualidade garantida", color: "text-blue-500" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function ServicePageClient({ service }: Props) {
  const [lensHovering, setLensHovering] = useState(false);

  const isHomecare = service.theme === "homecare";
  const heroImage = isHomecare ? homecareHero : cleaningHero;

  const themeAccent = isHomecare ? "text-homecare" : "text-cleaning";

  const themeBg = isHomecare
    ? "bg-homecare-light text-homecare"
    : "bg-cleaning-light text-cleaning";

  const themeGradient = isHomecare
    ? "from-homecare/10 via-background to-background"
    : "from-cleaning/10 via-background to-background";

  const themeBtnPrimary = isHomecare
    ? "bg-homecare hover:bg-homecare/90 text-homecare-foreground"
    : "bg-cleaning hover:bg-cleaning/90 text-cleaning-foreground";

  return (
    <div className="min-h-screen bg-background">
      <section className={`bg-gradient-to-br ${themeGradient} pt-10 pb-14 sm:pt-14 sm:pb-20`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            <div className="order-2 lg:order-1">
              <motion.span
                variants={itemVariants}
                className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${themeBg}`}
              >
                {service.badge}
              </motion.span>

              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-foreground leading-tight mb-3"
              >
                {service.heroTitle}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className={`text-lg sm:text-xl font-semibold ${themeAccent} mb-5`}
              >
                {service.heroSubtitle}
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-8 max-w-xl"
              >
                {service.heroDescription}
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-8">
                {trustBadges.map(({ icon: Icon, label, color }) => (
                  <div
                    key={label}
                    className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-card border border-border rounded-full px-3 py-1.5 shadow-sm"
                  >
                    <Icon size={13} className={color} />
                    {label}
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <Lens
                hovering={lensHovering}
                setHovering={setLensHovering}
                zoomFactor={1.6}
                lensSize={160}
              >
                <img
                  src={heroImage.src}
                  alt={service.heroTitle}
                  className="w-full h-64 sm:h-80 lg:h-[420px] object-cover rounded-2xl"
                />
              </Lens>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {service.items.map((item, idx) => (
            <ServiceCard
              key={idx}
              icon={item.icon}
              title={item.title}
              description={item.description}
              theme={item.theme}
            >
              {item.theme === "cleaning" ? (
                <CleaningForm serviceType={item.title} />
              ) : (
                <HomeCareForm serviceType={item.title} />
              )}
            </ServiceCard>
          ))}
        </div>
      </section>
    </div>
  );
}
