"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function ParallaxImg({ src }: { src: string }) {
  const divRef = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start center", "end start"],
  });

  const transformOrigin = useTransform(
    scrollYProgress,
    [0, 1],
    ["50% 10%", "50% 100%"],
  );

  return (
    <div className="lg:sticky lg:top-4 overflow-hidden sm:mb-8 lg:mb-0 sm:max-w-140 sm:rounded-3xl lg:w-full lg:max-w-110">
      <motion.img
        ref={divRef}
        src={src}
        className="aspect-square scale-110 object-cover"
        style={{ transformOrigin: transformOrigin }}
      />
    </div>
  );
}
