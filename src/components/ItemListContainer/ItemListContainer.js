import MainItem from '../MainItem/MainItem.js';
import ItemList from '../ItemList/ItemList.js';
import { useState, useEffect } from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.js';
import { products } from '../../utils/productsMock.js';


const ItemListContainer = () => {
    const [productsState, setProductsState] = useState([]);
    const [displaySpinner, setDisplaySpinner] = useState({ display: 'flex' })

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 1000);
        });
    };

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
            {/*productsState[0] != null && <MainItem prop={productsState[0]} />*/}
            <ItemList items={productsState} />
            <LoadingSpinner display={displaySpinner}/>
        </>
    )

}


export default ItemListContainer;