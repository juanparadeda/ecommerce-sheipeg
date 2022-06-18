import { useContext } from "react";
import { useState } from "react";
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
import { Container, Button, TextField, Box } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from "../Modal/Modal";
import { addDoc, collection } from 'firebase/firestore';
import db from "../../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";

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
    const { cart, removeItem, clear, prodsInCart } = useContext(CartContext)
    const [open, setOpen] = useState(false);
    const [orderSubmitted, setOrderSubmitted] = useState('')

    const cartPrice = cart.reduce((acc, current) => {
        return acc + current.price * current.amountInCart
    }, 0);
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
    const [formValue, setFormValue] = useState({ name: '', phone: '', email: '' })

    const navigate = useNavigate();
    const handleClose = () => {
        if (orderSubmitted) {
            
            clear();
            navigate('/');
        } 
        setOpen(false)
    }

    const formInput = (e) => {
        e.preventDefault();
        setFormValue({ ...formValue, [e.target.name]: e.target.value })

    }
    const endPurchase = (e) => {
        e.preventDefault();
        const time = new Date().toLocaleString({ dateStyle: 'full', timeStyle: 'long', hour12: 'true' })
        setOrder({ ...order, buyer: formValue, time: time })
        saveOrderInFirestore({ ...order, buyer: formValue, time: time })

        
    }
    const saveOrderInFirestore = async (orderToSave) => {
        const orderFirestore = collection(db, 'orders')
        const orderDocument = await addDoc(orderFirestore, orderToSave)
        setOrderSubmitted(orderDocument.id);
    }
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
                            {cart.map((product) => {
                                const { id, name, amountInCart, price } = product;
                                return (

                                    <StyledTableRow key={id}>
                                        <StyledTableCell component="th" scope="row">
                                            {name}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">x{amountInCart}</StyledTableCell>
                                        <StyledTableCell align="right">$ {price}</StyledTableCell>
                                        <StyledTableCell align="right">$ {price * amountInCart}</StyledTableCell>
                                        <StyledTableCell>
                                            <Button variant="outlined" size="small" color="secondary" onClick={() => removeItem(id)}>
                                                <DeleteIcon />
                                            </Button>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                )
                            })}
                            <StyledTableRow>
                                <StyledTableCell />
                                <StyledTableCell />
                                <StyledTableCell align="right">TOTAL DE TU COMPRA:</StyledTableCell>
                                <StyledTableCell align="right">$ {cartPrice} </StyledTableCell>
                                <StyledTableCell><Button onClick={() => setOpen(true)} variant="contained" size="small" color="secondary">Pagar</Button></StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button onClick={() => clear()}><small>Vaciar carrito</small></Button>
            </Container>
            
            <Modal handleClose={handleClose} open={open} >
            { !orderSubmitted ? (
                <>
                <h1>Confirmación de Compra</h1>
                <h2>Total a Pagar: $ {cartPrice}</h2>
                <Box display='flex' flexDirection='column' rowGap='15px'>

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
                </Box> </>) : (<>
            
            
                <h1>¡Felicitaciones!</h1>
                <p>Tu orden <strong>{orderSubmitted}</strong> ya está en preparación</p>
                <p>Total pagado: $ {cartPrice}</p></>)
            
            
            }
            </Modal> 
        </>
    );




}

export default Cart;