import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { filterProductsByCategory, getProducts } from "../../utils/productsMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    const [productsState, setProductsState] = useState([]);
    const { category } = useParams();
    let title = '';
    (category == 'camaras') && (title = 'Cámaras de Fotos');
    (category == 'lentes') && (title = 'Lentes');
    (category == 'accesorio') && (title = 'Accesorios');

    useEffect(() => {
        setProductsState([]);
        getProducts()
        .then((res) =>{
            const filteredProducts = filterProductsByCategory(res, category);
            setProductsState(filteredProducts);
        })
        .then(() => console.log('hola'))

    }, [category])
    return (
        <>
            <h1>{title}</h1>
            {/*productsState[0] != null && <MainItem prop={productsState[0]} />*/}
            <ItemList items={productsState} />
        </>
    )
}

export default ItemListContainer;