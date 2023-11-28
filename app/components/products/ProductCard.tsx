import { Product } from "@/app/types/types"
import { IconAdd } from "../Icons"
import Link from "next/link"

const ProductCard = ({ product } : { product: Product }) => {
    return (
        <div className="max-w-[350px] max-h-auto w-full h-full 
        flex-1 p-6 flex flex-col gap-2 font-bold font-heading 
        border border-white-gray relative z-[100] group/product">
            <Link href={`/products/${product.id}`}>
                <div className="max-h-[325px] min-h-[325px] h-full w-full rounded-md overflow-hidden">
                    <img src={product.image} alt={`Image of ${product.title}`}
                    className="w-full h-full object-cover"/>
                </div>

                <div className="flex gap-2 justify-between">
                    <div className="flex flex-col gap-2">
                        <p className="text-gray font-normal">
                            {product.type}
                        </p>
                        <p className="line-clamp-2">
                            {product.title}
                        </p>
                    </div>
                    <div className="mt-auto">
                        <p className="text-xl">
                            ${product.price}
                        </p>    
                    </div>
                </div>
            </Link>
            <button className="p-4 rounded-full bg-white hidden
            absolute top-[calc(2em)] z-[0] right-[calc(2em)] group-hover/product:block
            hover:scale-[0.95] transition-all"
            title="Add product to cart">
                <IconAdd className="h-[20px]"/>
            </button>
            {
                product.discount &&
                <div className="bg-yellow py-2 px-4 w-fit
                absolute top-2 left-4">
                    {`${(product.discount * 100)}% OFF`}
                </div>
            }
           
        </div>
    )
}
export default ProductCard