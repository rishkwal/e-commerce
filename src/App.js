import React, {useState, useEffect} from 'react'
import Products from './Components/Products/Products';
import Navbar from './Components/Navbar/Navbar';
import { commerce } from './lib/commerce';

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

    useEffect(() => {
        fetchProducts();
        fetchCart();
    },[]);

    console.log(products);
    console.log(cart);
    
    return (
        <div>
            <Navbar/>
            <Products products={products} />
        </div>
    )
}

export default App
