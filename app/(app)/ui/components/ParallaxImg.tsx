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
    ["50% 40%", "50% 100%"],
  );

  return (
    <div className="xs:max-w-120 xs:rounded-xl xs:mb-8 overflow-hidden sm:max-w-140 sm:rounded-3xl lg:sticky lg:top-4 lg:mb-0 lg:w-full lg:max-w-110">
      <motion.img
        ref={divRef}
        src={src}
        className="aspect-square scale-110 object-cover"
        style={{ transformOrigin: transformOrigin }}
      />
    </div>
  );
}
