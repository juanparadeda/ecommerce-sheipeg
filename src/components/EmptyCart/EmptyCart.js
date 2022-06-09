import ItemListContainer from "../ItemListContainer/ItemListContainer"
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const EmptyCart = () => {
    return (
        <>
            <h1>Ooooooops... Tu carrito está vacío. ¡Agregá productos!</h1>
            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button variant="contained" size="large" color="secondary">
                    Ir al catálogo
                </Button>
            </ Link>
        </>
    )
}

export default EmptyCart;