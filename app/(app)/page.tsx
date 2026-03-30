import EventPreviewList from "./ui/components/EventPreviewList";
import {
  EventPreviewSkeleton,
  ImageListSkeleton,
} from "./ui/components/Skeletons";
import { fetchImages, fetchUpcomingEventsPreview } from "./lib/data";
import Link from "next/link";
import { Suspense } from "react";
import { cursive, paragraph, titleHeader } from "./ui/fonts";
import H2 from "./ui/components/H2";
import MyImageList from "./ui/components/MyImageList";
import ParallaxBg from "./ui/components/ParallaxBg";

export default async function Home() {
  const events = fetchUpcomingEventsPreview();
  const images = fetchImages();

  return (
    <main className="w-full">
      <div className="relative flex h-full w-full items-center justify-center bg-pink-200/50 shadow-[inset_0px_8px_40px_0px_rgb(0,0,0,30%)]">
        <ParallaxBg />

        {/* welcome */}
        <div className="absolute">
          <h1 className={`flex flex-col`}>
            <span
              className={`${cursive.className} text-5xl text-green-300 text-shadow-[-1px_1px_0_var(--color-green-400)] sm:text-6xl`}
            >
              Welcome to
            </span>

            <span
              className={`${titleHeader.className} text-4xl/7 text-pink-300 text-shadow-[1px_1px_0_var(--color-pink-400)] sm:text-5xl/9`}
            >
              BACK TO THE SHELF
            </span>

            <span
              className={`${cursive.className} w-full text-center text-7xl/11 text-pink-300 text-shadow-[1px_1px_0_var(--color-pink-400)] sm:text-8xl/13`}
            >
              again
            </span>
          </h1>
        </div>
      </div>

      {/* about */}
      <div className="flex w-full flex-col items-center gap-3 bg-pink-200 px-4 py-6 text-lg sm:gap-4 sm:px-6 sm:py-8">
        <p
          className={`${paragraph.className} bg-background-50 w-full max-w-4xl flex-col rounded-sm px-6 py-8 text-center sm:px-12 sm:py-10 sm:text-xl md:leading-8`}
        >
          We are a pop-up bookstore in South-Central WI giving gently used
          romance books (and their readers!) a second chance at love 💕📖
        </p>
        <Link
          href="/about"
          className="w-full max-w-md grow rounded-md bg-pink-300 px-4 py-2 text-center font-medium text-white text-shadow-2xs/25 sm:text-xl"
        >
          Where our story began...
        </Link>
      </div>

      {/* upcoming events */}
      <div className="flex w-full flex-col items-center bg-green-200 p-4 sm:gap-1 sm:px-6 sm:py-8">
        <Link href="/events">
          <H2 color="green" text="Upcoming Events" />
        </Link>

        <Suspense fallback={<EventPreviewSkeleton />}>
          <EventPreviewList events={events} />
        </Suspense>

        <Link
          href="/events"
          className="my-4 w-full max-w-xl grow rounded-md bg-green-300 px-4 py-2 text-center text-lg font-medium text-white text-shadow-2xs/25 sm:text-xl"
        >
          See all...
        </Link>
      </div>

      {/* images */}
      <Suspense fallback={<ImageListSkeleton />}>
        <MyImageList images={images} />
      </Suspense>
    </main>
  );
}
