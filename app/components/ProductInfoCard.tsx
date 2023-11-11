import Link from "next/link";
import { IconFavoriteOutlined } from "./Icons";

const ProductInfoCard = () => {
    return (
        <div className="max-w-[600px] w-full rounded-lg 
        hover:scale-[0.99] transition-all
        bg-iris/50 p-8 flex items-center justify-around text-black font-heading">
            <div className="flex flex-col">

                <h2 className="sm:text-xl text-lg font-bold">
                    Title of a random product
                </h2>
                <p>
                    This is the description of a random product that need
                    to be promoted
                </p>
            </div>
            <div className="max-w-[300px] w-full h-full relative overflow-hidden">
                <img 
                src={'https://res.cloudinary.com/dut4cwhtd/image/upload/v1699725271/e-commerce/pexels-photo-2994100-removebg-preview_hmg7pf.png'}
                alt="product showcase"
                className="block w-full h-[200px] object-cover absolute -top-[100%] right-0"
                />
                <button
                title="Mark as favorite"
                className="inline-flex items-center gap-2
                group/link hover:scale-[0.95] hover:text-white/70
                cursor-pointer absolute top-0 right-0">
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
