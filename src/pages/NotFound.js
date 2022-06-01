import { Link } from "react-router-dom";
import { Button, Container } from "@mui/material";

const NotFound = () => {
    return (
        <>
            <h1>ERROR 404 - Página no encontrada</h1>
            <h2>Ooooops... No encontramos la página que buscabas</h2>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">
                <Button color="secondary" variant="contained" sx={{marginBottom: '20px'}}>
                    Volver al Inicio
                </Button>
            </Link>
            <Container maxWidth='sm' >
                <img src="/brokencamera.jpg" />
            </Container>

        </>
    )
}

export default NotFound;