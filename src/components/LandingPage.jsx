import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import mainImage from "../assets/mainBgImage.png";
import Product from "./Product";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const LandingPage = ({ cart, setCart, storeData }) => {
    // let products = [
    //     { id: 0, name: "OXFORD BROWN", price: "192,000", image: product1 },
    //     { id: 1, name: "OXFORD BLACK", price: "320,000", image: product2 },
    //     { id: 2, name: "ITALIAN BLACK", price: "106,000", image: product3 },
    //     { id: 3, name: "OXFORD BROWN", price: "192,000", image: product1 },
    //     { id: 4, name: "OXFORD BLACK", price: "320,000", image: product2 },
    //     { id: 5, name: "ITALIAN BLACK", price: "106,000", image: product3 }
    // ];
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
        console.log("Cart updated:", cart);
    }, [cart]);

    return (
        <>
            <div className="w-full md:px-0 md:pt-[180px]">
                <div className="max-w-screen-xl mx-auto min-h-screen md:rounded-3xl items-center flex py-40 px-2 md:p-20" style={{ background: `url(${mainImage})`, backgroundSize: "cover" }}>
                    <div className="h-fit md:w-[80%]">
                        <h1 className="text-6xl font-trajan py-6 md:py-0 text-white ">
                            Discover Timeless & Elegant Luxury Men's Brogues
                        </h1>
                        <div className="font-bold font-cabinet">
                            <p className="text-white w-full md:w-[45%] py-12 text-xl">
                                Our exclusive collection of executive men’s brogues, crafted to elevate your style effortlessly.
                            </p>
                            <div className="w-full md:w-fit gap-4 md:flex">
                                <a href="#products"><button className="bg-white py-4 w-full md:w-fit px-8 rounded-full">Browse products</button></a>
                                <button className="border-white border w-full my-4 md:my-0 md:w-fit text-white py-4 px-8 rounded-full">About us</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-xl mx-auto mt-16 px-2">
                    <h1 className="md:text-[80px] text-[40px] font-trajan" id="products">
                        featured products
                    </h1>
                    {cart.length>0 &&<Link to="/cart" className="text-3xl block py-2 px-4 rounded-xl mb-4 hover:bg-black/20 hover:border-[#eee] cursor-pointer font-cabinet text-center md:w-fit border border-red-600">View Cart</Link>}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {storeData.items.map((product) => (
                            <Product key={product.id} cart={cart} setCart={setCart} productData={product} />
                        ))}
                    </div>
                    {cart.length>0 &&<Link to="/cart" className="text-3xl block py-2 px-4 rounded-xl mb-4 hover:bg-black/20 hover:border-[#eee] cursor-pointer font-cabinet text-center md:w-fit border border-red-600">View Cart</Link>}
                </div>
            </div>
        </>
    );
}

export default LandingPage;
