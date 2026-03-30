export function EventCardSkeleton() {
  return (
    <div
      className={`bg-background-50 my-4 flex flex-col gap-2 rounded-sm px-4 py-6 sm:px-6 sm:py-8`}
    >
      <div className="animate-pulse-custom h-8 w-70 rounded-md bg-stone-300" />
      <div className="animate-pulse-custom h-7 w-40 rounded-md bg-stone-300" />
      <div className="animate-pulse-custom h-7 w-50 rounded-md bg-stone-300" />
      <div className="animate-pulse-custom h-6 w-60 rounded-md bg-stone-300" />
      <div className="animate-pulse-custom h-70 w-full rounded-md bg-stone-300" />
      <div className="animate-pulse-custom h-6 w-80 rounded-md bg-stone-300" />
      <div className="animate-pulse-custom h-6 w-70 rounded-md bg-stone-300" />
      <div className="animate-pulse-custom h-6 w-75 rounded-md bg-stone-300" />
      <div className="animate-pulse-custom h-6 w-60 rounded-md bg-stone-300" />
    </div>
  );
}

export function EventPreviewSkeleton() {
  return (
    <div
      className={`bg-background-50 my-1 flex flex-col gap-1 rounded-sm px-4 py-4`}
    >
      <div className="animate-pulse-custom h-8 w-60 rounded-md bg-stone-200" />
      <div className="animate-pulse-custom h-8 w-40 rounded-md bg-stone-200" />
      <div className="animate-pulse-custom h-8 w-45 rounded-md bg-stone-200" />
      <div className="animate-pulse-custom h-8 w-75 rounded-md bg-stone-200" />
    </div>
  );
}

export function ImageListSkeleton() {
  return (
    <div
      className={`bg-background-50 *:animate-pulse-custom h-full columns-2 gap-1 p-2`}
    >
      <div className="mb-1 h-40 w-full bg-stone-200" />
      <div className="mb-1 h-30 w-full bg-stone-200" />
      <div className="mb-1 h-20 w-full bg-stone-200" />
      <div className="mb-1 h-50 w-full bg-stone-200" />
    </div>
  );
}
