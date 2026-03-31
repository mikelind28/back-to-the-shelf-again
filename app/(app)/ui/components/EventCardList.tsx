"use client";

import { EventType } from "@/lib/types";
import { use } from "react";
import EventCard from "./EventCard";

export default function EventCardList({
  events,
}: {
  events: Promise<EventType[]>;
}) {
  const allEvents = use(events);

  return (
    <div className="flex flex-col lg:max-w-dvw lg:flex-row lg:gap-5 lg:overflow-x-scroll">
      {allEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
