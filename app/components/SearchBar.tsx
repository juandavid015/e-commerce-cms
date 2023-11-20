"use client"
import { useRef, useState } from "react"
import { IconSearch, IconX } from "./Icons"
import { useClickOutside } from "../hooks/useClickOutside";

export const SearchBar = () => {
    const elementRef = useRef(null)
    const [expanded, setExpanded] = useState(false);
    const showSearchFullBar = () => {
        setExpanded(true);
    }
    useClickOutside({elementRef, onClickOutside: ()=> setExpanded(false)})
    return (

        <search className={`lg:max-w-[480px]  w-full lg:p-0 
        transition-all duration-700 z-[900] rounded absolute top-8 left-8 left-0 
        ${expanded && 'max-w-[100vw] p-8 bg-white'}
        `}
        onFocus={showSearchFullBar} ref={elementRef}
        >
            <form action="./search/"
                className={`text-sm max-w-[480px] lg:w-full 
                bg-white-gray rounded-md py-2 px-4 ${expanded ? 'w-full': 'md:w-[calc(100%-316px)] w-[calc(100%-216px)] ' }
                flex items-center gap-2`}>
                <label htmlFor="product" className="w-full">
                    <input type="search" id="product" name="product"
                        placeholder="Search for items, products and inspiration..."
                        className={`focus:outline-none bg-transparent grayscale w-full
                        `}/>
                </label>
                <button type="submit"
                    className="fill-gray hover:bg-black h-[30px] w-[30px] 
                    rounded-full inline-flex items-center justify-center"
                >
                    <IconSearch className="h-[20px]" />
                </button>
           
            </form>
            <button className={`absolute -right-[16px] top-[0.25rem] 
            ${expanded && '-right-0 top-0'} ${expanded ? 'block' : 'hidden'} 
            fill-white lg:hidden flex items-center justify-center  
            rounded-lg bg-black h-[40px] w-[40px]
            `}
            title="Close search bar" onClick={()=> setExpanded(false)}
            >
                    <IconX className="h-[15px]"/>
            </button>
        </search>

    )
}

export default SearchBar