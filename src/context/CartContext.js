import { createContext } from "react";
import { useState } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [prodsInCart, setProdsInCart] = useState(0);
    const isProductInCart = (product) => {
        return cart.find(cartProduct => cartProduct.id === product.id)
    }
    const addItem = (product, qty) => {
        let productInCart = isProductInCart(product)
        if (productInCart == undefined && product.stock >= qty) {
            productInCart = { ...product, amountInCart: qty }
            setCart([...cart, productInCart])
            setProdsInCart(prodsInCart + qty)
        } else if (product.stock > (productInCart.amountInCart + qty)) {
            productInCart.amountInCart += qty;
            setProdsInCart(prodsInCart + qty)
        }
    }
    const removeItem = (id) => {
        const newCart = cart.filter((product) => product.id !== id)
        setCart(newCart);
        const newProdsInCart = newCart.reduce((acc, current) => {
            return acc + current.amountInCart;
        },0)
        setProdsInCart(newProdsInCart);
    }
    const clear = () => {
        setCart([])
        setProdsInCart(0);
    }
    return (

        <CartContext.Provider value={{ cart, addItem, prodsInCart, removeItem, clear }}>
            {children}
        </CartContext.Provider>

    )
};

export { CartContextProvider, CartContext };