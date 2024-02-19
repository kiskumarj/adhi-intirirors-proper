import axios from 'axios';
import React, { useEffect, useState } from 'react'
import G03 from "../mycon/G03.png"
function Table() {
    const [presofa, setpresofa] = useState([])
    useEffect(() => {
        // Fetch categories from your Express server
        axios
            .get('https://api.adhiinteriors.com/products/most-sell/mst:65a3108be082b4eb1af51556')
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
                <h1>Mostselling Table</h1>
                <p>most selling</p>
                <img src={G03} height={100} width={100} className='main-sofa-pg'></img>
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

export default Table