import { Suspense } from "react";
import EventCardList from "./EventCardList";
import H2 from "./H2";
import { fetchPastEvents } from "@/lib/data";
import { EventCardSkeleton } from "./Skeletons";

export default async function EventsPast() {
  const events = fetchPastEvents();

  return (
    <div className="bg-pink-200 p-4 sm:p-6">
      <H2 color="pink" text="Past Events" />
      <Suspense fallback={<EventCardSkeleton />}>
        <EventCardList events={events} />
      </Suspense>
    </div>
  );
}
