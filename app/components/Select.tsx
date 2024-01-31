'use client'
import { useState, useRef, useCallback, useEffect } from 'react';
import { IconArrow, IconCheck } from './Icons';
import { useClickOutside } from '../hooks/useClickOutside';
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';
import useQueryString from '../hooks/useQueryString';

interface Select {
    options: Array<string>, 
    treatOptionsAsPercentages?: boolean,
    title: string, 
    label: string, 
    type?: 'sort' | 'filter'
}
const Select = ({ options, title, label, type, treatOptionsAsPercentages = false }: Select) => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const createQueryString = useQueryString(searchParams);
    const selectRef = useRef<HTMLDivElement>(null)
    const [selectedOption, setSelectedOption] = useState('')
    const [isOpen, setIsOpen] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(0);

    // Open or close the select options
    const toggleOptions = () => {
        setIsOpen(!isOpen)
    }

    // When an option is clicked focus the item, change the state and close
    const handleOptionClick = (option: string, title: string) => {
        console.log('opt', option)
        if(String(option) === selectedOption) {
            setSelectedOption('') 
            router.push(pathname + '?' + createQueryString(title, '') ) // Reset and push to a new URL search param 
        } else {

            setSelectedOption(option);
            setIsOpen(false);
            selectRef.current && selectRef.current.focus();
            router.push(pathname + '?' + createQueryString(title, option)) // set and push to a new URL search param
        }
    };

    // Allow navigation, selection and close over the options list
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            toggleOptions();
        } else if (e.key === 'Escape') {
            setIsOpen(false);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const newIndex = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
            setFocusedIndex(newIndex);
            setSelectedOption(options[newIndex]);
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            const newIndex = focusedIndex < options.length - 1 ? focusedIndex + 1 : 0;
            setFocusedIndex(newIndex);
            setSelectedOption(options[newIndex]);
        }
    }

    // Close the options list when click outside the box
    useClickOutside({ elementRef: selectRef, onClickOutside: () => setIsOpen(false) });

    useEffect(() => {
        const isOnSearchParams = searchParams.get(title)
        if(isOnSearchParams) {
            console.log(isOnSearchParams)
            setSelectedOption(isOnSearchParams);
        } 
    }, [setSelectedOption, searchParams, title])

    return (
        <div className="custom-filter relative rounded-md 
        min-w-[170px] w-auto flex-1"
            role="listbox" aria-labelledby="selected-option"
            aria-activedescendant='selected-option'
        >
            <div className='selected-option flex flex-col relative bg-white
            border border-gray rounded-md p-2 w-full cursor-pointer'
                ref={selectRef}
                tabIndex={0}
                aria-haspopup='listbox'
                aria-expanded={isOpen}
                onClick={toggleOptions}
                onKeyDown={handleKeyDown}
                aria-label={label}
            >
                <span className='flex flex-col pr-[calc(15px+1rem)]'>
                    
                    <span className={`font-bold capitalize ${'inline'}`}>
                        {`${title}:`}
                    </span>
                    <span className={`text-gray capitalize `}>
                         { treatOptionsAsPercentages ? `${Number(selectedOption) * 100}%` : selectedOption}
                    </span>
                </span>
                <div className='font-black h-fit w-fit
                absolute top-[33%] right-5 transition-all'>
                    {isOpen ?
                        <IconArrow className='w-[8px] -rotate-90 transition-all' />
                        : <IconArrow className='w-[8px] rotate-90 transition-all ' />
                    }
                </div>
            </div>
            {isOpen && (

                <ul className='options-list absolute w-full mt-0 transition-all z-10
                bg-white rounded-md flex flex-col shadow shadow-md overflow-y-auto max-h-[200px]'
                >
                    {options?.map((option, optIndex) => (
                        <li
                            className={`hover:text-black hover:bg-white-gray/30 cursor-pointer
                            capitalize text-sm relative pr-[20px] py-2 px-4 
                            ${option === selectedOption ? 'bg-white-gray font-bold' : 'white'}`}
                            key={option + optIndex}
                            role='option'
                            aria-selected={option === selectedOption}
                            onClick={() => handleOptionClick(option, title)}
                            onKeyDown={(e) => e.key === 'Enter' && handleOptionClick(option, title)}
                        >
                            <span>
                                { treatOptionsAsPercentages ? `${Number(option) * 100}%` : option}
                            </span>
                            {
                                String(option) === selectedOption &&
                                <IconCheck className='h-[15px] absolute right-3 top-[25%] bg-black fill-white rounded-sm' />
                            }
                        </li>
                    ))
                    }
                </ul>
            )
            }
        </div>
    )
}
export default Select;