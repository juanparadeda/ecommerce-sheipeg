
import './App.css';
import ResponsiveAppBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
        <ResponsiveAppBar />
        <h1>Sheipeg | Tu Tienda de Fotografía</h1>
        <ItemDetailContainer />
        <ItemListContainer />
        
      </ThemeProvider>
    </div>
  );
}

export default App;
