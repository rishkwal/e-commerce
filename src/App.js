import React, {useState, useEffect} from 'react'
import Products from './Components/Products/Products';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Components/Cart/Cart';
import { commerce } from './lib/commerce';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    
    const fetchProducts = async () => {
        
        const { data } = await commerce.products.list();
    
        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
       
    }

    const handleAddToCart = async (productId, quantity) => {
        const { cart }= await commerce.cart.add(productId, quantity);

        setCart(cart);
    }

    const handleUpdateCartQty = async (productId,quantity) => {
        const {cart} = await commerce.cart.update(productId, {quantity});
        setCart(cart);
    }

    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remoce(productId);
        setCart(cart);
    }

    const handleEmptyCart = async () => {
        const {cart} = await commerce.cart.empty();
        setCart(cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    },[]);

    console.log(products);
    console.log(cart);
    
    return (
        <Router>
        <div>
            <Navbar totalItems = {cart.total_items}/>
            <Switch>
                <Route exact path='/'>
                    <Products products={products} onAddToCart={handleAddToCart} />
                </Route>
                <Route exact path='/cart'>
                    <Cart 
                    cart={cart}
                    handleUpdateCartQty={handleUpdateCartQty}
                    handleRemoveFromCart={handleRemoveFromCart}
                    handleEmptyCart={handleEmptyCart}
                    />
                </Route>
            
            
            </Switch>
            
        </div>
        </Router>
    )
}

export default App
