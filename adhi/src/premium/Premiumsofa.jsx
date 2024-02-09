import React, { useEffect, useState } from 'react'
import './premium.css'
import carproso from '../mycon/carproso.png'
import axios from 'axios';
function Premiumsofa() {
  const [presofa, setpresofa] = useState([])
  useEffect(() => {
    // Fetch categories from your Express server
    axios
      .get('http://localhost:5000/products/most-sell/ps:65a23b5fa48cc0053c481640')
      .then((response) => {
        setpresofa(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <div className='pre-sofa-main'>
      <div className='pre-title'>
        <h1>Premium Sofa</h1>
        <p>most selling</p>
        <img src={carproso} height={100} width={100} className='main-sofa-pg'></img>
      </div>
      <div className='ms-container'>
        {presofa.map((product) => (
          <div key={product._id} className='prod-card'>
            <img src={product.addimage} alt="" width={200} height={200} className='img-office' />
            <p>{product.modelno}</p>
            <p>{product.subcategoryId.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Premiumsofa