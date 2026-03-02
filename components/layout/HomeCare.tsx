"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Heart,
  Brain,
  Activity,
  Users,
  Bell,
  PersonStanding,
  Phone,
  Mail,
  CheckCircle2,
  MessageSquare,
  ClipboardList,
  FileText,
  UserCheck,
} from "lucide-react";
import homecareHero from "@/public/assets/images/homecare-hero.jpg";

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

const careServices = [
  {
    icon: Heart,
    title: "Personal Care Assistance",
    desc: "Support with daily hygiene, grooming, and personal needs made with unwavering dignity and respect for the individual.",
  },
  {
    icon: Brain,
    title: "Alzheimer's & Dementia",
    desc: "Specialized patient support you can trust to manage memory-related conditions, focusing on safety, dignity, and well-being.",
  },
  {
    icon: Activity,
    title: "Post-Surgery Recovery",
    desc: "Expert assistance to accelerate safe and comfortable recovery at home following hospital discharge and instructions.",
  },
  {
    icon: Users,
    title: "Companionship Care",
    desc: "Emotional support, conversation, and meaningful engagement to combat isolation and promote family wellness.",
  },
  {
    icon: Bell,
    title: "Medication Reminders",
    desc: "Scheduling support to ensure adherence to prescribed family regimens with accuracy and compassion.",
  },
  {
    icon: PersonStanding,
    title: "Mobility Assistance",
    desc: "Safe and dignified transfers, and fall prevention support to maintain comfort and independence while safely at home.",
  },
];

const processSteps = [
  {
    step: "01",
    icon: Phone,
    title: "Contact Us",
    desc: "Reach out via phone or email to start your initial free consultation.",
  },
  {
    step: "02",
    icon: ClipboardList,
    title: "Needs Discussion",
    desc: "We listen to your loved one's needs, preferences, and medical requirements.",
  },
  {
    step: "03",
    icon: FileText,
    title: "Assessment",
    desc: "We conduct a professional in-home assessment to gather detailed care planning inputs.",
  },
  {
    step: "04",
    icon: UserCheck,
    title: "Care Plan",
    desc: "A personalized care plan is implemented by your matched, dedicated caregiver.",
  },
];

const trustPoints = [
  {
    title: "State-Certified CNAs in Massachusetts",
    desc: "All of our caregivers are verified, credentialed, and continuously trained to serve your family.",
  },
  {
    title: "Alzheimer's Specialized Training",
    desc: "Our team has the experience and training you need with patients suffering from dementia and memory conditions.",
  },
  {
    title: "Respect & Dignity First",
    desc: "Our team never takes shortcuts. Every interaction is built on trust, dignity, and love for every life.",
  },
  {
    title: "Clear Communication with Families",
    desc: "Keeping you informed and involved in every decision to keep you in control of your loved one's care.",
  },
];

