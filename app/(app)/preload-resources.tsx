"use client";
import ReactDOM from "react-dom";

export function PreloadResources() {
  ReactDOM.preload("/book-pages.webp", { as: "image", fetchPriority: "high" });
  return null;
}
