import { Bars3Icon } from "@heroicons/react/24/outline";
import { BookmarkIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { gowunDodum, titleHeader } from "@/ui/fonts";

type HeaderType = {
  globalNavOpen: boolean;
  setGlobalNavOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Header({
  globalNavOpen,
  setGlobalNavOpen,
}: HeaderType) {
  return (
    <header className="z-90 mb-3 flex items-center justify-between p-2 pt-3 sm:gap-2 sm:p-4 lg:p-6">
      {/* Logo and site name; links to home page. */}
      <Link href="/" className="group flex items-end gap-2">
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

        <h1
          className={`${titleHeader.className} text-3xl/7 group-hover:underline group-hover:decoration-1 group-hover:underline-offset-2`}
        >
          Back to <br />
          the Shelf <br />
          Again
        </h1>
      </Link>

      {/* A Bookmark icon containing button to open GlobalNav.
        When GlobalNav is opened, the bookmark icon animates out of the DOM. */}
      <div className="sm:hidden">
        <AnimatePresence>
          {!globalNavOpen && (
            <motion.button
              aria-label="nav menu button"
              onClick={() => setGlobalNavOpen(true)}
              className="fixed -top-5 right-0 size-30 cursor-pointer"
              initial={{ top: -120 }}
              animate={{ top: -20 }}
              exit={{ top: -120 }}
            >
              <BookmarkIcon className="fill-background-50 absolute top-0 right-0 size-30 drop-shadow-xs/10" />

              <Bars3Icon className="absolute top-10 right-11 size-8" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <nav className="hidden max-w-2xl sm:inline sm:grow">
        <ul
          className={`mx-6 flex justify-evenly gap-8 text-2xl xl:text-3xl ${gowunDodum.className}`}
        >
          <li>
            <Link
              href="/about"
              onClick={() => setGlobalNavOpen(false)}
              className="hover:underline hover:decoration-1"
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              href="/events"
              onClick={() => setGlobalNavOpen(false)}
              className="hover:underline hover:decoration-1"
            >
              Events
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              onClick={() => setGlobalNavOpen(false)}
              className="hover:underline hover:decoration-1"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
