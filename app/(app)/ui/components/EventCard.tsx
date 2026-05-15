import {
  amatic,
  paragraph,
  titleHeaderBold,
} from "@/ui/fonts";
import MapEmbed from "./MapEmbed";
import { EventType } from "@/lib/types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import * as motion from "motion/react-client";
import { ReactNode } from "react";
import {
  ArrowTopRightOnSquareIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

function EventCardHeading({ text }: { text: string }) {
  return (
    <div className="mb-2 flex max-w-3xl items-center gap-4 md:mb-4">
      <div className="hidden h-px w-full bg-stone-300 md:block" />
      <h1
        className={`${amatic.className} text-3xl tracking-widest uppercase sm:text-4xl`}
      >
        {text}
      </h1>
      <div className="h-px w-full bg-stone-300" />
    </div>
  );
}

function BounceInDetails({ children }: { children: ReactNode | ReactNode[] }) {
  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      whileInView={{ x: "-48px", opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.5,
        type: "spring",
        duration: 0.8,
        bounce: 0.8,
        damping: 5,
        mass: 0.3,
        velocity: 2,
      }}
      className="w-[calc(100%+40px)] max-w-3xl rounded-lg border-6 border-white bg-white bg-[url(/svg-crinkles.svg)] bg-size-[20px_20px] bg-center bg-repeat py-2 pr-2 pl-10 shadow-sm outline outline-stone-300 md:w-full md:translate-x-12 md:pl-2"
    >
      {children}
    </motion.div>
  );
}

export default function EventCard({ event }: { event: EventType }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.7 }}
      className={`event-card w-full ${paragraph.className} bg-background-50 xs:rounded-md 2xs:gap-2 2xs:px-6 2xs:py-8 my-4 flex flex-col gap-1 overflow-hidden px-4 py-6 sm:px-10 md:items-center md:gap-4 md:px-16 lg:flex-row lg:items-stretch lg:gap-8 lg:py-16`}
    >
      <div className="flex w-full max-w-xl grow-4 flex-col md:gap-4">
        {event.end_time > new Date() ? (
          <div
            className={`${titleHeaderBold.className} flex w-full max-w-xl items-center gap-2 rounded-sm border border-green-300 bg-green-500/33 px-2 py-px text-lg text-green-400 sm:text-xl md:py-1`}
          >
            <ClockIcon className="size-5" strokeWidth={2} />
            <p>Upcoming Event!</p>
          </div>
        ) : (
          <div
            className={`${titleHeaderBold.className} flex w-full max-w-xl items-center gap-2 rounded-sm border border-pink-400 bg-pink-200 px-2 text-lg text-pink-400 sm:text-xl md:py-1`}
          >
            <ClockIcon className="size-5" strokeWidth={2} />
            <p>Past Event</p>
          </div>
        )}

        {event.map_embed_src && <MapEmbed embedSrc={event.map_embed_src} />}
      </div>

      <div className="2xs:gap-8 flex w-full max-w-xl flex-col gap-5">
        <div className="flex flex-col">
          <EventCardHeading text="time" />

          <BounceInDetails>
            <div className="rounded-md bg-white px-6 py-2">
              <p className="text-xl sm:text-2xl">
                {event.start_time.toLocaleString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  timeZone: "America/Chicago",
                })}
              </p>

              <p className="text-lg sm:text-xl">
                {event.start_time.toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  timeZone: "America/Chicago",
                })}
                –
                {event.end_time.toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  timeZone: "America/Chicago",
                })}
              </p>
            </div>
          </BounceInDetails>
        </div>

        <div className="flex flex-col">
          <EventCardHeading text="venue" />
          <BounceInDetails>
            <div className="flex justify-between gap-2 rounded-md bg-white p-2 pl-6">
              <div className="">
                <p className="text-xl sm:text-2xl">{event.location_name}</p>
                <p className="text-lg sm:text-xl">{event.address}</p>
              </div>
              {event.venue_link && (
                <Link
                  href={event.venue_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowTopRightOnSquareIcon className="size-7" />
                </Link>
              )}
            </div>
          </BounceInDetails>
        </div>

        {event.description && (
          <div className="flex flex-col">
            <EventCardHeading text="description" />
            <BounceInDetails>
              <RichText
                data={event.description}
                className="2xs:text-lg rounded-md bg-white px-4 py-4 pl-6 sm:py-8 sm:text-xl/8"
              />
            </BounceInDetails>
          </div>
        )}
      </div>
    </motion.div>
  );
}
