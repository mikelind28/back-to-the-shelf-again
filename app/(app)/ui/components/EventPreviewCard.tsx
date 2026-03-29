import { EventType } from "@/lib/types";
import { paragraph } from "../fonts";

export default function EventPreviewCard({ event }: { event: EventType }) {
  return (
    <div
      className={`${paragraph.className} bg-background-50 my-1 flex flex-col rounded-sm p-4 sm:p-6`}
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
    </div>
  );
}