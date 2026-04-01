import Link from "next/link";
import Image from "next/image";
import { gowunDodum, titleHeader } from "@/ui/fonts";
import InstagramIcon from "./InstagramIcon";

export default function Footer() {
  return (
    <footer className="mb-4 flex flex-col p-4 sm:gap-2 sm:p-6 xl:flex-row xl:items-end xl:justify-between">
      {/* Logo and site name; links to home page. */}
      <Link
        href="/"
        className="group flex flex-col gap-2 xl:flex-row xl:items-end xl:gap-6"
      >
        <Image
          src="/logo.png"
          alt={
            "Back to the Shelf Again logo: five upright books interspersed with foliage."
          }
          width={100}
          height={100}
          className="w-25 sm:w-30"
          style={{ height: "auto" }}
          loading="eager"
        />

        <h1
          className={`${titleHeader.className} text-3xl/7 group-hover:underline group-hover:decoration-1 group-hover:underline-offset-2 sm:text-4xl/9`}
        >
          Back to the Shelf Again
        </h1>
      </Link>

      <nav className="max-w-2xl xl:ml-auto xl:w-full">
        <ul
          className={`mt-4 flex flex-col gap-2 text-xl sm:gap-3 sm:text-2xl xl:mt-0 xl:flex-row xl:justify-evenly xl:text-3xl ${gowunDodum.className}`}
        >
          <li>
            <Link href="/about" className="hover:underline hover:decoration-1">
              About Us
            </Link>
          </li>

          <li>
            <Link href="/events" className="hover:underline hover:decoration-1">
              Events
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="hover:underline hover:decoration-1"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <a
        href={"https://www.instagram.com/backtotheshelfagain/"}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4"
      >
        <InstagramIcon
          className={
            "text-pink-300 hover:brightness-110 active:brightness-90 sm:size-14"
          }
        />
      </a>
    </footer>
  );
}
