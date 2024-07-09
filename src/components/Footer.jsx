const Footer = () => {
    return (
        <div className="w-full px-2 md:px-0 bg-[#121212] py-16">

            <div className="max-w-screen-xl mx-auto  md:px-2 lg:px-0 grid md:grid-cols-2 capitalize justify-center items-center">
                <div>
                    <h1 className="text-4xl font-trajan text-white">
                        Stay Updated on Latest Product Releases
                    </h1>
                    <div className="md:flex font-trajan gap-4 py-16 text-white/80">
                        <input type="email" className="capitalize  w-full bg-[#292929] text-white px-8 py-4 md:py-6 mb-4 rounded-full md:w-[70%]" placeholder="ENTER YOUR EMAIL" />
                        <button className=" bg-[#3D3D3D] w-full md:w-fit py-4 px-10 rounded-full">SUBSCRIBE</button>
                    </div>
                </div>
                <div className="gap-x-4 md:gap-0 flex-row flex justify-between mx-auto md:m-0 md:pl-[50%] font-trajan h-full">
                <div className=" text-white/90">
                        <h1 className="pb-8 text-xl">PAGES</h1>
                        <div className="flex flex-col text-white/80 ">
                        <a href="#">About Us</a>
                        <a href="#">Catalogue</a>
                        <a href="#">Testimonials</a>
                        <a href="#">Articles & Blogs</a>
                        </div>
                    </div>
                    <div className=" text-white/90">
                        <h1 className="pb-8 text-xl">Social Media</h1>
                        <div className="flex flex-col text-white/80">
                        <a href="#">Linkedin</a>
                        <a href="#">Twitter</a>
                        <a href="#">Instagram</a>
                        <a href="#">Facebook</a>
                        <a href="#">Pinterest</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;