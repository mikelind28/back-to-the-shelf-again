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
    <div className="flex columns-1 flex-col items-center p-2 sm:block sm:columns-2 sm:gap-2 sm:px-2 sm:py-4 lg:columns-3 lg:gap-3">
      {allImages.map((image) => {
        const url = image.url.replace("/api/media/file/", "/media/");
        return (
          <Image
            key={image.id}
            src={`${url}`}
            alt={image.alt}
            width={200}
            height={200}
            loading="eager"
            className="mb-2 w-full max-w-120 rounded-2xl contrast-75 hue-rotate-340 sm:mb-2 lg:mb-3"
          />
        );
      })}
    </div>
  );
}
