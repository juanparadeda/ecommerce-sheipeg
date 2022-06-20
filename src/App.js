// React and React router imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// MUI imports
import { createTheme, ThemeProvider } from '@mui/material/styles';
// Site components imports
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import NotFound from './pages/NotFound';
import CartContainer from './components/CartContainer/CartContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext';
import OrdersContainer from './components/OrdersContainer/OrdersContainer';

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

  return (

    <div className="App">
      <CartContextProvider>
        <ThemeProvider theme={customTheme}>
          <BrowserRouter>
            <NavBar />
            <Routes>
              
              <Route path='/item/:id' element={<ItemDetailContainer />}  />
              <Route path='/categorias/:category' element={<ItemListContainer />} />
              <Route path='/ordenes' element={<OrdersContainer />}/>
              <Route path='/cart' element={<CartContainer />} />
              <Route path='/' element={<ItemListContainer />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;
