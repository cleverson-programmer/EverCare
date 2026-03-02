"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionSelector, { Section } from "@/components/common/SectionSelector";
import CleaningServices from "./CleaningServices";
import HomeCare from "./HomeCare";

const ServicesPageClient = () => {
  const [selected, setSelected] = useState<Section>("cleaning");

  return (
    <main>
      <SectionSelector selected={selected} onSelect={setSelected} />

      <AnimatePresence mode="wait">
        {selected === "cleaning" && (
          <motion.div
            key="cleaning"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <CleaningServices />
          </motion.div>
        )}
        {selected === "homecare" && (
          <motion.div
            key="homecare"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <HomeCare />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default ServicesPageClient;
