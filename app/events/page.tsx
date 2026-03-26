import EventsPast from "@/components/EventsPast";
import EventsUpcoming from "@/components/EventsUpcoming";
import H1 from "@/components/H1";

export default function Events() {
  return (
    <main className="flex flex-col gap-4 py-6">
      <H1 line1="EVENTS" />
      <EventsUpcoming />
      <EventsPast />
    </main>
  );
}
