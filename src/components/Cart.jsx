import React from 'react'
import HeaderTwo from './HeaderTwo'
import{Button} from 'react-bootstrap'
import { CartState } from '../context/Context'


const Cart = () => {
    const{cart,RemoveToCat}=CartState()
    return (
        <div>
             <HeaderTwo />
          
             <div>
             { 
                                
                                cart.map(val=>(
                                    <>

                                    <div className="container">
                                    <div className="row mt-3">
                                        <div className="col-md-4"><img style={{width:"30vh",height:"30vh",objectFit:"cover"}} src={val.image} /></div>
                                        <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">


                                        <span>{val.Name}</span>
                                        <span>{val.Salary}</span>
                                        </div>
                                        <div className="col-md-4 d-flex justify-content-center align-items-center">


                                            <Button onClick={()=>RemoveToCat(val)}>Delete</Button>
                                        </div>
                                    </div>

                                    </div>




                                    
                                  


                              </>
                            
  
                              
                             
                                )
                                
                            
                                
                                )
                              }      
                 
                 
             </div>
            
        </div>
    )
}

export default Cart
