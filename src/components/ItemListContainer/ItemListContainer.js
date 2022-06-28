// React imports
import { useState } from "react";
import { useParams } from "react-router-dom";
// Site components imports
import ItemList from "../ItemList/ItemList";
import Carousel from "../Carousel/Carousel";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Filter from "../Filter/Filter";
import './itemListContainer.scss'




const ItemListContainer = () => {
    const { category } = useParams()
    let title = '';
    let subtitle = '';
    (category === 'camaras') && (title = 'Cámaras de Fotos');
    (category === 'lentes') && (title = 'Lentes');
    (category === 'accesorios') && (title = 'Accesorios');
    (category === undefined) && (title = 'Sheipeg | Tu Tienda de Fotografía') && (subtitle = 'Catálogo de Productos')
    const [SpinnerState, setSpinnerState] = useState({ display: 'flex' })
    const [productsState, setProductsState] = useState([])

    return (
        <>
            {category === undefined && <Carousel />}
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <form className="filter">
            <Filter setProductsState={setProductsState} setSpinnerState={setSpinnerState}/>
            </form>
            <LoadingSpinner display={SpinnerState} />
            <ItemList items={productsState} />

        </>
    )
}

export default ItemListContainer