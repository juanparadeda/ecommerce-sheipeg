// React imports
import { useState, useContext } from "react"
// MUI imports
import { TextField, Button } from "@mui/material"
// Site components imports
import { CartContext } from "../../context/CartContext"
// Firebase imports
import { saveOrderInFirestore } from "../../utils/fireBaseController"


const CheckoutForm = ({setOrderSubmitted, setSpinnerState}) => {
    const { cart, prodsInCart, cartPrice } = useContext(CartContext)
    const [formValue, setFormValue] = useState({ name: '', phone: '', email: '' })
    const [order, setOrder] = useState({
        buyer: {},
        items: cart.map(product => {
            return {
                id: product.id,
                name: product.name,
                price: product.price,
                amountInCart: product.amountInCart
            }
        }),
        total: cartPrice,
        time: '',
        prodsInCart: prodsInCart 
    })
    const formInput = (e) => {
        e.preventDefault();
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }
    const endPurchase = (e) => {
        e.preventDefault();
        setSpinnerState({ display: 'flex' })
        const time = new Date().toLocaleString({ dateStyle: 'full', timeStyle: 'long', hour12: 'true' })
        setOrder({ ...order, buyer: formValue, time: time })
        saveOrderInFirestore({ ...order, buyer: formValue, time: time }, setOrderSubmitted)
    }
    return (
        <>
            <TextField
                label="Nombre y apellido"
                name='name'
                id="outlined-size-small"
                size="small"
                onChange={formInput}
            />
            <TextField
                label="e-mail"
                name='email'
                id="outlined-size-small"
                size="small"
                onChange={formInput}
            />
            <TextField
                label="Teléfono"
                name='phone'
                id="outlined-size-small"
                size="small"
                onChange={formInput}
            />
            <Button type='submit' onClick={endPurchase} variant='contained' size='large' color='secondary'>FINALIZAR COMPRA</Button>
        </>
    )
}

export default CheckoutForm