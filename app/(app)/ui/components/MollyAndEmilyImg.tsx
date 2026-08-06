"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { gowunDodum } from "../fonts";
import Image from "next/image";
import { useRef } from "react";

const MotionImageComponent = motion.create(Image);

export default function MollyAndEmilyImg() {
  const imgRef = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });

  const objectPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0% 55%", " 0% 70%"],
  );

  return (
    <div className="relative overflow-hidden rounded-xl border-2 border-pink-300 sm:max-w-xl md:border-green-300 lg:max-w-md">
      <MotionImageComponent
        ref={imgRef}
        id="molly-and-emily"
        src="/molly-and-emily.webp"
        alt="Molly and Emily"
        width={4032}
        height={6048}
        quality={25}
        className="aspect-4/3 scale-120 object-cover md:aspect-4/5 md:origin-[50%_75%] md:scale-150"
        loading="eager"
        style={{ objectPosition: objectPositionY }}
      />
      <label
        htmlFor="molly-and-emily"
        className={`${gowunDodum.className} xs:text-xl absolute bottom-0 w-full bg-black/50 p-2 text-center text-lg/5 text-white md:py-2 md:text-lg/6`}
      >
        Molly and Emily, founders of Back to the Shelf Again
      </label>
    </div>
  );
}
