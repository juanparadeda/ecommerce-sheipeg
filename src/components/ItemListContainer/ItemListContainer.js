import MainItem from '../MainItem/MainItem.js';
import ItemList from '../ItemList/ItemList.js';
import { useState, useEffect } from 'react';

const ItemListContainer = () => {
    const [productsState, setProductsState] = useState([]);
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
            }, 2000);
        });
    };

    useEffect(() => {
        getProducts()
            .then((res) => {
                console.log(res)
                setProductsState(res);
            })
            .catch((err) => {
                console.log('ERROR');
            })
    }, [])
    return (
        <>
            <MainItem prop={productsState} />
            <ItemList props={productsState} />
        </>
    )

}


export default ItemListContainer;