"use client";

import { motion } from "framer-motion";
import { Sparkles, HeartPulse } from "lucide-react";

export type Section = "cleaning" | "homecare" | null;

interface SectionSelectorProps {
  selected: Section;
  onSelect: (section: Section) => void;
}

const SectionSelector = ({ selected, onSelect }: SectionSelectorProps) => {
  return (
    <section className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
          Nossos Serviços
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Selecione a categoria de serviço que você precisa para explorar nossas soluções especializadas.
        </p>
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-6 max-w-3xl mx-auto">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(selected === "cleaning" ? null : "cleaning")}
          className={`flex-1 rounded-xl p-8 transition-all duration-300 border-2 cursor-pointer group ${
            selected === "cleaning"
              ? "bg-cleaning border-cleaning shadow-card-hover"
              : "bg-card border-border hover:border-cleaning/50 shadow-card hover:shadow-card-hover"
          }`}
        >
          <Sparkles
            className={`mx-auto mb-4 ${
              selected === "cleaning" ? "text-cleaning-foreground" : "text-cleaning"
            }`}
            size={48}
          />
          <h2
            className={`text-2xl font-bold mb-2 ${
              selected === "cleaning" ? "text-cleaning-foreground" : "text-foreground"
            }`}
          >
            Cleaning Services
          </h2>
          <p
            className={`text-sm ${
              selected === "cleaning" ? "text-cleaning-foreground/80" : "text-muted-foreground"
            }`}
          >
            Limpeza residencial, comercial, pós-obra e especializada
          </p>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(selected === "homecare" ? null : "homecare")}
          className={`flex-1 rounded-xl p-8 transition-all duration-300 border-2 cursor-pointer group ${
            selected === "homecare"
              ? "bg-homecare border-homecare shadow-card-hover"
              : "bg-card border-border hover:border-homecare/50 shadow-card hover:shadow-card-hover"
          }`}
        >
          <HeartPulse
            className={`mx-auto mb-4 ${
              selected === "homecare" ? "text-homecare-foreground" : "text-homecare"
            }`}
            size={48}
          />
          <h2
            className={`text-2xl font-bold mb-2 ${
              selected === "homecare" ? "text-homecare-foreground" : "text-foreground"
            }`}
          >
            Home Care
          </h2>
          <p
            className={`text-sm ${
              selected === "homecare" ? "text-homecare-foreground/80" : "text-muted-foreground"
            }`}
          >
            Professional In-Home Care You Can Trust in Massachusetts. Compassionate, dependable support designed to help seniors live safely and comfortably at home.
          </p>
        </motion.button>
      </div>
    </section>
  );
};

export default SectionSelector;
