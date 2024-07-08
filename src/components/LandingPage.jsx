import product1 from "../assets/product1.jpg"
import product2 from "../assets/product2.jpg"
import product3 from "../assets/product3.jpg"
import mainImage from "../assets/mainBgImage.png";
import Product from "./Product";
const LandingPage = () => {
    return (
        <>
            <div className="w-full ">
                <div className="max-w-screen-xl mx-auto h-screen rounded-3xl items-center flex p-20" style={{ background: "url(" + mainImage + ")", backgroundSize: "cover" }}>
                    <div className="h-fit w-[80%]">
                        <h1 className="text-6xl font-trajan text-white drop-shadow-xl">
                            Discover Timeless & Elegant Luxury Men's Brogues
                        </h1>
                        <div className="">

                            <p className="text-white w-[45%] py-12 text-xl">
                                Our exclusive collection of executive men’s brogues, crafted to elevate your style effortlessly.
                            </p>
                            <div className="flex gap-4">
                                <button className="bg-white py-4 px-8 rounded-full">Browse products</button>
                                <button className="border-white border py-4 px-8 rounded-full">About us</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-xl mx-auto  my-16">
                    <h1 className="text-[80px] font-trajan">
                        featured products
                    </h1>
                    <div className="grid grid-cols-3 gap-8">
                        <Product name={"OXFORD BROWN"} price={192000} image={product1} />
                        <Product name={"OXFORD BROWN"} price={192000} image={product2} />
                        <Product name={"OXFORD BROWN"} price={192000} image={product3} />
                        <Product name={"OXFORD BROWN"} price={192000} image={product1} />
                        <Product name={"OXFORD BROWN"} price={192000} image={product2} />
                        <Product name={"OXFORD BROWN"} price={192000} image={product3} />
                        <Product name={"OXFORD BROWN"} price={192000} image={product1} />
                        <Product name={"OXFORD BROWN"} price={192000} image={product2} />
                        <Product name={"OXFORD BROWN"} price={192000} image={product3} />
                        <Product name={"OXFORD BROWN"} price={192000} image={product1} />
                        <Product name={"OXFORD BROWN"} price={192000} image={product2} />
                        <Product name={"OXFORD BROWN"} price={192000} image={product3} />
                        <Product name={"OXFORD BROWN"} price={192000} image={product1} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPage;