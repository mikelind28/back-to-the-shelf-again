import H1 from "@/ui/components/H1";
import InstagramEmbed from "@/ui/components/InstagramEmbed";
import { paragraph } from "@/ui/fonts";

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

      <InstagramEmbed />
    </main>
  );
}
