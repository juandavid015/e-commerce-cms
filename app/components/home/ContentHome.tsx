import Link from "next/link";
import DiscountCard from "./DiscountCard";
import ProductInfoCard from "./ProductInfoCard";
import ProductShowCard from "./ProductShowCard";
import { IconArrow, IconBagShop } from "../Icons";

const ContentHome = () => {
    return (
        <div className="flex flex-col gap-8">
            <h1 className="sm:text-4xl text-3xl font-bold
            underline underline-offset-2">
                New in products
            </h1>
            <div className="flex gap-16 md:flex-row flex-col">
                <div className="grid grid-cols-products-show grid-rows-products-show
                gap-4">
                    <DiscountCard />
                    <ProductInfoCard 
                    img="https://res.cloudinary.com/dut4cwhtd/image/upload/v1699725271/e-commerce/pexels-photo-2994100-removebg-preview_hmg7pf.png"/>
                    <ProductShowCard 
                    img="https://res.cloudinary.com/dut4cwhtd/image/upload/v1699725271/e-commerce/pexels-photo-9281082_dywd6x.jpg"
                    />
                    <ProductShowCard 
                    img="https://res.cloudinary.com/dut4cwhtd/image/upload/v1699725271/e-commerce/pexels-photo-3819969_xdg8rn.jpg"
                    />
                </div>
                <div className="grid grid-cols-products-show grid-rows-products-show
                gap-4">
                    <ProductShowCard 
                    img="https://res.cloudinary.com/dut4cwhtd/image/upload/v1699725271/e-commerce/pexels-photo-2608495_l4tpqb.jpg"
                    />
                    <ProductShowCard 
                    img="https://res.cloudinary.com/dut4cwhtd/image/upload/v1699725271/e-commerce/pexels-photo-4465121_auaiog.jpg"
                    />
                    <DiscountCard />
                    <ProductInfoCard 
                    img="https://res.cloudinary.com/dut4cwhtd/image/upload/v1699725273/e-commerce/pexels-photo-2608503-removebg-preview_ufwdzu.png"
                    />
            
                </div>
            </div>
            <Link href={'#'}
            className="fill-gray text-gray hover:fill-black hover:text-black hover:scale-[0.95]
            flex items-center gap-3 w-fit sm:text-2xl text-xl font-heading font-bold
            mx-auto my-16 transition-all">
                <IconBagShop 
                className="h-[35px]"
                />
                <span>View all products</span>
                <IconArrow 
                className="h-[25px]"
                />
            </Link>

        </div>
    )
}
export default ContentHome;