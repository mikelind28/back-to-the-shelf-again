import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: {
    template: "%s | Back to the Shelf Again",
    default: "Back to the Shelf Again",
  },
  description: "A pop-up bookstore giving gently-used romance novels a second chance at love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full bg-background-100 antialiased`}
    >
      <body className="min-h-full flex flex-col p-2">
        <Header />
        {children}
      </body>
    </html>
  );
}
