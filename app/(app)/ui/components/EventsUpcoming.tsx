import { Suspense } from "react";
import EventCardList from "./EventCardList";
import H2 from "./H2";
import { fetchUpcomingEvents } from "@/lib/data";
import { EventCardSkeleton } from "./Skeletons";
import ErrorBoundary from "@/ui/components/CustomErrorBoundary";

export default async function EventsUpcoming() {
  const events = fetchUpcomingEvents();

  return (
    <div className="bg-green-200 p-4 sm:p-6">
      <H2 color="green" text="Upcoming Events" />
      <ErrorBoundary title="Upcoming Events Error">
        <Suspense fallback={<EventCardSkeleton />}>
          <EventCardList events={events} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
