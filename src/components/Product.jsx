import { useState, useEffect } from "react";

const Product = ({ name, price, id, image, setCart, cart }) => {
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
            <div className="absolute right-2 top-2 px-4 py-2 rounded-full text-white font-cabinet bg-black/50 w-fit">
                {inCart ? (
                    <button onClick={removeFromCart} className="text-red-100">Remove from cart</button>
                ) : (
                    <button onClick={addToCart}>Add to cart</button>
                )}
            </div>
            <img src={image} className="rounded-2xl md:h-[420px]" alt="" />
            <div aria-label="info" className="flex text-2xl justify-between my-4">
                <h1 className="font-trajan capitalize">{name}</h1>
                <p className="font-cabinet text-[#787878]">₦{price}</p>
            </div>
        </div>
    );
};

export default Product;
