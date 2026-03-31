import EventsPast from "@/ui/components/EventsPast";
import EventsUpcoming from "@/ui/components/EventsUpcoming";
import H1 from "@/ui/components/H1";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
};

export default function Events() {
  return (
    <main className="flex flex-col gap-4 py-6 lg:gap-6 xl:gap-7">
      <H1 line1="EVENTS" />
      <EventsUpcoming />
      <EventsPast />
    </main>
  );
}
