import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Compare } from "@/components/ui/compare";
import { GiFamilyHouse } from "react-icons/gi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbAirConditioning } from "react-icons/tb";
import { BsBuildings } from "react-icons/bs";

export default function BentoGridSecond() {
  return (
    <BentoGrid>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          // Forçamos col-span-1 para que o grid controle o tamanho
          className="col-span-1" 
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const items = [
  {
    title: "Commercial Dumpster Cleaning",
    description: "Professional high-pressure washing and sanitization to eliminate grease, bacteria, and persistent odors — keeping your commercial waste areas clean, compliant, and pest-free.",
    header: (
      <Compare
      firstImage="/assets/images/before1.jpeg"
      secondImage="/assets/images/after1.jpeg"
      slideMode="hover"
      className="w-full h-full object-cover"
    />
    ),
    className: "md:col-span-1",
    icon: <RiDeleteBin6Line className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "HVAC System Deep Cleaning",
    description: "Comprehensive duct and vent cleaning to remove contaminants, improve airflow efficiency, and promote healthier indoor air quality for residential and commercial properties.",
    header: (
      <Compare
        firstImage="/assets/images/before2.jpeg"
        secondImage="/assets/images/after2.jpeg"
        slideMode="hover"
        showHandlebar
        className="w-full h-full object-cover"
      />
    ),
    className: "md:col-span-1",
    icon: <TbAirConditioning className="h-4 w-4 text-neutral-500" />,
  },
    {
    title: "Floor Surface Restoration",
    description: "Advanced deep cleaning and surface renewal for tile, grout, hardwood, and vinyl — restoring appearance while extending the lifespan of your flooring.",
    header: (
      <Compare
        firstImage="/assets/images/before3.jpeg"
        secondImage="/assets/images/after3.jpeg"
        slideMode="hover"
        showHandlebar
        className="w-full h-full object-cover"
      />
    ),
    className: "md:col-span-1",
    icon: <GiFamilyHouse className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Professional Commercial Cleaning",
    description: "Customized cleaning solutions for offices, retail spaces, and facilities — delivering consistent, high-standard sanitation that reflects your business professionalism.",
    header: (
      <Compare
        firstImage="/assets/images/before4.jpeg"
        secondImage="/assets/images/after4.jpeg"
        slideMode="hover"
        className="w-full h-full object-cover"
      />
    ),
    className: "md:col-span-1",
    icon: <BsBuildings className="h-4 w-4 text-neutral-500" />,
  }
];
