"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Home,
  Building2,
  Sparkles,
  ArrowUpDown,
  Phone,
  Mail,
  CheckCircle2,
  Star,
  MessageSquare,
  ClipboardList,
  CalendarCheck,
  Wrench,
  Refrigerator,
  Wind,
  ShirtIcon,
  Archive,
  Sofa,
} from "lucide-react";
import cleaningHero from "@/public/assets/images/cleaning-hero.jpg";

const FadeSection = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.55, delay: delay * 0.1, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const coreServices = [
  {
    icon: Home,
    title: "Residential Cleaning",
    desc: "Thorough cleaning for homes and apartments. Includes dusting, vacuuming, mopping, and sanitizing all rooms and bathrooms.",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    desc: "Top-tier cleaning for offices, retail spaces, and corporate settings. Focused on professionalism and efficiency.",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    desc: "Intensive cleaning targeting hidden grime, buildup, baseboards, and every corner. Ideal for move-in, spring clean, or special occasions.",
  },
  {
    icon: ArrowUpDown,
    title: "Move-In/Out",
    desc: "Full-property cleaning to prepare for new occupants or restore a property on departure. Leave it spotless.",
  },
];

const processSteps = [
  {
    step: "01",
    icon: Phone,
    title: "Contact Us",
    desc: "Reach out via phone or email to start setting up your cleaning appointment.",
  },
  {
    step: "02",
    icon: ClipboardList,
    title: "Needs Review",
    desc: "We discuss your cleaning requirements, property details, and preferred scheduling.",
  },
  {
    step: "03",
    icon: CalendarCheck,
    title: "Confirmation",
    desc: "We confirm your service plan, pricing, and scheduling.",
  },
  {
    step: "04",
    icon: Wrench,
    title: "Service Delivery",
    desc: "Our skilled team arrives on time and delivers thorough, high-quality cleaning.",
  },
];

const trustPoints = [
  {
    icon: CheckCircle2,
    title: "Professionally Trained & Personally Committed",
    desc: "Every team member undergoes rigorous background checks and training on our proven cleaning protocols.",
  },
  {
    icon: CheckCircle2,
    title: "Consistent Quality Control",
    desc: "We conduct detailed checklists and supervisor inspections to ensure our high standards are met every time.",
  },
  {
    icon: CheckCircle2,
    title: "Responsible & Eco-Conscious Practices",
    desc: "We prioritize safe, effective cleaning solutions and methods that are responsible for your environment and health.",
  },
];

const additionalServices = [
  { icon: Refrigerator, title: "Oven Interior Cleaning", desc: "Remove grease, residue and burnt buildup from oven interior surfaces." },
  { icon: Refrigerator, title: "Refrigerator Interior", desc: "Deep clean all shelves, drawers, and seals with sanitizing solution." },
  { icon: Wind, title: "Interior Windows", desc: "Streak-free cleaning of window panes, sills, and frames throughout your home." },
  { icon: ShirtIcon, title: "Laundry Service", desc: "Washing, drying, and folding laundry including bedding. Delicate-safe process." },
  { icon: Archive, title: "Cabinet Organization", desc: "Clean and organize kitchen and bathroom cabinets, a fresh, clutter-free space." },
  { icon: Sofa, title: "Upholstery Vacuuming", desc: "Vacuum sofas, chairs, and cushions to remove dust, allergens, and pet hair." },
];

const testimonials = [
  {
    text: "The structure and professionalism of the EverCare team is unmatched. They treat our medical office with the precision required for our patients.",
    name: "Dr. Jacob Alexander, Cambridge",
    stars: 5,
  },
  {
    text: "Finally a service that is consistent. The workflow they follow impressed us greatly, highly recommended for deep cleaning services.",
    name: "Mark Thompson, Boston",
    stars: 5,
  },
];

