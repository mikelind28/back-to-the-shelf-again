import EventPreviewList from "./ui/components/EventPreviewList";
import {
  EventPreviewSkeleton,
  ImageListSkeleton,
} from "./ui/components/Skeletons";
import { fetchImages, fetchUpcomingEventsPreview } from "./lib/data";
import Link from "next/link";
import { Suspense } from "react";
import { cursive2, gowunDodum, titleHeader } from "./ui/fonts";
import H2 from "./ui/components/H2";
import MyImageList from "./ui/components/MyImageList";
import ParallaxBg from "./ui/components/ParallaxBg";
import Image from "next/image";
import ErrorBoundary from "@/ui/components/CustomErrorBoundary";
import * as motion from "motion/react-client";

export default async function Home() {
  const events = await fetchUpcomingEventsPreview();
  const images = fetchImages();

  return (
    <main className="w-full 2xl:flex 2xl:flex-col 2xl:gap-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="relative flex h-full w-full items-center justify-center border-t border-t-pink-300/75 bg-pink-200/50 shadow-[inset_0px_8px_40px_0px_rgb(0,0,0,30%)]"
      >
        <ParallaxBg />

        {/* welcome */}
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className="bg-background-50 2xs:px-6 2xs:pt-4 2xs:pb-10 absolute rounded-xl px-4 pt-2 pb-6 shadow-md sm:pt-6 sm:pb-14 md:px-12"
        >
          <h1 className={`flex flex-col`}>
            <span
              className={`${cursive2.className} 2xs:text-6xl text-5xl text-green-300 text-shadow-[-1px_1px_0_var(--color-green-400)] sm:text-6xl md:text-7xl lg:text-8xl`}
            >
              Welcome to
            </span>

            <span
              className={`${titleHeader.className} 2xs:text-[2.5rem] text-[2.2rem] leading-7 text-pink-300 text-shadow-[1px_1px_0_var(--color-pink-400)] sm:text-5xl sm:leading-10 md:text-6xl md:leading-11 lg:text-7xl lg:leading-13`}
            >
              BACK TO THE SHELF
            </span>

            <span
              className={`${cursive2.className} 2xs:text-[5rem] w-full text-center text-[4rem] leading-12 text-pink-300 text-shadow-[1px_1px_0_var(--color-pink-400)] sm:text-8xl sm:leading-13 lg:text-9xl lg:leading-18`}
            >
              again
            </span>
          </h1>
        </motion.div>
      </motion.div>

      {/* about */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="relative flex w-full flex-col items-center gap-3 border-t-2 border-b-2 border-t-pink-400/75 border-b-pink-300/75 bg-pink-200 bg-[url(/pink-curls.svg)] bg-size-[75px_75px] bg-center bg-repeat px-4 py-12 text-lg sm:gap-4 sm:px-6 sm:py-16 2xl:mx-auto 2xl:w-[90%] 2xl:rounded-lg 2xl:border-x-2 2xl:border-x-pink-300"
      >
        <div className="bg-background-50 2xs:px-8 2xs:py-10 xs:px-12 flex w-full max-w-xl flex-col items-center gap-4 rounded-lg px-6 py-8 text-center text-xl shadow-md sm:gap-6 sm:px-16 sm:text-2xl sm:leading-9">
          <p className={`${titleHeader.className}`}>
            We are a pop-up bookstore in South-Central WI giving gently used
            romance books (and their readers!) a second chance at love 💕📖
          </p>
          <Link
            href="/about"
            className={`${titleHeader.className} w-full max-w-md grow rounded-full bg-pink-300 px-4 py-2 text-center text-xl text-white shadow-xs shadow-pink-400 text-shadow-2xs/25 hover:brightness-110 active:brightness-90 sm:text-2xl/7`}
          >
            Where our story began...
          </Link>
        </div>
      </motion.div>

      <div className="overflow-hidden border-b-2 border-green-300 bg-green-200 md:relative md:flex md:justify-center md:bg-[url(/green-waves.svg)] md:bg-size-[25px_25px] md:bg-left md:bg-repeat md:px-4 md:py-16 2xl:mx-auto 2xl:w-[90%] 2xl:gap-16 2xl:rounded-lg 2xl:border-2 2xl:py-20">
        {/* green scallops svg */}
        <div className="hidden md:absolute md:top-0 md:block md:h-8 md:w-full md:bg-[url(/green-banner.svg)] md:bg-size-[auto_32px] md:bg-top md:bg-repeat-x" />
        {/* molly and emily */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="relative md:m-4 md:min-h-120 md:max-w-100 md:shrink-2 md:overflow-hidden md:rounded-2xl"
        >
          <Image
            id="molly-and-emily"
            src="/molly-and-emily.webp"
            alt="Molly and Emily"
            width={1500}
            height={1500}
            className="aspect-4/3 w-full object-cover object-[50%_75%] sm:aspect-5/3 sm:object-[50%_60%] md:h-full md:origin-[60%_70%] md:scale-150 md:object-bottom"
            loading="eager"
          />
          <label
            htmlFor="molly-and-emily"
            className={`${gowunDodum.className} xs:text-xl absolute bottom-0 w-full bg-black/50 p-2 text-center text-lg/5 text-white md:py-2`}
          >
            Molly and Emily, founders of Back to the Shelf Again
          </label>
        </motion.div>

        {/* upcoming events */}
        <div className="relative flex h-fit w-full flex-col items-center gap-2 bg-green-200 bg-[url(/green-waves.svg)] bg-size-[25px_25px] bg-left bg-repeat p-4 pt-12 sm:gap-1 sm:px-6 sm:pt-14 sm:pb-8 md:max-w-150 md:grow-2 md:items-start md:bg-inherit md:pt-0">
          <div className="absolute top-0 h-8 w-full bg-[url(/green-banner.svg)] bg-size-[auto_32px] bg-top bg-repeat-x md:hidden" />

          <Link href="/events">
            <H2
              text="Upcoming Events"
              className={`${titleHeader.className} text-4xl text-green-400`}
            />
          </Link>

          <ErrorBoundary title="Upcoming Events Preview Error">
            <Suspense fallback={<EventPreviewSkeleton />}>
              <EventPreviewList events={events} color="green" />
            </Suspense>
          </ErrorBoundary>

          <Link
            href="/events"
            className={`${titleHeader.className} xs:text-2xl my-4 h-fit w-full max-w-md grow rounded-md bg-green-300 px-4 py-2 text-center text-xl font-medium text-white shadow-xs/75 text-shadow-2xs/25 hover:brightness-110 active:brightness-90`}
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
