import { IconCartShop } from "./Icons";
import User from "./User";

const UserPanel = () => {
    return (
        <div className="flex gap-4">
            <button className="flex gap-2 items-center 
            py-2 px-4  bg-black text-white fill-white rounded-md
            hover:bg-black/70 hover:scale-[0.95] transition-all">
                <IconCartShop
                className="h-[25px]" 
                />
                <span>Cart: 0</span>
            </button>
            <User />
        </div>
    )
}
export default UserPanel;