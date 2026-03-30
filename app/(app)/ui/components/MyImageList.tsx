"use client";

import { ImageType } from "@/lib/types";
import Image from "next/image";
import { use } from "react";

export default function MyImageList({
  images,
}: {
  images: Promise<ImageType[]>;
}) {
  const allImages = use(images);

  return (
    <div className="columns-2 gap-1 px-1 py-2 sm:gap-2">
      {allImages.map((image) => (
        <Image
          key={image.id}
          src={`${image.url}`}
          alt={image.alt}
          width={200}
          height={200}
          loading="eager"
          className="mb-1 w-full rounded-2xl sm:mb-2"
        />
      ))}
    </div>
  );
}
