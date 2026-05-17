import H1 from "@/ui/components/H1";
import Image from "next/image";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { paragraph, titleHeader } from "@/ui/fonts";
import ParallaxImg from "@/ui/components/ParallaxImg";
import type { Metadata } from "next";
import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
};

type HeadlineType = {
  text: string;
};

type DividerType = {
  color: string;
};

type CardType = {
  bgColor: string;
  children: ReactNode | ReactNode[];
};

type SectionType = {
  bgColor: string;
  children: ReactNode | ReactNode[];
  className?: string;
} & ComponentPropsWithoutRef<"div">;

function Headline({ text }: HeadlineType) {
  return (
    <p
      className={`${titleHeader.className} text-center text-2xl/8 md:text-3xl/9 xl:text-4xl/11`}
    >
      {text}
    </p>
  );
}

function Divider({ color }: DividerType) {
  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.5 }}
      className={`h-0.5 w-full max-w-125 ${color} rounded-md lg:mt-auto`}
    />
  );
}

function Card({ bgColor, children }: CardType) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.7 }}
      className={`${bgColor} rounded-md md:rounded-lg`}
    >
      {children}
    </motion.div>
  );
}

function Section({
  bgColor,
  children,
  className,
  ...sectionProps
}: SectionType) {
  return (
    <div
      {...sectionProps}
      className={cn([
        `flex w-full flex-col items-center gap-6 px-4 py-10 sm:px-10 md:gap-10 ${bgColor}`,
        `${className}`,
      ])}
    >
      {children}
    </div>
  );
}

