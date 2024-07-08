import mainImage from "../assets/mainBgImage.png";
const LandingPage = () => {
    return (
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
        </div>
    );
}

export default LandingPage;