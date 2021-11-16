import React, { useEffect, useState,createContext, useContext, useReducer } from 'react'
import { productReducer,cartReducer } from './Reducers'
const Cart=createContext()
const getToLocalStorage=()=>{
    const data=localStorage.getItem('cart')
    if(data){
        return JSON.parse(data)
    }else{
        return []
    }
}
const Context = ({children}) => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('../product.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
        .catch(err=>console.log(err))
    },[])


    const[cart,setCart]=useState(getToLocalStorage())

    const addToCart=(product)=> {
        const newCart=[...cart,product]
        setCart(newCart)
      

       
   }
   const RemoveToCat=(product)=>{
    setCart(  cart.filter((x)=>x.id !==product.id))
      
 }
 useEffect(()=>{
     localStorage.setItem('cart',JSON.stringify(cart))

 },[cart])

 //reducer function
 const [state,dispatch]=useReducer(cartReducer,{
    products:products,
    cart:[]
})
const [productState,productDispatch]=useReducer(productReducer,{
    byStock:false,
    byFastDelivery:false,
    byRating:0,
    searchQuery:" ",
})

    return (
      <Cart.Provider value={{products,cart,addToCart,RemoveToCat,productState,productDispatch}}>
          {children}
          
      </Cart.Provider>
    )
}

export default Context
export const CartState=()=>{
    return useContext(Cart)
}
