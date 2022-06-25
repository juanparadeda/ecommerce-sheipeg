// React and react-router-dom Imports
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
// Site components imports
import ItemList from "../ItemList/ItemList";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Carousel from "../Carousel/Carousel";
import './itemListContainer.scss';
// Firebase imports
import { getProductsCategory, getProductsFromFireStore } from "../../utils/fireBaseController";

const ItemListContainer = () => {
    const [productsState, setProductsState] = useState([]);
    const [SpinnerState, setSpinnerState] = useState({ display: 'flex' })
    const { category } = useParams();

    let title = '';
    let subtitle = '';
    (category === 'camaras') && (title = 'Cámaras de Fotos');
    (category === 'lentes') && (title = 'Lentes');
    (category === 'accesorios') && (title = 'Accesorios');
    (category === undefined) && (title = 'Sheipeg | Tu Tienda de Fotografía') && (subtitle = 'Catálogo de Productos')
    useEffect(() => {
        setProductsState([]);
        setSpinnerState({ display: 'flex' });
        if (category === undefined) {
            getProductsFromFireStore()
                .then((res) => {
                    setProductsState(res)
                })
                .catch(() => {
                    console.log('ERROR');
                })
                .finally(() => {
                    setSpinnerState({ display: 'none' })
                })
        } else {
            getProductsCategory(category)
                .then((res) => {
                    setProductsState(res)
                })
                .finally(() => {
                    setSpinnerState({ display: 'none' })
                })
        }
    }, [category])

    return (
        <>  
            <Carousel />
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <LoadingSpinner display={SpinnerState} />
            <ItemList items={productsState} />
        </>
    )
}

export default ItemListContainer;