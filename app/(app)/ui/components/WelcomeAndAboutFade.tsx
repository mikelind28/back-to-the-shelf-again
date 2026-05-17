"use client";

import { AnimatePresence, motion } from "motion/react";
import { cursive2, titleHeader } from "../fonts";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function WelcomeAndAboutFade() {
  const [twoSecsPassed, setTwoSecsPassed] = useState(false);
  const [threeSecsPassed, setThreeSecsPassed] = useState(false);
  const [fourSecsPassed, setFourSecsPassed] = useState(false);

  useEffect(() => {
    setTimeout(() => setTwoSecsPassed(true), 1500);
    setTimeout(() => setThreeSecsPassed(true), 2800);
    setTimeout(() => setFourSecsPassed(true), 4000);
  }, []);

  return (
    <motion.div
      layout
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      transition={{
        y: { duration: 2 },
        layout: { duration: 0.7, ease: "easeIn" },
      }}
      style={{ width: "fit-content", height: "fit-content" }}
      className="bg-background-50 2xs:px-4 xs:px-8 2xs:pt-4 2xs:pb-6 max-w-2xl rounded-xl px-2 pt-2 pb-6 shadow-md sm:pt-6 sm:pb-8 md:px-10"
    >
      <h1 className={`flex flex-col`}>
        <span
          className={`${cursive2.className} 2xs:text-6xl inline-flex items-center gap-3 text-5xl text-green-300 text-shadow-[-1px_1px_0_var(--color-green-400)] sm:text-6xl md:gap-4 md:text-7xl lg:gap-5 lg:text-8xl`}
          style={{ justifyContent: threeSecsPassed ? "center" : "flex-start" }}
        >
          <AnimatePresence>
            {fourSecsPassed && (
              <svg
                viewBox="0 0 50 20"
                className="xs:w-20 h-5 w-12 sm:w-28 md:w-24"
                preserveAspectRatio="none"
              >
                <motion.line
                  x1={50}
                  x2={50}
                  y1={20}
                  y2={20}
                  initial={{ opacity: 1, strokeWidth: 1 }}
                  animate={{
                    x2: 0,
                    opacity: 1,
                    strokeWidth: 4,
                  }}
                  transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                  stroke={"var(--color-green-300)"}
                />
              </svg>
            )}
          </AnimatePresence>
          <motion.span
            layout
            initial={{ paddingTop: 0 }}
            animate={{ paddingTop: 20 }}
            transition={{
              layout: { duration: 1, delay: 0 },
              paddingTop: { delay: 3, duration: 1 },
            }}
          >
            Welcome
          </motion.span>
          <AnimatePresence>
            {!twoSecsPassed && (
              <motion.span
                layout
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { delay: 0, duration: 1.3 },
                  layout: { delay: 0, duration: 1.3 },
                }}
              >
                to
              </motion.span>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {fourSecsPassed && (
              <svg
                viewBox="0 0 50 20"
                className="xs:w-20 h-5 w-12 sm:w-28 md:w-24"
                preserveAspectRatio="none"
              >
                <motion.line
                  x1={0}
                  x2={0}
                  y1={20}
                  y2={20}
                  initial={{ opacity: 1, strokeWidth: 1 }}
                  animate={{
                    x2: 50,
                    opacity: 1,
                    strokeWidth: 4,
                  }}
                  transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                  stroke={"var(--color-green-300)"}
                />
              </svg>
            )}
          </AnimatePresence>
        </span>

        <AnimatePresence>
          {!twoSecsPassed && (
            <>
              <motion.span
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.3, delay: 0 }}
                className={`${titleHeader.className} 2xs:text-[2.5rem] text-[2.2rem] leading-7 text-pink-300 text-shadow-[1px_1px_0_var(--color-pink-400)] sm:text-5xl sm:leading-10 md:text-6xl md:leading-11 lg:text-7xl lg:leading-13`}
              >
                BACK TO THE SHELF
              </motion.span>

              <motion.span
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.3, delay: 0 }}
                className={`${cursive2.className} 2xs:text-[5rem] 2xs:mb-4 w-full text-center text-[4rem] leading-12 text-pink-300 text-shadow-[1px_1px_0_var(--color-pink-400)] sm:mb-6 sm:text-8xl sm:leading-13 lg:text-9xl lg:leading-18`}
              >
                again
              </motion.span>
            </>
          )}
        </AnimatePresence>
      </h1>

      {/* about */}
      <AnimatePresence>
        {threeSecsPassed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 2 }}
            className="2xs:gap-6 xs:gap-8 flex flex-col items-center gap-4 px-6 py-4 text-center text-xl sm:px-8 sm:text-2xl sm:leading-9"
          >
            <p className={`${titleHeader.className}`}>
              We are a pop-up bookstore in South-Central WI giving gently used
              romance books (and their readers!) a second chance at love 💕📖
            </p>
            <Link
              href="/about"
              className={`${titleHeader.className} w-full max-w-md grow rounded-full bg-pink-300 px-4 py-2 text-center text-xl text-white shadow-xs shadow-pink-400 text-shadow-2xs/25 hover:brightness-110 active:brightness-90 sm:text-2xl/7`}
            >
              Where our story began...
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
