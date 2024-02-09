import axios from 'axios';
import React, { useEffect, useState } from 'react'
import bedcard from '../mycon/bedcard.png'
function Premiumbed() {
  const  [presofa, setpresofa] = useState([])
  useEffect(() => {
    // Fetch categories from your Express server
    axios
      .get('http://localhost:5000/products/most-sell/pb:65a308c9f1b2a735b717cc6e')
      .then((response) => {
        setpresofa(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);
  return (
    <div>
       <div className='pre-sofa-main'>
           <div className='pre-title'>
             <h1>Premium bed</h1>
             <p>most selling</p>
             <img src={bedcard} height={100} width={100} className='main-sofa-pg'></img>
           </div>
           <div className='ms-container'>
           {presofa.map((product) => (
        <div key={product._id} className='prod-card'>
          <img src={product.addimage} alt="" width={200} height={200} className='img-office'   />
          <p>{product.modelno}</p>
          <p>{product.subcategoryId.name}</p>
        </div>
      ))}
           </div>
    </div>
    </div>
  )
}

export default Premiumbed