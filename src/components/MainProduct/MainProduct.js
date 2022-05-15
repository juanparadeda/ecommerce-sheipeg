import './MainProduct.scss';


const MainProduct = ({name , price, stock, image}) => {
    return (
        <>
            <h2>Producto Destacado</h2>
            <div className="MainProduct">
                <div className="MainProductImg">
                    <img src={image} />
                </div>
                <div className='MainProductInfo'>
                    <h3>{name}</h3>
                    <small>Stock: {stock}</small>
                    <h4>$ {price}</h4>
                    <button>Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}

export default MainProduct;