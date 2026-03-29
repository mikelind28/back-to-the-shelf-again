import Link from "next/link";
import Image from "next/image";
import { gowunDodum, titleHeader } from "@/ui/fonts";
import InstagramIcon from "./InstagramIcon";

export default function Footer() {
  return (
    <footer className="mb-4 flex flex-col sm:gap-2 p-4 sm:p-6">
      {/* Logo and site name; links to home page. */}
      <Link href="/" className="flex flex-col gap-2">
        <Image
          src="/logo.png"
          alt={
            "Back to the Shelf Again logo: five upright books interspersed with foliage."
          }
          width={100}
          height={100}
          className="h-auto w-25 sm:w-30"
          loading="eager"
        />

        <h1 className={`${titleHeader.className} text-3xl/7 sm:text-4xl/9`}>
          Back to the Shelf Again
        </h1>
      </Link>

      <nav>
        <ul
          className={`mt-4 flex flex-col gap-2 sm:gap-3 text-xl sm:text-2xl ${gowunDodum.className}`}
        >
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/about">About Us</Link>
          </li>

          <li>
            <Link href="/events">Events</Link>
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <a
        href={"https://www.instagram.com/backtotheshelfagain/"}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4"
      >
        <InstagramIcon className={"text-pink-300 sm:size-14"} />
      </a>
    </footer>
  );
}
