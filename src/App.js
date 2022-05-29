
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProductDetail from './pages/ProductDetail';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

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
      <ThemeProvider theme={customTheme}>
        <BrowserRouter>
          <NavBar />
          <Routes>
              <Route path='/item/:id' element={<ProductDetail />} />
              <Route path='/categorias/:category' element={<ItemListContainer />} />
              <Route path='/' element={<Home />} />
              <Route path='*' element={<NotFound />} />

          </Routes>
          
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
