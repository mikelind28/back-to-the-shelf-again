import H1 from "@/ui/components/H1";
import InstagramEmbed from "@/ui/components/InstagramEmbed";
import { paragraph } from "@/ui/fonts";
import type { Metadata } from "next";
import * as motion from "motion/react-client";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <main className="flex flex-col items-center gap-4 p-4 sm:gap-6">
      <H1 line1="CONTACT" line2="us" />
      <p className={`text-center text-lg sm:text-xl ${paragraph.className}`}>
        Find us on Instagram at{" "}
        <a
          href="https://www.instagram.com/backtotheshelfagain"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400"
        >
          @backtotheshelfagain
        </a>
      </p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1.5 }}
        className="flex w-full justify-center"
      >
        <InstagramEmbed />
      </motion.div>
    </main>
  );
}
