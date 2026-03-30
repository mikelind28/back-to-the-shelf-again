import H1 from "@/ui/components/H1";
import Image from "next/image";
import { ReactNode } from "react";
import { paragraph } from "@/ui/fonts";

type SectionType = {
  headerLine1: string;
  headerLine2: string;
  bgColorMain: string;
  bgColorLight: string;
  children: ReactNode;
  dividerColor?: string;
};

function Section({
  headerLine1,
  headerLine2,
  bgColorMain,
  bgColorLight,
  children,
  dividerColor,
}: SectionType) {
  return (
    <div
      className={`flex flex-col items-center gap-6 px-6 py-10 md:gap-10 ${bgColorMain}`}
    >
      <H1 line1={headerLine1} line2={headerLine2} />
      <div
        className={`flex flex-col gap-2 ${bgColorLight} rounded-md px-6 pt-4 pb-6 sm:px-8 sm:pt-6 sm:pb-8 md:px-12 md:pt-8 md:pb-10`}
      >
        {children}
      </div>
      {dividerColor && (
        <div className={`h-0.5 w-full max-w-125 ${dividerColor} rounded-md`} />
      )}
    </div>
  );
}

export default function About() {
  return (
    <main
      className={`flex flex-col text-lg sm:text-xl sm:leading-8 ${paragraph.className}`}
    >
      {/* about us */}
      <Section
        headerLine1={"ABOUT"}
        headerLine2={"us"}
        bgColorMain={"bg-background-100"}
        bgColorLight={"bg-background-50"}
      >
        <p
          className={`first-letter:text-3xl first-line:text-xl sm:first-letter:text-4xl sm:first-line:text-2xl`}
        >
          Every great romance deserves a second chance. That belief is at the
          heart of Back to the Shelf Again, a pop-up bookstore founded by
          lifelong book lovers, Emily Egley (
          <a
            href="https://www.instagram.com/mlewimmer/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400"
          >
            @mlewimmer
          </a>
          ) and Molly Horning (
          <a
            href="https://www.instagram.com/molived/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400"
          >
            @molived
          </a>
          ).
        </p>
        <p>
          A whole new generation of readers has discovered the joy of romance
          novels, but along with this new audience we noticed a gap in the book
          world: countless, once treasured, romance novels were somehow
          gathering dust on shelves, waiting for another reader to fall in love
          with their pages. Rather than let these stories fade away, we wanted
          to create a way to give them new life.
        </p>
      </Section>

      {/* our mission */}
      <Section
        headerLine1={"OUR"}
        headerLine2={"mission"}
        bgColorMain={"bg-pink-200"}
        bgColorLight={"bg-pink-100"}
        dividerColor={"bg-pink-300"}
      >
        <p
          className={`first-letter:text-3xl first-line:text-xl sm:first-letter:text-4xl sm:first-line:text-2xl`}
        >
          Our mission is simple: to give gently used romance books a second
          chance at love. We believe stories are meant to be shared, not
          shelved, and that every dog-eared page, handwritten note, and
          well-loved spine carries the magic of the readers before you.
        </p>
        <p>
          Because sometimes, the best love stories don’t end at “The End.”
          Sometimes, they just need another chance to be discovered.
        </p>
      </Section>

      {/* our story */}
      <Section
        headerLine1={"OUR"}
        headerLine2={"story"}
        bgColorMain={"bg-green-200"}
        bgColorLight={"bg-green-100"}
        dividerColor={"bg-green-300"}
      >
        <p
          className={`first-letter:text-3xl first-line:text-xl sm:first-letter:text-4xl sm:first-line:text-2xl`}
        >
          All great Female Main Characters (FMCs) meet their bestie at work, and
          the same is true for us! The longer we worked together, the more we
          came to realize not only that we’re a great team, but that we share
          the same interests when it comes to the books we immerse ourselves
          in... Romance.
        </p>
        <p>
          As we began to share recommendations, favorite bookstagram accounts,
          and local bookstores, we realized we wanted to join this amazing book
          community and bring it to our own communities here in Wisconsin.
        </p>
        <p>
          We built Back to the Shelf Again to bring stories back into people’s
          everyday lives. Whether you’re a seasoned reader or just finding your
          way back, we’re here to help you fall in love with reading all over
          again.
        </p>
      </Section>

      {/* meet emily */}
      <Section
        headerLine1={"MEET"}
        headerLine2={"emily"}
        bgColorMain={"bg-pink-300"}
        bgColorLight={"bg-white/60"}
        dividerColor={"bg-pink-400"}
      >
        <div className="items-center gap-3 md:flex">
          <Image
            src="/emily.webp"
            alt={"Emily"}
            width={500}
            height={500}
            className="w-full max-w-90"
            loading="eager"
          />
          <p
            className={`first-letter:text-3xl first-line:text-xl sm:first-letter:text-4xl sm:first-line:text-2xl`}
          >
            Hi, I’m Emily, co-owner of Back to the Shelf Again. I’m a Lodi
            native, a wife, and a mom of two girls—and a lifelong book lover who
            started her reading journey with The Bailey School Kids and a
            full-blown Harry Potter obsession. Like a lot of us, life, college,
            and career pulled me away from reading for a while… until Molly,
            BTTSA co-owner, handed me a fantasy-romance novel and basically
            jump-started my entire personality again.
          </p>
        </div>
      </Section>

      {/* meet molly */}
      <Section
        headerLine1={"MEET"}
        headerLine2={"molly"}
        bgColorMain={"bg-green-300"}
        bgColorLight={"bg-white/60"}
        dividerColor={"bg-green-400"}
      >
        <div className="items-center gap-3 md:flex md:flex-row-reverse">
          <Image
            src="/molly.webp"
            alt={"Molly, stirring a cup of coffee"}
            width={500}
            height={500}
            className="w-full max-w-90"
            loading="eager"
          />
          <p
            className={`first-letter:text-3xl first-line:text-xl sm:first-letter:text-4xl sm:first-line:text-2xl`}
          >
            Hi, I’m Molly, co-owner of Back to the Shelf Again! Growing up as an
            only child with a Librarian for a mom, books have always been a
            constant companion. My reading obsession has grown from classics
            like The Boxcar Children & Nancy Drew to new (romance) classics by
            authors like Ali Hazelwood & Emily Henry. I’m beyond excited to be
            creating a space for readers to celebrate the joy that comes from a
            good romance novel!
          </p>
        </div>
      </Section>
    </main>
  );
}
