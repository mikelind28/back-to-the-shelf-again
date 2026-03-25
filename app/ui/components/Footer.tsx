import Link from "next/link";
import Image from "next/image";
import { gowunDodum, titleHeader } from "ui/fonts";
import InstagramIcon from "./InstagramIcon";

export default function Footer() {
    return (
        <footer className="flex flex-col mb-4 p-4">
            {/* Logo and site name; links to home page. */}
            <Link 
                href="/"
                className="flex flex-col gap-2"
            >
                <Image 
                    src="/logo.png" 
                    alt={"Back to the Shelf Again logo: five upright books interspersed with foliage."}
                    width={100}
                    height={100}
                    className="w-25 h-auto"
                    loading="eager"
                    />

                <h1 className={`${titleHeader.className} text-3xl/7`}>
                    Back to the Shelf Again
                </h1>
            </Link>

            <nav className="flex flex-col gap-2">
                <ul
                    className={`flex flex-col mt-4 gap-2 text-xl ${gowunDodum.className}`}
                >
                    <li>
                    <Link href="/">
                        Home
                    </Link>
                    </li>

                    <li>
                    <Link href="/about">
                        About Us
                    </Link>
                    </li>

                    <li>
                    <Link href="/events">
                        Events
                    </Link>
                    </li>

                    <li>
                    <Link href="/contact">
                        Contact
                    </Link>
                    </li>
                </ul>
            </nav>

            <a 
                href={'https://www.instagram.com/backtotheshelfagain/'}
                target='_blank'
                rel='noopener noreferrer'
                className="mt-4"
            >
                <InstagramIcon className={'text-pink-300'} />
            </a>
            
        </footer>
    );
}