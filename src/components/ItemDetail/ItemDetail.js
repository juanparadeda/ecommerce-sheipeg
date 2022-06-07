import * as React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Container, Divider, Grid, Paper, Typography } from '@mui/material';
import './ItemDetail.scss';

const ItemDetail = ({ product }) => {
    const { image, name, price, stock, description } = product;
    return (
        <Container maxWidth='lg'>
            <Paper variant="outlined">
                <h2>{name}</h2>
                <Grid container spacing={2} alignItems="center" justifyContent="space-evenly" flexWrap='wrap'>
                    <Grid item xs={8}>
                        <img src={`../` + image} alt={name} />
                    </Grid>
                    <Grid >
                        <Paper elevation={4}>
                            <Container className='controlContainer'>
                                <Grid container direction="column" justifyContent="center" alignItems="flex-end">
                                    <Grid item><h3>$ {price}</h3></Grid>
                                    <Grid item><small>Stock: {stock} u.</small></Grid>
                                    <Grid item><ItemCount product={product} /></Grid>
                                </Grid>
                            </Container >
                        </Paper>
                    </Grid>
                </Grid>
                <h3>Descripción:</h3>
                <Typography variant="body1" margin="20px">{description}</Typography>
            </Paper>
            <Divider variant="middle" />

        </Container>
    )
}

export default ItemDetail;