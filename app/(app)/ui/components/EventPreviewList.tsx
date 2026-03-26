"use client";

import { paragraph } from "@/ui/fonts";
import { EventType } from "@/lib/types";
import { use } from "react";

function EventPreview({ event }: { event: EventType }) {
  return (
    <div
      className={`${paragraph.className} bg-background-50 my-1 flex flex-col rounded-sm px-4 py-4`}
    >
      <p className="text-2xl font-bold">
        {event.start_time.toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <p className="text-xl font-bold">
        {event.start_time.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
        })}
        –
        {event.end_time.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
        })}
      </p>

      <p className="text-xl">{event.location_name}</p>

      <p className="text-lg">{event.address}</p>
    </div>
  );
}

export default function EventPreviewList({
  events,
}: {
  events: Promise<EventType[]>;
}) {
  const allEvents = use(events);

  return (
    <>
      {allEvents.map((event) => (
        <EventPreview key={event.id} event={event} />
      ))}
    </>
  );
}
