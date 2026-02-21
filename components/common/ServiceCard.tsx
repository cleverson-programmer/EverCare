"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  theme: "cleaning" | "homecare";
  children: React.ReactNode;
}

const ServiceCard = ({ icon: Icon, title, description, theme, children }: ServiceCardProps) => {
  const [expanded, setExpanded] = useState(false);

  const themeClasses = {
    cleaning: {
      iconBg: "bg-cleaning-light",
      iconColor: "text-cleaning",
      button: "bg-cleaning hover:bg-cleaning/90 text-cleaning-foreground",
      border: "border-cleaning/20",
    },
    homecare: {
      iconBg: "bg-homecare-light",
      iconColor: "text-homecare",
      button: "bg-homecare hover:bg-homecare/90 text-homecare-foreground",
      border: "border-homecare/20",
    },
  };

  const t = themeClasses[theme];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-card rounded-xl shadow-card hover:shadow-card-hover transition-shadow border ${t.border} overflow-hidden`}
    >
      <div className="p-5">
        <div className="flex items-start gap-4">
          <div className={`${t.iconBg} rounded-lg p-3 shrink-0`}>
            <Icon className={t.iconColor} size={24} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-foreground text-base mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className={`mt-4 w-full flex cursor-pointer items-center justify-center gap-2 
          py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-300
          ${
            expanded
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-green-400 text-white hover:bg-green-500"
          }`}
        >
          {expanded ? "Fechar" : "Solicitar Orçamento"}
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-2 border-t border-border">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ServiceCard;
