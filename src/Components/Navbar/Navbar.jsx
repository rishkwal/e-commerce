import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, Menuitem, Menu, Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import logo from '../../assets/color_logo_transparent.png';
import useStyles from './styles';
import { Link } from 'react-router-dom';


const Navbar = ({totalItems}) => {
    const classes = useStyles();
    return (
        
        <AppBar position ='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography component={Link} to='/' variant='h6' className={classes.title} color='inherit'>
                    <img src={logo} alt ='RishKart.js' height ='25px' className={classes.image} />
                    RishKart
                </Typography> 
                <div className = {classes.grow} />
                <div className={classes.button}>
                    <IconButton component={Link} to='/cart' aria-label='Show Cart Items' color = 'inherit'>
                        <Badge badgeContent={totalItems} color='secondary'>
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
            
        
    )
}

export default Navbar
