import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product'
import useStyles from './styles';

const products = [
    {id: 1, name:'Shoes', description: 'Running Shoes', price:'$15', image: 'https://assets.ajio.com/medias/sys_master/root/ajio/catalog/5ef38fcbf997dd433b43d714/-473Wx593H-461205998-black-MODEL.jpg' },
    {id: 2, name:'T-Shirt', description: 'Men\'s T-Shirt', price:'$20', image: 'https://5.imimg.com/data5/SO/KF/MY-37738145/mens-tshirt-250x250.jpg'}
]

const Products = () => {
    const classes = useStyles();

    return(
        <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify ='center' spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                    </Grid>
            ))}
        </Grid>
        </main>
    );
    
}

export default Products