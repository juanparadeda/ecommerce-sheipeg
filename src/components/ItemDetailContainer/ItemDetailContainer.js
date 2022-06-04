import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from '../../utils/productsMock.js';
import ItemDetail from '../ItemDetail/ItemDetail.js';
import {filterProductById}from "../../utils/filterProduct.js";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.js";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [productState, setProductState] = useState({});

    const getProduct = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(filterProductById(products, id));
            }, 500);
        });
    };
    useEffect(() => {
        getProduct()
            .then((response) => {
                setProductState(response);
            })
            .catch((error) => {
                console.log('ERROR');
            })
    }, [])

    return (
        
        <>  
            {productState.id === undefined ? 
                <LoadingSpinner display={{ display: 'flex' }} />
                :
                <ItemDetail product={productState} />}     
        </>
    )
}

export default ItemDetailContainer;