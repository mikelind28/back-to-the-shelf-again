"use client";

import { EventType } from "@/lib/types";
import EventPreviewCard from "./EventPreviewCard";
import { paragraph } from "../fonts";

export default function EventPreviewList({
  events,
  color,
}: {
  events: EventType[];
  color: "pink" | "green";
}) {
  return (
    <>
      {events.length === 0 ? (
        <p
          className={`${paragraph.className} bg-background-50 2xs:px-4 2xs:py-2 xs:text-xl w-full max-w-md grow rounded-md px-2 py-1 text-center text-lg font-bold shadow-md`}
        >
          No upcoming events!
        </p>
      ) : (
        events.map((event) => (
          <EventPreviewCard key={event.id} event={event} color={color} />
        ))
      )}
    </>
  );
}
