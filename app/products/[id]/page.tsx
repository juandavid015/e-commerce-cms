
import { Product as ProductType } from "@/app/types/types";
// import { data } from "@/app/data";
import { IconArrowLarge, IconBagShop } from "@/app/components/Icons";
import Filter from "@/app/components/Select";
import Link from "next/link";
import { getProductById } from "@/app/services/products";

const Product = async ({ params }: { params: { id: number } }) => {
    // Here we will fetch the product data from the API
    // As recordatory, read the docs about getStaticProps and getStaticPaths
    // Meanwhile, we will use the hardcoded data from the products page
    
    const product: ProductType = await getProductById(params.id);

    if(!product) {
        throw new Error('Product not found')
    }
    return (
        <main className="flex flex-col px-8 py-16 gap-8 items-center 
        max-w-[1024px] w-full relative mx-auto col-start-2">
            <Link href={'/products'} scroll={false}
            className="absolute top-2 left-8
            p-3 bg-black fill-white rounded-full
            hover:scale-[0.95] transition-all">
                <IconArrowLarge className="h-[20px] -rotate-90" />
            </Link>
            <div className="text-gray font-bold text-xl h-fit">
                {`products/${product?.category}`}
            </div>
            <div className="flex w-full gap-16 lg:flex-row flex-col lg:items-start items-center">
                {/* Images */}
                <div className="max-w-[452px] flex flex-col gap-2 flex-1">
                    <div className="w-full max-h-[500px] h-full rounded-md overflow-hidden">
                        <img src={product?.image} alt={`Image of ${product?.title}`}
                            className="w-full h-full object-cover" />
                    </div>
                    {
                        product?.otherImages?.length &&
                        <div className="flex gap-2">
                            {
                                product?.otherImages.map((image, imageIndex) => {
                                    return (
                                        <div key={'image' + imageIndex}
                                            className="w-full max-h-[100px] h-full rounded-md overflow-hidden">
                                            <img src={image} alt={`Image of ${product?.title}`}
                                                className="w-full h-full object-cover object-center" />
                                        </div>
                                    )
                                })
                            }
                        </div>

                    }

                </div>

                {/* Info */}
                <div className="flex flex-col gap-4 max-w-[100%] w-full flex-1">
                    <h1 className="sm:text-4xl text-3xl font-bold">
                        {product?.title}
                    </h1>
                    {product?.variants &&
                        (
                            <div className="flex flex-wrap gap-2 w-full">
                                {
                                    Object.entries(product?.variants).map(([key, value]) => (
                                        <Filter
                                            key={key + value}
                                            options={value || []}
                                            title={key}
                                            label={`Select ${key}`}
                                        />
                                    ))
                                }

                            </div>
                        )

                    }

                    <h2 className="text-2xl font-bold">
                        Description
                    </h2>
                    <p className="opacity-70">
                        {product?.description}
                    </p>
                    <h2 className="text-2xl font-bold">
                        Price
                    </h2>
                    <p className="sm:text-2xl xl text-iris font-bold">
                        $ {product?.price}
                    </p>
                    <button className="bg-iris text-white py-3 px-6 rounded-md w-fit
                font-bold text-lg flex items-center gap-2 fill-white
                hover:scale-[0.95] transition-all">
                        <IconBagShop className="h-[25px]" />
                        <span>
                            Add to cart
                        </span>
                    </button>
                </div>
            </div>

        </main>
    )
}
export default Product;