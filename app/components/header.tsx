import Image from "next/image";

export default function Header() {
    return (
        <header className="flex items-center">
            <Image 
                src="/logo.png" 
                alt={"Back to the Shelf Again logo: five upright books interspersed with foliage."}
                width={80}
                height={80}
                className="w-20"
            />

        </header>
    );
}