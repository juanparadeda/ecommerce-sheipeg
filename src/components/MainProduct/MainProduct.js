import './MainProduct.scss';
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn';

const MainProduct = ({ name, price, stock, image }) => {
    return (
        <>
            <h2>Producto Destacado</h2>
            <div className="MainProduct">
                <div className="MainProductImg">
                    <img src={image} />
                </div>
                <div className='MainProductInfo'>
                    <h3>{name}</h3>
                    <small>Stock: {stock} u.</small>
                    <h4>$ {price}</h4>
                    <AddToCartBtn name={name} price={price} />
                </div>
            </div>
        </>
    )
}

export default MainProduct;