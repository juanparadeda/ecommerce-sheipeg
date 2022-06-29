// React imports
import { useState, useContext } from "react"
// react-hook-form validation import
import { useForm } from "react-hook-form"
// MUI imports
import { TextField, Button, Box } from "@mui/material"
// Site components imports
import { CartContext } from "../../context/CartContext"
import './CheckoutForm.scss'
// Firebase imports
import { saveOrderInFirestore } from "../../utils/fireBaseController"


const CheckoutForm = ({ setOrderSubmitted, setSpinnerState }) => {
    const { register, handleSubmit, formState: { errors } } = useForm()
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
    const endPurchase = () => {
        //e.preventDefault();
        setSpinnerState({ display: 'flex' })
        const time = new Date().toLocaleString({ dateStyle: 'full', timeStyle: 'long', hour12: 'true' })
        setOrder({ ...order, buyer: formValue, time: time })
        saveOrderInFirestore({ ...order, buyer: formValue, time: time }, setOrderSubmitted)
    }

    return (
        <form onSubmit={handleSubmit(endPurchase)}>
            <Box className="formBox">
                <TextField className="formField"
                    label="Nombre y apellido"
                    name='name'
                    id="outlined-size-small"
                    size="small"
                    type='text'
                    {...register('name', {
                        required: true,
                        minLength: 3
                    })}
                    onChange={formInput}
                />
                {errors.name?.type == 'required' && <small>El campo es requerido</small>}
                {errors.name?.type == 'minLength' && <small>Mínimo 3 caracteres</small>}
            </Box>
            <Box className="formBox">
                <TextField className="formField"
                    label="e-mail"
                    name='email'
                    id="outlined-size-small"
                    size="small"
                    type='text'
                    {...register('email', {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                    })}
                    onChange={formInput}
                />
                {errors.email?.type == 'required' && <small>El campo es requerido</small>}
                {errors.email?.type == 'pattern' && <small>Formato requerido: usuario@servidor.com</small>}
            </Box>
            <Box className="formBox">
                <TextField className="formField"
                    label="Teléfono"
                    name='phone'
                    id="outlined-size-small"
                    size="small"
                    type='text'
                    {...register('phone', {
                        required: true,
                        pattern: /^[0-9]*$/,
                        minLength: 7
                    })}
                    onChange={formInput}
                />
                {errors.phone?.type == 'required' && <small>El campo es requerido</small>}
                {errors.phone?.type == 'minLength' && <small>Ingresar número completo, sin guiones ni paréntesis</small>}
                {errors.phone?.type == 'pattern' && <small>Ingresar sólo números</small>}
            </Box>
            <Button type='submit' variant='contained' size='large' color='secondary'>FINALIZAR COMPRA</Button>
        </ form>
    )
}

export default CheckoutForm