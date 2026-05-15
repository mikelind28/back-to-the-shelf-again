"use client";

import { EventType } from "@/lib/types";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import {
  type ChevronProps,
  DayPicker,
  getDefaultClassNames,
} from "react-day-picker";
import { amatic } from "../fonts";

function MyChevron(props: ChevronProps) {
  switch (props.orientation) {
    case "right":
      return (
        <ChevronRightIcon className="size-5 text-pink-400" strokeWidth={2.5} />
      );
    case "left":
      return (
        <ChevronLeftIcon className="size-5 text-pink-400" strokeWidth={2.5} />
      );
    case "up":
      return (
        <ChevronUpIcon className="size-5 text-pink-400" strokeWidth={2.5} />
      );
    case "down":
      return (
        <ChevronDownIcon className="size-5 text-pink-400" strokeWidth={2.5} />
      );
    default:
      return (
        <ChevronRightIcon className="size-5 text-pink-400" strokeWidth={2.5} />
      );
  }
}

export default function Calendar({
  upcomingEvents,
  pastEvents,
}: {
  upcomingEvents: EventType[];
  pastEvents: EventType[];
}) {
  const defaultClassNames = getDefaultClassNames();

  const todayNorm = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate(),
  );

  const upcomingNorm = upcomingEvents.map(
    (e) =>
      new Date(
        e.start_time.getFullYear(),
        e.start_time.getMonth(),
        e.start_time.getDate(),
      ),
  );
  const pastNorm = pastEvents.map(
    (e) =>
      new Date(
        e.start_time.getFullYear(),
        e.start_time.getMonth(),
        e.start_time.getDate(),
      ),
  );

  const eventsTodayDates = [...upcomingNorm, ...pastNorm].filter(
    (d) => d.getTime() === todayNorm.getTime(),
  );

  const router = useRouter();

  const handleDayClick = (day: Date) => {
    const dayNorm = new Date(day.getFullYear(), day.getMonth(), day.getDate());

    // Check upcoming first, then past
    const match =
      upcomingEvents.find(
        (e) =>
          new Date(
            e.start_time.getFullYear(),
            e.start_time.getMonth(),
            e.start_time.getDate(),
          ).getTime() === dayNorm.getTime(),
      ) ??
      pastEvents.find(
        (e) =>
          new Date(
            e.start_time.getFullYear(),
            e.start_time.getMonth(),
            e.start_time.getDate(),
          ).getTime() === dayNorm.getTime(),
      );

    if (match) {
      router.push(`/events/${match.id}`);
    }
  };

  return (
    <DayPicker
      animate
      mode="single"
      captionLayout="dropdown"
      navLayout="around"
      showOutsideDays
      onDayClick={handleDayClick}
      components={{
        Chevron: MyChevron,
      }}
      disabled={(anyDate) => {
        const anyDateNorm = new Date(
          anyDate.getFullYear(),
          anyDate.getMonth(),
          anyDate.getDate(),
        );
        return ![...upcomingNorm, ...pastNorm].some(
          (d) => d.getTime() === anyDateNorm.getTime(),
        );
      }}
      modifiers={{
        upcomingEvents: upcomingEvents.map((e) => e.start_time),
        pastEvents: pastEvents.map((e) => e.start_time),
        upcomingAndToday: eventsTodayDates,
      }}
      modifiersClassNames={{
        upcomingEvents: "upcoming-events-class",
        pastEvents: "past-events-class",
        upcomingAndToday: "event-today-class",
      }}
      classNames={{
        today: `${defaultClassNames.today} underline underline-offset-5`,
        selected: `${defaultClassNames.selected} outline-2 outline-green-400 rounded-full`,
        root: `${defaultClassNames.root} bg-background-50 rounded-md p-2 2xs:px-4 sm:px-8 lg:grow lg:py-8`,
        caption_label: `${defaultClassNames.caption_label} gap-1`,
        dropdowns: `${defaultClassNames.dropdowns} ${amatic.className} text-3xl`,
        months: `${defaultClassNames.months} mx-auto`,
        month_grid: `${defaultClassNames.month_grid} !border-spacing-1 !border-separate`,
      }}
    />
  );
}
