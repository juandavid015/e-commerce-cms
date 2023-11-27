import { IconArrowLarge } from "../components/Icons"
import FiltersAndSorts from "../components/products/FiltersAndSorts"
import ProductCard from "../components/products/ProductCard"

const data = {
    totalItems: 12,
    products: [
        {
            title: 'Title product larger. Much larger. Enough to overlap? Or maybe not?',
            price: 103.89,
            type: 'Type product',
            image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
            title: 'Title product',
            price: 103.89,
            type: 'Type product',
            image: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1600',
            discount: 0.5
        },
        {
            title: 'Title product',
            price: 103.89,
            type: 'Type product',
            image: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
            title: 'Title product larger. Much larger. Enough to overlap? Or maybe not?',
            price: 103.89,
            type: 'Type product',
            image: 'https://images.pexels.com/photos/2693644/pexels-photo-2693644.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
            title: 'Title product',
            price: 103.89,
            type: 'Type product',
            image: 'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
            title: 'Title product',
            price: 103.89,
            type: 'Type product',
            image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
            title: 'Title product',
            price: 103.89,
            type: 'Type product',
            image: 'https://images.pexels.com/photos/2608495/pexels-photo-2608495.jpeg?auto=compress&cs=tinysrgb&w=1600',
            discount: 0.1
        },
        {
            title: 'Title product',
            price: 103.89,
            type: 'Type product',
            image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
            title: 'Title product',
            price: 103.89,
            type: 'Type product',
            image: 'https://images.pexels.com/photos/19049366/pexels-photo-19049366/free-photo-of-botella-anuncio-producto-comercial.png?auto=compress&cs=tinysrgb&w=1600'
        },
        {
            title: 'Title product',
            price: 103.89,
            type: 'Type product',
            image: 'https://images.pexels.com/photos/5797999/pexels-photo-5797999.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
            title: 'Title product',
            price: 103.89,
            type: 'Type product',
            image: 'https://images.pexels.com/photos/4210866/pexels-photo-4210866.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
            title: 'Title product. Large, much larger',
            price: 103.89,
            type: 'Type product',
            image: 'https://images.pexels.com/photos/8361484/pexels-photo-8361484.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        
    ]
}

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