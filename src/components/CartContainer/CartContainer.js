// React imports
import { useContext } from "react";
// Site components imports
import { CartContext } from "../../context/CartContext";
import Cart from "../Cart/Cart";
import EmptyCart from "../EmptyCart/EmptyCart";

const CartContainer = () => {
    const {cart} = useContext(CartContext);
    const isCartEmpty = (cart.length === 0)
    return(
        <>
        {isCartEmpty? <EmptyCart /> : <Cart />}
        </>
    )
}

export default CartContainer;