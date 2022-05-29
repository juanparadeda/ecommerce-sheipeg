
import ItemListContainer from "../components/ItemListContainer/ItemListContainer_b";
import { getProducts } from "../utils/productsMock";
import { useState, useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const Home = () => {
    const [productsState, setProductsState] = useState([]);
    const [displaySpinner, setDisplaySpinner] = useState({ display: 'flex' })
    
    useEffect(() => {
        getProducts()
            .then((res) => {
                setProductsState(res);
            })
            .catch((err) => {
                console.log('ERROR');
            })
            .finally(() => {
                setDisplaySpinner({display: 'none'})
            })
    }, [])
    return (

  
        <>
            <h1>Sheipeg | Tu Tienda de Fotografía</h1>
            <h2>Catálogo de Productos</h2>
            <LoadingSpinner display={displaySpinner}/>
            <ItemListContainer arrayOfProducts={productsState}/>
        </>
    )
}

export default Home;