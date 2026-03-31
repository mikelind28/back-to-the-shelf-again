import { paragraph } from "@/ui/fonts";
import MapEmbed from "./MapEmbed";
import { EventType } from "@/lib/types";
import { RichText } from "@payloadcms/richtext-lexical/react";

export default function EventCard({ event }: { event: EventType }) {
  return (
    <div
      className={`event-card w-full lg:max-w-160 lg:min-w-160 xl:max-w-180 xl:min-w-180 ${paragraph.className} bg-background-50 my-4 flex flex-col gap-1 rounded-sm px-4 py-6 sm:px-6 sm:py-8`}
    >
      <p className="text-2xl font-bold sm:text-3xl">
        {event.start_time.toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "America/Chicago",
        })}
      </p>

      <p className="text-xl font-bold sm:text-2xl">
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

      <p className="text-xl sm:text-2xl">{event.location_name}</p>

      <p className="text-lg sm:text-xl">{event.address}</p>

      {event.map_embed_src && <MapEmbed embedSrc={event.map_embed_src} />}

      {event.description && (
        <RichText
          data={event.description}
          className="sm:my-3 sm:border-l-2 sm:border-l-stone-300 sm:pl-3 sm:text-lg"
        />
      )}
    </div>
  );
}
