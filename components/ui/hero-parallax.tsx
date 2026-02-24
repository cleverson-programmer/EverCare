"use client";
import React, { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import { ServiceToggle } from "@/components/common/ServiceToggle";

export type ServiceType = "cleaning" | "care";
export interface Product {
  title: string;
  link: string;
  thumbnail: string;
  category: ServiceType;
}

export const HeroParallax = ({
  products,
}: {
  products: Product[];
}) => {
  const [selectedService, setSelectedService] =
    useState<ServiceType>("cleaning");

  const filteredProducts = products.filter(
    (product) => product.category === selectedService
  );

  const firstRow = filteredProducts.slice(0, 5);
  const secondRow = filteredProducts.slice(5, 10);
  const thirdRow = filteredProducts.slice(10, 15);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 0.6], [0, 1000]),
    springConfig
  );

  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 0.6], [0, -1000]),
    springConfig
  );

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );

  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <motion.div
      ref={ref}
      animate={{
        backgroundColor:
          selectedService === "care"
            ? "#e1f1bb"
            : "#F3F4F6",
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
      className="
        h-[170vh]
        min-[820px]:h-[200vh]
        min-[1440px]:h-[300vh]
        py-40
        overflow-hidden
        relative
        flex
        flex-col
        [perspective:1000px]
      "
    >
      <Header
        selectedService={selectedService}
        onChange={setSelectedService}
      />

      <motion.div
        style={{ rotateX, rotateZ, translateY, opacity }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={translateX}
            />
          ))}
        </motion.div>

        {/* <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={translateXReverse}
            />
          ))}
        </motion.div>

        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={translateX}
            />
          ))}
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};

interface HeaderProps {
  selectedService: "cleaning" | "care";
  onChange: (value: "cleaning" | "care") => void;
}

export const Header = ({ selectedService, onChange }: HeaderProps) => {
  const isCleaning = selectedService === "cleaning";

  return (
    <div className="max-w-7xl mx-auto py-20 md:py-40 px-4 w-full">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Texto */}
        <div>
          {isCleaning ? (
            <>
              <h1 className="text-3xl md:text-7xl font-bold text-neutral-900 leading-tight">
                Professional Cleaning <br /> Services You Can Trust
              </h1>

              <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-600 leading-relaxed">
                Residential and commercial cleaning solutions tailored to
                maintain spotless, healthy, and welcoming environments.
              </p>
            </>
          ) : (
            <>
              <h1 className="text-3xl md:text-7xl font-bold text-neutral-900 leading-tight">
                Compassionate <br /> Home Care Services
              </h1>

              <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-600 leading-relaxed">
                Personalized in-home care designed to provide comfort,
                dignity, and peace of mind for your loved ones.
              </p>
            </>
          )}
        </div>

        {/* Toggle */}
        {/* <div className="flex md:justify-end">
          <ServiceToggle
            selected={selectedService}
            onChange={onChange}
          />
        </div> */}

      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
