"use client";
import { useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Search,
  Building2,
  HardHat,
  Factory,
  Blinds,
  Stethoscope,
  Heart,
  Syringe,
  HandHelping,
} from "lucide-react";
import SectionSelector from "@/components/common/SectionSelector";
import ServiceCard from "@/components/common/ServiceCard";
import CleaningForm from "@/components/common/CleaningForm";
import HomeCareForm from "@/components/common/HomeCareForm";

type Section = "cleaning" | "homecare" | null;

const cleaningServices = [
  {
    icon: Home,
    title: "Limpeza Doméstica (Residencial)",
    description:
      "Tarefas rotineiras como varrer, passar pano, tirar pó de móveis, limpar banheiros e cozinhas.",
  },
  {
    icon: Search,
    title: "Limpeza Profunda (Deep Cleaning)",
    description:
      "Limpeza minuciosa em áreas difíceis: atrás de eletrodomésticos, rodapés, mofo e desinfecção total.",
  },
  {
    icon: Building2,
    title: "Limpeza Comercial / Escritórios",
    description:
      "Organização de mesas, limpeza de carpetes, pisos, banheiros, recepções e áreas comuns.",
  },
  {
    icon: HardHat,
    title: "Limpeza Pós-Obra / Reforma",
    description:
      "Remoção de poeira fina, restos de tinta, cimento, gesso e sujeira pesada após construções.",
  },
  {
    icon: Factory,
    title: "Limpeza Técnica / Industrial",
    description:
      "Métodos químicos, mecânicos ou térmicos para higienizar indústrias e áreas sensíveis.",
  },
  {
    icon: Blinds,
    title: "Limpeza Especializada",
    description:
      "Lavagem de janelas, carpetes, higienização de estofados e limpeza de áreas externas.",
  },
];

const homeCareServices = [
  {
    icon: Stethoscope,
    title: "Assistência Domiciliar",
    description:
      "Atendimentos de médicos, enfermeiros, fisioterapeutas, nutricionistas e terapeutas ocupacionais.",
  },
  {
    icon: Heart,
    title: "Cuidados Paliativos",
    description:
      "Conforto, alívio de sintomas e qualidade de vida com suporte psicológico e espiritual.",
  },
  {
    icon: Syringe,
    title: "Cuidados de Enfermagem",
    description:
      "Curativos complexos, medicação IV, aspiração de traqueostomia e monitoramento de sinais vitais.",
  },
  {
    icon: HandHelping,
    title: "Apoio de Cuidador",
    description:
      "Auxílio em higiene, alimentação e locomoção para idosos ou pessoas com limitações funcionais.",
  },
];

const ServicesCards = () => {
  const [selectedSection, setSelectedSection] = useState<Section>("cleaning");

  const handleSectionChange = (section: Section) => {
    setSelectedSection(section);
  };

  return (
    <>
      <div className="min-h-screen bg-background">
        <SectionSelector selected={selectedSection} onSelect={handleSectionChange} />
        <AnimatePresence mode="wait">
          {selectedSection === "cleaning" && (
            <motion.section
              key="cleaning"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="pb-16 px-4"
            >
              <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-1 w-12 bg-cleaning rounded-full" />
                  <h2 className="text-2xl font-bold text-foreground">Cleaning Services</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cleaningServices.map((service) => (
                    <ServiceCard
                      key={service.title}
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      theme="cleaning"
                    >
                      <CleaningForm serviceType={service.title} />
                    </ServiceCard>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {selectedSection === "homecare" && (
            <motion.section
              key="homecare"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="pb-16 px-4"
            >
              <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-1 w-12 bg-homecare rounded-full" />
                  <h2 className="text-2xl font-bold text-foreground">Home Care</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {homeCareServices.map((service) => (
                    <ServiceCard
                      key={service.title}
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      theme="homecare"
                    >
                      <HomeCareForm serviceType={service.title} />
                    </ServiceCard>
                  ))}
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ServicesCards;
