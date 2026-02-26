"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services does EverCare offer in Massachusetts?",
    answer: "EverCare Home Services offers professional residential cleaning and home care services in Massachusetts. We specialize in residential cleaning, deep cleaning, move-in/move-out cleaning, and compassionate home care for seniors and those recovering at home.",
  },
  {
    question: "Can I combine cleaning and home care services in Massachusetts?",
    answer: "Yes. Families choose EverCare because we offer integrated services from a single trusted provider. You can schedule routine residential cleaning along with daily or weekly home care to create a safe and hygienic environment.",
  },
  {
    question: "Are the cleaning and home care professionals trained?",
    answer: "Absolutely. All our professionals undergo background and reference checks. Our cleaning team follows professional hygiene standards, while our home care assistants are trained to provide respectful and attentive assistance with daily tasks.",
  },
  {
    question: "Do you bring your own cleaning supplies?",
    answer: "Yes. For residential cleaning, we bring professional-grade products and equipment. For home care services, we coordinate with the family to ensure all personal hygiene items are available as needed.",
  },
  {
    question: "Which areas of Massachusetts do you serve?",
    answer: "We proudly serve the entire state of Massachusetts and neighboring communities. If you're unsure if we cover your specific location, contact us at (508) 736-1263 for a prompt response.",
  },
  {
    question: "How do I schedule cleaning or home care services in Massachusetts?",
    answer: "Scheduling is simple: request a free quote through our website or call us directly. We will analyze your needs, recommend a customized service plan, and schedule a time that fits your routine.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full px-6 py-20 md:px-16 lg:px-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        {/* Left - Title */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight">
            Frequently asked
            <br />
            questions
          </h2>
        </div>

        {/* Right - Accordion */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center gap-4 py-5 text-left transition-colors"
              >
                {openIndex === index ? (
                  <Minus className="h-4 w-4 shrink-0 text-primary" />
                ) : (
                  <Plus className="h-4 w-4 shrink-0 text-primary" />
                )}

                <span className="text-base font-medium text-foreground leading-snug">
                  {faq.question}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 pb-5" : "max-h-0"
                }`}
              >
                <p className="pl-8 text-sm md:text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;