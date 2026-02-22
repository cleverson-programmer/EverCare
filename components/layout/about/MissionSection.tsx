"use client";
import { motion } from "framer-motion";

const MissionSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-accent font-body text-sm md:text-base tracking-[0.25em] uppercase mb-4">
              Our Mission
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground font-semibold leading-tight">
              Stability & Support When It Matters Most
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 text-muted-foreground font-body text-lg md:text-xl leading-relaxed"
          >
            <p>
              At A&L Total Care Solutions, we provide the stability and support your family needs when it matters most.
            </p>
            <p>
              Our company was founded by the{" "}
              <strong className="text-foreground font-semibold">
                Lopes & Almeida family
              </strong>{" "}
              with a clear mission: to integrate high-quality home care with professional environmental hygiene. We know that caring for a person with limited mobility—whether they are a senior, recovering from an accident, or bedridden—requires a{" "}
              <em className="text-primary font-semibold not-italic">
                360-degree approach
              </em>.
            </p>
            <p>
              It&apos;s not just about physical assistance; it&apos;s about ensuring the home they live in is safe, sanitized, and serene.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
