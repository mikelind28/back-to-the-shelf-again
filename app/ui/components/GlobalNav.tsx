import { XMarkIcon } from "@heroicons/react/24/outline"
import { motion } from "motion/react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { dosis, averiaLibre, prozaLibre, gowunDodum } from "ui/fonts";

type GlobalNavType = {
    setGlobalNavOpen: Dispatch<SetStateAction<boolean>>
}

export default function GlobalNav({ setGlobalNavOpen }: GlobalNavType) {
    return (
        <motion.nav 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            exit={{ x: '100%' }}
            className="fixed top-0 left-0 bg-background-50 w-dvw h-dvh p-8"
        >
            <button
                aria-label="close global nav"
                onClick={() => setGlobalNavOpen(false)}
            >
                <XMarkIcon className="fixed top-8 right-6 size-8" />
            </button>

            <ul className={`flex flex-col items-end mt-8 gap-4 text-3xl ${gowunDodum.className}`}>
                <li>
                    <Link 
                        href="/"
                        onClick={() => setGlobalNavOpen(false)}
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <Link 
                        href="/about"
                        onClick={() => setGlobalNavOpen(false)}
                    >
                        About Us
                    </Link>
                </li>

                <li>
                    <Link 
                        href="/events"
                        onClick={() => setGlobalNavOpen(false)}
                    >
                        Events
                    </Link>
                </li>

                <li>
                    <Link 
                        href="/contact"
                        onClick={() => setGlobalNavOpen(false)}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </motion.nav>
    );
}