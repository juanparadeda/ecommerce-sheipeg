import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CardItem from '../Card/Card.js';

const ProductsGrid = ({props}) =>{
    return (
        <>
            <h2>Catálogo de Productos</h2>
            <Container>
            <Grid container spacing={3}>
                <Grid item lg={2} md={3} sm={4} xs={6}>
                    <CardItem product = {props[0]} />
                </Grid>
                <Grid item lg={2} md={3} sm={4} xs={6}>
                    <CardItem product={props[1]} />
                </Grid>
                <Grid item lg={2} md={3} sm={4} xs={6}>
                    <CardItem product={props[2]} />
                </Grid>
                <Grid item lg={2} md={3} sm={4} xs={6}>
                    <CardItem product={props[3]} />
                </Grid>
                <Grid item lg={2} md={3} sm={4} xs={6}>
                    <CardItem product={props[4]} />
                </Grid>
            </Grid>
            </Container>
        </>
    )
}


export default ProductsGrid;