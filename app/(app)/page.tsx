import EventPreviewList from "./ui/components/EventPreviewList";
import {
  EventPreviewSkeleton,
  ImageListSkeleton,
} from "./ui/components/Skeletons";
import { fetchImages, fetchUpcomingEventsPreview } from "./lib/data";
import Link from "next/link";
import { Suspense } from "react";
import { cursive, gowunDodum, titleHeader } from "./ui/fonts";
import H2 from "./ui/components/H2";
import MyImageList from "./ui/components/MyImageList";
import ParallaxBg from "./ui/components/ParallaxBg";
import Image from "next/image";
import ErrorBoundary from "@/ui/components/CustomErrorBoundary";

export default function Home() {
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
              className={`${cursive.className} text-6xl text-green-300 text-shadow-[-1px_1px_0_var(--color-green-400)] sm:text-6xl md:text-7xl lg:text-8xl`}
            >
              Welcome to
            </span>

            <span
              className={`${titleHeader.className} text-[2.5rem] leading-7 text-pink-300 text-shadow-[1px_1px_0_var(--color-pink-400)] sm:text-5xl sm:leading-10 md:text-6xl md:leading-11 lg:text-7xl lg:leading-13`}
            >
              BACK TO THE SHELF
            </span>

            <span
              className={`${cursive.className} w-full text-center text-[5rem] leading-12 text-pink-300 text-shadow-[1px_1px_0_var(--color-pink-400)] sm:text-8xl sm:leading-13 lg:text-9xl lg:leading-18`}
            >
              again
            </span>
          </h1>
        </div>
      </div>

      {/* about */}
      <div className="flex w-full flex-col items-center gap-3 border-y border-y-pink-300 bg-pink-200 px-4 py-6 text-lg sm:gap-4 sm:px-6 sm:py-8">
        <p
          className={`${gowunDodum.className} bg-background-50 w-full max-w-4xl flex-col rounded-sm px-6 py-8 text-center text-xl sm:px-12 sm:py-10 sm:text-xl md:leading-8`}
        >
          We are a pop-up bookstore in South-Central WI giving gently used
          romance books (and their readers!) a second chance at love 💕📖
        </p>
        <Link
          href="/about"
          className={`${titleHeader.className} w-full max-w-md grow rounded-full bg-pink-300 px-4 py-2 text-center text-xl font-medium text-white sm:text-xl`}
        >
          Where our story began...
        </Link>
      </div>

      <div className="border-b border-b-green-300 bg-green-200 md:flex md:justify-center md:py-2 xl:py-6 2xl:py-10">
        {/* molly and emily */}
        <div className="relative md:m-4 md:min-h-120 md:max-w-100 md:overflow-hidden md:rounded-2xl">
          <Image
            id="molly-and-emily"
            src="/molly-and-emily.webp"
            alt="Molly and Emily"
            width={1500}
            height={1500}
            className="aspect-4/3 w-full object-cover object-[50%_75%] md:h-full md:origin-[60%_70%] md:scale-150 md:object-bottom"
            loading="eager"
          />
          <label
            htmlFor="molly-and-emily"
            className={`${gowunDodum.className} absolute bottom-0 w-full bg-black/50 py-1 text-center text-white sm:text-lg md:py-2 md:text-xl`}
          >
            Molly and Emily
          </label>
        </div>

        {/* upcoming events */}
        <div className="flex h-fit w-full flex-col items-center bg-green-200 p-4 sm:gap-1 sm:px-6 sm:py-8 md:max-w-150 md:pt-0">
          <Link href="/events">
            <H2 color="green" text="Upcoming Events" />
          </Link>

          <ErrorBoundary title="Upcoming Events Preview Error">
            <Suspense fallback={<EventPreviewSkeleton />}>
              <EventPreviewList events={events} />
            </Suspense>
          </ErrorBoundary>

          <Link
            href="/events"
            className={`${titleHeader.className} my-4 h-fit w-full max-w-lg grow rounded-md bg-green-300 px-4 py-2 text-center text-xl font-medium text-white text-shadow-2xs/25 sm:text-2xl`}
          >
            See all events
          </Link>
        </div>
      </div>

      {/* images */}
      <Suspense fallback={<ImageListSkeleton />}>
        <MyImageList images={images} />
      </Suspense>
    </main>
  );
}
