import { fetchPastEvents } from "@/lib/data";
import EventCard from "./EventCard";
import { titleHeader } from "@/ui/fonts";

export default async function EventsPast() {
  const events = await fetchPastEvents();

  return (
    <div className="bg-pink-200 p-4">
      <h2
        className={`${titleHeader.className} py-3 text-center text-3xl text-pink-400 underline decoration-1 underline-offset-1`}
      >
        Past Events
      </h2>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
