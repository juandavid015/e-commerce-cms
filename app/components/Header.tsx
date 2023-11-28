import SearchBar from "./SearchBar";
import UserPanel from "./UserPanel";

const Header = () => {
    return (
        <div className="relative flex justify-between items-center font-heading 
        h-min w-full max-w-full md:col-start-2 md:col-span-2 p-8 col-span-2 col-start-1 ">
            <SearchBar />
            <UserPanel />
        </div>
    )
}

export default Header;