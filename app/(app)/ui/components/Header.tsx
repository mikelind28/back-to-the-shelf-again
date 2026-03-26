import { Bars3Icon } from "@heroicons/react/24/outline";
import { BookmarkIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { titleHeader } from "@/ui/fonts";

type HeaderType = {
  globalNavOpen: boolean;
  setGlobalNavOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Header({
  globalNavOpen,
  setGlobalNavOpen,
}: HeaderType) {
  return (
    <header className="z-90 mb-4 flex items-center justify-between p-2">
      {/* Logo and site name; links to home page. */}
      <Link href="/" className="flex items-end gap-2">
        <Image
          src="/logo.png"
          alt={
            "Back to the Shelf Again logo: five upright books interspersed with foliage."
          }
          width={100}
          height={100}
          className="h-auto w-25"
          loading="eager"
        />

        <h1 className={`${titleHeader.className} text-3xl/7`}>
          Back to <br />
          the Shelf <br />
          Again
        </h1>
      </Link>

      {/* A Bookmark icon containing button to open GlobalNav.
                When GlobalNav is opened, the bookmark icon animates out of the DOM. */}
      <AnimatePresence>
        {!globalNavOpen && (
          <motion.button
            aria-label="nav menu button"
            onClick={() => setGlobalNavOpen(true)}
            className="fixed -top-5 right-0 size-fit"
            initial={{ top: -120 }}
            animate={{ top: -20 }}
            exit={{ top: -120 }}
          >
            <BookmarkIcon className="fill-background-50 absolute top-0 right-0 size-30 drop-shadow-xs/10" />

            <Bars3Icon className="absolute top-10 right-11 size-8" />
          </motion.button>
        )}
      </AnimatePresence>
    </header>
  );
}
