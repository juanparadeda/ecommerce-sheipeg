import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const {cart} = useContext(CartContext)

    return(
        cart.map((product) => {
            return(
            <h3 key={product.id}>{product.name}</h3>
            )
        })
    )
}

export default Cart;