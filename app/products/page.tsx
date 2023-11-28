import FiltersAndSorts from "../components/products/FiltersAndSorts"
import ProductCard from "../components/products/ProductCard"
import { data } from "../data"
const Products = () => {
    const products = data.products
    return (
        <main className="flex flex-col gap-16 px-8 py-16
         mx-auto w-full relative md:col-start-2 col-start-1 col-end-3">
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