export default function About() {
  return (
    <main
      className={`flex flex-col items-center text-lg sm:text-xl sm:leading-8 ${paragraph.className}`}
    >
      {/* about us */}
      <Section bgColor={"bg-background-100"}>
        <H1 line1="ABOUT" line2="us" />
        <Card bgColor="bg-background-50">
          <div className="xs:px-8 xs:pt-10 xs:pb-12 flex flex-col gap-3 px-6 pt-4 pb-6 md:gap-6 md:px-12 lg:flex-row lg:gap-10">
            <div className="flex max-w-120 flex-col gap-3 md:gap-6 lg:max-w-110 xl:gap-6">
              <Headline text="Every great romance deserves a second chance." />
              <p>
                That belief is at the heart of Back to the Shelf Again, a pop-up
                bookstore founded by lifelong book lovers, Emily Egley (
                <a
                  href="https://www.instagram.com/mlewimmer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:underline hover:decoration-1 hover:underline-offset-2"
                >
                  @mlewimmer
                </a>
                ) and Molly Horning (
                <a
                  href="https://www.instagram.com/molived/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:underline hover:decoration-1 hover:underline-offset-2"
                >
                  @molived
                </a>
                ).
              </p>
              <p>
                A whole new generation of readers has discovered the joy of
                romance novels, but along with this new audience we noticed a
                gap in the book world: countless, once treasured, romance novels
                were somehow gathering dust on shelves, waiting for another
                reader to fall in love with their pages. Rather than let these
                stories fade away, we wanted to create a way to give them new
                life.
              </p>
            </div>

            <div className="hidden lg:block lg:w-full lg:max-w-110">
              <ParallaxImg src="/bag-with-logo.webp" />
            </div>
          </div>
        </Card>
      </Section>

      <div className="flex w-full justify-center lg:hidden">
        <ParallaxImg src="/bag-with-logo.webp" />
      </div>

      <div className="w-full xl:mb-4 xl:flex xl:gap-4 xl:px-4">
        {/* our mission */}
        <Section
          bgColor={"bg-pink-200"}
          className="bg-[url(/svg-crinkles.svg)] bg-size-[25px_25px] bg-center bg-repeat md:bg-size-[35px_35px] xl:rounded-lg"
        >
          <H1 line1="OUR" line2="mission" />
          <Card bgColor="bg-white/80">
            <div className="xs:px-8 xs:pt-10 xs:pb-12 flex flex-col gap-3 px-6 pt-4 pb-6 md:gap-6 md:px-12 xl:flex-row xl:gap-10 xl:px-12">
              <div className="flex max-w-120 flex-col gap-3 md:gap-6 xl:gap-8">
                <Headline text="Our mission is simple: to give gently used romance books a second chance at love." />
                <p>
                  We believe stories are meant to be shared, not shelved, and
                  that every dog-eared page, handwritten note, and well-loved
                  spine carries the magic of the readers before you.
                </p>
                <p>
                  Because sometimes, the best love stories don’t end at “The
                  End.” Sometimes, they just need another chance to be
                  discovered.
                </p>
              </div>
            </div>
          </Card>
          <Divider color="bg-pink-300" />
        </Section>

        {/* our story */}
        <Section
          bgColor={"bg-green-200"}
          className="bg-[url(/green-dots.svg)] bg-size-[500px_500px] bg-center bg-repeat xl:rounded-lg"
        >
          <H1 line1="OUR" line2="story" />
          <Card bgColor="bg-white/80">
            <div className="xs:px-8 xs:pt-10 xs:pb-12 flex flex-col gap-3 px-6 pt-4 pb-6 md:gap-6 md:px-12 xl:flex-row xl:gap-10 xl:px-12">
              <div className="flex max-w-120 flex-col gap-3 md:gap-6 xl:gap-8">
                <Headline text="All great Female Main Characters (FMCs) meet their bestie at work..." />
                <p>
                  ...and the same is true for us! The longer we worked together,
                  the more we came to realize not only that we’re a great team,
                  but that we share the same interests when it comes to the
                  books we immerse ourselves in... Romance.
                </p>
                <p>
                  As we began to share recommendations, favorite bookstagram
                  accounts, and local bookstores, we realized we wanted to join
                  this amazing book community and bring it to our own
                  communities here in Wisconsin.
                </p>
                <p>
                  We built Back to the Shelf Again to bring stories back into
                  people’s everyday lives. Whether you’re a seasoned reader or
                  just finding your way back, we’re here to help you fall in
                  love with reading all over again.
                </p>
              </div>
            </div>
          </Card>
          <Divider color="bg-green-300" />
        </Section>
      </div>

      <div className="w-full xl:flex xl:gap-4 xl:px-4">
        {/* meet emily */}
        <Section
          bgColor={"bg-pink-300"}
          className="bg-[url(/pink-beams.svg)] bg-size-[500px_500px] bg-center bg-repeat xl:rounded-lg"
        >
          <H1 line1="MEET" line2="emily" />
          <Card bgColor="bg-white/90">
            <div className="xs:px-8 xs:pt-10 xs:pb-12 flex max-w-150 flex-col items-center gap-3 px-6 pt-4 pb-6 md:max-w-190 md:flex-row md:items-start md:gap-5 md:pt-10 md:pr-14 md:pb-12 xl:flex-col xl:items-center xl:gap-8 xl:px-12 2xl:flex-row 2xl:items-start">
              {/* TODO: fix image sizes */}
              <Image
                src="/emily.webp"
                alt="Emily"
                width={500}
                height={500}
                className="w-full max-w-80 md:sticky md:top-0 xl:static 2xl:sticky 2xl:w-fit 2xl:shrink-2 2xl:grow"
                loading="eager"
              />
              <div className="flex flex-col gap-3 xl:gap-8 2xl:w-full 2xl:grow">
                <Headline text="Hi, I’m Emily." />
                <p>
                  ...co-owner of Back to the Shelf Again. I’m a Lodi native, a
                  wife, and a mom of two girls—and a lifelong book lover who
                  started her reading journey with The Bailey School Kids and a
                  full-blown Harry Potter obsession. Like a lot of us, life,
                  college, and career pulled me away from reading for a while…
                  until Molly, BTTSA co-owner, handed me a fantasy-romance novel
                  and basically jump-started my entire personality again.
                </p>
              </div>
            </div>
          </Card>
          <Divider color="bg-pink-200" />
        </Section>

        {/* meet molly */}
        <Section
          bgColor={"bg-green-300"}
          className="bg-[url(/green-beams.svg)] bg-size-[500px_500px] bg-center bg-repeat xl:rounded-lg"
        >
          <H1 line1="MEET" line2="molly" />
          <Card bgColor="bg-white/85">
            <div className="xs:px-8 xs:pt-10 xs:pb-12 flex max-w-150 flex-col items-center gap-3 px-6 pt-4 pb-6 md:max-w-190 md:flex-row md:items-start md:gap-5 md:pt-10 md:pr-14 md:pb-12 xl:flex-col xl:items-center xl:gap-8 xl:px-12 2xl:flex-row 2xl:items-start">
              <Image
                src="/molly.webp"
                alt="Molly, stirring a cup of coffee"
                width={500}
                height={500}
                className="w-full max-w-80 md:sticky md:top-0 xl:static 2xl:sticky"
                loading="eager"
              />
              <div className="flex flex-col gap-3 xl:gap-8">
                <Headline text="Hi, I’m Molly." />
                <p>
                  ...co-owner of Back to the Shelf Again! Growing up as an only
                  child with a Librarian for a mom, books have always been a
                  constant companion. My reading obsession has grown from
                  classics like The Boxcar Children & Nancy Drew to new
                  (romance) classics by authors like Ali Hazelwood & Emily
                  Henry. I’m beyond excited to be creating a space for readers
                  to celebrate the joy that comes from a good romance novel!
                </p>
              </div>
            </div>
          </Card>
          <Divider color="bg-green-200" />
        </Section>
      </div>
    </main>
  );
}
