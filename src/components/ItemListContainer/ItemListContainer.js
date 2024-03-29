// React imports
import { useState } from "react";
import { useParams } from "react-router-dom";
// MUI imports
import { Container } from "@mui/material";
// Site components imports
import ItemList from "../ItemList/ItemList";
import Carousel from "../Carousel/Carousel";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Filter from "../Filter/Filter";
import './itemListContainer.scss'


const ItemListContainer = () => {
    const { category } = useParams()
    let title = '';
    (category === 'camaras') && (title = 'Cámaras de Fotos');
    (category === 'lentes') && (title = 'Lentes');
    (category === 'accesorios') && (title = 'Accesorios');
    (category === undefined) && (title = 'Catálogo de Productos')
    const [SpinnerState, setSpinnerState] = useState({ display: 'flex' })
    const [productsState, setProductsState] = useState([])
    const showFilter = { display: 'unset'}
    category == 'accesorios' && (showFilter.display = 'none')
    return (
        
        <>
            <Carousel />
            <h1>{title}</h1>
  
                <Container sx={showFilter}>
                    <form className="filter">
                        <Filter setProductsState={setProductsState} setSpinnerState={setSpinnerState} />
                    </form>
                </Container>
            
            <LoadingSpinner display={SpinnerState} />
            <ItemList items={productsState} />
        </>
    )
}

export default ItemListContainer