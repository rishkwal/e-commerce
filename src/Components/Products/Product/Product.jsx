import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart, CallMissedSharp } from '@material-ui/icons';

function Product({product}) {
    return (
        <Card className ={classes.root}>
            <CardMedia className ={classes.media} images=''/>
            <CardContent>
                <div className = {classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        {product.price }
                    </Typography>                 
                </div>
                <Typography variant='h2' color='textSecondary'>{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing clasName = {classes.cardActions}>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>

    )
}

export default Product
