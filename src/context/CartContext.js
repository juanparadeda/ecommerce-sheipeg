import { createContext } from "react";
import { useState } from "react";

const CartContext = createContext();
const calculateProdsInCart = (cart) => {
    const amount = cart.reduce((acc, current) => {
        return acc + current.amountInCart;
    },0)
    return amount
}

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState( JSON.parse(localStorage.getItem('cart')) || []);
    const [prodsInCart, setProdsInCart] = useState(calculateProdsInCart(cart) || 0);
    const isProductInCart = (product) => {
        return cart.find(cartProduct => cartProduct.id === product.id)
    }
    const addItem = (product, qty, setOpen, setOpenFail) => {
        let productInCart = isProductInCart(product)
        if (productInCart == undefined && product.stock >= qty) {
            productInCart = { ...product, amountInCart: qty }
            setCart([...cart, productInCart])
            localStorage.setItem('cart', JSON.stringify([...cart, productInCart]))
            setProdsInCart(prodsInCart + qty)
            setOpen(true)
        } else if (product.stock > (productInCart.amountInCart + qty)) {
            productInCart.amountInCart += qty;
            localStorage.setItem('cart', JSON.stringify(cart))
            setProdsInCart(prodsInCart + qty)
            setOpen(true)
        } else {
            setOpenFail(true)
        }
        
    }



    const removeItem = (id) => {
        const newCart = cart.filter((product) => product.id !== id)
        setCart(newCart);
        const newProdsInCart = newCart.reduce((acc, current) => {
            return acc + current.amountInCart;
        },0)
        setProdsInCart(newProdsInCart);
        localStorage.setItem('cart', JSON.stringify(newCart))
    }
    const clear = () => {
        setCart([])
        setProdsInCart(0)
        localStorage.removeItem('cart');

    }
    const cartPrice = cart.reduce((acc, current) => {
        return acc + current.price * current.amountInCart
    }, 0);
    return (

        <CartContext.Provider value={{ cart, addItem, prodsInCart, removeItem, clear, cartPrice }}>
            {children}
        </CartContext.Provider>

    )
};

export { CartContextProvider, CartContext };