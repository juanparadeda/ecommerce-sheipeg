// MUI imports
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';


const StyledTableCell = styled(TableCell)(({ theme }) => ( {
    
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.common.white,
    },

}));

const TablesHead = ({ columns }) => {
    return (
        <TableHead>
            <TableRow>
                {columns.map((column, index) => {
                    let customAlign
                    (index != 0) ? (customAlign = 'right') : (customAlign = 'left')
                    return (
                        <StyledTableCell align={customAlign} key={index}>{column}</StyledTableCell>
                    )
                })}

            </TableRow>
        </TableHead>
    )
}

export default TablesHead;