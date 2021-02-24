import React, {useState, useEffect} from 'react'
import Products from './Components/Products/Products';
import Navbar from './Components/Navbar/Navbar';
import { commerce } from './lib/commerce';

function App() {
    const [products, setProducts] = useState([]);
    
    const fetchProducts = async () => {
        
        const { data } = await commerce.products.list();
    
        setProducts(data);
    }

    useEffect(() => {
        fetchProducts();
    },[]);

    console.log(products);
    
    return (
        <div>
            <Navbar/>
            <Products />
        </div>
    )
}

export default App
