// React imports
import { useEffect, useState } from "react"
// Site components imports
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner"
import Orders from "../Orders/Orders"
// Firebase imports
import db from "../../utils/firebaseConfig"
import { collection, getDocs } from "firebase/firestore"



const OrdersContainer = () => {
    const [orders, setOrders] = useState([]);
    const [spinnerState, setSpinnerState] = useState({ display: 'flex' })

    useEffect(() => {
        getOrdersFromFirestore()
            .then(() => setSpinnerState({ display: 'none' }))
    }, [])

    const getOrdersFromFirestore = async () => {
        const orderSnapshot = await getDocs(collection(db, 'orders'));
        const orderList = orderSnapshot.docs.map((doc) => {
            let order = doc.data();
            order.id = doc.id;
            return order;
        })

        setOrders(orderList);
    }

    return (
        <>
            <h1>Mis Órdenes</h1>
            {(orders.length > 0) && <Orders orders={orders} />}
            <LoadingSpinner display={spinnerState} />
        </>

    )
}

export default OrdersContainer;