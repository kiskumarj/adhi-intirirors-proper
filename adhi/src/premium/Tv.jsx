import axios from 'axios';
import React, { useEffect, useState } from 'react'
import tv from '../mycon/tv.png'
function Tv() {
  const [presofa, setpresofa] = useState([])
  useEffect(() => {
    // Fetch categories from your Express server
    axios
      .get('https://api.adhiinteriors.com/products/most-sell/tv:65a31015e082b4eb1af5154e')
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
        <h1>TV case</h1>
        <p>most selling</p>
        <img src={tv} height={100} width={100} className='main-sofa-pg'></img>
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

export default Tv