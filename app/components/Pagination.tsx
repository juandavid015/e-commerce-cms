'use client';
import { useCallback, useEffect, useState } from "react";
import { IconArrowLarge } from "./Icons";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import useQueryString from "../hooks/useQueryString";


export function Pagination({ totalPages = 5, page = 1 }: { totalPages: number, page: number }) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [active, setActive] = useState(page);
    const createQueryString = useQueryString(searchParams)

    const getItemProps = (index: number) => {
        setActive(index)
        router.push(pathname + '?' + createQueryString('page', String(index)))
    }
    
    const next = () => {
        if (active === totalPages || active > totalPages) return;
        setActive(active + 1);
        router.push(pathname + '?' + createQueryString('page', String(active + 1)))
    };

    const prev = () => {
        if (active === 1 || active < totalPages) return;
        setActive(active - 1);
        router.push(pathname + '?' + createQueryString('page', String(active - 1)))
    };

    useEffect(()=> {
        setActive(Number(page))
    },[page])

    if (totalPages === 0) return null

    return (
        <div className="flex items-center gap-4 w-fit mx-auto">
            <button
                className={`flex items-center gap-2 rounded-full 
                px-4 py-2 font-medium
                ${active === 1 || active > totalPages ? 'fill-gray/50 text-gray/50' : 'hover:bg-gray/50'}`}
                onClick={prev}
                disabled={active === 1}
            >
                <IconArrowLarge className="h-4 w-4 rotate-[-90deg]" /> Previous
            </button>
            <div className="flex items-center gap-2">
                {
                    Array.from({ length: totalPages }, (_, index: number) => (
                        <button  
                        className={ `rounded-full w-[50px] h-[50px] 
                        ${active === index + 1 ? 'text-white bg-black hover:bg-black' : 'hover:bg-gray/50'} 
                        transition-all `}
                        key={'page-btn' + index}
                        onClick={()=> getItemProps(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))
                }
            </div>
            <button
                className={`flex items-center gap-2 rounded-full 
                px-4 py-2 font-medium
                ${active === totalPages || active > totalPages ? 'fill-gray/50 text-gray/50' : 'hover:bg-gray/50'}`}
                onClick={next}
                disabled={active === totalPages}
            >
                Next
                <IconArrowLarge className="h-4 w-4 rotate-[90deg]" />
            </button>
        </div>
    );
}