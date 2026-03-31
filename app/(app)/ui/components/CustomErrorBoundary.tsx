"use client";

import { unstable_catchError as catchError, type ErrorInfo } from "next/error";

function ErrorFallback(
  props: { title: string },
  { error, unstable_retry }: ErrorInfo,
) {
  return (
    <div className="text-center">
      <p className="text-lg font-bold">{props.title}</p>
      <p className="italic">{error.message}</p>
      <button
        onClick={() => unstable_retry()}
        className="m-2 rounded-md border border-t-stone-200 border-r-stone-400 border-b-stone-400 border-l-stone-200 bg-stone-300 px-4 py-2"
      >
        Try again
      </button>
    </div>
  );
}

export default catchError(ErrorFallback);
