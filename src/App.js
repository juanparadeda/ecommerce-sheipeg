
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

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
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/categorias/:category' element={<ItemListContainer />} />
              <Route path='/' element={<ItemListContainer />} />
              <Route path='*' element={<NotFound />} />

          </Routes>
          
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
