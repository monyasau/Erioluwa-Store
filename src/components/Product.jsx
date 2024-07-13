import { useState, useEffect } from "react";

const Product = ({ productData, setCart, cart }) => {
    let id = productData.id;
    const [inCart, setInCart] = useState(cart.includes(id));

    useEffect(() => {
        setInCart(cart.includes(id));
    }, [cart, id]);

    const addToCart = (e) => {
        e.stopPropagation();
        setCart((prevCart) => [...prevCart, id]);
    };

    const removeFromCart = (e) => {
        e.stopPropagation();
        setCart((prevCart) => prevCart.filter((item) => item !== id));
    };

    return (
        <div className="relative">
            <div className="absolute right-2 top-2 rounded-full text-white font-cabinet bg-black/50 w-fit" >
                {inCart ? (
                    <button onClick={removeFromCart} className=" px-4 py-2 text-red-100">Remove from cart</button>
                ) : (
                    <button onClick={addToCart} className=" px-4 py-2">Add to cart</button>
                )}
            </div>
            {productData.photos && productData.photos[0] ?
            (
                <img src={`https://api.timbu.cloud/images/${productData.photos[0].url}`} className="  border rounded-2xl md:h-[420px]" alt="" />
            ):
            null
            }
            <div aria-label="info" className="flex text-2xl justify-between my-4">
                <h1 className="font-trajan capitalize">{productData.name}</h1>
                <p className="font-cabinet text-[#787878]">₦{productData.current_price[0].NGN}</p>
            </div>
        </div>
    );
};

export default Product;
