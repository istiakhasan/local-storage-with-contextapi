import React from 'react'
import {Card,Button} from 'react-bootstrap'

const Product = ({developer,addToCart}) => {
    return (
       

<Card className="h-100  d-flex" >
  <Card.Img style={{height:"30vh",objectFit:"cover"}} variant="top" src={developer.image} />
  <Card.Body className="text-start ">
    <Card.Title>{developer.Name}</Card.Title>
    <Card.Text>
     {developer.Profession}
    </Card.Text>
    <Card.Text>{developer.Age}</Card.Text>
    <Card.Text>{developer.Country}</Card.Text>
    <Card.Text>{developer.Email}</Card.Text>
    <Card.Text>{developer.Salary}</Card.Text>
    

     
  </Card.Body>
 
    
      <Button onClick={()=>addToCart(developer)} className="robin mt-auto">Click Me</Button>
 
  
  
</Card>
            
        
    )
}

export default Product
