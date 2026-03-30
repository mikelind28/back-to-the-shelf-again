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
    <>
      {allEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </>
  );
}
