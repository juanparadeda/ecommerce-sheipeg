

import { Button } from "@mui/material";
import './ItemCount.scss';
import { useState } from 'react';
import AddToCartBtn from '../../components/AddToCartBtn/AddToCartBtn'

const ItemCount = ({product, setShowButton}) => {
    const { name, price, stock } = product;
    const [count, setCount] = useState(1);
    const addCount = () => {
        stock > count && setCount(count + 1);
    }
    const subsCount = () => {
        count > 1 && setCount(count - 1);
    }
    return (
<>
        <div className="itemCount">
            <Button size="small" variant="outlined" onClick={subsCount}>-</Button>
            <p>{count}</p>
            <Button size="small" variant="outlined" onClick={addCount}>+</Button>
            
        </div>
        <AddToCartBtn product={product} count={count} />
        </>
    );
}

export default ItemCount;