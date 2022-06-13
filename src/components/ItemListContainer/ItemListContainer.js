import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { collection, doc, getDocs, query, where, getDoc } from "firebase/firestore";
import db from "../../utils/firebaseConfig";

const ItemListContainer = () => {
    const [productsState, setProductsState] = useState([]);
    const [SpinnerState, setSpinnerState] = useState({ display: 'flex' })
    const { category } = useParams();

    let title = '';
    let subtitle = '';
    (category === 'camaras') && (title = 'Cámaras de Fotos');
    (category === 'lentes') && (title = 'Lentes');
    (category === 'accesorios') && (title = 'Accesorios');
    (category === undefined) && (title = 'Sheipeg | Tu Tienda de Fotografía') && (subtitle = 'Catálogo de Productos')
    useEffect(() => {
        setProductsState([]);
        setSpinnerState({ display: 'flex' });
        if (category === undefined) {
            getProductsFromFireStore()
                .then((res) => {
                    setProductsState(res)
                })
                .catch(() => {
                    console.log('ERROR');
                })
                .finally(() => {
                    setSpinnerState({ display: 'none' })
                })
        } else {
            getProductsCategory(category)
                .then((res) => {
                    setProductsState(res)
                })
                .finally(() => {
                    setSpinnerState({ display: 'none' })
                })
        }
    }, [category])

    const getProductsFromFireStore = async () => {
        const productSnapshot = await getDocs(collection(db, 'products'));
        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data();
            product.id = doc.id;
            return product;
        })
        
        return (productList);
    }
    const getProductsCategory = async (category) => {
        const q = query(collection(db, 'products'), where ('category', '==', category))
        const categorySnapshot = await getDocs(q)
        const categoryList = categorySnapshot.docs.map((doc) => {
            let product = doc.data();
            product.id = doc.id;
            return product;
        })
        return categoryList;
    }
    return (
        <>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <LoadingSpinner display={SpinnerState} />
            <ItemList items={productsState} />
        </>
    )
}

export default ItemListContainer;