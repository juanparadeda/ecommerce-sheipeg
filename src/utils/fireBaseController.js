import { addDoc, collection, doc, getDocs, query, where, getDoc, updateDoc, increment } from 'firebase/firestore';
import db from "./firebaseConfig";

const processProdIdfromSnapshot = (snapshot) => {
    const list = snapshot.docs.map((doc) =>{
        let element = doc.data()
        element.id = doc.id
        return element
    })
    return list
}

const filterProducts = async (filters) => {
    const queryConditions = filters.map((filter) => {
        return (where(filter.property, filter.operator, filter.value))
    })
    const q = query(collection(db, 'products'),
        ...queryConditions)
    const filterSnapshot = await getDocs(q)
    const filterList = processProdIdfromSnapshot(filterSnapshot)
    return (filterList)
}

const saveOrderInFirestore = async (orderToSave, setOrderSubmitted) => {
    const orderFirestore = collection(db, 'orders')
    const orderDocument = await addDoc(orderFirestore, orderToSave)
    updateStockinFirestore(orderToSave)
    setOrderSubmitted(orderDocument.id)
}



const getProductFromFirebase = async (id) => {
    const docRef = doc(db, 'products', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        let product = docSnap.data();
        product.id = docSnap.id;
        return (product);
    }
}

const updateStockinFirestore = async (order) => {
    console.log(order.items)
    order.items.map((item) => {
        const productToUpdate = doc(db, 'products', item.id)
        updateDoc(productToUpdate, { stock: increment(-(item.amountInCart)) })
        return true
    })
}



export { saveOrderInFirestore, getProductFromFirebase, updateStockinFirestore, filterProducts }