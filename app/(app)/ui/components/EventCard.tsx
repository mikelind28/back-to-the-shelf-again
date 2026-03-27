import { paragraph } from "@/ui/fonts";
import MapEmbed from "./MapEmbed";
import { EventType } from "@/lib/types";
import { RichText } from "@payloadcms/richtext-lexical/react";

export default function EventCard({ event }: { event: EventType }) {
  return (
    <div
      className={`event-card ${paragraph.className} bg-background-50 my-4 flex flex-col gap-1 rounded-sm px-4 py-6`}
    >
      <p className="text-2xl font-bold">
        {event.start_time.toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "America/Chicago",
        })}
      </p>

      <p className="text-xl font-bold">
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

      <p className="text-xl">{event.location_name}</p>

      <p className="text-lg">{event.address}</p>

      {event.map_embed_src && <MapEmbed embedSrc={event.map_embed_src} />}

      {event.description2 ? (
        <RichText data={event.description2} />
      ) : event.description ? (
        <p>{event.description}</p>
      ) : null}
    </div>
  );
}
