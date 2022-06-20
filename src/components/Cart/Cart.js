// React and react-router-dom imports
import * as React from 'react';
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// MUI iports
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { Container, Button, TextField, Box } from "@mui/material";
// Site components imports
import { CartContext } from "../../context/CartContext";
import Modal from "../Modal/Modal";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import TablesHead from '../TablesHead/TablesHead';
import CartTableBody from '../CartTableBody/CartTableBody';
import CheckoutButton from '../CheckoutButton/CheckoutButton';
// Firebase imports
import { addDoc, collection } from 'firebase/firestore';
import db from "../../utils/firebaseConfig";




const Cart = () => {
    const { clear } = useContext(CartContext)
    const columns = ['Producto', 'Cantidad', 'Precio x1', 'Precio Total', '']
    return (
        <>
            <h1>Tu carrito de compras</h1>
            <Container>
                <TableContainer sx={{ maxWidth: 1027 }} component={Paper}>
                    <Table sx={{ minWidth: 200 }} aria-label="customized table">
                        <TablesHead columns={columns} />
                        <CartTableBody />
                    </Table>
                </TableContainer>
                <Button onClick={clear}><small>Vaciar carrito</small></Button>
            </Container>
        </>
    );




}

export default Cart;