const CleaningServices = () => {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeSection>
              <p className="text-xs font-semibold text-cleaning uppercase tracking-widest mb-3">
                CLEANING SERVICES · ESSEX COUNTY · GREATER MASSACHUSETTS
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-5">
                Professional Residential &amp; Commercial Cleaning with{" "}
                <span className="text-cleaning">Precision</span> in Massachusetts
              </h1>
              <p className="text-muted-foreground text-base mb-6 max-w-lg">
                Licensed and insured cleaning services delivered with structure, precision, and respect for your home or business.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="sms:+16171234567"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cleaning text-cleaning-foreground text-sm font-semibold hover:bg-cleaning-dark transition-colors"
                >
                  <MessageSquare size={16} />
                  Text Us
                </a>
                <a
                  href="mailto:hello@evercare.com"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-semibold hover:bg-muted transition-colors"
                >
                  <Mail size={16} />
                  Email Us to Start
                </a>
              </div>
            </FadeSection>
          </div>
          <FadeSection delay={1} className="relative">
            <div className="rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src={cleaningHero}
                alt="Professional cleaning service"
                className="w-full h-72 lg:h-96 object-cover"
              />
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Core Services */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-foreground mb-3">Our Core Cleaning Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Structured cleaning solutions tailored to the specific requirements of residential and commercial properties.
            </p>
          </FadeSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((s, i) => (
              <FadeSection key={s.title} delay={i * 0.5}>
                <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow h-full">
                  <div className="w-10 h-10 rounded-lg bg-cleaning-light flex items-center justify-center mb-4">
                    <s.icon size={22} className="text-cleaning" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                  <a href="#contact" className="inline-block mt-4 text-xs font-semibold text-cleaning hover:underline">
                    View Details →
                  </a>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-foreground mb-3">How Our Cleaning Process Works</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every property is unique. Our structured process ensures thorough, professional, and consistent results.
            </p>
          </FadeSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s, i) => (
              <FadeSection key={s.step} delay={i * 0.5}>
                <div className="text-center p-6">
                  <span className="text-4xl font-extrabold text-cleaning/20 block mb-3">{s.step}</span>
                  <div className="w-12 h-12 rounded-full bg-cleaning-light flex items-center justify-center mx-auto mb-4">
                    <s.icon size={22} className="text-cleaning" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeSection>
              <div className="rounded-2xl overflow-hidden shadow-card-hover">
                <img
                  src={cleaningHero}
                  alt="EverCare team cleaning"
                  className="w-full h-72 lg:h-80 object-cover object-center"
                />
              </div>
            </FadeSection>
            <FadeSection delay={1}>
              <h2 className="text-3xl font-extrabold text-foreground mb-6">
                Why Massachusetts Clients Trust EverCare Cleaning
              </h2>
              <div className="flex flex-col gap-5">
                {trustPoints.map((t) => (
                  <div key={t.title} className="flex gap-3">
                    <CheckCircle2 size={22} className="text-cleaning shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">{t.title}</p>
                      <p className="text-muted-foreground text-sm mt-0.5">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-cleaning-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-12">
            <p className="text-xs font-semibold text-cleaning-foreground/60 uppercase tracking-widest mb-2">
              OPTIONAL SERVICES
            </p>
            <h2 className="text-3xl font-extrabold text-cleaning-foreground mb-3">
              Enhance Your Cleaning Service
            </h2>
            <p className="text-cleaning-foreground/70 max-w-xl mx-auto text-sm">
              Supplementary add-on services you can combine with any scheduled service.
            </p>
          </FadeSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((s, i) => (
              <FadeSection key={s.title} delay={i * 0.3}>
                <div className="bg-cleaning/30 border border-cleaning-foreground/10 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cleaning-foreground/10 flex items-center justify-center shrink-0">
                      <s.icon size={18} className="text-cleaning-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-cleaning-foreground text-sm">{s.title}</p>
                      <p className="text-cleaning-foreground/70 text-xs mt-1">{s.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <FadeSection key={t.name} delay={i * 0.5}>
                <div className="bg-card rounded-xl p-7 shadow-card border border-border">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} size={16} className="text-accent-star fill-accent-star" />
                    ))}
                  </div>
                  <p className="text-foreground text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                  <p className="text-xs font-semibold text-muted-foreground">— {t.name}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted py-20 text-center" id="contact">
        <div className="max-w-2xl mx-auto px-4">
          <FadeSection>
            <p className="text-xs font-semibold text-cleaning uppercase tracking-widest mb-3">GET STARTED</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
              Schedule a Cleaning Consultation Today
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss your cleaning needs and design a structured, reliable service plan tailored to your home or business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="sms:+16171234567"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-cleaning text-cleaning-foreground font-semibold hover:bg-cleaning-dark transition-colors"
              >
                <MessageSquare size={17} />
                Start Your Cleaning Plan
              </a>
              <a
                href="mailto:hello@evercare.com"
                className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-card transition-colors"
              >
                <Mail size={17} />
                Email Us Instead
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-5">
              Licensed, insured, and trusted by hundreds of families and businesses in Massachusetts.
            </p>
          </FadeSection>
        </div>
      </section>
    </div>
  );
};

export default CleaningServices;
