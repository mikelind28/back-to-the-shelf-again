"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import { gowunDodum, titleHeaderBold } from "./ui/fonts";

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
      <h2 className={`text-xl font-bold ${titleHeaderBold.className}`}>
        Something went wrong!
      </h2>
      <button
        onClick={
          // Attempt to recover by re-fetching and re-rendering the segment
          () => unstable_retry()
        }
        className={`${gowunDodum.className} m-2 rounded-md border border-t-green-100 border-r-green-300 border-b-green-300 border-l-green-100 bg-green-200 px-4 py-2 text-xl`}
      >
        Try again
      </button>
    </div>
  );
}
