"use client";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface PlanFeature {
  text: string;
}

interface ServicePlan {
  name: string;
  description: string;
  features: PlanFeature[];
}

const services: ServicePlan[] = [
  {
    name: "Residential Cleaning Services",
    description: "Comprehensive in-home professional cleaning solutions.",
    features: [
      { text: "Standard & deep cleaning" },
      { text: "Kitchen & bathroom sanitization" },
      { text: "Dusting & surface disinfection" },
      { text: "Vacuuming & mopping" },
      { text: "Recurring maintenance plans" },
    ],
  },
  {
    name: "Home Care Services",
    description: "Personalized in-home support and assistance services.",
    features: [
      { text: "Daily living assistance" },
      { text: "Medication reminders" },
      { text: "Light housekeeping" },
      { text: "Companionship care" },
      { text: "Personal hygiene support" },
    ],
  },
  {
    name: "Commercial Office Cleaning",
    description: "Professional janitorial services for offices and workspaces.",
    features: [
      { text: "Workstation sanitization" },
      { text: "Restroom deep cleaning" },
      { text: "Floor care & polishing" },
      { text: "Trash removal & recycling" },
      { text: "After-hours cleaning services" },
    ],
  },
  {
    name: "Post-Construction Cleaning",
    description: "Detailed post-renovation and construction site cleaning.",
    features: [
      { text: "Debris removal" },
      { text: "Fine dust elimination" },
      { text: "Window & glass detailing" },
      { text: "Surface polishing" },
      { text: "Final inspection detailing" },
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
      <button
        className={cn(
          "w-full cursor-pointer mt-8 py-3 rounded-lg font-medium text-sm transition-all duration-200",
          isActive
            ? "bg-primary text-primary-foreground"
            : "bg-secondary text-secondary-foreground border border-border hover:opacity-90"
        )}
      >
        Get Started
      </button>
    </div>
  );
};

const PricingPage = () => {
  const [activeIndex, setActiveIndex] = useState(0); // 0 = Residential default

  return (
    <section className="min-h-screen bg-background py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
          Our Professional Services
        </h1>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm sm:text-base">
          Specialized cleaning and home care solutions tailored to residential
          and commercial environments.
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
