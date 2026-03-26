import { fetchUpcomingEvents } from "lib/data";
import EventCard from "./EventCard";
import { titleHeader } from "ui/fonts";

export default async function EventsUpcoming() {
  const events = await fetchUpcomingEvents();

  return (
    <div className="bg-green-200 p-4">
      <h2
        className={`${titleHeader.className} py-3 text-center text-3xl text-green-400 underline decoration-1 underline-offset-1`}
      >
        Upcoming Events
      </h2>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
