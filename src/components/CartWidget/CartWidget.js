
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

let cart = [];
const CartWidget = () => {

    return (
        <IconButton aria-label="cart" sx={{ margin: '0px 10px' }}>
            <StyledBadge badgeContent={`${cart.length}`} color="secondary">
                <ShoppingCartIcon color="secondary" />
            </StyledBadge>
        </IconButton>
    )

}

export default CartWidget;