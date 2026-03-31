"use client";

import { EventType } from "@/lib/types";
import { use } from "react";
import EventPreviewCard from "./EventPreviewCard";

export default function EventPreviewList({
  events,
}: {
  events: Promise<EventType[]>;
}) {
  const allEvents = use(events);

  return (
    <>
      {allEvents.length === 0 ? (
        <p className="text-lg">No upcoming events found.</p>
      ) : (
        allEvents.map((event) => (
          <EventPreviewCard key={event.id} event={event} />
        ))
      )}
    </>
  );
}
