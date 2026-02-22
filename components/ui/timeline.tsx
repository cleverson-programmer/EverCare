"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-background text-foreground md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-28 px-6 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-6xl mb-6 max-w-4xl font-bold leading-tight">
          Our <span className="emotional">Commitment</span> to Care
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl">
          Discover how our dedication to home care and professional cleaning
          services has shaped a standard built on trust, compassion, and
          excellence.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-28">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-16 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-12 absolute left-3 md:left-3 w-12 rounded-full bg-card border border-border flex items-center justify-center shadow-sm">
                <div className="h-4 w-4 rounded-full bg-primary" />
              </div>
              <h3 className="hidden md:block text-2xl md:pl-20 md:text-5xl font-bold text-foreground">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-6 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-6 text-left font-bold text-foreground">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[3px]
          bg-[linear-gradient(to_bottom,transparent,var(--border),transparent)]
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[3px]
            bg-gradient-to-t
            from-[hsl(var(--primary))]
            via-[hsl(var(--secondary))]
            to-transparent
            rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
