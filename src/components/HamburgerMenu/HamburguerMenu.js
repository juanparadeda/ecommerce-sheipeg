import * as React from 'react';
import Menu from '@mui/material/Menu';
import { MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
const HamburgerMenu = () => {
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
            >

                <MenuItem onClick={handleCloseNavMenu}>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/categorias/camaras">
                        <Typography textAlign="center">Cámaras</Typography>
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/categorias/lentes">
                        <Typography textAlign="center">Lentes</Typography>
                    </Link>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/categorias/accesorios">
                        <Typography textAlign="center">Accesorios</Typography>
                    </Link>
                </MenuItem>
            </Menu>
        </Box>
    )
}

export default HamburgerMenu;