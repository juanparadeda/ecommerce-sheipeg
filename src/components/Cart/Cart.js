import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
        fontWeight: 700
    },
}));



const Cart = () => {
    const { cart, removeItem, clear } = useContext(CartContext)
    const cartPrice = cart.reduce((acc, current) => {
        return acc + current.price * current.amountInCart
    }, 0);
    return (
        <>
            <h1>Tu carrito de compras</h1>
            <Container>
                <TableContainer sx={{ maxWidth: 1027 }} component={Paper}>
                    <Table sx={{ minWidth: 200 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Producto</StyledTableCell>
                                <StyledTableCell align="right">Cantidad</StyledTableCell>
                                <StyledTableCell align="right">Precio x1</StyledTableCell>
                                <StyledTableCell align="right">Precio total</StyledTableCell>
                                <StyledTableCell />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cart.map((product) => (

                                <StyledTableRow key={product.id}>
                                    <StyledTableCell component="th" scope="row">
                                        {product.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">x{product.amountInCart}</StyledTableCell>
                                    <StyledTableCell align="right">$ {product.price}</StyledTableCell>
                                    <StyledTableCell align="right">$ {product.price * product.amountInCart}</StyledTableCell>
                                    <StyledTableCell>
                                        <Button variant="outlined" size="small" color="secondary" onClick={() => removeItem( product.id )}>
                                            <DeleteIcon />
                                        </Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                            <StyledTableRow>
                                <StyledTableCell />
                                <StyledTableCell />
                                <StyledTableCell align="right">TOTAL DE TU COMPRA:</StyledTableCell>
                                <StyledTableCell align="right">$ {cartPrice} </StyledTableCell>
                                <StyledTableCell><Link to='/checkout' style={{ textDecoration: 'none', color: 'inherit' }}><Button variant="contained" size="small" color="secondary">Pagar</Button></Link></StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button onClick={() => clear()}><small>Vaciar carrito</small></Button>
            </Container>
        </>
    );




}

export default Cart;