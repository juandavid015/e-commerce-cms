import Link from "next/link";
import { IconArrow } from "../Icons";

const DiscountCard = () => {
    return (
        <div className="w-full min-h-[150px] rounded-lg 
        hover:scale-[0.99] transition-all col-span-full
        bg-iris p-8 flex items-center justify-around text-white font-heading">
            <div className="flex flex-col">

                <h2 className="sm:text-xl text-lg font-bold text-white/70">
                    Section A 
                </h2>
                <p className="sm:text-4xl text-2xl font-bold font-heading
                text-white">
                    50% OFF
                </p>
            </div>
            <Link href={'#'}
            className="inline-flex items-center gap-2
            group/link hover:scale-[0.95] hover:text-white/70">
                <span>See more</span>
                <div className="flex items-center justify-center
                h-[30px] w-[30px] bg-white rounded-full
                group-hover/link:bg-black group-hover/link:fill-white">
                    <IconArrow className="h-[15px]"/>
                </div>
            </Link>
        </div>
    )
}
export default DiscountCard;