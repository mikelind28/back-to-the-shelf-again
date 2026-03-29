import { fetchUpcomingEvents } from "@/lib/data";
import EventCard from "./EventCard";
import H2 from "./H2";

export default async function EventsUpcoming() {
  const events = await fetchUpcomingEvents();

  return (
    <div className="bg-green-200 p-4 sm:p-6">
      <H2 color='green' text="Upcoming Events" />
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
