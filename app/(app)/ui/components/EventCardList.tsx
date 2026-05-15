"use client";

import { EventType } from "@/lib/types";
import { use } from "react";
import EventCard from "./EventCard";
import { paragraph } from "../fonts";

export default function EventCardList({
  events,
}: {
  events: Promise<EventType[]>;
  color: "pink" | "green";
}) {
  const allEvents = use(events);

  return (
    <div className="flex flex-col items-center md:gap-2">
      {allEvents.length === 0 ? (
        <p
          className={`${paragraph.className} bg-background-50 2xs:px-4 2xs:py-2 xs:text-xl rounded-md px-2 py-1 text-lg font-bold shadow-md`}
        >
          No upcoming events!
        </p>
      ) : (
        allEvents.map((event) => <EventCard key={event.id} event={event} />)
      )}
    </div>
  );
}
