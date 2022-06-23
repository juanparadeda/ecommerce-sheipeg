// React router imports
import { Link } from 'react-router-dom';
// MUI imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// Site components imports
import './Item.scss';
import ItemCount from '../ItemCount/ItemCount';


const Item = ({ product }) => {
    const { name, price, image, stock, id } = product;
    return (
        <Card>
            <CardContent>
                <div className="cardItem">
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/item/${id}`}>
                        <img src={`${image}`} alt={name} />
                        <p>{name}</p>
                    </Link>
                    <small>Stock: {stock} u.</small>
                    <span>$ {price}</span>
                    <ItemCount product={product} />
                </div>
            </CardContent>
        </Card>
    )
}

export default Item;