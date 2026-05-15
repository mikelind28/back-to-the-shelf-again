import { fetchEventById } from "@/lib/data";
import EventCard from "@/ui/components/EventCard";
import { gowunDodum } from "@/ui/fonts";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ResolvingMetadata, Metadata } from "next";
import Link from "next/link";

type Props = {
  params: Promise<{ event_id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { event_id } = await params;
  const event = await fetchEventById(event_id);
  const title = !event
    ? "Event"
    : `${event.location_name} – ${event.start_time.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "America/Chicago",
      })}`;

  return {
    title: title,
  };
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ event_id: string }>;
}) {
  const { event_id } = await params;
  const event = await fetchEventById(event_id);
  return (
    <>
      <Link
        href="/events"
        className={`${gowunDodum.className} flex items-center gap-2 px-2 text-xl md:px-8 md:text-2xl`}
      >
        <ChevronLeftIcon className="size-5" strokeWidth={2} />
        <div>Back to All Events</div>
      </Link>
      {event ? (
        <div className="">
          <EventCard event={event} />
        </div>
      ) : (
        <div
          className={`${gowunDodum.className} flex w-full flex-col items-center gap-4`}
        >
          <p className="text-center text-xl">Hmmm... something went wrong.</p>
          <Link
            href="/events"
            className="rounded-md bg-green-200 px-4 py-2 text-lg"
          >
            Back to All Events
          </Link>
        </div>
      )}
    </>
  );
}
