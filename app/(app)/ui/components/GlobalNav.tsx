"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "motion/react";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { gowunDodum } from "@/ui/fonts";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type GlobalNavType = {
  globalNavOpen: boolean;
  setGlobalNavOpen: Dispatch<SetStateAction<boolean>>;
};

export default function GlobalNav({
  globalNavOpen,
  setGlobalNavOpen,
}: GlobalNavType) {
  const path = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (globalNavOpen) {
      const timeoutId = setTimeout(() => navRef.current?.focus(), 50);
      return () => clearTimeout(timeoutId);
    }
  }, [globalNavOpen]);

  return (
    <motion.nav
      ref={navRef}
      tabIndex={-1}
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
                "font-semibold text-pink-400 underline decoration-pink-300 underline-offset-2",
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
                "font-semibold text-pink-400 underline decoration-pink-300 underline-offset-2",
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
                "font-semibold text-pink-400 underline decoration-pink-300 underline-offset-2",
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
                "font-semibold text-pink-400 underline decoration-pink-300 underline-offset-2",
            ])}
          >
            Contact
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
}
