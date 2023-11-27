"use client";
import Filter from "../Filter";
import { useState, useRef } from "react";
import { IconFilter } from "../Icons";
const filters = {
    condition: ['new', 'used'],
    category: ['clothes', 'technology', 'health and care'],
    discount: ['20%','30%', '50%','70%']
}
const sorts = {
    price: ['lower price', 'higher price']
}

const FiltersAndSorts = () => {
    const [showFilters, setShowFilters] = useState(false)

    const filtersPanelRef = useRef<HTMLDivElement>(null);

    const toggleFilters = () => {
        if (showFilters && filtersPanelRef.current) {
            filtersPanelRef.current.focus(); // Focus the panel when expanding
          }
      setShowFilters(!showFilters);
     
    };

    return (
        <div className="flex flex-col sm:flex-nowrap flew-wrap justify-between gap-8 
        relative z-[1000] h-full">
            <div className="w-full h-full flex sm:flex-nowrap flex-wrap justify-between gap-4">
                <button className="border-gray border px-4 py-2 rounded-lg
                font-bold block h-fit w-fit flex gap-2 items-center"
                onClick={toggleFilters}
                aria-expanded={showFilters}
                aria-controls="filters-panel"
                aria-label={showFilters ? 'Close filters' : 'Open filters'}
                >
                    <IconFilter className="h-[20px]" />
                    <span>
                        Filters
                    </span>
                </button>
                <div className={`lg:w-fit w-fit  rounded-lg
                flex flex-col gap-4  h-fit lg:relative  right-0`}>
                {/* <div className={`font-bold lg:block hidden`}>
                    Sort
                </div> */}
                {
                    Object.entries(sorts).map(([key, value])=> (
                        <Filter 
                        key={key + value}
                        options={value}
                        title={key}
                        label={`Sort ${key}`}
                        type="sort"
                        />
                    ))
                }
                </div>
            </div>

            <div className={`w-full bg-white rounded-lg 
            flex flex-col gap-4 origin-top p-8
            ${showFilters ? 'animate-expand-bottom overflow-visible' : ' animate-expand-top overflow-hidden'}`}
            id="filters-panel"
            aria-hidden={!showFilters}
            ref={filtersPanelRef}
            aria-labelledby="filters-label"
           

            >
                <span className="font-bold hidden h-0 w-0" id="filters-label" 
                aria-label="filters">
                    Filters
                </span>
                <div className={`filters w-fit flex sm:flex-row sm:mx-0 mx-auto flex-col gap-4 h-fit`}
                role='listbox' 
                aria-labelledby="filters-label"
                >

                    {
                        Object.entries(filters).map(([key, value])=> (
                            <Filter 
                            key={key + value}
                            options={value}
                            title={key}
                            label={`Select ${key}`}
                            />
                        ))
                    }
                </div>
            </div>
            
        </div>
    )
}
export default FiltersAndSorts;