// React imports
import { useContext } from 'react';

// MUI imports
import TableBody from '@mui/material/TableBody';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Button, TableRow } from "@mui/material";
// Site components imports
import { CartContext } from "../../context/CartContext";
import CheckoutButton from '../CheckoutButton/CheckoutButton';

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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },

}));


const CartTableBody = () => {
    const { cart, removeItem, cartPrice, prodsInCart } = useContext(CartContext)
    
    return (
        <TableBody>
            {cart.map((product) => {
                const { id, name, amountInCart, price } = product;
                const subTotalPrice = price * amountInCart
                const productArray = Object.values ({ name, amountInCart, price, subTotalPrice })
                return (
                    <StyledTableRow key={id}>
                        {productArray.map((property, index) => {
                            let customAlign
                            (index == 0) ? (customAlign = 'left') : (customAlign = 'right')
                            return (

                                <StyledTableCell align={customAlign} key={index}>{property}</ StyledTableCell>
                            )
                        })}
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
                <StyledTableCell><CheckoutButton /></StyledTableCell>
            </StyledTableRow>
        </TableBody>
    )
}

export default CartTableBody