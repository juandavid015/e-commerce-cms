import SearchBar from "./SearchBar";
import UserPanel from "./UserPanel";

const Header = () => {
    return (
        <header className="relative flex justify-between items-center font-heading">
            <SearchBar />
            <UserPanel />
        </header>
    )
}

export default Header;