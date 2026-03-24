import type { Metadata } from "next";
import "ui/globals.css";
import Header from "@/components/Header";
import Layout from "(layout)/layout";

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
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
