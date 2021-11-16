import React, { useEffect, useState } from 'react'

import Header from './Header';
import Product from './Product';



const Home = () => {
    const[products,setProducts]=useState([])
    const [cart, setCart] = useState([]);

    //  adding function add To cart part
    const addToCart = (developer) => {
        
        const newCart = [...cart, developer];
        setCart(newCart)
        console.log(newCart);
        
    }

    // //remove to cart
    // const RemoveToCart=(developer)=>{
    //     setCart(cart.filter((x)=>x.id !==developer.id))
    // }
    useEffect(() => {
        fetch('/product.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
   
    return (
        <div className="container">
            <Header cart={cart} />
            <div className="row">
               {
                   products.map(developer =>
                    <div className="col-md-4 mt-3 ">
                     

                        <Product
                            developer={developer}
                            addToCart={addToCart}
                            
                            ></Product>

                            
                    </div>
                )
               }
            </div>
            
        </div>
    )
}

export default Home
