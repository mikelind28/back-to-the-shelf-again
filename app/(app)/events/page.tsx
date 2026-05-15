import { fetchPastEvents, fetchUpcomingEvents } from "@/lib/data";
import Calendar from "@/ui/components/Calendar";
import EventsPast from "@/ui/components/EventsPast";
import EventsUpcoming from "@/ui/components/EventsUpcoming";
import H1 from "@/ui/components/H1";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
};

export default async function Events() {
  const upcomingEvents = await fetchUpcomingEvents();
  const pastEvents = await fetchPastEvents();

  return (
    <main className="flex flex-col gap-4 py-6 md:items-center lg:gap-6 xl:gap-7">
      <H1 line1="EVENTS" />
      <div className="flex w-full flex-col items-center gap-4 lg:flex-row lg:items-start lg:justify-center lg:gap-1 lg:px-4">
        <div className="flex max-w-lg justify-center px-2 lg:sticky lg:top-4 lg:w-full">
          <Calendar upcomingEvents={upcomingEvents} pastEvents={pastEvents} />
        </div>
        <div className="flex w-full max-w-4xl flex-col items-center gap-4">
          <EventsUpcoming events={upcomingEvents} />
          <div className="mx-auto h-4 w-full bg-[url(/wavy-divider.svg)] bg-size-[75px_auto] bg-center bg-repeat-x opacity-75 md:w-[90%]" />
          <EventsPast events={pastEvents} />
        </div>
      </div>
    </main>
  );
}
