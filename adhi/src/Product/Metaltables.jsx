import React, { useEffect, useState } from 'react'
import Navbar from '../Page/Navbar'
import axios from 'axios';
import metalban from '../mycon/metalban.jpg'
import { Link } from 'react-router-dom';
function Metaltables() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  

  useEffect(() => {
    // Fetch all products initially
    axios.get('http://localhost:5000/products/sofa/mt:6527da3074f1568ba858f9e9')
      .then((response) => {
        setProducts(response.data);
        setAllProducts(response.data);
        
        // Extract unique subcategories from the products
        const uniqueSubcategories = [...new Set(response.data.map(product => product.subcategoryId.name))];
        setSubcategories(uniqueSubcategories);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function handleSubcategoryFilter(subcategoryName) {
    if (subcategoryName === 'all') {
      
      setProducts(allProducts);
    } else {
      
      const filtered = allProducts.filter(product => product.subcategoryId.name === subcategoryName);
      setProducts(filtered);
    }
  }
  return (
    <div>
      <div className='office-main'>
    <header><Navbar></Navbar></header>
    <h1 className='officeprod'>METAL TABLE</h1>
    <div className='banner'>
     <img src={metalban} className='imgb'></img>
    </div><br></br>
   

    {/* Subcategory buttons */}
    <div className='office-button'>
      <button value="all" onClick={() => handleSubcategoryFilter('all')} className='all-office'>All</button>
      {subcategories.map(subcategory => (
        <button key={subcategory} value={subcategory} onClick={() => handleSubcategoryFilter(subcategory)} className='button-filt'>
          {subcategory}
        </button>
      ))}
    </div><br></br>
    
     <div className='product-container-office'>
    
    {products.map((product) => (
       <div key={product._id} className='prod-card'>
       <Link to={`/product/${product._id}`}>
       <img src={product.addimage} alt="" width={200} height={200} className='img-office'   />
       <p>{product.modelno}</p>
       <p>{product.subcategoryId.name}</p>
       </Link>
     </div>
    ))}
    </div>
  </div>
    </div>
  )
}

export default Metaltables