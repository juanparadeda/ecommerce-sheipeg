import { addDoc, collection, doc, getDocs,  query, where, getDoc, updateDoc, increment } from 'firebase/firestore';
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
    updateStockinFirestore(orderToSave)
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

const updateStockinFirestore = async (order) => {
    console.log(order.items)
    order.items.map((item) => {
        const productToUpdate = doc(db, 'products', item.id)
        updateDoc(productToUpdate, { stock: increment(-(item.amountInCart))})
        return true
    })

}
export {saveOrderInFirestore, getProductsFromFireStore, getProductsCategory, getProductFromFirebase, updateStockinFirestore}