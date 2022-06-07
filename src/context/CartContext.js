import { createContext } from "react";
import { useState } from "react";

const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [prodsInCart, setProdsInCart] = useState(0);
    const isProductInCart = (product) => {
        return cart.find(cartProduct => cartProduct.id === product.id)
    }
    const addToCart = (product, qty) => {
        let productInCart = isProductInCart(product) 
        if (productInCart == undefined && product.stock >= qty) {
            productInCart = {...product, amountInCart: qty}
            setCart([...cart, productInCart])
            setProdsInCart(prodsInCart + qty)
        } else if (product.stock > (productInCart.amountInCart + qty)){
            productInCart.amountInCart += qty;
            setProdsInCart(prodsInCart + qty)
        }
    }
    
    return(
        
        <CartContext.Provider value={{cart, addToCart, prodsInCart }}>
            {children}
        </CartContext.Provider>
        
    )
};

export { CartContextProvider, CartContext };