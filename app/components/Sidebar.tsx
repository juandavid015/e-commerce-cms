"use client";
import Image from "next/image";
import Link from "next/link";
import { IconAboutUs, IconContact, IconHome, IconMenu, IconProduct, IconX } from "./Icons";
import { useRef, useState } from "react";
import { useClickOutside } from "../hooks/useClickOutside";

const Sidebar = () => {
    // Next step: make responsive. The idea might be to overlap and display as a menu that overlap and show content when expanded
    const [expanded, setExpanded] = useState(false);
    const elementRef = useRef(null)
    useClickOutside({elementRef, onClickOutside: ()=> setExpanded(false)})
    return (
        <header className={`max-w-[200px] font-heading text-black h-auto
        md:relative fixed top-0 left-0 z-[1000] md:col-start-1 md:col-span-1
        transition-all duration-700 ease-in-out 
        `}
        role='navigation' aria-label="navigation links"
        aria-hidden={!expanded} ref={elementRef}
        >
            {
                !expanded ? 
                <button className="h-[35px] w-[35px] md:hidden block
                border-gray border rounded-md bg-white
                hover:bg-black hover:fill-white hover:scale-[0.95] hover:border-none
                flex justify-center items-center
                absolute top-4 right-4 transition-all z-[3000]"
                title="Open sidebar"
                onClick={()=> setExpanded(true)}
                aria-expanded={expanded}
                >
                    <IconMenu 
                    className="h-[15px]"
                    />
                </button>
                :
                <button className="h-[35px] w-[35px] md:hidden block
                rounded-md bg-black fill-white
                hover:bg-black hover:fill-white hover:scale-[0.95] hover:border-none
                flex justify-center items-center
                absolute top-4 right-4 transition-all z-[3000]"
                title="Close sidebar"
                onClick={()=> setExpanded(false)}
                aria-expanded={expanded}
                >
                    <IconX 
                    className="h-[15px]"
                    />
                </button>
            }
            <nav className={`md:w-[200px] md:opacity-100 md:h-screen 
            border-r border-r-white-gray bg-white p-8 origini-left 
            flex flex-col gap-16 transition-all duration-700 ease-in-out bg-white/80 backdrop-blur-lg
            ${expanded ? 'w-[200px] opacity-100 h-screen': 
            'w-[0px] opacity-0 bg-transparent h-[0px]'} 
            `}
            >
                <div className="flex flex-col items-center w-full">

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
                <ul className="flex flex-col gap-8 w-full">
                    <span className="font-bold text-2xl">
                        Explore
                    </span>
                    <li className="fill-gray text-gray
                    hover:fill-black hover:text-black hover:scale-[0.95]">
                        <Link href={'/'}
                        className="flex gap-2 items-center"
                        >
                            <IconHome className="h-[25px]"/>
                            Home
                        </Link>
                    </li>
                    <li className="fill-gray text-gray
                    hover:fill-black hover:text-black hover:scale-[0.95]">
                        <Link href={'#'}
                         className="flex gap-2 items-center"
                        >
                            <IconProduct className="h-[25px]"/>
                            Products
                        </Link>
                    </li>
                    <li className="fill-gray text-gray
                    hover:fill-black hover:text-black hover:scale-[0.95]">
                        <Link href={'/about'}
                         className="flex gap-2 items-center"
                        >
                            <IconAboutUs className="h-[25px]"/>
                            About us
                        </Link>
                    </li>
                    <li className="fill-gray text-gray
                    hover:fill-black hover:text-black hover:scale-[0.95]">
                        <Link href={'#'}
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