const HomeCare = () => {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeSection>
              <p className="text-xs font-semibold text-homecare uppercase tracking-widest mb-3">
                HOME CARE · MASSACHUSETTS
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-5">
                Professional In-Home Care with{" "}
                <span className="text-homecare italic">Dignity</span> and{" "}
                <span className="text-homecare italic">Compassion</span>
              </h1>
              <p className="text-muted-foreground text-base mb-4 max-w-lg">
                State-Certified CNAs in Massachusetts providing personalized, structured, and respectful in-home support for seniors and adults.
              </p>
              <div className="border-l-4 border-homecare pl-4 mb-6">
                <p className="text-sm text-foreground font-medium">
                  Care led by Larissa Almeida, State Certified CNA
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  CNA lic. for Massachusetts
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="sms:+16171234567"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-homecare text-homecare-foreground text-sm font-semibold hover:bg-homecare-dark transition-colors"
                >
                  <MessageSquare size={16} />
                  Text Us
                </a>
                <a
                  href="mailto:hello@evercare.com"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-semibold hover:bg-muted transition-colors"
                >
                  <Mail size={16} />
                  Email Us
                </a>
              </div>
            </FadeSection>
          </div>
          <FadeSection delay={1} className="relative">
            <div className="rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src={homecareHero}
                alt="Home care professional with client"
                className="w-full h-72 lg:h-96 object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-card rounded-xl p-4 shadow-card-hover border border-border flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-homecare-light flex items-center justify-center shrink-0">
                <CheckCircle2 size={20} className="text-homecare" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">Certified & Trusted</p>
                <p className="text-xs text-muted-foreground">State-licensed caregivers across Massachusetts</p>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Core Services */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-foreground mb-3">Our In-Home Care Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Comprehensive support tailored to maintain independence, safety, and dignity in the comfort of home.
            </p>
          </FadeSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {careServices.map((s, i) => (
              <FadeSection key={s.title} delay={i * 0.5}>
                <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow h-full">
                  <div className="w-10 h-10 rounded-lg bg-homecare-light flex items-center justify-center mb-4">
                    <s.icon size={22} className="text-homecare" />
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeSection>
              <h2 className="text-3xl font-extrabold text-foreground mb-8">
                Why Massachusetts Families Trust EverCare
              </h2>
              <div className="bg-muted rounded-xl p-5 flex items-start gap-4 mb-6 border border-border">
                <div className="text-center">
                  <span className="text-2xl font-extrabold text-homecare">100%</span>
                  <p className="text-xs text-muted-foreground mt-0.5">Commitment to Dignity & Respect in every interaction.</p>
                </div>
                <div className="w-px bg-border self-stretch mx-2" />
                <div className="flex items-center gap-2">
                  <Heart size={18} className="text-homecare shrink-0" />
                  <p className="text-xs text-muted-foreground">Compassionate Caregiver — personally selected for each family</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {trustPoints.map((t) => (
                  <div key={t.title} className="flex gap-3">
                    <CheckCircle2 size={20} className="text-homecare shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">{t.title}</p>
                      <p className="text-muted-foreground text-sm mt-0.5">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeSection>
            <FadeSection delay={1}>
              <div className="rounded-2xl overflow-hidden shadow-card-hover">
                <img
                  src={homecareHero}
                  alt="Caregiver providing compassionate care"
                  className="w-full h-80 object-cover object-top"
                />
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-homecare-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-4">
            <p className="text-xs font-semibold text-homecare uppercase tracking-widest">YOUR CARE PLAN</p>
          </FadeSection>
          <FadeSection className="text-center mb-12" delay={1}>
            <h2 className="text-3xl font-extrabold text-foreground mb-3">How Our Care Process Works</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              Every family's situation is unique. Our structured process ensures thoughtful, professional, and personalized care planning.
            </p>
          </FadeSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s, i) => (
              <FadeSection key={s.step} delay={i * 0.5}>
                <div className="text-center bg-card rounded-xl p-6 shadow-card">
                  <span className="text-3xl font-extrabold text-homecare/20 block mb-3">{s.step}</span>
                  <div className="w-11 h-11 rounded-full bg-homecare-light flex items-center justify-center mx-auto mb-4">
                    <s.icon size={20} className="text-homecare" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-sm">{s.title}</h3>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 bg-muted">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeSection>
            <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed italic mb-8">
              "We understand that inviting a caregiver into your home is a decision based on trust. Our goal is to honor that trust with professionalism, consistency, and genuine care."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-homecare-light flex items-center justify-center">
                <Heart size={18} className="text-homecare" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-foreground">Larissa Almeida</p>
                <p className="text-xs text-muted-foreground">State Certified CNA, Founder</p>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-homecare py-20 text-center" id="contact-care">
        <div className="max-w-2xl mx-auto px-4">
          <FadeSection>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-homecare-foreground mb-4">
              Schedule a Care Consultation Today
            </h2>
            <p className="text-homecare-foreground/80 mb-8">
              Let's talk about how we can safely and professionally support your loved one at home in Massachusetts.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="sms:+16171234567"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-homecare-foreground text-homecare font-semibold hover:opacity-90 transition-opacity"
              >
                <MessageSquare size={17} />
                Text Us to Discuss Care
              </a>
              <a
                href="mailto:hello@evercare.com"
                className="flex items-center gap-2 px-6 py-3 rounded-lg border border-homecare-foreground/40 text-homecare-foreground font-semibold hover:bg-homecare-dark transition-colors"
              >
                <Mail size={17} />
                Email Us Instead
              </a>
            </div>
            <p className="text-xs text-homecare-foreground/60 mt-5">
              Privacy assured. Flexible scheduling available in Massachusetts.
            </p>
          </FadeSection>
        </div>
      </section>
    </div>
  );
};

export default HomeCare;
