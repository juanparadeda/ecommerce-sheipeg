// Functional component
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './Card.scss';
import ItemCount from '../ItemCount/ItemCount';
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn';

const CardItem = ({ product }) => {
    const { name, price, image, stock } = product;
    return (
        //JSX
        <Card>
            <CardContent>
                <div className="cardItem">
                    <img src={`${image}`} alt={name} />
                    <p>{name}</p>
                    <small>Stock: {stock} u.</small>
                    <span>$ {price}</span>
                    <ItemCount stock={stock} />
                    <AddToCartBtn name={name} price={price}/>
                    
                </div>
            </CardContent>
        </Card>
    )
}

export default CardItem;