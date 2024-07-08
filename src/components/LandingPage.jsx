import product1 from "../assets/product1.jpg"
import product2 from "../assets/product2.jpg"
import product3 from "../assets/product3.jpg"
import mainImage from "../assets/mainBgImage.png";
import Product from "./Product";
import { useEffect, useState } from "react";
const LandingPage = () => {
    const [ storeData, setStoreData]=useState({item:[]});
    const getStoreData = async() => {
       try{ let storeDataJson = await fetch('https://api.timbu.cloud/products?organization_id=5bb659916aee437b8412792912d9afa3&Appid=USHSWJX32OABUZO&Apikey=0a5daa9b59734f82acba94d3612db9d720240708223219662140&reverse_sort=false&page=1&size=6');
        let data = await storeDataJson;
        setStoreData(data)}
        catch (error) {
            console.log("An error has occured",error)
        }
    }
    useEffect(() => {
        getStoreData()
    }, []);
    return (
        <>

            <div className="w-full md:px-0  md:pt-[180px] " >
                <div className="max-w-screen-xl mx-auto min-h-screen md:rounded-3xl items-center flex py-40 px-2 md:p-20" style={{ background: "url(" + mainImage + ")", backgroundSize: "cover" }}>
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
                <div className="max-w-screen-xl mx-auto  mt-16  px-2">
                    <h1 className="md:text-[80px] text-[40px] font-trajan" id="products">
                        featured products
                    </h1>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {storeData.item.map((product) => (
                            <Product key={product.id} name={product.name} price={product.price} image={product.image} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPage;