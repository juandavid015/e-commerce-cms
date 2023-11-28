'use client'
import Link from "next/link";
import { IconArrow, IconLogOut } from "./Icons";
import { useState } from "react";

const User = () => {
    // Here will be the user login state
    // For now, we will use a hardcoded value
    const [userIsLogged, setUserIsLogged] = useState(true);
    const [openUserOptions, setOpenUserOptions] = useState(false);
    return (
        <div className="relative flex items-center gap-4 text-sm ">
            <div className="w-[30px] h-[30px] 
            rounded-full overflow-hidden">
                <img 
                alt="user"
                src="https://images.pexels.com/photos/2970501/pexels-photo-2970501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                className="w-full h-full object-cover"/>
            </div>
            <div className="md:block hidden">
                <p>Hello!</p>
                <p className="font-bold">Mr. Unkown</p>
            </div>
            <button onClick={() => setOpenUserOptions(!openUserOptions)}
            className="hover:scale-[0.95] transition-all hover:fill-iris"
            >
                <IconArrow 
                className="h-[15px] rotate-90"
                />
            </button>
            <div className={`
                absolute top-full right-0 bg-white transition-all duration-300  min-w-[150px]
                shadow-lg rounded-lg ${openUserOptions ? 'h-full w-full p-8' : 'h-0 w-0 p-0 opacity-0'}`}
                aria-hidden={openUserOptions}
            >
                <ul className="flex flex-col gap-2 h-full w-full">
                    <li className="h-full w-fit
                    hover:text-red hover:fill-red">
                        <Link href="#"
                        className="flex gap-2 items-center">
                            <IconLogOut className="h-[20px]"/>
                            <span>
                                Logout
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default User;