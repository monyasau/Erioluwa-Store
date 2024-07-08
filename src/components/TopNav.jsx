import { useState } from 'react'

const TopNav = () => {
const [dropDownActive, setDropDownActive] = useState(false)

    return (
        <div className="w-full ">

            <div className="max-w-screen-xl text-primary py-16 px-6 md:px-0 mx-auto flex justify-between items-center">
                <h1 className="text-[30px] font-bold">
                Oxford Brogues
                </h1>
                <div className="md:flex gap-16 items-center font-bold text-[20px] hidden">
                    <a href="#">Home</a>
                    <a href="#">Cart</a>
                    <a href="#">Support</a>
                </div>
                <div className="md:hidden" aria-label='dropdown button'>
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 5H14" stroke="#005DA1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 12H20" stroke="#005DA1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 19H20" stroke="#005DA1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className='absolute  backdrop-blur-sm md:hidden w-full h-full top-0 left-0'>
                    dnnddn
                </div>
            </div>
        </div>
    );
}

export default TopNav;