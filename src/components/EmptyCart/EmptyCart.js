// React router imports
import { Link } from "react-router-dom";
// Site components imports
import { Button } from "@mui/material";

const EmptyCart = () => {
    return (
        <>
            <h1>Ups... Tu carrito está vacío. ¡Agregá productos!</h1>
            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button variant="contained" size="large" color="secondary">
                    Ir al catálogo
                </Button>
            </ Link>
        </>
    )
}

export default EmptyCart;