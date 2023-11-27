import Link from "next/link";
import { IconFavoriteOutlined } from "../Icons";

const ProductInfoCard = ({img}: {img:string}) => {
    return (
        <div className="w-full min-h-[150px] rounded-lg 
        hover:scale-[0.99] transition-all col-span-full
        bg-iris/50 flex items-center justify-around text-black font-heading">
            <div className="flex flex-col p-8">

                <h2 className="sm:text-xl text-lg font-bold">
                    Title of a random product
                </h2>
                <p className="text-sm">
                    This is the description of a random product that need
                    to be promoted
                </p>
            </div>
            <div className="max-w-[300px] w-full h-full relative overflow-hidden">
                <img 
                src={img}
                alt="product showcase"
                className="block w-full h-full object-cover absolute top-0 right-0"
                />
                <button
                title="Mark as favorite"
                className="inline-flex items-center gap-2
                group/link hover:scale-[0.95] hover:text-white/70
                cursor-pointer absolute top-8 right-8">
                <div className="flex items-center justify-center
                h-[30px] w-[30px] bg-white rounded-full
                group-hover/link:bg-black group-hover/link:fill-white">
                    <IconFavoriteOutlined className="h-[15px]" />
                </div>
            </button>
        
            </div>
            
        </div>
    )
}
export default ProductInfoCard;
