import { HeartHandshake, Sparkles, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <HeartHandshake className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />,
    title: "Compassion-\ndriven",
    description:
      "We provide dedicated patient support led by certified caregivers who treat every individual with dignity, patience, and professional expertise. Your loved ones receive not just assistance, but genuine care.",
  },
  {
    icon: (
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-foreground flex items-center justify-center">
        <Sparkles className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
      </div>
    ),
    title: "Health-\nfocused",
    description:
      "Our environmental cleaning services go beyond traditional housekeeping. We create sanitized, recovery-friendly spaces that help prevent infections and promote long-term well-being.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />,
    title: "Trust-\nbuilt",
    description:
      "As a fully insured and bonded family-owned business in Massachusetts, we operate with integrity and transparency—ensuring complete peace of mind for your family and total protection for your home.",
  },
];

const WeAreSection = () => {
  return (
    <section className="bg-background text-foreground py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-16 md:mb-24 tracking-tight">
          We are:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 whitespace-pre-line">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeAreSection;
