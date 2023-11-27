import { RefObject, useEffect } from "react"

interface Props {
    elementRef: RefObject<HTMLElement>
    onClickOutside?: ()=> Promise<void> | void | undefined
}
export const useClickOutside = ({ elementRef, onClickOutside }: Props) => {
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (elementRef.current && !elementRef.current.contains(e.target as Node)) {
                onClickOutside && onClickOutside();
            }
        };

        const handleClick = (e: MouseEvent) => {
            if (elementRef.current && elementRef.current.contains(e.target as Node)) {
                return; // Clicked inside the container
            }
            handleClickOutside(e); // Clicked outside the container
        };

        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [elementRef, onClickOutside]);
};