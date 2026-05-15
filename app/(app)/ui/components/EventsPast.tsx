import { Suspense } from "react";
import EventPreviewList from "./EventPreviewList";
import H2 from "./H2";
import { EventPreviewSkeleton } from "./Skeletons";
import ErrorBoundary from "@/ui/components/CustomErrorBoundary";
import { gowunDodum } from "../fonts";
import { EventType } from "@/lib/types";

export default async function EventsPast({ events }: { events: EventType[] }) {
  return (
    <div className="2xs:p-4 flex w-full flex-col items-center bg-pink-200 bg-[url(/pink-crosshatch.svg)] bg-size-[30px_30px] bg-center bg-repeat px-2 pt-4 pb-6 sm:p-6 md:w-[90%] md:rounded-lg lg:gap-4 lg:pb-12">
      <H2
        text="Past Events"
        className={`${gowunDodum.className} text-4xl text-pink-400`}
      />
      <ErrorBoundary title="Past Events Error">
        <Suspense fallback={<EventPreviewSkeleton />}>
          <EventPreviewList events={events} color="pink" />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
