const Product = ({ name, price, image,  addToCart }) => {

    const [inCart, setInCart] = useState(cart.includes(id))
    const addToCart = (id) => {
        setCart((cart) => [...cart, id])
        setInCart(true)
    }
    const removeFromCart = (id) => {
        // setCart((cart)=>[...cart,id])
        setCart((cart) => cart.filter((item) => item !== id));
        setInCart(false)
    }
    return (
        <div onClick={() => addToCart(id)}>
            <img src={image} className="rounded-2xl md:h-[420px]" alt="" />
            <div aria-label="info" className="flex text-2xl justify-between  my-4">

                <h1 className="font-trajan capitalize">{name}</h1>
                <p className="font-cabinet text-[#787878]">₦{price}</p>
            </div>
        </div>
    );
}

export default Product;