
import './App.css';
import ResponsiveAppBar from './components/NavBar/NavBar.js';
import MainPageProducts from './components/MainPageProducts/MainPageProducts.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Modal from './components/Modal/Modal';
import { useState } from 'react';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#64b5f6'
    },
    secondary: {
      main: '#1a237e'
    }
  }
});

function App() {
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  return (

    <div className="App">
      <ThemeProvider theme={customTheme}>
        <ResponsiveAppBar />
        <h1>Sheipeg | Tu Tienda de Fotografía</h1>
        <MainPageProducts />
        <Modal handleClose={handleClose} open={open}/>
      </ThemeProvider>
    </div>
  );
}

export default App;
