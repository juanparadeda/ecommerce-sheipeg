import MainItem from '../MainItem/MainItem.js';
import ItemList from '../ItemList/ItemList.js';
import { useState, useEffect } from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.js';


const ItemListContainer = () => {
    const [productsState, setProductsState] = useState([]);
    const [displaySpinner, setDisplaySpinner] = useState({ display: 'flex' })
    const products = [
        {
            id: 1,
            name: 'Cámara Fujifilm X-T30',
            price: 200000,
            stock: 5,
            image: './X-T30_Silver_Front.webp'
        },
        {
            id: 2,
            name: 'Cámara Canon EOS 80D',
            price: 592000,
            stock: 10,
            image: './canon-eos-80d-frontal.jpg'
        },
        {
            id: 3,
            name: 'Cámara Canon EOS R5',
            price: 980000,
            stock: 2,
            image: './canon-EOS-R5.jpg'
        },
        {
            id: 4,
            name: 'Cámara Nikon Z9',
            price: 1100000,
            stock: 7,
            image: './nikon-z9.jpg'
        },
        {
            id: 5,
            name: 'Cámara Fujifilm X-T4',
            price: 200000,
            stock: 5,
            image: './X-T30_Silver_Front.webp'
        },
    ]

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 5000);
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
            {/*<MainItem prop={productsState[0]} />*/}
            <ItemList items={productsState} />
            <LoadingSpinner display={displaySpinner}/>
        </>
    )

}


export default ItemListContainer;