import { Button } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Modal from "../Modal/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";



const AddToCartBtn = ({ name, price, count = 1, setShowButton = () => { } }) => { // El count = 1, está porque al llamar a este componente desde producto destacado, no se aclara la cantidad, entonces quiero que tome por defecto la cantidad 1.
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <>
            <Button onClick={() => {
                setOpen(true)
                setShowButton(true)
            }
            }
                size="small" variant="contained">
                <AddShoppingCartIcon />
            </Button>
            {<Modal handleClose={handleClose} open={open}>
                <h2>¡Felicitaciones!</h2>
                <p>Agregaste {name} <strong>x{count}</strong> a tu carrito</p>
                <p>Precio unitario $ {price}</p>
                <p>Precio total <strong>x{count}</strong> $ {price * count}</p>
                <Link to='/cart'>
                    <Button color="secondary" variant="contained">
                        Confirmar y Pagar
                    </Button>
                </Link>
                <Button variant="outlined" onClick={handleClose}>Seguir comprando</Button>
            </Modal>}
        </>
    )
}

export default AddToCartBtn;