import FiltersAndSorts from "../components/products/FiltersAndSorts"
import ProductCard from "../components/products/ProductCard"
import { data } from "../data"
const Products = () => {
    const products = data.products
    return (
        <main className="flex lg:flex-col flex-col gap-16 px-8 py-16
        max-w-[auto] mx-auto w-full relative ">
            <FiltersAndSorts />
            <div className="grid justify-center grid-cols-products w-full relative">
                {
                    products.map((product, productIndex) => {
                        return (
                            <ProductCard
                            key={'product' + productIndex}
                            product={product}
                            />
                        )
                    })
                }
            </div>
        </main>
    )
}
export default Products; 