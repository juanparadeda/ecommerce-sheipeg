// React imports
import * as React from 'react';
import { useEffect, useState } from 'react';
// MUI imports
import { Container, Divider, Grid, Paper, Typography, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
// Site components imports
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemDetail.scss';
// Firestore imports 
import { filterProducts } from '../../utils/fireBaseController';

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
        marginTop: theme.spacing(2),
    },
}));



const ItemDetail = ({ product }) => {
    const { image, name, price, stock, description, mount, category } = product;
    const [compProducts, setCompProducts] = useState([])

    let comp = 'camaras';
    (category == 'camaras') && (comp = 'lentes')
    const filters = [{
        property: 'category',
        operator: '==',
        value: comp
    },
    {
        property: 'mount',
        operator: 'array-contains-any',
        value: mount
    }
    ]
    useEffect(() => {
        filterProducts(filters)
            .then((res) => {
                setCompProducts(res)
            })
    }, [])
    return (
        <Container maxWidth='xl' className='itemDetailContainer'>
            <Paper variant="outlined" >
                <h2>{name}</h2>
                <Grid container spacing={2} alignItems="center" justifyContent="space-evenly" flexWrap='wrap'>
                    <Grid item xs={8}>
                        <img src={`../` + image} alt={name} />
                    </Grid>
                    <Grid mt='30px' mb='30px'>
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
                {/*<Divider variant="middle" />
                <h3 className='itemDetailDesc'>Descripción:</h3>
    <Typography variant="body1" margin="20px">{description}</Typography>*/}
                <Root>
                    <Divider variant='middle'>
                        <Chip label='DESCRIPCIÓN' />
                    </Divider>
                    <Typography variant="body1" margin="20px">{description}</Typography>
                    <Divider variant='middle'>
                        <Chip label="PRODUCTOS COMPATIBLES" />
                        
                    </Divider>
                    <ItemList items={compProducts} />
                </Root>

            </Paper>


        </Container>
    )
}

export default ItemDetail;