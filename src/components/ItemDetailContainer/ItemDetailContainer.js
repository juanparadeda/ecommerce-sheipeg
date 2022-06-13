import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail.js';
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.js";
import { doc, getDoc } from "firebase/firestore";
import db from "../../utils/firebaseConfig";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [productState, setProductState] = useState({});

    useEffect(() => {
        const getProductFromFirebase = async () =>{
            const docRef = doc(db, 'products', id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                let product = docSnap.data();
                product.id = docSnap.id;
                return(product);
            }
        }
        getProductFromFirebase()
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