import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";

const products = [
    { id: 0, name: "OXFORD BROWN", price: "192,000", image: product1 },
    { id: 1, name: "OXFORD BLACK", price: "320,000", image: product2 },
    { id: 2, name: "ITALIAN BLACK", price: "106,000", image: product3 },
    { id: 3, name: "OXFORD BROWN", price: "192,000", image: product1 },
    { id: 4, name: "OXFORD BLACK", price: "320,000", image: product2 },
    { id: 5, name: "ITALIAN BLACK", price: "106,000", image: product3 }
];

const Cart = ({ cart, setCart }) => {

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item !== id));
    };

    return (
        <div className="w-full md:px-0 min-h-screen md:pt-[180px]">
            <div className="max-w-screen-xl mx-auto md:rounded-3xl items-center flex flex-wrap py-20 px-2 md:px-0">
                <h1 className="text-5xl font-bold font-trajan w-full">Cart</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {cart.length === 0 ? (
                        <p className="text-red-900 text-2xl">Your cart is currently empty. Try adding some items.</p>
                    ) : (
                        cart.map((itemId) => {
                            const product = products.find((product) => product.id === itemId);
                            return (
                                <div key={product.id} className="p-4 rounded-lg">
                                    <img src={product.image} className="rounded-2xl md:h-[420px]" alt={product.name} />
                                    <div aria-label="info" className="flex text-2xl justify-between my-4">
                                        <h1 className="font-trajan capitalize">{product.name}</h1>
                                        <p className="font-cabinet text-[#787878]">₦{product.price}</p>
                                    </div>
                                    <div
                                        onClick={() => removeFromCart(product.id)}
                                        className="flex text-[#787878] px-4 py-2 rounded"
                                    >
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.1875 3.4375L11.8002 9.70319C11.7012 11.304 11.6517 12.1044 11.2505 12.6799C11.0521 12.9644 10.7967 13.2046 10.5004 13.385C9.90131 13.75 9.09937 13.75 7.49544 13.75C5.88945 13.75 5.08644 13.75 4.48691 13.3843C4.1905 13.2036 3.935 12.963 3.73668 12.678C3.33555 12.1016 3.28716 11.3001 3.19038 9.697L2.8125 3.4375" stroke="#2A353D" stroke-linecap="round" />
                                            <path d="M13.125 3.4375H1.875" stroke="#2A353D" strokeLinecap="round" />
                                            <path d="M10.0344 3.4375L9.60782 2.55733C9.32438 1.97266 9.18263 1.68033 8.9382 1.49801C8.88401 1.45756 8.82657 1.42159 8.76651 1.39044C8.49582 1.25 8.17095 1.25 7.5212 1.25C6.85513 1.25 6.52213 1.25 6.24694 1.39632C6.18595 1.42876 6.12775 1.46619 6.07295 1.50823C5.82566 1.69794 5.68753 2.00097 5.41127 2.60704L5.03271 3.4375" stroke="#2A353D" stroke-linecap="round" />
                                            <path d="M5.9375 10.3125V6.5625" stroke="#2A353D" strokeLinecap="round" />
                                            <path d="M9.0625 10.3125V6.5625" stroke="#2A353D" strokeLinecap="round" />
                                        </svg>

                                        Remove
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
