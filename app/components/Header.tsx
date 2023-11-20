import SearchBar from "./SearchBar";
import UserPanel from "./UserPanel";

const Header = () => {
    return (
        <header className="relative flex justify-between items-center font-heading 
        h-min w-full md:col-start-2 md:col-span-2 p-8 overflow-hidden">
            <SearchBar />
            <UserPanel />
        </header>
    )
}

export default Header;