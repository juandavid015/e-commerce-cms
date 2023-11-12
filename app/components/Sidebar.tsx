import Image from "next/image";
import Link from "next/link";
import { IconAboutUs, IconContact, IconHome, IconProduct } from "./Icons";
const Sidebar = () => {
    // Next step: make responsive. The idea might be to overlap and display as a menu that overlap and show content when expanded
    return (
        <header className="max-w-[200px] w-full h-full bg-red
        border-r border-r-white-gray font-heading text-black p-8
        gri">
            <nav className="w-full h-full flex flex-col gap-16">
                <div className="flex flex-col items-center">

                    <Image
                        width={120}
                        height={120}
                        alt="logo"
                        src={'/images/e-logo.png'}
                        priority
                    />
                    <span className="font-heading text-4xl font-bold font-sans">
                        E
                    </span>
                </div>
                <ul className="flex flex-col gap-8">
                    <span className="font-bold text-2xl">
                        Explore
                    </span>
                    <li className="fill-gray text-gray
                    hover:fill-black hover:text-black hover:scale-[0.95]">
                        <Link href={'/home'}
                        className="flex gap-2 items-center"
                        >
                            <IconHome className="h-[25px]"/>
                            Home
                        </Link>
                    </li>
                    <li className="fill-gray text-gray
                    hover:fill-black hover:text-black hover:scale-[0.95]">
                        <Link href={'/home'}
                         className="flex gap-2 items-center"
                        >
                            <IconProduct className="h-[25px]"/>
                            Products
                        </Link>
                    </li>
                    <li className="fill-gray text-gray
                    hover:fill-black hover:text-black hover:scale-[0.95]">
                        <Link href={'/home'}
                         className="flex gap-2 items-center"
                        >
                            <IconAboutUs className="h-[25px]"/>
                            About us
                        </Link>
                    </li>
                    <li className="fill-gray text-gray
                    hover:fill-black hover:text-black hover:scale-[0.95]">
                        <Link href={'/home'}
                         className="flex gap-2 items-center"
                        >
                            <IconContact className="h-[25px]" />
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>


    )
}
export default Sidebar;