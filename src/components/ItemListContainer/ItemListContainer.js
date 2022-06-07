import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom";
import {  getProducts } from "../../utils/productsMock";
import { filterProductsByCategory } from "../../utils/filterProduct";
import ItemList from "../ItemList/ItemList";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const ItemListContainer = () => {
    const [productsState, setProductsState] = useState([]);
    const [SpinnerState, setSpinnerState] = useState({display: 'flex' })
    const { category } = useParams();

    let title = '';
    let subtitle = '';
    (category === 'camaras') && (title = 'Cámaras de Fotos');
    (category === 'lentes') && (title = 'Lentes');
    (category === 'accesorios') && (title = 'Accesorios');
    (category === undefined) && (title = 'Sheipeg | Tu Tienda de Fotografía') && (subtitle = 'Catálogo de Productos')
    useEffect(() => {
        setProductsState([]);
        setSpinnerState({display: 'flex'});
        getProducts()
        .then((res) =>{
            if (category === undefined) {
                
                setProductsState(res);
            } else {
            const filteredProducts = filterProductsByCategory(res, category);
            setProductsState(filteredProducts);
            }
        })
        .catch((error) => {
            console.log('ERROR');
        })
        .finally(() =>{
            setSpinnerState({display: 'none'})
        })
    }, [category])
    return (
        <>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            {/*productsState[0] != null && <MainItem prop={productsState[0]} />*/}
            <LoadingSpinner display={SpinnerState} />
            <ItemList items={productsState} />
        </>
    )
}

export default ItemListContainer;