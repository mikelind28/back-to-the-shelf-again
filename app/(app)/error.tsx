"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function ErrorPage({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex w-full flex-col items-center">
      <h2 className="text-lg font-bold">Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by re-fetching and re-rendering the segment
          () => unstable_retry()
        }
        className="m-2 rounded-md border border-t-stone-200 border-r-stone-400 border-b-stone-400 border-l-stone-200 bg-stone-300 px-4 py-2"
      >
        Try again
      </button>
    </div>
  );
}
