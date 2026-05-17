"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "motion/react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { gowunDodum } from "@/ui/fonts";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type GlobalNavType = {
  setGlobalNavOpen: Dispatch<SetStateAction<boolean>>;
};

export default function GlobalNav({ setGlobalNavOpen }: GlobalNavType) {
  const path = usePathname();
  return (
    <motion.nav
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      exit={{ x: "100%" }}
      className="bg-background-50 fixed top-0 left-0 z-100 h-dvh w-dvw p-8 sm:hidden"
    >
      <button
        aria-label="close global nav"
        onClick={() => setGlobalNavOpen(false)}
        className="fixed top-8 right-6 size-8 cursor-pointer"
      >
        <XMarkIcon className="fixed top-8 right-6 size-8" />
      </button>

      <ul
        className={`2xs:gap-6 xs:gap-8 xs:text-4xl mt-14 flex flex-col items-end gap-4 text-3xl ${gowunDodum.className}`}
      >
        <li>
          <Link
            href="/"
            onClick={() => setGlobalNavOpen(false)}
            className={cn([
              path === "/" &&
                "underline decoration-pink-300 decoration-wavy decoration-1 underline-offset-3",
            ])}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            onClick={() => setGlobalNavOpen(false)}
            className={cn([
              path === "/about" &&
                "underline decoration-pink-300 decoration-wavy decoration-1 underline-offset-3",
            ])}
          >
            About Us
          </Link>
        </li>

        <li>
          <Link
            href="/events"
            onClick={() => setGlobalNavOpen(false)}
            className={cn([
              path === "/events" &&
                "underline decoration-pink-300 decoration-wavy decoration-1 underline-offset-3",
            ])}
          >
            Events
          </Link>
        </li>

        <li>
          <Link
            href="/contact"
            onClick={() => setGlobalNavOpen(false)}
            className={cn([
              path === "/contact" &&
                "underline decoration-pink-300 decoration-wavy decoration-1 underline-offset-3",
            ])}
          >
            Contact
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
}
