import { IconArrow } from "./Icons";

const User = () => {
    return (
        <div className="flex items-center gap-4 text-sm">
            <div className="w-[30px] h-[30px] 
            rounded-full overflow-hidden">
                <img 
                alt="user"
                src="https://images.pexels.com/photos/2970501/pexels-photo-2970501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                className="w-full h-full object-cover"/>
            </div>
            <div className="md:block hidden">
                <p>Hello!</p>
                <p className="font-bold">Mr. Calomon</p>
            </div>
            <button 
            className="hover:scale-[0.95] transition-all hover:fill-iris"
            >
                <IconArrow 
                className="h-[15px] rotate-90"
                />
            </button>
        </div>
    )
}
export default User;