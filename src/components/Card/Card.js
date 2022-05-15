// Functional component
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './Card.scss';



const CardItem = ({product}) => {
    const {name, price, image} = product;
    return(
        //JSX
        <Card>
            <CardContent>
                <div className="cardItem">
                    <img src={`${image}`} alt={name}/>
                    <p>{name}</p>
                    <span>$ {price}</span>
                    <button>Agregar al carrito</button>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardItem;