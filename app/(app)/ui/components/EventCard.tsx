import { paragraph } from "@/ui/fonts";
import MapEmbed from "./MapEmbed";
import { EventType } from "@/lib/types";

export default function EventCard({ event }: { event: EventType }) {
  return (
    <div
      className={`${paragraph.className} bg-background-50 my-4 flex flex-col gap-1 rounded-sm px-4 py-6`}
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

      <MapEmbed embedSrc={event.map_embed_src} />

      <p>{event.description}</p>
    </div>
  );
}
