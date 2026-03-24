import { Bars3Icon, BookOpenIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { dosis } from "ui/fonts";

type HeaderType = {
    globalNavOpen: boolean;
    setGlobalNavOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Header({ globalNavOpen, setGlobalNavOpen }: HeaderType) {
    return (
        <header className="flex items-center justify-between">
            <div className="flex items-end gap-2">
                <Image 
                    src="/logo.png" 
                    alt={"Back to the Shelf Again logo: five upright books interspersed with foliage."}
                    width={100}
                    height={100}
                    className="w-25"
                    loading="eager"
                />

                <h1 className={`${dosis.className} text-2xl/7`}>
                    Back to <br/>
                    the Shelf <br/>
                    Again
                </h1>
            </div>

            <AnimatePresence>
                {!globalNavOpen &&
                    <motion.button
                        aria-label='nav menu button'
                        onClick={() => setGlobalNavOpen(true)}
                        className="fixed -top-5 right-0 size-fit"
                        initial={{ top: -120 }}
                        animate={{ top: -20 }}
                        exit={{ top: -120}}
                    >
                        <BookmarkIcon className="absolute top-0 right-0 size-30 fill-background-50 drop-shadow-xs/10" />

                        <Bars3Icon className="absolute top-10 right-11 size-8"/>
                    </motion.button>
                }
            </AnimatePresence>
        </header>
    );
}