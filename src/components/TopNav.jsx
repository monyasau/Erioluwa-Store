import { useState } from 'react'

const TopNav = () => {
    const [dropDownActive, setDropDownActive] = useState(false)

    return (
        <div className="w-full font-cabinet absolute top-[10px] md:top-0 ">

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
                    <svg width="40" className="w-8 h-8" onClick={() => setDropDownActive(true)} height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 20H29M11 14H29M11 26H29" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </div>
                <div className='absolute backdrop-blur-sm hidden w-full h-full top-0 left-0'>
                </div>
            </div>
        </div>
    );
}

export default TopNav;