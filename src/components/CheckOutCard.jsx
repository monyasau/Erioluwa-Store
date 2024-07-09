import { useState } from 'react';
import { Link } from 'react-router-dom';

const CheckOutCard = () => {
    const [orderSuccess, setOrderSuccess] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    return (
        <div className="w-full md:px-0 pt-[80px] bg-black/30 md:bg-transparent min-h-screen md:pt-[180px]">
            <div className="max-w-screen-xl mx-auto md:rounded-3xl items-center flex flex-wrap py-20 px-2 md:px-0">
                <div className="md:w-[50%] rounded-[50px] shadow-sm bg-white p-10 md:p-20  mx-auto">
                <div className="text-5xl gap-4 mx-auto md:m-0 w-full md:w-fit my-8 font-bold font-trajan">
                    <Link to={"/"} className='' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22" fill="none" className=''>
                    <path d="M11.6797 1L2.61256 9.8215C2.04159 10.377 1.75602 10.6548 1.75602 11C1.75602 11.3452 2.04159 11.623 2.61256 12.1785L11.6797 21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                    </Link>
                </div>
                    {orderSuccess ? <div className="mx-auto text-center my-20 flex justify-center gap-4 items-center flex-col">
                        <svg xmlns="http://www.w3.org/2000/svg" width="112" height="112" viewBox="0 0 112 112" fill="none">
                            <path d="M56 1.75C26.0385 1.75 1.75 26.0385 1.75 56C1.75 85.9615 26.0385 110.25 56 110.25C85.9615 110.25 110.25 85.9615 110.25 56C110.25 26.0385 85.9615 1.75 56 1.75ZM56 12.25C80.1789 12.25 99.75 31.8174 99.75 56C99.75 80.1789 80.1826 99.75 56 99.75C31.8211 99.75 12.25 80.1826 12.25 56C12.25 31.8211 31.8174 12.25 56 12.25ZM86.6696 40.7459L81.7399 35.7763C80.719 34.7471 79.0569 34.7403 78.0277 35.7615L47.1069 66.4337L34.0274 53.2481C33.0065 52.2189 31.3445 52.2121 30.3153 53.233L25.3455 58.1628C24.3162 59.1837 24.3095 60.8457 25.3306 61.8752L45.1889 81.8943C46.2098 82.9235 47.8719 82.9303 48.9011 81.9092L86.655 44.4583C87.684 43.4372 87.6905 41.7751 86.6696 40.7459Z" fill="black" />
                        </svg>
                        <h1 className='text-4xl  font-bold font-cabinet'>Order Successful</h1>
                        <h1 className='mt-16 text-3xl font-bold font-cabinet'>Rate your experience</h1>
                        <div className="flex gap-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none">
                                <path d="M15.1098 1.52508L17.949 8.00086C18.1663 8.49656 18.6367 8.83617 19.1767 8.88469L26.0933 9.50484C26.8759 9.61875 27.1881 10.5785 26.6207 11.1312L21.4105 15.5081C20.9886 15.8625 20.7967 16.4194 20.9127 16.9573L22.4272 24.0469C22.5601 24.8252 21.7438 25.4201 21.0435 25.0509L15.0065 21.5156C14.5424 21.2435 13.9686 21.2435 13.5046 21.5156L7.46755 25.0488C6.76935 25.4159 5.95091 24.8231 6.0838 24.0448L7.59833 16.9552C7.71224 16.4173 7.52239 15.8604 7.10052 15.506L1.88825 11.1333C1.32294 10.5827 1.63513 9.62086 2.4156 9.50695L9.33224 8.8868C9.87224 8.83828 10.3426 8.49867 10.5599 8.00297L13.3991 1.52719C13.7514 0.818438 14.7597 0.818438 15.1098 1.52508Z" fill="#FDD835" />
                                <path d="M14.9032 8.38893L14.4222 3.61752C14.4032 3.35174 14.3484 2.89612 14.7745 2.89612C15.112 2.89612 15.2955 3.59854 15.2955 3.59854L16.7383 7.42916C17.2825 8.88674 17.0589 9.38666 16.5337 9.68198C15.9304 10.0195 15.0403 9.75581 14.9032 8.38893Z" fill="#FFFF8D" />
                                <path d="M20.8538 15.0841L24.9924 11.8547C25.197 11.6838 25.5661 11.4117 25.2708 11.1016C25.0367 10.8569 24.4039 11.2092 24.4039 11.2092L20.7821 12.6246C19.7021 12.9979 18.9849 13.5506 18.9216 14.2467C18.8393 15.1748 19.6725 15.8899 20.8538 15.0841Z" fill="#F4B400" />
                            </svg>   <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none">
                                <path d="M15.1098 1.52508L17.949 8.00086C18.1663 8.49656 18.6367 8.83617 19.1767 8.88469L26.0933 9.50484C26.8759 9.61875 27.1881 10.5785 26.6207 11.1312L21.4105 15.5081C20.9886 15.8625 20.7967 16.4194 20.9127 16.9573L22.4272 24.0469C22.5601 24.8252 21.7438 25.4201 21.0435 25.0509L15.0065 21.5156C14.5424 21.2435 13.9686 21.2435 13.5046 21.5156L7.46755 25.0488C6.76935 25.4159 5.95091 24.8231 6.0838 24.0448L7.59833 16.9552C7.71224 16.4173 7.52239 15.8604 7.10052 15.506L1.88825 11.1333C1.32294 10.5827 1.63513 9.62086 2.4156 9.50695L9.33224 8.8868C9.87224 8.83828 10.3426 8.49867 10.5599 8.00297L13.3991 1.52719C13.7514 0.818438 14.7597 0.818438 15.1098 1.52508Z" fill="#FDD835" />
                                <path d="M14.9032 8.38893L14.4222 3.61752C14.4032 3.35174 14.3484 2.89612 14.7745 2.89612C15.112 2.89612 15.2955 3.59854 15.2955 3.59854L16.7383 7.42916C17.2825 8.88674 17.0589 9.38666 16.5337 9.68198C15.9304 10.0195 15.0403 9.75581 14.9032 8.38893Z" fill="#FFFF8D" />
                                <path d="M20.8538 15.0841L24.9924 11.8547C25.197 11.6838 25.5661 11.4117 25.2708 11.1016C25.0367 10.8569 24.4039 11.2092 24.4039 11.2092L20.7821 12.6246C19.7021 12.9979 18.9849 13.5506 18.9216 14.2467C18.8393 15.1748 19.6725 15.8899 20.8538 15.0841Z" fill="#F4B400" />
                            </svg>   <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none">
                                <path d="M15.1098 1.52508L17.949 8.00086C18.1663 8.49656 18.6367 8.83617 19.1767 8.88469L26.0933 9.50484C26.8759 9.61875 27.1881 10.5785 26.6207 11.1312L21.4105 15.5081C20.9886 15.8625 20.7967 16.4194 20.9127 16.9573L22.4272 24.0469C22.5601 24.8252 21.7438 25.4201 21.0435 25.0509L15.0065 21.5156C14.5424 21.2435 13.9686 21.2435 13.5046 21.5156L7.46755 25.0488C6.76935 25.4159 5.95091 24.8231 6.0838 24.0448L7.59833 16.9552C7.71224 16.4173 7.52239 15.8604 7.10052 15.506L1.88825 11.1333C1.32294 10.5827 1.63513 9.62086 2.4156 9.50695L9.33224 8.8868C9.87224 8.83828 10.3426 8.49867 10.5599 8.00297L13.3991 1.52719C13.7514 0.818438 14.7597 0.818438 15.1098 1.52508Z" fill="#FDD835" />
                                <path d="M14.9032 8.38893L14.4222 3.61752C14.4032 3.35174 14.3484 2.89612 14.7745 2.89612C15.112 2.89612 15.2955 3.59854 15.2955 3.59854L16.7383 7.42916C17.2825 8.88674 17.0589 9.38666 16.5337 9.68198C15.9304 10.0195 15.0403 9.75581 14.9032 8.38893Z" fill="#FFFF8D" />
                                <path d="M20.8538 15.0841L24.9924 11.8547C25.197 11.6838 25.5661 11.4117 25.2708 11.1016C25.0367 10.8569 24.4039 11.2092 24.4039 11.2092L20.7821 12.6246C19.7021 12.9979 18.9849 13.5506 18.9216 14.2467C18.8393 15.1748 19.6725 15.8899 20.8538 15.0841Z" fill="#F4B400" />
                            </svg>   <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none">
                                <path d="M15.1098 1.52508L17.949 8.00086C18.1663 8.49656 18.6367 8.83617 19.1767 8.88469L26.0933 9.50484C26.8759 9.61875 27.1881 10.5785 26.6207 11.1312L21.4105 15.5081C20.9886 15.8625 20.7967 16.4194 20.9127 16.9573L22.4272 24.0469C22.5601 24.8252 21.7438 25.4201 21.0435 25.0509L15.0065 21.5156C14.5424 21.2435 13.9686 21.2435 13.5046 21.5156L7.46755 25.0488C6.76935 25.4159 5.95091 24.8231 6.0838 24.0448L7.59833 16.9552C7.71224 16.4173 7.52239 15.8604 7.10052 15.506L1.88825 11.1333C1.32294 10.5827 1.63513 9.62086 2.4156 9.50695L9.33224 8.8868C9.87224 8.83828 10.3426 8.49867 10.5599 8.00297L13.3991 1.52719C13.7514 0.818438 14.7597 0.818438 15.1098 1.52508Z" fill="#FDD835" />
                                <path d="M14.9032 8.38893L14.4222 3.61752C14.4032 3.35174 14.3484 2.89612 14.7745 2.89612C15.112 2.89612 15.2955 3.59854 15.2955 3.59854L16.7383 7.42916C17.2825 8.88674 17.0589 9.38666 16.5337 9.68198C15.9304 10.0195 15.0403 9.75581 14.9032 8.38893Z" fill="#FFFF8D" />
                                <path d="M20.8538 15.0841L24.9924 11.8547C25.197 11.6838 25.5661 11.4117 25.2708 11.1016C25.0367 10.8569 24.4039 11.2092 24.4039 11.2092L20.7821 12.6246C19.7021 12.9979 18.9849 13.5506 18.9216 14.2467C18.8393 15.1748 19.6725 15.8899 20.8538 15.0841Z" fill="#F4B400" />
                            </svg>   <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none">
                                <path d="M15.1098 1.52508L17.949 8.00086C18.1663 8.49656 18.6367 8.83617 19.1767 8.88469L26.0933 9.50484C26.8759 9.61875 27.1881 10.5785 26.6207 11.1312L21.4105 15.5081C20.9886 15.8625 20.7967 16.4194 20.9127 16.9573L22.4272 24.0469C22.5601 24.8252 21.7438 25.4201 21.0435 25.0509L15.0065 21.5156C14.5424 21.2435 13.9686 21.2435 13.5046 21.5156L7.46755 25.0488C6.76935 25.4159 5.95091 24.8231 6.0838 24.0448L7.59833 16.9552C7.71224 16.4173 7.52239 15.8604 7.10052 15.506L1.88825 11.1333C1.32294 10.5827 1.63513 9.62086 2.4156 9.50695L9.33224 8.8868C9.87224 8.83828 10.3426 8.49867 10.5599 8.00297L13.3991 1.52719C13.7514 0.818438 14.7597 0.818438 15.1098 1.52508Z" fill="#FDD835" />
                                <path d="M14.9032 8.38893L14.4222 3.61752C14.4032 3.35174 14.3484 2.89612 14.7745 2.89612C15.112 2.89612 15.2955 3.59854 15.2955 3.59854L16.7383 7.42916C17.2825 8.88674 17.0589 9.38666 16.5337 9.68198C15.9304 10.0195 15.0403 9.75581 14.9032 8.38893Z" fill="#FFFF8D" />
                                <path d="M20.8538 15.0841L24.9924 11.8547C25.197 11.6838 25.5661 11.4117 25.2708 11.1016C25.0367 10.8569 24.4039 11.2092 24.4039 11.2092L20.7821 12.6246C19.7021 12.9979 18.9849 13.5506 18.9216 14.2467C18.8393 15.1748 19.6725 15.8899 20.8538 15.0841Z" fill="#F4B400" />
                            </svg>
                        </div>
                       {submitted?
                       <button className='py-4 px-12 bg-green-400 text-white text-xl font-bold font-cabinet rounded-full'>Successfully Submitted</button>
                       : <button onClick={() => setSubmitted(true)} className='py-4 px-12 bg-black text-white text-xl font-bold font-cabinet rounded-full'>Submit</button>}
                    </div>
                        : <>
                            <h1 className="text-2xl my-4 font-cabinet text-center font-bold">Choose Payment Method</h1>
                            <div className="flex flex-col gap-y-6">

                                <div className="border p-4 rounded-2xl flex justify-between">
                                    <div className="flex items-center md:w-[50%] gap-x-4">

                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.75 10.5C1.75 7.4047 1.75 5.85705 2.6712 4.82379C2.81854 4.65853 2.98093 4.50568 3.15653 4.36701C4.25436 3.5 5.89874 3.5 9.1875 3.5H11.8125C15.1013 3.5 16.7457 3.5 17.8434 4.36701C18.019 4.50568 18.1815 4.65853 18.3288 4.82379C19.25 5.85705 19.25 7.4047 19.25 10.5C19.25 13.5953 19.25 15.1429 18.3288 16.1762C18.1815 16.3415 18.019 16.4943 17.8434 16.633C16.7457 17.5 15.1013 17.5 11.8125 17.5H9.1875C5.89874 17.5 4.25436 17.5 3.15653 16.633C2.98093 16.4943 2.81854 16.3415 2.6712 16.1762C1.75 15.1429 1.75 13.5953 1.75 10.5Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8.75 14H10.0625" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12.6875 14H15.75" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M1.75 7.875H19.25" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
                                        </svg>
                                        Credit or Debit Card
                                    </div>
                                    <input type="radio" name="" checked style={{ accentColor: 'black' }} id="" />
                                </div>
                                <div className="border p-4 rounded-2xl flex justify-between">
                                    <div className="flex items-center  md:w-[50%] gap-x-4">

                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.875 15.3125H3.0625M5.6875 10.5H1.75M7.875 5.6875H3.5M14.875 2.625L9.10315 10.7056C8.84765 11.0633 8.71992 11.2421 8.72545 11.3912C8.73026 11.521 8.79253 11.642 8.89534 11.7213C9.01346 11.8125 9.23318 11.8125 9.67278 11.8125H14L13.125 18.375L18.8969 10.2944C19.1524 9.93668 19.2801 9.75791 19.2746 9.60881C19.2698 9.47896 19.2075 9.35804 19.1047 9.27868C18.9865 9.1875 18.7668 9.1875 18.3272 9.1875H14L14.875 2.625Z" stroke="#B2B2B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Bank Transfer
                                    </div>
                                    <input type="radio" name="" disabled style={{ accentColor: 'black' }} id="" />
                                </div>
                                <div className="border p-4 rounded-2xl flex justify-between">
                                    <div className="flex items-center w-[50%] gap-x-4">

                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.5835 8.25004C4.5835 5.2252 4.5835 3.71277 5.5232 2.77308C6.46289 1.83337 7.97532 1.83337 11.0002 1.83337C14.025 1.83337 15.5374 1.83337 16.4772 2.77308C17.4168 3.71277 17.4168 5.2252 17.4168 8.25004V13.75C17.4168 16.7749 17.4168 18.2873 16.4772 19.227C15.5374 20.1667 14.025 20.1667 11.0002 20.1667C7.97532 20.1667 6.46289 20.1667 5.5232 19.227C4.5835 18.2873 4.5835 16.7749 4.5835 13.75V8.25004Z" stroke="#B2B2B2" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M10.0835 17.4167H11.9168" stroke="#B2B2B2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8.25 1.83337L8.33158 2.32289C8.50839 3.38372 8.59679 3.91414 8.96059 4.23691C9.3401 4.5736 9.87809 4.58337 11 4.58337C12.1219 4.58337 12.6599 4.5736 13.0394 4.23691C13.4032 3.91414 13.4916 3.38372 13.6684 2.32289L13.75 1.83337" stroke="#B2B2B2" stroke-width="1.5" stroke-linejoin="round" />
                                        </svg>

                                        USSD
                                    </div>
                                    <input type="radio" name="" disabled style={{ accentColor: 'black' }} id="" />
                                </div>
                            </div>
                            <div className="mt-8">
                                <h1 className="font-bold font-cabinet text-xl">Card Holder</h1>
                                <div className="border p-4 mb-4 rounded-2xl flex justify-between">
                                    <input type="text" placeholder="Enter Name" className="w-full bg-transparent" />
                                </div>
                                <h1 className="font-bold font-cabinet text-xl">Card Number</h1>
                                <div className="border p-4 mb-4 rounded-2xl flex justify-between">
                                    <input type="number" placeholder="1234 5678 1234 5678" className="w-full bg-transparent" />
                                </div>
                                <div className="flex gap-x-4">
                                    <div className="flex w-[50%] flex-wrap">

                                        <h1 className="font-bold font-cabinet text-xl">Exp. Date</h1>
                                        <div className="border p-4 w-full rounded-2xl flex justify-between">
                                            <input type="text" placeholder="02/27" className="w-full bg-transparent" />
                                        </div>
                                    </div>

                                    <div className="flex w-[50%] flex-wrap">
                                        <h1 className="font-bold font-cabinet text-xl">CVV</h1>
                                        <div className="border p-4 w-full  rounded-2xl flex justify-between">
                                            <input type="number" placeholder="001" className="w-full bg-transparent" />
                                        </div>

                                    </div>
                                </div>
                                <div className="md:w-[50%] my-4 mx-auto justify-between font-bold font-cabinet  flex">
                                    <input type="radio" name="" style={{ accentColor: 'black' }} id="" /> Save card for future payment
                                </div>
                                <hr className="my-4" />
                                <div className="flex gap-4 flex-col">

                                    <button onClick={() => setOrderSuccess(true)} className="bg-black text-white  font-bold text-xl font-cabinet py-4 px-10 rounded-full">Confirm Payment </button>
                                    <Link to="/" className="border-black border text-center  font-bold text-xl font-cabinet py-4 px-10 rounded-full">Cancel </Link>
                                </div>
                            </div></>}

                </div>

            </div>
        </div>
    );
}

export default CheckOutCard;