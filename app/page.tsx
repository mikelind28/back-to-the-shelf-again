import EventPreviewList from "@/components/EventPreviewList";
import { EventPreviewSkeleton } from "@/components/Skeletons";
import { fetchUpcomingEventsPreview } from "lib/data";
import Link from "next/link";
import { Suspense } from "react";
import { cursive, paragraph, titleHeader } from "ui/fonts";

export default async function Home() {
  const events = fetchUpcomingEventsPreview();

  return (
    <main className="w-full max-w-3xl">
      <div className="relative flex h-full w-full items-center justify-center bg-pink-200/50">
        <div className="aspect-5/3 w-full bg-[url(/book-pages.webp)] bg-cover opacity-30 brightness-110 contrast-75" />

        <div className="absolute">
          <h1 className={`flex flex-col`}>
            <span
              className={`${cursive.className} text-5xl text-green-300 text-shadow-[-1px_1px_0_var(--color-green-400)]`}
            >
              Welcome to
            </span>

            <span
              className={`${titleHeader.className} text-4xl/7 text-pink-300 text-shadow-[1px_1px_0_var(--color-pink-400)]`}
            >
              BACK TO THE SHELF
            </span>

            <span
              className={`${cursive.className} w-full text-center text-7xl/11 text-pink-300 text-shadow-[1px_1px_0_var(--color-pink-400)]`}
            >
              again
            </span>
          </h1>
        </div>
      </div>

      <div className="bg-background-50 flex h-fit w-full flex-col items-center gap-4 border-6 border-pink-300 px-5 py-8">
        <p className={`${paragraph.className} text-center text-lg`}>
          We are a pop-up bookstore in South-Central WI giving gently used
          romance books (and their readers!) a second chance at love 💕📖
        </p>
        <Link href="/about" className="text-lg text-pink-300">
          Learn more about us!
        </Link>
      </div>

      <div className="flex flex-col bg-green-200 p-4">
        <h2
          className={`${titleHeader.className} py-3 text-center text-3xl text-green-400 underline decoration-1 underline-offset-1`}
        >
          Upcoming Events
        </h2>

        <Suspense fallback={<EventPreviewSkeleton />}>
          <EventPreviewList events={events} />
        </Suspense>

        <Link
          href="/events"
          className="my-4 text-center text-xl text-green-400"
        >
          See all...
        </Link>
      </div>
    </main>
  );
}
