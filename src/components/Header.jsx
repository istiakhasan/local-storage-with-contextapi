import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Container, Form, FormControl, Navbar,Dropdown } from 'react-bootstrap'

const Header = ({cart}) => {
    console.log(cart)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>I-NET</Navbar.Brand>
                <Navbar.Brand>

               <Form>
                   <FormControl 
                   className="m-auto"
                   placeholder="Search Your Products..." />
               </Form>

                </Navbar.Brand>
                <Navbar.Brand>


                <Dropdown align="end">
  <Dropdown.Toggle variant="success" id="dropdown-basic">
   {cart.length}
  </Dropdown.Toggle>

  <Dropdown.Menu style={{minWidth:370}}>
     {cart.length>0?(
      <>
        {
            cart.map(prod=>(
                <span className="cartItem" key={prod.id}>
                    <img className="cartItemImg" src={prod.image} />
                    <div className="cartItemDetails">
                        <span>{prod.Name}</span>
                        <span>{prod.Salary}</span>
                    </div>
                    <Button>Delete</Button>

                </span>
            ))
        }

        <Button className="btn btn-primary" style={{width:"95%",
                                margin:"0 10px"}}>Go to Cart</Button>
      </>

     ):(<span>Cart is empty</span>)}
  </Dropdown.Menu>
</Dropdown>
                </Navbar.Brand>

            </Container>
            
        </Navbar>
    )
}

export default Header
