
import ItemList from '../ItemList/ItemList.js';



const ItemListContainer = ({arrayOfProducts}) => {

    return (

        <>
            {/*productsState[0] != null && <MainItem prop={productsState[0]} />*/}
            <ItemList items={arrayOfProducts} />
            
        </>
    )

}


export default ItemListContainer;