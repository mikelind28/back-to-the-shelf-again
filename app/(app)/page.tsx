import EventPreviewList from "./ui/components/EventPreviewList";
import {
  EventPreviewSkeleton,
  ImageListSkeleton,
} from "./ui/components/Skeletons";
import { fetchImages, fetchUpcomingEventsPreview } from "./lib/data";
import Link from "next/link";
import { Suspense } from "react";
import { titleHeader } from "./ui/fonts";
import H2 from "./ui/components/H2";
import MyImageList from "./ui/components/MyImageList";
import ParallaxBg from "./ui/components/ParallaxBg";
import ErrorBoundary from "@/ui/components/CustomErrorBoundary";
import * as motion from "motion/react-client";
import WelcomeAndAboutFade from "./ui/components/WelcomeAndAboutFade";
import MollyAndEmilyImg from "./ui/components/MollyAndEmilyImg";

export default async function Home() {
  const events = await fetchUpcomingEventsPreview();
  const images = fetchImages();

  return (
    <main className="w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="relative flex h-full w-full items-center justify-center border-t border-t-pink-300/75 bg-pink-200/50 shadow-[inset_0px_8px_40px_0px_rgb(0,0,0,30%)]"
      >
        <ParallaxBg />
        <div className="2xs:px-4 absolute px-2">
          <WelcomeAndAboutFade />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="2xs:px-4 flex w-full justify-center border-t-2 border-b-2 border-t-pink-400/75 border-b-pink-300/75 bg-pink-200 bg-[url(/pink-curls.svg)] bg-size-[75px_75px] bg-center bg-repeat px-2 py-12 text-lg sm:gap-4 sm:px-12 sm:py-16 md:hidden md:rounded-lg md:border-2 md:border-pink-300 md:px-3 md:py-8 2xl:mx-auto 2xl:w-[90%] 2xl:rounded-lg 2xl:border-x-2 2xl:border-x-pink-300"
      >
        <MollyAndEmilyImg />
      </motion.div>

      <div className="md:border-y-2 md:border-y-pink-300 md:bg-pink-200 md:bg-[url(/pink-curls.svg)] md:bg-size-[75px_75px] md:bg-center md:bg-repeat md:px-3 md:py-16">
        <div className="overflow-hidden border-b-2 border-green-300 bg-green-200 md:relative md:flex md:items-stretch md:justify-center md:rounded-2xl md:border-2 md:bg-[url(/green-waves.svg)] md:bg-size-[25px_25px] md:bg-left md:bg-repeat md:px-4 md:pt-14 md:pb-10 md:shadow-sm/33 lg:mx-auto lg:max-w-6xl 2xl:py-20">
          {/* green scallops svg */}
          <div className="hidden md:absolute md:top-0 md:block md:h-8 md:w-full md:bg-[url(/green-banner.svg)] md:bg-size-[auto_32px] md:bg-top md:bg-repeat-x md:drop-shadow-xs/33" />
          {/* molly and emily */}
          <div className="hidden md:flex md:h-full md:w-full md:grow md:justify-end">
            <MollyAndEmilyImg />
          </div>

          {/* upcoming events */}
          <div className="relative flex h-fit w-full flex-col items-center gap-2 bg-green-200 bg-[url(/green-waves.svg)] bg-size-[25px_25px] bg-left bg-repeat p-4 pt-12 sm:gap-1 sm:px-6 sm:pt-14 sm:pb-8 md:max-w-150 md:grow-2 md:items-start md:bg-transparent md:bg-none md:pt-0">
            {/* green scallops svg */}
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
      </div>

      {/* images */}
      <Suspense fallback={<ImageListSkeleton />}>
        <MyImageList images={images} />
      </Suspense>
    </main>
  );
}
