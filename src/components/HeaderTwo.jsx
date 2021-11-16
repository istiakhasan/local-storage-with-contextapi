import React, { useState } from 'react'
import { Container, Dropdown, Form, FormControl, Nav, Navbar,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartState } from '../context/Context'

const HeaderTwo = () => {
    const {cart,RemoveToCat,productDispatch}=CartState()
    console.log(cart)

    const totalReducer=(preValue,currentValue)=>preValue+currentValue.Salary
    const total=cart.reduce(totalReducer,0).toFixed(2)
    
   
    return (
        <Navbar bg="dark" variant="dark" >
            <Container>

            <Navbar.Brand><Link to="/">I-NET</Link></Navbar.Brand>
            <Navbar.Brand>
                <Form>
                {/* <FormControl
                      
                      placeholder="search a product"
                      className="m-auto"
                      onChange={(e)=>{
                          productDispatch({
                              type:"FILTER_BY_SEARCH",
                              payload:e.target.value
                          })
                      }}
                      
                      /> */}
                </Form>
              

            </Navbar.Brand>
            <Navbar.Brand>
                <Nav>
                    <Dropdown align="end">
                        <Dropdown.Toggle>
                            {cart.length}
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{minWidth:"360px",padding:"10px"}}>
                            {cart.length>0?(
                                <>
                                
                             
                                { 
                                
                              cart.map(val=>(
                                  
                                <span className="cartItem" key={val.id}>
                                <img className="cartItemImg" src={val.image} />
                                <div className="cartItemDetails">
                                    <span>{val.Name}</span>
                                    <span>{val.Salary}</span>
                                </div>
                                <Button onClick={()=>RemoveToCat(val)}>Delete</Button>
                                
                            </span>
                          

                            
                           
                              )
                              
                          
                              
                              )
                            }   
                            <hr />   
                            <h3 className="text-end">Total Hired:${total}</h3>
                            <Button className="btn btn-primary w-100"><Link to="/cart">Go To Cart</Link></Button>
                            
                              
                              
                              
                              </>

                            ):(<span>Cart is Empty</span>)}
                           
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Navbar.Brand>

            </Container>
            
        </Navbar>
    )
}

export default HeaderTwo
