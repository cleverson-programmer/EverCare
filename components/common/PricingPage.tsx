"use client";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface PlanFeature {
  text: string;
}

interface ServicePlan {
  name: string;
  description: string;
  features: PlanFeature[];
  buttonLabel: string;
  slug: string;
}

const services: ServicePlan[] = [
  {
    name: "Residential Cleaning",
    description: "Your home, spotless and stress-free.",
    buttonLabel: "Get a Free Estimate",
    slug: "limpeza-residencial",
    features: [
      { text: "Standard & deep cleaning solutions" },
      { text: "Complete kitchen & bathroom sanitization" },
      { text: "Dusting, vacuuming, & floor disinfection" },
      { text: "Allergen & fine dust removal" },
      { text: "Flexible weekly or bi-weekly maintenance" },
    ],
  },
  {
    name: "Home Care Support",
    description: "Compassionate assistance in the comfort of home.",
    buttonLabel: "Schedule a Consultation",
    slug: "assistencia-domiciliar",
    features: [
      { text: "Daily living & mobility assistance" },
      { text: "Reliable medication reminders" },
      { text: "Companion care & emotional support" },
      { text: "Personal hygiene & grooming respect" },
      { text: "Light housekeeping & organization" },
    ],
  },
  {
    name: "Commercial Cleaning",
    description: "A productive, hygienic workspace for your team.",
    buttonLabel: "Get a Commercial Quote",
    slug: "limpeza-comercial",
    features: [
      { text: "Workstation & common area sanitization" },
      { text: "Deep cleaning for restrooms & breakrooms" },
      { text: "Professional floor care & polishing" },
      { text: "Efficient trash removal & recycling" },
      { text: "Flexible after-hours service options" },
    ],
  },
  {
    name: "Post-Construction",
    description: "The final touch for your new or renovated space.",
    buttonLabel: "Book Final Cleaning",
    slug: "limpeza-pos-construcao",
    features: [
      { text: "Heavy debris & construction dust removal" },
      { text: "Detailed cleaning of crevices & corners" },
      { text: "Window, glass, & mirror detailing" },
      { text: "Surface polishing & material-specific care" },
      { text: "Final inspection & move-in ready detailing" },
    ],
  }
];

const PricingCard = ({
  service,
  isActive,
  onHover,
}: {
  service: ServicePlan;
  isActive: boolean;
  onHover: () => void;
}) => {
  return (
    <div
      onMouseEnter={onHover}
      className={cn(
        "rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 border",
        isActive
          ? "bg-card-highlight border-border shadow-lg scale-[1.02]"
          : "bg-transparent border-transparent hover:border-border"
      )}
    >
      <div>
        <h3 className="text-xl font-semibold text-foreground">
          {service.name}
        </h3>
        <p className="text-muted-foreground text-sm mt-2">
          {service.description}
        </p>

        <ul className="mt-8 space-y-3">
          {service.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-center gap-2.5 text-sm text-muted-foreground"
            >
              <FaCheckCircle className="text-accent shrink-0" />
              {feature.text}
            </li>
          ))}
        </ul>
      </div>

      {/* BOTÃO AGORA NO FINAL */}
      <Link
          href={`/services/${service.slug}`}
          className={cn(
            "w-full text-center cursor-pointer mt-8 py-3 rounded-lg font-medium text-sm transition-all duration-200 block",
            isActive
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground border border-border hover:opacity-90"
          )}
        >
          {service.buttonLabel}
        </Link>
    </div>
  );
};

const PricingPage = () => {
  const [activeIndex, setActiveIndex] = useState(0); // 0 = Residential default

  return (
    <section className="min-h-screen bg-background py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
          Cleaning & Care Services in Massachusetts
        </h1>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm sm:text-base">
          Professional, insured, and high-quality care for residential and commercial properties.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {services.map((service, index) => (
          <PricingCard
            key={service.name}
            service={service}
            isActive={activeIndex === index}
            onHover={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default PricingPage;
