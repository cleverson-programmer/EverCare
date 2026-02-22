"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  href,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  href?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <div className="cursor-pointer transition-opacity hover:opacity-70">
        {href ? (
          <Link href={href}>
            <p className="text-inherit">{item}</p>
          </Link>
        ) : (
          <p className="text-inherit">{item}</p>
        )}
      </div>

      {active !== null && children && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                layoutId="active"
                className="bg-background rounded-2xl overflow-hidden border border-border shadow-2xl"
              >
                <motion.div layout className="w-[640px] max-w-[90vw] p-6">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
  isHovered,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  isHovered: boolean;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className={cn(
        "relative flex justify-center space-x-10 px-4 py-2 text-sm font-bold uppercase tracking-widest transition-colors duration-300",
        // Lógica: No hover, usa a cor do tema (Preto no Light, Off-white no Dark)
        isHovered 
          ? "text-foreground" 
          : "text-white"
      )}
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex items-center gap-4 p-3 rounded-xl hover:bg-accent transition-all duration-200">
      <Image src={src} width={48} height={48} alt={title} className="rounded-md object-cover" />
      <div className="flex flex-col">
        <h4 className="text-sm font-bold text-foreground leading-tight">{title}</h4>
        <p className="text-xs text-muted-foreground line-clamp-1">{description}</p>
      </div>
    </Link>
  );
};
