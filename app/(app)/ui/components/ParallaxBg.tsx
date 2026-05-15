"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function ParallaxBg() {
  const divRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start center", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"],
  );

  return (
    <motion.div
      ref={divRef}
      className="xs:aspect-5/3 aspect-5/4 w-full bg-[url(../../../public/book-pages.webp)] bg-size-[110%] opacity-30 blur-[1px] brightness-130 contrast-75 lg:aspect-2/1 lg:bg-size-[100%] xl:aspect-3/1 2xl:aspect-4/1"
      style={{ backgroundPositionY: backgroundPositionY }}
    />
  );
}
