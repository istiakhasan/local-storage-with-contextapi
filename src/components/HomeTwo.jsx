import React, { useState } from 'react'
import HeaderTwo from './HeaderTwo'
import SingleProduct from './SingleProduct'
import { CartState } from '../context/Context'
import { Container, Navbar,FormControl } from 'react-bootstrap'


const HomeTwo = () => {
  const {products}=CartState()

    const [searchprduct,setSearch]=useState([])
    
    return (
        <div className="container-fluid">
        <HeaderTwo/>
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand className=" ">
                    <FormControl
                    onChange={(e)=>setSearch(e.target.value)}
                    className="m-auto " placeholder="Search Your Product" />
                </Navbar.Brand>
            </Container>
        </Navbar>
        
           
            <div className="row">
                 {
                    products.filter((val)=>{
                        if(searchprduct==""){
                            return val
                        }else if(val.Name.toLowerCase().includes(searchprduct.toLowerCase())){
                            return val
                        }
                        
                    }).map(product=>(
                        <div className="col-lg-3 col-md-4 col-sm-6 mt-4" >

                        <SingleProduct  key={product.id}   product={product}/>
                        </div>
                    ))

                } 
            </div>
            
        </div>
    )
}

export default HomeTwo
