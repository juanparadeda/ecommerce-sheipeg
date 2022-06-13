import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getProducts } from "../../utils/productsMock";
import { filterProductsByCategory } from "../../utils/filterProduct";
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
        /*getProducts()
            .then((res) => {
                if (category === undefined) {

                    setProductsState(res);
                } else {
                    const filteredProducts = filterProductsByCategory(res, category);
                    setProductsState(filteredProducts);
                }
            })
            .catch((error) => {
                console.log('ERROR');
            })
            .finally(() => {
                setSpinnerState({ display: 'none' })
            })*/

        if (category === undefined) {
            getProductsFromFireStore()
                .then((res) => {
                    setProductsState(res)
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
        const getProductFromFirebase = async () =>{
            const docRef = doc(db, 'products', 'RaptGUKcG8Qe1i9Y4tg8');
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                console.log(docSnap.data())
            }
        }
        getProductFromFirebase();
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
            {/*productsState[0] != null && <MainItem prop={productsState[0]} />*/}
            <LoadingSpinner display={SpinnerState} />
            <ItemList items={productsState} />
        </>
    )
}

export default ItemListContainer;