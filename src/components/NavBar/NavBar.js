import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import HamburgerMenu from '../HamburgerMenu/HamburguerMenu';
import DesktopNavButton from '../DesktopNavButton/DesktopNavButton';
import Logo from '../Logo/Logo';
import Brand from '../Brand/Brand';
import UserMenu from '../UserMenu/UserMenu';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const NavBar = () => {
  const {prodsInCart} = useContext(CartContext)
  return (
    <AppBar className='NavBar' position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <Brand />
            <HamburgerMenu />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <DesktopNavButton link={'/categorias/camaras'}>
              Cámaras
            </DesktopNavButton>
            <DesktopNavButton link={'/categorias/lentes'}>
              Lentes
            </DesktopNavButton>
            <DesktopNavButton link={'/categorias/accesorios'}>
              Accesorios
            </DesktopNavButton>
            <DesktopNavButton link={'/ordenes'}>
              Mis Órdenes
            </DesktopNavButton>
          </Box>
          {(prodsInCart > 0) && (<Link to='/cart'><CartWidget /></Link>)}
          <UserMenu />
        </Toolbar>
      </Container>
    </AppBar >
  );
};
export default NavBar;


