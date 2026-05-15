import { EventType } from "@/lib/types";
import { paragraph, titleHeaderBold } from "../fonts";
import * as motion from "motion/react-client";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

export default function EventPreviewCard({
  event,
  color,
}: {
  event: EventType;
  color: "pink" | "green";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
      viewport={{ once: true }}
      className={`w-full max-w-lg min-w-xs ${paragraph.className} bg-background-50 my-1 rounded-md shadow-md`}
    >
      <Link href={`/events/${event.id}`} className={`flex justify-between`}>
        <div className="xs:px-3 xs:py-4 xs:gap-4 flex gap-3 px-2 py-3 sm:px-4 sm:py-6">
          {/* calendar square */}
          <div
            className={cn([
              "flex aspect-square h-25 min-w-fit flex-col overflow-hidden rounded-md border",
              color === "pink" && "border-pink-400",
              color === "green" && "border-green-400",
            ])}
          >
            <div
              className={cn([
                `text-background-50 h-fit w-full py-0.5 text-center ${titleHeaderBold.className}`,
                color === "pink" && "bg-pink-400",
                color === "green" && "bg-green-400",
              ])}
            >
              {event.start_time.toLocaleString("en-US", {
                month: "long",
                timeZone: "America/Chicago",
              })}
            </div>
            <div className="flex h-full items-center justify-center">
              <p
                className={cn([
                  `pb-2 text-center text-5xl text-green-400 ${titleHeaderBold.className}`,
                  color === "pink" && "text-pink-400",
                  color === "green" && "text-green-400",
                ])}
              >
                {event.start_time.toLocaleString("en-US", {
                  day: "numeric",
                  timeZone: "America/Chicago",
                })}
              </p>
            </div>
          </div>

          {/* info stack */}
          <div className="flex flex-col divide-y divide-green-200">
            <p className="xs:text-2xl/7 xs:pb-2 pb-1 text-xl/6 font-bold">
              {event.location_name}
            </p>

            <p className="xs:pt-2 pt-1 text-xl sm:text-2xl">
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
        </div>
        <div
          className={cn([
            "2xs:w-8 xs:w-9 flex w-7 items-center justify-center rounded-r-md",
            color === "pink" && "bg-pink-400",
            color === "green" && "bg-green-400",
          ])}
        >
          <ChevronRightIcon
            className="text-background-50 size-7 drop-shadow-xs/50"
            strokeWidth={2}
          />
        </div>
      </Link>
    </motion.div>
  );
}
