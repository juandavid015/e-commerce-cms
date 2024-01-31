import { Pagination } from "../components/Pagination"
import FiltersAndSorts from "../components/products/FiltersAndSorts"
import ProductCard from "../components/products/ProductCard"
import { sorts } from "../data"
// import { data } from "../data"
import { getProducts } from "../services/products"
import NotFoundProduct from "./not-found"
type SearchParams = {
    [key: string]: string | string[] | undefined 
}

const Products = async ({ searchParams }: { searchParams: SearchParams}) => {
    let sort: { [key: string]: string } = {};
    let filters: { [key: string]: string } = {};
    const sortProperties = Object.keys(sorts);
    const { page, pageSize, ...otherParams} = searchParams;
    const pagination = { page: page as string, pageSize: pageSize as string};
    // parsing searchParams to ve valid filters and sort object 
    // => e.g : filters: { category: technology } sort: { price: higher }
    Object.entries(otherParams).forEach(([ property, value ]) => {
        if(sortProperties.includes(property) ) {
            sort[property] = value as string;
        } else {
            filters[property] = value as string;    
        }
    });

    // console.log('n', sort);
    const { data: products, pagination: dataPagination } = await getProducts({filters, sort, pagination});
    // console.log(products)
    // console.log('r', filters, sort, pageSize, page)
    return (
        <main className="flex flex-col gap-16 px-8 py-16
         mx-auto w-full relative md:col-start-2 col-start-1 col-end-3">
            <FiltersAndSorts />
            {
                !products.length ? 
                <NotFoundProduct />
                :
                <div className="grid justify-center grid-cols-products w-full relative">
                    {
                        products?.map((product, productIndex) => {
                            return (
                                <ProductCard
                                key={'product' + productIndex}
                                product={product}
                                />
                            )
                        })
                    }
                </div>
            }
            <Pagination  
            totalPages={Number(dataPagination.pageCount) ?? 0}
            page={Number(dataPagination.page)}
            />
        </main>
    )
}
export default Products; 