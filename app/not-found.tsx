import Footer from "@/ui/components/Footer";
import HeaderWrapper from "@/ui/components/HeaderWrapper";
import "@/ui/globals.css";

export default function NotFound() {
  return (
    <html lang="en" className={`bg-background-100 h-full antialiased`}>
      <body className="flex min-h-dvh max-w-dvw flex-col justify-between">
        <HeaderWrapper />
        <div className="flex w-full flex-col items-center gap-2">
          <h1 className="text-xl font-bold">404 - Page Not Found</h1>
          <p className="text-lg">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
        <Footer />
      </body>
    </html>
  );
}
