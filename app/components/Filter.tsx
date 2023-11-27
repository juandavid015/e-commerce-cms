'use client'
import { useState, useRef } from 'react';
import { IconArrow, IconCheck } from './Icons';
import { useClickOutside } from '../hooks/useClickOutside';

const Filter = ({ options, title, label, type }: { options: Array<string>, title: string, label: string, type?: 'sort' | 'filter' }) => {

    const selectRef = useRef<HTMLDivElement>(null)
    const [selectedOption, setSelectedOption] = useState(options[0])
    const [isOpen, setIsOpen] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(0);

    // Open or close the select options
    const toggleOptions = () => {
        setIsOpen(!isOpen)
    }

    // When an option is clicked focus the item, change the state and close
    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
        selectRef.current && selectRef.current.focus();
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

    return (
        <div className="custom-filter relative rounded-md 
        max-w-[170px] w-[170px] "
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
                    
                    <span className={`font-bold capitalize ${type === 'sort' ? 'hidden' : 'inline'}`}>
                        {`${title}:`}
                    </span>
                    <span className={`${type === 'sort' ? 'text-black font-bold': 'text-gray'}
                     capitalize `}>
                        {`${selectedOption}`}
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

                <ul className='options-list absolute w-full mt-0 transition-all
                bg-white rounded-md flex flex-col shadow shadow-md '
                >
                    {options.map((option, optIndex) => (
                        <li
                            className={`hover:text-black hover:bg-white-gray/30 cursor-pointer
                            capitalize text-sm relative pr-[20px] py-2 px-4 
                            ${option === selectedOption ? 'bg-white-gray font-bold' : 'white'}`}
                            key={option + optIndex}
                            role='option'
                            aria-selected={option === selectedOption}
                            onClick={() => handleOptionClick(option)}
                            onKeyDown={(e) => e.key === 'Enter' && handleOptionClick(option)}
                        >
                            <span>{option}</span>
                            {option === selectedOption &&
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
export default Filter;