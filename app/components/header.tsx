import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Header() {
    return (
        <header className="flex items-center justify-between">
            <Image 
                src="/logo.png" 
                alt={"Back to the Shelf Again logo: five upright books interspersed with foliage."}
                width={80}
                height={80}
                className="w-20"
            />

            <h1 className="">
                Back to the Shelf Again
            </h1>

            <Bars3Icon className="size-8" />
        </header>
    );
}