import { useEffect, useState } from "react";
import { product } from '../../utils/productsMock.js';
import ItemDetail from '../ItemDetail/ItemDetail.js';


const ItemDetailContainer = () => {
    const [productState, setProductState] = useState({});
    const getProduct = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(product);
            }, 2000);
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
        <ItemDetail product={productState}/>
    )
}

export default ItemDetailContainer;