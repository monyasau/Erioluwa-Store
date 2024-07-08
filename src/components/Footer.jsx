const Footer = () => {
    return (
        <div className="w-full bg-[#121212] py-16">

            <div className="max-w-screen-xl mx-auto grid grid-cols-2 justify-center items-center">
                <div>
                    <h1 className="text-4xl font-trajan text-white">
                        Stay Updated on Latest Product Releases
                    </h1>
                    <div>
                        <input type="email" className="capitalize" placeholder="Enter your email"/>
                        <button className="bg-white py-4 px-8 rounded-full">Subscribe</button>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default Footer;