import { EventType } from "@/lib/types";
import { paragraph } from "../fonts";
import * as motion from "motion/react-client";

export default function EventPreviewCard({ event }: { event: EventType }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
      viewport={{ once: true }}
      className={`w-full max-w-xl min-w-xs ${paragraph.className} bg-background-50 my-1 flex flex-col rounded-sm p-4 sm:p-6`}
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
    </motion.div>
  );
}
