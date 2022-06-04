import * as React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Button, Container, Divider, Grid, Paper, Typography } from '@mui/material';
import './ItemDetail.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ItemDetail = ({ product }) => {
    const { image, name, price, stock, description } = product;
    const [showButton, setShowButton] = useState(false);
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

                                    {showButton ?
                                        <Grid item alignSelf='center' marginTop='10px'>
                                            <Link to='/cart'>
                                                <Button color="secondary" variant="contained">
                                                    Confirmar
                                                </Button>
                                            </Link>
                                        </Grid>
                                        :
                                        <Grid item>
                                            <ItemCount product={product} setShowButton={setShowButton} />
                                        </Grid>
                                    }
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