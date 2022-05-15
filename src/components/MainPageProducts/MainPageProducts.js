import MainProduct from '../MainProduct/MainProduct.js';
import ProductsGrid from '../ProductsGrid/ProductsGrid.js';

const MainPageProducts = () => {
    const products = [
        {
            name: 'Cámara Fujifilm X-T30',
            price: 200000,
            stock: 5,
            image: './X-T30_Silver_Front.webp'
        },
        {
            name: 'Cámara Canon EOS 80D',
            price: 592000,
            stock: 10,
            image: './canon-eos-80d-frontal.jpg'
        },
        {
            name: 'Cámara Canon EOS R5',
            price: 980000,
            stock: 2,
            image: './canon-EOS-R5.jpg'
        },
        {
            name: 'Cámara Nikon Z9',
            price: 1100000,
            stock: 7,
            image: './nikon-z9.jpg'
        },
        {
            name: 'Cámara Fujifilm X-T4',
            price: 200000,
            stock: 5,
            image: './X-T30_Silver_Front.webp'
        },
    ]
    const {name, price, stock, image} = products[0];
    return (
        <>
            <MainProduct name={name} price={price} stock={stock} image={image} />
            <ProductsGrid  props={products} />
        </>
    )

}


export default MainPageProducts;