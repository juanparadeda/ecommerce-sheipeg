// React and react-router-dom imports
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// MUI imports
import { Button, Box } from "@mui/material";
// Site components imports
import Modal from "../Modal/Modal";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { CartContext } from "../../context/CartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const CheckoutButton = () => {
    const { cartPrice, clear } = useContext(CartContext)
    const [open, setOpen] = useState(false);
    const [orderSubmitted, setOrderSubmitted] = useState('')
    const [spinnerState, setSpinnerState] = useState({ display: 'none' })
    const navigate = useNavigate();
    const handleClose = () => {
        if (orderSubmitted) {
            clear();
            navigate('/ordenes');
        }
        setOpen(false)
    }
    return (
        <>
            <Button onClick={() => setOpen(true)} variant="contained" size="small" color="secondary">Pagar</Button>
            <Modal handleClose={handleClose} open={open} >
                {!orderSubmitted ? (
                    <>
                        <h1>Confirmación de Compra</h1>
                        <h2>Total a Pagar: $ {cartPrice}</h2>
                        <Box>
                            <CheckoutForm setOrderSubmitted={setOrderSubmitted} setSpinnerState={setSpinnerState} />
                            <LoadingSpinner display={spinnerState} />
                        </Box>
                    </>
                )
                    :
                    (
                        <>
                            <h1>¡Felicitaciones!</h1>
                            <p>Tu orden <strong>{orderSubmitted}</strong> ya está en preparación</p>
                            <p>Total pagado: $ {cartPrice}</p>
                        </>
                    )
                }
            </Modal>
        </>
    )
}

export default CheckoutButton