import { Container } from "@mui/material";
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
    },
}));



const Orders = ({orders}) => {

    return (
        <Container>
                <TableContainer sx={{ maxWidth: 1027 }} component={Paper}>
                    <Table sx={{ minWidth: 200 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Día y hora</StyledTableCell>
                                <StyledTableCell align="right">Orden</StyledTableCell>
                                <StyledTableCell align="right">Cantidad de Productos</StyledTableCell>
                                <StyledTableCell align="right">Precio total</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((order) => {
                                const { id, time, prodsInCart, total } = order;
                                return (

                                    <StyledTableRow key={id}>
                                        <StyledTableCell component="th" scope="row">
                                            {time}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{id}</StyledTableCell>
                                        <StyledTableCell align="right">{prodsInCart}</StyledTableCell>
                                        <StyledTableCell align="right">$ {total}</StyledTableCell>
                                    </StyledTableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
        </Container>
        
        


    )
}

export default Orders;