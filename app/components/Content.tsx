import DiscountCard from "./DiscountCard";
import ProductInfoCard from "./ProductInfoCard";

const ContentHome = () => {
    return (
        <div className="flex flex-col gap-8">
            <h1 className="sm:text-4xl text-3xl font-bold
            underline underline-offset-2">
                New in products
            </h1>
            <DiscountCard />
            <ProductInfoCard />
        </div>
    )
}
export default ContentHome;