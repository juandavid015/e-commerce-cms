const ProductShowCard = ({img}: {img:string}) => {
    return (
        <div className="max-w-[400px] max-h-[400px] h-full w-full rounded-lg 
        hover:scale-[0.99] transition-all overflow-hidden
        bg-transparent flex items-center justify-around text-white font-heading
        relative">
            <img src={img}
            alt="product showcase image"
            className="w-full h-full object-cover"/>
            {/* <h2>
                Product X - Size - Color
            </h2> */}
        </div>
    )
}
export default ProductShowCard;