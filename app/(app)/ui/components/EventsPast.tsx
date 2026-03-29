import { fetchPastEvents } from "@/lib/data";
import EventCard from "./EventCard";
import H2 from "./H2";

export default async function EventsPast() {
  const events = await fetchPastEvents();

  return (
    <div className="bg-pink-200 p-4 sm:p-6">
      <H2 color='pink' text="Past Events" />
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
