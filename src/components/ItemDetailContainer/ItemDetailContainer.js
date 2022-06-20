// React and react-router-dom imports
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Site components imports
import ItemDetail from '../ItemDetail/ItemDetail.js';
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.js";
// Firebase imports
import { getProductFromFirebase } from "../../utils/fireBaseController.js";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [productState, setProductState] = useState({});

    useEffect(() => {
        getProductFromFirebase(id)
        .then((res) => {
            setProductState(res);
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