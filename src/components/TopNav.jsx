import { useState } from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
    const [dropDownActive, setDropDownActive] = useState(false);

    return (
        <>
            <div className="w-full font-cabinet z-20 fixed md:absolute top-10">
                <div className="max-w-screen-xl text-white backdrop-blur-3xl md:backdrop-blur-none md:bg-transparent mx-4 bg-white/10 rounded-lg md:text-primary py-4 md:py-16 px-2 md:px-0 md:mx-auto flex justify-between items-center">
                    <h1 className="text-[30px] font-bold">
                        Oxford Brogues
                    </h1>
                    <div className="md:flex gap-16 items-center font-bold text-[20px] hidden">
                        <Link to="/">Home</Link>
                        <Link to="/cart">Cart</Link>
                        <Link to="/support">Support</Link>
                    </div>
                    <div className="md:hidden" aria-label="dropdown button" onClick={() => setDropDownActive(!dropDownActive)}>
                        {dropDownActive ? 
                            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" fill="none">
                                <path d="M15.0413 3.95831L3.95801 15.0416" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3.95801 3.95831L15.0413 15.0416" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            :
                            <svg className="w-12 h-12" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 20H29M11 14H29M11 26H29" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        }
                    </div>
                </div>
            </div>
            <div className={dropDownActive ? "fixed backdrop-blur-sm bg-black/30 z-10 w-full h-full top-0 left-0 md:hidden" : 'hidden'}>
                <div className="flex gap-16 flex-col items-center font-bold text-3xl text-white font-cabinet py-[35vh]">
                    <Link to="/" onClick={() => setDropDownActive(false)}>Home</Link>
                    <Link to="/cart" onClick={() => setDropDownActive(false)}>Cart</Link>
                    <Link to="/support" onClick={() => setDropDownActive(false)}>Support</Link>
                </div>
            </div>
        </>
    );
}

export default TopNav;
