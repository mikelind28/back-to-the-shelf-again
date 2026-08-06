import type { Metadata } from "next";
import "react-day-picker/style.css";
import "./ui/globals.css";
import HeaderWrapper from "./ui/components/HeaderWrapper";
import Footer from "./ui/components/Footer";
import { PreloadResources } from "./preload-resources";

// TODO: add openGraph metadata
export const metadata: Metadata = {
  title: {
    template: "%s | Back to the Shelf Again",
    default: "Back to the Shelf Again",
  },
  description:
    "A pop-up bookstore giving gently-used romance novels a second chance at love.",
  generator: "Next.js",
  authors: [{ name: "Mike Lind", url: "www.mike-lind-dev.com" }],
  keywords: ["Book", "Romance", "Store", "Novel", "Read", "Wisconsin", "Event"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`bg-background-100 h-full antialiased`}>
      <body className="flex min-h-dvh max-w-dvw flex-col justify-between">
        <PreloadResources />
        <HeaderWrapper />
        {children}
        <Footer />
      </body>
    </html>
  );
}
