import './MainItem.scss';
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn';

const MainItem = ({prop}) => {
    
    return (
        <>
            <h2>Producto Destacado</h2>
            <div className="MainProduct">
                <div className="MainProductImg">
                    <img src={prop.image} alt={prop.name}/>
                </div>
                <div className='MainProductInfo'>
                    <h3>{prop.name}</h3>
                    <small>Stock: {prop.stock} u.</small>
                    <h4>$ {prop.price}</h4>
                    <AddToCartBtn name={prop.name} price={prop.price} />
                </div>
            </div>
        </>
    )
}

export default MainItem;