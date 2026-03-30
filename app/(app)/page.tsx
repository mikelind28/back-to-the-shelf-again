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

export default async function Home() {
  const events = fetchUpcomingEventsPreview();
  const images = fetchImages();

  return (
    <main className="w-full max-w-3xl">
      <div className="relative flex h-full w-full items-center justify-center bg-pink-200/50">
        <div className="aspect-5/3 w-full bg-[url(/book-pages.webp)] bg-cover opacity-30 brightness-110 contrast-75" />

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

      {/* about bubble */}
      <div className="bg-background-50 flex h-fit w-full flex-col items-center gap-4 border-6 border-y-8 border-pink-300 px-5 py-8 text-lg sm:px-12 sm:py-10 sm:text-xl">
        <p className={`${paragraph.className} text-center`}>
          We are a pop-up bookstore in South-Central WI giving gently used
          romance books (and their readers!) a second chance at love 💕📖
        </p>
        <Link href="/about" className="text-pink-300">
          Learn more about us!
        </Link>
      </div>

      {/* upcoming events */}
      <div className="flex flex-col bg-green-200 p-4 sm:gap-1 sm:px-6 sm:py-8">
        <Link href="/events">
          <H2 color="green" text="Upcoming Events" />
        </Link>

        <Suspense fallback={<EventPreviewSkeleton />}>
          <EventPreviewList events={events} />
        </Suspense>

        <Link
          href="/events"
          className="my-4 text-center text-xl text-green-400 sm:text-2xl"
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
