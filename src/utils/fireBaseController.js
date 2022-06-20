import { addDoc, collection, doc, getDocs,  query, where, getDoc } from 'firebase/firestore';
import db from "./firebaseConfig";



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

const saveOrderInFirestore = async (orderToSave, setOrderSubmitted) => {
    const orderFirestore = collection(db, 'orders')
    const orderDocument = await addDoc(orderFirestore, orderToSave)
    setOrderSubmitted(orderDocument.id)
}
const getProductFromFirebase = async (id) =>{
    const docRef = doc(db, 'products', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        let product = docSnap.data();
        product.id = docSnap.id;
        return(product);
    }
}
export {saveOrderInFirestore, getProductsFromFireStore, getProductsCategory, getProductFromFirebase}