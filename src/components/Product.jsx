const Product = ({ name, price, image }) => {
    return (
        <div>
            <img src={image} className="rounded-2xl h-[450px]" alt="" />
            <div aria-label="info" className="flex text-2xl justify-between  my-4">

                <h1 className="font-trajan capitalize">{name}</h1>
                <p className="font-cabinet text-[#787878]">₦{price}</p>
            </div>
        </div>
    );
}

export default Product;