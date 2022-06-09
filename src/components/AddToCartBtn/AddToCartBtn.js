import { Button } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Modal from "../Modal/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";



const AddToCartBtn = ({ product, count = 1, }) => { // El count = 1, está porque al llamar a este componente desde producto destacado, no se aclara la cantidad, entonces quiero que tome por defecto la cantidad 1.
    const { addItem } = useContext(CartContext);
    const { name, price } = product;
    const [open, setOpen] = useState(false);
    const [openFail, setOpenFail] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }
    const handleCloseFail = () => {
        setOpenFail(false)
    }
    return (
        <>
            <Button onClick={() => {
                addItem(product, count, setOpen, setOpenFail);
            }
            }
                size="small" variant="contained">
                <AddShoppingCartIcon />
            </Button>
            <Modal handleClose={handleClose} open={open}>
                <h2>¡Felicitaciones!</h2>
                <p>Agregaste {name} <strong>x{count}</strong> a tu carrito</p>
                <p>Precio unitario $ {price}</p>
                <p>Precio total <strong>x{count}</strong> $ {price * count}</p>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/cart'>
                    <Button color="secondary" variant="contained">
                        Confirmar y Pagar
                    </Button>
                </Link>
                <Button variant="outlined" onClick={handleClose}>Seguir comprando</Button>
            </Modal>
            <Modal handleClose={handleCloseFail} open={openFail}>
                <h2>¡Que pena!</h2>
                <p>No tenemos más {name} en stock</p>
                <Button variant="outlined" onClick={handleCloseFail}>Seguir comprando</Button>
            </Modal>
        </>
    )
}

export default AddToCartBtn;