"use client";

import { ImageType } from "@/lib/types";
import { motion } from "motion/react";
import Image from "next/image";
import { use } from "react";

const MotionImage = motion.create(Image);

export default function MyImageList({
  images,
}: {
  images: Promise<ImageType[]>;
}) {
  const allImages = use(images);

  return (
    <div className="flex columns-1 flex-col items-center justify-center p-2 sm:block sm:columns-2 sm:gap-2 sm:px-2 sm:py-4 lg:columns-3 lg:gap-3 2xl:columns-4">
      {allImages.map((image) => {
        const url = image.url.replace("/api/media/file/", "/media/");
        return (
          <MotionImage
            key={image.id}
            src={`${url}`}
            alt={image.alt}
            width={800}
            height={800}
            loading="eager"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-2 w-full max-w-120 rounded-2xl contrast-75 hue-rotate-340 sm:mb-2 sm:max-w-full lg:mb-3"
          />
        );
      })}
    </div>
  );
}
