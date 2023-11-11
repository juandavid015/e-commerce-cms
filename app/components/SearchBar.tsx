import { IconSearch } from "./Icons"

export const SearchBar = () => {
    return (
        <header>
            <search>
                <form action="./search/"
                className="text-sm max-w-[500px] w-full
                bg-white-gray rounded-md py-2 px-4 
                flex items-center gap-2">
                    <label htmlFor="product" className="w-full">
                        <input type="search" id="product" name="product" 
                        placeholder="Search for items, products and inspiration..."
                        className="w-full focus:outline-none bg-transparent grayscale"/>
                    </label>
                    <button type="submit"
                    className="fill-gray hover:bg-black h-[30px] w-[30px] 
                    rounded-full inline-flex items-center justify-center"
                    >
                        <IconSearch className="h-[20px]"/>
                    </button>
                </form>
            </search>
        </header>
    )
}

export default SearchBar