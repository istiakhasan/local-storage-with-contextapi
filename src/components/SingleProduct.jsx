import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Card } from 'react-bootstrap'
import { CartState } from '../context/Context'

const SingleProduct = ({product}) => {
    const{cart,addToCart,RemoveToCat}=CartState()
    
    return (
        <Card className="h-100 p-3">
            <Card.Img style={{height:"30vh",objectFit:"cover"}} variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.Name}</Card.Title>
                <Card.Text>{product.Profession}</Card.Text>
                <Card.Text>{product.Age}</Card.Text>
                <Card.Text>{product.Country}</Card.Text>
                <Card.Text>{product.Email}</Card.Text>
                <Card.Title>${product.Salary}</Card.Title>
            </Card.Body>
            {
                cart.some(p=>p.id===product.id)?(
                    <Button   onClick={()=>RemoveToCat(product)}  className="btn-danger mt-auto cusbtn ">Remove</Button>
                ):(
                    <Button onClick={()=>addToCart(product)} className="btn-success mt-auto  cusbtn">Hire Me</Button>

                )

            }
           
            
        </Card>
    )
}

export default SingleProduct
