import { IconCartShop } from "./Icons";
import User from "./User";

const UserPanel = () => {
    return (
        <div className="flex gap-4 ml-auto">
            <button className="flex gap-2 items-center w-[40px] h-[40px] lg:w-fit lg:h-fit
            lg:py-2 lg:px-4  bg-transparent text-black fill-black lg:rounded-lg rounded-full  
            flex items-center justify-center 
            hover:scale-[0.95] transition-all">
                <IconCartShop
                className="h-[20px]" 
                />
                <span className="lg:block hidden">Cart: 0</span>
            </button>
            <User />
        </div>
    )
}
export default UserPanel;